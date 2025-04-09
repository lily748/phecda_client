import { _decorator, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('MoneyNotEnoughView')
export default class MoneyNotEnoughView extends ViewBase {
    
    @property(Label)
    content: Label

    @property(Node)
    cancel: Node

    @property(Node)
    recharge: Node
}