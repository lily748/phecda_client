import { _decorator, Label, Button, RichText, Sprite } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';

const { ccclass, property } = _decorator;


@ccclass('DialogView')
export default class DialogView extends ViewBase {
    @property(Label)
    leftLabel: Label | null = null
    @property(Label)
    rightLabel: Label | null = null
    @property(Label)
    centerLabel: Label | null = null
    @property(Label)
    label_title: Label | null = null
    @property(RichText)
    label_content: RichText | null = null
    @property(Button)
    button_center: Button | null = null
    @property(Button)
    button_left: Button | null = null
    @property(Button)
    button_right: Button | null = null
    @property(Sprite)
    titleImg: Sprite | null = null
    show() {
        ModuleManager.instance.playAnim(true, this.node)
    }
    hide() {
        ModuleManager.instance.playAnim(false, this.node)
    }
}