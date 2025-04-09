
import { _decorator, Component, Node } from 'cc';
import { NetClient } from './net_client';
const { ccclass, property } = _decorator;

export default class HeartBeat {
    //心跳超时的回调.
    private _timeOutEvent: (heartBeat: HeartBeat) => void;
    //心跳发送回调
    private _sendHeartBeatEvent: () => void;
    //收到心跳处理
    private onRecvHeartBeat: (msg: any) => void;
    private _interval: number;
    private _timeOut: number;

    private _keepAliveTimer: NodeJS.Timer;
    private _receiveMsgTimer: NodeJS.Timeout;

    constructor(interval: number, timeOut: number, timeOutEvent: (heartBeat: HeartBeat) => void, sendHeartBeatEvent: () => void) {
       
    }

    public onStart() {
       
    }

    public onRefresh() {
     
    }

    public onStop() {
      
    }

    private refreshHeartBeat() {
       
    }

    private refreshHeartBeatTimeOut() {
       
    }
}
