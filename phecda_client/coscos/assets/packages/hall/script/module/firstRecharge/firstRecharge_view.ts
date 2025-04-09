import { _decorator, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { ImageNum } from '../../../../../script/utility/ui_extend/ImageNum';
const { ccclass, property } = _decorator;


@ccclass('FirstRechargeView')
export default class FirstRechargeView extends ViewBase {
    
    @property(Node)
    close: Node

    @property(Node)
    rechargedNode: Node
    @property(Node)
    noRechargeNode: Node

    @property(Node)
    dayNode: Node
    @property(Label)
    max: Label
    @property(Label)
    max1: Label
    @property(Label)
    dayLabel: Label
    
    @property(Node)
    rechargeBtn: Node
    @property(Label)
    time: Label

    @property(Node)
    get: Node
    @property(Node)
    got: Node
    @property(Node)
    getGray: Node

    @property(Label)
    tips1: Label
    @property(Label)
    tips2: Label

    @property(Node)
    help: Node
}