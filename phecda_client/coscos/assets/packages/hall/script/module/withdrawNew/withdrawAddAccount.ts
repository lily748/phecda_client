
import { _decorator, Component, Node, EditBox, Label, CCBoolean, find,SpriteFrame,Sprite } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';

const { ccclass, property } = _decorator;

@ccclass('withdrawAddAccount')
export class withdrawAddAccount extends Component {
    @property(EditBox)
    edit_name:EditBox | null = null
    @property(EditBox)
    edit_account:EditBox | null = null
    @property(EditBox)
    edit_repeatAccount:EditBox | null = null
    @property(EditBox)   
    edit_IFSC:EditBox | null = null
    @property(EditBox)   
    edit_repeatIFSC:EditBox | null = null
    @property(EditBox)
    edit_phone:EditBox | null = null
    @property(EditBox)
    edit_email:EditBox | null = null

    @property(Node)
    node_name:Node | null = null
    @property(Node)
    node_account:Node | null = null
    @property(Node)
    node_repeatAccount:Node | null = null
    @property(Node)    
    node_IFSC:Node | null = null
    @property(Node)    
    node_repeatIFSC:Node | null = null
    @property(Node)
    node_phone:Node | null = null
    @property(Node)
    node_email:Node | null = null

    @property(Node)
    submitBtn: Node = null
    
    @property(Node)
    close: Node

    @property(CCBoolean)
    isFullWin:boolean = false

    @property([SpriteFrame])
    frame:SpriteFrame[] = []

    Callback:Function

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
        Utility.instance.onButtonClick(this.submitBtn, this.onSubmitBtnClick, this, false)
        
