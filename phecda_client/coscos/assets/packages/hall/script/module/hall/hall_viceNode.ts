
import { _decorator, Component, Node, Label, EditBox, Toggle, Prefab, instantiate, Sprite, Button, v3, tween } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { GameDataModel } from '../../model/GameDataModel';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { UserDataModel } from '../../model/UserDataModel';
import { HallGameList } from './hall_gameList';
const { ccclass, property } = _decorator;

@ccclass('HallViceNode')
export class HallViceNode extends Component {

    @property(EditBox)
    search: EditBox
    @property(Node)
    searchCancel: Node
    @property(Node)
    gameListNode: Node
    @property(Node)
    roomListNode: Node
    @property(Toggle)
    like: Toggle
    @property(Node)
    quickPlay: Node

    @property(Node)
    roomListRoot1: Node
    @property(Node)
    roomListRoot2: Node
    @property([Node])
    roomItems: Node[] = []

    private listeners: { Back: Function, GameClick: Function, RoomClick?: Function }

    private gameList: HallGameList
    private gameListData: any
    private roomData: any
    private roomClick: Function
    private quickPlayClick: Function

    onLoad() {
        this.search.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onSearch, this)
        Utility.instance.onButtonClick(this.searchCancel, this.onSearchCancel, this)
        Utility.instance.onToggleClick(this.like, this.onLike, this)
        Utility.instance.onButtonClick(this.quickPlay, this.onQuickPlay, this)
        
    }

    setListeners(listeners: { Back: Function, GameClick: Function, RoomClick?: Function }) {
        this.listeners = listeners
    }

    showGameList(data: any) {
        this.gameListData = data
        this.roomData = null
        this.roomClick = null
        this.node.active = true
        this.roomListNode.active = false
        this.gameListNode.active = true
        this.like.node.active = true
        this.search.node.active = true
        if (!this.gameList) {
            ResourceManager.loadRes("prefabs/hall/GameList", Prefab, (err, prefab: Prefab) => {
                if (!err) {
                    if (!data || !this || !this.isValid || !this.node || !this.node.isValid) {
                        return
                    }
                    let preNode: Node = instantiate(prefab)
                    preNode.setParent(this.gameListNode)
                    this.gameList = preNode.getComponent(HallGameList)
                    this.gameList.onClick = this.onGameClick.bind(this)
                    this.gameList.isVice = true
                    this.gameList.show(data.SubID)
                }
            })
        } else {
            this.gameList.show(data.SubID)
        }
        this.node.getChildByName("trucoNode").active =  false
        this.quickPlay.active =  false
    }

    refreshGameList() {
        if (this.gameListData) {
            this.showGameList(this.gameListData)
        } else if (this.roomData && this.roomClick) {
            this.showRoomList(this.roomData, this.roomClick,this.quickPlayClick)
        }
    }

    showRoomList(data: any, click: Function,quickclick:Function) {
        this.roomData = data
        this.roomClick = click
        this.quickPlayClick = quickclick
        this.gameListData = null
        this.gameListNode.active = false
        this.like.node.active = false
        this.search.node.active = false

        this.roomListNode.active = true
        this.node.active = true
        this.showRoomItems(data, click)
        

        this.node.getChildByName("trucoNode").active =  data.Data.GameID == 10000021
        this.quickPlay.active =  true
    }

    private showRoomItems(data: any, click: Function) {
        let list = data.Data.GameRoomList
        list = list.sort((a: any, b: any) => {
            return parseInt(a.Flag) - b.Flag
        })

        this.roomListRoot2.active = list.length > 2
        for (let i = 0; i < this.roomItems.length; i++) {
            const item = this.roomItems[i];
            item.off(Button.EventType.CLICK)
            if (list[i]) {
                item.on(Button.EventType.CLICK, () => {
                    AudioManager.instance.playEffect(CommonName.PUBLIC_SOUNDURL.GameClick)
                    click(list[i].Flag)
                }, this)
                if (list[i].RoomDesc && list[i].RoomDesc != "") {
                    let desc = JSON.parse(list[i].RoomDesc)
                    item.getChildByPath("Layout/Min").getComponent(Label).string = desc.minbet
                    item.getChildByPath("Des").getComponent(Label).string = desc.desc
                } else {
                    item.getChildByPath("Layout/Min").getComponent(Label).string = ""
                    item.getChildByPath("Des").getComponent(Label).string = ""
                }

                item.getChildByPath("text_dizhu").active = this.roomData.Data.GameID != 10000021
                item.getChildByPath("text").active = this.roomData.Data.GameID == 10000021
                if(this.roomData.Data.GameID == 10000021){
                    let baseScore = UserDataModel.ConvertCash(list[i].BaseScore)
                    let LoginMoney = UserDataModel.ConvertCash(list[i].LoginMoney)
                    let LoginMoneyMax = UserDataModel.ConvertCash(list[i].LoginMoneyMax)
                    item.getChildByPath("Layout/Min").getComponent(Label).string = Utility.instance.numThousandsFormat(baseScore.toString())
                    item.getChildByPath("text").getComponent(Label).string = "1V1"
                    if(list[i].LoginMoneyMax == 0){
                        item.getChildByPath("Des").getComponent(Label).string = Utility.instance.numThousandsFormat(LoginMoney.toString()) + "+"
                    }else{
                        item.getChildByPath("Des").getComponent(Label).string = Utility.instance.numThousandsFormat(LoginMoney.toString()) + "-" +  Utility.instance.numThousandsFormat(LoginMoneyMax.toString())
                    }   
                }

                let parent = this.roomListRoot1
                if (i >= 2 ){ //if (list.length == 4 && i >= 2 || list.length > 3 && i > 2) {
                    parent = this.roomListRoot2
                }
                item.setParent(parent)
                item.scale = v3(0.8, 0.8, 1)
                item.active = true
                tween(item).to(0.3, { scale: v3(1, 1, 1) }).start()
            } else {
                item.active = false
            }
        }
    }

    hide() {
        this.node.active = false
        this.search.string = ""
    }

    private onGameClick(info: any) {
        this.listeners && this.listeners.GameClick(info)
    }

    private onSearchCancel() {
        if (this.search.string != "") {
            this.search.string = ""
            this.onSearch()
        }
    }

    private onSearch() {
        const key = this.search.string.replace(" ", "")
        if (key != "") {
            console.log("key", key)
            let list = new Array<number>()
            const lowKey = key.toLowerCase()
            this.gameListData.SubID.forEach((id: number) => {
                const gameInfo = GameDataModel.GetGameInfoByID(id)
                let gameName = gameInfo.Data.GameName.toLowerCase().replace(" ", "")
                if (gameName.includes(lowKey)) {
                    list.push(id)
                }
            })
            this.gameList && this.gameList.show(list)
        } else {
            this.gameList && this.gameList.show(this.gameListData.SubID)
        }
    }

    private onLike() {
        this.gameList.showLike = this.like.isChecked
        EventManager.instance.dispatch(CommonName.EVENT.Show_Like, this.like.isChecked)
    }

    private onQuickPlay(){
        if(this.quickPlayClick){
            this.quickPlayClick()
        }
    }
}