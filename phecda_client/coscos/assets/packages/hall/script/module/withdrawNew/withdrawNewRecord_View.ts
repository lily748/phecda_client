

import { _decorator, Node, SpriteFrame } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { PageTurn } from '../../../../../script/utility/ui_extend/pageTurn';
const { ccclass, property } = _decorator;

@ccclass('WithdrawNewRecord_View')
export class WithdrawNewRecord_View extends ViewBase {
    @property(Node)
    btnClose: Node = null;

    @property(Node)
    recordValue: Node

    @property(PageTurn)
    pageTurn: PageTurn

    @property(Node)
    content: Node

    @property([SpriteFrame])
    frame:SpriteFrame[] = []

    @property(Node)
    lbl_noData: Node
}


