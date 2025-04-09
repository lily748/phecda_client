
import { _decorator,tween,Sprite,Label,Node,find,instantiate,Button} from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { BalanceReport_View } from './balanceReport_View';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { PostData } from '../../model/HttpDataModel';
import { HttpDataModel } from '../../model/HttpDataModel';

const { ccclass, property } = _decorator;

const enum GameType {
    Games = "Games",
    Live = "Live Casino",
    Sports = "Sports",
    Slots = "Slots",
    Arcade = "Arcade",
    Other = "Other"
}

const enum GameIndex {
    Games = 0,
    Live = 1,
    Sports = 2,
    Slots = 3,
    Arcade = 4,
    Other = 5
}

@ccclass('BalanceReport')
export class BalanceReport extends Module<BalanceReport_View,null> {
    private max_bet:number = 1;
    private reportsList:any = {}

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/account/balanceReport";
        this.viewType = BalanceReport_View;
        this.modelType = null;
        this.layer = ViewLayer.Mid;
        this.needViewMask = true;
        this.needAnim = true;
    }

    onInit(){
        this.onReset()
        AudioManager.instance.playOpenWindowSound()
        Utility.instance.onButtonClick(this.view.btnClose, this.onCloseClick, this)
        Utility.instance.onButtonClick(this.view.selectTime, this.onSelectTimeClick, this)

        Utility.instance.onButtonClick(this.view.game_amount, ()=>this.onGameTypeClick(GameIndex.Games), this)
        Utility.instance.onButtonClick(this.view.live_amount, ()=>this.onGameTypeClick(GameIndex.Live), this)
        Utility.instance.onButtonClick(this.view.sports_amount, ()=>this.onGameTypeClick(GameIndex.Sports), this)
        Utility.instance.onButtonClick(this.view.slots_amount, ()=>this.onGameTypeClick(GameIndex.Slots), this)
        Utility.instance.onButtonClick(this.view.arcade_amount, ()=>this.onGameTypeClick(GameIndex.Arcade), this)
        Utility.instance.onButtonClick(this.view.other_amount, ()=>this.onGameTypeClick(GameIndex.Other), this)        
    }

    onShow(data: any){
        this.view.node.active = true;
        this.view.lbl_time.string = Utility.instance.formatTime(Date.now()/1000,"yyyy-MM-dd")        
        this.reqBalanceReport()
    }

    onCloseClick(){
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.showModule(CommonName.MODULE.UserInfo, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.BalanceReport)
        })
    }

    onSelectTimeClick(){
        if(this.view?.timeLayout?.children.length < 2){        
            this.initDataLayout()
        }
        this.view.timeLayout.active = !this.view.timeLayout.active

        let spr_arrow = find("spr_arrow",this.view.selectTime)
        spr_arrow.angle = this.view.timeLayout.active ? 0:-180
    }

    /**
     * 游戏类型响应
     * @param gameIndex
     */
    onGameTypeClick(gameIndex:number){
        let intentData = {
            index:gameIndex,
            time:this.view.lbl_time.string,
            reportsList:this.reportsList
        }
        ModuleManager.instance.showModule(CommonName.MODULE.BalanceReportDetails, intentData, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.BalanceReport)
        })
    }
    
    /**
     * 重置数据
     */
    onReset(){
        // this.view.lbl_time.string = ""
        this.view.spr_game.fillRange = 0    
        this.view.spr_live.fillRange = 0     
        this.view.spr_sports.fillRange = 0     
        this.view.spr_slots.fillRange = 0     
        this.view.spr_arcade.fillRange = 0     
        this.view.spr_other.fillRange = 0 

        this.view.lbl_game.string = ""    
        this.view.lbl_live.string = ""    
        this.view.lbl_sports.string = ""    
        this.view.lbl_slots.string = ""    
        this.view.lbl_arcade.string = ""    
        this.view.lbl_other.string = ""
    }

    initDataLayout(){        
        let prefab = this.view?.timeLayout?.children[0]
        if(!prefab?.isValid){
            return
        }
        let getPrefabNode = (index: number, parent: Node, prefab: Node)=> {
            if (parent.children.length <= index) {
                let node = instantiate(prefab)
                node.parent = parent            
                node.active = false
                return getPrefabNode(index, parent, prefab)
            }
            else {
                return parent.children[index]
            }
        }
    
        for (let i = 0; i < 8; i++) {     
            let item = getPrefabNode(i,this.view.timeLayout, prefab)
            item.active = true
            let lbl_time = find("lbl_time",item).getComponent(Label)
            lbl_time.string = Utility.instance.formatTime((Date.now()-86400000*i)/1000,"yyyy-MM-dd")
            item.on(Button.EventType.CLICK, ()=>{
                this.view.timeLayout.active = false
                find("spr_arrow",this.view.selectTime).angle = -180
                if(lbl_time.string == this.view.lbl_time.string) return

                this.view.lbl_time.string = lbl_time.string
                this.reqBalanceReport()      
            }, this)
        }
    }

    /**
     * 初始化数据
     * @param data 
     */
    private initData(data?:any){
        if(!data) return
        if(!this.node?.isValid) return
        let setData = (spr_fillRange:Sprite,lbl_name:Label,bet:number,downNode:Node)=>{
            let fillRange = bet/this.max_bet
            let start = fillRange==0 ? 1:0
            let end =  fillRange
            spr_fillRange.fillRange = start;
            tween(spr_fillRange).stop().to(0.8, { fillRange: end }, { easing: "cubicOut" }).start()

            lbl_name.string = bet == 0 ? "": ""+Utility.instance.numThousandsFormat(""+bet/100)
            let lbl_amount = find("lbl_amount",downNode)
            if(lbl_amount && lbl_amount.isValid){
                lbl_amount.getComponent(Label).string = Utility.instance.numThousandsFormat("₹ "+bet/100)
            }
        }

        this.max_bet = data.max_bet==0 ? 1:data.max_bet
        for(let i =0;i<data.reports.length;++i){
            if(!this.reportsList[data.reports[i].type_name]){
                this.reportsList[data.reports[i].type_name] = []
            }
            this.reportsList[data.reports[i].type_name] = data.reports[i]

            if(data.reports[i].type_name == GameType.Games){      
                setData(this.view.spr_game,this.view.lbl_game,data.reports[i].bet,this.view.game_amount)
            }
            else if(data.reports[i].type_name == GameType.Live){
                setData(this.view.spr_live,this.view.lbl_live,data.reports[i].bet,this.view.live_amount)
            }
            else if(data.reports[i].type_name == GameType.Sports){
                setData(this.view.spr_sports,this.view.lbl_sports,data.reports[i].bet,this.view.sports_amount)
            }
            else if(data.reports[i].type_name == GameType.Slots){
                setData(this.view.spr_slots,this.view.lbl_slots,data.reports[i].bet,this.view.slots_amount)
            }
            else if(data.reports[i].type_name == GameType.Arcade){
                setData(this.view.spr_arcade,this.view.lbl_arcade,data.reports[i].bet,this.view.arcade_amount)
            }
            else if(data.reports[i].type_name == GameType.Other){
                setData(this.view.spr_other,this.view.lbl_other,data.reports[i].bet,this.view.other_amount)
            }
        }
        // this.view.lbl_time.string = data.start_time+ " to "+data.end_time
    }

    /**
     * 请求 BalanceReport
     * @returns 
     */
    private reqBalanceReport(startTime?:string,endTime?:string){
        ModuleManager.instance.showNetPrompt();

        let params = {
            start_time: this.view.lbl_time.string,
            end_time: this.view.lbl_time.string,
        }

        let info: PostData = {
            Target: this,
            Url: Http_Define.getBalanceReport,
            Params: params,
            Callback: this._rspBalanceReport.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * BalanceReport 回调
     * @param msg 
     */
    private _rspBalanceReport(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
           if(!msg.data) return
           this.initData(msg.data)
        }
    }

  

}

