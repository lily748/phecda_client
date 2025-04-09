
import { _decorator, Component, EditBox, Node } from 'cc';
import ViewBase from '../../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('GiftCodeView')
export class GiftCodeView extends ViewBase {

    @property(Node)
    close: Node = null;

    @property(Node)
    tipClose: Node = null;

    @property(Node)
    tipNode: Node = null;

    @property(Node)
    confirm: Node = null;

    @property(EditBox)
    input: EditBox = null;
    
}
