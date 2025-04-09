
import { _decorator, Component, Node, EditBox, Toggle, Button, Label, find, sys,Color } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import LoaclStorage from '../../../../../script/manager/local_storage';
import { conmmon_http } from '../../../../../script/net/common_http';
import { VerifyCodeType, LoginServer } from '../../../../../script/net/login_serve';
import { UISwitcher } from '../../../../../script/utility/ui_extend/ui_switcher';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { GameConfig } from '../../../../../script/com/game_config';
import { Env } from '../../../../../script/game/Env';
import { HotUpdateManager } from '../../../../../script/framework/hotUpdate/HotUpdateManager';
import { HttpDataModel } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { PostData } from '../../model/HttpDataModel';
import { UserDataModel } from '../../model/UserDataModel';
import { GameSDKInterface } from '../../../../../script/game/GameSDKInterface';
import { HallModel } from '../../model/HallModel';
import { GameData } from '../../model/GameData';

const { ccclass, property } = _decorator;

@ccclass('LoginAccount')
export class LoginAccount extends Component {

    @property(Node)
    back: Node

    @property(UISwitcher)
    switcher: UISwitcher
    @property(EditBox)
    phone: EditBox
    @property(EditBox)
    pwd: EditBox
    @property(EditBox)
    otp: EditBox
    @property(Toggle)
    pwdVisible: Toggle
    @property(EditBox)
    verifyCode: EditBox
    @property(Node)
    getCode: Node
    @property(Node)
    useCode: Node
    @property(Node)
    usePwd: Node
    @property(Node)
    confirm: Node
    @property(Node)
    signIn: Node
    @property(Node)
    noLogin: Node

    @property(Toggle)
    rememberMe: Toggle
    @property(Node)
    btnOPT: Node
    @property(Node)
    otpNode: Node
    @property(Node)
    password: Node
    @property(Node)
    btn_code_login: Node
    @property(Node)
    btn_pass_login: Node
    @property(Node)
    btn_forgetpw: Node

    private useLoginType: number = 1
    private timeNum: number = 60;
    private login_type: number = 1

    onLoad() {
        // Utility.instance.onButtonClick(this.back, () => {
        //     AudioManager.instance.playCloseWindowSound()
        //     this.Hide()
        // }, this, false)

        Utility.instance.onToggleClick(this.pwdVisible, () => {
            this.pwdVisible.node.getChildByPath("Off").active = !this.pwdVisible.isChecked
            if (this.pwdVisible.isChecked) {
                this.pwd.inputFlag = EditBox.InputFlag.DEFAULT
            } else {
                this.pwd.inputFlag = EditBox.InputFlag.PASSWORD
            }
        }, this)
        Utility.instance.onButtonClick(this.signIn, this.onConfirm, this)
        // Utility.instance.onToggleClick(this.rememberMe, this._onRememberMeTog, this)
        Utility.instance.onButtonClick(this.btnOPT, this._clickOPT, this)
        this.phone.node.on(EditBox.EventType.EDITING_DID_ENDED, () => {
            LoaclStorage.setString("LoginPhoneNumber", this.phone.string)
        })
        this.pwd.node.on(EditBox.EventType.EDITING_DID_ENDED, () => {
            LoaclStorage.setString("LoginPassword", this.pwd.string)
        })
        Utility.instance.onButtonClick(this.btn_code_login, this.onCodeLogin, this)
        Utility.instance.onButtonClick(this.btn_pass_login, this.onPassWordLogin, this)
        Utility.instance.onButtonClick(this.btn_forgetpw, this.onClickBtnForgetpw, this)
        this.password.active=false;
        this.btn_forgetpw.active = false
    }

    onDestroy() {
        // this.regVerifyCodeEvent(false)
        this.unscheduleAllCallbacks();
    }

