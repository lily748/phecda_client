
import { _decorator, Label, Node } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('GroupRewardView')
export class GroupRewardView extends ViewBase {
    @property(Label)
    lblContent: Label = null;
    @property(Label)
    lblJunoTip: Label = null;

    @property(Node)
    btnService:Node = null;

    @property(Node)
    btnJump: Node = null;

    @property(Node)
    btnClose: Node = null
}
