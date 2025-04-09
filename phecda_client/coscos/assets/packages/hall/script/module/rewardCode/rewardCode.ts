
import { _decorator, Component, Node, sys } from 'cc';
import { RewardCodeView } from './rewardCode_view';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
const { ccclass, property } = _decorator;
 
@ccclass('RewardCode')
export class RewardCode extends Module<RewardCodeView, null> {

    telegram_link = null;
    whatsapp_link = null;

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/rewardCode/public_rewardCode";
        this.viewType = RewardCodeView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        // this.needAnim = true
        // this.needViewMask = true
        // this.autoShowAnim = true;
    }

    public onInit() {
        Utility.instance.onButtonClick(this.view.btnTelegram, this.onBtnTelegramClick, this);
        Utility.instance.onButtonClick(this.view.btnWhatsapp, this.onBtnWhatsAppClick, this);
        Utility.instance.onButtonClick(this.view.btnConfirm, this.onBtnConfirmClick, this);
        Utility.instance.onButtonClick(this.view.back, this.onBackClick, this);
        this._reqGetBonusCodeConfig();
    }


    onBtnTelegramClick() {
        if (this.telegram_link != null) sys.openURL(this.telegram_link);
    }

    onBtnWhatsAppClick() {
        if (this.whatsapp_link != null) sys.openURL(this.whatsapp_link);
    }

    onBtnConfirmClick() {
        let code = this.view.inputCode.string;
        if (code.trim()=="") {
            ModuleManager.instance.toastLong("Please enter the correct key");
            return;
        }
        this._reqRedeemBonusCode(code);
    }

    onBackClick() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.RewardCode);
    }
  

    // 获取奖金码配置信息
    private _reqGetBonusCodeConfig() {
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.getBonusCodeConfig,
            Params: {},
            Callback:this._rspGetBonusCodeConfig.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    
    private _rspGetBonusCodeConfig(msg) {
        if (msg && msg.code == 0) {
           let {telegram_link, whatsapp_link, min_amount, max_amount, details} = msg.data;
           this.view.labBonus.string = `₹${Utility.instance.numThousandsFormat(String(min_amount/100))}-₹${Utility.instance.numThousandsFormat(String(max_amount/100))}`;
           this.view.labTip.string = details;
           this.whatsapp_link = whatsapp_link;
           this.telegram_link = telegram_link;
         }
    }

     //兑换奖金码
    private _reqRedeemBonusCode(code:string) {
        ModuleManager.instance.showNetPrompt();
        let param = {
            bonus_code:code
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.redeemBonusCode,
            Params: param,
            Callback:this._rspRedeemBonusCode.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    
    private _rspRedeemBonusCode(msg) {
        if (msg && msg.code == 0) {
            // ModuleManager.instance.toastLong(`Congratulations get ₹${parseFloat((msg.data.amount/100).toFixed(2))}`);
            ModuleManager.instance.showModule(CommonName.MODULE.GiftCodeResult, msg.data.amount)
         }
    }
   
}