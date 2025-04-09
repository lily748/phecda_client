
import { _decorator, Node, instantiate, Label, tween, find,UIOpacity, Sprite,PageView } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { BalanceReportDetails_View } from './balanceReportDetails_View';
const { ccclass, property } = _decorator;

enum GameType {
    game_node = "Games",
    live_node = "Live Casino",
    sports_node = "Sports",
    slots_node = "Slots",
    arcade_node = "Arcade",
    other_node = "Other"
}

@ccclass('BalanceReportDetails')
export class BalanceReportDetails extends Module<BalanceReportDetails_View,null> {
    private currPageIndex:number = 0
    private reportsList:any = []
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/account/balanceReportDetails";
        this.viewType = BalanceReportDetails_View;
        this.modelType = null;
        this.layer = ViewLayer.Mid;
        this.needViewMask = true;
        this.needAnim = true;
    }

    onInit(){
        AudioManager.instance.playOpenWindowSound()
        Utility.instance.onButtonClick(this.view.btnClose, this.onCloseClick, this)

        this.view.lbl_nodata.active = false
        this.view.recordValue.active = false
        this.view.pageView.node.on(PageView.EventType.SCROLL_ENDED, this.onScrolEnded, this)
    }

    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)
        this.initView(intentData)
    }

    /**
     * 初始化界面
     * @param data 
     */
    initView(data?:any){
        if(!data) return       
        this.currPageIndex = data.index
        this.reportsList = data.reportsList
        this.view.pageView.scrollToPage(data.index,0)
        for(let page of this.view.pageView.getPages()){
            let lbl_time = find("lbl_time",page).getComponent(Label)
            lbl_time.string = data.time

            let lbl_amount = find("lbl_amount",page).getComponent(Label)
            lbl_amount.string = Utility.instance.numThousandsFormat("₹ "+data.reportsList[GameType[page.name]].bet/100)
        }
        let currItem = this.view.pageView.getPages()[this.currPageIndex]
        this.showContentList(data.reportsList[GameType[currItem.name]])
    }

    /**
     * 显示列表
     * @param data 
     */
    showContentList(data?:any){
        this.view.lbl_nodata.active = true
        this.view.content.destroyAllChildren()
        if(!data) return        
        let vendors = data.vendors
        if(!vendors) return
        this.view.lbl_nodata.active = vendors.length < 1
        for(let i = 0;i<vendors.length;++i){
            let info = vendors[i]
            let item: Node = instantiate(this.view.recordValue)
            item.active = true           
            let spr_coin = find("spr_coin",item).getComponent(Sprite)
            spr_coin.spriteFrame = this.view.iconFrame[this.currPageIndex]

            let lbl_title = find("lbl_title",item).getComponent(Label)
            lbl_title.string = info.vendor_name
            let lbl_origin = find("lbl_origin",item).getComponent(Label)
            lbl_origin.string = Utility.instance.numThousandsFormat("₹ "+info.bet/100)

            let itemOpacity = item.getComponent(UIOpacity);
            itemOpacity.opacity = 0;
            tween(itemOpacity).stop().to(0.05*i, { opacity: 255 }).start()
            item.parent = this.view.content
        }
    }

    onCloseClick(){
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.showModule(CommonName.MODULE.BalanceReport, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.BalanceReportDetails)
        })
    }

    private onScrolEnded(event: any, customEventData: string) {
        this.currPageIndex = event.getCurrentPageIndex()
        let currItem = this.view.pageView.getPages()[this.currPageIndex]
        if(currItem && currItem.isValid){
            this.showContentList(this.reportsList[GameType[currItem.name]])
        }
    }
    
}

