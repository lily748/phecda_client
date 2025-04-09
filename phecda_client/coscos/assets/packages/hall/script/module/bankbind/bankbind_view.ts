import { ToggleGroup } from './../../../../../script/utility/ui_extend/toggleGroup';
import { _decorator, Node, EditBox, CCString, Sprite, Toggle, Label, Enum } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

// export const ItemName =Enum({})

export enum ItemName {
    "Nome",
    "Email",
    "Phone",
    "CPF",
    "PIX",
}

Enum(ItemName)
@ccclass("StarSpriteParis")
class StarSpriteParis {
    @property({ type: ItemName })
    name: ItemName = null;
    @property(Node)
    star: Node | null = null;
    @property(EditBox)
    checkEditBox: EditBox | null = null;
}

@ccclass("LabelTips")
class LabelTips {
    @property({ type: ItemName })
    name: ItemName = null;
    @property(Label)
    label: Label = null;
    @property(Node)
    redBg: Node | null = null;
}


@ccclass('BankBindView')
export class BankBindView extends ViewBase {

    @property(Node)
    closeBtn: Node | null = null

    @property(Node)
    confirmBtn: Node | null = null

    @property(Node)
    node55: Node = null

    @property(EditBox)
    bankPhoneEditBox: EditBox | null = null

    @property(EditBox)
    emailEditBox: EditBox | null = null

    @property(EditBox)
    nameEditBox: EditBox | null = null

    @property({ type: EditBox, tooltip: "绑定账号" })
    pixEditBox: EditBox | null = null

    @property({ type: EditBox, tooltip: "税号" })
    taxEditBox: EditBox | null = null

    @property(Toggle)
    defaultSelectTog: Toggle | null = null;

    @property(ToggleGroup)
    cerToggleGroup: ToggleGroup | null = null

    @property([StarSpriteParis])
    starParis: StarSpriteParis[] = []

    @property([LabelTips])
    tips: LabelTips[] = []

}

