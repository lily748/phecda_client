
import { _decorator, Component, Node,Color, find, Label } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';

const { ccclass, property } = _decorator;

@ccclass('turntable_dialog')
export class turntable_dialog extends Component {
    @property(Node)
    close: Node

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
    }

    public setShowRule(isSuccess:boolean,resultStr){
        let lbl_toptitle = find("content/lbl_toptitle",this.node)
        if(lbl_toptitle.isValid){
            lbl_toptitle.getComponent(Label).color = new Color().fromHEX(isSuccess ? "#FFFFFF":"#FF0000")
        }

        let lbl_middletitle = find("content/lbl_middletitle",this.node)
        if(lbl_middletitle.isValid){
            lbl_middletitle.getComponent(Label).string = resultStr
        }       
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()
        if(this.node.destroy){
            this.node.destroy()
        }
    }
}