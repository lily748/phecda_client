
import { _decorator, Node, Label, Toggle,} from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

 
@ccclass('ActivityTreasureBowl_view')
export class ActivityTreasureBowl_view extends ViewBase {
    @property(Node)
    btnBack: Node = null;

    @property(Label)
    lbl_rate: Label = null;
    @property(Label)
    lbl_amount: Label = null;
    @property(Label)
    lbl_receive: Label = null;
    @property(Label)
    lbl_time: Label = null;
    @property(Label)
    lbl_minWithdraw: Label = null;

    @property(Node)
    btn_rule: Node = null;
    @property(Node)
    btn_record: Node = null;

    @property(Node)
    btn_deposit: Node = null;
    @property(Node)
    btn_receive: Node = null;

    @property(Toggle)
    isShow: Toggle
}


