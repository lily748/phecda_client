
import { _decorator, Component, Node, EditBox} from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';

import ModuleManager from '../../../../../script/framework/core/module_manager';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { conmmon_http } from '../../../../../script/net/common_http';
import { UserDataModel } from '../../model/UserDataModel';

const { ccclass, property } = _decorator;

@ccclass('editNickname')
export class editNickname extends Component {  
    @property(EditBox)
    edit_name:EditBox | null = null
    @property(Node)
    submitBtn: Node = null    
    @property(Node)
    close: Node

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
        Utility.instance.onButtonClick(this.submitBtn, this.onSubmitBtnClick, this, false)

        let user = UserDataModel.GetCurrentUser()
        if (user){
           this.edit_name.string = `${user.nickname}`
        }
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
        if(this.edit_name.string.trim() == "") {
            ModuleManager.instance.toast("Cannot enter empty")
            return
        }
        this._reqUpdateUserInfo("name",this.edit_name.string)
    }

    /**
     * 修改玩家信息
     * @param info_key name
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
            ModuleManager.instance.toast("Successfully modified")
            if(this.node?.isValid){
                if(this.node.destroy){
                    this.node.destroy()
                }
            }
        }
    }

}