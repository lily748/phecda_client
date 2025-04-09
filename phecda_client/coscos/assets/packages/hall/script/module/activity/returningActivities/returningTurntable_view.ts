import { _decorator, Node, Label, sp, RichText } from 'cc';
import ViewBase from '../../../../../../script/framework/core/mvvm/view_base';

const { ccclass, property } = _decorator;

@ccclass('ReturningTurntableView')
export class ReturningTurntableView extends ViewBase {

    @property(Node)
    btnClose: Node = null;

    @property(Node)
    btnRules: Node = null;

    @property(Node)
    btnGo: Node = null;

    @property(Node)
    table: Node = null;

    @property(sp.Skeleton)
    ske_stop: sp.Skeleton = null;

    @property(Label)
    lblSpinCount: Label = null;

    @property(Node)
    recordContent: Node = null;

    @property(Node)
    recordItem: Node = null;

    @property(Node)
    dropDownbg: Node = null;

    @property(RichText)
    rxt_recharge: RichText = null;

    @property(Node)
    x0: Node = null;
}
