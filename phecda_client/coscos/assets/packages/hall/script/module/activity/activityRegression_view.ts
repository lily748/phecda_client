
import { _decorator, Component, Node,Label,ScrollView } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


 
@ccclass('ActivityRegressionView')
export class ActivityRegressionView extends ViewBase {
    @property(Node)
    btnBack: Node
    @property(ScrollView)
    regressionList: ScrollView = null  
    @property(Node)
    listItem: Node
    @property(Label)
    lbl_time: Label = null
}


