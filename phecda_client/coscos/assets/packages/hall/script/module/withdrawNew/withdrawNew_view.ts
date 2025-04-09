
import { _decorator, Node, Label, EditBox, RichText,SpriteFrame} from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;
@ccclass('WithDrawNewView')
export class WithDrawNewView extends ViewBase {
    @property(Node)
    btnClose: Node | null = null
    @property(Node)
    btnRecord: Node | null = null
    @property(Node)
    btnService: Node = null

    @property(Label)
    lblCashBalance:Label | null = null
    @property(Label)
    lblWithdrawable:Label | null = null

    @property(Node)
    accountContent:Node | null = null
    @property(Node)
    accountItem:Node | null = null
    @property(Node)
    btnAddAccount:Node | null = null

    @property(Label)
    lbl_limitRange:Label | null = null
    @property(Label)
    lbl_vipLimit:Label | null = null

    @property(Node)
    node_limit:Node | null = null    

    @property(EditBox)
    edit_withdraw:EditBox | null = null    

    @property(Label)
    lbl_withdrawAmount:Label | null = null
    @property(Label)
    lbl_dailyLimit:Label | null = null
    @property(Label)
    lbl_remainWagers:Label | null = null

    @property(RichText)
    rtx_note:Label | null = null

    @property(Node)
    btnSubmit:Node | null = null

    @property(Node)
    requiredBind:Node | null = null
    @property(Node)
    btnCancelAdd:Node | null = null
    @property(Node)
    btnAddBank:Node | null = null

    @property(Node)
    withdrawListItem:Node | null = null
    @property(Node)
    withdrawListContent:Node | null = null

    @property(Node)
    btnBank:Node | null = null
    @property(Node)
    btnRupeeLink:Node | null = null
    @property(Node)
    ch_on:Node | null = null

    @property(Node)
    bindUPI:Node | null = null
    @property(Node)
    chooseAccount:Node | null = null
    @property(Node)
    lbl_upi:Node | null = null   
    
    @property([SpriteFrame])
    spriteFrameCoin: SpriteFrame[] = []

    @property(Node)
    btnViewAccount:Node | null = null

    @property(Node)
    textRupeeTips: Node = null;

    @property(Node)
    textCashBackTips: Node = null;
}

