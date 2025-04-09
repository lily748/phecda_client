import { _decorator, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('RegisterRewardView')
export default class RegisterRewardView extends ViewBase {
    
    @property(Node)
    close: Node
    
    @property(Label)
    registerReward: Label

    @property(Node)
    registerBtn: Node
}