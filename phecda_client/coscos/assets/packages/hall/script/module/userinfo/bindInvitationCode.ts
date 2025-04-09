
import { _decorator, Component, Node, EditBox} from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';

import ModuleManager from '../../../../../script/framework/core/module_manager';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { conmmon_http } from '../../../../../script/net/common_http';

const { ccclass, property } = _decorator;

@ccclass('bindInvitationCode')
export class bindInvitationCode extends Component {  
    @property(EditBox)
    edit_code:EditBox | null = null
    @property(Node)
    submitBtn: Node = null 
    @property(Node)
    cancelBtn: Node = null   
    @property(Node)
    close: Node

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
        Utility.instance.onButtonClick(this.submitBtn, this.onSubmitBtnClick, this, false)
        Utility.instance.onButtonClick(this.cancelBtn, this.closeBtn, this, false)
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
        if(this.edit_code.string.trim() == "") {
            ModuleManager.instance.toast("Cannot enter empty")
            return
        }
        this._reqAgentBind(parseInt(this.edit_code.string))
    }

    /**
     * 绑定代理
     */
    private _reqAgentBind(id:number){
        ModuleManager.instance.showNetPrompt();
        let params = {
            agent_id: id,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.agent_bind,
            Params: params,
            Callback: this._rspAgentBind.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * 绑定代理返回
     * @param msg 
     */
    private _rspAgentBind(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
            if(this.node?.isValid){
                if(this.node.destroy){
                    this.node.destroy()
                }
            }
        }
    }

}