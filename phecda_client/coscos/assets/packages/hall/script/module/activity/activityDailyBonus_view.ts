
import { _decorator, Node, Label, Toggle,Sprite, SpriteFrame, RichText } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

 
@ccclass('ActivityDailyBonus_view')
export class ActivityDailyBonus_view extends ViewBase {
    @property(Node)
    btnBack: Node = null;
    @property(Sprite)
    spr_top: Sprite = null;

    @property(Node)
    dailyLayout: Node = null;
    @property(Node)
    btnGo: Node = null;

    @property(Label)
    lbl_tomorrow: Label = null;
    @property(Label)
    lbl_get: Label = null;
    @property(Label)
    lbl_earnings: Label = null;
    @property(Label)
    lbl_btntip: Label = null;

    @property(RichText)
    lbl_bonusTip: RichText = null;


    @property(Node)
    spr_lock: Node = null;
    // @property([SpriteFrame])
    // spriteFrameCoin: SpriteFrame[] = [];

    @property(Node)
    btn_rule: Node = null;
    
    @property(Toggle)
    isShow: Toggle

    @property(Node)
    btn_middle: Node = null;
}


