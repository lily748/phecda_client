
import { _decorator, Component, Node,Label } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';

const { ccclass, property } = _decorator;

@ccclass('withdrawalConfirmAgain')
export class withdrawalConfirmAgain extends Component {
    @property(Node)
    btnClose: Node
    @property(Node)
    btnCancel: Node
    @property(Node)
    btnSubmit: Node

    @property(Label)
    lbl_name: Label
    @property(Label)
    lbl_number: Label
    @property(Label)
    lbl_IFSC: Label
    @property(Label)
    lbl_phnoe: Label
    @property(Label)
    lbl_email: Label

    Callback:Function
    onLoad() {
        Utility.instance.onButtonClick(this.btnClose, this.onClickBtnClose, this, false)
        Utility.instance.onButtonClick(this.btnCancel, this.onClickBtnClose, this, false)
        Utility.instance.onButtonClick(this.btnSubmit, this.onClickBtnSubmit, this, false)
    }

    public setInfoData(info:any,callback: (data: any) => void) {
        this.Callback = callback

        this.lbl_name.string = info.account_holder_name
        this.lbl_number.string = info.account_number
        this.lbl_IFSC.string = info.ifsc
        this.lbl_phnoe.string = info.phone
        this.lbl_email.string = info.email
    }

    private onClickBtnClose() {
        AudioManager.instance.playCloseWindowSound()
        if(this.node.destroy){
            this.node.destroy()
        }
    }

    private onClickBtnSubmit() {
        AudioManager.instance.playCloseWindowSound()
        this.Callback && this.Callback()
    }
}