import { _decorator, Component, Node, EditBox, instantiate, Label, Sprite } from 'cc';
import { GameConfig } from '../../../../../script/com/game_config';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import LoaclStorage from '../../../../../script/manager/local_storage';
import TimeManager from '../../../../../script/manager/time_manager';
import Utility from '../../../../../script/utility/utility';
import { UserDataModel } from '../../model/UserDataModel';
import { RechargeAPI } from './RechargeApi';
const { ccclass, property } = _decorator;

const AccountNumKey = "_TMWAccountNumKey"
const AccountNameKey = "_TMWAccountNameKey"
const IDKey = "_TMWIDKey"

@ccclass('TrueMoneyWallet')
export class TrueMoneyWallet extends Component {

    private accountNum: EditBox
    private id: EditBox
    private accountName: EditBox
    private amount: EditBox
    private recieveAccountNum: Label
    private recieveAccountName: Label

    private createOrder: Node
    private checkOrder: Node

    private rate: Label
    private firstRecharge: Node

    private helpPanel: Node

    private weeklyCardTips: Node

    private currentInfo: any
    private recieveTMWData: any
    private currentTMW: any = {}

    private unbindBankStr: string = ""

    private scheduleID: number

    private inited = false

    onLoad() {
        this.init()
    }

    private init() {
        if (this.inited) { return }

        let left = this.node.getChildByPath("Left")
        let right = this.node.getChildByPath("Right")
        this.accountNum = left.getChildByPath("AccountNum").getComponent(EditBox)
        this.id = left.getChildByPath("ID").getComponent(EditBox)
        this.accountName = left.getChildByPath("AccountName").getComponent(EditBox)
        this.amount = left.getChildByPath("Amount").getComponent(EditBox)
        this.recieveAccountNum = right.getChildByPath("RecieveAccountNum/Label").getComponent(Label)
        this.recieveAccountName = right.getChildByPath("RecieveAccountName/Label").getComponent(Label)
        this.createOrder = this.node.getChildByPath("CreateOrder")
        this.checkOrder = this.node.getChildByPath("CheckOrder")
        this.weeklyCardTips = this.node.getChildByPath("WeeklyCardTips")

        Utility.instance.onButtonClick(left.getChildByPath("ID/HelpBtn"), () => this.showHelp(true), this)
        Utility.instance.onButtonClick(right.getChildByPath("RecieveAccountNum/Copy"), this.onCopyRecieveAccountNum, this)
        Utility.instance.onButtonClick(right.getChildByPath("RecieveAccountName/Copy"), this.onCopyRecieveAccountName, this)
        Utility.instance.onButtonClick(this.createOrder, this.onCreateOrder, this)
        Utility.instance.onButtonClick(this.checkOrder, this.onCheckOrder, this)

        this.unbindBankStr = LanguageManager.instance.getLangByID("zhuanzhang_7")
        this.recieveAccountNum.string = this.unbindBankStr
        this.recieveAccountName.string = this.unbindBankStr
        this.accountNum.string = this.getUserTMWAccount(AccountNumKey)
        this.accountName.string = this.getUserTMWAccount(AccountNameKey)
        this.id.string = this.getUserTMWAccount(IDKey)
        this.createOrder.active = true
        this.checkOrder.active = false

        this.rate = right.getChildByPath("Rate").getComponent(Label)
        this.firstRecharge = right.getChildByPath("FirstRecharge")
        this.firstRecharge.getComponent(Label).string = Utility.instance.format(LanguageManager.instance.getLangByID("shouchong_tips3"), UserDataModel.firstRechargeMaxReward)
        this.helpPanel = this.node.getChildByPath("HelpPanel")
        Utility.instance.onButtonClick(this.helpPanel, () => this.showHelp(false), this, false)
        Utility.instance.onButtonClick(this.helpPanel.getChildByPath("Block"), () => this.showHelp(false), this)

        this.inited = true
    }

    onDestroy() {
        this.unscheduleAllCallbacks()
        if (this.scheduleID) {
            TimeManager.instance.cancelSchedule(this.scheduleID)
        }
    }

    private extData: any = null
    public Show(info: any, ext?: any) {
        this.init()
        this.currentInfo = info
        this.extData = ext
        this.firstRecharge.active = UserDataModel.GetFirstRechargeSwitch() && !UserDataModel.GetFirstRechargeCompleted()
        this.node.active = true
        this.amount.placeholder = Utility.instance.format(LanguageManager.instance.getLangByID("zhuanzhang_6"), info.RechargeRange)
        this.rate.string = `1${info.channel_url.Currency}=${info.ExchangeRate}${LanguageManager.instance.getLangByID("jinbi")}`
        this.SetAmount(ext?.Amount || "100", !ext?.NoInput)
        this.showWeeklyCardTips()
    }

    public Hide() {
        this.node.active = false
    }

