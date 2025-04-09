
import { _decorator, Component, Node} from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';

const { ccclass, property } = _decorator;

@ccclass('turntable_rule')
export class turntable_rule extends Component {   
    @property(Node)
    close: Node

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()
        if(this.node.destroy){
            this.node.destroy()
        }
    }
}