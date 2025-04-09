import { _decorator } from 'cc';
import { network } from './network';
const { ccclass } = _decorator;
/**
 *  0        CONNECTING         连接尚未建立
    1        OPEN               WebSocket的链接已经建立
    2        CLOSING            连接正在关闭
    3        CLOSED             连接已经关闭或不可用
 */
@ccclass('NetClient')
class NetClient {
    private webSocket: WebSocket;
    private _network: network;

    public connect(url, network: network) {
      
        return true
    }

    public onopen(event) {
       
    }

    public onclose(event) {
      
      
    }

    public onerror(event: any) {
       
    }

    public get connected() {
        return this.webSocket && this.webSocket.readyState == WebSocket.OPEN;
    }

    //activeClose:是否是主动断开连接
    public disconnect(activeClose: boolean = false) {      
       
    }

    private onMessage(receiveBuffer: MessageEvent) {
        

    }

    public send(data: ArrayBuffer) {
       
    }
}
export { NetClient }