import { _decorator, Node, Component,Sprite } from 'cc';

import Utility from '../../../../../../script/utility/utility';
import { SpriteDataModel } from '../../../model/SpriteDataModel';

const { ccclass, property } = _decorator;

@ccclass('rechargewheelRules')
export class rechargewheelRules extends Component {
    @property(Sprite)
    spriteContent: Sprite | null = null
    @property(Node)
    btnClose: Node | null = null

    onLoad() {
        Utility.instance.onButtonClick(this.btnClose, this.onClickClose, this, false)
    }

    public showRules(path:string){
        if(path.trim() == "") return
        let spriteContent = this.spriteContent.getComponent(Sprite)
        SpriteDataModel.SetSprite(spriteContent, path)        
    }

    private onClickClose(){
        if(this?.node?.isValid){
            this.node.destroy()
        }
    }
}