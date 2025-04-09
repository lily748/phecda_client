
import { _decorator, Component, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { PageTurn } from '../../../../../script/utility/ui_extend/pageTurn';
const { ccclass, property } = _decorator;


@ccclass('WithdrawFlowView')
export class WithdrawFlowView extends ViewBase {


    @property(Node)
    closeBtn: Node = null

    @property(Node)
    itemRoot: Node = null

    @property(Node)
    itemNode: Node = null

    @property(PageTurn)
    pageTurn: PageTurn
}

