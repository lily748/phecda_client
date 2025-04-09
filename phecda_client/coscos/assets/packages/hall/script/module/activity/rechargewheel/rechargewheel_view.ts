
import { _decorator, Node, Label, Sprite, SpriteFrame, RichText} from 'cc';
import ViewBase from '../../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('RechargeWheelView')
export class RechargeWheelView extends ViewBase {
    @property(Node)
    btnClose: Node | null = null
    @property(Node)
    btnWallet: Node | null = null
    @property(Node)
    btnRules: Node | null = null
    @property(Node)
    btnRecord: Node | null = null
    @property(Node)
    btnDeposit: Node | null = null

    @property(Label)
    lblMoney: Label | null = null  
    @property(Sprite)
    spr_zi: Sprite | null = null
    @property(Label)
    lbl_depositTip: Label | null = null
    
    @property(Node)
    selectWheel_node: Node | null = null
    @property(Node)
    btn_selectWheel: Node | null = null
    @property([SpriteFrame])
    btnSelectWheelFame: SpriteFrame[] = []

    @property(Node)
    selectWheel_label: Node | null = null
    @property(Node)
    lbl_up: Node | null = null
    @property(Node)
    lbl_num: Node | null = null

    @property(Sprite)
    progressBar: Sprite | null = null    
    @property(RichText)
    rtx_spin: RichText | null = null
    @property(Label)
    lblStartDeposit: Label | null = null  
    @property(Label)
    lblEndDeposit: Label | null = null  
    @property(Label)
    lblEndSpin: Label | null = null 
    
    @property(Node)
    turnTable_node: Node | null = null
}