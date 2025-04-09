
import { _decorator, Component, Node, Label, Toggle,Sprite } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

 
@ccclass('ActivityShareTurntableView')
export class ActivityShareTurntableView extends ViewBase {
    @property(Node)
    btnBack: Node;
    @property(Node)
    btnSpin: Node;
    @property(Label)
    lblTime: Label
    @property(Toggle)
    isShow: Toggle
}


