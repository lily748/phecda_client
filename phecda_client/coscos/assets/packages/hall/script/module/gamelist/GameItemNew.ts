import { _decorator, Component, Node, Sprite, Button,SpriteFrame} from 'cc';
import Utility from '../../../../../script/utility/utility';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { GameConfig } from '../../../../../script/com/game_config';
import { conmmon_http } from '../../../../../script/net/common_http';
import AudioManager from '../../../../../script/manager/audio_manager';
import { HttpDataModel } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { PostData } from '../../model/HttpDataModel';

const { ccclass, property } = _decorator;

@ccclass('GameItemNew')
export class GameItemNew extends Component {
    // @property(Node)
    // likeOn: Node
    // @property(Node)
    // likeOff: Node
    @property(SpriteFrame)
    defultFrame: SpriteFrame

    private data:any = null;
    private clickCallback = null

    /**
     * 获取item数据
     * @returns 
     */
    public getItemData(){
        return this.data
    }

    /**
     * 设置Item
     * @param info 
     * @param onClick 
     */
    setItem(info: any,onClick:()=>void) {
        this.reset()
        this.data = info

        this.clickCallback = onClick
        let sprite = this.node.getComponent(Sprite)
        let imgName = info.name.replace(/\s+/g, "-");  //空格替换成-
        imgName = imgName.replace(/\'/g, '');  // 去除" ' "
        // let imgUrl= info.platform == 1 ? info.icon_url:(GameConfig.resConfigUrl+"/"+info.vendor_name+"/"+imgName+".png");
        if(info.icon_url.trim() != ""){
            SpriteDataModel.SetSprite(sprite, info.icon_url) //加载远程URL
        }

        Utility.instance.onButtonClick(this.node, () => {
            AudioManager.instance.playButtonSound()
            conmmon_http.reqLoginGame(this, info.vendor_id_str, info.game_uid, info.platform, info.product_type, conmmon_http.rspLoginGame.bind(this))
        }, null, false)

        // //收藏
        // this.likeOn.active = info.is_like
        // this.likeOff.active = !this.likeOn.active
        // Utility.instance.onButtonClick(this.likeOn, () => {
        //     AudioManager.instance.playButtonSound()
        //     this._reqSetVendorGameLike(2,info.vendor_id,info.game_uid)
        // }, null, false)

        // //取消收藏        
        // Utility.instance.onButtonClick(this.likeOff, () => {
        //     AudioManager.instance.playButtonSound()
        //     this._reqSetVendorGameLike(1,info.vendor_id,info.game_uid)
        // }, null, false)
    }

    /**
     * 请求收藏游戏
     * @param opt 操作类型(1.设置 2.取消, 其余抛异常)
     * @param vendor_id 厂商ID
     * @param uid 游戏uid
     */
    private _reqSetVendorGameLike(opt: number,vendor_id_str:string,game_uid:string) {
        let params = {
            opt: opt,
            vendor_id_str:vendor_id_str,
            game_uid: game_uid
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.setVendorGameLike,
            Params: params,
            Callback: this._rspSetVendorGameLike.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }
 
    /**
     * 收藏游戏返回
     * @param msg 
     */
    private _rspSetVendorGameLike(msg: any) {
        if (msg && msg.code == 0) {
            if(!msg.data?.opt) return

            // this.likeOn.active = msg.data.opt == 1
            // this.likeOff.active = !this.likeOn.active
            // this.data.is_like = this.likeOn.active            
            this.clickCallback && this.clickCallback()
        }
    }

    private reset() {
        this.data = null
        this.clickCallback = null
        this.unscheduleAllCallbacks()
        let sprite = this.node.getComponent(Sprite)
        if(sprite?.isValid){
            sprite.spriteFrame = this.defultFrame
        }
        this.node.off(Button.EventType.CLICK)
        // this.likeOn.off(Button.EventType.CLICK)
        // this.likeOff.off(Button.EventType.CLICK)
    }

    onDestroy() {
        this.unscheduleAllCallbacks()
    }
}