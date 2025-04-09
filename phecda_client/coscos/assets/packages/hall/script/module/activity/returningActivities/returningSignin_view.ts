
import { _decorator, Node,Label, RichText, SpriteFrame} from 'cc';
import ViewBase from '../../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('ReturningSigninView')
export class ReturningSigninView extends ViewBase {
    @property(Node)
    btnBack: Node = null

    @property(Node)
    content: Node = null

    @property(Node)
    recordValue: Node = null

    @property(Label)
    lbl_tip: Label = null

    @property(RichText)
    rxt_get: Label = null
    
    @property(Node)
    bottom: Node = null

    @property([SpriteFrame])
    coinFrame: SpriteFrame[] = []

    @property([SpriteFrame])
    btnFrame: SpriteFrame[] = []

    @property(Node)
    spr_free: Node = null    
}

