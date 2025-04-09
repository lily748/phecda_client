
import { _decorator, Component, EditBox, Label, Node } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('RewardCodeView')
export class RewardCodeView extends ViewBase {

    @property(Label)
    labBonus: Label = null;

    @property(EditBox)
    inputCode: EditBox = null;

    @property(Node)
    btnTelegram: Node = null;

    @property(Node)
    btnWhatsapp: Node = null;

    @property(Node)
    btnConfirm: Node = null;

    @property(Label)
    labTip:Label = null;

    @property(Node)
    back: Node = null;




   
}