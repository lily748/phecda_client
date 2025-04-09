
import { _decorator, Component, Node, sys } from 'cc';
import { GameConfig } from '../../../../../script/com/game_config';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { RechargeAPI } from '../recharge/RechargeApi';
import { ChargeGift_View } from './ChargeGift_View';
const { ccclass, property } = _decorator;


@ccclass('ChargeGift')
export class ChargeGift extends Module<ChargeGift_View, null> {
    private data: any = null;
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/rechargeNew/ChargeGift";
        this.viewType = ChargeGift_View;
        this.modelType = null;
        this.layer = ViewLayer.Mid;
        this.needViewMask = true;
        this.needAnim = true;
    }

    onInit() {
        AudioManager.instance.playOpenWindowSound();
        Utility.instance.onButtonClick(this.view.btnBuy, this.browserRecharge, this);
        Utility.instance.onButtonClick(this.view.btnClose, this.onCloseClick, this);
    }


    private browserRecharge() {
        if (this.data?.firstChargeInfo != null) {
            console.log("##### browserRecharge", this.data.firstChargeInfo);
            let info = this.data.firstChargeInfo
            let params = {
                amount: info.number + info.price,
                goods_id: info.id,
                area_id: GameConfig.GameSiteID,
            }
            console.log("创建订单", params);
            RechargeAPI.RequestBrowserRechargeNew(this, params, (data: any) => {
                if (data && data.url && data.url != "") {
                    let callback = () => {
                        console.log("#### url ", data.url);
                        sys.openURL(data.url);
                        ModuleManager.instance.destroyModule(CommonName.MODULE.ChargeGift);
                    }
                    if (data.isShow == 1) {
                        ModuleManager.instance.showModule(CommonName.MODULE.ChargeDialog, callback);
                    } else {
                        callback();
                    }
                }
            })
        }
    }

    onShow(data) {
        this.data = data
        if (data?.firstChargeInfo) {
            let firstChargeInfo = data?.firstChargeInfo
            this.view.fc_addtionalLabel.string = `+${firstChargeInfo.rate}%`;
            this.view.fc_priceNowLabel.string = CommonName.Currency.Symbol + (firstChargeInfo.number + firstChargeInfo.price);
            this.view.fc_pricePayLabel.string = LanguageManager.instance.getLangByID("firstcharge_need") + " " + CommonName.Currency.Symbol + firstChargeInfo.price;
        }
    }


    onCloseClick() {
        if (this.data?.CloseCallback) {
            this.data?.CloseCallback()
        } else {
            AudioManager.instance.playCloseWindowSound();
        }
        ModuleManager.instance.destroyModule(CommonName.MODULE.ChargeGift);
    }
}
