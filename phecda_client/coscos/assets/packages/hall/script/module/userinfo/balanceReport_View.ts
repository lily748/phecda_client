
import { _decorator, Label, Node,Sprite } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('BalanceReport_View')
export class BalanceReport_View extends ViewBase {
    @property(Node)
    btnClose: Node = null;
    @property(Label)
    lbl_time: Label = null;

    @property(Sprite)
    spr_game: Sprite = null;
    @property(Sprite)
    spr_live: Sprite = null;
    @property(Sprite)
    spr_sports: Sprite = null;
    @property(Sprite)
    spr_slots: Sprite = null;
    @property(Sprite)
    spr_arcade: Sprite = null;
    @property(Sprite)
    spr_other: Sprite = null;

    @property(Label)
    lbl_game: Label = null;
    @property(Label)
    lbl_live: Label = null;
    @property(Label)
    lbl_sports: Label = null;
    @property(Label)
    lbl_slots: Label = null;
    @property(Label)
    lbl_arcade: Label = null;
    @property(Label)
    lbl_other: Label = null;

    @property(Node)
    game_amount: Node = null;
    @property(Node)
    live_amount: Node = null;
    @property(Node)
    sports_amount: Node = null;
    @property(Node)
    slots_amount: Node = null;
    @property(Node)
    arcade_amount: Node = null;
    @property(Node)
    other_amount: Node = null;

    @property(Node)
    selectTime: Node = null
    @property(Node)
    timeLayout: Node = null  
}


