
import { _decorator, Component, Node,Label,sys } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import { UserDataModel } from '../../model/UserDataModel';
import { GameConfig } from '../../../../../script/com/game_config';

const { ccclass, property } = _decorator;

@ccclass('withdrawalShowAccount')
export class withdrawalShowAccount extends Component {
    @property(Node)
    btnClose: Node
    @property(Node)
    btnService: Node

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

    onLoad() {
        Utility.instance.onButtonClick(this.btnClose, this.onClickBtnClose, this, false)
        Utility.instance.onButtonClick(this.btnService, this.onClickBtnService, this, false)
    }

    public setInfoData(data:any) {
        if(!data) return
        if(data?.length ==0) return
        this.lbl_name.string = data.account_holder_name
        this.lbl_number.string = data.account_number
        this.lbl_IFSC.string = data.ifsc
        this.lbl_phnoe.string = data.phone
        this.lbl_email.string = data.email
    }

    private onClickBtnClose() {
        AudioManager.instance.playCloseWindowSound()
        if(this.node.destroy){
            this.node.destroy()
        }
    }

    private onClickBtnService() {
        AudioManager.instance.playCloseWindowSound()
        let user = UserDataModel.GetCurrentUser()
        let showID = user ? user.show_id : "invalidUser"
        sys.openURL("https://t.me/C1Gamesone")//GameConfig.CustomerUrl+`?userid=${showID}`)
    }
}