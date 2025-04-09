
import { _decorator, Component, Label, Node } from 'cc';
import { GiftCodeView } from './giftCode_view';
import Module, { ViewLayer } from '../../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../../script/utility/utility';
import ModuleManager from '../../../../../../script/framework/core/module_manager';
import CommonName from '../../../model/CommonName';
import { HttpDataModel, PostData } from '../../../model/HttpDataModel';
import { Http_Define } from '../../../../../../script/hall/HttpDefine';
const { ccclass, property } = _decorator;

@ccclass('GiftCode')
export class GiftCode extends Module<GiftCodeView, null> {

   constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/rewardCode/public_giftCode";
        this.viewType = GiftCodeView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
        this.autoShowAnim = true;
    }

    
    onInit(arg0: any): void {
        Utility.instance.onButtonClick(this.view.close, this.clickClose, this);
        Utility.instance.onButtonClick(this.view.confirm, this.clickConFirm, this);
        Utility.instance.onButtonClick(this.view.tipClose, this.clickTipClose, this);
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
            FailToast: false,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    
    private _rspRedeemBonusCode(msg) {
        if (msg && msg.code == 0) {
            // ModuleManager.instance.toastLong(`Congratulations get ₹${parseFloat((msg.data.amount/100).toFixed(2))}`);
            ModuleManager.instance.showModule(CommonName.MODULE.GiftCodeResult, msg.data.amount)
         } else {
            this.view.tipNode.active = true;
            this.view.tipNode.getChildByPath("reminder_bg/tipLab").getComponent(Label).string = msg.message;
         }
    }

    clickClose() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.GiftCode);
    }

    clickTipClose() {
        this.view.tipNode.active = false;
    }

    clickConFirm() {
        if (this.view.input.string == "") {
            ModuleManager.instance.toastLong(`Please enter the gift code`);
            return;
        }
        this._reqRedeemBonusCode(this.view.input.string);
    }







   
}
