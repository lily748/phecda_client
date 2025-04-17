import { _decorator, sys,EditBox,director,Sprite,Color, Vec2 ,Button,Node,EventTouch,Widget,UITransform,Vec3,math, Prefab} from 'cc';
import { GameConfig } from '../../../../../script/com/game_config';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { HotUpdateManager } from '../../../../../script/framework/hotUpdate/HotUpdateManager';
import EventManager from '../../../../../script/manager/event_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import { LoginServer } from '../../../../../script/net/login_serve';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { StorageUserInfo, UserDataModel } from '../../model/UserDataModel';
import LoaclStorage from '../../../../../script/manager/local_storage';
import { PostData, HttpDataModel } from '../../model/HttpDataModel';
import { Env } from '../../../../../script/game/Env';
import LoginView from "./login_view";
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { conmmon_http } from '../../../../../script/net/common_http';
import { GameResConfig } from '../../../../../script/hall/GameResConfig';
import { HallModel } from '../../model/HallModel';
import { GameSDKInterface } from '../../../../../script/game/GameSDKInterface';
import { AdjustModel } from '../../model/AdjustModel';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { GameData } from '../../model/GameData';

const { ccclass, property } = _decorator;



@ccclass('Login')
export default class Login extends Module<LoginView, null>{

