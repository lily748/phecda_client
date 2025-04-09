import { Node, Label, _decorator } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { PostData, HttpDataModel } from '../../model/HttpDataModel';
import BetReturnsView from './betReturns_view';

const { ccclass, property } = _decorator;

@ccclass('BetReturns')
export default class BetReturns extends Module<BetReturnsView, null>{

    private data: { Content?: string[] | string, CloseCallback: () => void }

    private config: any

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_betReturns";
        this.viewType = BetReturnsView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.close, this.onClose, this, false)
        Utility.instance.onButtonClick(this.view.help, this.onHelp, this, false)
        Utility.instance.onButtonClick(this.view.get, this.requestReward, this)
        AudioManager.instance.playOpenWindowSound()
        this.requestConfig()
    }

    onShow(data?: any) {
        this.data = data
    }

    private onClose() {
        if (this.data?.CloseCallback) {
            this.data.CloseCallback()
        } else {
            AudioManager.instance.playCloseWindowSound()
        }
        ModuleManager.instance.destroyModule(CommonName.MODULE.BetReturns)
    }

    private onHelp() {
        ModuleManager.instance.showModule(CommonName.MODULE.HelpDesc, { Content: this.config?.Tips })
    }

    private setUI(data: any) {
        this.config = data
        if (!this.isValid || !this.view?.isValid || !data) {
            return
        }

        this.view.rate1.string = `${parseFloat("" + data.ZyRate)}%`
        this.view.rate2.string = `${parseFloat("" + data.CpRate)}%`

        this.view.todayReward.string = "" + data.Yesterday.Reward
        this.view.tomorrowReward.string = "" + data.Today.Reward

        this.view.get.active = parseInt(data.Yesterday.CanReceive) == 1
        this.view.got.active = parseInt(data.Yesterday.CanReceive) != 1

        this.view.tips.string = data.Tips?.find((tips: string) => tips.includes(":00"))
    }

    private requestConfig() {
        let info: PostData = {
            Target: this,
            Url: "/activity/getBetRebateConfig",
            Params: { activity_key: "BetRebate" },
            Callback: this.setUI.bind(this),
        }
        HttpDataModel.Post(info)
    }

    private requestReward() {
        let info: PostData = {
            Target: this,
            Url: "/activity/receiveBetRebateReward",
            Params: {},
            Callback: this.getRewardSuccess.bind(this),
            ForceRequest: true,
            FailToast: true,
        }
        HttpDataModel.Post(info)
    }

    private getRewardSuccess() {
        if (!this.isValid || !this.view?.isValid) { return }

        this.view.get.active = false
        this.view.got.active = true
        this.view.todayReward.string = "0"
        this.flyCoin(this.view.get)
    }

    private flyCoin(from: Node) {
        ModuleManager.instance.showModule(CommonName.MODULE.CoinFly, { Start: from.worldPosition })
        this.scheduleOnce(this.onClose, 2.5)
    }

}