import { _decorator, Component, Enum, Vec3, CCInteger } from 'cc';
const { ccclass, property, menu } = _decorator;

enum RotateType {
    Normal = 0,
    RotationY = 1,
    RotationX = 2,
}

@ccclass('SimpleRotation')
@menu('Custom/播放旋转动画组件')
export default class SimpleRotation extends Component {

    @property(CCInteger)
    angle: number = 400; //转动角度的速度
    @property({ type: Enum(RotateType) })
    rotationType: RotateType = RotateType.Normal

    protected update(dt: number) {
        if (this.rotationType == RotateType.Normal) {
            this.node.angle -= this.angle * dt;
        } else if (this.rotationType == RotateType.RotationY) {
            let y = this.node.eulerAngles.y + this.angle * dt;
            this.node.eulerAngles.set(this.node.eulerAngles.x, y, this.node.eulerAngles.z)
        } else if (this.rotationType == RotateType.RotationX) {
            let x = this.node.eulerAngles.x + this.angle * dt;
            this.node.eulerAngles.set(x, this.node.eulerAngles.y, this.node.eulerAngles.z)
        }
    }
}
