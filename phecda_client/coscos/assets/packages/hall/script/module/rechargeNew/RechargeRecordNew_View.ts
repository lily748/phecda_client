

import { _decorator, Component, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { PageTurn } from '../../../../../script/utility/ui_extend/pageTurn';
const { ccclass, property } = _decorator;
 
@ccclass('RechargeRecordNew_View')
export class RechargeRecordNew_View extends ViewBase {
    @property(Node)
    btnClose: Node = null;

    @property(Node)
    recordValue: Node

    @property(PageTurn)
    pageTurn: PageTurn

}


