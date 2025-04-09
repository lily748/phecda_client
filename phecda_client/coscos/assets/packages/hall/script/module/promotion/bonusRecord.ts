
import { _decorator, Component, Node, Label, instantiate, Button } from 'cc';
import { PageTurn } from '../../../../../script/utility/ui_extend/pageTurn';
import Utility from '../../../../../script/utility/utility';
import { PromotionAPI } from './promotionApi';
const { ccclass, property } = _decorator;

interface BonusRecordItem {
    Item: Node,
    Date: Label,
    Activated: Label,
    Reach: Label,
    TodayBonus: Label,
    Option: Label
}

@ccclass('BonusRecord')
export class BonusRecord extends Component {

    @property(Node)
    valueItem: Node
    @property(PageTurn)
    pageTurn: PageTurn
    @property(Label)
    totalBonus: Label

    private detailListener: Function

    private itemList: Array<BonusRecordItem>
    private readonly MaxCount = 11

    private data: Array<any>
    private totalPage: number = 1
    private currentPage: number = 1

    onLoad() {
        this.valueItem.active = false
        this.itemList = []
        this.data = []

        let pre = () => this.showPage(this.currentPage - 1)
        let next = () => this.showPage(this.currentPage + 1)
        this.pageTurn.setListeners({ Previous: pre.bind(this), Next: next.bind(this) })
    }

    setDetailListener(listener: Function) {
        this.detailListener = listener
    }

    show() {
        this.node.active = true
        this.showPage(1)
        this.totalBonus.string = PromotionAPI.getTotalBonus()
    }

    hide() { this.node.active = false }

    private getItem(idx: number): BonusRecordItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.valueItem : instantiate(this.valueItem)
            item.setParent(this.valueItem.parent)
            let temp: BonusRecordItem = {
                Item: item,
                Date: item.getChildByPath("Date/Label").getComponent(Label),
                Activated: item.getChildByPath("Activated/Label").getComponent(Label),
                Reach: item.getChildByPath("Reach/Label").getComponent(Label),
                TodayBonus: item.getChildByPath("TodayBonus/Label").getComponent(Label),
                Option: item.getChildByPath("Option/Label").getComponent(Label)
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }

    private requestData(page: number) {
        let callback = (data: any) => this.responce(page, data)
        PromotionAPI.requestBonusRecord(this, page, this.MaxCount, callback.bind(this))
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
        this.pageTurn.setPage(this.currentPage, this.totalPage)
        for (let i = 0; i < this.MaxCount; i++) {
            const element = list[i];
            let item = this.getItem(i)
            item.Item.off(Button.EventType.CLICK)
            if (element) {
                item.Item.active = true
                item.Date.string = element.DayKey
                item.Activated.string = element.InviteUserReward
                item.Reach.string = element.RechargeProportionReward
                item.TodayBonus.string = element.TotalReward
                Utility.instance.onButtonClick(item.Item, () => {
                    this.detailListener && this.detailListener(element)
                }, this, false)
            } else {
                item.Item.active = false
            }
        }
    }
}