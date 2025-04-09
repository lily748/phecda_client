
import { _decorator, Node} from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;
 
@ccclass('BankCards_View')
export class BankCards_View extends ViewBase {
    @property(Node)
    btnClose: Node = null;
    @property(Node)
    addCards: Node = null;
    @property(Node)
    itemcard: Node = null;
    @property(Node)
    cardsContent: Node = null;
    
}


