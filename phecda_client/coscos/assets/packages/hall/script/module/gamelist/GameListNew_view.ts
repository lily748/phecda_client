import { _decorator, Node, Label,Sprite, SpriteFrame } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { UIRecycleScrollViewNew } from '../../../../../script/utility/ui_extend/UIRecycleScrollViewNew';

const { ccclass, property } = _decorator;

@ccclass('GameListNew_View')
export class GameListNew_View extends ViewBase {
    @property(Node)
    btnBack: Node = null
    @property(Node)
    btnWallet: Node = null

    @property(Label)
    goldNum: Label = null 
    @property(Node)
    btnAll: Node = null
    @property(Node)
    btnHot: Node = null
    @property(Node)
    btnRecent: Node = null

    @property(Label)
    lblAll: Label = null 
    @property(Label)
    lblHot: Label = null 
    @property(Label)
    lblRecent: Label = null

    @property(Node)
    spr_line: Node = null
    @property(Node)
    sortItem: Node = null
    @property(Node)
    sortLayout: Node = null
    @property([SpriteFrame])
    sortFrame: SpriteFrame[] = []
        
    @property(UIRecycleScrollViewNew)
    recycle: UIRecycleScrollViewNew
}
