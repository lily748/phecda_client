import { _decorator, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('FirstRechargeDescView')
export default class FirstRechargeDescView extends ViewBase {
    
    @property(Node)
    close: Node

    @property(Node)
    item: Node

    @property(Label)
    desc: Label
}