    private onCodeLogin() {
        this.otpNode.active = true;
        this.password.active = false;
        this.btn_forgetpw.active = false
        this.login_type = 1;
        this.btn_code_login.getComponent(Label).color = new Color().fromHEX("#FFFFFF")
        this.btn_pass_login.getComponent(Label).color = new Color().fromHEX("#90a0ad")
    }
    private onPassWordLogin() {
        this.otpNode.active = false;
        this.password.active = true;
        this.btn_forgetpw.active = true
        this.login_type = 2;
        this.btn_code_login.getComponent(Label).color = new Color().fromHEX("#90a0ad")
        this.btn_pass_login.getComponent(Label).color = new Color().fromHEX("#FFFFFF")
    }

    private onClickBtnForgetpw(){
        ModuleManager.instance.showModule(CommonName.MODULE.ForgotPassword)        
    }

    private regVerifyCodeEvent(reg: boolean) {
        if (reg) {
            EventManager.instance.on(CommonName.EVENT.Respon_VerifyCode, this.responVerifyCode, this)
        } else {
            EventManager.instance.off(CommonName.EVENT.Respon_VerifyCode, this.responVerifyCode, this)
        }
    }

    public Show() {
        // this.regVerifyCodeEvent(true)
        AudioManager.instance.playOpenWindowSound()
        this.phone.string = LoaclStorage.getString("LoginPhoneNumber", "")
        // this.pwd.string = LoaclStorage.getString("LoginPassword", "")
        this.node.active = true
        this.setBtnBack(true)
    }

    public Hide() {
        // this.regVerifyCodeEvent(false)
        this.node.active = false
        this.setBtnBack(false)
    }

    private setBtnBack(flag = true) {
        let btn_back = this.node.parent.getChildByName("btn_back");
        if (btn_back) btn_back.active = flag;
    }


    private showUsePwd() {
        this.useLoginType = 1
        this.switcher.changeStateByName("UsePwd")
    }

    private showUseCode() {
        this.useLoginType = 2
        this.switcher.changeStateByName("UseCode")
    }

    private getLoginCode() {
        if (this.phone.string.trim().length < 8) {
            this.showToast(LanguageManager.instance.getErrorMsgByID(2), true);
            // ModuleManager.instance.toastLong(LanguageManager.instance.getErrorMsgByID(2))
            return
        }
        this.sendVerifyCode(this.phone.string, VerifyCodeType.Login)
    }

    private responVerifyCode(msg: any) {
        ModuleManager.instance.hideNetPrompt()
        this.showCountDown(msg.CountDown)
        this.showToast(LanguageManager.instance.getLangByID("login_verify_code_send_successfully"), true);
        // ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("login_verify_code_send_successfully"))
    }

    private showCountDown(time: number) {
        let btn = this.getCode.getComponent(Button)
        btn.interactable = false
        let label = btn.node.getChildByName("Label").getComponent(Label)
        let cur = time - 1
        label.string = `(${cur}s)`
        let countDown = () => {
            cur--
            if (cur < 0) {
                btn.interactable = true
                label.string = LanguageManager.instance.getLangByID("login_get_verify_code")
                this.unscheduleAllCallbacks()
                return
            }
            label.string = `(${cur}s)`
        }
        this.schedule(countDown, 1, time - 1)
    }

    private sendVerifyCode(phone: string, codeType: VerifyCodeType) {
        let params = {phone:this.getWholePhoneNum(phone),type:codeType}
        conmmon_http.sendVerifyCode(this,params,this.responVerifyCode.bind(this));
    }

    private getWholePhoneNum(phone: string): string {
        return `+91-${phone}`
    }

    private onConfirm() {
        let num = this.phone.string
        const pwd = this.pwd.string
        const otp = this.otp.string
        if (num == "") {
            this.showToast(LanguageManager.instance.getLangByID("phone number cannot be empty"), false);
            // ModuleManager.instance.toast(LanguageManager.instance.getLangByID("phone number cannot be empty"))
            return
        }
        if(this.login_type==1){
            if (otp == "") {
                this.showToast(LanguageManager.instance.getLangByID("verification code cannot be empty"), false);
                // ModuleManager.instance.toast(LanguageManager.instance.getLangByID("verification code cannot be empty"))
                return
            }
        }else{
            if (pwd == "") {
                this.showToast(LanguageManager.instance.getLangByID("password cannot be empty"), false);
                // ModuleManager.instance.toast(LanguageManager.instance.getLangByID("password cannot be empty"))
                return
            }
        }
       
        num = this.getWholePhoneNum(num);
        this.ReqAccountLogin(num, otp, pwd);
    }

