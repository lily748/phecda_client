
import { _decorator, Component, Node ,ScrollView} from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { ToggleGroup } from '../../../../../script/utility/ui_extend/toggleGroup';
import { UIRecycleScrollViewNew } from '../../../../../script/utility/ui_extend/UIRecycleScrollViewNew';
const { ccclass, property } = _decorator;


 
@ccclass('ActivityRankHistoryView')
export class ActivityRankHistoryView extends ViewBase {
    @property(Node)
    btnBack: Node;
    @property(UIRecycleScrollViewNew)
    historyList: UIRecycleScrollViewNew
    @property(Node)
    top: Node
    @property(ToggleGroup)
    topToggleGroup: ToggleGroup = null;
}


