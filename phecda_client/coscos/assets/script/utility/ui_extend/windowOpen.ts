import { _decorator, Component, Node, math, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WindowOpen')
export class WindowOpen extends Component {

    onEnable() {
        this.node.active = true
        this.node.scale = new math.Vec3(0.8, 0.8, 0.8)
        tween(this.node).to(0.2, { scale: new math.Vec3(1, 1, 1) }, { easing: "backOut" }).start();
    }
}
