
import { _decorator, Component, Node, instantiate, Label, Button, math } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import Utility from '../../../../../script/utility/utility';
import { UserDataModel } from '../../model/UserDataModel';
import { WithdrawAPI } from '../withdraw/withdrawApi';
import { PblicWithdrawRecordView } from './public_withdrawRecordView';
const { ccclass, property } = _decorator;

interface RecordItem {
    Item: Node,
    Account: Label,
    Amount: Label,
    Time: Label,
    State: Label,
}

@ccclass('PblicWithdrawRecord')
export class PblicWithdrawRecord extends Module<PblicWithdrawRecordView, null> {

    private data: Array<any>
    private totalPage: number = 1
    private currentPage: number = 1

    private itemList: Array<RecordItem>
    private readonly MaxCount = 11

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_withdrawRecord";
        this.viewType = PblicWithdrawRecordView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needViewMask = true
        this.needAnim = true
    }

    onInit() {
        this.view.itemNode.active = false
        Utility.instance.onButtonClick(this.view.closeBtn, this.onCloseBtnClick, this, false)
        
        this.itemList = []
        this.data = []
        let pre = () => this.showPage(this.currentPage - 1)
        let next = () => this.showPage(this.currentPage + 1)
        this.view.pageTurn.setListeners({ Previous: pre.bind(this), Next: next.bind(this) })
    }

    onShow(){
        AudioManager.instance.playOpenWindowSound()
        this.showPage(1)
    }

    private onCloseBtnClick() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule("PblicWithdrawRecord")
    }

    private getItem(idx: number): RecordItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.view.itemNode : instantiate(this.view.itemNode)
            item.setParent(this.view.itemRoot)
            let temp: RecordItem = {
                Item: item,
                Account: item.getChildByPath("Account/Label").getComponent(Label),
                Amount: item.getChildByPath("Amount/Label").getComponent(Label),
                Time: item.getChildByPath("Time/Label").getComponent(Label),
                State: item.getChildByPath("State/LabelCheck").getComponent(Label)
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }

    private showPage(page: number) {
        console.log(`第 ${page} 页`)
        if (this.data.length > 0 && (page > this.totalPage || page < 1)) {
            return
        }

        let list = this.data[page - 1]
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
                item.Account.string = element.bank.BankSn
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
                this.data[page - 1] = data.list
                this.showPage(page)
            }
        }
    }

}

