
import { director, _decorator } from 'cc';
import ModuleManager from '../framework/core/module_manager';
import { NetworkManager } from '../framework/net/networkManager';
import proto from '../../packages/hall/proto/hall_proto.js';
import ResourceManager from '../manager/resoure_manager';
import AudioManager from '../manager/audio_manager';
import { UserDataModel } from '../../packages/hall/script/model/UserDataModel';
import { GameMap } from '../com/game_map';
import { LoginServer } from './login_serve';
import LanguageManager from '../manager/language/language_manager';
import { Env } from '../game/Env';
import { GameConfig } from '../com/game_config';
import { GameDataModel } from '../../packages/hall/script/model/GameDataModel';
import CommonName from '../../packages/hall/script/model/CommonName';
import Utility from '../utility/utility';

export enum LoginRoomRet {
    Login_Room_Success = 1,
}

export class _GameServer {
    private curGameUrl: string
    private _roomInfo
    get RoomInfo(): any {
        return this._roomInfo;
    }
    private leaveRoomCallback = null

    constructor() {
        this.init();
    }

    init() {
        NetworkManager.RegisterMsgListener<proto.netproto.LoginGameRoomRet>(proto.netproto.MessageBClassID.GameRoom, proto.netproto.GameRoomClassID.LoginRoomRetID, this.responLoginRoom.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.HeartBeatConfig>(proto.netproto.MessageBClassID.Common, proto.netproto.PlatformCommonClassID.HeartBeatReturnID, this.responHeartBeat.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.HeartBeatConfig>(proto.netproto.MessageBClassID.Common, proto.netproto.PlatformCommonClassID.HeartBeatConfigID, this.responHeartBeatCfg.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.RetMessage>(proto.netproto.MessageBClassID.GameRoom, proto.netproto.GameRoomClassID.UserForceLeaveRoomID, this.responeForceLeaveRoom.bind(this), this)
    }

    public connectServer(url) {
        let urls = url
        if (url && url != "") {
            this.curGameUrl = url
        } else if (this.curGameUrl) {
            urls = this.curGameUrl
        }
        ModuleManager.instance.showModule("NetPrompt")
        var network = NetworkManager.CreateConnect("game", urls);
        if (network) {
            network.Connected = this.onConnectStateEvent.bind(this)
            network.Disconnected = this.onDisconnected.bind(this)
            network.setRetryCfg(15);
            network.connect();
        }
    }

    private onDisconnected(retry: boolean) {
        ModuleManager.instance.showModule(CommonName.MODULE.NetPrompt, { reconnect: true })
        if (retry) {
            ModuleManager.instance.hideNetPrompt()
            ModuleManager.instance.toastLong(LanguageManager.instance.getErrorMsgByID(CommonName.ErrorCode.NetError))
            this.forceLeave()
        }
    }

    public block(stop: boolean) {
        NetworkManager.SetBlock("game", stop)
    }

    public disconnect(activeDisconnect?: boolean) {
        NetworkManager.Disconnect("game", activeDisconnect)
        // if (activeDisconnect) {
        //     NetworkManager.Game.disconnect(activeDisconnect)
        // } else {
        //     if (NetworkManager.Game.isConnected) {
        //         NetworkManager.Game.disconnect(activeDisconnect)
        //     }
        // }
    }

    protected onConnectStateEvent(reconnetTime) {
        console.log("游戏服连接成功！")
        LoginServer.sendLocalIP(false)
        this.requestHeartBeatCfg();
        this.sendLoginRoomMsg();
    }

    private sendLoginRoomMsg() {
        let user = UserDataModel.GetCurrentUser()
        if (!user || !user.uid || !user.token) {
            this.forceLeave()
            ModuleManager.instance.showModule(CommonName.MODULE.Login, null, () => {
                ModuleManager.instance.destroyAllModule(CommonName.MODULE.Login)
            })
            ModuleManager.instance.showDialog_Confirm(LanguageManager.instance.getErrorMsgByID(CommonName.ErrorCode.NetError), null)
            return
        }
        let data: proto.netproto.ILoginGameRoomInfo = {
            UserID: user.uid,
            Cer: user.token,
            HDCode: Env.HDCode,
            HDType: Env.HDType,
            IsSitByNum: 0,
            TableID: 0,
            ChairID: 0,
            ServerID: GameConfig.GameServerID
        }
        console.log("请求加入房间：", data)
        NetworkManager.SendRoomMsg(proto.netproto.MessageBClassID.GameRoom, proto.netproto.GameRoomClassID.LoginRoomID, data)
    }

    private async handlerEnterGame(data) {
        this.block(true)
        // AudioManager.instance.hideAudio(true)
        let bundleName = GameMap.getGameDataByID(data.RoomInfo.GameID).bundleName
        console.log("load Asset Bundle " + bundleName)
        await ResourceManager.loadAssetsBundle(bundleName)
        console.log("load language " + bundleName)
        await LanguageManager.instance.preLanguage(LanguageManager.instance.current, bundleName)
        console.time("加载场景")
        console.log(`========================开始加载场景${bundleName}=======================`)
        ResourceManager.loadScene(bundleName, "game", (err, scene) => {
            director.runScene(scene, () => {
                ModuleManager.instance.hideModule("NetPrompt")
                ModuleManager.instance.hideAllModule(CommonName.MODULE.ScreenShot)
            }, () => {
                GameConfig.runningGameID = data.RoomInfo.GameID
                // this.block(false)
                // AudioManager.instance.hideAudio(false)
                console.log(`------------scene launch ${bundleName}---------------`)
                console.timeEnd("加载场景")
            })
        })
    }

    private responLoginRoom(data: proto.netproto.LoginGameRoomRet) {
        console.log("加入房间返回：", data)
        if (data.Code == 0) {
            console.log("进入房间成功", data.RoomInfo?.CpID, data.RoomInfo?.GameID)
            GameDataModel.SetCurRoomInfo(data.RoomInfo)
            this._roomInfo = data;
            this.handlerEnterGame(data)
        }
        else {
            let errMsg = LanguageManager.instance.getErrorMsgByID(data.Code)
            ModuleManager.instance.hideNetPrompt()
            NetworkManager.DestroyConnection("game")
            if (data.Code == 38) {
                //您有未完成的游戏, 是否继续?
                ModuleManager.instance.showDialog_CancelConfirm(errMsg, () => {
                    let lianyunID = UserDataModel.GetCurrentUser().uid
                    let gameInfo = GameDataModel.GetGameInfoByID(data.RoomInfo.GameID)
                    let temp = {
                        ServerFlag: data.RoomInfo.Flag,
                        CpID: data.RoomInfo.CpID,
                        GameID: data.RoomInfo.GameID,
                        GameCode: gameInfo.Data.GameCode,
                        LianyunID: lianyunID,
                        IsLianyun: false,
                        ServerID: data.RoomInfo.ServerID
                    }
                    console.log("请求", temp)
                    LoginServer.requestGameServerAddr(temp)
                })
            } else if (data.Code == 8) {
                //账户余额不足
                if (UserDataModel.GetFirstRechargeSwitch() && !UserDataModel.GetFirstRechargeCompleted()) {
                    ModuleManager.instance.showModule(CommonName.MODULE.FirstRecharge)
                } else {
                    Utility.instance.showMoneyNotEnough()
                }
            } else if (data.Code == 41) {
                //vip才能进入
                let str = Utility.instance.format(errMsg, data.Message)
                let leftStr = LanguageManager.instance.getLangByID("common_prompt_cancal")
                let rightStr = LanguageManager.instance.getLangByID("goto_upgrade")
                ModuleManager.instance.showDialog_BackToLifeConfirm("", str, leftStr, rightStr, () => {
                    ModuleManager.instance.showModule(CommonName.MODULE.RechargeNew)
                }, null)
            } else if (data.Code == 10000) {
                //特殊情况直接弹Message
                ModuleManager.instance.showDialog_Confirm(data.Message, null)
            } else {
                ModuleManager.instance.showDialog_Confirm(errMsg, null)
            }
        }
    }

    public sendLeaveRoomMsg(callback?) {
        NetworkManager.SendRoomMsg(proto.netproto.MessageBClassID.GameRoom, proto.netproto.GameRoomClassID.UserForceLeaveRoomID, null)
        this.leaveRoomCallback = callback
        this.forceLeave()
    }

    public sendPlayAgainMsg() {
        NetworkManager.Game.sendMsg(proto.netproto.MessageBClassID.GameRoom, proto.netproto.GameRoomClassID.UserQueueID, null)
    }

    private responeForceLeaveRoom(data: proto.netproto.RetMessage) {
        // if (data.Code == 0) {
        //     if (this.leaveRoomCallback) {
        //         this.leaveRoomCallback()
        //         this.leaveRoomCallback = null
        //     }
        //     this.forceLeave()
        // } else {
        //     ModuleManager.instance.toastLong(LanguageManager.instance.getErrorMsgByID(data.Code))
        // }
    }

    //发送心跳
    public requestHeartBeat() {
        NetworkManager.SendRoomMsg(proto.netproto.MessageBClassID.Common, proto.netproto.PlatformCommonClassID.HeartBeatID)
    }

    //请求心跳配置数据
    public requestHeartBeatCfg() {
        NetworkManager.SendRoomMsg(proto.netproto.MessageBClassID.Common, proto.netproto.PlatformCommonClassID.RequestHeartBeatConfigID)
    }

    //应答心跳配置数据
    public responHeartBeatCfg(msg: proto.netproto.HeartBeatConfig) {
        if (NetworkManager.Game) {
            console.log("游戏服心跳配置数据，开始游戏服心跳", msg)
            NetworkManager.Game.startHeartBeat(msg.BeatInterval, msg.ConnLoseTimeSpan, this.requestHeartBeat)
        }
    }

    //心跳应答
    public responHeartBeat() {
        if (NetworkManager.Game && NetworkManager.Game.HeartBeatEvent) {
            console.log("游戏服收到心跳")
            NetworkManager.Game.onRecvHeartBeat();
        }
    }

    public forceLeave(releaseAllRes = true, isKick: boolean = false) {
        if (GameConfig.runningGameID == 0) {
            return;
        }
        // AudioManager.instance.hideAudio(true)
        // AudioManager.instance.hideAudio(false)
        NetworkManager.DestroyConnection("game")
        this.curGameUrl = null
        ModuleManager.instance.showModule("Hall", { PlayBgm: true, IsKick: isKick }, () => {
            this.showFirstRecharge(GameConfig.runningGameID)
            director.loadScene("main", () => {
                AudioManager.instance.playEffect(CommonName.PUBLIC_SOUNDURL.ButtonClick, "resources", false, 0)
                let bundleName = GameMap.getGameDataByID(GameConfig.runningGameID).bundleName
                LanguageManager.instance.releaseGameAssets(bundleName)
                ResourceManager.releaseBundle(bundleName, releaseAllRes)
                AudioManager.instance.release(bundleName);
                GameConfig.runningGameID = 0
            })
        })
    }

    public forceDestroyGameScene() {
        if (GameConfig.runningGameID == 0) {
            return;
        }
        // AudioManager.instance.hideAudio(true)
        // AudioManager.instance.hideAudio(false)
        NetworkManager.DestroyConnection("game")
        this.curGameUrl = null
        director.loadScene("main", () => {
            AudioManager.instance.playEffect(CommonName.PUBLIC_SOUNDURL.ButtonClick, "resources", false, 0)
            let bundleName = GameMap.getGameDataByID(GameConfig.runningGameID).bundleName
            LanguageManager.instance.releaseGameAssets(bundleName)
            ResourceManager.releaseBundle(bundleName, true)
            GameConfig.runningGameID = 0
        })
    }

    private showFirstRecharge(gameID: number) {
        let LHJ = [10000010, 10000011, 10000012, 10000019, 10000020]
        let isLHJ = () => {
            return LHJ.includes(gameID)
        }
        if (UserDataModel.GetFirstRechargeSwitch() && !UserDataModel.GetFirstRechargeCompleted() && isLHJ()) {
            ModuleManager.instance.showModule(CommonName.MODULE.FirstRecharge)
        }
    }
}
export const GameServer = new _GameServer();
