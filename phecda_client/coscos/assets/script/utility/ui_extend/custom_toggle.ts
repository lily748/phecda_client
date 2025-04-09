import { _decorator, Toggle, Label, Color } from 'cc';
const { ccclass, menu, property, inspector } = _decorator;

@ccclass('CustomToggle')
@menu('Custom/CustomToggle') @inspector('packages://customtoggle-inspector/inspector.js')
export default class CustomToggle extends Toggle {

    @property(Label)
    targetLabel: Label | null = null
    @property(Color)
    selectedlColor: Color = Color.WHITE
    @property(Color)
    unSelectedColor: Color = Color.RED

    _updateCheckMark() {
        super['_updateCheckMark']()
        this.targetLabel && (this.targetLabel.color = this.isChecked ? this.selectedlColor : this.unSelectedColor)
    }
}