    //请求账号密码登录
    public ReqAccountLogin(phone: string, otp: string, pwd: string) {
        ModuleManager.instance.showNetPrompt();
        let params = {
            login_type: this.login_type,
            product_id: 10000,
            channel_id: GameConfig.GameSiteID,
            device_code: Env.HDCode,
            client_version: HotUpdateManager.getLocalVersion("main"),
            bundle_name: GameConfig.packageName,
            os_type: Env.HDType,
            phone: phone,
            password: pwd,
            captcha:otp,
            agent_id:GameConfig.agentID,
            ad_info:JSON.stringify(LoginServer.getAFBaseConfig()),
            adjust_info:JSON.stringify(LoginServer.getAdjustBaseConfig()),
            suspect_level:GameSDKInterface.getEmulatorCheckInfo(),
            self_attr_id:GameData.getSelfAttrId()
        }
        if(sys.isNative){
            console.log("---------login ad_info:",params.ad_info,"adjust_info:",params.adjust_info);
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.login,
            Params: params,
            Callback: this._rspAccountLogin.bind(this),
            ForceRequest: true,
            FailToast: false,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspAccountLogin(msg: any) {
        if (msg && msg.code==0) {
            this._accountLoginSuccess(msg.data);
        } else {
            this.showToast(msg.message, true);
            this._accountLoginFail();
        }
    }

    private _accountLoginSuccess(msg: any) {
        UserDataModel.SetCurrentUser(msg.user_info);
        conmmon_http.reqGetGameList(this,conmmon_http.rspGetGameList.bind(this));
        HallModel.SetLocalGuestFlag("guestLogOut", "");
    }

    private _accountLoginFail() {
        UserDataModel.clearToken();
    }

    private _onRememberMeTog(){
        if (this.rememberMe.isChecked) {
        } else {
        }
    }

    private _clickNoLogin(){

    }

    private _clickOPT(){
        let phoneNum = this.phone.string;
        if (phoneNum.length < 1) {
            this.showToast(" phone number cannot be empty", true)
            // ModuleManager.instance.toastLong(" phone number cannot be empty");
            return;
        }
        phoneNum = this.getWholePhoneNum(phoneNum);
        this._ReqOTP(phoneNum);
    }

    //请求获取验证码
    private _ReqOTP(phone: string) {
        ModuleManager.instance.showNetPrompt();
        let params = {
            phone: phone,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.sendSms,
            Params: params,
            Callback: this._rspOtpInfo.bind(this),
            ForceRequest: true,
            FailToast: false,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspOtpInfo(msg: any){
        if (msg && msg.code == 0) {
            this.showToast("otp has been sent successfully", true);
            // ModuleManager.instance.toastLong("otp has been sent successfully");
            this.btnOPT.getComponent(Button).interactable = false;
            find("Label", this.btnOPT).getComponent(Label).string = this.timeNum + "s";
            this.schedule(this._updateOTPState, 1);
        } else {
            this.showToast(msg.message, true);
        }
    }

    showToast(text, isLong) {
        let toastInfo = { 
            text: text,
            long: isLong,
            startPos: { y: 250 },
            offset: { y: 50 }
        }
        ModuleManager.instance.showModule("Toast", toastInfo)
    }

    private _updateOTPState() {
        if (this.timeNum > 1) {
            this.timeNum--;
            find("Label", this.btnOPT).getComponent(Label).string = this.timeNum + "s";
        } else {
            this.unschedule(this._updateOTPState);
            this.timeNum = 60;
            this.btnOPT.getComponent(Button).interactable = true;
            find("Label", this.btnOPT).getComponent(Label).string = "OTP";
        }
    }
}