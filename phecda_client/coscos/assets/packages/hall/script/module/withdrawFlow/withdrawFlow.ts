
import { _decorator, Component, Node, Label, instantiate } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
import { WithdrawAPI } from '../withdraw/withdrawApi';
import { WithdrawFlowView } from './withdrawFlowView';
const { ccclass, property } = _decorator;

interface FlowItem {
    Item: Node,
    Type: Label,
    Amount: Label,
    Time: Label,
    Flow: Label,
}

@ccclass('WithdrawFlow')
export class WithdrawFlow extends Module<WithdrawFlowView, null> {

    private data: Array<any>
    private totalPage: number = 1
    private currentPage: number = 1

    private itemList: Array<FlowItem>
    private readonly MaxCount = 10

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_withdrawFlow";
        this.viewType = WithdrawFlowView;
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

    onCloseBtnClick() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule("WithdrawFlow")
    }

    private getItem(idx: number): FlowItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.view.itemNode : instantiate(this.view.itemNode)
            item.setParent(this.view.itemRoot)
            let temp: FlowItem = {
                Item: item,
                Type: item.getChildByPath("Type/Label").getComponent(Label),
                Amount: item.getChildByPath("Amount/Label").getComponent(Label),
                Time: item.getChildByPath("Time/Label").getComponent(Label),
                Flow: item.getChildByPath("Flow/Label").getComponent(Label)
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }

    private showPage(page: number) {
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
            if (element) {
                let item = this.getItem(i)
                item.Item.active = true
                item.Type.string = element.Name
                item.Amount.string = element.Amount
                item.Time.string = element.CreateTime
                item.Flow.string = element.FlowAmount
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
