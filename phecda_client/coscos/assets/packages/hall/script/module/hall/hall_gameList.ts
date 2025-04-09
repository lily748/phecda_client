
import { _decorator, Component, Node, math } from 'cc';
import { UIRecycleScrollView } from '../../../../../script/utility/ui_extend/UIRecycleScrollView';
import { GameDataModel } from '../../model/GameDataModel';
import { GameItem } from './GameItem';
const { ccclass, property } = _decorator;

@ccclass('HallGameList')
export class HallGameList extends Component {

    private recycle: UIRecycleScrollView

    private _onClick: Function
    public set onClick(v: Function) { this._onClick = v }
    public get onClick() { return this._onClick }

    private _isVice: boolean = false
    public set isVice(v: boolean) { this._isVice = v }

    private _showLike: boolean;
    public set showLike(v: boolean) {
        this._showLike = v;
        // this.show(this.gameListData)
    }

    private _onCancelLike: Function
    public get onCancelLike(): Function { return this._onCancelLike }
    public set onCancelLike(v: Function) { this._onCancelLike = v }

    private gameListData: Array<number>

    onLoad() {
        this.recycle = this.node.getComponent(UIRecycleScrollView)
        this.recycle.InitializeChild = { target: this, eventHandler: this.refreshItem }
    }

    private refreshItem(idx: string, item: Node) {
        // const id = this.recycle.data[parseInt(idx)]
        if (!this.gameListData) {
            return
        }
        const id = this.gameListData[parseInt(idx)]
        if (!id || isNaN(id)) {
            console.error("id错误", id, idx, JSON.stringify(this.gameListData))
            return
        }
        let gameInfo = GameDataModel.GetGameInfoByID(id)
        let cpInfo = GameDataModel.GetCPInfoByGameID(id)
        if (!gameInfo || !cpInfo) {
            console.error("子游戏数据错误", id)
            return
        }
        let info = { CPInfo: cpInfo, GameInfo: gameInfo }
        let gameItem = item.getComponent(GameItem)
        let onClick = function () {
            if (this._onClick) { this._onClick(info) }
        }
        gameItem.setItem(info, onClick.bind(this), this._isVice, this._showLike, this._onCancelLike)
    }

    async show(list: Array<number>) {
        this.node.active = true
        this.gameListData = list
        this.recycle.data = list
        await this.recycle.loadSlots(list.length)
        this?.recycle?.scrollView.scrollToLeft(0)
    }

    public get data() { return this.recycle?.data }

    hide() { this.node.active = false }
}
