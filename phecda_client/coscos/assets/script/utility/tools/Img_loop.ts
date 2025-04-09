import { _decorator, Component, Sprite } from 'cc';
const { ccclass, property, menu } = _decorator;

@ccclass('ImgLoop')
@menu('Custom/UV动画组件')
export default class ImageLoop extends Component {

    @property(Sprite)
    sp: Sprite | null = null
    private _material = null
    private _loop = false

    onLoad() {
        this._material = this.sp.getMaterial(0)
    }

    showLoop(loop) {
        this._loop = loop
    }

    update(dt: number) {
        if (!this._loop) {
            return
        }
        let uvSpeed = this._material.getProperty('u_uvSpeed', 0);
        uvSpeed[0] += 0.2 * dt;
        this._material.setProperty('u_uvSpeed', uvSpeed);
    }
}
