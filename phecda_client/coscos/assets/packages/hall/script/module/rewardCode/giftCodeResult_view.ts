
import { _decorator, Button, EditBox, Node, Skeleton } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('GiftCodeResultView')
export class GiftCodeResultView extends ViewBase {

    @property(Node)
    ani: Node = null;

    @property(Node)
    textAmount: Node = null;

    @property(Node)
    btnConfirm: Node = null;
    
}
