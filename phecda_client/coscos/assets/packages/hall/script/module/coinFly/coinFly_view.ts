import { _decorator, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('CoinFlyView')
export default class CoinFlyView extends ViewBase {
    
    @property(Node)
    coin: Node

}