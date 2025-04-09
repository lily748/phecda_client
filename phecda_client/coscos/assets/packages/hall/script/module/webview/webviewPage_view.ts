import { _decorator, WebView, sys, EventHandler,view,Node,v3, } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import HttpUtil from '../../../../../script/framework/net/http_util';
import { Env } from '../../../../../script/game/Env';
import { GameSDKInterface } from '../../../../../script/game/GameSDKInterface';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import proto from '../../../proto/hall_proto.js';
import CommonName from '../../model/CommonName';
import Utility from '../../../../../script/utility/utility';
import { conmmon_http } from '../../../../../script/net/common_http';
import { HallModel,EventTrack } from '../../model/HallModel';
const { ccclass, property } = _decorator;


@ccclass('WebviewPageView')
export default class WebviewPageView extends ViewBase {
    @property(WebView)
    webview: WebView

    private data: any
    @property(Node)
    btnBack: Node
    @property(Node)
    btnAddCash: Node
    private startTime: number

    onWebviewEvent(_webview: WebView, eventType: string, _customEventData: any) {
        console.log("onWebviewEvent----->: " + eventType);
        switch (eventType) {
            case WebView.EventType.NONE:
                break;
            case WebView.EventType.LOADING:
                break;
            case WebView.EventType.LOADED:
                let data = {
                    isNative: !sys.isBrowser,
                    url: this.data.game_launch_url
                }
                this.webview.node.active = true;
                this.onRigsterEventListener();
                this.SendMsg(data);
                break;
            case WebView.EventType.ERROR:
                this.onCloseWebView()
                break;
        }
    }
    start() {
        let width =    view.getVisibleSize().width
        let height =  view.getVisibleSize().height
        console.log("VisibleSize.width", width)
        console.log("VisibleSize.height", height)
        let canvasscale = (height -100)/width
        // if(ModuleManager.instance.isNeedShowTopDownload()) //顶部有下载导航栏
        // {
        //     canvasscale = (height -100 - 60)/width //100是顶部导航栏 , 60是下载引导栏
        // }
        console.log("canvasscale", canvasscale)
        if (sys.isBrowser) {
            let scalex = 1
            if(canvasscale < 1.778)
            {
                console.log("canvasscale < 1.778")
                scalex = 1.778/canvasscale
            }
            console.log("scalex",scalex)
            this.webview.node.scale = v3(scalex, 1, 1)
        }
    }

    onLoad() {
        const eventHandler: EventHandler = new EventHandler();
        eventHandler.target = this.node; // 这个对象是你的事件处理代码组件所属的节点
        eventHandler.component = "WebviewPageView";
        eventHandler.handler = "onWebviewEvent";
        this.webview.webviewEvents.push(eventHandler);
        EventManager.instance.on("WindowMessage", this.ReceiveMsg.bind(this), this)
        Utility.instance.onButtonClick(this.btnBack, this.onCloseWebView, this)
        Utility.instance.onButtonClick(this.btnAddCash, this.onAddCash, this)
        EventManager.instance.on(CommonName.EVENT.CloseRecharge, this.showWebView, this)
        this.startTime = Math.floor(new Date().getTime() / 1000);
        HallModel.isWebViewOpen = true;
    }

    onRigsterEventListener() {
        if (!sys.isBrowser) {
            //原生
            var scheme = "webviewmessage";
            var jsCallback = () => { this.ReceiveMsg({ data: "close" }) }
            this.webview.setJavascriptInterfaceScheme(scheme);
            this.webview.setOnJSCallback(jsCallback);
        }
    }

    private SendMsg(msg: any) {
        console.log("SendMsgToWebview", msg)
        // ModuleManager.instance.hideNetPrompt()
        ModuleManager.instance.destroyModule(CommonName.MODULE.Dialog)
        ModuleManager.instance.destroyModule(CommonName.MODULE.Recharge)
        if (sys.isBrowser) {
            this.webview.nativeWebView.contentWindow.postMessage(msg, "*")
        }
        else if (sys.isNative) {
            this.webview.evaluateJS(`addMessage(${JSON.stringify(msg)})`)
        }
    }

    private ReceiveMsg(msg) {
        switch (msg.data) {
            case "close":
                this.onCloseWebView();
                break;
        }
    }

    showWebView(){
        this.webview.node.active = true
    }

    private onAddCash() {
        ModuleManager.instance.hideNetPrompt()
        this.webview.node.active = false
        ModuleManager.instance.showModule(CommonName.MODULE.Recharge)
    }

    private onCloseWebView() {
        ModuleManager.instance.hideNetPrompt()
        this.webview.node.active = false
        ModuleManager.instance.showDialog_CancelConfirm("Are you sure you want to exit?", this._clickConfirm.bind(this), this.__clickCancel.bind(this))
    }

    private _clickConfirm() {
        conmmon_http.reqGetUserInfo(this, conmmon_http.rspUserInfo.bind(this))
        this.showNetPrompt(false)
        ModuleManager.instance.destroyModule(CommonName.MODULE.WebviewPage)
    }

    private __clickCancel() {
        this.webview.node.active = true
    }

    onShow(data: any) {
        this.data = data
        this.showNetPrompt(false)

        AudioManager.instance.onPauseMusic(true)
        GameSDKInterface.SetAutoOrientation(true)

        // if (sys.isBrowser) {
        //     this.webview.url = data.WebViewUrl
        // } else {
        //     this.webview.url = this.getNativeUrl();
        // }
        this.webview.url=data.game_launch_url
        console.log("open webView url:",this.webview.url);
        this.webview.node.active = true
        // this.webview.node.active = false
    }

    getNativeUrl() {
      
    }

    onDestroy() {
        GameSDKInterface.SetAutoOrientation(false)
        AudioManager.instance.onPauseMusic(false)
        EventManager.instance.dispatch(CommonName.EVENT.Back_To_Home)
        EventManager.instance.off("WindowMessage", this.ReceiveMsg, this)
        EventManager.instance.off(CommonName.EVENT.CloseRecharge, this.showWebView, this)
        // conmmon_http.reqNewUserWaterReward(this, conmmon_http.rspNewUserWaterReward.bind(this));
        let endTime = Math.floor(new Date().getTime() / 1000);
        let num = endTime - this.startTime;
        if (num < 5) {
            let event_value = {
                vendor_id_str: HallModel.vendorID,
                game_id: HallModel.gameID,
            }
            conmmon_http.reqReportEventTracking(this, EventTrack.game_back, JSON.stringify(event_value), conmmon_http.rspReportEventTracking.bind(this));
        }
        HallModel.isWebViewOpen = false;
    }
}