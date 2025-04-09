
import { _decorator, Component, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('WithdrawDescView')
export class WithdrawDescView extends ViewBase {

    @property(Node)
    closeBtn: Node = null

    @property(Node)
    valueItem: Node

    @property(Node)
    content: Node
}

