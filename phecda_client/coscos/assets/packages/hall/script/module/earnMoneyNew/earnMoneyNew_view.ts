
import { _decorator, Color, Component, Label, Node, Prefab, ScrollView } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { HallTemplate } from '../hall/hall_template';
const { ccclass, property } = _decorator;

@ccclass('EarnMoneyNewView')
export class EarnMoneyNewView extends ViewBase {

    @property(Prefab)
    page_0: Prefab = null;

    @property(Prefab)
    page_1: Prefab = null;

    @property(Prefab)
    page_2: Prefab = null;
    
    @property(HallTemplate)
    hallTemplate: HallTemplate = null;

    @property(Node)
    selectNodes: Node = null;
}