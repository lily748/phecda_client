
import { _decorator, Component, Node,Color, find, Label, sp } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';

const { ccclass, property } = _decorator;

@ccclass('turntable_award')
export class turntable_award extends Component {
    @property(Node)
    close: Node
    @property(sp.Skeleton)
    awardAni: sp.Skeleton

    cb:() => void
    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)

        this.awardAni.setAnimation(0, "animation1", false)
        this.awardAni.addAnimation(0, "animation2", true)
    }

    public setCallBack(cb:()=>void){
        this.cb = cb
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()
        this.cb && this.cb()
        if(this.node.destroy){
            this.node.destroy()
        }
    }
}