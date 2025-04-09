import { _decorator, Node, Label, Button,EditBox,SpriteFrame } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { LoginAccount } from './login_account';
import { SwitchAccount } from './switch_account';
const { ccclass, property } = _decorator;


@ccclass('LoginView')
export default class LoginView extends ViewBase {

    @property(Label)
    versionLabel: Label = null
    @property(Button)
    contactBtn: Button = null

    @property(Node)
    fastLogin: Node
    @property(Label)
    accountLabel: Label
    @property(Node)
    switchAccount: Node

    @property(SwitchAccount)
    switchPanel: SwitchAccount

    @property(LoginAccount)
    loginPanel: LoginAccount

    @property(EditBox)
    account: EditBox
    @property(Node)
    accountPanel: Node
    @property(Node)
    next: Node
    @property(Node)
    back: Node
    
    @property(Node)
    Chat: Node = null
    @property([SpriteFrame])
    ChatFrame: SpriteFrame[] = []
    @property(Node)
    ChatIcon: Node = null
    @property(Node)
    btn_guest: Node
}