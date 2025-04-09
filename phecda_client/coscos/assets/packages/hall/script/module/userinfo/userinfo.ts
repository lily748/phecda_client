import { instantiate, _decorator,Prefab,Node,SpriteFrame,Sprite,find,Label, RichText, sys } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;

import UserInfoView from "./userinfo_view";
import AudioManager from '../../../../../script/manager/audio_manager';
import { LoginServer } from '../../../../../script/net/login_serve';
import EventManager from '../../../../../script/manager/event_manager';
import CommonName from '../../model/CommonName';
import Utility from '../../../../../script/utility/utility';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HotUpdateManager } from '../../../../../script/framework/hotUpdate/HotUpdateManager';
import { conmmon_http } from '../../../../../script/net/common_http';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import HttpUtil from '../../../../../script/framework/net/http_util';

@ccclass('UserInfo')
export default class UserInfo extends Module<UserInfoView, null>{

    private initedHeadList: boolean = false
    private selectedHeadID: string
    private faq = null
    private lastClickTime: number = 0
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_userinfo";
        this.viewType = UserInfoView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        EventManager.instance.on(CommonName.EVENT.Respon_Refresh_UserInfo, this.setUserInfo, this);
        Utility.instance.onButtonClick(this.view.addCash, this._clickAddCash, this);
        Utility.instance.onButtonClick(this.view.withDraw, this._clickWithDraw, this);
        Utility.instance.onButtonClick(this.view.records, this._clickRecords, this);
        Utility.instance.onButtonClick(this.view.report, this._clickReport, this);
        Utility.instance.onButtonClick(this.view.account, this._clickAccount, this);
        Utility.instance.onButtonClick(this.view.bankCard, this._clickBankCard, this);
        Utility.instance.onButtonClick(this.view.gifts, this._clickGifts, this);
        Utility.instance.onButtonClick(this.view.aboutUs, this._clickAboutUs, this);
        // Utility.instance.onButtonClick(this.view.faq, this._clickFAQ, this);
        // Utility.instance.onButtonClick(this.view.security, this._clickSecurity, this);
        // Utility.instance.onButtonClick(this.view.notice, this._clickNotice, this);
        // Utility.instance.onButtonClick(this.view.version, this._clickVersion, this);
        Utility.instance.onButtonClick(this.view.logout, this._clickLogOut, this);
        Utility.instance.onButtonClick(this.view.btnVip, this._clickVips, this);
        Utility.instance.onButtonClick(this.view.refreshBtn, this._clickRefresh, this, false)
        Utility.instance.onButtonClick(this.view.avatar.node, this._clickAccount, this)
        Utility.instance.onButtonClick(this.view.btnLive, this._clickLive, this)
        Utility.instance.onButtonClick(this.view.page, this._clickVips, this)
        Utility.instance.onButtonClick(this.view.btnSetting, this._clickSetting, this);
        
        this.view.ver.string = "V" + HotUpdateManager.getLocalVersion("main");

