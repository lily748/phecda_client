import { _decorator, Component, Node, EditBox,instantiate,Prefab } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { rechargeQRcodeRules } from '../recharge/rechargeQRcodeRules';
import ResourceManager from '../../../../../script/manager/resoure_manager';

const { ccclass, property } = _decorator;

@ccclass('withdrawAddUPIAccount')
export class withdrawAddUPIAccount extends Component {
    @property(EditBox)
    edit_address:EditBox | null = null
    @property(EditBox)
    edit_repeatAddress:EditBox | null = null
   
    @property(Node)
    submitBtn: Node = null    
    @property(Node)
    close: Node
    @property(Node)
    btnRule: Node

    Callback:Function

    private ruleData:any = null
    private qrCodeRules:rechargeQRcodeRules = null

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
        Utility.instance.onButtonClick(this.btnRule, this.onClickBtnRule, this, false)
        Utility.instance.onButtonClick(this.submitBtn, this.onSubmitBtnClick, this, false)
    }

    setCallBack(callback: (data: any) => void) {
        this.Callback = callback
    }

    setRuleData(data:any){
        this.ruleData = data
    }

    getAccountData(){
        let data = {
            address:this.edit_address.string,            
        }
        return data
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()
        if(this.node.destroy){
            this.node.destroy()
        }
    }

    private onClickBtnRule(){
        if(this.qrCodeRules == null || !this.qrCodeRules.isValid){
            this.createNode("rechargeQRcodeRules", this.node, (node: Node) => {
                this.qrCodeRules = node.getComponent(rechargeQRcodeRules)
                this.qrCodeRules.initData(this.ruleData)
            }) 
        }
        else{
            this.qrCodeRules.node.active = true
        }
    }

    private createNode(name: string, parent: Node, callback: (node: Node) => void) {
        ResourceManager.loadRes("prefabs/recharge/" + name, Prefab, (err, prefab: Prefab) => {
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
     * 提交按钮
     * @returns 
     */
    private onSubmitBtnClick(){
        if(this.edit_address.string.trim() == this.edit_repeatAddress.string.trim() && this.edit_address.string.trim() != ""){
             // 请求消息
            this.Callback && this.Callback()
        }
        else{
            if(this.edit_address.string.trim() == ""){
                ModuleManager.instance.toastLong("Account cannot be empty")
                return
            }
            if(this.edit_repeatAddress.string.trim() == ""){
                ModuleManager.instance.toastLong("Confirm account number cannot be empty")
                return
            }
            if(this.edit_address.string.trim() !== this.edit_repeatAddress.string.trim()){
                ModuleManager.instance.toastLong("Account number is inconsistent")
                return
            }            
        }
    }  
   
}