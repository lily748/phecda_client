
import { _decorator, Component, Node, Label, instantiate } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import { PageTurn } from '../../../../../script/utility/ui_extend/pageTurn';
import Utility from '../../../../../script/utility/utility';
import { PromotionAPI } from './promotionApi';
const { ccclass, property } = _decorator;

interface ContributionDetailItem {
    Item: Node,
    Date: Label,
    Bonus: Label,
}

@ccclass('ContributionDetail')
export class ContributionDetail extends Component {

    @property(Node)
    close: Node
    @property(Node)
    valueItem: Node
    @property(PageTurn)
    pageTurn: PageTurn
    @property(Label)
    title: Label

    private itemList: Array<ContributionDetailItem>
    private readonly MaxCount: number = 10

    private data: Array<any>
    private totalPage: number = 1
    private currentPage: number = 1
    private userID: string

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.hide, this, false)
        this.valueItem.active = false
        this.itemList = new Array<ContributionDetailItem>()
        let pre = () => this.showPage(this.currentPage - 1)
        let next = () => this.showPage(this.currentPage + 1)
        this.pageTurn.setListeners({ Previous: pre.bind(this), Next: next.bind(this) })
    }

    show(data: any) {
        AudioManager.instance.playOpenWindowSound()
        this.node.active = true
        this.userID = data.user.UserID
        this.title.string = Utility.instance.format(LanguageManager.instance.getLangByID("promotion_player_contribution_detail"), this.userID)
        this.data = []
        this.currentPage = 1
        this.totalPage = 1
        this.itemList.forEach(item => {
            item.Item.active = false
        })
        this.showPage(1)
    }

    hide() { 
        AudioManager.instance.playCloseWindowSound()
        this.node.active = false 
    }

    private getItem(idx: number): ContributionDetailItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.valueItem : instantiate(this.valueItem)
            item.setParent(this.valueItem.parent)
            let temp: ContributionDetailItem = {
                Item: item,
                Date: item.getChildByPath("Date/Label").getComponent(Label),
                Bonus: item.getChildByPath("Bonus/Label").getComponent(Label),
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }
    
    private requestData(page: number) {
        let callback = (data: any) => this.responce(page, data)
        PromotionAPI.requestContributionDetail(this, this.userID, page, this.MaxCount, callback.bind(this))
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
            const element = list[i]
            let item = this.getItem(i)
            if (element) {
                item.Item.active = true
                item.Date.string = element.CreateAt.split(" ")[0]
                item.Bonus.string = element.Reward
            } else {
                item.Item.active = false
            }
        }
    }
}