
import { _decorator, Component, sp, CCString, CCBoolean } from 'cc';
const { ccclass, property, menu } = _decorator;

@ccclass('PlaySpine')
@menu('Custom/播放Spine动画组件')
export default class PlaySpine extends Component {

    @property({ type: sp.Skeleton })
    spine: sp.Skeleton | null = null

    @property(CCString)
    animName = ""

    @property(CCBoolean)
    loop = false

    onEnable() {
        if (!this.spine.findAnimation(this.animName)) {
            console.warn("donot find spine anim name :" + this.animName)
            return
        }
        this.spine.setAnimation(0, this.animName, this.loop)
    }
}