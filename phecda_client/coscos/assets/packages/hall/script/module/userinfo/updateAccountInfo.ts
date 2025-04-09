
import { _decorator, Component, Node,find, Label, EditBox,Color } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { PostData } from '../../model/HttpDataModel';
import { HttpDataModel } from '../../model/HttpDataModel';
import { conmmon_http } from '../../../../../script/net/common_http';

const { ccclass, property } = _decorator;

@ccclass('updateAccountInfo')
export class updateAccountInfo extends Component {
    @property(Node)
    close: Node
    @property(Node)
    btnSave: Node
    @property(Label)
    lbl_title: Label
    @property(Node)
    node_tip: Node
    @property(EditBox)
    input_editBox: EditBox

    currType:string = "'"
    Callback:Function

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
        Utility.instance.onButtonClick(this.btnSave, this.onSaveClick, this, false)
    }

    setCallBack(callback: (data: any) => void) {
        this.Callback = callback
    }

    /**
     * init data
     * @param typeName 
     * @param content 
     */
    initData(typeName:string,content:string){
        if(!typeName) return

        this.currType = typeName        
        if(typeName == "nickName"){
            this.input_editBox.maxLength = 30
            let lbl_tip = find("lbl_tip",this.node_tip).getComponent(Label)
            lbl_tip.string = "A nice name is easy to remember."
            this.lbl_title.string = "Change Nickname"
            lbl_tip.color = new Color().fromHEX("#B7B7B7")
        }
        else if (typeName == "adharCard"){
            this.input_editBox.maxLength = 12
            this.lbl_title.string = "Adhar Card"
        }
        else if (typeName == "panCard"){
            this.input_editBox.maxLength = 10
            this.lbl_title.string = "Pan Card"
        }
        this.node_tip.active = typeName == "nickName"
        this.input_editBox.string = content
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()
        this.Callback && this.Callback()
        if(this.node.destroy){
            this.node.destroy()
        }
    }   

    /**
     * 保存
     */
    private onSaveClick(){
        let contentStr = this.input_editBox.string.trim()

        let post_type:string = ""
        let lbl_tip = find("lbl_tip",this.node_tip).getComponent(Label)
        if (this.currType == "nickName"){
            this.node_tip.active = contentStr.length < 1 || contentStr.length > 30
            if(contentStr.length < 1 || contentStr.length > 30){
                lbl_tip.string = "Length is less than 30 characters"
                lbl_tip.color = new Color().fromHEX("#FF0000")
                return
            }
            else{
                lbl_tip.string = "A nice name is easy to remember."
                this.lbl_title.string = "Change Nickname"
                lbl_tip.color = new Color().fromHEX("#B7B7B7")
            }
            post_type = "name"
        }
        else if (this.currType == "adharCard"){
            this.node_tip.active = contentStr.length != 12
            if(contentStr.length != 12){
                lbl_tip.string = "The length must be 12 digits"
                lbl_tip.color = new Color().fromHEX("#FF0000")
                return
            }
            post_type = "adhar_card"
        }
        else if (this.currType == "panCard"){
            this.node_tip.active = contentStr.length != 10
            if(contentStr.length != 10){
                lbl_tip.string = "The length must be 10 digits"
                lbl_tip.color = new Color().fromHEX("#FF0000")
                return           
            }
            post_type = "pan_card"
        }

        this._reqUpdateUserInfo(post_type,contentStr)
    }

    /**
     * 修改玩家信息
     * @param info_key 要修改的字段名(昵称:name, adhar_card, pan_card)
     * @param info_value 账户号码
     */
    private _reqUpdateUserInfo(info_key:string,info_value:string){
        ModuleManager.instance.showNetPrompt();
        let params = {
            info_key: info_key,
            info_value: info_value,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.updateUserInfo,
            Params: params,
            Callback: this._rspUpdateUserInfo.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * 修改玩家信息返回
     * @param msg 
     */
    private _rspUpdateUserInfo(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
            this.Callback && this.Callback()
            if(this.node?.isValid){
                if(this.node.destroy){
                    this.node.destroy()
                }
            }
        }
    }
}