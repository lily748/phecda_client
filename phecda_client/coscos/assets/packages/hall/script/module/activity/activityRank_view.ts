
import { _decorator, Component, Node,ScrollView,Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { ToggleGroup } from '../../../../../script/utility/ui_extend/toggleGroup';
import { UIRecycleScrollViewNew } from '../../../../../script/utility/ui_extend/UIRecycleScrollViewNew';
const { ccclass, property } = _decorator;

 
@ccclass('ActivityRankView')
export class ActivityRankView extends ViewBase {
    @property(Node)
    btnBack: Node;
    @property(Node)
    ranking: Node;
    @property(Node)
    myRewards: Node;
    @property(ToggleGroup)
    topToggleGroup: ToggleGroup = null;
    @property(ToggleGroup)
    rankToggleGroup: ToggleGroup = null;
    @property(ScrollView)
    rankingList: ScrollView = null  
    @property(Node)
    rankingItem: Node;
    @property(Node)
    rankNode: Node;
    @property(ScrollView)
    myRewardsList: ScrollView = null  
    @property(Node)
    myRewardsListItem: Node
    @property(Node)
    btnHistory: Node;
    @property(Node)
    rulesDesc: Node
    @property(Label)
    lblAmount: Label = null;
}

