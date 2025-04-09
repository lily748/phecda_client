import { Label, math, Node, _decorator } from 'cc';
import { GameMap } from '../../../../../script/com/game_map';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { HotUpdateManager, hotUpdateType } from '../../../../../script/framework/hotUpdate/HotUpdateManager';
import { GameSDKInterface } from '../../../../../script/game/GameSDKInterface';
import AudioManager from '../../../../../script/manager/audio_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { GameDataModel } from '../../model/GameDataModel';
import { PostData, HttpDataModel } from '../../model/HttpDataModel';
import RechargePartyView from './rechargeParty_view';

const { ccclass, property } = _decorator;

@ccclass('RechargeParty')
export default class RechargeParty extends Module<RechargePartyView, null>{

    private config: any

    private closeCallback: () => void

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_rechargeParty";
        this.viewType = RechargePartyView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onToggleClick(this.view.tog1, () => { if (this.view.tog1.isChecked) this.onTog(1) }, this)
        Utility.instance.onToggleClick(this.view.tog2, () => { if (this.view.tog2.isChecked) this.onTog(2) }, this)
        Utility.instance.onButtonClick(this.view.close, this.onClose, this, false)
        Utility.instance.onButtonClick(this.view.help, this.onHelp, this, false)
        Utility.instance.onButtonClick(this.view.recharge, this.onRecharge, this)
        Utility.instance.onButtonClick(this.view.play, this.onPlay, this)

