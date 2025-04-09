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

const AccountNumKey = "_AccountNumKey"
const AccountNameKey = "_AccountNameKey"
const BankNameKey = "_BankNameKey"
const BankCodeKey = "_BankIDKey"

@ccclass('BankTransfer')
export class BankTransfer extends Component {

    private accountNum: EditBox
    private bankName: Label
    private accountName: EditBox
    private amount: EditBox
    private recieveAccountNum: Label
    private recieveAccountName: Label
    private recieveBankIcon: Sprite
    private recieveBankCode: Label

    private createOrder: Node
    private checkOrder: Node

    private bankListPanel: Node
    private bankListParent: Node
    private bankItem: Node

    private rate: Label
    private firstRecharge: Node

    private weeklyCardTips: Node

    private currentInfo: any
    private recieveBankData: any
    private currentBank: any = {}

    private unbindBankStr: string = ""
    private bankList: any[] = []

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
        this.bankName = left.getChildByPath("BankName/Label").getComponent(Label)
        this.accountName = left.getChildByPath("AccountName").getComponent(EditBox)
        this.amount = left.getChildByPath("Amount").getComponent(EditBox)
        this.recieveAccountNum = right.getChildByPath("RecieveAccountNum/Label").getComponent(Label)
        this.recieveAccountName = right.getChildByPath("RecieveAccountName/Label").getComponent(Label)
        this.recieveBankIcon = right.getChildByPath("RecieveBank/Mask/Icon").getComponent(Sprite)
        this.recieveBankCode = right.getChildByPath("RecieveBank/Code").getComponent(Label)
        this.bankListPanel = this.node.getChildByPath("BankListPanel")
        this.bankListParent = this.bankListPanel.getChildByPath("ScrollView/view/content")
        this.bankItem = this.bankListPanel.getChildByPath("Item")
        this.createOrder = this.node.getChildByPath("CreateOrder")
        this.checkOrder = this.node.getChildByPath("CheckOrder")
        this.weeklyCardTips = this.node.getChildByPath("WeeklyCardTips")

        Utility.instance.onButtonClick(left.getChildByPath("BankName/SelectBtn"), () => this.showBankList(true), this)
        Utility.instance.onButtonClick(right.getChildByPath("RecieveAccountNum/Copy"), this.onCopyRecieveAccountNum, this)
        Utility.instance.onButtonClick(right.getChildByPath("RecieveAccountName/Copy"), this.onCopyRecieveAccountName, this)
        Utility.instance.onButtonClick(this.bankListPanel.getChildByPath("Block"), () => this.showBankList(false), this, false)
        Utility.instance.onButtonClick(this.createOrder, this.onCreateOrder, this)
        Utility.instance.onButtonClick(this.checkOrder, this.onCheckOrder, this)

        this.unbindBankStr = LanguageManager.instance.getLangByID("zhuanzhang_7")
        this.recieveAccountNum.string = this.unbindBankStr
        this.recieveAccountName.string = this.unbindBankStr
        this.accountNum.string = this.getUserBankAccount(AccountNumKey)
        this.accountName.string = this.getUserBankAccount(AccountNameKey)
        this.currentBank.Title = this.getUserBankAccount(BankNameKey)
        this.currentBank.Code = this.getUserBankAccount(BankCodeKey)
        if (this.currentBank.Title != "" && this.currentBank.Code != "") {
            this.bankName.string = `${this.currentBank.Title}(${this.currentBank.Code})`
        }
        this.createOrder.active = true
        this.checkOrder.active = false

        this.rate = right.getChildByPath("Rate").getComponent(Label)
        this.firstRecharge = right.getChildByPath("FirstRecharge")
        this.firstRecharge.getComponent(Label).string = Utility.instance.format(LanguageManager.instance.getLangByID("shouchong_tips3"), UserDataModel.firstRechargeMaxReward)
    
