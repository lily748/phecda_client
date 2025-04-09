
import { _decorator, Node, game, instantiate, Prefab, sys, js,Game } from 'cc';
import { AdjustModel } from '../../packages/hall/script/model/AdjustModel';
import CommonName from '../../packages/hall/script/model/CommonName';
import { GameConfig } from '../com/game_config';
import ModuleManager from '../framework/core/module_manager';
import { HotUpdateManager } from '../framework/hotUpdate/HotUpdateManager';
import { GameSDKInterface } from '../game/GameSDKInterface';
import AudioManager from '../manager/audio_manager';
import EventManager from '../manager/event_manager';
import LanguageManager from '../manager/language/language_manager';
import ResourceManager from '../manager/resoure_manager';
import { LoginServer } from '../net/login_serve';
import { GameResConfig } from './GameResConfig';
import { HallMsgRegister } from './HallMsgRegister';
import { conmmon_http } from '../net/common_http';
import { HallModel } from '../../packages/hall/script/model/HallModel';
import Utility from '../utility/utility';
import { DEBUG } from 'cc/env';
const { ccclass, property } = _decorator;
const DEFAULT_LANGUAGE: string = "en"
//游戏启动脚本
@ccclass('Launch')
export class Launch {
    private static _instance: Launch;
    public static get Instance(): Launch {
        if (!this._instance) {
            this._instance = new Launch();
            this._instance.init();
        }
        return this._instance;
    }
    //游戏初始化接口
    private init() {
        game.frameRate = 30
        HotUpdateManager.CheckMainVersion();
        this.RegisterLogHandle();
        this.RegisterManager();
        this.initGameConfig();
      
        // let evt = { "event_name": "mobile_purchase", "orderId": "order_123456", "currency": "BRL", "revenue": 1.23 }
        // GameSDKInterface.FireBaseLogEvent(JSON.stringify(evt))
        // AdjustModel.Instance.TrackEvent("app_open")

        if (sys.isBrowser) {
            window.addEventListener('message', (e) => { EventManager.instance.dispatch("WindowMessage", e) })
        }
        this.registerEvent(true)
    }

    private registerEvent(reg: boolean = true) {
        let fun = reg ? "on" : "off"
        EventManager.instance[fun](Game.EVENT_HIDE, this.onApplicationHide.bind(this), this)
        EventManager.instance[fun](Game.EVENT_SHOW, this.onApplicationShow.bind(this), this)
    }

    private onApplicationHide() {
    }

    private onApplicationShow(leaveTime = 0) {
        if (leaveTime > 1800 * 1000) {
            conmmon_http.reqTokenLogin(this, conmmon_http.rspTokenLogin.bind(this));
        }
    }

    private initGameConfig() {
        ResourceManager.loadRes("prefabs/GameConfig", Prefab, (err, prefab: Prefab) => {
            let gameRoot: Node = instantiate(prefab)
            game.addPersistRootNode(gameRoot)
            this.initGameRoot();
        })
    }

    private initGameRoot() {
        ResourceManager.loadRes("prefabs/GameRoot", Prefab, (err, prefab: Prefab) => {
            let gameRoot: Node = instantiate(prefab)
            game.addPersistRootNode(gameRoot)
            ModuleManager.instance.showModule("Loading", { tips: "Loading language packs...", progressPercentage: 1 })
            let lan = DEFAULT_LANGUAGE//LoaclStorage.getString(LanguageEvent.STORAGE_KEY, DEFAULT_LANGUAGE)
            LanguageManager.instance.setLanguage(lan, "resources", () => {
                this.launch();
            })
        })
    }

    private RegisterManager() {
        HallMsgRegister()
    }

    private RegisterLogHandle() {
        window["onErrorHandle"] = function (message?: any, ...optionalParams: any[]) {
            GameSDKInterface.CrashReport("Error Handler", JSON.stringify(optionalParams))
        }
        window["__errorHandler"] = function (...optionalParams: any[]) {
            GameSDKInterface.CrashReport("Error Exception", JSON.stringify(optionalParams))
        }
        this.handlerLog()
    }

    handlerLog() {
        if (!sys.isNative)
            return;
        const log = console.log.bind(console);
        console.log = function (message?: any, ...optionalParams: any[]) {
            let content = GameConfig.gameServerType + ":" + js.js.formatStr.apply(null, [message].concat(optionalParams))
            // log(content)
            if (content) {
                GameSDKInterface.LogReport(content);
            }
        }.bind(this)
        const error = console.error.bind(console)
        console.error = function (message?: any, ...optionalParams: any[]) {
            let content = GameConfig.gameServerType + ":" + js.js.formatStr.apply(null, [message].concat(optionalParams))
            // error(content)
            if (content) {
                GameSDKInterface.CrashReport("Error Log", content)
            }
        }
    }

    //游戏启动接口
    launch() {
        console.log("=========================Game Start==============================")
        GameResConfig.getInfo();
    }
}
