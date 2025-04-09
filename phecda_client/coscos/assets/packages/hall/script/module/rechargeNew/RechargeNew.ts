
import { _decorator, Component, Node, instantiate, math, tween, v3, Sprite, SpriteFrame, sys, view, random } from 'cc';
import { GameConfig } from '../../../../../script/com/game_config';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { loadRemoteTexHandler, SpriteManager } from '../../../../../script/manager/sprite_manager';
import { LoginServer } from '../../../../../script/net/login_serve';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
import { RechargeAPI } from '../recharge/RechargeApi';
import { ChargeItem } from './ChargeItem';
import { RechargeNew_View } from './RechargeNew_View';
const { ccclass, property } = _decorator;
interface IGoodsList{
    id?: number,
    orig_number?: number,
    price?: number,
    number?: number,
    rate?: number,
    image?: string,
    [prop: string]: any
}

@ccclass('RechargeNew')
export class RechargeNew extends Module<RechargeNew_View,null> {
    private _selectInfo: IGoodsList = null;
    private _activityList: IGoodsList[] = [];
    private loadSpriteHandler: loadRemoteTexHandler = null;

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/rechargeNew/PublicRechageNew";
        this.viewType = RechargeNew_View;
        this.modelType = null;
        this.layer = ViewLayer.Mid
    }

    onInit(){
        let design = view.getDesignResolutionSize(); 
        var rect = view.getVisibleSize();
        let ratio = rect.x / design.x;
        ratio = Math.min(ratio,1.22);
        this.view.firstChargeNode.scale = v3(ratio,ratio,1);
        this.view.ScrollView.scale = v3(ratio,ratio,1);
        this.view.defaultSprite.scale = v3(ratio,ratio,1);
        AudioManager.instance.playOpenWindowSound()
        EventManager.instance.on(CommonName.EVENT.Respon_Refresh_UserInfo, this.setUserInfo, this)
        this.view.chargeItm.active = false;
        // this.initConfirmBuyLayotu();
        Utility.instance.onButtonClick(this.view.btnBack, this.onBackClick, this)
        Utility.instance.onButtonClick(this.view.btnCPF, this.onCPFClick, this)
        Utility.instance.onButtonClick(this.view.btnRecord, this.onRecordClick, this)
        Utility.instance.onButtonClick(this.view.btnKefu, this.onKefuClick, this)
        Utility.instance.onButtonClick(this.view.btnBuy, this.onFirstBuyClick, this)
        LoginServer.requestRefreshUserInfo()
        this.setUserInfo();
    }

    private getValid() {
        return this && this.isValid && this.node && this.node.isValid && this.view && this.view.isValid && this.view.node && this.view.node.isValid
    }

    private setUserInfo(inInit = false){
        if (!this.getValid()) {
            return
        }
        let user = UserDataModel.GetCurrentUser()
        if (!user) {
            return
        }
       
        let cash = Utility.instance.numThousandsFormat(UserDataModel.GetCashAmount().toString())
        this.view.moneyLabel.string = cash;
        
        // if(!inInit){
        //     this.refreshItem()
        // }
    }

    updateFirstChargeInfo(list: any){
        let bShow = false;
        if(list && list.length > 0){
            //默认展示第一条
            let data = list[0];
            this._activityList = list;
            this.view.defaultSprite.active = false;
            this.view.firstChargeNode.active = true;
            this.loadSprite(this.view.firstChargeNode.getComponent(Sprite),data.image);
            this.view.fc_addtionalLabel.string = `+${data.rate}%`;
            this.view.fc_priceNowLabel.string = CommonName.Currency.Symbol + (data.number + data.price);
            this.view.fc_priceOrigLabel.string = CommonName.Currency.Symbol + data.orig_number;
            this.view.fc_pricePayLabel.string = CommonName.Currency.Symbol + data.price;
            bShow = true;
        }else{
            this.view.defaultSprite.active = true;
            this.view.firstChargeNode.active = false;
            bShow = false;
        }
        EventManager.instance.dispatch(CommonName.EVENT.FirstChargeNewStatus,bShow);
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

    updateChargeItem(list: any){
        let len = math.absMax(list.length, this.view.chargeItmParent.children.length);
        for (let i = 0; i < len; i++) {
            let btn = this.view.chargeItmParent.children[i];
            let amount = list[i]
            if (!btn) {
                btn = instantiate(this.view.chargeItm);
                btn.setParent(this.view.chargeItmParent);
            }
            btn.active = amount ? true : false
            let script = btn.getComponent(ChargeItem)
            script.setItemInfo(amount,this.onPayItem.bind(this));
        }
    }

    onPayItem(info){
        this._selectInfo = info;
        this.browserRecharge();
    }

    onShow(data: any){
        RechargeAPI.RequestShopConfigNew(this, this.onGetConfigResponse.bind(this))
    }

    onGetConfigResponse(data: any){
        console.log("#####  onGetConfigResponse",data );
        this.updateFirstChargeInfo(data.activityList);
        this.updateChargeItem(data.goodsList);
    }

    private browserRecharge() {
        console.log("##### browserRecharge",this._selectInfo);
        let params = {
            amount: this._selectInfo.number + this._selectInfo.price,
            goods_id: this._selectInfo.id,
            area_id: GameConfig.GameSiteID,
        }
        console.log("创建订单", params);
        RechargeAPI.RequestBrowserRechargeNew(this, params, (data: any) => {
            if (data && data.url && data.url != "") {
                let callback = ()=>{
                    console.log("#### url ",data.url);
                    sys.openURL(data.url);
                    ModuleManager.instance.destroyModule(CommonName.MODULE.RechargeNew);
                }
                if(data.isShow == 1){
                    ModuleManager.instance.showModule(CommonName.MODULE.ChargeDialog,callback);
                    // ModuleManager.instance.showDialog_CancelConfirm(LanguageManager.instance.getLangByID("firstcharge_done"), callback); 
                }else{
                    callback();
                }
            }
        })
    }

    onBackClick(){
        AudioManager.instance.playCloseWindowSound();
        ModuleManager.instance.destroyModule(CommonName.MODULE.RechargeNew);
    }

    onCPFClick(){
        //TODO
    }

    onRecordClick(){
        ModuleManager.instance.showModule(CommonName.MODULE.RechargeRecordNew);
    }

    onKefuClick(){
        ModuleManager.instance.showModule(CommonName.MODULE.CustomerService);
    }

    onFirstBuyClick(){
        if(this._activityList.length > 0){
            this.onPayItem(this._activityList[0]);
        }
    }

    onDestroy(){
        EventManager.instance.off(CommonName.EVENT.Respon_Refresh_UserInfo, this.setUserInfo, this)
    }
}

