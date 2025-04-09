import { _decorator, Node, Label, Button, EditBox } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { UISwitcher } from '../../../../../script/utility/ui_extend/ui_switcher';
const { ccclass, property } = _decorator;


@ccclass('RegisterView')
export default class RegisterView extends ViewBase {
    
    @property(Node)
    close: Node
    @property(EditBox)
    phone: EditBox
    @property(EditBox)
    verifyCode: EditBox
    @property(Button)
    getCode: Button
    @property(EditBox)
    pwd: EditBox
    @property(EditBox)
    repeatPwd: EditBox
    @property(Node)
    register: Node
    @property(Node)
    resetPwd: Node
    @property(UISwitcher)
    switcher: UISwitcher

    @property(Label)
    rewardLabel: Label
}