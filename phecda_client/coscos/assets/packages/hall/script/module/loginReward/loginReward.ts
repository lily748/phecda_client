import { Button, Label, Node, Sprite, _decorator } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { UserDataModel } from '../../model/UserDataModel';
import LoginRewardView from "./loginReward_view";

const { ccclass, property } = _decorator;

@ccclass('LoginReward')
export default class LoginReward extends Module<LoginRewardView, null>{

    private closeCallback: () => void

    private config: any

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_loginReward";
        this.viewType = LoginRewardView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.close, this.onClose, this, false)
        Utility.instance.onButtonClick(this.view.get, this.requestReward, this)
        this.requestConfig()
        // AudioManager.instance.playEffect("sound/public/WindowOpen")
    }

    onDestroy() {
    }

    private onClose() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.LoginReward)
        if (this.closeCallback) {
            this.closeCallback()
            this.closeCallback = null
        } else {
            AudioManager.instance.playCloseWindowSound()
        }
    }

    onShow(data?: any) {
        this.closeCallback = data?.CloseCallback
        this.scheduleOnce(() => {
            AudioManager.instance.playEffect("sound/public/LoginReward")
        }, 0.2)
    }

    private requestConfig() {
        let info: PostData = {
            Target: this,
            Url: "/pro/getLoginRewardConfig",
            Params: {},
            Callback: this.setUI.bind(this),
        }
        HttpDataModel.Post(info)
    }

    private setUI(data: any) {
        this.config = data

        let kelingqu = false
        for (const child of this.view.rewardNode.children) {
            let day = data.Config?.find((cfg: any) => "" + cfg.Day == child.name)
            if (day) {
                child.getChildByPath("mask/main/Label").getComponent(Label).string = day.Reward + LanguageManager.instance.getLangByID("taizhu")
                child.getChildByPath("mask/main/yilingqu").active = !day.IsReward && !day.IsShow
                child.getChildByPath("mask/main/kelingqu").active = day.IsReward
                if (day.IsReward) { kelingqu = true }
            }
        }
        this.view.get.getComponent(Button).interactable = kelingqu
        this.view.get.getComponent(Sprite).grayscale = !kelingqu
        if (!kelingqu) UserDataModel.SetRecieveLoginRewardDate()
    }

    private getRewardDay() {
        let day = 0
        if (this.config && this.config.Config) {
            for (const cfg of this.config.Config) {
                if (cfg.IsReward) {
                    day = cfg.Day
                    break
                }
            }
        }
        return day
    }
    private curDay = 1
    private requestReward() {
        // if (this.config) {
        //     this.getRewardSuccess(this.curDay)
        //     this.curDay++
        //     if (this.curDay > 3) this.curDay = 1
        //     return
        // }
        let day = this.getRewardDay()
        if (day != 0) {
            let cb = () => {
                this.getRewardSuccess(day)
            }
            let info: PostData = {
                Target: this,
                Url: "/pro/receiveLoginReward",
                Params: { day: day },
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
        
        let dayData = this.config.Config?.find((cfg: any) => cfg.Day == day)
        if (dayData) {
            dayData.IsReward = false
            dayData.IsShow = false
            let dayNode = this.view.rewardNode.getChildByPath("" + dayData.Day)
            let yilingqu = dayNode.getChildByPath("mask/main/yilingqu/yilingqu")
            yilingqu.active = false
            dayNode.getChildByPath("mask/main/yilingqu").active = true
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