
import { _decorator, Node, instantiate, Label, Toggle, EditBox, math, Slider } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
import { WithdrawAPI } from './withdrawApi';
import { WithDrawView } from './withdraw_view';
const { ccclass, property } = _decorator;

interface RecordItem {
    Item: Node,
    ID: Label,
    Amount: Label,
    Time: Label,
    State: Label,
}

const ButtonAmount: number[] = [200, 500, 1000, 5000]
 

@ccclass('WithDraw')
export class WithDraw extends Module<WithDrawView, null> {

    private data: any
    private currentBankInfo: any
    private rateStr: string

    private recordData: Array<any>
    private totalPage: number = 1
    private currentPage: number = 1

    private itemList: Array<RecordItem>
    private readonly MaxCount = 11
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_withdraw";
        this.viewType = WithDrawView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needViewMask = true
        this.needAnim = false
    }


    onInit() {


        Utility.instance.onButtonClick(this.view.closeBtn, this.onCloseBtnClick, this, false)
        Utility.instance.onButtonClick(this.view.clearBtn, this.onClearWithDraw, this)
        Utility.instance.onButtonClick(this.view.confirmBtn, this.onConfirmBtnClick, this)
        Utility.instance.onButtonClick(this.view.helpBtn, this.onHelpBtnClick, this, false)
        Utility.instance.onButtonClick(this.view.historyBtn, this.onHistoryBtnClick, this, false)
        Utility.instance.onButtonClick(this.view.closeHelpBtn, this.onHelpCloseBtnClick, this, false)
        Utility.instance.onButtonClick(this.view.closeHistoryBtn, this.onHistoryCloseBtnClick, this, false)


        Utility.instance.onButtonClick(this.view.bind, this.onBind, this, false)
        Utility.instance.onButtonClick(this.view.edit, this.onModify, this, false)
        this.view.inputTxt.node.on(EditBox.EventType.TEXT_CHANGED, this.onEditBox, this)

        EventManager.instance.on(CommonName.EVENT.Respon_Refresh_UserInfo, this.refreshUserCash, this)

        this.view.recordValue.active = false
        this.itemList = []
        this.recordData = []
        let pre = () => this.showPage(this.currentPage - 1)
        let next = () => this.showPage(this.currentPage + 1)
        this.view.pageTurn.setListeners({ Previous: pre.bind(this), Next: next.bind(this) })

        Utility.instance.onButtonClick(this.view.cashHelpPanel.getChildByPath("public_window/Close"), () => {
            this.view.cashHelpPanel.active = false
        })
    }


    onShow() {
        this.currentBankInfo = null
        AudioManager.instance.playOpenWindowSound()
        WithdrawAPI.requestConfig(this, this.setUI.bind(this))
    }

    private setUI(data: any) {
        if (!data || !this?.isValid) { return }

        this.data = data
        this.currentBankInfo = null
        this.refreshUserCash()
        UserDataModel.liushuiRate = parseFloat("" + data.current_multiple_of_withdrawal)
        if (data.bankList?.length > 0) {
            this.currentBankInfo = data.bankList[data.bankList.length - 1]
        }
        this.rateStr = (parseFloat(data.withdrawalRate) * 100).toFixed(2)

        if (this.currentBankInfo) {
            this.view.bind.active = false
            this.view.edit.active = true
            this.view.bindContainer.active = false
            this.view.verifyContainer.active = true
            let info = this.currentBankInfo
            this.refreshPIXDetail(info)
        } else {
            this.view.bind.active = true
            this.view.edit.active = false
            this.view.bindContainer.active = true
            this.view.verifyContainer.active = false
        }
        this.initDefaultWithdrawNum();
        this.onEditBox()
    }

    private refreshPIXDetail(info) {
        this.view.PIX.string = "PIX";
        this.view.PIXNome.string = info.Name;
    }

    private showPage(page: number) {
        console.log(`第 ${page} 页`)
        if (this.recordData.length > 0 && (page > this.totalPage || page < 1)) {
            return
        }

        let list = this.recordData[page - 1]
        if (!list) {
            this.requestData(page)
            return
        }

        this.currentPage = page
        this.view.pageTurn.setPage(this.currentPage, this.totalPage)
        for (let i = 0; i < this.MaxCount; i++) {
            const element = list[i]
            let item = this.getItem(i)
            if (element) {
                item.Item.active = true
                item.ID.string = "ID:" + element.ID
                item.Amount.string = element.Money
                item.Time.string = element.CreateAt
                let state = parseInt(element.Status)
                state = math.clamp(state, 0, 4)
                item.State.string = LanguageManager.instance.getLangByID("withdraw_state_" + state)
            } else {
                item.Item.active = false
            }
        }
    }

    private getItem(idx: number): RecordItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.view.recordValue : instantiate(this.view.recordValue)
            item.setParent(this.view.recordValue.parent)
            let temp: RecordItem = {
                Item: item,
                ID: item.getChildByPath("ID/Label").getComponent(Label),
                Amount: item.getChildByPath("Amount/Label").getComponent(Label),
                Time: item.getChildByPath("Time/Label").getComponent(Label),
                State: item.getChildByPath("State/Label").getComponent(Label)
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }


    private requestData(page: number) {
        let callback = (data: any) => this.responce(page, data)
        let params = {
            uid: UserDataModel.GetCurrentUserID(),
            page: page,
            pageSize: this.MaxCount,
        }
        WithdrawAPI.requestWithdrawRecord(this, params, callback.bind(this))
    }

    private responce(page: number, data: any) {
        if (data) {
            this.totalPage = data.total
            if (data.list && data.list.length > 0) {
                this.recordData[page - 1] = data.list
                this.showPage(page)
            }
        }
    }

    private onHelpBtnClick() {
        this.view.cashHelpPanel.active = true;
    }

    private onHistoryBtnClick() {
        this.showRecordNode()
    }

    private onHelpCloseBtnClick(): void {
        this.view.cashHelpPanel.active = false;
    }

    private onHistoryCloseBtnClick(): void {
        this.view.recordNode.active = false;
    }

    onCloseBtnClick() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.Withdraw)
    }

    private onClearWithDraw() {
        this.setNum(0);
    }

    setNum(num: number, isTodo = false) {
        let showNum: string | number = num;
        if (isTodo) {
            let myCash = parseFloat(this.view.cash.string);
            showNum = ((myCash - parseFloat(this.data.FrozenMoney)) / (1 + parseFloat(this.data.withdrawalRate)));
            if (showNum >= parseFloat(this.data.FrozenMoney))
                showNum = showNum.toFixed(0);
            else
                showNum = 0
        }
        this.view.inputTxt.string = "" + showNum;
        this.onEditBox()
    }


    private showRecordNode() {
        this.view.recordNode.active = true
        if (this.recordData.length == 0) {
            this.showPage(1)
        }
    }

    private onEditBox() {
        if (this.data) {
            let num = parseFloat(this.view.inputTxt.string)
            if (isNaN(num) || num < this.data.MinMoney) {
                this.view.inputTips.string = Utility.instance.format(LanguageManager.instance.getLangByID("withdraw_least_num"), this.data.MinMoney)
                return
            }
            let rateNum = num * parseFloat(this.data.withdrawalRate)
            // let freezeNum = parseFloat(this.data.FrozenMoney);
            let numStr = parseFloat((num + rateNum).toFixed(2));
            let lan = LanguageManager.instance.getLangByID("tixian_tips")
            let str1 = `<color=#f5f3b7>${this.rateStr}%</color>`
            let str2 = `<color=#f5f3b7>${numStr}</color>`
            let tips = Utility.instance.format(`<color=#83d9e9>${lan}</color>`, str1, str2)
            this.view.inputTips.string = tips
        }
    }
    onConfirmBtnClick() {
        if (!this.data) { return }

        let num = parseInt(this.view.inputTxt.string)
        num = isNaN(num) ? 0 : num
        let rateNum = num * parseFloat(this.data.withdrawalRate)
        if (num + rateNum > UserDataModel.GetWithdrawAmount()) {
            ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("no_cash"))
        } else if (num < (this.data.MinMoney)) {
            ModuleManager.instance.toastLong(Utility.instance.format(LanguageManager.instance.getLangByID("withdraw_least_num"), this.data.MinMoney))
        } else if (!this.currentBankInfo) {
            ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("no_bind_bank_card"))
        } else if (!UserDataModel.GetCurrentUser().UserData.IsBindGuest) {
            ModuleManager.instance.showModule(CommonName.MODULE.Register)
            ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("bangdingshoujicaiketixian"))
        } else {
            let params = {
                uid: UserDataModel.GetCurrentUserID(),
                bank_id: this.currentBankInfo.ID,
                money: this.view.inputTxt.string,
            }
            WithdrawAPI.requestWithdraw(this, params, (data: any) => {
                if (data) {
                    this.data.totalFlowAmount = data.totalFlowAmount
                    // this.view.liushui.string = "" + data.totalFlowAmount

                    this.refreshUserCash();
                    this.setNum(0);
                }
            })
        }
    }

    onDescBtnClick() {
        let desc = this.data ? this.data.tip : ""
        ModuleManager.instance.showModule("WithdrawDesc", desc)
    }

    onBind() {
        ModuleManager.instance.showModule(CommonName.MODULE.BankBind)
    }

    onModify() {
        ModuleManager.instance.showModule(CommonName.MODULE.BankBind,this.data.bankList[0]);
    }

    private refreshUserCash() {
        if (!this?.data || !this?.isValid) { return }
        let rate = parseFloat("" + this.data.current_multiple_of_withdrawal)
        let liushui = parseFloat("" + this.data.totalFlowAmount) / rate
        let min = Math.min(liushui, UserDataModel.GetWithdrawAmount())
        this.view.cash.string = min.toFixed(2)
        this.view.coin.string = "" + UserDataModel.GetCashAmount()
    }

    private initDefaultWithdrawNum() {
        let list = JSON.parse(this.data.QuickAmount || "[]");
        if (list.length > 0) {
            for (let i = 0; i <= list.length; i++) {
                let btn = this.view.buttons.children[i] || instantiate(this.view.buttons.children[0])
                btn.setParent(this.view.buttons)
                btn.active = true
                btn.getChildByName("Label").getComponent(Label).string = i == list.length ? "Todo" : (CommonName.Currency.Symbol + list[i]);
                Utility.instance.onButtonClick(btn, () => this.setNum(list[i], i == list.length), this)
            }
        }

    }

    onDestroy() {
        EventManager.instance.off(CommonName.EVENT.Respon_Refresh_UserInfo, this.refreshUserCash, this)
    }

}