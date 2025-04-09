
import { _decorator, Node, Label, EditBox, RichText, Slider, CCString } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { PageTurn } from '../../../../../script/utility/ui_extend/pageTurn';
import { ToggleGroup } from '../../../../../script/utility/ui_extend/toggleGroup';
import UISlider from '../../../../../script/utility/ui_extend/UISlider';
const { ccclass, property } = _decorator;

// @ccclass("BankData")
// class BankData {
//     @property(Node)
//     container: Node | null = null;
//     @property(Label)
//     detailLbl: Label | null = null;
// }

@ccclass('WithDrawView')
export class WithDrawView extends ViewBase {

    @property(Label)
    cash: Label
    @property(Label)
    coin: Label

    @property(Node)
    closeBtn: Node | null = null

    @property(Node)
    closeHelpBtn: Node | null = null

    @property(Node)
    closeHistoryBtn: Node | null = null

    @property(Node)
    clearBtn: Node | null = null

    @property(Node)
    confirmBtn: Node | null = null

    @property(Node)
    helpBtn: Node | null = null

    @property(Node)
    historyBtn: Node | null = null


    @property(Node)
    buttons: Node | null = null

    @property(EditBox)
    inputTxt: EditBox | null = null

    @property(Node)
    recordNode: Node

    @property(Node)
    recordValue: Node

    @property(PageTurn)
    pageTurn: PageTurn


    @property(Node)
    cashHelpPanel: Node

    @property(Label)
    tips: Label

    @property(RichText)
    inputTips: RichText

    @property(Node)
    bind: Node
    @property(Node)
    edit: Node


    @property({ group: { name: "PIX" }, type: Node })
    verifyContainer: Node = null;

    @property({ group: { name: "PIX" }, type: Node })
    bindContainer: Node = null;

    @property({ group: { name: "PIX_Verify" }, type: Label })
    PIX: Label = null;

    @property({ group: { name: "PIX_Verify" }, type: Label })
    PIXNome: Label = null;
}

