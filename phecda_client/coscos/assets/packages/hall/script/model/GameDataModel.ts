
import { _decorator } from 'cc';
import proto from '../../proto/hall_proto.js';
import EventManager from '../../../../script/manager/event_manager';
import LoaclStorage from '../../../../script/manager/local_storage';
import CommonName from './CommonName';
const { ccclass, property } = _decorator;

export enum GameCategory {
    Hot = 1,    //热门
    SlotMachine = 2,    //老虎机
    Fishing = 3,    //捕鱼
    // Sports = 4,    //体育
    // Video = 5,    //视讯
    Poker = 4,    //扑克
}

@ccclass('GameDataModel')
export class _GameDataModel {

    private allGameInfo: proto.netproto.GameListNtf = null

    private categoryList: []
    private gameList: []
    private cpList: []
    private likeList: Array<number>

    private selfGameIdList = []

    private _initDataTime: number
    
    private _curRoomInfo
    public get curRoomInfo() { return this._curRoomInfo}
    public get initDataTime(): number { return this._initDataTime }

    public SetAllGameInfo(info: proto.netproto.GameListNtf) {
        this.allGameInfo = info
        this.categoryList = []
        this.gameList = []
        this.selfGameIdList = []
        this.cpList = []
        this.likeList = []
        let localeLikeList = LoaclStorage.getString("GameLikeList", null)
        if (localeLikeList) {
            localeLikeList.split(",").forEach(id => this.likeList.push(parseInt(id)));
        }
        info.CategoryList.forEach(element => {
            this.categoryList[element.CategoryID + ""] = element
        })
        info.GameList.forEach(element => {
            let data = element
            data.IconUrl = data.IconUrl.trim().startsWith("http") ? data.IconUrl : info.IconUrlHead + element.IconUrl
            this.gameList[element.GameID + ""] = { Data: data, Like: this.likeList.includes(element.GameID) }
            if(data.GameID > 10000000 && data.GameID < 20000000){
                this.selfGameIdList.push(data.GameID)
            }            
        })
        info.CpList.forEach(element => {
            this.cpList[element.CpID + ""] = element
            this.cpList[element.CpID + ""].IconUrl = info.IconUrlHead + element.IconUrl
        })
        this._initDataTime = Date.now()
    }

    public SetCurRoomInfo(data){
        this._curRoomInfo = data
    }

    public GetAllGameInfo(): proto.netproto.GameListNtf {
        return this.allGameInfo
    }

    public GetSelfGameId(){
        return this.selfGameIdList
    }

    public GetCategoryInfoByID(id: GameCategory): proto.netproto.ICategoryInfo {
        if (id == GameCategory.Hot) {
            if (this.categoryList) {
                let old = this.categoryList[id + ""]
                let info = new proto.netproto.CategoryInfo()
                info.CategoryID = old.CategoryID
                info.CategoryName = old.CategoryName
                info.DisplayType = old.DisplayType
                let list = old.DisplayIDList.filter((element) => {
                    return !this.likeList.includes(element.ID)
                })
                let newList = []
                this.likeList.forEach(id => {
                    if (this.GetGameInfoByID(id)) {
                        newList.push({ ID: id, SubID: [] })
                    }
                })
                info.DisplayIDList = newList.concat(list)
                return info
            }
        }
        return this.categoryList && this.categoryList[id + ""]
    }

    public GetGameInfoByID(id: number): { Data: proto.netproto.IGameInfo, Like: boolean } {
        return this.gameList && this.gameList["" + id]
    }

    public SetGameLike(id: number, like: boolean) {
        this.gameList && (this.gameList["" + id].Like = like)
        let index = this.likeList.indexOf(id)
        if (like && index < 0) {
            this.likeList.splice(0, 0, id)
        } else if (!like && index >= 0) {
            this.likeList.splice(index, 1)
        }
    }

    public SaveGameLikeList() {
        LoaclStorage.setString("GameLikeList", this.likeList.toString())
    }

    public GetCPInfoByCPID(id: number): proto.netproto.ICpInfo {
        return this.cpList && this.cpList["" + id]
    }

    public GetCPInfoByGameID(id: number): proto.netproto.ICpInfo {
        const cpID = Math.floor(id / 10000)
        return this.cpList && this.cpList[cpID + ""]
    }

    public SetGameUpdateState(id: number, state: boolean) {
        this.gameList && (this.gameList[id + ""].Update = state)
    }
}
export const GameDataModel = new _GameDataModel();
