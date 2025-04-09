
import { _decorator, Node, SpriteFrame,PageView } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;
 
@ccclass('BalanceReportDetails_View')
export class BalanceReportDetails_View extends ViewBase {
    @property(Node)
    btnClose: Node = null;
    @property(Node)
    recordValue: Node = null
    @property(Node)
    lbl_nodata: Node = null
    @property(Node)
    content: Node = null

    @property(PageView)
    pageView: PageView = null

    @property([SpriteFrame])
    iconFrame:SpriteFrame[] = []
}


