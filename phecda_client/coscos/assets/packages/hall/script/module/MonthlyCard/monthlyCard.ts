import { Label, tween, sys,RichText, _decorator,instantiate, Sprite, find, Button, PageView, v3,Tween, Widget} from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import MonthlyCardView from "./monthlyCard_view";
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { conmmon_http } from '../../../../../script/net/common_http';
import { SpriteDataModel } from '../../model/SpriteDataModel';

const { ccclass, property } = _decorator;

@ccclass('MonthlyCard')
export default class MonthlyCard extends Module<MonthlyCardView, null>{
    private monthCards:any = []
    private currIndex:number = 0
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/activityMonthlyCard";
        this.viewType = MonthlyCardView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnGo, this.onClickGo, this, false)
        Utility.instance.onButtonClick(this.view.btnClose, this.onClickClose, this, false)
        Utility.instance.onButtonClick(this.view.btnLeft, this.onClickLeft, this, false)
        Utility.instance.onButtonClick(this.view.btnRight, this.onClickRight, this, false)

        this.view.pageView.node.on(PageView.EventType.SCROLL_ENDED, this.scrollEnd, this)          
        this._reqMonthCardInfo()
    }

    private onClickClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.MonthlyCard)
    }

    private onClickLeft() {
        let count = this.view.pageView.getPages().length
        if(count < 1) return
                
        let index = this.view.pageView.getCurrentPageIndex()
        if(index == 0) return

        this.view.pageView.setCurrentPageIndex(index-1)
        index = this.view.pageView.getCurrentPageIndex()
        this.updateLeftRightBtn(index,count)          
    }

    private onClickRight() {
        let count = this.view.pageView.getPages().length
        if(count < 1) return
                
        let index = this.view.pageView.getCurrentPageIndex()
        if(count == index) return
        
        this.view.pageView.setCurrentPageIndex(index+1)
        index = this.view.pageView.getCurrentPageIndex()
        this.updateLeftRightBtn(index,count)  
    }

    updateLeftRightBtn(index:number,count:number){
        this.currIndex = index
        this.updatePage(index)
        this.view.btnLeft.getComponent(Button).interactable = index > 0
        this.view.btnRight.getComponent(Button).interactable = index < (count-1)
        
        this.view.btnLeft.getComponent(Sprite).spriteFrame = index == 0 ? this.view.frame[0]:this.view.frame[1]
        this.view.btnRight.getComponent(Sprite).spriteFrame = index == (count-1) ? this.view.frame[0]:this.view.frame[1]  
    }

    private onClickGo() {
        if(this.monthCards?.length == 0) return
        let index = this.view.pageView.getCurrentPageIndex()
        let info = this.monthCards[index]
        if(info?.status == 1){
            this._reqMonthCardRechargeUrl(info.type)
        }
        else if(info?.status == 2){
            this._reqMonthCardReward(info.type)
        }
    }

    onDestroy() {
        this.monthCards = []
        Tween.stopAllByTarget(this.node)
    }

    /**
     * 初始化数据
     * @param data 
     */
    private initData(data:any){        
        if(!data) return
        if(!this.node?.isValid) return

        this.monthCards = data.monthCards
        let pageList = this.view.pageView.getPages()
        if(pageList.length < 1) return
        if(data.monthCards?.length < 1){
            this.view.pageView.getPages()[0].active = false
            this.view.btnLeft.getComponent(Sprite).spriteFrame = this.view.frame[0]
            this.view.btnRight.getComponent(Sprite).spriteFrame = this.view.frame[0]
            return
        }
        for(let i = data.monthCards.length;i<pageList.length;++i){
            if(i == 0){
                this.view.pageView.getPages()[i].active = false
            }
            else{
                this.view.pageView.removePageAtIndex(i) 
            }
        }        
        for(let i = 0;i < data.monthCards.length; ++i){
            let info = data.monthCards[i]
            let page = pageList[i]
            let currPage = null
            if(page?.isValid){
                currPage = page
            }
            else{
                currPage = instantiate(pageList[0])                
                this.view.pageView.addPage(currPage)
            }
            if(!currPage) continue
            currPage.active = true
            if(typeof info.pic_cfg_url == 'string' && info.pic_cfg_url.trim() != ""){
                SpriteDataModel.SetSprite(currPage.getComponent(Sprite), info.pic_cfg_url)
            }

            if(typeof info.total_amount == 'number'){
               find("lbl_amount",currPage).getComponent(Label).string = Utility.instance.numThousandsFormat("₹"+(info.immediately_amount+info.day_amount*30)/100)
            }                
        }        
        this.currIndex = this.currIndex > this.view.pageView.getPages().length-1 ? this.view.pageView.getPages().length-1:this.currIndex
        this.view.pageView.scrollToPage(this.currIndex,0)
        this.updatePage(this.currIndex)

        this.view.btnLeft.getComponent(Button).interactable = this.currIndex > 0
        this.view.btnRight.getComponent(Button).interactable = this.currIndex < this.view.pageView.getPages().length-1
    }

    updatePage(index){
        let data = this.monthCards[index]
        if(!data) return  

        if(typeof data.status == 'number'){
            this.view.spr_yes2.active = data.status==1
            this.view.rxt_original.active = data.status==1
            this.view.lbl_amount.active = data.status==1
            this.view.lbl_original.active = data.status==1
            this.view.rxt_currget.active =  !this.view.lbl_original.active

            this.view.btnGo.getComponent(Sprite).grayscale = data.status ==3
            this.view.btnGo.getComponent(Button).interactable = data.status !==3

            this.view.spr_yes1.position = v3(data.status==1 ? -169:-139,data.status==1 ? -161:-192)
            this.view.rxt_get.position = v3(data.status==1 ? -136:-106,data.status==1 ? -165:-196)            
            if(data.status==1){
                if(typeof data.immediately_amount == 'number'){
                    let rtx_str = Utility.instance.format(`<color=#000000>Get</color><color=#ff0000> ₹{0}</color><color=#000000> right now.</color>`,Utility.instance.numThousandsFormat(""+data.immediately_amount/100))
                    this.view.rxt_get.getComponent(RichText).string = rtx_str
                    this.view.lbl_amount.getComponent(Label).string = Utility.instance.numThousandsFormat("₹"+data.buy_amount/100)
                }
                if(typeof data.day_amount == 'number'){
                    let rtx_str = Utility.instance.format(`<color=#000000>Get</color><color=#ff0000> ₹{0}</color><color=#000000> every day.</color>`,Utility.instance.numThousandsFormat(""+data.day_amount/100))
                    this.view.rxt_original.getComponent(RichText).string = rtx_str
                }
                if(typeof data.buy_amount == 'number' && typeof data.immediately_amount == 'number'){                    
                    this.view.lbl_original.getComponent(Label).string = "Priced:₹"+Utility.instance.numThousandsFormat(""+(data.immediately_amount+data.day_amount*30)/100)
                    this.scheduleOnce(()=>{this.view.spr_line.getComponent(Widget).updateAlignment()})                    
                }
            }
            else{
                if(typeof data.total_amount == 'number'){
                    let rtx_str = Utility.instance.format(`<color=#000000>Already get</color><color=#ff0000> ₹{0}</color>`,Utility.instance.numThousandsFormat(""+data.total_amount/100))
                    this.view.rxt_get.getComponent(RichText).string = rtx_str
                }
                if(typeof data.day_amount == 'number'){
                    let rtx_str = ""
                    if(data.status ==3){
                        rtx_str = Utility.instance.format(`<color=#d8d8d8>Get ₹{0}</color>`,Utility.instance.numThousandsFormat(""+data.day_amount/100))  
                    }
                    else{
                        rtx_str = Utility.instance.format(`<color=#000000>Get</color><color=#ff0000> ₹{0}</color>`,Utility.instance.numThousandsFormat(""+data.day_amount/100))
                    }
                    this.view.rxt_currget.getComponent(RichText).string = rtx_str
                }
            }            
        }
    }

    scrollEnd(){
        this.updateLeftRightBtn(this.view.pageView.getCurrentPageIndex(),this.view.pageView.getPages().length) 
    }

    /**
     * 定时请求充值结果 更新充值状态
     */
    private scheduledRequestRechargeResult(){
        if(!this.node?.isValid) return

        tween(this.node)
            .stop()
            .repeatForever(tween().stop().delay(30).call(()=>{
                this._reqMonthCardInfo()
            }))
            .start()
    }

    /**
     * 获取月卡活动信息
     */
    private _reqMonthCardInfo(){
        let info: PostData = {
            Target: this,
            Url: Http_Define.getMonthCardInfo,
            Params: {},
            Callback: this._rspMonthCardInfo.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt:true
        }
        HttpDataModel.Post(info);
    }

    /**
     * 月卡信息返回
     * @param msg 
     */
    private _rspMonthCardInfo(msg: any){
        if (msg && msg.code == 0) {
            if(msg.data){
                this.initData(msg.data)
            }
        }
    }

    /**
     * 请求充值链接
     */
    private _reqMonthCardRechargeUrl(type:number){
        ModuleManager.instance.showNetPrompt();
        let params = {
            type: type,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getMonthCardRechargeUrl,
            Params: params,
            Callback: this._rspMonthCardRechargeUrl.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * 充值链接返回
     * @param msg 
     */
    private _rspMonthCardRechargeUrl(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            if (msg.data) {
                if (msg.data.error_code == 0 && msg.data.recharge_url) {
                    sys.openURL(msg.data.recharge_url)
                    this.scheduledRequestRechargeResult()
                }
                else{
                    ModuleManager.instance.toastLong(msg.data.error_msg)
                }
            }
        }
    }

    /**
     * 请求月卡奖励
     */
    private _reqMonthCardReward(type:number){
        let params = {
            type: type,
        }
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.getMonthCardReward,
            Params: params,
            Callback: this._rspMonthCardReward.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * 月卡活动奖励返回
     * @param msg 
     */
    private _rspMonthCardReward(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            if (msg.data) {
                if (msg.data.error_code == 0 && typeof msg.data.reward_amount == 'number') {
                    this._reqMonthCardInfo()
                    conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
                    let tip = Utility.instance.format(`Successfully received ₹{0}`,Utility.instance.numThousandsFormat(""+msg.data.reward_amount/100))  
                    ModuleManager.instance.toastLong(tip)
                }
                else{
                    ModuleManager.instance.toastLong(msg.data.error_msg)
                }
            }
        }
    }
}