
import { _decorator, Component, Node, Label, EditBox, Toggle, Prefab, instantiate, Sprite, Button, v3, tween } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { LoginServer } from '../../../../../script/net/login_serve';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { GameDataModel } from '../../model/GameDataModel';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { UserDataModel } from '../../model/UserDataModel';
import { HallGameList } from './hall_gameList';
import { HallSelectRoomItem } from './hall_selectRoomItem';
import { hall_select_gameItem } from './hall_select_gameItem';
const { ccclass, property } = _decorator;

@ccclass('HallSelectRoom')
export class HallSelectRoom extends Component {

    @property(Node)
    backNode: Node = null
    @property(Node)
    rechargeNode: Node = null
    @property(Node)
    retiradaNode: Node = null
    @property(Node)
    roomListRoot: Node = null
    @property(Node)
    roomItem: Node = null
    @property(Label)
    goldNum: Label = null

    @property(Node)
    gameListRoot: Node = null
    @property(Node)
    gameItem: Node = null

    curGameId = null
    

    // private listeners: { Back: Function, GameClick: Function, RoomClick?: Function }

    // private gameList: HallGameList
    // private gameListData: any
    private roomData: any
    roomItems: HallSelectRoomItem[] = []
    gameItems: hall_select_gameItem[] = []
    // private roomClick: Function
    // private quickPlayClick: Function

    onLoad() {
        //this.backNode.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onSearch, this)
        Utility.instance.onButtonClick(this.backNode, this.hide, this)
        Utility.instance.onButtonClick(this.retiradaNode, this.onRetiradaClick, this)
        Utility.instance.onButtonClick(this.rechargeNode, this.onRechargeClick, this)
        // Utility.instance.onToggleClick(this.like, this.onLike, this)
        // Utility.instance.onButtonClick(this.quickPlay, this.onQuickPlay, this)
        this.registerEvent(true)
        this.setUserInfo(true)  


        //this.initGameList()
    }

    initGameList(){
        this.gameListRoot.removeAllChildren()
        let gameIdList = GameDataModel.GetSelfGameId()
        console.log("gamelist--->",gameIdList)
        let idx = gameIdList.indexOf(this.curGameId)
        if(idx!=-1){
            gameIdList.splice(idx,1)
            gameIdList.unshift(this.curGameId)
        }else{
            return
        }
        for(let i=0 ;i<gameIdList.length;i++){
            let gameItem = instantiate(this.gameItem)
            gameItem.setParent(this.gameListRoot)
            let gameInfo = GameDataModel.GetGameInfoByID(gameIdList[i])
            let cpInfo = GameDataModel.GetCPInfoByGameID(gameIdList[i])
            if (!gameInfo || !cpInfo) {
                console.error("子游戏数据错误", gameIdList[i])
                return
            }
            let info = { CPInfo: cpInfo, GameInfo: gameInfo }
            let itemJs = gameItem.getComponent(hall_select_gameItem)
            itemJs.setItem(info,()=>{
                if(this.curGameId && this.curGameId == info.GameInfo.Data.GameID){
                    console.warn("重复点击")
                    return
                }
                this.curGameId = gameIdList[i]
                this.setGameItemCheck()
                this.initRoomList()
            })
            this.gameItems.push(itemJs)
        }
    }

    private registerEvent(reg: boolean = true) {
        let fun = reg ? "on" : "off"
        EventManager.instance[fun](CommonName.EVENT.Respon_Refresh_UserInfo, () => this.setUserInfo(), this)
    }

    private setGameItemCheck(){
        for(let i=0 ;i<this.gameItems.length;i++){
            this.gameItems[i].setIsCheck(this.gameItems[i].node.name == this.curGameId.toString())
        }
    }

    refreshGameRoom() {
        this.initRoomList()
    }

    showRoomList(roomData){
        console.log("roomData--->",roomData)
        this.curGameId = roomData.Data.GameID
        this.initGameList()
        this.setGameItemCheck()
        this.initRoomList()
    }