    public SetAmount(num: number | string, enable: boolean = true) {
        this.amount.string = num ? "" + num : ""
        this.amount.enabled = enable
    }

    private showWeeklyCardTips() {
        if (this.extData?.WeeklyCardIdx && this.extData?.WeeklyCardReward) {
            this.weeklyCardTips.active = true
            this.weeklyCardTips.getChildByPath("Layout/Tag").getComponent(Label).string = LanguageManager.instance.getLangByID("zhoukajiangli_" + this.extData.WeeklyCardIdx)
            this.weeklyCardTips.getChildByPath("Layout/Label").getComponent(Label).string = `+${this.extData.WeeklyCardReward}`
        } else {
            this.weeklyCardTips.active = false
        }
    }

    private showHelp(show: boolean) {
        this.helpPanel.active = show
    }

    private onCopyRecieveAccountNum() {
        if (!this.recieveTMWData) {
            this.toastUnbindTMW()
        } else {
            this.copySuccess(this.recieveAccountNum.string)
        }
    }

    private onCopyRecieveAccountName() {
        if (!this.recieveTMWData) {
            this.toastUnbindTMW()
        } else {
            this.copySuccess(this.recieveAccountName.string)
        }
    }

    private onCreateOrder() {
        if (this.accountNum.string == "" || this.id.string == "" || this.accountName.string == "") {
            this.toastUnbindTMW()
        } else {
            this.saveUserTMWAccount()
            let num = parseFloat(this.amount.string)
            let range = this.currentInfo.RechargeRange.split("-")
            if (isNaN(num) || num < range[0] || num > range[1]) {
                ModuleManager.instance.toastLong(this.amount.placeholder)
            } else {
                //确认账号信息
                this.confirmTMWAccountInfo()
            }
        }
    }

    private onCheckOrder() {
        let orderSn = this.recieveTMWData?.order_sn
        if (orderSn) {
            RechargeAPI.RequestCheckTransferOrder(this, orderSn, (data: any) => {
                this.createOrder.active = true
                this.checkOrder.active = false
            })
        }
    }

    private toastUnbindTMW() {
        ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("tmw_12"))
    }

    private copySuccess(str: string) {
        Utility.instance.copyTextToClipboard(str)
        ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("fuzhichenggong"))
    }

    private getValid() {
        return this.isValid && this.node?.isValid
    }

    private confirmTMWAccountInfo() {
        let tips = LanguageManager.instance.getLangByID("tmw_13")
        let key1 = LanguageManager.instance.getLangByID("tmw_14")
        let key2 = LanguageManager.instance.getLangByID("tmw_5")
        let key3 = LanguageManager.instance.getLangByID("tmw_15")
        let value1 = this.accountNum.string
        let value2 = this.id.string
        let value3 = this.accountName.string
        let str = `${tips}\n${key1}: ${value1}\n${key2}: ${value2}\n${key3}: ${value3}`
        ModuleManager.instance.showDialog_CancelConfirm(str, this.requestRecieveBankInfo.bind(this))
    }

    private requestRecieveBankInfo() {
        if (!this.getValid()) { return }
        let params = {
            amount: this.amount.string,
            config_id: this.currentInfo.ID,
            area_id: GameConfig.GameSiteID,
            bank_sn: this.accountNum.string,
            bank_code: "TMW",
            bank_user_name: this.accountName.string,
            tmw_id: this.id.string,
        }
        if (this.extData?.WeeklyCardIdx) {
            params["weekly_card_no"] = this.extData.WeeklyCardIdx
        }
        console.log("发起请求", params)
        RechargeAPI.RequestTransferBankInfo(this, this.currentInfo.channel_url.Url, params, this.setRecieveBankInfo.bind(this))
    }

    private setRecieveBankInfo(data: any) {
        if (!this.getValid()) { return }
        // let tips1 = LanguageManager.instance.getLangByID("zhuanzhang_13")
        let tips2 = Utility.instance.format(LanguageManager.instance.getLangByID("zhuanzhang_15"), data.expiration_time)
        let tips3 = LanguageManager.instance.getLangByID("zhuanzhang_11")
        let tips = `${tips2}\n${tips3}`
        ModuleManager.instance.showDialog_Confirm(tips, null)
        this.recieveTMWData = data
        this.recieveAccountNum.string = data.bank_sn
        this.recieveAccountName.string = data.bank_user_name
        this.checkOrder.active = true
        this.createOrder.active = false
    }

    private saveUserTMWAccount() {
        let userID = UserDataModel.GetCurrentUserID()
        LoaclStorage.setString(userID + AccountNumKey, this.accountNum.string)
        LoaclStorage.setString(userID + AccountNameKey, this.accountName.string)
        LoaclStorage.setString(userID + IDKey, this.id.string)
    }

    private getUserTMWAccount(key: string) {
        let userID = UserDataModel.GetCurrentUserID()
        return LoaclStorage.getString(userID + key, "")
    }
}