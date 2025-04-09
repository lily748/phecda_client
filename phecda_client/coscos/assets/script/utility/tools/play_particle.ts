import { _decorator, Component, ParticleSystem2D, CCFloat } from 'cc';
const { ccclass, property, menu } = _decorator;

@ccclass('PlayParticle')
@menu('Custom/播放粒子动画组件')
export default class PlayParticle extends Component {

    @property(ParticleSystem2D)
    particle: ParticleSystem2D | null = null
    @property(CCFloat)
    duration: number = 0

    onEnable() {
        let self = this
        if (!self.particle) {
            return
        }
        self.unscheduleAllCallbacks()
        self.particle.node.active = true
        self.particle.resetSystem()

        let duration = 0
        if (self.duration > 0) {
            duration = self.duration
        } else if (self.particle.duration > 0) {
            duration = self.particle.duration
        }

        if (duration > 0) {
            self.scheduleOnce(() => {
                if (!self || !self.isValid) {
                    return
                }
                self.particle.node.active = false
            }, duration)
        }

    }

    onDisable() {
        this.unscheduleAllCallbacks()
    }

    onDestroy() {
        this.unscheduleAllCallbacks()
    }
}
