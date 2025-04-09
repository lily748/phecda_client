import { _decorator, Node, Label, sp } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { HallTemplate } from '../hall/hall_template';

const { ccclass, property } = _decorator;

@ccclass('TurnTableView')
export class TurnTableView extends ViewBase {

    @property(Node)
    btnClose: Node = null;

    @property(Node)
    btnRules: Node = null;

    @property(Node)
    btnRecord: Node = null;

    @property(Node)
    btnCashout: Node = null;

    @property(Node)
    btnInviteFriend: Node = null;
    
    @property(Node)
    btnGo: Node = null;

    @property(Node)
    table: Node = null;

    @property(sp.Skeleton)
    ske_stop: sp.Skeleton = null;

    @property(Label)
    lblAmount: Label = null;
    @property(Label)
    lblSpinCount: Label = null;
    @property(Label)
    lblInviteCode: Label = null;
    @property(Label)
    lblRemainTime: Label = null;
    @property(Label)
    lblNextFree: Label = null;

    @property(Node)
    btnCopyCode: Node = null;

    @property(Node)
    recordContent: Node = null;
    @property(Node)
    recordItem: Node = null;

    @property(Node)
    dropDownbg: Node = null;

    @property(HallTemplate)
    hallTemplate: HallTemplate 

    @property(Node)
    btnBindCode: Node = null;
}