    initRoomList(){
        this.roomData = GameDataModel.GetGameInfoByID(this.curGameId)
        this.sortRoomList()

        this.roomListRoot.removeAllChildren()
        for (let i = 0; i < this.roomData.Data.GameRoomList.length; i++) {
            let list = this.roomData.Data.GameRoomList[i]
            let roomItem = instantiate(this.roomItem)
            roomItem.setParent(this.roomListRoot)

            let itemJs = roomItem.getComponent(HallSelectRoomItem)
            itemJs.setData(list,this.checkLimit.bind(this),i)
            this.roomItems.push(itemJs)
        }
    }

    sortRoomList(){
        if(this.roomData.Data.GameRoomList.length == 1){
            return
        }

        let canEnter = 0
        for(let i = 0;i<this.roomData.Data.GameRoomList.length;i++){
            if(this.checkLimit(this.roomData.Data.GameRoomList[i],true)){
                canEnter++
            }
        }
        if(canEnter == this.roomData.Data.GameRoomList.length ){ //都可以进
            this.roomData.Data.GameRoomList.sort((a: any, b: any) => { //从小到大
                return parseInt(a.BaseScore) - parseInt(b.BaseScore)
            })
            let tempRoomList = this.roomData.Data.GameRoomList.pop()
            this.roomData.Data.GameRoomList.unshift(tempRoomList)
        }else{ 
            this.roomData.Data.GameRoomList.sort((a: any, b: any) => {
                let enterFlagA = this.checkLimit(a,true)?1:0
                let enterFlagB = this.checkLimit(b,true)?1:0
                if(enterFlagA == enterFlagB && enterFlagA == 0){ //不能进
                    return parseInt(a.BaseScore) - parseInt(b.BaseScore)
                }else if(enterFlagA == enterFlagB && enterFlagA == 1){
                    return parseInt(b.BaseScore) - parseInt(a.BaseScore)
                }else{
                    return enterFlagB - enterFlagA
                }
            })
        }
    }

    refreshItem(){
        this.roomData = GameDataModel.GetGameInfoByID(this.curGameId)
        this.sortRoomList()
        for (let i = 0; i < this.roomData.Data.GameRoomList.length; i++) {
            let list = this.roomData.Data.GameRoomList[i]
            this.roomItems[i].setData(list,this.checkLimit.bind(this),i)
        }

        // for (let i = 0; i < this.roomItems.length; i++) {
        //     this.roomItems[i].refreshTipNode(this.checkLimit.bind(this))
        // }
    }


    checkLimit(roomInfo,isCheck = false){
        let user = UserDataModel.GetCurrentUser()
        let cash = user.UserData.CashAmount
        if (roomInfo.LoginMoneyMax != 0 && cash > roomInfo.LoginMoneyMax) {
            if(isCheck){
                return false
            }
            let str = LanguageManager.instance.getLangByID("yuechaochuxianzhi")
            let LoginMoneyMax = UserDataModel.ConvertCash(roomInfo.LoginMoneyMax)
            let LoginMoneyMaxStr = Utility.instance.numThousandsFormat(LoginMoneyMax.toString())
            let room = this.getJoinRoom(cash as number)
            let roomStr = ""
            if (room) {
                roomStr = this.getRoomLimitStr(room)
            }
            let tips = Utility.instance.format(str, LoginMoneyMaxStr, roomStr)
            let leftStr = LanguageManager.instance.getLangByID("fou")
            let rightStr = LanguageManager.instance.getLangByID("shi")
            ModuleManager.instance.showDialog_BackToLifeConfirm("", tips, leftStr, rightStr, () => {
                if (room) {
                    this.onRoomClick(this.roomData, room.Flag)
                }
            }, null)
        } else if (roomInfo.LoginMoney > cash ) {
            if(isCheck){
                return false
            }
            let str = LanguageManager.instance.getLangByID("yuebuzuqingchongzhi1")
            let LoginMoney = UserDataModel.ConvertCash(roomInfo.LoginMoney)
            let LoginMoneyStr = Utility.instance.numThousandsFormat(LoginMoney.toString())
            let tips = Utility.instance.format(str, LoginMoneyStr)
            ModuleManager.instance.showDialog_Confirm(tips, () => {
                ModuleManager.instance.showModule(CommonName.MODULE.RechargeNew)
            })
        } else {
            if(isCheck){
                return true
            }
            this.onRoomClick(this.roomData, roomInfo.Flag)
        }
    }