        // this.setTog(1)
        this.requestConfig()
        AudioManager.instance.playOpenWindowSound()
    }

    onShow(data?: any) {
        this.closeCallback = data?.CloseCallback
    }

    private onClose() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.RechargeParty)
        if (this.closeCallback) {
            this.closeCallback()
            this.closeCallback = null
        } else {
            AudioManager.instance.playCloseWindowSound()
        }
    }

    private onTog(idx: number) {
        this.setTog(idx)
        this.setUI(this.config)
    }

    private setTog(idx: number) {
        this.view.title.getChildByPath("1").active = idx == 1
        this.view.title.getChildByPath("2").active = idx == 2
        this.view.recharge.active = idx == 1
        this.view.play.active = idx == 2
        this.view.tips1.string = LanguageManager.instance.getLangByID("kuanghuan_tip1_" + idx)
        this.view.tips2.string = LanguageManager.instance.getLangByID("kuanghuan_tip2_1")
        this.view.totalDesc.string = LanguageManager.instance.getLangByID(idx == 1 ? "leijichongzhi" : "leijixiazhu")
    }

    private onHelp() {
        const key = this.view?.tog1?.isChecked ? "RechargeCarnival" : "BetCarnival"
        const curConfig = this.config?.List?.find((cfg: any) => cfg.ActivityKey == key)
        ModuleManager.instance.showModule(CommonName.MODULE.HelpDesc, { Content: curConfig?.Tips })
    }

    private onRecharge() {
        ModuleManager.instance.showModule(CommonName.MODULE.RechargeNew, {}, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.RechargeParty)
        })
    }

    private onPlay() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.RechargeParty)
        const id = 10000016 
        let hall = ModuleManager.instance.getModule(CommonName.MODULE.Hall)
        const info = GameDataModel.GetGameInfoByID(id)
        if (info) {
            let bundleName = GameMap.getGameDataByID(id)?.bundleName
            let hType = HotUpdateManager.checkUpdate(bundleName)
            if (hType > hotUpdateType.None) {
                if (hType == hotUpdateType.Update_Restart) {
                    let tips = LanguageManager.instance.getLangByID("ui_update_restart")
                    ModuleManager.instance.showDialog_CancelConfirm(tips, () => {
                        GameSDKInterface.Restart()
                    })
                    return
                }
                GameDataModel.SetGameUpdateState(id, true)
                HotUpdateManager.download(bundleName)
                hall.loadGameList()
                return
            }
            hall.onGameClick({ GameInfo: info, CPInfo: GameDataModel.GetCPInfoByGameID(id) })
        }
    }

    private setUI(data: any) {
        const party1 = data?.List?.find((cfg: any) => cfg.ActivityKey == "RechargeCarnival")
        const party2 = data?.List?.find((cfg: any) => cfg.ActivityKey == "BetCarnival")
        if (!this.isValid || !this.view?.isValid || (!party1 && !party2)) {
            // this.setTog(1)
            return
        } else if (!party2) {
            this.view.tog2.node.active = false
            this.view.tog1.node.active = true
            this.view.tog1.isChecked = true
        } else if (!party1) {
            this.view.tog1.node.active = false
            this.view.tog2.node.active = true
            this.view.tog2.isChecked = true
        }
        const key = this.view?.tog1?.isChecked ? "RechargeCarnival" : "BetCarnival"
        const curConfig = data?.List?.find((cfg: any) => cfg.ActivityKey == key)
        this.config = data
        if (!curConfig) { return }

        this.setTog(this.view?.tog1?.isChecked ? 1 : 2)
        const rechargeConfig = data.List.find((cfg: any) => cfg.ActivityKey == "RechargeCarnival")
        const betConfig = data.List.find((cfg: any) => cfg.ActivityKey == "BetCarnival")
        const rechargeDot = rechargeConfig?.AvailableStage?.find((cfg: any) => "" + cfg.Status == "1")
        const betDot = betConfig?.AvailableStage?.find((cfg: any) => "" + cfg.Status == "1")
        this.view.tog1.node.getChildByPath("Dot").active = rechargeDot ? true : false
        this.view.tog2.node.getChildByPath("Dot").active = betDot ? true : false
        const parent = this.view.progress.getChildByPath("Node")
        let max = 0
        let curIdx = -1
        curConfig.AvailableStage?.sort((a: any, b: any) => {
            return parseFloat(a.Stage) - parseFloat(b.Stage)
        })
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i]
            const element = curConfig.AvailableStage[i];
            if (element) {
                const target = parseFloat(element.Stage)
                if (curConfig.TotalStage >= target) {
                    curIdx = i
                }
                max = Math.max(target, max)
                child.active = true
                child.getChildByPath("Target/Label").getComponent(Label).string = `${target}`
                child.getChildByPath("Reward/Label").getComponent(Label).string = `${parseFloat(element.Reward)}`
                for (const chd of child.getChildByPath("State").children) {
                    chd.active = "" + element.Status == chd.name
                    if (chd.name == "1") {
                        chd.off("click")
                        Utility.instance.onButtonClick(chd, () => { this.requestReward(key, target * 100, child) }, this)
                    }
                }
            } else {
                child.active = false
            }
        }

        let progress = (curIdx + 1) * 0.25
        const offset = curIdx < 0 ? 0.07 : 0
        let curStage = curConfig.AvailableStage[curIdx] ? parseFloat(curConfig.AvailableStage[curIdx].Stage) : 0
        let nextStage = curConfig.AvailableStage[curIdx + 1] ? parseFloat(curConfig.AvailableStage[curIdx + 1].Stage) : parseFloat(curConfig.AvailableStage[curIdx].Stage)
        if (nextStage - curStage > 0) {
            progress += (0.25 - offset) * (curConfig.TotalStage - curStage) / (nextStage - curStage)
        }
        this.view.progressBar.fillStart = offset
        this.view.progressBar.fillRange = math.clamp01(progress)
        this.countDown(curConfig.CountDownTime)
    }

    private requestConfig() {
        let info: PostData = {
            Target: this,
            Url: "/activity/getRBCarnivalConfig",
            Params: {},
            Callback: this.setUI.bind(this),
        }
        HttpDataModel.Post(info)
    }

    private requestReward(key: string, stage: number, rewardNode: Node) {
        let cb = () => { this.getRewardSuccess(rewardNode) }
        let info: PostData = {
            Target: this,
            Url: "/activity/receiveRBCarnivalReward",
            Params: {
                activity_key: key,
                stage: stage
            },
            Callback: cb.bind(this),
            ForceRequest: true,
            FailToast: true,
        }
        HttpDataModel.Post(info)
    }

    private getRewardSuccess(rewardNode: Node) {
        if (!this?.isValid || !this.config) { return }

        this.requestConfig()
        this.flyCoin(rewardNode.getChildByPath("Reward"))
    }

    private flyCoin(from: Node) {
        ModuleManager.instance.showModule(CommonName.MODULE.CoinFly, { Start: from.worldPosition })
        // this.scheduleOnce(this.onClose, 2.5)
    }

    private countDown(t: number) {
        if (isNaN(t) || t <= 0) {
            this.view.time.string = LanguageManager.instance.getLangByID("huodongyijieshu")
            return
        }
        const d = Math.floor(t / (60 * 60 * 24))
        const h = Math.floor(t / (60 * 60)) - d * 24
        const m = Math.floor(t / 60) - d * 24 * 60 - h * 60

        let str = d + LanguageManager.instance.getLangByID("tian") + " "
        // if (d > 0) { str += d + LanguageManager.instance.getLangByID("tian") + " " }
        const hh = h < 10 ? "0" + h : "" + h
        const mm = m < 10 ? "0" + m : "" + m
        str += `${hh}:${mm}`
        this.view.time.string = str
    }
}