    private currentAccount: StorageUserInfo

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_login";
        this.viewType = LoginView;
        this.modelType = null;
        this.layer = ViewLayer.Low
    }

    private startPos: Vec2 = new Vec2()
    private offset: Vec2 = new Vec2()
    private isChatMove:boolean = false
    private lastClickTime = null;
    private clickCount = 0;

    onInit() {
        this.view.Chat.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        Utility.instance.onButtonClick(this.view.fastLogin, this.onFastLogin, this)
        Utility.instance.onButtonClick(this.view.next, this._clickNext, this)
        Utility.instance.onButtonClick(this.view.back, this._clickBack, this)
        Utility.instance.onButtonClick(this.view.btn_guest, this._reqGuestLogin, this)
        Utility.instance.onButtonClick(this.view.node, this.clickViewNode, this)

        EventManager.instance.on(CommonName.EVENT.LimitRegister, this.onLimitRegister, this)
        EventManager.instance.on(CommonName.EVENT.GoToHall, this.gotoHall, this)
        this.view.versionLabel.string = GameConfig.GameSiteID + " V " + HotUpdateManager.getLocalVersion("main")
        // this.view.switchPanel.SetLoginOtherListener(this.showPhoneLogin.bind(this))
        this.view.back.active=false;
        // this.view.switchPanel.Hide()
        this.view.loginPanel.Hide()
        this.view.accountPanel.active=false;
        this.setCurrentLoginUser()
        this._setNextState();
        this.view.account.node.on(EditBox.EventType.EDITING_DID_ENDED, () => {
            LoaclStorage.setString("LoginPhoneNumber", this.view.account.string)
            this._setNextState();
        })
        
        GameResConfig.getPackageInfo();
        GameResConfig.reqReportInfo();
        this._reqEnumlatorCheckLog();

        let guestLogOut = HallModel.GetLocalGuestFlag("guestLogOut");
        if (guestLogOut == "exit") {
            this.view.loginPanel.Show();
        } else {
            let userData = UserDataModel.GetLocalUserInfo();
            if (userData) {
                HallModel.quickLogin = false;
                this._reqTokenLogin(userData);
            } else {
                if (HallModel.quickLogin) {
                    HallModel.quickLogin = false;
                    this._reqGuestLogin();
                }
            }
        }
    }

    onDestroy() {
        if(this && this.view){
            this.view.Chat.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.view.Chat.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.view.Chat.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.view.Chat.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
        }
        EventManager.instance.off(CommonName.EVENT.LimitRegister, this.onLimitRegister, this)
        EventManager.instance.off(CommonName.EVENT.GoToHall, this.gotoHall, this)
        this.unscheduleAllCallbacks()
        GameResConfig.reqReportInfo();
    }

    onShow(info: any) {
        if(info && info=="logOut"){
            this.view.loginPanel.Show();
        }
    }

    private onLimitRegister(code: number) {
        this.showNetPrompt(false)
        ModuleManager.instance.showDialog_Confirm(LanguageManager.instance.getErrorMsgByID(code), null)
    }

    private onContact() {
        if (GameConfig.ServiceData.length > 0) {
            sys.openURL(GameConfig.ServiceData[0].url)
        }
    }

    private showPhoneLogin() {
        this.view.loginPanel.Show()
    }

    private setCurrentLoginUser() {
        let userList = UserDataModel.GetStorageUserList()
        this.currentAccount = userList[0]
        let phoneNum = this.currentAccount ? this.currentAccount.Phone : ""
        // this.view.accountLabel.string = phoneNum
    }

    private onFastLogin() {
        this._reqGuestLogin();
    }
  
    private _setNextState(){
        let phone = LoaclStorage.getString("LoginPhoneNumber", "");
        this.view.account.string=phone;
        let sp=this.view.next.getComponent(Sprite);
        let btn = this.view.next.getComponent(Button)
        if(phone.length>0){
            sp.color=new Color().fromHEX("#FFA200");
            btn.interactable = true;
        }else{
            sp.color=new Color().fromHEX("#15334B");
            btn.interactable = false;
        }
    }


    //请求模拟器检查日志上报
    private _reqEnumlatorCheckLog() {
        if (!GameConfig.IsReportDeviceInfo) return;
        ModuleManager.instance.showNetPrompt();
        let params = {
            channel_id: GameConfig.GameSiteID,
            device_id: Env.HDCode,
            log: GameSDKInterface.getEmulatorCheckInfo(true)
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.enumlatorCheckLog,
            Params: params,
            Callback:this._rspEnumlatorCheckLog.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspEnumlatorCheckLog(msg:any) {
        if (msg && msg.code==0) {
            console.log("enumlatorlog success", msg.data);
        } else {
            console.log("enumlatorlog fail");
        }
    }

    //请求游客登录
    private _reqGuestLogin() {
        ModuleManager.instance.showNetPrompt();
        let params = {
            login_type: 0,
            product_id: 10000,
            channel_id: GameConfig.GameSiteID,
            device_code: Env.HDCode,
            client_version: HotUpdateManager.getLocalVersion("main"),
            bundle_name: GameConfig.packageName,
            os_type: Env.HDType,
            agent_id:GameConfig.agentID,
            ad_info:JSON.stringify(LoginServer.getAFBaseConfig()),
            adjust_info:JSON.stringify(LoginServer.getAdjustBaseConfig()),
            suspect_level:GameSDKInterface.getEmulatorCheckInfo(),
            self_attr_id:GameData.getSelfAttrId()
        }
        if(sys.isNative){
            console.log("游客登录信息：", JSON.stringify(params));
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.login,
            Params: params,
            Callback: this._rspGuestLogin.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspGuestLogin(msg: any) {
        if (msg && msg.code==0) {
            this._loginSuccess(msg.data);
        } else {
            this._loginFail();
        }
    }

    //请求token登录
    private _reqTokenLogin(userData:any) {
        ModuleManager.instance.showNetPrompt();
        let params = {
            token: userData.Cer,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.login_token,
            Params: params,
            Callback: this._rspTokenLogin.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspTokenLogin(msg: any) {
        if (msg && msg.code == 0) {
            this._loginSuccess(msg.data);
        } else {
            this._loginFail();
        }
    }

    private _loginSuccess(msg:any){
        UserDataModel.SetCurrentUser(msg.user_info);
        conmmon_http.reqGetGameList(this, conmmon_http.rspGetGameList.bind(this));
        HallModel.SetLocalGuestFlag("guestLogOut", "");
    }

    private _loginFail(){
        UserDataModel.clearToken();
        this.view.loginPanel.Show();
    }

    public gotoHall(msg: any) {
        if (director.getScene().name != "main") {
            ModuleManager.instance.hideModule("NetPrompt")
            ModuleManager.instance.hideAllModule()
            return
        }
        ModuleManager.instance.showModule(CommonName.MODULE.Hall, msg, () => {
            ModuleManager.instance.hideNetPrompt()
            ModuleManager.instance.hideModule(CommonName.MODULE.Loading)
            ModuleManager.instance.destroyModule(CommonName.MODULE.Login)
        })
    }

    private _clickNext(){
        this.view.accountPanel.active=false;
        this.view.back.active=true;
        this.view.loginPanel.Show();
    }

    private _clickBack(){
        this.view.back.active=false;
        this.view.loginPanel.Hide();
        this.view.accountPanel.active=true;
    }

    private showSwitchPanel() {
        this.view.switchPanel.Show()
    }

    private onTouchStart(event: EventTouch) {
        this.startPos = event.getUILocation()
        this.offset = this.startPos.clone().subtract(new Vec2(this.view.Chat.position.x, this.view.Chat.position.y))
        this.view.Chat.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.view.Chat.on(Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.view.Chat.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
    }

    private onTouchMove(event: EventTouch) {
        if(!this.isChatMove){
            this.view.Chat.getComponent(Sprite).spriteFrame = this.view.ChatFrame[0]
            this.view.ChatIcon.getComponent(Widget).updateAlignment()
        }
        let currentPos = event.getUILocation();
        let newPosition = currentPos.clone().subtract(this.offset)
        this.view.Chat.position = new Vec3(newPosition.x, newPosition.y)
        this.isChatMove = true
    }

    private onTouchEnd(event: EventTouch) {        
        let currentPos = event.getUILocation();
        let dis = math.Vec2.distance(currentPos, this.startPos);
        this.checkChatPos(dis)
    }

    private onTouchCancel() {        
        this.checkChatPos(999) 
    }

    /**
     * 核验chat的位置
     */
    private checkChatPos(dis:number){
        this.view.Chat.getComponent(Sprite).spriteFrame = this.view.ChatFrame[1]
        this.view.Chat.getComponent(Widget).right = 0
        this.view.ChatIcon.getComponent(Widget).updateAlignment()

        let chatY = this.view.Chat.position.y
        let chatH = this.view.Chat.getComponent(UITransform).height
        let viewH = this.node.getComponent(UITransform).height
        let topNodeH = 80
        let bottomNodeH = 80
        if(chatY > 0 && chatY+chatH/2 > viewH/2-chatH){
            this.view.Chat.position = new Vec3(this.view.Chat.position.x,viewH/2-topNodeH-chatH)  
        }
        if(chatY < 0 && chatY-chatH/2 < -viewH/2+bottomNodeH){
            this.view.Chat.position = new Vec3(this.view.Chat.position.x,-viewH/2+bottomNodeH+chatH)  
        }
        
        if(!this.isChatMove || dis < 40){
            let user = UserDataModel.GetCurrentUser()
            let showID = user ? user.show_id : "NotLoggedIn"
            sys.openURL("https://t.me/C1Gamesone")//GameConfig.CustomerUrl+`?userid=${showID}`)
        } 
        this.isChatMove = false
        this.view.Chat.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.view.Chat.off(Node.EventType.TOUCH_END, this.onTouchEnd, this) 
        this.view.Chat.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
    }

    clickViewNode() {
        const currentTime = Date.now();
        // console.log("间隔时间：", this.lastClickTime ? (currentTime - this.lastClickTime):0);
        if (this.lastClickTime && (currentTime - this.lastClickTime <= 200)) {
            this.clickCount++;
        } else {
            this.clickCount = 1;
        }
        this.lastClickTime = currentTime;
        if (this.clickCount === 5) {
            this.showVersionInfo();
            this.clickCount = 0;
        }
    }

    showVersionInfo() {
        this.view.versionLabel.node.active = true;
    }
}