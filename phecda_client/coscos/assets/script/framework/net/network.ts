
import { _decorator, Component, Node, TiledUserNodeData, TERRAIN_HEIGHT_BASE } from 'cc';
import { ByteArray, Endian } from '../../../plugin/ByteArray';
import { NetworkManager } from './networkManager';
import { net_adapter as NetAdapter } from './net_adapter';
import { NetClient } from './net_client';
import HeartBeat from './net_heartbeat';
import EventManager from "../../../script/manager/event_manager"
const { ccclass, property } = _decorator;

interface NetMsg {
    net: network;
    mainMsgId: number;
    subMsgId: number;
    data?: any;
}
@ccclass('network')
export class network {
    /**
     * 连接成功
     *@param retry 是否是断线连接成功
     */
    public Connected: (retry: boolean) => {}
    /**
     * 断开连接
     * @param maxRetry 是否是最后一次断开连接
     */
    public Disconnected: (maxRetry: boolean) => {}

    //重连时间  retry 表示第几次重连
    public ReConnected: (retry: number) => {}
    //心跳tick
    public HeartBeatEvent: () => {};

    public OnDestroy: () => {}

    private _heartBeat: HeartBeat;
    private _adapter: NetAdapter;
    private _netClient: NetClient;
    private _events: Array<NetMsg> = []

    private name: string
    private url: string
    //当前重连次数
    private curRetryTimes: number = 0;
    //重连最大次数
    private maxRetryTimes: number = 0;
    //重连间隔
    private retryInterval: number = 1000;
    private _block: boolean;
    private retryTimeout: NodeJS.Timeout;
    private fireDisconnect:boolean = false;
    //发送心跳时间
    private _sendHeartBeatTime:number=0;  
    //接收心跳返回时间
    private _receiveHeartBeatTime:number=0;

    //是否阻塞
    public set Block(value: boolean) {
       
    }

    public init(name: string, url: string, netAdapter: NetAdapter) {
       
    }
    //设置重连配置
    public setRetryCfg(maxRetry: number, interval: number = 1 * 1000) {
      
    }

    public connect() {
      
    }

    public get isConnected() {
        return 0
    }

    public retry() {
       
    }

    //启动心跳
    public startHeartBeat(interval: number, timeOut: number, sendHeartBeatEvent) {
       
    }

    public onRecvHeartBeat() {
        
    }

    //心跳超时处理
    private heartTimeOut(heartbeat: HeartBeat) {
       
    }

    //socket连接状态变更
    public onConnectStateChange(state: string) {
       
    }

    private handleConnected() {
       
    }

    private handleDisconnected() {
       
    }

    private writeMessage(mainMsgId: number, subMsgId: number, buffer?: any) {
      
    }
    //接受消息
    public onReceiveMsg(buffer: ArrayBuffer) {
      
    }

    //发送消息
    public sendMsg(mainMsgId: number, subMsgId: number, data?: any) {
      
    }

    //断开连接
    public disconnect(activeDisconnect: boolean = false) {
      
    }
    //添加消息
    private addEvent(net: network, mainMsgId: number, subMsgId: number, data: any) {
       
    }

    private update() {
     
    }

    public destory() {
     
    }
}
