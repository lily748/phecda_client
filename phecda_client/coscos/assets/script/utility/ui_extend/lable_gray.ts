import { _decorator, Component, Color, Label, LabelOutline } from 'cc';
const { ccclass, property, menu, requireComponent, executeInEditMode } = _decorator;

@ccclass('LableGray')
@requireComponent(Label)
@menu('Custom/Label自动置灰')
@executeInEditMode
export default class LableGray extends Label {

    protected _originalNodeColor: Color
    protected _originalOutlineColor: Color

    public onEnable() {
        this._originalNodeColor = this.color
        this.color = this.calcGrayColor(this.color)
        let outLine = this.getComponent(LabelOutline)
        if (outLine) {
            this._originalOutlineColor = outLine.color
            outLine.color = this.calcGrayColor(outLine.color)
        }
    }

    public onDisable() {
        this.color = this._originalNodeColor
        let outLine = this.getComponent(LabelOutline)
        if (outLine && this._originalOutlineColor) {
            outLine.color = this._originalOutlineColor
        }
    }

    protected calcGrayColor(srcColor: Color) {
        let c = 0.299 * srcColor.r + 0.587 * srcColor.g + 0.184 * srcColor.b
        c = Math.min(255, c)
        c = Math.max(0, c)
        return new Color(c, c, c, srcColor.a)
    }
}