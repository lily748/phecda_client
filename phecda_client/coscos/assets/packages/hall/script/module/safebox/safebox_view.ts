
import { _decorator, Label, Node, ToggleContainer, EditBox } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import Utility from '../../../../../script/utility/utility';
import { UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;



@ccclass('SafeboxView')
export class SafeboxView extends ViewBase {

    @property(ToggleContainer)
    menuToggle: ToggleContainer | null = null

    @property(Label)
    moneyLabel: Label | null = null

    @property(Label)
    storeLabel: Label | null = null

    @property(Node)
    storeNode: Node | null = null

    @property(EditBox)
    storeEditorBox: EditBox | null = null

    @property(Node)
    storeConfirmBtn: Node | null = null

    @property(Node)
    takeOutNode: Node | null = null

    @property(EditBox)
    takeOutEditorBox: EditBox | null = null

    @property(Node)
    takeOutBtn: Node | null = null

    @property(Node)
    clearBtn: Node | null = null

    @property(Node)
    backBtn: Node | null = null

    @property(Node)
    add100Btn: Node | null = null

    @property(Node)
    add1kBtn: Node | null = null

    @property(Node)
    add10kBtn: Node | null = null

    @property(Node)
    addAllBtn: Node | null = null

    refreshStore(money: number, store: number) {
        this.moneyLabel.string = money + ""
        this.storeLabel.string = store + ""
    }

    showState(isStore: boolean) {
        this.storeNode.active = isStore
        this.takeOutNode.active = !isStore
    }

}



