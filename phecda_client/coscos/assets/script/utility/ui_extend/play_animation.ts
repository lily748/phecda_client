import { _decorator, Component, SpriteFrame, Animation, AnimationClip, CCFloat, Sprite, Enum, CCBoolean } from 'cc';
const { ccclass, property, menu, requireComponent } = _decorator;

export enum WrapMode {
    /**
     * 向 Animation Component 或者 AnimationClip 查找 wrapMode
     */
    Default = 0,
    /**
     * 动画只播放一遍
     */
    Normal = 1,
    /**
     * 从最后一帧或结束位置开始反向播放，到第一帧或开始位置停止
     */
    Reverse = 36,
    /**
     * 循环播放
     */
    Loop = 2,
    /**
     * 反向循环播放
     */
    LoopReverse = 38,
    /**
     * 从第一帧播放到最后一帧，然后反向播放回第一帧，到第一帧后再正向播放，如此循环
     */
    PingPong = 22,
    /**
     * 从最后一帧开始反向播放，其他同 PingPong
     */
    PingPongReverse = 54
}


@ccclass('PlayAnimation')
@menu('Custom/播放帧动画组件')
@requireComponent(Sprite)
export class PlayAnimation extends Component {

    @property({ type: [SpriteFrame], displayName: "帧动画资源列表" })
    spriteFrameList: SpriteFrame[] = []
    @property({ type: CCFloat, displayName: "帧动画播放速度" })
    speed: number = 1
    @property({ displayName: "是否自动播放" })
    autoPlay: boolean = true
    @property({ type: Enum(WrapMode), displayName: "帧动画播放模式" })
    wrapMode: WrapMode = WrapMode.Loop

    private animation: Animation = null

    play(wrapMode: WrapMode) {
        if (!this.animation) {
            this.animation = this.node.getComponent(Animation)
            if (!this.animation) {
                this.animation = this.node.addComponent(Animation)
            }
        }
        let stateName = wrapMode.toString()
        let state = this.animation.getState(stateName)
        if (!state) {
            let clip = AnimationClip.createWithSpriteFrames(this.spriteFrameList, 60)
            clip.name = stateName
            clip.speed = this.speed
            clip.wrapMode = Number(wrapMode)
            this.animation.createState(clip)
        }
        this.animation.play(stateName)
    }

    onEnable() {
        if (this.autoPlay) {
            this.play(this.wrapMode)
        }
    }

    onDisable() {
        if (this.animation) {
            this.animation.stop()
        }
    }
}