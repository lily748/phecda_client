
import { _decorator, Label, Node, Sprite} from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;
 
@ccclass('AccountInfo_View')
export class AccountInfo_View extends ViewBase {
    @property(Node)
    btnClose: Node = null;
    @property(Node)
    phoneNumber: Node = null;
    @property(Node)
    nickname: Node = null;
    @property(Node)
    btnCopyNumber: Node = null;
    @property(Node)
    avatar: Node = null;
    @property(Sprite)
    sp_avatar: Sprite = null;
    @property(Node)
    loginPassword: Node = null;

    @property(Label)
    mycode: Label = null;
    @property(Node)
    copymycode: Node = null;

    @property(Node)
    bindCode: Node = null;
}


