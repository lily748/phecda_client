
import { _decorator, Component, Node, Sprite, Label, instantiate, Button } from 'cc';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import { PageTurn } from '../../../../../script/utility/ui_extend/pageTurn';
import Utility from '../../../../../script/utility/utility';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { UserDataModel } from '../../model/UserDataModel';
import { PromotionAPI } from './promotionApi';
const { ccclass, property } = _decorator;

interface UnderlingItem {
    Item: Node,
    Head: Sprite,
    Name: Label,
    ID: Label,
    InviterID: Label,
    Register: Label,
    TodayBonus: Label,
    TotalBonus: Label,
    Option: Label,
}

@ccclass('Underling')
export class Underling extends Component {

    @property(Node)
    valueItem: Node
    @property(PageTurn)
    pageTurn: PageTurn
    @property(Label)
    myInvites: Label
    @property(Label)
    subInvites: Label

    private detailListener: Function

    private itemList: Array<UnderlingItem>
    private readonly MaxCount = 6

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
        let myData = PromotionAPI.getMyPromotion()
        this.myInvites.string = "" + myData?.TotalInviteUserNum
        this.subInvites.string = "" + myData?.subordinateInviteUser
    }

    hide() { this.node.active = false }

    private getItem(idx: number): UnderlingItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.valueItem : instantiate(this.valueItem)
            item.setParent(this.valueItem.parent)
            let temp: UnderlingItem = {
                Item: item,
                Head: item.getChildByPath("Player/Head").getComponent(Sprite),
                Name: item.getChildByPath("Player/Name").getComponent(Label),
                ID: item.getChildByPath("Player/ID").getComponent(Label),
                InviterID: item.getChildByPath("Inviter/Label").getComponent(Label),
                Register: item.getChildByPath("Register/Label").getComponent(Label),
                TodayBonus: item.getChildByPath("TodayBonus/Label").getComponent(Label),
                TotalBonus: item.getChildByPath("TotalBonus/Label").getComponent(Label),
                Option: item.getChildByPath("Option/Label").getComponent(Label),
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }

    private requestData(page: number) {
        let callback = (data: any) => this.responce(page, data)
        PromotionAPI.requestUnderlingContribution(this, page, this.MaxCount, callback.bind(this))
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
            item.Item.off(Button.EventType.CLICK)
            if (element) {
                item.Item.active = true
                SpriteDataModel.SetHead(item.Head, element.user.Head)
                item.Name.string = Utility.instance.thFilterPlayerName(element.user.NickName)
                item.ID.string = "ID:" + element.user.UserID
                item.InviterID.string = element.PUserID == userID ? me : element.PUserID
                item.Register.string = element.JoinAt
                // item.TodayBonus.string = element.TotalToPReward
                item.TotalBonus.string = element.PUserID == userID ? element.TotalToPReward : element.TotalToSuperiorReward
                Utility.instance.onButtonClick(item.Item, () => {
                    this.detailListener && this.detailListener(element)
                }, this, false)
            } else {
                item.Item.active = false
            }
        }
    }
}