
import { _decorator, Component, Node,Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('ActivityRegressionGiftPackView')
export class ActivityRegressionGiftPackView extends ViewBase {
    @property(Node)
    btnBack: Node
    @property(Node)
    info: Node
    @property(Label)
    lbl_msg: Label = null
    @property(Node)
    giftValue: Node = null
    @property(Node)
    content: Node = null
    
}


