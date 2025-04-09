
import { _decorator, Component, Node,sys } from 'cc';
const { ccclass, property } = _decorator;


export class MsgHandleCallBack {
    target: any
    callback: Function
}

//处理网络的消息协议解析跟消息事件
export class net_adapter {

    private msgQueue: Map<string, any> = new Map();
    private msgRegisterHandler: Map<string, MsgHandleCallBack[]> = new Map();
    private block: boolean;
    //
    public HandleMsg(mainMsgId: number, subMsgId: number, buffer: ArrayBuffer) {
      
    }

    public encodeMsg(mainMsgId: number, subMsgId: number, msg: any) {
      
    }

    //注册消息解析结构
    public RegisterMessage(mainMsgId: number, subMsgId: number, type: any, add: boolean = true) {
       
    }

    //注册消息监听
    public RegisterMsgListener<T>(mainMsgId: number, subMsgId: number, callback: (msg: T) => void, target?, add: boolean = true) {
       
    }
    //获得msgId
    private getMsgId(mainMsgId: number, subMsgId: number) {
        return mainMsgId + "." + subMsgId;
    }
    private getMsgType(mainMsgId: number, subMsgId: number) {
       
        return null
    }
    //消息派发
    private dispatchMessage(mainMsgId: number, subMsgId: number, msg: any) {
       
    }

    //协议解析
    private decodeMsg(mainMsgId: number, subMsgId: number, buffer: ArrayBuffer) {
       
    }
}