        this.inited = true
    }

    onDestroy() {
        this.unscheduleAllCallbacks()
        if (this.scheduleID) {
            TimeManager.instance.cancelSchedule(this.scheduleID)
        }
    }

    private bankListInited = false
    public InitBankList(list?: any[]) {
        if (!list || !this.getValid() || this.bankListInited) {
            return
        }
        this.init()
        this.bankList = list
        this.bankListParent.destroyAllChildren()
        list.forEach(bank => {
            let item = instantiate(this.bankItem)
            item.setParent(this.bankListParent)
            item.active = true
            item.getChildByPath("Label").getComponent(Label).string = `${bank.Title}(${bank.Code})`
            Utility.instance.onButtonClick(item, () => {
                this.setSelectedBank(bank)
                this.showBankList(false)
            }, this)
        });
        this.bankListInited = true
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

    private onCopyRecieveAccountNum() {
        if (!this.recieveBankData) {
            this.toastUnbindBank()
        } else {
            this.copySuccess(this.recieveAccountNum.string)
        }
    }

    private onCopyRecieveAccountName() {
        if (!this.recieveBankData) {
            this.toastUnbindBank()
        } else {
            this.copySuccess(this.recieveAccountName.string)
        }
    }

    private showBankList(show: boolean) {
        this.bankListPanel.active = show
    }

    private setSelectedBank(bank: any) {
        this.currentBank = bank
        this.bankName.string = `${bank.Title}(${bank.Code})`
    }

    private onCreateOrder() {
        if (this.accountNum.string == "" || this.bankName.string == "" || this.accountName.string == "") {
            this.toastUnbindBank()
        } else {
            this.saveUserBankAccount()
            let num = parseFloat(this.amount.string)
            let range = this.currentInfo.RechargeRange.split("-")
            if (isNaN(num) || num < range[0] || num > range[1]) {
                ModuleManager.instance.toastLong(this.amount.placeholder)
            } else {
                //确认银行账号信息
                this.confirmBankAccountInfo()
            }
        }
    }

    private onCheckOrder() {
        let orderSn = this.recieveBankData?.order_sn
        if (orderSn) {
            RechargeAPI.RequestCheckTransferOrder(this, orderSn, (data: any) => {
                this.createOrder.active = true
                this.checkOrder.active = false
            })
        }
    }

    private toastUnbindBank() {
        ModuleManager.instance.toastLong(this.unbindBankStr)
    }

    private copySuccess(str: string) {
        Utility.instance.copyTextToClipboard(str)
        ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("fuzhichenggong"))
    }

    private confirmBankAccountInfo() {
        let tips = LanguageManager.instance.getLangByID("zhuanzhang_14")
        let key1 = LanguageManager.instance.getLangByID("bankbind_bank_account")
        let key2 = LanguageManager.instance.getLangByID("bankbind_bank_name")
        let key3 = LanguageManager.instance.getLangByID("bankbind_account_name")
        let value1 = this.accountNum.string
        let value2 = this.bankName.string
        let value3 = this.accountName.string
        let str = `${tips}\n${key1}: ${value1}\n${key2}: ${value2}\n${key3}: ${value3}`
        ModuleManager.instance.showDialog_CancelConfirm(str, this.requestRecieveBankInfo.bind(this))
    }

    private getValid() {
        return this.isValid && this.node?.isValid
    }

    private requestRecieveBankInfo() {
        if (!this.getValid()) { return }

        let params = {
            amount: this.amount.string,
            config_id: this.currentInfo.ID,
            area_id: GameConfig.GameSiteID,
            bank_sn: this.accountNum.string,
            bank_code: this.currentBank.Code,
            bank_user_name: this.accountName.string
        }
        if (this.extData?.WeeklyCardIdx) {
            params["weekly_card_no"] = this.extData.WeeklyCardIdx
        }
        console.log("发起请求", params)
        RechargeAPI.RequestTransferBankInfo(this, this.currentInfo.channel_url.Url, params, this.setRecieveBankInfo.bind(this))
    }

    private setRecieveBankInfo(data: any) {
        if (!this.getValid()) { return }
        
        let tips1 = LanguageManager.instance.getLangByID("zhuanzhang_13")
        let tips2 = Utility.instance.format(LanguageManager.instance.getLangByID("zhuanzhang_15"), data.expiration_time)
        let tips3 = LanguageManager.instance.getLangByID("zhuanzhang_11")
        let tips = `${tips1}\n${tips2}\n${tips3}`
        ModuleManager.instance.showDialog_Confirm(tips, null)
        this.recieveBankData = data
        this.recieveAccountNum.string = data.bank_sn
        this.recieveAccountName.string = data.bank_user_name
        this.recieveBankIcon.spriteFrame = this.recieveBankIcon.spriteAtlas.getSpriteFrame("" + data.ht_bank_code)
        this.recieveBankCode.string = data.bank_code
        this.checkOrder.active = true
        this.createOrder.active = false
    }

    private saveUserBankAccount() {
        let userID = UserDataModel.GetCurrentUserID()
        LoaclStorage.setString(userID + AccountNumKey, this.accountNum.string)
        LoaclStorage.setString(userID + AccountNameKey, this.accountName.string)
        let arr = this.bankName.string.split("(")
        this.currentBank.Title = arr[0]
        this.currentBank.Code = arr[1].replace(")", "")
        LoaclStorage.setString(userID + BankNameKey, this.currentBank.Title)
        LoaclStorage.setString(userID + BankCodeKey, this.currentBank.Code)
    }

    private getUserBankAccount(key: string) {
        let userID = UserDataModel.GetCurrentUserID()
        return LoaclStorage.getString(userID + key, "")
    }
}