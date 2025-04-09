
import { _decorator, Component, Node, Label, Toggle,Sprite } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

 
@ccclass('ActivityFirstChargeView')
export class ActivityFirstChargeView extends ViewBase {
    @property(Node)
    btnBack: Node;
    @property(Node)
    btnDeposit: Node;
    @property(Label)
    lblTime: Label
    @property(Toggle)
    isShow: Toggle
    @property(Sprite)
    spInfo: Sprite
}


