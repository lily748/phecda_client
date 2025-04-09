
import { _decorator } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
const { ccclass, property } = _decorator;

import NetPromptView from "./netprompt_view";

@ccclass('NetPrompt')
export default class NetPrompt extends Module<NetPromptView, null> {
    scheduleCallback: Function
    constructor() {
        super();
        this.bundleName = "resources";
        this.layer = ViewLayer.High;
        this.windowPrefabResPath = "prefabs/public_netprompt";
        this.viewType = NetPromptView;
    }
    onShow(intentData) {
        if (this.scheduleCallback != null) {
            this.unschedule(this.scheduleCallback);
            this.scheduleCallback = null;
        }
        if (intentData && intentData.autoClose) {
            return
        }

        let self = this
        this.scheduleCallback = function () { 
            if(intentData && intentData.failCallBack){
                intentData.failCallBack()
            }
            self.hide() 
        }
        this.scheduleOnce(this.scheduleCallback, 15)
        this.unschedule(this.laterShow)
        this.view.mainNode.active = true
        if (intentData && intentData.showImmediately) {
            this.view.mainNode.active = true
        } else {
            if (!this.view.mainNode.active) {
                this.view.mainNode.active = false
                this.scheduleOnce(this.laterShow, 0.4)
            }
        }
        this.view.reconnectNode.active = (intentData && intentData.reconnect) ? true : false
    }
    private laterShow() {
        this.view.mainNode.active = true
    }
    onHide() {
        this.view.mainNode.active = false
        super.onHide()
    }
    onDisable() {
        this.view.mainNode.active = false
        this.unscheduleAllCallbacks()
    }
    onDestroy() {
        this.unscheduleAllCallbacks()
    }
}