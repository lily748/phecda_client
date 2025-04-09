import { _decorator, Node, PageView,SpriteFrame } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('MonthlyCardView')
export default class MonthlyCardView extends ViewBase {    
    @property(Node)
    btnClose: Node
    @property(Node)
    btnLeft: Node
    @property(Node)
    btnRight: Node
    
    @property(Node)
    spr_yes1: Node
    @property(Node)
    spr_yes2: Node

    @property(Node)
    btnGo: Node
    @property(Node)
    lbl_amount: Node
    @property(Node)
    lbl_original: Node
    @property(Node)
    rxt_currget: Node
    @property(Node)
    spr_line: Node
        
    @property(Node)
    rxt_get: Node
    @property(Node)
    rxt_original: Node

    @property(PageView)
    pageView: PageView

    @property([SpriteFrame])
    frame: SpriteFrame[] = []
}