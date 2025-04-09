import { Button, Label, Sprite, sys, _decorator, Node } from 'cc';
import { GameConfig } from '../../../../../script/com/game_config';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { HttpDataModel, PostData, ReportTypeName } from '../../model/HttpDataModel';
import { ActivityState, UserDataModel } from '../../model/UserDataModel';

const { ccclass, property } = _decorator;

import FirstRechargeView from "./firstRecharge_view";

@ccclass('FirstRecharge')
export default class FirstRecharge extends Module<FirstRechargeView, null>{

    private closeCallback: () => void

    private config: any

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_firstRecharge";
        this.viewType = FirstRechargeView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.close, this.onClose, this, false)
        Utility.instance.onButtonClick(this.view.rechargeBtn, this.onRecharge, this, false)
        AudioManager.instance.playEffect("sound/public/FirstRechargeOpen")
        EventManager.instance.on(CommonName.EVENT.FirstRechargeLimitTime, this.setLimitTime, this)
        Utility.instance.onButtonClick(this.view.help, this.onHelp, this, false)
        Utility.instance.onButtonClick(this.view.get, this.requestReward, this)
        this.view.time.node.parent.active = !UserDataModel.GetFirstRechargeCompleted()

        Utility.instance.onButtonClick(this.view.noRechargeNode.getChildByPath("Close"), this.onClose, this, false)
        Utility.instance.onButtonClick(this.view.noRechargeNode.getChildByPath("Help"), this.onHelp, this, false)
    }

    onDestroy() {
        EventManager.instance.off(CommonName.EVENT.FirstRechargeLimitTime, this.setLimitTime, this)
    }

    private setLimitTime(t: number) {
        if (this?.isValid && this?.view?.time) {
            if (!t) {
                this.view.time.node.parent.active = false
            } else {
                this.view.time.node.parent.active = true
                this.view.time.string = Utility.instance.formatCountDownTime(t)
            }
        }
    }

    private onClose() {
        if (!Utility.instance.btnClickValid(2000)) {
            console.log("重复点击无效！")
            return
        }
        if (!UserDataModel.GetFirstRechargeCompleted()) {
            this.onRecharge()
            return
        }
        ModuleManager.instance.destroyModule(CommonName.MODULE.FirstRecharge)
        if (this.closeCallback) {
            this.closeCallback()
            this.closeCallback = null
        } else {
            AudioManager.instance.playCloseWindowSound()
        }
    }

    private onHelp() {
        ModuleManager.instance.showModule(CommonName.MODULE.FirstRechargeDesc, this.config)
    }

    onShow(data?: any) {
        console.log("show first recharge!:", data)     
        this.requestConfig()

        if (!data?.Click) { HttpDataModel.Report(ReportTypeName.FirstRecharge) }
        if (data?.AutoShow) {
            ModuleManager.instance.destroyModule(CommonName.MODULE.RechargeNew)
        }
        this.closeCallback = data?.CloseCallback
    }

    private onRecharge(amount?: string) {
        ModuleManager.instance.showModule(CommonName.MODULE.RechargeNew, { Amount: amount, Callback: this.closeCallback }, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.FirstRecharge)
        })
    }

    private requestConfig() {
        let info: PostData = {
            Target: this,
            Url: "/activity/getFirstRechargeLoginRewardConfig",
            Params: {},
            Callback: this.onGetCofnig.bind(this),
            WholeData: true
        }
        HttpDataModel.Post(info)
    }

     private onGetCofnig(config)
     {
        if(null == this.view)
            return
        let completed = UserDataModel.GetFirstRechargeCompleted()
        this.view.rechargedNode.active = completed
        this.view.noRechargeNode.active = !completed
        this.setUI(config)
     }

    private setNoRecharge() {
        let maxNum = `${UserDataModel.firstRechargeMaxReward}`
        let parent = this.view.noRechargeNode
        parent.getChildByPath("Max/Label").getComponent(Label).string = maxNum
        parent.getChildByPath("Max/Label/Label").getComponent(Label).string = maxNum
        for (const child of parent.getChildByPath("Node").children) {
            let idx = parseInt(child.name) - 1
            let cfg = this.config?.annex.FirstRechargeLoginRewardConfig[idx]
            let btn = child.getChildByPath("Recharge")
            btn.off("click")
            if (cfg) {
                child.active = true
                child.getChildByPath("Layout/Num").getComponent(Label).string = `${cfg.RechargeMin}`
                child.getChildByPath("Reward/Label").getComponent(Label).string = `${cfg.BillingPointShow}`
                Utility.instance.onButtonClick(btn, () => this.onRecharge(cfg.RechargeMin), this, false)
            } else {
                child.active = false
            }
        }
    }

    private setRecharged(config: any) {
        let data = config?.data
        this.view.max.string = `${UserDataModel.firstRechargeMaxReward}`
        this.view.max1.string = `${UserDataModel.firstRechargeMaxReward}`

        this.view.dayLabel.string =  `${config.annex.ReceiveSwitch.List.length}`

        let getEnable = config.annex.ReceiveSwitch.IsReceive && this.getRewardDay() != 0
        this.view.get.active = getEnable
        this.view.getGray.active = config.annex.ReceiveSwitch.IsFirstRecharge && !getEnable

        for (const child of this.view.dayNode.children) {
            let key = `LoginDay${child.name}Reward`
            child.getChildByPath("Layout/Num").getComponent(Label).string = data[key]
            let day = config.annex.ReceiveSwitch.List.find((cfg: any) => "" + cfg.Day == child.name)
            child.getChildByPath("yilingqu").active = day.IsReceive == 2
        }
    }

    setUI(config: any) {
        this.config = config
        if (!config?.data) { return }

        UserDataModel.firstRechargeMaxReward = `${config.data.BillingPointShow}`
        UserDataModel.liushuiRate = parseFloat(config.annex.current_multiple_of_withdrawal)

        
        if (UserDataModel.GetFirstRechargeCompleted()) {
            this.setRecharged(config)
        } else {
            this.setNoRecharge()
        }
    }

    private getRewardDay() {
        let day = 0
        if (this.config?.annex.ReceiveSwitch.List) {
            for (const cfg of this.config.annex.ReceiveSwitch.List) {
                if (cfg.IsReceive == 1) {
                    day = cfg.Day
                    break
                }
            }
        }
        return day
    }

    private requestReward() {
        let day = this.getRewardDay()
        if (day != 0) {
            let cb = () => {
                this.getRewardSuccess(day)
            }
            let info: PostData = {
                Target: this,
                Url: "/activity/receiveFirstRechargeLoginReward",
                Params: {},
                Callback: cb.bind(this),
                ForceRequest: true,
                FailToast: true,
            }
            HttpDataModel.Post(info)
        }
    }

    private getRewardSuccess(day: number) {
        if (!this?.isValid || !this.config) {
            return
        }

        let dayData = this.config?.annex.ReceiveSwitch.List.find((cfg: any) => cfg.Day == day)
        if (dayData) {
            dayData.IsReceive = 2
            let dayNode = this.view.dayNode.getChildByPath("" + dayData.Day)
            let yilingqu = dayNode.getChildByPath("yilingqu/yilingqu")
            yilingqu.active = false
            dayNode.getChildByPath("yilingqu").active = true
            this.view.got.worldPosition = yilingqu.worldPosition
            this.view.got.active = true
            let complete = () => {
                AudioManager.instance.playEffect("sound/public/gai")
                yilingqu.active = true
                this.view.got.active = false
                this.setUI(this.config)
                this.flyCoin(dayNode)
            }
            this.scheduleOnce(complete.bind(this), 0.3)
        }
    }

    private flyCoin(from: Node) {
        ModuleManager.instance.showModule(CommonName.MODULE.CoinFly, { Start: from.worldPosition })
        if (this.getRewardDay() == 0) {
            this.scheduleOnce(this.onClose, 2.5)
        }
    }
}