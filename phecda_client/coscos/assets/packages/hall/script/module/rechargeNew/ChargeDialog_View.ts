
import { _decorator, Component, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;
 
@ccclass('ChargeDialog_View')
export class ChargeDialog_View extends ViewBase {
    @property(Node)
    btnCanCel: Node = null;

    @property(Node)
    btnSure: Node = null;

    @property(Node)
    btnClose: Node = null;

    @property(Label)
    contentLabel: Label = null;
}
