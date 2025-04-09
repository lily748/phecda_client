
import { _decorator, Component, Node, Sprite } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('EarnMoneyRulesView')
export class EarnMoneyRulesView extends ViewBase {

    @property(Node)
    btn_back: Node = null;

    @property(Sprite)
    sprite: Sprite = null;
}
