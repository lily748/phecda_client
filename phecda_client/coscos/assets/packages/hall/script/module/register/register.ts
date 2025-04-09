import { AdjustModel } from './../../model/AdjustModel';
import { _decorator, Label } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import LoaclStorage from '../../../../../script/manager/local_storage';
import { conmmon_http } from '../../../../../script/net/common_http';
import { LoginServer, VerifyCodeType } from '../../../../../script/net/login_serve';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';

const { ccclass, property } = _decorator;

import RegisterView from "./register_view";

@ccclass('Register')
export default class Register extends Module<RegisterView, null>{

    private getVerifyCodeType: VerifyCodeType

    private callback: () => void

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_register";
        this.viewType = RegisterView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.close, this.onClose, this, false)
        Utility.instance.onButtonClick(this.view.register, this.onConfirm, this)
        Utility.instance.onButtonClick(this.view.resetPwd, this.onConfirm, this)
        Utility.instance.onButtonClick(this.view.getCode.node, this.onGetCode, this)

        this.regEvent(true)
    }

    onShow(data: { type: number, callback: () => void }) {
        if (data && data.callback) { this.callback = data.callback }
        AudioManager.instance.playOpenWindowSound()
        if (data?.type == 2) {
            this.getVerifyCodeType = VerifyCodeType.FindLoginPwd
            this.view.switcher.changeStateByName("ResetPwd")
        } else {
            this.view.rewardLabel.string = UserDataModel.registerReward + "free"
            this.getVerifyCodeType = VerifyCodeType.Register
            this.view.switcher.changeStateByName("Register")
        }
    }

    onDestroy() {
        this.callback = null
        this.unscheduleAllCallbacks()
        this.regEvent(false)
    }

    private regEvent(reg: boolean) {
        let funName = reg ? "on" : "off"
        // EventManager.instance[funName](CommonName.EVENT.Respon_VerifyCode, this.responVerifyCode, this)
        EventManager.instance[funName](CommonName.EVENT.ResponBindGuest, this.responBindGuest, this)
        EventManager.instance[funName](CommonName.EVENT.ResponResetPwd, this.responResetPwd, this)
    }

    private doCallback() {
        if (this.callback) this.callback()
    }

    private onClose() {
        if (!this.callback) AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.Register)
        this.doCallback()
    }

    private onGetCode() {
        if (this.view.phone.string.trim().length < 8) {
            ModuleManager.instance.toastLong(LanguageManager.instance.getErrorMsgByID(2))
            return
        }
        this.sendVerifyCode(this.view.phone.string, this.getVerifyCodeType)
    }

    private responVerifyCode(msg: any) {
        ModuleManager.instance.hideNetPrompt()
        this.showCountDown(msg.CountDown)
        ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("login_verify_code_send_successfully"))
    }

    private showCountDown(time: number) {
        let btn = this.view.getCode
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
        const num = this.view.phone.string
        const code = this.view.verifyCode.string
        const pwd = this.view.pwd.string
        const rePwd = this.view.repeatPwd.string
        if (num != "" && code != "" && pwd != "" && rePwd != "" && pwd == rePwd) {
            this.showNetPrompt(true)
            if (this.getVerifyCodeType == VerifyCodeType.Register) {
                LoginServer.requestBindGuest(this.getWholePhoneNum(num), code, pwd)
            } else {
                LoginServer.requestResetPwd(this.getWholePhoneNum(num), code, pwd)
            }
            LoaclStorage.setString("LoginPhoneNumber", this.view.phone.string)
            LoaclStorage.setString("LoginPassword", this.view.pwd.string)
        } else {
            ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("information_error"))
        }
    }

    private responBindGuest(msg: any) {
        this.showNetPrompt(false)
        AdjustModel.Instance.TrackEvent("register")
        if (!LoginServer.tryGetErrorMsg(msg)) {
            let reward = []
            let num = UserDataModel.registerReward * UserDataModel.getCashRate()
            reward.push({ ItemType: 1, ItemNum: num })
            ModuleManager.instance.showModule(CommonName.MODULE.Reward, { Items: reward, Callback: this.callback })
        } else {
            this.doCallback()
        }
        ModuleManager.instance.destroyModule(CommonName.MODULE.Register)
    }

    private responResetPwd(msg: any) {
        console.log("重置密码", msg)
        this.showNetPrompt(false)
        if (!LoginServer.tryGetErrorMsg(msg)) {
            ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("reset_pwd_success"))
        }
        ModuleManager.instance.destroyModule(CommonName.MODULE.Register)
        this.doCallback()
    }
}