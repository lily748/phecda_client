
import { _decorator, Node,Label} from 'cc';
import ViewBase from '../../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('CumulativeRrechargeView')
export class CumulativeRrechargeView extends ViewBase {
    @property(Node)
    btnBack: Node = null

    @property(Node)
    content: Node = null

    @property(Node)
    recordValue: Node = null

    @property(Label)
    lbl_tip: Label = null
}

