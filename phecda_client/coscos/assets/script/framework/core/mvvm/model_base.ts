import { sys, _decorator } from 'cc';
const { ccclass } = _decorator;

import { NetClient } from "../../net/net_client";
import Module from "./module_base";

@ccclass('ModelBase')
export default class ModelBase {

    module: Module<any, any>
    netClient: NetClient

    //数据长度(4字节) mainId(4字节) | secondId(4字节) | protoData真正的数据
    private bufferType1(msgDataMap, dataBuffer) {
        if (!dataBuffer) {
            var requestBuffer = new ArrayBuffer(12)
            let dv = new DataView(requestBuffer)
            dv.setInt32(0, 8, false)
            dv.setInt32(4, msgDataMap[4], false)
            dv.setInt32(8, msgDataMap[0], false)
            return requestBuffer
        } else {
            var requestBuffer = new ArrayBuffer(12 + dataBuffer.length)
            let dv = new DataView(requestBuffer)
            dv.setInt32(0, dataBuffer.length + 8, false)
            dv.setInt32(4, msgDataMap[4], false)
            dv.setInt32(8, msgDataMap[0], false)
            let uint8Array = new Uint8Array(requestBuffer, 12, dataBuffer.length)
            uint8Array.set(dataBuffer);
            return requestBuffer
        }
    }

    sendMsg(msgDataMap, data) {
        let dataBuffer: Uint8Array = null
        if (data) {
            dataBuffer = msgDataMap[1].encode(data).finish();
        }
        let requestBuffer: ArrayBuffer = this.bufferType1(msgDataMap, dataBuffer)
        this.netClient.send(requestBuffer)
    }
}