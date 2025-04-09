
import { _decorator, Component, Label, Node} from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import { UIToggle } from '../../../../../script/utility/ui_extend/UIToggle';
import { GameConfig } from '../../../../../script/com/game_config';
import { HotUpdateManager } from '../../../../../script/framework/hotUpdate/HotUpdateManager';

const { ccclass, property } = _decorator;

@ccclass('setting')
export class setting extends Component {
    @property(Node)
    close: Node
    @property(UIToggle)
    btnSound: UIToggle
    @property(Label)
    versionLabel:Label;
    
    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
        Utility.instance.onToggleClick(this.btnSound, this.onClickSound, this)
        this.versionLabel.string = GameConfig.GameSiteID + " V " + HotUpdateManager.getLocalVersion("main")
    }

    start(){
        this.btnSound.isChecked = AudioManager.instance.getSwitchEffect()
    }

    private onClickSound(){
        AudioManager.instance.setSwitchEffect(this.btnSound.isChecked)
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()
        if(this.node.destroy){
            this.node.destroy()
        }
    }  
}