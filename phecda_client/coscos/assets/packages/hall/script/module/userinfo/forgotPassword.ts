
import { _decorator, Button, find, Label, EditBox,Color } from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { ForgotPasswordView } from './forgotPassword_view';
import CommonName from '../../model/CommonName';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { UserDataModel } from '../../model/UserDataModel';
import { conmmon_http } from '../../../../../script/net/common_http';
import { GameConfig } from '../../../../../script/com/game_config';

const { ccclass, property } = _decorator;

@ccclass('ForgotPassword')
export class ForgotPassword extends Module<ForgotPasswordView, null> {

    private timeNum: number = 60;

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/account/forgotPassword";
        this.viewType = ForgotPasswordView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onLoad() {

    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnClose, this._clickBack, this);
        Utility.instance.onButtonClick(this.view.btnContinue, this._clickContinue, this);
        Utility.instance.onButtonClick(this.view.btnOPT, this._clickSend, this);
        Utility.instance.onToggleClick(this.view.pwdVisible, () => {
            this.view.pwdVisible.node.getChildByPath("Off").active = !this.view.pwdVisible.isChecked
            if (this.view.pwdVisible.isChecked) {
                this.view.pwd.inputFlag = EditBox.InputFlag.PASSWORD
            } else {
                this.view.pwd.inputFlag = EditBox.InputFlag.DEFAULT
            }
        }, this)

        Utility.instance.onToggleClick(this.view.confirmPwdVisible, () => {
            this.view.confirmPwdVisible.node.getChildByPath("Off").active = !this.view.confirmPwdVisible.isChecked
            if (this.view.confirmPwdVisible.isChecked) {
                this.view.confirm_pwd.inputFlag = EditBox.InputFlag.PASSWORD
            } else {
                this.view.confirm_pwd.inputFlag = EditBox.InputFlag.DEFAULT
            }
        }, this)

        let user = UserDataModel.GetCurrentUser();
        if (user && user.phone.length > 0) {
            this.view.phone.enabled = false;
            this.view.phone.string = user.phone;
        }

        this._showViewStauts(false)
    }

    private _showViewStauts(pwStatus:boolean = false){
        this.view.accountNode.active = !pwStatus
        this.view.otpNode.active = !pwStatus
        this.view.passwordNode.active = pwStatus
        this.view.confirmPasswordNode.active = pwStatus

        this.view.spr_enter.spriteFrame = this.view.frame_enter[pwStatus?1:0]
        this.view.lbl_pwtitle.color = new Color().fromHEX(pwStatus ? "#FFFFFF":"#8DA0C9")
        this.view.lbl_singIn.string = pwStatus ? "Complete":"Continue"
    }

    private _clickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.ForgotPassword);
    }

    private _clickSend() {
        let phoneNum = this.view.phone.string;
        if (phoneNum.length < 1) {
            ModuleManager.instance.toastLong(" phone number cannot be empty");
            return;
        }
        let index = phoneNum.indexOf("+91-");
        if (index < 0) {
            phoneNum = this.getWholePhoneNum(phoneNum);
        }
        this._ReqOTP(phoneNum);
    }

    private getWholePhoneNum(phone: string): string {
        return `+91-${phone}`
    }

    //请求获取验证码
    private _ReqOTP(phone: string) {
        let params = {
            phone: phone,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.sendSms,
            Params: params,
            Callback: this._rspOtpInfo.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspOtpInfo(msg: any) {
        if (msg && msg.code == 0) {
            ModuleManager.instance.toastLong("otp has been sent successfully");
            this.view.btnOPT.getComponent(Button).interactable = false;
            find("Label", this.view.btnOPT).getComponent(Label).string = this.timeNum + "s";
            this.schedule(this._updateOTPState, 1);
        }
    }

    private _updateOTPState() {
        if (this.timeNum > 1) {
            this.timeNum--;
            find("Label", this.view.btnOPT).getComponent(Label).string = this.timeNum + "s";
        } else {
            this.unschedule(this._updateOTPState);
            this.timeNum = 60;
            this.view.btnOPT.getComponent(Button).interactable = true;
            find("Label", this.view.btnOPT).getComponent(Label).string = "Send";
        }
    }

    private _clickContinue() {
        let phone=this.view.phone.string;
        let otp = this.view.otp.string;
        let index = phone.indexOf("+91-");
        if(index<0){
            phone = this.getWholePhoneNum(phone);
        } 
        if(this.view.accountNode.active){           
            if (phone.length < 1 || otp.length < 1) {
                ModuleManager.instance.toastLong("information cannot be empty");
                return;
            }
            this._reqCheckSMS(phone, otp)
        }
        else{
            let pwd = this.view.pwd.string;
            let confirm_pwd = this.view.confirm_pwd.string;
            if (pwd.length < 1 || confirm_pwd.length < 1) {
                ModuleManager.instance.toastLong("information cannot be empty");
                return;
            }
            if(pwd !== confirm_pwd){
                ModuleManager.instance.toastLong("Please enter the correct password");
                return
            }
            this._reqSetPW(phone, otp, pwd, confirm_pwd)
        }
    }

    private _reqCheckSMS(phone: string, code: string) {
        let params = {
            channel_id:GameConfig.GameSiteID,
            phone: phone,
            code: code,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.forgetPasswordCheckSMS,
            Params: params,
            Callback: this._rspCheckSMS.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspCheckSMS(msg: any) {
        if (msg && msg.code == 0) {
            this._showViewStauts(true)
        }
    }

    private _reqSetPW(phone: string, code: string, password: string, confirm_password: string) {
        let params = {
            channel_id:GameConfig.GameSiteID,
            phone: phone,
            password: password,
            confirm_password: confirm_password,
            code: code,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.forgetPasswordSetPassword,
            Params: params,
            Callback: this._rspSetPW.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspSetPW(msg: any) {
        if (msg && msg.code == 0) {
            ModuleManager.instance.toastLong("Set Login Password Success");
            conmmon_http.reqGetUserInfo(this, conmmon_http.rspUserInfo.bind(this));
            ModuleManager.instance.destroyModule(CommonName.MODULE.ForgotPassword);
        }
    }

}


