import ProtoLogin from './proto/hallMsg.js'
import CommonMsg from './proto/commonMsg.js'
import NotifyMsg from './proto/notifyMsg.js'
import GameRoomMsg from './proto/gameRoomMsg.js'

export enum BClass {
    Common = 1,
    Hall = 2,
    ServerMgm = 3,
    DBServer = 4,
    GameRoom = 5,
    Game = 10001,
    NotifyServer = 6
}

export class NetMsgHall {
    //发送命令名|发送结构体|收包命令|收包结构体|BClass
    static GuestLogin: any[] = [1, ProtoLogin.hall.GuestLogin, 2, ProtoLogin.hall.UserLoginRet, BClass.Hall]
    static UserLogin: any[] = [3, ProtoLogin.hall.UserLogin, 2, ProtoLogin.hall.UserLoginRet, BClass.Hall]
    static Ping: any[] = [2, CommonMsg.common.HeartBeatConfig, 3, CommonMsg.common.HeartBeatConfig, BClass.Common]
    static PingConfig: any[] = [4, CommonMsg.common.HeartBeatConfig, 5, CommonMsg.common.HeartBeatConfig, BClass.Common]
    static Ann_Notify: any[] = [6, null, 2, NotifyMsg.notify.AnnInfo, BClass.NotifyServer]

    static RefreshUserInfo: any[] = [1013, ProtoLogin.hall.RequestUserHallInfo, 1014, ProtoLogin.hall.UserLoginRet, BClass.Hall]
    static RefreshAllServerInfo: any[] = [7, null, 8, ProtoLogin.hall.AllGameServerInfo, BClass.Hall]
    static RequestGameServerAddrInfo = [9, ProtoLogin.hall.RequestGameServerAddrInfo, 10, ProtoLogin.hall.GameServerAddr, BClass.Hall]

    static LoginRoom = [1, GameRoomMsg.gameRoom.LoginGameRoomInfo, 2, GameRoomMsg.gameRoom.LoginGameRoomRet, BClass.GameRoom]
}