
import { _decorator, Component, Node,Label ,ScrollView, RichText, tween} from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('ActivityBackFlowView')
export class ActivityBackFlowView extends ViewBase {
    // @property(Node)
    // btnBack: Node;
    @property(Node)
    btnInfo: Node;
    @property(Label)
    lblCoin: Label
    @property(ScrollView)
    backFlowList: ScrollView = null  
    @property(Node)
    listItem: Node
    @property(RichText)
    richTip: RichText;
    @property(Label)
    lblRecive: Label;

    @property(Node)
    info: Node;
    @property(Node)
    reciveTip: Node;

    @property(Node)
    light: Node;
}

