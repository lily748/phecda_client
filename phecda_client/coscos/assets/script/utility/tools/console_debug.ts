
import { _decorator, Component, Node, Button, ScrollView, Pool, Label, instantiate, game, js, JsonAsset, Prefab, RichText, WebView, Toggle, sys } from 'cc';
import { timeUrls } from '../../hall/UrlConfig';
import ResourceManager from '../../manager/resoure_manager';
import Utility from '../utility';
const { ccclass, property } = _decorator;

let ccLog = console.log.bind(console);
let ccWarn = ccLog;
let ccError = ccLog;
export enum LogType {
    All,
    Log,
    Warn,
    Error,
}

class LogVo {
    type: LogType;
    // msg: string;
    // optionalParams: any[];
    content: string;
    display: string;
    constructor(type: LogType, message?: string, ...optionalParams: any[]) {
        this.type = type;
        this.content = js.js.formatStr.apply(null, [message].concat(optionalParams))
        this.display = this.getDisplayString()
    }
    toString() {
        return this.content
    }

    getDisplayString() {
        if (this.display) {
            return this.display;
        }
        switch (this.type) {
            case LogType.Log:
                return `<color=#ffffffff>${this.toString()}</color>`
            case LogType.Warn:
                return `<color=#FCF760ff>${this.toString()}</color>`
            case LogType.Error:
                return `<color=#ff0000ff>${this.toString()}</color>`
        }
    }
}

@ccclass('ConsoleDebug')
export class ConsoleDebug {
    private static _instance: ConsoleDebug
    public static get Instance() {
        if (!this._instance)
            this._instance = new ConsoleDebug();
        return this._instance
    }
    node: Node;
    btn_show: Button;
    lab_show: Label;
    btn_copy: Button;
    btn_lock: Button;
    lab_lock: Label;
    node_plane: Node
    node_content: Node
    lab_item: RichText
    scrollView: ScrollView
    node_container: Node
    btn_drop: Button;
    lab_logType: Label;

    private m_IsLock: boolean = false
    private m_logList: LogVo[] = []
    private m_logString: string = ""
    private m_lastSelectLogType = -1;
    private readonly LOGLENGTH: number = 300;

    constructor() {
        // this.appendToLogList(LogType.Log,"test %s %d","holle",1)
        // this.appendToLogList(LogType.Log,"class ",this)
        console.log = ((message?: any, ...optionalParams: any[]) => {
            this.appendToLogList(LogType.Log, message, ...optionalParams)
            ccLog(message, ...optionalParams)
        })

        console.warn = ((message?: any, ...optionalParams: any[]) => {
            this.appendToLogList(LogType.Warn, message, ...optionalParams)
        })

        console.error = ((message?: any, ...optionalParams: any[]) => {
            this.appendToLogList(LogType.Error, message, ...optionalParams)
        })

        window.onerror = ((message?: any, ...optionalParams: any[]) => {
            ccLog("--------------->window.onerror ")
            this.appendToLogList(LogType.Error, message, ...optionalParams)
        })
        window["onErrorHandle"] = ((message?: any, ...optionalParams: any[]) => {
            ccLog("--------------->window.onErrorHandle ")
            this.appendToLogList(LogType.Error, message, ...optionalParams)
        })
        window["__errorHandler"] = (message?: any, ...optionalParams: any[]) => {
            ccLog("--------------->window.__errorHandler ")
            this.appendToLogList(LogType.Error, message, ...optionalParams)
        }
    }

    private refreshPlane() {
        if (this.node) {
            this.lab_item.string = this.m_logString
            if (!this.m_IsLock)
                setTimeout(() => {
                    this.scrollView.scrollToBottom(0.1)
                }, 1);
        }
    }

    private appendToLogList(logType: LogType, log: string, ...optionalParams: any[]) {
        let logVo: LogVo = new LogVo(logType, log, ...optionalParams)
        if (this.m_logList.length >= this.LOGLENGTH) {
            this.m_logList.shift();
        }
        this.m_logList.push(logVo);

        if (this.node && !this.m_IsLock) {
            if (this.m_lastSelectLogType == LogType.All || this.m_lastSelectLogType == logType) {
                if (!this.m_logString || this.m_logString.trim() == "") {
                    this.m_logString = logVo.getDisplayString();
                }
                else
                    this.m_logString += `\n \n` + logVo.getDisplayString();
                this.lab_item.string = this.m_logString
                //报错强制激活
                if (logType == LogType.Error) {
                    this.node_plane.active = true;
                }
                this.refreshPlane();
            }
        }
    }

