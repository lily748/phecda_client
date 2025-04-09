
import { _decorator, Component, Label, Node,ScrollView ,Toggle} from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { UIRecycleScrollViewNew } from '../../../../../script/utility/ui_extend/UIRecycleScrollViewNew';
const { ccclass, property } = _decorator;


 
@ccclass('ActivityRankPopUpView')
export class ActivityRankPopUpView extends ViewBase {
    @property(Node)
    btnBack: Node;
    @property(Node)
    btnRank: Node;
    @property(UIRecycleScrollViewNew)
    rulesList: UIRecycleScrollViewNew
    @property(Node)
    historyInfo: Node
    @property(Label)
    lblTime: Label
    @property(Toggle)
    isShow: Toggle
}


