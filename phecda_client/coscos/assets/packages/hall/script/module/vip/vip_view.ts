import { _decorator, Node, Label, Sprite, SpriteFrame } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';

const { ccclass, property } = _decorator;

@ccclass('VipView')
export default class VipView extends ViewBase {
    @property(Node)
    closeBtn: Node = null
    @property(Label)
    idName: Label = null
    @property(Label)
    coin: Label = null
    @property(Sprite)
    avatar: Sprite = null
    @property(Node)
    vip: Node = null
    @property(Node)
    btn_wallet: Node = null

    @property(Node)
    vipList: Node = null

    @property(Label)
    lbl_upgradeAmount: Label = null
    @property(Label)
    lbl_monAmount: Label = null   
    @property(Label)
    lbl_dailyAmount: Label = null
    @property(Label)
    lbl_weekAmount: Label = null
    @property(Label)
    lbl_weekAmountTitle: Label = null

    @property(Node)
    btn_upgradeReceive: Node = null
    @property(Node)
    btn_monReceive: Node = null
    @property(Node)
    btn_weekReceive: Node = null

    @property(Sprite)
    spr_level: Sprite = null

    @property(Node)
    btn_mybonus: Node = null 

    @property(Sprite)
    spr_betRebate: Sprite = null 

    @property([SpriteFrame])
    sf_betRebate: SpriteFrame[] = []
}