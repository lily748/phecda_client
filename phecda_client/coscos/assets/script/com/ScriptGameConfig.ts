
import { _decorator, Component, Node, Enum } from 'cc';
import { GameConfig } from './game_config';
const { ccclass, property, executionOrder } = _decorator;

export enum ServerType {
    "联调服" = 0,
    "开发服" = 1,
    "测试服" = 2,
    "预发布服" = 3,
    "正式服" = 4,
}

@ccclass('ScriptGameConfig')
@executionOrder(-1)
export class ScriptGameConfig extends Component {
    @property({ group: { name: '游戏设置' }, displayName: "IP", tooltip: "登录服端口" })
    public loginServerIP: string = "ws://192.168.3.224"
    @property({ group: { name: '游戏设置' }, displayName: "端口", tooltip: "登录服端口" })
    public loginServerPort: string = "10021";
    @property({ group: { name: '游戏设置' }, displayName: "直连模式", tooltip: "是否直连服务器" })
    public isDirectConnectIp: boolean = false;
    @property({ group: { name: '游戏设置' }, displayName: "服务器配置", tooltip: "后台服务器地址", type: Enum(ServerType) })
    public set sType(value: ServerType) {
        this._sType = value;
    }
    public get sType(): ServerType {
        return this._sType
    }
    @property({ serializable: true })
    private _sType: ServerType = ServerType.测试服;

    @property({ group: { name: '游戏设置' }, displayName: "RES服务器", tooltip: "后台服务器地址", readonly: true })
    public get ResServerAddr(): string {
        switch (this._sType) {
            case ServerType.联调服:
                return "http://172.31.27.99:8081"
            case ServerType.开发服:
                  return "http://172.31.12.179:8182"           
            case ServerType.测试服:
                return "http://13.235.19.182:8081" 
            case ServerType.预发布服:
                return ""
            case ServerType.正式服:
                // return "https://game.4p.game"
                return "http://13.235.19.182:8081"
        }
    }
    //转发服地址
    @property({ group: { name: '游戏设置' }, displayName: "转发服", tooltip: "转发服地址" })
    ServerListDomain = "http://13.235.19.182:802/api"

    @property({ group: { name: '日志设置' }, displayName: "日志", tooltip: "是否显示日志输出" })
    public showLogPanel: boolean = false;
    @property({ group: { name: '资源设置' }, displayName: "版本更新", tooltip: "是否检测版本更新" })
    public shouldCheckVersion: boolean = false;

    onLoad() {
        GameConfig.ResServerAddr = this.ResServerAddr;
        GameConfig.showLogPanel = this.showLogPanel;
        GameConfig.loginServerIP = this.loginServerIP;
        GameConfig.loginServerPort = this.loginServerPort;
        GameConfig.isDirectConnectIp = this.isDirectConnectIp;
        GameConfig.ServerListDomain = this.ServerListDomain;
        GameConfig.GameServerIP = this.loginServerIP
        // GameConfig.shouldCheckVersion = this.shouldCheckVersion;
        GameConfig.gameServerType = ServerType[this.sType];
        GameConfig.netServerType = this.sType;
    }
}
