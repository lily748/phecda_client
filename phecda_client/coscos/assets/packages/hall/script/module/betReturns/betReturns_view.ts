import { _decorator, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('BetReturnsView')
export default class BetReturnsView extends ViewBase {

    @property(Node)
    close: Node

    @property(Label)
    todayReward: Label
    @property(Label)
    tomorrowReward: Label
    @property(Node)
    get: Node
    @property(Node)
    got: Node
    @property(Node)
    help: Node
    @property(Label)
    rate1: Label
    @property(Label)
    rate2: Label
    @property(Label)
    tips: Label
}