
import { _decorator, Component, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;



@ccclass('GuideAwardView')
export class GuideAwardView extends ViewBase {

    @property(Label)
    numLabel: Label = null

    @property(Node)
    awardBtn: Node = null

}


