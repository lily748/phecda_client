import { _decorator, Node, Label, EditBox, Sprite, SpriteFrame, EventHandler} from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('Recharge_View')
export default class Recharge_View extends ViewBase {
    @property(Node)
    btnBack: Node = null
    @property(Node)
    btnReduce: Node = null
    @property(Node)
    btnAdd: Node = null
    @property(EditBox)
    editAmount: EditBox = null
    
    @property(Node)
    rechageContent: Node = null
    @property(Node)
    rechageItem: Node = null
    @property(Node)
    btnSend: Node = null
   
    @property(Label)
    lbl_note: Label = null

    @property(Node)
    btnRecord: Node = null
    @property(Node)
    btnService: Node = null

    @property(Label)
    lbl_agreetips: Label = null    
    @property(Label)
    lbl_checkTitle: Label = null

    @property(Node)
    spr_bonus: Node = null

    @property(Node)
    payMethodsContent: Node = null

    @property(SpriteFrame)
    bestFrame: SpriteFrame = null

    @property(Node)
    textOnlinePay: Node = null

    @property(Node)
    textQRcodePay: Node = null

    @property(Node)
    textQRcodeBonus: Node = null

    @property(Node)
    btnOnlinePayTab: Node = null

    @property(Node)
    btnQRcodePayTab: Node = null

    //amount panel
    @property(Node)
    amountNode: Node = null

    //pay methods panel
    @property(Node)
    methodsNode: Node = null

    //deposit event panel
    @property(Node)
    eventNode: Node = null

    @property(Node)
    tipsNode: Node = null

    @property(SpriteFrame)
    spNormalBonus: SpriteFrame = null

    @property(SpriteFrame)
    spSelectedBonus: SpriteFrame = null

    @property(SpriteFrame)
    spNormalRecharge: SpriteFrame = null

    @property(SpriteFrame)
    spSelectedRecharge: SpriteFrame = null

    @property(SpriteFrame)
    spNormalQRcodePayMethod: SpriteFrame = null

    @property(SpriteFrame)
    spSelectQRcodePayMethod: SpriteFrame = null

    @property(SpriteFrame)
    spQRcodePayMethodExtend: SpriteFrame = null
}