        this.edit_name.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onNameEditingDidEnded,this)
        this.edit_account.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onAccountEditingDidEnded,this)
        this.edit_repeatAccount.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onRepeatAccountEditingDidEnded,this)
        this.edit_IFSC.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onIFSCEditingDidEnded,this)
        this.edit_repeatIFSC.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onRepeatIFSCEditingDidEnded,this)
        this.edit_phone.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onPhoneEditingDidEnded,this)
        this.edit_email.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onEmailEditingDidEnded,this)

        this.edit_name.node.on(EditBox.EventType.EDITING_DID_BEGAN, this.onNameEditingDidBegan,this)
        this.edit_account.node.on(EditBox.EventType.EDITING_DID_BEGAN, this.onAccountEditingDidBegan,this)
        this.edit_repeatAccount.node.on(EditBox.EventType.EDITING_DID_BEGAN, this.onRepeatAccountEditingDidBegan,this)
        this.edit_IFSC.node.on(EditBox.EventType.EDITING_DID_BEGAN, this.onIFSCEditingDidBegan,this)
        this.edit_repeatIFSC.node.on(EditBox.EventType.EDITING_DID_BEGAN, this.onRepeatIFSCEditingDidBegan,this)
        this.edit_phone.node.on(EditBox.EventType.EDITING_DID_BEGAN, this.onPhoneEditingDidBegan,this)
        this.edit_email.node.on(EditBox.EventType.EDITING_DID_BEGAN, this.onEmailEditingDidBegan,this)

        this.edit_name.node.on(EditBox.EventType.EDITING_RETURN, this.onNameEditingDidEnded,this)
        this.edit_account.node.on(EditBox.EventType.EDITING_RETURN, this.onAccountEditingDidEnded,this)
        this.edit_repeatAccount.node.on(EditBox.EventType.EDITING_RETURN, this.onRepeatAccountEditingDidEnded,this)
        this.edit_IFSC.node.on(EditBox.EventType.EDITING_RETURN, this.onIFSCEditingDidEnded,this)
        this.edit_repeatIFSC.node.on(EditBox.EventType.EDITING_RETURN, this.onRepeatIFSCEditingDidEnded,this)
        this.edit_phone.node.on(EditBox.EventType.EDITING_RETURN, this.onPhoneEditingDidEnded,this)
        this.edit_email.node.on(EditBox.EventType.EDITING_RETURN, this.onEmailEditingDidEnded,this)
    }

    setCallBack(callback: (data: any) => void) {
        this.Callback = callback
    }

    getAccountData(){
        let data = {
            account_holder_name:this.edit_name.string,
            account_number:this.edit_account.string,
            ifsc:this.edit_IFSC.string,
            phone:this.edit_phone.string,
            email:this.edit_email.string,
            id:0
        }
        return data
    }

    /**
     * 包含字母或者空格
     * @param str 
     * @returns 
     */
    private containsOnlyDigitsOrSpaces(str) {
        return /^[a-zA-Z\s]*$/.test(str);
    }

    /**
     * 纯数字判断
     * @param str 
     * @returns 
     */
    private containsOnlyDigits(str) {
        return /^[0-9]+$/.test(str);
    }

    /**
     * Name
     * edit
     */
    private onNameEditingDidEnded(edit: EditBox) {
        let content = edit.string
        this.node_name.active = false
        let lbl_limit = find("lbl_limit",this.node_name);
        if(lbl_limit && lbl_limit.isValid){            
            let str = ""            
            if(content.trim() == ""){
                this.node_name.active = true
                str = "Account Holder Name cannot be empty."       
            }
            else{
                if(!this.containsOnlyDigitsOrSpaces(content)){
                    str = "Invalid Account Holder Name"
                    this.node_name.active = true
                }
            }
            lbl_limit.getComponent(Label).string = str
        }
        
        let editbg = find(this.isFullWin ? "center/edit_namebg/bg":"bg/center/edit_namebg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]
    }

    /**
     * Account
     * @param edit 
     */
    private onAccountEditingDidEnded(edit: EditBox) {
        let content = edit.string
        let lbl_limit = find("lbl_limit",this.node_account);
        if(lbl_limit && lbl_limit.isValid){  
            let str = ""          
            if(content.trim() == ""){
                str = "Account Number cannot be empty."
            }
            else{
                if(!this.containsOnlyDigits(content)){
                    str = "Invalid Bank Account Number"
                }
                if(content != this.edit_repeatAccount.string && this.edit_repeatAccount.string.trim().length > 0){
                    str = "Please enter the same account number"
                }
            }
            lbl_limit.getComponent(Label).string = str
            this.node_account.active = (content.trim() == "") || !this.containsOnlyDigits(content) || (content != this.edit_repeatAccount.string && this.edit_repeatAccount.string.trim().length > 0)
        }
        let editbg = find(this.isFullWin ? "center/edit_accountbg/bg":"bg/center/edit_accountbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]
    }

     /**
     * repeat Account
     * @param edit 
     */
     private onRepeatAccountEditingDidEnded(edit: EditBox) {
        let content = edit.string
        let lbl_limit = find("lbl_limit",this.node_repeatAccount);
        if(lbl_limit && lbl_limit.isValid){  
            let str = ""          
            if(content.trim() == ""){
                str = "Account Number cannot be empty."
            }
            else{
                if(!this.containsOnlyDigits(content)){
                    str = "Invalid Bank Account Number"
                }
                if(content != this.edit_account.string && this.edit_account.string.trim().length > 0){
                    str = "Please enter the same account number"
                }
            }
            lbl_limit.getComponent(Label).string = str
            this.node_repeatAccount.active = (content.trim() == "") || !this.containsOnlyDigits(content) || (content != this.edit_account.string && this.edit_account.string.trim().length > 0)
        }
        let editbg = find(this.isFullWin ? "center/edit_repeatAccountbg/bg":"bg/center/edit_accountbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]
    }

    /**
     * IFSC (字母+数字 前四位必须是字母)
     * @param edit 
     */
    private onIFSCEditingDidEnded(edit: EditBox) {
        let content = edit.string
        let lbl_limit = find("lbl_limit",this.node_IFSC);
        let isValid = this.isValidString(content)
        let len = content.trim().length
        if(lbl_limit && lbl_limit.isValid){            
            let str = ""
            if(content.trim() != ""){
                if(len !== 11){
                    str = "11 bit length"
                }
                if(!isValid){
                    str = "Information is wrong, please input again"
                }
                if(this.edit_repeatIFSC.string != content && this.edit_repeatIFSC.string.trim().length > 0){
                    str = "Please enter the same account number"
                }
            }
            else{
                str = "Account Number cannot be empty."
            }
            lbl_limit.getComponent(Label).string = str
        }
        this.node_IFSC.active = !isValid || len !== 11 || (this.edit_repeatIFSC.string != content && this.edit_repeatIFSC.string.trim().length > 0)
        let editbg = find(this.isFullWin ? "center/edit_IFSCbg/bg":"bg/center/edit_IFSCbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]
    }

        /**
     * IFSC (字母+数字 前四位必须是字母)
     * @param edit 
     */
        private onRepeatIFSCEditingDidEnded(edit: EditBox) {
            let content = edit.string
            let lbl_limit = find("lbl_limit",this.node_repeatIFSC);
            let isValid = this.isValidString(content)
            let len = content.trim().length
            if(lbl_limit && lbl_limit.isValid){            
                let str = ""
                if(content.trim() != ""){
                    if(len !== 11){
                        str = "11 bit length"
                    }
                    if(!isValid){
                        str = "Information is wrong, please input again"
                    }
                    if(this.edit_IFSC.string != content && this.edit_IFSC.string.trim().length > 0){
                        str = "Please enter the same account number"
                    }
                }
                else{
                    str = "Account Number cannot be empty."
                }
                lbl_limit.getComponent(Label).string = str
            }
            this.node_repeatIFSC.active = !isValid || len !== 11 || (this.edit_IFSC.string != content) || (this.edit_IFSC.string != content && this.edit_IFSC.string.trim().length > 0)
            let editbg = find(this.isFullWin ? "center/edit_RepeatIFSCbg/bg":"bg/center/edit_IFSCbg",this.node)
            editbg.getComponent(Sprite).spriteFrame = this.frame[0]
        }

    /**
     * Phone
     * @param edit 
     */
    private onPhoneEditingDidEnded(edit: EditBox) {
        let content = edit.string
        let lbl_limit = find("lbl_limit",this.node_phone);
        let len = content.trim().length
        let isValid = this.containsOnlyDigits(content)
        if(lbl_limit && lbl_limit.isValid){            
            let str = ""
            if(content.trim() != ""){                
                if(len !== 10){
                    str = "Length is 10 digits"
                }
                if(!isValid){
                    str = "Invalid Phone Number"
                }
            }
            else{
                str = "Phone Number cannot be empty."
            }
            lbl_limit.getComponent(Label).string = str
        }
        this.node_phone.active = !isValid || len !== 10
        let editbg = find(this.isFullWin ? "center/node_phone/bg":"bg/center/node_phone",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]
    }

    /**
     * Email
     * @param edit 
     */
    private onEmailEditingDidEnded(edit: EditBox) {
        let content = edit.string
        let lbl_limit = find("lbl_limit",this.node_email);
        if(lbl_limit && lbl_limit.isValid){
            let str = ""
            if(content.trim() == ""){
                str = "Email cannot be empty."
            }
            else{
                if(!this.isValidEmail(content)){
                    str = "Invalid Email Address."
                }
            }
            lbl_limit.getComponent(Label).string = str
        }
        this.node_email.active = !this.isValidEmail(content)
        let editbg = find(this.isFullWin ? "center/edit_emailbg/bg":"bg/center/edit_emailbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]
    }

    /**
     * 邮箱是否合法
     * @param email 
     * @returns 
     */
    private isValidEmail(email) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        return regex.test(email);
    }

    /**
     * 字母+数字 前四位必须是字母 后7位字母或数字
     * @param str 
     * @returns 
     */
    private isValidString(str) {
        const regex = /^[a-zA-Z]{4}[a-zA-Z0-9]{7}$/;
        return regex.test(str);
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()
        if(this.node.destroy){
            this.node.destroy()
        }
    }

    /**
     * 提交按钮
     * @returns 
     */
    private onSubmitBtnClick(){
        if(this.edit_name.string.trim() == ""){
            this.node_name.active = true
        }
        if(this.edit_account.string.trim() == ""){
            this.node_account.active = true
        }
        if(this.edit_repeatAccount.string.trim() == ""){
            this.node_repeatAccount.active = true
        }
        if(this.edit_IFSC.string.trim() == ""){
            this.node_IFSC.active = true
        }
        if(this.edit_repeatIFSC.string.trim() == ""){
            this.node_repeatIFSC.active = true
        }
        if(this.edit_phone.string.trim() == ""){
            this.node_phone.active = true
        }
        if(this.edit_email.string.trim() == ""){
            this.node_email.active = true
        }
        if(this.node_name.active){
            return
        }
        if(this.node_account.active){
            return
        }
        if(this.node_repeatAccount.active){
            return
        }
        if(this.node_IFSC.active){
            return
        }
        if(this.node_repeatIFSC.active){
            return
        }
        if(this.node_phone.active){
            return
        }
        if(this.node_email.active){
            return
        }

        // 请求消息
        this.Callback && this.Callback()
    }  
    
    private onNameEditingDidBegan(edit: EditBox) {
        let editbg = find(this.isFullWin ? "center/edit_namebg/bg":"bg/center/edit_namebg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[1]
    }

    private onAccountEditingDidBegan(edit: EditBox) {
        let editbg = find(this.isFullWin ? "center/edit_accountbg/bg":"bg/center/edit_accountbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[1]
    }

    private onRepeatAccountEditingDidBegan(edit: EditBox) {
        let editbg = find(this.isFullWin ? "center/edit_repeatAccountbg/bg":"bg/center/edit_accountbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[1]
    }

    private onIFSCEditingDidBegan(edit: EditBox) {
        let editbg = find(this.isFullWin ? "center/edit_IFSCbg/bg":"bg/center/edit_IFSCbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[1]
    }

    private onRepeatIFSCEditingDidBegan(edit: EditBox) {
        let editbg = find(this.isFullWin ? "center/edit_RepeatIFSCbg/bg":"bg/center/edit_IFSCbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[1]
    }
    
    private onPhoneEditingDidBegan(edit: EditBox) {
        let editbg = find(this.isFullWin ? "center/node_phone/bg":"bg/center/node_phone",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[1]

    }

    private onEmailEditingDidBegan(edit: EditBox) {
        let editbg = find(this.isFullWin ? "center/edit_emailbg/bg":"bg/center/edit_emailbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[1]
    }

    private onNameEditingDidReturn(edit: EditBox) {
        let content = edit.string
        this.node_name.active = false
        let lbl_limit = find("lbl_limit",this.node_name);
        if(lbl_limit && lbl_limit.isValid){            
            let str = ""            
            if(content.trim() == ""){
                this.node_name.active = true
                str = "Account Holder Name cannot be empty."       
            }
            else{
                if(!this.containsOnlyDigitsOrSpaces(content)){
                    str = "Invalid Account Holder Name"
                    this.node_name.active = true
                }
            }
            lbl_limit.getComponent(Label).string = str
        }

        let editbg = find(this.isFullWin ? "center/edit_namebg/bg":"bg/center/edit_namebg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]
    }

    private onAccountEditingDidReturn(edit: EditBox) {
        let content = edit.string
        let lbl_limit = find("lbl_limit",this.node_account);
        if(lbl_limit && lbl_limit.isValid){  
            let str = ""          
            if(content.trim() == ""){
                str = "Account Number cannot be empty."
            }
            else{
                if(!this.containsOnlyDigits(content)){
                    str = "Invalid Bank Account Number"
                }
                if(content != this.edit_repeatAccount.string && this.edit_repeatAccount.string.trim().length > 0){
                    str = "Please enter the same account number"
                }
            }
            lbl_limit.getComponent(Label).string = str
            this.node_account.active = (content.trim() == "") || !this.containsOnlyDigits(content) || (content != this.edit_repeatAccount.string && this.edit_repeatAccount.string.trim().length > 0)
        }
        let editbg = find(this.isFullWin ? "center/edit_accountbg/bg":"bg/center/edit_accountbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]
    }

    private onRepeatAccountEditingDidReturn(edit: EditBox) {
        let content = edit.string
        let lbl_limit = find("lbl_limit",this.node_repeatAccount);
        if(lbl_limit && lbl_limit.isValid){  
            let str = ""          
            if(content.trim() == ""){
                str = "Account Number cannot be empty."
            }
            else{
                if(!this.containsOnlyDigits(content)){
                    str = "Invalid Bank Account Number"
                }
                if(content != this.edit_account.string && this.edit_account.string.trim().length > 0){
                    str = "Please enter the same account number"
                }
            }
            lbl_limit.getComponent(Label).string = str
            this.node_repeatAccount.active = (content.trim() == "") || !this.containsOnlyDigits(content) || (content != this.edit_account.string && this.edit_account.string.trim().length > 0)
        }
        let editbg = find(this.isFullWin ? "center/edit_repeatAccountbg/bg":"bg/center/edit_accountbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]
    }

    private onIFSCEditingDidReturn(edit: EditBox) {
        let content = edit.string
        let lbl_limit = find("lbl_limit",this.node_IFSC);
        let isValid = this.isValidString(content)
        let len = content.trim().length
        if(lbl_limit && lbl_limit.isValid){            
            let str = ""
            if(content.trim() != ""){
                if(len !== 11){
                    str = "11 bit length"
                }
                if(!isValid){
                    str = "Information is wrong, please input again"
                }
                if(this.edit_repeatIFSC.string != content && this.edit_repeatIFSC.string.trim().length > 0){
                    str = "Please enter the same account number"
                }
            }
            else{
                str = "Account Number cannot be empty."
            }
            lbl_limit.getComponent(Label).string = str
        }
        this.node_IFSC.active = !isValid || len !== 11 || (this.edit_repeatIFSC.string != content && this.edit_repeatIFSC.string.trim().length > 0)

        let editbg = find(this.isFullWin ? "center/edit_IFSCbg/bg":"bg/center/edit_IFSCbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]
    }

    private onRepeatIFSCEditingDidReturn(edit: EditBox) {
        let content = edit.string
        let lbl_limit = find("lbl_limit",this.node_repeatIFSC);
        let isValid = this.isValidString(content)
        let len = content.trim().length
        if(lbl_limit && lbl_limit.isValid){            
            let str = ""
            if(content.trim() != ""){
                if(len !== 11){
                    str = "11 bit length"
                }
                if(!isValid){
                    str = "Information is wrong, please input again"
                }
                if(this.edit_IFSC.string != content && this.edit_IFSC.string.trim().length > 0){
                    str = "Please enter the same account number"
                }
            }
            else{
                str = "Account Number cannot be empty."
            }
            lbl_limit.getComponent(Label).string = str
        }
        this.node_repeatIFSC.active = !isValid || len !== 11 || (this.edit_IFSC.string != content) || (this.edit_IFSC.string != content && this.edit_IFSC.string.trim().length > 0)
        let editbg = find(this.isFullWin ? "center/edit_RepeatIFSCbg/bg":"bg/center/edit_IFSCbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]
    }

    private onPhoneEditingDidReturn(edit: EditBox) {
        let content = edit.string
        let lbl_limit = find("lbl_limit",this.node_phone);
        let len = content.trim().length
        let isValid = this.containsOnlyDigits(content)
        if(lbl_limit && lbl_limit.isValid){            
            let str = ""
            if(content.trim() != ""){                
                if(len !== 10){
                    str = "Length is 10 digits"
                }
                if(!isValid){
                    str = "Invalid Phone Number"
                }
            }
            else{
                str = "Phone Number cannot be empty."
            }
            lbl_limit.getComponent(Label).string = str
        }
        this.node_phone.active = !isValid || len !== 10
        let editbg = find(this.isFullWin ? "center/node_phone/bg":"bg/center/node_phone",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]

    }

    private onEmailEditingDidReturn(edit: EditBox) {
        let content = edit.string
        let lbl_limit = find("lbl_limit",this.node_email);
        if(lbl_limit && lbl_limit.isValid){
            let str = ""
            if(content.trim() == ""){
                str = "Email cannot be empty."
            }
            else{
                if(!this.isValidEmail(content)){
                    str = "Invalid Email Address."
                }
            }
            lbl_limit.getComponent(Label).string = str
        }
        this.node_email.active = !this.isValidEmail(content)
        let editbg = find(this.isFullWin ? "center/edit_emailbg/bg":"bg/center/edit_emailbg",this.node)
        editbg.getComponent(Sprite).spriteFrame = this.frame[0]
    }
   
}