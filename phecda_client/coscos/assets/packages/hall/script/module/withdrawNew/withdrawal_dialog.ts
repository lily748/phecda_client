
import { _decorator, Component, Node,Color, SpriteFrame, find, Sprite, v3, Label } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';

const { ccclass, property } = _decorator;

@ccclass('withdrawal_dialog')
export class withdrawal_dialog extends Component {
    @property(Node)
    close: Node
    @property([SpriteFrame])
    frame: SpriteFrame[]=[]

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
    }

    public setShowRule(isSuccess:boolean,resultStr:string = ""){
        let spr_icon = find("content/spr_icon",this.node)
        if(spr_icon.isValid){
            spr_icon.getComponent(Sprite).spriteFrame = this.frame[isSuccess ? 0:1]
            spr_icon.position = v3(isSuccess ? -208:-165,116,0)
        }

        let lbl_toptitle = find("content/lbl_toptitle",this.node)
        if(lbl_toptitle.isValid){
            lbl_toptitle.position = v3(isSuccess ? -163:-122,113,0)
            lbl_toptitle.getComponent(Label).string = isSuccess ? "Withdrawal request successful":"Withdrawal request faild"
            lbl_toptitle.getComponent(Label).color = new Color().fromHEX(isSuccess ? "#FFC435":"#FF4A47")
        }

        let lbl_middletitle = find("content/lbl_middletitle",this.node)
        if(lbl_middletitle.isValid){
            lbl_middletitle.getComponent(Label).string = isSuccess ? "We will complete the withdrawal within 2 hours!":resultStr
        }       
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()
        if(this.node.destroy){
            this.node.destroy()
        }
    }
   
}