
import { _decorator, Component, Node, v2, sys } from 'cc';
import { Env } from '../game/Env';
import { GameSDKInterface } from '../game/GameSDKInterface';
import { Uti } from '../utility/Uti';
const { ccclass } = _decorator;
//初始化数据配置转移到 ScriptGameConfig
@ccclass('GameConfig')
export class _GameConfig {
    //登录服IP Prot
    public loginServerIP: string = ""
    public loginServerPort: string = "";
    public gameServerType: string = "";
    public netServerType: number = 0;
    public showLogPanel: boolean = false;
    public defaultPackageName: string = "com.casino.brl";
    //游戏服IP Prot
    public GameServerIP = ""
    public GameServerPort = 0
    //服务ID
    public GameServerID=0
    //后台服务器地址
    public ResServerAddr: string = ""
    //转发服地址
    ServerListDomain = ""
    CommonSign = "7a93e0d5769d83428c9d02a5769d049a"
    //客服地址
    CustomerUrl = ""
    ServiceData: any[] = []
    FacebookGroupLink: string = ""
    //资源URL地址
    public resConfigUrl=""
    //代理ID
    public agentID = 0
    //下载地址
    DownloadUrl = ""
    reportAF: boolean = true
    // 是否上报设备信息
    IsReportDeviceInfo: boolean = false;

    private _runningGameID: number = 0
    public get runningGameID(): number { return this._runningGameID }
    public set runningGameID(v: number) { this._runningGameID = v }

    //是否直连
    public _isDirectConnectIp: boolean = true;
    get isDirectConnectIp(): boolean {
        if (Env.IsAndroid || Env.IsIOS)
            return false;
        return this._isDirectConnectIp
    }

    set isDirectConnectIp(value: boolean) {
        this._isDirectConnectIp = value;
    }

    apiLogMode = true//http日志
    isIphoneX = true//用于刘海屏偏离显示
    iphonexOffset = 60
    designResolution = v2(750, 1334)

    //获取Bundle
    get packageName() {
        if (sys.isNative) {
            return GameSDKInterface.GetPackageName()
        }
        return this.defaultPackageName;
    }
    //完整的渠道ID
    GameChannelID: number = 200000002;

    deviceCode = "";
    appsFlyer_AD = "";
    allowSimulation = false;

    get GameSiteID() {
        if(sys.isNative){
            let commentInfo = GameSDKInterface.getCommentInfo();
            if (commentInfo["channelId"]!=null&&commentInfo["channelId"]!="") return Number(commentInfo["channelId"]);
            return Number(GameSDKInterface.GetChannelName());
        } else {
            if (GameConfig.netServerType != 4) {
                const url = new URL(window.location.href);
                const params = new URLSearchParams(url.search);
                if (params.get("channelId")!=null) return Number(params.get("channelId"));
            }
        }
        return this.GameChannelID;
    }

    // getRunGameIPArr() {
    //     return this.GameServerIP + ":" + this.GameServerPort
    // }

    private _firstRechargeOpen: boolean = true;
    public get FirstRechargeOpen(): boolean {
        return this._firstRechargeOpen;
    }
    public set FirstRechargeOpen(v: boolean) {
        this._firstRechargeOpen = v;
    }

}
export const GameConfig = new _GameConfig();


