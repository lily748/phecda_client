import { _decorator, Node, Label, Sprite, Button, Toggle, EditBox } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import SpriteFrameHolder from '../../../../../script/utility/ui_extend/spriteframe_holder';
import { UIToggle } from '../../../../../script/utility/ui_extend/UIToggle';
const { ccclass, property } = _decorator;


@ccclass('SettingView')
export default class SettingView extends ViewBase {
    
    @property(Node)
    close: Node
    
    @property(UIToggle)
    music: UIToggle
    @property(UIToggle)
    sound: UIToggle

    @property(UIToggle)
    language: UIToggle

    @property(Label)
    id: Label
    @property(Node)
    logout: Node

    @property(Label)
    version: Label
    @property(Node)
    repair: Node

    @property(Node)
    copy: Node
}