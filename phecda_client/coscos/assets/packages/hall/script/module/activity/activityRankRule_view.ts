
import { _decorator, Component, Node } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { UIRecycleScrollViewNew } from '../../../../../script/utility/ui_extend/UIRecycleScrollViewNew';
const { ccclass, property } = _decorator;

 
@ccclass('ActivityRankRuleView')
export class ActivityRankRuleView extends ViewBase {
    @property(Node)
    rules: Node;
    @property(UIRecycleScrollViewNew)
    rulesList: UIRecycleScrollViewNew
    @property(Node)
    rulesDesc: Node
}


