import { _decorator, Component, Enum, Widget, Vec2, Vec3 } from 'cc';
import { GameConfig } from '../../com/game_config';
const { ccclass, property, menu } = _decorator;

enum AdaptationType {
    Letf = 0,
    Righ = 1,
    Top,
    Bottom,
}

@ccclass('ScreenAdapter')
@menu("Custom/屏幕对齐适配")
export default class ScreenAdapter extends Component {

    @property({ type: Enum(AdaptationType) })
    adaptationStyle: AdaptationType = AdaptationType.Letf;
    private _hasAdaptation = false

    start() {
        this._adaptation()
    }

    private _adaptation() {
        if (GameConfig.isIphoneX == false || this._hasAdaptation) {
            return
        }
        this._hasAdaptation = true
        let widget = this.node.getComponent(Widget)
        let offset = GameConfig.iphonexOffset//偏移齐刘海宽度

        switch (this.adaptationStyle) {
            case AdaptationType.Letf:
                if (widget == null) {
                    this.node.setPosition(new Vec3(this.node.position.x + offset, this.node.position.y))
                } else if (widget.isAlignLeft) {
                    widget.left = widget.left + offset
                }
                break;
            case AdaptationType.Righ:
                if (widget == null) {
                    this.node.setPosition(new Vec3(this.node.position.x - offset, this.node.position.y))
                } else if (widget.isAlignRight) {
                    widget.right = widget.right + offset
                }
                break;
            case AdaptationType.Top:
                if (widget == null) {
                    this.node.setPosition(new Vec3(this.node.position.x, this.node.position.y - offset))
                } else if (widget.isAlignTop) {
                    widget.top = widget.top + offset
                }
                break;
            case AdaptationType.Bottom:
                if (widget == null) {
                    this.node.setPosition(new Vec3(this.node.position.x, this.node.position.y + GameConfig.iphonexOffset))
                } else if (widget.isAlignBottom) {
                    widget.bottom = widget.bottom + GameConfig.iphonexOffset
                }
                break;
            default:
                break;
        }
    }
}
