
import { _decorator, Component, Node, Sprite } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { UIRecycleScrollViewNew } from '../../../../../script/utility/ui_extend/UIRecycleScrollViewNew';
const { ccclass, property } = _decorator;

 
@ccclass('HeadInfoView')
export class HeadInfoView extends ViewBase {
    @property(Node)
    btnBack: Node;
    @property(UIRecycleScrollViewNew)
    headList: UIRecycleScrollViewNew
}


