

import { _decorator, Component, Node, instantiate, Label, tween } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
import { RechargeAPI } from '../recharge/RechargeApi';
import { ChargeItem } from './ChargeItem';
import { RechargeRecordNew_View } from './RechargeRecordNew_View';
const { ccclass, property } = _decorator;

interface RecordItem {
    Item: Node,
    Amount: Label,
    OrderNo: Label,
    State: Label,
    Time: Label,
}

@ccclass('RechargeRecordNew')
export class RechargeRecordNew extends Module<RechargeRecordNew_View,null> {
    private totalPage: number = 1
    private currentPage: number = 1
    private itemList: Array<RecordItem>
    private readonly MaxCount = 11

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/rechargeNew/RechargeRecordNew";
        this.viewType = RechargeRecordNew_View;
        this.modelType = null;
        this.layer = ViewLayer.Mid;
        this.needViewMask = true;
        this.needAnim = true;
    }

    onInit(){
        AudioManager.instance.playOpenWindowSound()
        Utility.instance.onButtonClick(this.view.btnClose, this.onCloseClick, this)
        this.view.recordValue.active = false
        this.itemList = []
        let pre = () => this.requestRecord(this.currentPage - 1)
        let next = () => this.requestRecord(this.currentPage + 1)
        this.view.pageTurn.setListeners({ Previous: pre.bind(this), Next: next.bind(this) })
    }

    onShow(data: any){
        this.requestRecord(this.currentPage)
    }

    private getItem(idx: number): RecordItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.view.recordValue : instantiate(this.view.recordValue)
            item.setParent(this.view.recordValue.parent)
            let temp: RecordItem = {
                Item: item,
                Amount: item.getChildByPath("Amount/Label").getComponent(Label),
                OrderNo: item.getChildByPath("OrderNo/Label").getComponent(Label),
                Time: item.getChildByPath("Time/Label").getComponent(Label),
                State: item.getChildByPath("State/Label").getComponent(Label)
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }

    private requestRecord(page: number) {
        if (page < 1 || page > this.totalPage) {
            return
        }
        let callback = (data: any) => this.responce(page, data)
        RechargeAPI.RequestRecord(this, page, this.MaxCount, callback.bind(this))
    }

    private responce(page: number, data: any) {
        if (data) {
            this.totalPage = data.total
            if (data.list && data.list.length > 0) {
                this.showPage(page, data.list)
            }
        }
    }

    private showPage(page: number, list: any) {
        // console.log(`第 ${page} 页`, list)
        this.currentPage = page
        this.view.pageTurn.setPage(this.currentPage, this.totalPage)
        for (let i = 0; i < this.MaxCount; i++) {
            const element = list[i]
            let item = this.getItem(i)
            if (element) {
                item.Item.active = true
                item.Amount.string = element.Amount
                item.Time.string = element.RequestAt
                item.State.string = element.StatusStr
                // item.Fonte.string = element.Fonte
                item.OrderNo.string = element.OrderSn

            } else {
                item.Item.active = false
            }
        }
    }

    onCloseClick(){
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.RechargeRecordNew)
    }
}

