
import { _decorator, Node,EditBox ,Toggle, Label, Sprite, SpriteFrame} from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


 
@ccclass('ForgotPasswordView')
export class ForgotPasswordView extends ViewBase {
    @property(Node)
    btnClose: Node = null;
    @property(Node)
    btnContinue: Node = null;
    @property(Node)
    btnOPT: Node = null;
    @property(EditBox)
    phone: EditBox = null;
    @property(EditBox)
    otp: EditBox = null;
    @property(EditBox)
    pwd: EditBox = null;
    @property(EditBox)
    confirm_pwd: EditBox = null;
    @property(Toggle)
    pwdVisible: Toggle = null;
    @property(Toggle)
    confirmPwdVisible: Toggle

    @property(Label)
    lbl_pwtitle: Label = null;
    @property(Sprite)
    spr_enter: Sprite = null;
    @property([SpriteFrame])
    frame_enter: SpriteFrame[] = [];
    
    @property(Node)
    accountNode: Node = null;
    @property(Node)
    otpNode: Node = null;
    @property(Node)
    passwordNode: Node = null;
    @property(Node)
    confirmPasswordNode: Node = null;
    @property(Label)
    lbl_singIn: Label = null;
}


