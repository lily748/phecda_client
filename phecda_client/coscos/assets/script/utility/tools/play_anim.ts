
import { _decorator, Component, Animation } from 'cc';
const { ccclass, property, menu, requireComponent } = _decorator;

@ccclass('PlayAnim')
@menu('Custom/播放Animation动画组件')
export default class PlayAnim extends Component {

    @property(Animation)
    animation: Animation | null = null

    onEnable() {
        let clip = this.animation.clips
        this.animation.play(clip[0].name);
    }

    onDisable() {
        this.animation.stop()
    }
}