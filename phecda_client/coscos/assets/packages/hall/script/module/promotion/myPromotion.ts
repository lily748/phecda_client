
import { _decorator, Component, Node, Label, EditBox, UITransform } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import Utility from '../../../../../script/utility/utility';
import { RedPointType, UserDataModel } from '../../model/UserDataModel';
import { PromotionAPI } from './promotionApi';
const { ccclass, property } = _decorator;

interface Listeners {
    Help?: Function,
    Record: Function,
    CountDown: Function,
}

const leaderCodeStatus = {
    Normal: {
        width: 322,
        fontSize: 26
    },
    Reduce: {
        width: 200,
        fontSize: 16
    }
}

@ccclass('MyPromotion')
export class MyPromotion extends Component {

    @property(Label)
    myCode: Label
    @property(Node)
    copyCodeBtn: Node

    @property(EditBox)
    leaderCode: EditBox
    @property(Node)
    bind: Node
    @property(Node)
    timeNode: Node
    @property(Label)
    timeLabel: Label

    @property(Label)
    tips: Label

    @property(Node)
    withdrawBtn: Node

    @property(Label)
    totalBonus: Label
    @property(Label)
    bonus: Label
    @property(Node)
    recordBtn: Node

    private data: any = null
    private listeners: Listeners = null

    start() {
        Utility.instance.onButtonClick(this.withdrawBtn, this.requestWithdraw, this)
        Utility.instance.onButtonClick(this.copyCodeBtn, this.copyMyCode, this)
        Utility.instance.onButtonClick(this.bind, this.requestBindLeader, this)
    }

    onDestroy() {
        this.unscheduleAllCallbacks()
    }

    setListeners(listeners: Listeners) {
        this.listeners = listeners
        Utility.instance.onButtonClick(this.recordBtn, listeners.Record, this, false)
    }

    show(data?: any) {
        this.node.active = true
        this.onRequestInfo(data || PromotionAPI.getMyPromotion())
    }

    hide() { this.node.active = false }

    public onRequestInfo(data: any) {
        this.data = data
        this.setUI()
    }

    private getValid() {
        return this && this.isValid && this.node && this.node.isValid && this.data
    }

    private setUI() {
        if (!this.getValid()) {
            return
        }
        ModuleManager.instance.hideNetPrompt()
        this.myCode.string = this.data.UserCode
        if (this.data.PCode) {
            this.leaderCode.string = this.data.PCode
            this.setBindEnable(false)
        } else {
            this.leaderCode.string = ""
            if (this.data.allowBind == 1) {
                this.setBindEnable(true)
                this.listeners.CountDown(this.data.endBindTime, this.timeLabel, () => {
                    this.setBindEnable(false)
                })
            } else {
                this.leaderCode.string = "--------"
                this.setBindEnable(false)
            }
        }

        this.totalBonus.string = PromotionAPI.getTotalBonus()
        this.bonus.string = this.data.CanAcquireReward
        this.tips.string = this.data.tips || ""
    }

    private setBindEnable(enable: boolean) {
        this.leaderCode.enabled = enable
        this.bind.active = enable
        this.timeNode.active = enable
        this.adaptEditorSize(enable)
    }

    private adaptEditorSize(enable: boolean) {
        this.leaderCode.getComponent(UITransform).width = enable ? leaderCodeStatus.Reduce.width : leaderCodeStatus.Normal.width
        this.leaderCode.getComponent(EditBox).placeholderLabel.fontSize = enable ? leaderCodeStatus.Reduce.fontSize : leaderCodeStatus.Normal.fontSize
        this.leaderCode.getComponent(EditBox).textLabel.fontSize = enable ? leaderCodeStatus.Reduce.fontSize : leaderCodeStatus.Normal.fontSize
    }

    private requestWithdraw() {
        if (parseFloat(this.bonus.string) > 0) {
            PromotionAPI.requestWithdraw(this, () => {
                this.bonus.string = "0.00"
                UserDataModel.removeReadPointByType(RedPointType.Promotion)
            })
        }
    }

    private copyMyCode() {
        console.log("复制我的邀请码", this.myCode.string)
        Utility.instance.copyTextToClipboard(this.myCode.string)
        ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("common_copy_to_clipboard"))
    }

    private requestBindLeader() {
        if (this.leaderCode.string == "") { return }
        let callback = (id: string) => {
            ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("bind_success"))
            this.leaderCode.string = id
            this.leaderCode.enabled = false
            this.setBindEnable(false)
        }
        PromotionAPI.requestBindLeader(this, this.leaderCode.string, callback.bind(this))
    }
}