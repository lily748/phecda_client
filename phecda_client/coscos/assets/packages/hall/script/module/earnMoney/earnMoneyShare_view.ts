import { _decorator,Node} from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';

const { ccclass, property } = _decorator;
 
@ccclass('EarnMoneyShareView')
export class EarnMoneyShareView extends ViewBase {
    @property(Node)
    btnBack: Node

    @property(Node)
    btnSavePicture: Node

    @property(Node)
    btnCopyLink: Node

    @property(Node)
    btnTelegram: Node
    
    @property(Node)
    btnWhatsApp: Node

    @property(Node)
    middle: Node
}

