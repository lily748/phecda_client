
import { _decorator, Component, Node, Toggle, Sprite, __private } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIToggle')
export class UIToggle extends Toggle {

    @property(Node)
    off: Node

    @property(Node)
    on: Node

    @property({ override: true, visible: false })
    get checkMark(): Sprite { return super.checkMark }
    // @property({ override: true, visible: false })
    // get transition() { return super.transition }
    @property({ override: true, visible: false })
    get normalColor() { return super.normalColor }
    @property({ override: true, visible: false })
    get pressedColor() { return super.pressedColor }
    @property({ override: true, visible: false })
    get hoverColor() { return super.hoverColor }
    @property({ override: true, visible: false })
    get disabledColor() { return super.disabledColor }
    @property({ override: true, visible: false })
    get normalSprite() { return super.normalSprite }
    @property({ override: true, visible: false })
    get pressedSprite() { return super.pressedSprite }
    @property({ override: true, visible: false })
    get hoverSprite() { return super.hoverSprite }
    @property({ override: true, visible: false })
    get disabledSprite() { return super.disabledSprite }
    // @property({ override: true, visible: true })
    // private _scale: number = 0.95
    // set zoomScale(value: number) {
    //     this._scale = value
    // }
    // get zoomScale() { return this._scale}
    

    onLoad() {
        const tog = this.getComponent(Toggle)
        tog.transition
        this.node.on(Toggle.EventType.TOGGLE, () => {
            if (this.off) {
                this.off.active = !tog.isChecked
            }
            if (this.on) {
                this.on.active = tog.isChecked
            }
        }, this)
    }

    onDestroy() {
        this.node.off(Toggle.EventType.TOGGLE)
    }
}