
import { Game, game, _decorator } from 'cc';
import { EventMsg } from '../manager/event_msg';
const { ccclass } = _decorator;

@ccclass('Global')
export class Global {
    private static _instance: Global;
    public static get instance(): Global {
        if (this._instance == null) {
            this._instance = new Global()
            this._instance.init()
        }
        return this._instance;
    }

    public netMsg = new EventMsg()//socket专用消息
    public netLogEnable = false//socket日志开关
    private _netNameMap = {}

    private timeScale = 1

    private init() {
        let self = this
        //@ts-ignore
        game._calculateDT = function (now: number) {
            if (!now) now = performance.now();
            this._deltaTime = now > this._startTime ? (now - this._startTime) / 1000 : 0;
            if (this._deltaTime > Game.DEBUG_DT_THRESHOLD) {
                this._deltaTime = this.frameTime / 1000;
            }
            this._startTime = now;
            return this._deltaTime * self.timeScale;
        };
    }

    public setTimeScale(value: number) {
        this.timeScale = value
    }

    public getTimeScale() {
        return this.timeScale
    }

    private getMsgModelKey(mainId, secondId) {
        return mainId + "." + secondId
    }

    onNetMsg<T>(mapData: any[], callback: (protoData: T) => void, thisArg?: any, once?: boolean) {
        let msgName = this.getMsgModelKey(mapData[4], mapData[2])
        this._netNameMap[msgName] = mapData
        this.netMsg.on(msgName, callback, thisArg, once)
    }

    emitNetMsg(mainId, secondId, messageData: any) {
        let msgName = this.getMsgModelKey(mainId, secondId)
        if (this._netNameMap[msgName]) {
            if (messageData && messageData.length == 0) {
                this.netMsg.emit(msgName, null)
            } else {
                let data = this._netNameMap[msgName][3].decode(messageData)
                if (this.netLogEnable) {
                    console.log("收到网络消息包: " + msgName + "\n" + JSON.stringify(data, null, 1))
                }
                this.netMsg.emit(msgName, data)
            }
        }
    }

    offNetMsg<T>(mapData: any[], callback: (protoData: T) => void, thisArg?: any, once?: boolean) {
        let msgName = this.getMsgModelKey(mapData[4], mapData[2])
        this.netMsg.off(msgName, callback, thisArg)
    }

    targetOffNetMsg(typeOrTarget: any): void {
        this.netMsg.targetOff(typeOrTarget)
    }

    hasNetEventListener(mainId, secondId, callback?: (...any: any[]) => void, target?: any) {
        let msgName = this.getMsgModelKey(mainId, secondId)
        return this.netMsg.hasEventListener(msgName, callback, target)
    }

}


