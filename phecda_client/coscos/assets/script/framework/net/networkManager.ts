
import { _decorator, Component, Node, director, game } from 'cc';
import { network } from './network';
import { net_adapter } from './net_adapter';
const { ccclass, property } = _decorator;

@ccclass('NetworkManager')
export class _NetworkManager {
    private Connections: { [key: string]: network } = {}
    private _adapter: net_adapter = new net_adapter();

    public get Hall() { return this.GetNetwork("hall") }
    public get Game() { return this.GetNetwork("game") }
    public CreateConnect(name: string, url: string): network {
        
        return null
    }

    public RegisterMsgListener<T>(mainMsgId: number, subMsgId: number, callback: (msg: T) => void, target?, add: boolean = true) {
       
    }

    public RegisterMessage(mainMsgId: number, subMsgId: number, type?: any, add: boolean = true) {
      
    }

    public SetBlock(name: string, value: boolean) {
       
    }

    public SendMsgByName(name: string, mainMsgId: number, subMsgId: number, data?: any) {
       
    }

    public SendRoomMsg(mainMsgId: number, subMsgId: number, data?: any) {
       
    }

    public SendHallMSg(mainMsgId: number, subMsgId: number, data?: any) {
      
    }

    private GetNetwork(socket: string) {
       
    }

    public Disconnect(socket: string, active: boolean) {
       
    }

    public DestroyAllConnection() {
       
    }

    public DestroyConnection(name: string) {
       
    }
}

export const NetworkManager = new _NetworkManager();
