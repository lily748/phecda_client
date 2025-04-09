
import { _decorator,Label, find,Prefab,instantiate,Node, Button} from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { AccountInfo_View } from './accountInfo_View';
import { UserDataModel } from '../../model/UserDataModel';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { updateAccountInfo } from './updateAccountInfo';
import EventManager from '../../../../../script/manager/event_manager';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { conmmon_http } from '../../../../../script/net/common_http';

const { ccclass, property } = _decorator;

@ccclass('AccountInfo')
export class AccountInfo extends Module<AccountInfo_View,null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/account/accountInfo";
        this.viewType = AccountInfo_View;
        this.modelType = null;
        this.layer = ViewLayer.Mid;
        this.needViewMask = true;
        this.needAnim = true;
    }

    private updateInfo:updateAccountInfo = null
    onInit(){
        EventManager.instance.on(CommonName.EVENT.Respon_Refresh_UserInfo, this.updateData, this);
        AudioManager.instance.playOpenWindowSound()
        Utility.instance.onButtonClick(this.view.btnClose, this.onCloseClick, this)
        Utility.instance.onButtonClick(this.view.phoneNumber, this.onPhoneNumberClick, this)
        Utility.instance.onButtonClick(this.view.nickname, this.onNicknameClick, this)
        Utility.instance.onButtonClick(this.view.btnCopyNumber, this.onCopyNumberClick, this)
        Utility.instance.onButtonClick(this.view.avatar, this.onAvatarClick, this)
        Utility.instance.onButtonClick(this.view.loginPassword, this.onLoginPasswordClick, this)
        Utility.instance.onButtonClick(this.view.copymycode, this.onCopymycodeClick, this) 
        
        Utility.instance.onButtonClick(this.view.bindCode, this.onBindCodeClick, this)
    }

    onDestroy() {
        EventManager.instance.off(CommonName.EVENT.Respon_Refresh_UserInfo, this.updateData, this)
    }

    onShow(data: any){
        this.updateData()
    }

    onCloseClick(){
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.showModule(CommonName.MODULE.UserInfo, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.AccountInfo)
        })
    }

    /**
     * 更新数据
     */
    updateData(){
        let user = UserDataModel.GetCurrentUser()
        if (!user || !this.view) return

        // this.view.phoneNumber.getComponent(Button).interactable = user.phone.trim().length < 1
        let phoneNumber = find("lbl_number",this.view.phoneNumber)
        if(phoneNumber && phoneNumber.isValid){
            phoneNumber.getComponent(Label).string = user.phone.trim() == "" ? "Unbound":user.phone
        }
        let spr_coin = find("spr_coin",this.view.phoneNumber)
        if(spr_coin && spr_coin.isValid){
            spr_coin.active = user.phone.trim().length > 0 
        }
        let sp_numberRed = find("sp1",this.view.phoneNumber)
        if(sp_numberRed && sp_numberRed.isValid){
            sp_numberRed.active = user.phone.trim().length < 1 
        }
   
        let nickname = find("lbl_nickname",this.view.nickname)
        if(nickname && nickname.isValid){
            nickname.getComponent(Label).string = ""+user.nickname
        }

        this.view.mycode.string = `${user.uid}`

        SpriteDataModel.SetHead(this.view.sp_avatar, user.avatar_url);
       
        let password = find("lbl_password", this.view.loginPassword)
        let sp_red = find("sp1", this.view.loginPassword)
        if (password) {
            let userPassWord = user.password;
            if (userPassWord && userPassWord.length > 0) {
                password.getComponent(Label).string = "******"
                sp_red.active=false;
            }
        }

        this.view.bindCode.getComponent(Button).interactable = user.agent_id == 0
        let lbl_code = find("lbl_code", this.view.bindCode)
        sp_red = find("sp1", this.view.bindCode)
        if (lbl_code.isValid) {
            if (user.agent_id && user.agent_id != 0) {
                lbl_code.getComponent(Label).string = `${user.agent_id}`
                sp_red.active=false;
            }
        }
    }

    /**
     * 绑定手机号码
     */
    onPhoneNumberClick(){
        let user = UserDataModel.GetCurrentUser()
        if (!user || !this.view) return
        if(user.phone.trim().length > 1 ) {
            ModuleManager.instance.toast("If you want to change your phone number, please contact customer service")
            return
        }
        ResourceManager.loadRes("prefabs/recharge/bindPhone", Prefab, (err, prefab: Prefab) => {
            if (!err) {
                if (!this || !this.isValid || !this.node || !this.node.isValid) {
                    return
                }
                let bind: Node = instantiate(prefab)
                bind.active = true
                bind.parent = this.node
                find("bg/lbl_title",bind).getComponent(Label).string = "Bind Phone No."
                find("bg/lbl_tip",bind).getComponent(Label).string = "To ensure the security of your funds, please link your mobile number."
                let bindingPhone:any = bind.getComponent("bindingPhone")
                bindingPhone.setCallBack(null,()=>{
                    conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
                })
            }
        })        
    }

    /**
     * nickname
     */
    onNicknameClick(){
        this.createNode("editNickname", this.view.node, null) 
    }

    onCopymycodeClick(){
        Utility.instance.copyTextToClipboard(this.view.mycode.string)
        ModuleManager.instance.toast("Copy Success")
    }

    onBindCodeClick(){
        this.createNode("bindInvitationCode", this.view.node, null)
    }

    /**
     * CopyNumber
     */
    onCopyNumberClick(){
        let lbl_number = find("lbl_number",this.view.phoneNumber)
        if(!lbl_number || !lbl_number.isValid) return

        let number_content = lbl_number.getComponent(Label)
        if(number_content.string.trim() == "") return
        Utility.instance.copyTextToClipboard(number_content.string)
        ModuleManager.instance.toastLong("Copied Successfully")
    }

    /**
     * 显示更改界面
     * @param typeName
     * @param content
     */
    private showUpdateAccountInfoView(typeName:string,content:string) {
        if(this.updateInfo == null){
            this.createNode("updateAccountInfo", this.view.node, (node: Node) => {
                this.updateInfo = node.getComponent(updateAccountInfo)
                this.updateInfo.initData(typeName,content)
                this.updateInfo.setCallBack(()=>{
                    this.updateInfo = null
                })
            }) 
        }
        else{
            this.updateInfo.node.active = true
        }
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

    /**
    * avatar
    */
    onAvatarClick() {
        ModuleManager.instance.showModule(CommonName.MODULE.HeadInfo);
    }

    onLoginPasswordClick() {
        ModuleManager.instance.showModule(CommonName.MODULE.ForgotPassword);
    }

    public updateHead(){
        let user = UserDataModel.GetCurrentUser();
        if (!user || !this.view) return;
        SpriteDataModel.SetHead(this.view.sp_avatar, user.avatar_url);
    }
}

