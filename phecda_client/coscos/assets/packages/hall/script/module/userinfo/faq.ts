
import { _decorator, Component, Node,RichText } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';

const { ccclass, property } = _decorator;


const note =  "<b>How to deposit？</b>\nClick \"Add cash\", select the payment channel and the amount,"
              +"click \"SEND\" to finish the payment.\n\n<b>Why my deposit is showing pending？</b>\n"
              +"It is normal for the deposit to be delayed \nsometimes. Pleasecheck your game account \n"
              +"balance at any time. Don't worry! your money \nis safety. It is recommended that you send "
              +"your game lD and paymentscreenshots to customer service for further consultation.\n\n"
              +"<b>How long does it usually take to withdraw?</b>\nIt may take up to 5mins - 24hours to withdraw.\n"
              +"It's depends on bank's processing.\nIf your withdraw failed, money will back to your game account."
  
@ccclass('faq')
export class faq extends Component {

    @property(RichText)
    rtx_title: RichText
    @property(Node)
    close: Node

    Callback:Function

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
        this.rtx_title.string = note
    }

    setCallBack(callback: (data: any) => void) {
        this.Callback = callback
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()
        this.Callback && this.Callback()
        if(this.node.destroy){
            this.node.destroy()
        }
    }    
}