        this.view.hallTemplate.setSelectToggle(CommonName.MODULE.UserInfo);
    }

    onDestroy() {
        this.initedHeadList = false
        EventManager.instance.off(CommonName.EVENT.Respon_Refresh_UserInfo, this.setUserInfo, this)
    }

    onShow() {
        this.setUserInfo()
        this.reqVipConfig()
    }

    private setUserInfo() {
        let user = UserDataModel.GetCurrentUser()
        if (!user || !this.view) return
        // this.view.userName.string = Utility.instance.thFilterPlayerName(user.nickname)
        this.view.id.string = "" + user.uid
        this.view.coin.string = "₹" + Utility.instance.numThousandsFormat(UserDataModel.GetCashAmount().toString())
        SpriteDataModel.SetHead(this.view.avatar, user.avatar_url);
        // this.view.vip.string = "VIP " + user.vip
        SpriteDataModel.LoadResources(`images/vip/vip${user.vip}`, (spf: SpriteFrame, err?: Error) => {
            if (err || !spf) {
                this.view.btnVip.active = false;
            } else {
                this.view.btnVip.getComponent(Sprite).spriteFrame = spf;
            }
        });
    }

    private onClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.UserInfo)
    }

    private onSwitchAccount() {
        LoginServer.logout()
        // NetworkManager.DestroyConnection("hall")
        ModuleManager.instance.showModule(CommonName.MODULE.Login, null, () => {
            ModuleManager.instance.destroyAllModule(CommonName.MODULE.Login)
        })
    }

    private _clickAddCash(){
        ModuleManager.instance.showModule(CommonName.MODULE.Recharge, CommonName.MODULE.UserInfo, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.UserInfo)
        })
    }

    private _clickWithDraw(){
        let user = UserDataModel.GetCurrentUser()
        if (!user || !this.view) return
        if(user.phone.trim() == ""){ //没绑手机号
            ResourceManager.loadRes("prefabs/recharge/bindPhone", Prefab, (err, prefab: Prefab) => {
                if (!err) {
                    if (!this || !this.isValid || !this.node || !this.node.isValid) {
                        return
                    }
                    let bind: Node = instantiate(prefab)
                    bind.active = true
                    bind.parent = this.node
                    find("bg/lbl_title",bind).getComponent(Label).string = "Bind Phone No"
                    find("bg/lbl_tip",bind).getComponent(Label).string = "To ensure the security of your funds, please link your mobile number."
                    let bindingPhone:any = bind.getComponent("bindingPhone")
                    bindingPhone.setCallBack(null,()=>{
                        conmmon_http.reqWithdrawalAccountList()
                    })
                }
            })
        }
        else{
            conmmon_http.reqWithdrawalAccountList()
        }
    }

    private _clickRecords(){
        ModuleManager.instance.showModule(CommonName.MODULE.BalanceRecord, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.UserInfo)
        })
    }

    private _clickReport(){
        ModuleManager.instance.showModule(CommonName.MODULE.BalanceReport, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.UserInfo)
        })
    }

    private _clickAccount(){
        ModuleManager.instance.showModule(CommonName.MODULE.AccountInfo, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.UserInfo)
        })
    }

    private _clickBankCard(){
        ModuleManager.instance.showModule(CommonName.MODULE.BankCards, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.UserInfo)
        })
    }

    private _clickGifts(){
        ModuleManager.instance.showModule(CommonName.MODULE.GiftCode);
    }

    private _clickAboutUs(){
        ModuleManager.instance.showModule(CommonName.MODULE.ChannelEntrance, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.UserInfo)
        })
    }

    private _clickSetting(){
        if (Date.now() - this.lastClickTime < 1000) return 
        
        this.createNode("setting", this.view.node,null)
        this.lastClickTime = Date.now()
    }
    
    private _clickFAQ(){
        this.showFAQ()
    }
    private _clickSecurity(){
      
    }

    private _clickNotice(){
      
    }
    private _clickVersion(){
      
    }

    private _clickLogOut() {
        let user = UserDataModel.GetCurrentUser();
        if (user) {
            // if (user.phone.length > 0) {
            //     this._reqLogOut();
            // } else {
            //     this._LogOutTips();
            // }
            
            this._reqLogOut();
        }
    }

    private _reqLogOut(){
        // sys.localStorage.clear()
        conmmon_http.reqLogOut(this, conmmon_http.rspLogOut.bind(this));
    }
    
    private _clickVips(){
        ModuleManager.instance.showModule(CommonName.MODULE.Vip,CommonName.MODULE.UserInfo,()=>{
            ModuleManager.instance.destroyModule(CommonName.MODULE.UserInfo)
        })
    }

    private _clickLive(){
        ModuleManager.instance.showModule(CommonName.MODULE.CustomerSupport)
    }

    private _clickRefresh(){
        conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
    }


    private showFAQ(info?: any) {
        if(this.faq == null){
            this.createNode("faq", this.view.node, (node: Node) => {
                this.faq = node.getComponent("faq")
                this.faq.setCallBack(()=>{
                    this.faq = null
                })
            })    
        }
        else{
            if(this.faq && this.faq.node.isValid){
                this.faq.node.active = true
            }
        }
    }

    private showPage(data:any){
        if(!this.node?.isValid) return
        if(!data) return

        let user = UserDataModel.GetCurrentUser()
        if (!user) return
        let next_lv = user.vip+1
        let max_lv = data.list[data.list.length-1].vip_level
        next_lv = next_lv > max_lv ? max_lv:next_lv

        let currData = data.list[user.vip]
        let nextData = data.list[next_lv]
        this.view.page.active = true
        if(typeof currData.my_bg_img == 'string'){
            let vipbg = this.view.page.getComponent(Sprite)
            SpriteDataModel.SetSprite(vipbg,currData.my_bg_img)
        }

        let rtx_deposit = find("rtx_deposit",this.view.page)
        if(rtx_deposit?.isValid){
            let rtx_str = "Up to the top"
            if(user.vip !== max_lv){
                rtx_str = Utility.instance.format(`<color=#000000>Upgrade to VIP{0} with</color><color=#f9ec08> ₹ {1} </color><color=#000000>left</color>`,""+next_lv,Utility.instance.numThousandsFormat(""+(nextData.mininum_deposit-user.history_deposit)/100))
            }
            rtx_deposit.getComponent(RichText).string = rtx_str
        }

        let maxDeposit = data.list[data.list.length-1].mininum_deposit
        let deposit = nextData.mininum_deposit == -1 ? maxDeposit:nextData.mininum_deposit
        let progressBar = find("progressBar/bar",this.view.page).getComponent(Sprite)    
        progressBar.fillRange = user.vip == max_lv ? 1:user.history_deposit/deposit
    }

    private createNode(name: string, parent: Node, callback: (node: Node) => void) {
        ResourceManager.loadRes("prefabs/account/" + name, Prefab, (err, prefab: Prefab) => {
            if (!err) {
                if (!this || !this.isValid || !this.node || !this.node.isValid) {
                    return
                }
                let preNode: Node = instantiate(prefab)
                preNode.setParent(parent)
                callback && callback(preNode)
            }
        })
    }

    private _LogOutTips(){
        ModuleManager.instance.showModule(CommonName.MODULE.Reminder,null,()=>{  });
    }

    /**
     * 请求vip配置
     * @returns 
     */
    public reqVipConfig() {
        let user = UserDataModel.GetCurrentUser();
        if (!user) return;
        ModuleManager.instance.showNetPrompt();
        let msg = {
            baseUrl: Http_Define.getVipConfig,
            params: {
                uid: user.uid,
            }
        }
        HttpUtil.http_get(msg, this._rspVipConfig.bind(this), () => { console.log("获取vip配置数据失败") });
    }

    private _rspVipConfig(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg?.code == 0) {
            if(msg.data){
                this.showPage(msg.data)
            }
        }
    }
}