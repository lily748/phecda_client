
import { _decorator, Label, Node,ScrollView,Sprite } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { HallTemplate } from '../hall/hall_template';
import { ToggleGroup } from '../../../../../script/utility/ui_extend/toggleGroup';
const { ccclass, property } = _decorator;
 
@ccclass('EarnMoneyView')
export class EarnMoneyView extends ViewBase {
    @property(HallTemplate)
    hallTemplate: HallTemplate 
    @property(ToggleGroup)
    topToggleGroup: ToggleGroup = null
    @property(ScrollView)
    aboutList: ScrollView = null  
    @property(Node)
    levelItem: Node
    @property(Node)
    exampleNode: Node
    @property(Node)
    inviteNode: Node
    @property(Node)
    descInvite: Node
    @property(Node)
    levelList: Node
    @property(Node)
    titleNode: Node
    @property(Sprite)
    exampleIcon: Sprite 
    @property(Node)
    historyNode: Node
    @property(Label)
    regDay: Label
    @property(Label)
    totalRebate: Label
    @property(ScrollView)
    historyList: ScrollView = null  
    @property(Node)
    historyItem: Node
    @property(ToggleGroup)
    togDate: ToggleGroup = null
    @property(ScrollView)
    dailyScrollView: ScrollView = null
    @property(Node)
    dailyReport: Node
    @property(Node)
    dailyReportItem: Node
    @property(Node)
    middle: Node
}

