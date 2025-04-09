
import { _decorator, Component, Node, Label, Sprite } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;
 
@ccclass('RechargeNew_View')
export class RechargeNew_View extends ViewBase {
    @property(Node)
    btnBack: Node = null;

    @property(Node)
    btnCPF: Node = null;

    @property(Node)
    btnRecord: Node = null;

    @property(Node)
    btnKefu: Node = null;

    @property(Label)
    moneyLabel: Label = null;

    @property(Node)
    chargeItmParent: Node = null;

    @property(Node)
    chargeItm: Node = null;

    @property(Node)
    defaultSprite: Node = null;

    @property(Node)
    firstChargeNode: Node = null;

    @property(Label)
    fc_addtionalLabel: Label = null;

    @property(Label)
    fc_priceNowLabel: Label = null;

    @property(Label)
    fc_priceOrigLabel: Label = null;

    @property(Label)
    fc_pricePayLabel: Label = null;

    @property(Node)
    btnBuy: Node = null;

    @property(Node)
    ScrollView: Node = null;

}

