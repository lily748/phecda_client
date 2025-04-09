
import { _decorator, Node, instantiate, Label, tween, find, UITransform, Layout, Widget,UIOpacity,Sprite,Button,EditBox,view,math,Color, Prefab } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { RalanceRecords_View } from './balanceRecords_View';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { PostData } from '../../model/HttpDataModel';
import { HttpDataModel } from '../../model/HttpDataModel';
import { CommonFun } from '../../model/CommonFun';
import ResourceManager from '../../../../../script/manager/resoure_manager';
const { ccclass, property } = _decorator;

interface RecordItem {
    Item: Node,
    Amount: Label,
    OrderNo: Label,
    State: Label,
    Time: Label,
}

@ccclass('BalanceRecord')
export class BalanceRecord extends Module<RalanceRecords_View,null> {
    private totalPage: number = 1
    private currentPage: number = 1
    private itemList: Array<RecordItem>
    private maxShowCount = 10
    private currType = 0
    private chooseList:any = {}

    _selectIndex = 0;
    // _balanceReportModule = null;
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/account/balanceRecord";
        this.viewType = RalanceRecords_View;
        this.modelType = null;
        this.layer = ViewLayer.Mid;
        this.needViewMask = true;
        this.needAnim = true;
    }

    onInit(){
        this.onReset()
        AudioManager.instance.playOpenWindowSound()
        Utility.instance.onButtonClick(this.view.btnClose, this.onCloseClick, this)
        Utility.instance.onButtonClick(this.view.btnSelectType, this.onSelectTypeClick, this)
        Utility.instance.onButtonClick(this.view.btnSelectOrder, this.onSelectOrderClick, this)
        Utility.instance.onButtonClick(this.view.btnChooseType, this.onChooseTypeClick, this)
        Utility.instance.onButtonClick(this.view.btnCloseChooseType, this.onChooseTypeClick, this)
        Utility.instance.onButtonClick(this.view.selectTime, this.onSelectTimeClick, this)
                        
        this.view.edit_orderId.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onOrdrIdEditingDidEnded,this)

        this.view.recordValue.active = false
        this.itemList = []

        let pre = () => this.requestRecord(this.currentPage - 1)
        let next = () => this.requestRecord(this.currentPage + 1)
        this.view.pageTurn.setListeners({ Previous: pre.bind(this), Next: next.bind(this) })
        this.initTitleSelect();
    }

    initTitleSelect() {
        for (let i = 0; i < this.view.selectContent.children.length; i++) {
            let child = this.view.selectContent.children[i];
            Utility.instance.onButtonClick(child, ()=>{this.onTitleClick(i);}, this)
        }
        ResourceManager.preloadRes("prefabs/account/balanceReport", Prefab, null);
    }

    onTitleClick(index) {
        if (index == this._selectIndex) return;
        this._selectIndex = index;
        if (this._selectIndex == 0) {
            this.view.balanceContent.active = true;
            ModuleManager.instance.hideModule(CommonName.MODULE.BalanceReport);
        } else {
            this.view.balanceContent.active = false;
            ModuleManager.instance.showModule(CommonName.MODULE.BalanceReport);
        }

        for (let i = 0; i < this.view.selectContent.children.length; i++) {
            let child = this.view.selectContent.children[i];
            child.getChildByName("choose").active = (i == index);
            child.getChildByName("lbl_title").getComponent(Label).color = (i == index) ? new Color(255,255,255) : new Color(121,160,191);
        }
    }

    onShow(data: any){
        //计算最多显示个数
        this.view.content.getComponent(Widget).updateAlignment()
        this.maxShowCount = Math.floor(this.view.content.getComponent(UITransform).height / this.view.recordValue.getComponent(UITransform).height)
        let remain = this.view.content.getComponent(UITransform).height - this.maxShowCount*this.view.recordValue.getComponent(UITransform).height
        this.view.content.getComponent(Layout).spacingY = remain/(this.maxShowCount-1)
        this.view.content.getComponent(Layout).updateLayout()
        
        this.view.lbl_time.string = Utility.instance.formatTime(Date.now()/1000,"yyyy-MM-dd")
        this.reqBalanceConfig()  
    }

    /**
     * 重置数据
     */
    onReset(){
        this.view.lbl_type.string = "All"
        this.view.lbl_incom.string = ""    
        this.view.lbl_expence.string = ""
        if(this.view.chooseTypeBg.getComponent(Widget).enabled){
            this.view.chooseTypeBg.getComponent(Widget).updateAlignment()
            this.view.chooseTypeBg.getComponent(Widget).enabled = false //需禁用 不然和动画冲突
        }
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
                this.currentPage = 1
                this.reqBalanceChange(this.currType,this.currentPage)       
            }, this)
        }
    }

    private getItem(idx: number): RecordItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.view.recordValue : instantiate(this.view.recordValue)
            item.parent = this.view.content
            let temp: RecordItem = {
                Item: item,
                Amount: find("lbl_amount",item).getComponent(Label),
                OrderNo: find("lbl_orderNo",item).getComponent(Label),
                Time: find("lbl_time",item).getComponent(Label),
                State: find("lbl_origin",item).getComponent(Label),
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }

    private requestRecord(page: number) {
        if (page < 1 || page > this.totalPage) {
            return
        }
        
        let getSpriteFrame = (node:Node)=>{
            return find("Sprite",node).getComponent(Sprite)
        }
        getSpriteFrame(this.view.pageTurn.previous).spriteFrame = page <= 1 ? this.view.frame[1]:this.view.frame[0]
        getSpriteFrame(this.view.pageTurn.next).spriteFrame = page >= this.totalPage ? this.view.frame[1]:this.view.frame[0]
               
        this.reqBalanceChange(this.currType,page)
    }

    private showPage(list: any) {
        if(!this.node?.isValid) return  
        this.currentPage = list.cur_page
        // this.view.lbl_time.string = list.start_time+" to "+list.end_time    
        if(this.currentPage == 1){
            this.view.lbl_incom.string = "Income "+Utility.instance.numThousandsFormat("₹ "+list.income/100)     
            this.view.lbl_expence.string = "Expence "+Utility.instance.numThousandsFormat("₹ "+list.expense/100)
            this.totalPage = Math.ceil(list.total_record/this.maxShowCount)//总条数除以最大显示个数
        }                    
        this.view.pageTurn.setPage(this.currentPage,this.totalPage < 1 ? 1:this.totalPage)
        this.view.lbl_nodata.active = list.changes.length < 1
        for (let i = 0; i < this.maxShowCount; i++) {
            const element = list.changes[i]
            let item = this.getItem(i)
            if (element) {
                item.Item.active = true
                item.Time.string = Utility.instance.formatTime(element.log_time)
                item.OrderNo.string = element.order_id

                let itemOpacity = item.Item.getComponent(UIOpacity);
                itemOpacity.opacity = 0;
                tween(itemOpacity).stop().to(0.03*i, { opacity: 255 }).start()
                item.State.string = this.chooseList[element.balance_type]                
                item.Amount.string = Utility.instance.numThousandsFormat("₹ "+element.amount/100)
                item.Amount.color = new Color().fromHEX(element.amount > 0 ? "#00FF00":"#EA2121")
            } else {
                item.Item.active = false
            }
        }
    }

    onCloseClick(){
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.showModule(CommonName.MODULE.UserInfo, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.BalanceRecord)
            ModuleManager.instance.destroyModule(CommonName.MODULE.BalanceReport)
        })
    }
    
    /**
     * 选择按钮
     */
    onSelectTypeClick(){
        this.view.btnChooseType.active = true
        let contentSize = this.view.chooseTypeBg.getComponent(UITransform).contentSize
        let pos_y = -view.getVisibleSize().height/2-contentSize.height
        this.view.chooseTypeBg.position = new math.Vec3(0, pos_y, 0)
        tween(this.view.chooseTypeBg).stop().to(0.3, { position: new math.Vec3(0, -view.getVisibleSize().height/2, 0) }, { easing: "quadOut" }).start();
    }

    /**
     * 搜索订单按钮
     */
    onSelectOrderClick(){

    }

    /**
     * 关闭选择类型
     */
    onChooseTypeClick(){
        let contentSize = this.view.chooseTypeBg.getComponent(UITransform).contentSize
        let pos_y = -view.getVisibleSize().height/2-contentSize.height
        tween(this.view.chooseTypeBg).stop().to(0.3, { position: new math.Vec3(0, pos_y, 0) }, { easing: "quadIn" }).call(()=>{
            this.view.btnChooseType.active = false
        }).start();
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
     * 初始化ChooseType
     * @param data 
     */
    initChooseTypeView(data?:any){              
        if(!data) return
        if(!this.node?.isValid) return
        let defaultItem:Node=null //默认第一个
        data.sort((a, b) => a.type_id - b.type_id);
        for(let i = 0;i < data.length;++i){
            let info = data[i]
            if(!this.chooseList[info.type_id])  this.chooseList[info.type_id] = []
            this.chooseList[info.type_id] = info.type_name 
            let item: Node = instantiate(this.view.chooseTypeItem)
            item.active = true
            item.parent = this.view.chooseTypeContent
            let lbl_title = find("lbl_title",item).getComponent(Label)
            lbl_title.string = info.type_name
            if(i==0){
                defaultItem = item
                this.currType = info.type_id
                this.reqBalanceChange(this.currType,this.currentPage)
            }
            let btn_select = find("btn_select",item)
            let spr_select = find("spr_select",btn_select).getComponent(Sprite)
            btn_select.on(Button.EventType.CLICK, ()=>{
                this.currType = info.type_id
                spr_select.spriteFrame = this.view.chooseFrame[1]

                this.onReset()
                this.view.lbl_type.string = info.type_name                
                this.currentPage = 1
                this.reqBalanceChange(this.currType,this.currentPage)

                let preItem = find("btn_select/spr_select",defaultItem).getComponent(Sprite)
                preItem.spriteFrame = this.view.chooseFrame[0]
                defaultItem = item
                this.onChooseTypeClick()
            }, this)
            spr_select.spriteFrame = this.view.chooseFrame[i == 0 ? 1:0]
        }
    }

    /**
     * OrdrId
     * @param edit 
     */
     private onOrdrIdEditingDidEnded(edit: EditBox) {
        let content = edit.string
    }


     /**
     * 请求 BalanceConfig
     * @returns 
     */
     private reqBalanceConfig(){
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.getBalanceConfig,
            Params: {},
            Callback: this._rspBalanceConfig.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * BalanceConfig 回调
     * @param msg 
     */
    private _rspBalanceConfig(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            if(msg.data && msg.data.balance_type){
                this.initChooseTypeView(msg.data.balance_type)
            }
        }
    }

    /**
     * 请求 BalanceChange
     * @returns 
     */
    private reqBalanceChange(type:number,currPage:number,startTime?:string,endTime?:string){
        ModuleManager.instance.showNetPrompt();

        let params = {
            balance_type: type,
            start_time: this.view.lbl_time.string,
            end_time: this.view.lbl_time.string,
            cur_page: currPage,
            page_size: this.maxShowCount,
        }

        let info: PostData = {
            Target: this,
            Url: Http_Define.getBalanceChange,
            Params: params,
            Callback: this._rspBalanceChange.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * BalanceChange 回调
     * @param msg 
     */
    private _rspBalanceChange(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
           if(!msg.data) return
            this.showPage(msg.data)
        }
    }

}

