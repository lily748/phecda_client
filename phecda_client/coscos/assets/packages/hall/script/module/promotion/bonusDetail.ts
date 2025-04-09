
import { _decorator, Component, Node, instantiate, Sprite, Label } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import { PageTurn } from '../../../../../script/utility/ui_extend/pageTurn';
import Utility from '../../../../../script/utility/utility';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { UserDataModel } from '../../model/UserDataModel';
import { PromotionAPI } from './promotionApi';
const { ccclass, property } = _decorator;

interface BonusDetailItem {
    Item: Node,
    Head: Sprite,
    Name: Label,
    ID: Label,
    InviterID: Label,
    Activated: Label,
    Reach: Label,
    TodayBonus: Label
}

@ccclass('BonusDetail')
export class BonusDetail extends Component {

    @property(Node)
    close: Node
    @property(Node)
    valueItem: Node
    @property(PageTurn)
    pageTurn: PageTurn

    private itemList: Array<BonusDetailItem>
    private readonly MaxCount: number = 6

    private data: Array<any>
    private totalPage: number = 1
    private currentPage: number = 1
    private day: string

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.hide, this, false)
        this.valueItem.active = false
        this.itemList = []
        let pre = () => this.showPage(this.currentPage - 1)
        let next = () => this.showPage(this.currentPage + 1)
        this.pageTurn.setListeners({ Previous: pre.bind(this), Next: next.bind(this) })
    }

    show(data: any) {
        AudioManager.instance.playOpenWindowSound()
        this.node.active = true
        this.day = data.DayKey
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

    private getItem(idx: number): BonusDetailItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.valueItem : instantiate(this.valueItem)
            item.setParent(this.valueItem.parent)
            let temp: BonusDetailItem = {
                Item: item,
                Head: item.getChildByPath("Player/Head").getComponent(Sprite),
                Name: item.getChildByPath("Player/Name").getComponent(Label),
                ID: item.getChildByPath("Player/ID").getComponent(Label),
                InviterID: item.getChildByPath("Inviter/Label").getComponent(Label),
                Activated: item.getChildByPath("Activated/Label").getComponent(Label),
                Reach: item.getChildByPath("Reach/Label").getComponent(Label),
                TodayBonus: item.getChildByPath("TodayBonus/Label").getComponent(Label)
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }

    private requestData(page: number) {
        let callback = (data: any) => this.responce(page, data)
        PromotionAPI.requestBonusDetail(this, this.day, page, this.MaxCount, callback.bind(this))
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
        let userID = UserDataModel.GetCurrentUserID().toString()
        let me = LanguageManager.instance.getLangByID("promotion_label_me")
        for (let i = 0; i < this.MaxCount; i++) {
            const element = list[i]
            let item = this.getItem(i)
            if (element) {
                item.Item.active = true
                SpriteDataModel.SetHead(item.Head, element.user.Head)
                item.Name.string = Utility.instance.thFilterPlayerName(element.user.NickName)
                item.ID.string = "ID:" + element.user.UserID
                item.InviterID.string = element.PUserID == userID ? me : element.PUserID
                item.TodayBonus.string = element.TotalReward
                item.Activated.string = element.InviteUserReward
                item.Reach.string = element.RechargeProportionReward
            } else {
                item.Item.active = false
            }
        }
    }
}