
import { _decorator, Component, Node, Label, Sprite, SpriteFrame } from 'cc';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { loadRemoteTexHandler, SpriteManager } from '../../../../../script/manager/sprite_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;

@ccclass('ChargeItem')
export class ChargeItem extends Component {
    private loadSpriteHandler: loadRemoteTexHandler = null;
    private _info: any = null;
    private _onPayCallBack: Function = null;

    @property(Label)
    priceNowLabel:Label = null;

    @property(Label)
    priceBuyLabel:Label = null;

    @property(Sprite)
    itemPic:Sprite = null;

    @property(Label)
    addtionalLabel:Label = null;

    @property(Label)
    priceOrigLabel:Label = null;

    @property(Node)
    diagonalLine:Node = null;

    @property(Node)
    btnBuy: Node = null;

    @property([SpriteFrame])
    iconFrameList: SpriteFrame[] = [];

    start(){
        Utility.instance.onButtonClick(this.btnBuy, this.onChargeClick, this)
    }

    onChargeClick(){
        if(this._onPayCallBack){
            this._onPayCallBack(this._info);
        }
    }

    setItemInfo(info: any,callback){
        this._info = info;
        this._onPayCallBack = callback;
        this.priceNowLabel.string = CommonName.Currency.Symbol + (info.number + info.price);
        this.priceBuyLabel.string = CommonName.Currency.Symbol + info.price;
        this.priceOrigLabel.string = CommonName.Currency.Symbol + info?.orig_number;
        if(info.rate > 0){
            this.addtionalLabel.node.active = true;
            this.addtionalLabel.string = `+${info.rate}%`;
            this.diagonalLine.active = true;
            this.priceOrigLabel.node.active = true;
        }else{
            this.addtionalLabel.node.active = false;
            this.diagonalLine.active = false;
            this.priceOrigLabel.node.active = false;
        }
        let idx = info.id >= this.iconFrameList.length ? this.iconFrameList.length - 1 : info.id;
        this.itemPic.spriteFrame = this.iconFrameList[idx];
        //下载后台配置的图
        this.loadSprite(this.itemPic,info.image);
    }

    private loadSprite(sprite: Sprite, url: string) {
        if (url.trim() == "") {
            sprite.spriteFrame = null
            return null
        }
        if (this.loadSpriteHandler) {
            this.loadSpriteHandler.destory = true;
            this.loadSpriteHandler = null
        }
        if (url.startsWith("http")) {
            this.loadSpriteHandler = SpriteManager.instance.loadRemoteImage(sprite, url, true)
        } else {
            ResourceManager.loadRes(url, SpriteFrame, (err: Error, spriteFrame: SpriteFrame) => {
                if (!err) {
                    if (sprite && sprite.node && sprite.isValid)
                        sprite.spriteFrame = spriteFrame
                }
            })
        }
    }

}

