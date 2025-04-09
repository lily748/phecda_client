import { _decorator, Node, Label} from 'cc';
import ViewBase from '../../../../../../script/framework/core/mvvm/view_base';
import { UIRecycleScrollViewNew } from '../../../../../../script/utility/ui_extend/UIRecycleScrollViewNew';

const { ccclass, property } = _decorator;

@ccclass('RechargewheelRewards_View')
export class RechargewheelRewards_View extends ViewBase {
    @property(Node)
    btnBack: Node = null
    
    @property(Label)
    goldNum: Label = null 

    @property(Node)
    noRewareds: Node = null 
    
    @property(UIRecycleScrollViewNew)
    recycle: UIRecycleScrollViewNew
}
