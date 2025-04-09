import { instantiate, Label, _decorator } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';

const { ccclass, property } = _decorator;

import FirstRechargeDescView from "./firstRechargeDesc_view";

@ccclass('FirstRechargeDesc')
export default class FirstRechargeDesc extends Module<FirstRechargeDescView, null>{

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_firstRechargeDesc";
        this.viewType = FirstRechargeDescView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.close, this.onClose, this, false)
        this.view.item.active = false
        AudioManager.instance.playOpenWindowSound()
    }

    private onClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.FirstRechargeDesc)
    }

    onShow(data?: any) {
        if (!data) { return }

        let rateShow = false
        for (const cfg of data.annex.FirstRechargeLoginRewardConfig) {
            let item = instantiate(this.view.item)
            item.setParent(this.view.item.parent)
            item.active = true
            let amount = cfg.RechargeMax >= 999999 ? `≥ ${cfg.RechargeMin}` : `${cfg.RechargeMin}-${cfg.RechargeMax}`
            let rate = "--"
            if (`${cfg.ImmediateReward}` != "0") {
                rate = `${cfg.ImmediateReward}`
                rateShow = true
            } else if (`${cfg.ImmediateRewardRate}` != "0") {
                rate = `${cfg.ImmediateRewardRate}%`
                rateShow = true
            }
            item.getChildByPath("Amount/Label").getComponent(Label).string = amount
            item.getChildByPath("Rate/Label").getComponent(Label).string = rate
            for (let i = 1; i < 6; i++) {
                item.getChildByPath(`Day${i}/Label`).getComponent(Label).string = cfg[`LoginDay${i}Reward`]
            }
        }

        if (rateShow) {
            for (const child of this.view.item.parent.children) {
                let rateNode = child.getChildByPath("Rate")
                if (rateNode) {
                    rateNode.active = true
                }
            }
        }

        let tips1 = LanguageManager.instance.getLangByID("shouchonghuodong_tips1")
        let tips2 = LanguageManager.instance.getLangByID("shouchonghuodong_tips2")
        let tips3 = Utility.instance.format(LanguageManager.instance.getLangByID("shouchonghuodong_tips3"), `${data.data.BillingPointShow}`)
        // let tips4 = Utility.instance.format(LanguageManager.instance.getLangByID("shouchonghuodong_tips4"), `${parseFloat(data.annex.current_multiple_of_withdrawal)}`)
        this.view.desc.string = `${tips1}\n${tips2}\n${tips3}`
        this.view.desc.node.parent.setSiblingIndex(this.view.item.parent.children.length)
    }
}