    private onRoomClick(gameInfo: any, flag: string) {
        console.log("onRoomClick", gameInfo, flag)
        let cpInfo = GameDataModel.GetCPInfoByGameID(gameInfo.Data.GameID)
        this.requestGameServerInfo(cpInfo.CpID, gameInfo.Data.GameID, gameInfo.Data.GameCode, flag)
    }

    private requestGameServerInfo(cpID: number, gameID: number, gameCode: string, flag: string = "1") {
        let cpInfo = GameDataModel.GetCPInfoByCPID(cpID)
        let vip = UserDataModel.GetCurrentUser().vip
        if (cpInfo.VipLimit && vip < cpInfo.VipLimit) {
            let str = LanguageManager.instance.getLangByID("vip_limit")
            str = Utility.instance.format(str, "" + cpInfo.VipLimit)
            let leftStr = LanguageManager.instance.getLangByID("common_prompt_cancal")
            let rightStr = LanguageManager.instance.getLangByID("goto_upgrade")
            ModuleManager.instance.showDialog_BackToLifeConfirm("", str, leftStr, rightStr, () => {
                this.onRechargeClick()
            }, null)
            return
        }
        this.showNetPrompt(true)
        let lianyunID = UserDataModel.GetCurrentUser().UserData.LianyunID
        let data = {
            ServerFlag: flag,
            CpID: cpID,
            GameID: gameID,
            GameCode: gameCode,
            LianyunID: lianyunID,
            IsLianyun: false
        }
        console.log("请求游戏服务器信息", cpID, gameID, flag)
        LoginServer.requestGameServerAddr(data)
    }

    getJoinRoom(cash){
        for (const room of this.roomData.Data.GameRoomList) {
            if (cash >= room.LoginMoney && (room.LoginMoneyMax == 0 || cash <= room.LoginMoneyMax)) {
                return room
            }
        }
        return ""
    }

    getRoomLimitStr(room){
        let LoginMoney = UserDataModel.ConvertCash(room.LoginMoney)
        let LoginMoneyStr = Utility.instance.numThousandsFormat(LoginMoney.toString())

        let LoginMoneyMaxStr = "+"
        if (room.LoginMoneyMax != 0) {
            let LoginMoneyMax = UserDataModel.ConvertCash(room.LoginMoneyMax)
            LoginMoneyMaxStr = "-" + Utility.instance.numThousandsFormat(LoginMoneyMax.toString())
        }
        return LoginMoneyStr + LoginMoneyMaxStr
    }

    showNetPrompt(show: boolean) {
        if (show) {
            let failCallBack = ()=>{
                ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("chaoshitixing"))
            }
            ModuleManager.instance.showModule("NetPrompt",{failCallBack : failCallBack.bind(this)})//ModuleManager.instance.toast(msg)
        } else {
            ModuleManager.instance.hideModule("NetPrompt")
        }
    }
    

    private setUserInfo(inInit = false){
        let user = UserDataModel.GetCurrentUser()
        if (!user || !user.UserData) {
            return
        }
       
        let cash = Utility.instance.numThousandsFormat(UserDataModel.GetCashAmount().toString())
        this.goldNum.string = cash
        if(!inInit){
            this.refreshItem()
        }
    }

    hide() {
        this.node.destroy()
    }

    private onRetiradaClick(){
        ModuleManager.instance.showModule(CommonName.MODULE.Withdraw)
    }

    private onRechargeClick(){
        ModuleManager.instance.showModule(CommonName.MODULE.RechargeNew)
        if (UserDataModel.GetFirstRechargeSwitch() && !UserDataModel.GetFirstRechargeCompleted()) {
            this.scheduleOnce(() => ModuleManager.instance.showModule(CommonName.MODULE.FirstRecharge), 0.1)
        } else if (UserDataModel.switchConfig.WeeklyCardStatus == 1 || UserDataModel.switchConfig.WeeklyCardStatus == 0) {
            this.scheduleOnce(() => ModuleManager.instance.showModule(CommonName.MODULE.WeeklyCard), 0.1)
        }
    }

    private onGameClick(info: any) {
       // this.listeners && this.listeners.GameClick(info)
    }

    onDestroy(){
        this.registerEvent(false)
        let hall = ModuleManager.instance.getModule(CommonName.MODULE.Hall);
        hall.showCategoryInfoByID(1,true);    //刷新大厅游戏列表
    }

}