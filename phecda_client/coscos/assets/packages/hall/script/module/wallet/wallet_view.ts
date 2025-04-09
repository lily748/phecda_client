
import { _decorator, Node, Label} from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('WalletView')
export class WalletView extends ViewBase {
    @property(Node)
    btnClose: Node | null = null

    @property(Node)
    btnService: Node | null = null
    @property(Node)
    btnRecord: Node | null = null

    @property(Label)
    lblMoney: Label | null = null

    @property(Node)
    btnWithdraw: Node | null = null
    @property(Node)
    btnDeposit: Node | null = null
}