    public show() {
        if (!this.node)
            this.initView();
    }

    private initView() {
        ResourceManager.loadRes("prefabs/debug", Prefab, (err, prefab: Prefab) => {
            this.node = instantiate(prefab)
            game.addPersistRootNode(this.node)

            this.btn_show = this.node.getChildByPath("Canvas/btn_show").getComponent(Button)
            this.lab_show = this.node.getChildByPath("Canvas/btn_show/Label").getComponent(Label)
            this.btn_copy = this.node.getChildByPath("Canvas/plane/btn_copy").getComponent(Button)
            this.btn_lock = this.node.getChildByPath("Canvas/plane/btn_lock").getComponent(Button)
            this.lab_lock = this.node.getChildByPath("Canvas/plane/btn_lock/Label").getComponent(Label)
            this.node_plane = this.node.getChildByPath("Canvas/plane")
            this.node_content = this.node.getChildByPath("Canvas/plane/ScrollView/view/content")
            this.lab_item = this.node_content.getChildByName("RichText").getComponent(RichText)
            this.scrollView = this.node_plane.getChildByName("ScrollView").getComponent(ScrollView)

            this.node_container = this.node.getChildByPath("Canvas/plane/ToggleGroup")
            this.btn_drop = this.node.getChildByPath("Canvas/plane/btn_drop").getComponent(Button)
            this.lab_logType = this.btn_drop.node.getChildByName("Label").getComponent(Label)
            this.node.getChildByPath("Canvas/plane/btn_clean").on(Button.EventType.CLICK, this.onClickClean.bind(this), this)
            //this.node.getChildByPath("Canvas/plane/btn_logMenu").on(Button.EventType.CLICK, this.onClickClean.bind(this), this)

            let togs = this.node_container.getComponentsInChildren(Toggle)
            for (let i = 0; i < togs.length; i++) {
                let tog = togs[i]
                tog.node.on(Toggle.EventType.TOGGLE, (t) => {
                    if (tog.isChecked) {
                        this.showLogType(parseInt(tog.node.name))
                        this.node_container.active = false;
                    }
                }, this)
            }

            this.btn_drop.node.on(Button.EventType.CLICK, this.onClickDrop.bind(this), this)
            this.btn_show.node.on(Button.EventType.CLICK, this.onClickShow.bind(this), this)
            this.btn_copy.node.on(Button.EventType.CLICK, this.onClickCopy.bind(this), this)
            this.btn_lock.node.on(Button.EventType.CLICK, this.onClickLock.bind(this), this)
            this.showLogType(LogType.All)
        })
    }

    private onClickShow() {
        this.node_plane.active = !this.node_plane.active
        this.lab_show.string = this.node_plane.active ? "隐藏Log" : "显示Log"
        this.scrollView.scrollToBottom(0)
    }

    private onClickCopy() {
        let content
        this.m_logList.forEach((o) => {
            if (!content) {
                content = o.toString()
            }
            else
                content += (String.fromCharCode(10) + o.toString())
        })
        Utility.instance.copyTextToClipboard(content)
    }

    private onClickLock() {
        this.m_IsLock = !this.m_IsLock;
        this.lab_lock.string = this.m_IsLock ? "解锁" : "锁定"
        if (!this.m_IsLock) {
            this.m_logString = null
            this.m_logList.forEach((o) => {
                if (!this.m_logString || this.m_logString.trim() == "") {
                    this.m_logString = o.getDisplayString();
                }
                else
                    this.m_logString += `\n \n` + o.getDisplayString();
            })
            this.lab_item.string = this.m_logString
        }
    }

    private onClickClean() {
        this.m_logList = []
        this.m_logString = ""
        this.lab_item.string = ""
    }

    private onClickDrop() {
        this.node_container.active = !this.node_container.active
    }

    private showLogType(logType: LogType) {
        if (this.m_lastSelectLogType == logType)
            return;
        this.m_lastSelectLogType = logType;
        this.lab_logType.string = LogType[logType]
        let list
        if (logType == LogType.All) {
            list = this.m_logList;
        }
        else {
            list = this.m_logList.filter((o) => o.type == logType)
        }
        this.m_logString = ""
        list.forEach((o) => {
            if (!this.m_logString || this.m_logString.trim() == "") {
                this.m_logString = o.getDisplayString();
            }
            else
                this.m_logString += `\n \n` + o.getDisplayString();
        })
        this.lab_item.string = this.m_logString
        this.scrollView.scrollToBottom(0)
    }
}

