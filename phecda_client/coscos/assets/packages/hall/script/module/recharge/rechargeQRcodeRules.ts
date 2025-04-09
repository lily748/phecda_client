import { _decorator,Component,Node,Sprite,instantiate, find } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import { SpriteDataModel } from '../../model/SpriteDataModel';

const { ccclass, property } = _decorator;

@ccclass('rechargeQRcodeRules')
export class rechargeQRcodeRules extends Component {  
    @property(Node)
    content: Node = null    
    @property(Node)
    close: Node

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)       
    }

    public initData(data:any){
        if(!data) return
        let prefab = find("Sprite",this.close)
        for(let i = 0;i < data.length;++i){
            if(!data[i]) continue
            let item = instantiate(prefab)
            item.active = true
            item.parent = this.content
            item.getComponent(Sprite).spriteFrame = null
            SpriteDataModel.SetSprite(item.getComponent(Sprite), data[i])
        }
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()        
        if(this.node.destroy){
            this.node.destroy()
        }
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }
}