
import { _decorator, Component, Node, EditBox, find,Label,Button } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';

import ModuleManager from '../../../../../script/framework/core/module_manager';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { conmmon_http } from '../../../../../script/net/common_http';

const { ccclass, property } = _decorator;

@ccclass('bindingPhone')
export class bindingPhone extends Component {  
    @property(EditBox)
    edit_phone:EditBox | null = null
    @property(EditBox)
    edit_otp:EditBox | null = null

    @property(Node)
    btnOtp: Node = null
    @property(Node)
    submitBtn: Node = null    
    @property(Node)
    close: Node

    closeCallback:Function
    rechargeCallback:Function
    private timeNum: number = 60;
    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
        Utility.instance.onButtonClick(this.btnOtp, this.otpBtn, this, false)
        Utility.instance.onButtonClick(this.submitBtn, this.onSubmitBtnClick, this, false)
        
        this.edit_phone.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onPhoneEditingDidEnded,this)
        this.edit_otp.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onOtpEditingDidEnded,this)
    }

    public setCallBack(closeCallback: (data: any) => void,rechargeCallback: (data: any) => void) {
        this.closeCallback = closeCallback
        this.rechargeCallback = rechargeCallback
    }

    /**
     * phone number
     * @param edit 
     */ 
    private onPhoneEditingDidEnded(edit: EditBox) {

    }

    /**
     * otp
     * @param edit 
     */
    private onOtpEditingDidEnded(edit: EditBox) {

    }

    private otpBtn() {
        AudioManager.instance.playCloseWindowSound()
        let phoneNum = "+91-"+this.edit_phone.string.trim()
        if(this.edit_phone.string.trim() == "") return
        this._ReqOTP(phoneNum)
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()        
        this.closeCallback && this.closeCallback()
        if(this.node.destroy){
            this.node.destroy()
        }
    }

    /**
     * 提交按钮
     * @returns 
     */
    private onSubmitBtnClick(){
        let phoneNum = "+91-"+this.edit_phone.string.trim()
        if(this.edit_phone.string.trim() == "") return
        let code = this.edit_otp.string.trim()
        if(code == "") return

        this._ReqBindPhone(phoneNum,code)
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
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspOtpInfo(msg: any){
        if (msg && msg.code == 0) {
            console.log("获取短信验证码成功");
            ModuleManager.instance.toastLong("otp has been sent successfully") 
            this.btnOtp.getComponent(Button).interactable = false;
            find("lbl_title", this.btnOtp).getComponent(Label).string = this.timeNum + "s";
            this.schedule(this._updateOTPState, 1);
        } 
    }

    /**
     * 请求绑定手机号
     * @param phone 
     * @param code 
     */
    private _ReqBindPhone(phone: string,code:string) {
        ModuleManager.instance.showNetPrompt();
        let params = {
            phone: phone,
            code: code
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.bindPhoneReq,
            Params: params,
            Callback: this._rspBindPhone.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspBindPhone(msg: any){
        if (msg && msg.code == 0) {
            console.log("手机号绑定成功");
            ModuleManager.instance.toastLong("Phone number bound successfully") 
            conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))

            if(this?.node?.isValid){
                this.rechargeCallback && this.rechargeCallback()
                if(this.node.destroy){
                    this.node.destroy()
                }
            }
        } 
    }

    private _updateOTPState() {
        if(!this.node?.isValid) return
        if (this.timeNum > 1) {
            this.timeNum--;
            find("lbl_title", this.btnOtp).getComponent(Label).string = this.timeNum + "s";
        } else {
            this.unschedule(this._updateOTPState);
            this.timeNum = 60;
            this.btnOtp.getComponent(Button).interactable = true;
            find("lbl_title", this.btnOtp).getComponent(Label).string = "GET OTP";
        }
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }
}