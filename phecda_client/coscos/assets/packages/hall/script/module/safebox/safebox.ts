
import { _decorator, EventHandler } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { NetworkManager } from '../../../../../script/framework/net/networkManager';
import { SafeboxView } from './safebox_view';
import proto from '../../../proto/hall_proto.js'
import { LoginServer } from '../../../../../script/net/login_serve';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import AudioManager from '../../../../../script/manager/audio_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import { UserDataModel } from '../../model/UserDataModel';
import CommonName from '../../model/CommonName';
const { ccclass, property } = _decorator;


@ccclass('Safebox')
export class Safebox extends Module<SafeboxView, null> {

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_safebox";
        this.viewType = SafeboxView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needViewMask = true
        this.needAnim = true
    }

    private _data: any = null
    private _isStoreState = true

    onInit() {
        let hander = new EventHandler()
        hander.target = this.node
        hander.component = "Safebox"
        hander.handler = "onMenuToggle"
        this.view.menuToggle.checkEvents.push(hander)

        this.view.backBtn.on("click", this.onBackBtnClick, this)

        this.view.storeEditorBox.node.on("editing-did-ended", this.onStoreEditorEnd, this)
        this.view.storeConfirmBtn.on("click", this.onStoreConfirmBtnClick, this)
        this.view.takeOutEditorBox.node.on("editing-did-ended", this.onTakeoutEditorEnd, this)
        this.view.takeOutBtn.on("click", this.onTakeoutBtnClick, this)

        this.view.clearBtn.on("click", this.onClearBtnClick, this)
        this.view.add100Btn.on("click", this.onAdd100BtnClick, this)
        this.view.add1kBtn.on("click", this.onAdd1kBtnClick, this)
        this.view.add10kBtn.on("click", this.onAdd10kBtnClick, this)
        this.view.addAllBtn.on("click", this.onAddAllBtnClick, this)
        this.registMsg()
    }

    registMsg(add: boolean = true) {
        NetworkManager.RegisterMsgListener<proto.netproto.MoneyDepositRet>(proto.netproto.MessageBClassID.Hall, proto.netproto.HallMsgClassID.DepositMoneyRetID, this.responeBank.bind(this), this, add)
    }

    onDestroy() {
        this.registMsg(false)
    }

    private responeBank(receiveMsg: proto.netproto.MoneyDepositRet) {
        if (receiveMsg.Code == 0) {
            LoginServer.requestRefreshUserInfo()
            if (receiveMsg.OP == 0) {
                this.view.storeEditorBox.string = "0"
                ModuleManager.instance.toast(LanguageManager.instance.getLangByID("safebox_tip6"))
            } else {
                this.view.takeOutEditorBox.string = "0"
                ModuleManager.instance.toast(LanguageManager.instance.getLangByID("safebox_tip7"))
            }
            this._data.CashAmount = Number(receiveMsg.CurrentMoney) / UserDataModel.getCashRate()
            this._data.BankAmount = Number(receiveMsg.CurrentBank) / UserDataModel.getCashRate()
            this.view.refreshStore(this._data.CashAmount, this._data.BankAmount)
        } else {
            ModuleManager.instance.toastLong(LanguageManager.instance.getErrorMsgByID(receiveMsg.Code))
        }
    }

    onShow() {
        AudioManager.instance.playOpenWindowSound()
        this._data = { "CashAmount": UserDataModel.GetCashAmount(), "BankAmount": UserDataModel.GetBankAmount() }
        this.view.refreshStore(this._data.CashAmount, this._data.BankAmount)
    }

    onMenuToggle() {
        AudioManager.instance.playButtonSound()
        this._isStoreState = this.view.menuToggle.toggleItems[0].isChecked
        this.view.showState(this._isStoreState)
    }

    onBackBtnClick() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.SafeBox)
    }

    onStoreEditorEnd() { }

    onStoreConfirmBtnClick() {
        AudioManager.instance.playButtonSound()
        if (this.view.storeEditorBox.string == "") {
            ModuleManager.instance.toast(LanguageManager.instance.getLangByID("safebox_tip1"))
            return
        }

        let storeNum = parseFloat(this.view.storeEditorBox.string)
        if (storeNum > this._data.CashAmount) {
            ModuleManager.instance.toast(LanguageManager.instance.getLangByID("safebox_tip2"))
        } else if (storeNum <= 0) {
            ModuleManager.instance.toast(LanguageManager.instance.getLangByID("safebox_tip3"))
        } else {
            let amount = storeNum * UserDataModel.getCashRate()
            LoginServer.requestBank({ Amount: amount, OP: 0 })
        }
    }

    onTakeoutEditorEnd() { }

    onClearBtnClick() {
        AudioManager.instance.playButtonSound()
        if (this._isStoreState) {
            this.view.storeEditorBox.string = "0"
        } else {
            this.view.takeOutEditorBox.string = "0"
        }
    }

    onTakeoutBtnClick() {
        AudioManager.instance.playButtonSound()
        if (this.view.takeOutEditorBox.string == "") {
            ModuleManager.instance.toast(LanguageManager.instance.getLangByID("safebox_tip4"))
            return
        }

        let storeNum = parseFloat(this.view.takeOutEditorBox.string)
        if (storeNum > this._data.BankAmount) {
            ModuleManager.instance.toast(LanguageManager.instance.getLangByID("safebox_tip5"))
        } else if (storeNum <= 0) {
            ModuleManager.instance.toast(LanguageManager.instance.getLangByID("safebox_tip3"))
        } else {
            let amount = storeNum * UserDataModel.getCashRate()
            LoginServer.requestBank({ Amount: amount, OP: 1 })
        }
    }

    onAdd100BtnClick() {
        AudioManager.instance.playButtonSound()
        this.addNum(100)
    }

    onAdd1kBtnClick() {
        AudioManager.instance.playButtonSound()
        this.addNum(1000)
    }

    onAdd10kBtnClick() {
        AudioManager.instance.playButtonSound()
        this.addNum(10000)
    }

    onAddAllBtnClick() {
        AudioManager.instance.playButtonSound()
        if (this._isStoreState) {
            this.view.storeEditorBox.string = (this._data.CashAmount) + ""
        } else {
            this.view.takeOutEditorBox.string = (this._data.BankAmount) + ""
        }
    }

    addNum(num: number) {
        let editor = null
        if (this._isStoreState) {
            editor = this.view.storeEditorBox
        } else {
            editor = this.view.takeOutEditorBox
        }
        // let storeNum = 0
        // if (editor.string != "") {
        //     storeNum = parseFloat(editor.string)
        // }
        // storeNum += num
        editor.string = num.toString()
    }

}

