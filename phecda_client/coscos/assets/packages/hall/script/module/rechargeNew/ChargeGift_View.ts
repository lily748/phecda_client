
import { _decorator, Component, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;
 
@ccclass('ChargeGift_View')
export class ChargeGift_View extends ViewBase {
    @property(Label)
    fc_addtionalLabel: Label = null;

    @property(Label)
    fc_priceNowLabel: Label = null;

    @property(Label)
    fc_pricePayLabel: Label = null;

    @property(Node)
    btnBuy: Node = null;

    @property(Node)
    btnClose: Node = null;
}

