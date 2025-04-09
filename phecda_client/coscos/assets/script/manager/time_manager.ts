import { _decorator, Component, game, Game } from 'cc';
const { ccclass } = _decorator;

import EventManager from "./event_manager";

export default class TimeManager extends Component {

    public static readonly instance: TimeManager = new TimeManager();
    private _backGround = false
    private _serverMarkTime: number = 0//服务器初始化时间
    private _serverLocalDifTime: number = 0//服务器初始化时和本地相差时间
    private _hideTime = 0//切后台的时间
    private _showTime = 0//切到前台的时间
    private m_maxId: number = 0
    private m_callbackMap = {}

    start() {
        game.off(Game.EVENT_HIDE, this.onApplicationHide.bind(this))
        game.off(Game.EVENT_SHOW, this.onApplicationShow.bind(this))
        game.on(Game.EVENT_HIDE, this.onApplicationHide.bind(this))
        game.on(Game.EVENT_SHOW, this.onApplicationShow.bind(this))
    }

    private onApplicationHide() {
        TimeManager.instance._hideTime = Date.now()
        console.log("gameHide", TimeManager.instance._hideTime)
        TimeManager.instance._backGround = true
        EventManager.instance.dispatch("game_event_show", false)
    }

    private onApplicationShow() {
        TimeManager.instance._showTime = Date.now()
        let difTime = TimeManager.instance._showTime - TimeManager.instance._hideTime
        console.log("gameShow", TimeManager.instance._showTime, difTime)
        TimeManager.instance._backGround = false
        EventManager.instance.dispatch("game_event_show", true, difTime)
    }

    gameIsBackground() {
        return TimeManager.instance._backGround
    }

    //初始化服务器时间
    initServerTime(serverTime: number) {
        this._serverMarkTime = serverTime
        this._serverLocalDifTime = Math.floor(new Date().getTime() / 1000) - serverTime
    }

    //没有初始化得到的是本地时间
    getServerTime() {
        let nowTime = Math.floor(new Date().getTime() / 1000)
        if (this._serverMarkTime <= 0) {
            return nowTime
        }
        return nowTime - this._serverLocalDifTime
    }

    private genId() {
        return ++this.m_maxId
    }

    doSchedule(callback: Function, interval?: number, repeat?: number, delay?: number) {
        let self = this
        let id = this.genId()
        let tmpFun = function () {
            if (!repeat) {
                self.cancelSchedule(id)
            }
            callback()
        }
        this.m_callbackMap[Number(id)] = tmpFun
        this.schedule(tmpFun, interval, repeat, delay)
        return id
    }

    doScheduleOnce(callback: Function, delay: number): number {
        let self = this
        let id = this.genId()
        let tmpFun = function () {
            self.cancelSchedule(id)
            callback()
        }
        this.m_callbackMap[Number(id)] = tmpFun
        this.scheduleOnce(tmpFun, delay)
        return id
    }

    cancelSchedule(id: number) {
        let key = id.toString()
        let callback = this.m_callbackMap[key]
        if (callback) {
            this.unschedule(callback)
            this.m_callbackMap[key] = null
        }
    }

    cleanDoShedules() {
        let object = this.m_callbackMap
        let list = []
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                list.push(key)
            }
        }
        for (let i = 0; i < list.length; i++) {
            const key = list[i];
            this.cancelSchedule(Number(key))
        }
        this.m_callbackMap = {}
    }
}