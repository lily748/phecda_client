import { _decorator, Node } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('LoginRewardView')
export default class LoginRewardView extends ViewBase {
    
    @property(Node)
    close: Node
    
    @property(Node)
    rewardNode: Node

    @property(Node)
    get: Node

    @property(Node)
    got: Node
}