import { TurnTable } from './../module/turntable/turntable';

import { macro, _decorator } from 'cc';
import { GameConfig } from '../../../../script/com/game_config';
import { GameResConfig } from '../../../../script/hall/GameResConfig';
import EventManager from '../../../../script/manager/event_manager';
import LoaclStorage from '../../../../script/manager/local_storage';
import TimeManager from '../../../../script/manager/time_manager';
import proto from '../../proto/hall_proto.js';
import CommonName from './CommonName';
const { ccclass, property } = _decorator;

@ccclass('UserDataModel')

export class UserInfo {
    /** UserLoginRet Code */
    Code: number;

    /** UserLoginRet Message */
    Message: string;

    /** UserLoginRet UserID */
    UserID?: (number | null);

    /** UserLoginRet Cer */
    Cer?: (string | null);

    /** UserLoginRet HDCode */
    HDCode?: (string | null);

    /** UserLoginRet HDType */
    HDType?: (number | null);
}

export class UserLoginInfo {
    uid: number;                  //ID
    nickname: string;             //昵称
    sex: number;                  //性别   0为男性，1为女性
    avatar_url: string;           //头像
    phone: string;                //手机号
    show_id: string;              //显示ID
    is_new_user: boolean;         //是否为新用户
    token: string;                //token
    is_white: boolean;            //白名单
    coin:number;                  //金币
    vip:number;                   //vip等级
    history_deposit:number;       //累计充值金额
    adhar_card: string;           //ad卡
    pan_card: string;             //pan卡
    full_name: string;            //全名
    email: string;                //邮箱
    login_type:number             //登录类型(0游客 1登录)
    agent_id: number              //代理id  
    password: string;             //密码(不是真实密码)
}

export interface StorageUserInfo {
    UserID: number,
    Cer: string,
    Phone: string,
}

//活动状态
export enum ActivityState {
    Normal = 0, //正常
    RecieveEnabled = 1, //可领取
    Recieved = 2,   //已领取
    Disabled = 3, //不可用
}

export enum RedPointType {
    None = 0,
    Mail = 1,           //邮件
    FirstRecharge = 2,  //首充
    WeeklyCard = 3,     //周卡
    Promotion = 4,      //推广
    VIP = 5,            //VIP
    RechargeParty = 6,  //充值&下注狂欢
    BetReturns = 7,     //下注返利
    TurnTable = 8,//大转盘
}

export class _UserDataModel {
    private currentUser: UserLoginInfo = null

    private readonly cashRate: number = 100

    private autoPopupFlagMap: Map<string, boolean> = new Map<string, boolean>()

    public getAutoPopupFlag(key: string) {
        const userID = this.GetCurrentUserID() || 0
        return this.autoPopupFlagMap.get(userID + key) || false
    }

    public setAutoPopupFlag(key: string, value: boolean = true) {
        const userID = this.GetCurrentUserID() || 0
        this.autoPopupFlagMap.set(userID + key, value)
    }

    public getAutoPopupFlagSize() {
        return this.autoPopupFlagMap.size || 0
    }

    private _inGuide = false//是否在引导中
    private _rewardNum = 0

    public get isGuest(): boolean {
        // return this.currentUser ? !this.currentUser.UserData.IsBindGuest : false
        return false;
    }

    private storageUserList: StorageUserInfo[] = []

    private _switchConfig: any = {}
    public get switchConfig() {
        return this._switchConfig
    }

    public get rewardNum() {
        return this._rewardNum
    }

    public set inGuide(value) {
        this._inGuide = value
    }

    public get inGuide() {
        return this._inGuide
    }

    private _isNewUser: boolean
    public set isNewUser(v: boolean) { this._isNewUser = v }
    public get isNewUser() { return this._isNewUser }

    public get registerReward() {
        // if (this.currentUser) {
        //     let num = parseInt(this.currentUser.UserData.ConvertRateTipMsg)
        //     if (!isNaN(num)) {
        //         return this.ConvertCash(num)
        //     }
        // }
        return 0
    }

    private _firstRechargeMaxReward: string = "1500"
    public get firstRechargeMaxReward(): string {
        return this._firstRechargeMaxReward
    }
    public set firstRechargeMaxReward(v: string) {
        this._firstRechargeMaxReward = v
    }

    public liushuiRate: number = 10

    private readPointArray = []//保存当前游戏红点状态

    public addReadPointByType(type: number) {
        if (this.readPointArray.indexOf(type) == -1) {
            this.readPointArray.push(type)
        }
        EventManager.instance.dispatch(CommonName.EVENT.RedPoint_Event, type, true)
    }

    public hasReadPointByType(type: number) {
        return this.readPointArray.indexOf(type) >= 0
    }

    public removeReadPointByType(type: number) {
        let index = this.readPointArray.indexOf(type)
        if (index >= 0) {
            this.readPointArray.splice(index, 1)
        }
        EventManager.instance.dispatch(CommonName.EVENT.RedPoint_Event, type, false)
    }

    private setRedPoint(type: number, show: boolean) {
        if (show) {
            this.addReadPointByType(type)
        } else {
            this.removeReadPointByType(type)
        }
    }

    public clear() {
        this._switchConfig = {}
        this.ClearFirstRechargeSchedule()
        this.currentUser = null
        this.readPointArray = []
        LoaclStorage.removeStorage("UserID")
        LoaclStorage.removeStorage("Cer")
        LoaclStorage.removeStorage("LevelKey")
        LoaclStorage.removeStorage("UserLevel")
        LoaclStorage.removeStorage("HDCode")
    }

    public SetLocalUserInfo(user: UserLoginInfo) {
        this._inGuide = false
        this._isNewUser = this._inGuide
        LoaclStorage.setNumber("UserID", user.uid)
        LoaclStorage.setString("Cer", user.token)
        LoaclStorage.setString("HDCode", user.phone)
    }

    public GetCurrentUser(): UserLoginInfo {
        return this.currentUser
    }

    public SetCurrentUser(user: UserLoginInfo,localFlag=true) {
        this.currentUser = user
        if(localFlag){
            this.SetLocalUserInfo(user)
        }
        
        // this.SetStorageUser()
        // this.RefreshSwitchConfig()
        // this.InitFirstRechargeSchedule()
    }

    public RefreshUserData(userData: proto.netproto.IUserHallLogonData) {
        if (this.currentUser) {
            let weeklyCardRewardFlag = this.switchConfig.WeeklyCardStatus != 1
            let firstRechargeRewardFlag = this.switchConfig.FirstRecharge != 1
            let rechargePartyRewardFlag = this.switchConfig.RBCarnival != 1
            let betReturnsFlag = this.switchConfig.BetRebate != 1
            // this.currentUser.UserData = userData
            this.SetStorageUser()
            this.RefreshSwitchConfig()
            if (this.GetFirstRechargeCompleted()) {
                this.ClearFirstRechargeSchedule()
                EventManager.instance.dispatch(CommonName.EVENT.FirstRechargeLimitTime, null)
            }

            EventManager.instance.dispatch(CommonName.EVENT.WeeklyCardReward, weeklyCardRewardFlag && this.switchConfig.WeeklyCardStatus == ActivityState.RecieveEnabled)
            let redPoint = firstRechargeRewardFlag && this.GetFirstRechargeState() == ActivityState.RecieveEnabled
            EventManager.instance.dispatch(CommonName.EVENT.FirstRechargeRedPoint, redPoint)
            this.setRedPoint(RedPointType.WeeklyCard, this.switchConfig.WeeklyCardStatus == ActivityState.RecieveEnabled)
            this.setRedPoint(RedPointType.FirstRecharge, this.GetFirstRechargeState() == ActivityState.RecieveEnabled)
            this.setRedPoint(RedPointType.Promotion, this.switchConfig.ProReward == ActivityState.RecieveEnabled)
            this.setRedPoint(RedPointType.VIP, this.switchConfig.VipReward == ActivityState.RecieveEnabled)
            this.setRedPoint(RedPointType.RechargeParty, this.switchConfig.RBCarnival == ActivityState.RecieveEnabled)
            // this.setRedPoint(RedPointType.TurnTable, this.switchConfig.TurnTable == ActivityState.RecieveEnabled)
            EventManager.instance.dispatch(CommonName.EVENT.RechargePartyReward, rechargePartyRewardFlag && this.switchConfig.RBCarnival == ActivityState.RecieveEnabled)
            this.setRedPoint(RedPointType.BetReturns, this.switchConfig.BetRebate == ActivityState.RecieveEnabled)
            EventManager.instance.dispatch(CommonName.EVENT.BetReturns, betReturnsFlag && this.switchConfig.BetRebate == ActivityState.RecieveEnabled)
        }
    }

    public GetCurrentUserID(): number {
        return this.currentUser && this.currentUser.uid
    }

    public GetCurrentUserCer(): string {
        return this.currentUser && this.currentUser.token
    }

    public GetLocalUserInfo(): UserLoginInfo {
        let userInfo = new UserLoginInfo();
        userInfo.token = LoaclStorage.getString("Cer", "")
        userInfo.uid = LoaclStorage.getNumber("UserID", 0)
        if (userInfo.token == "" || userInfo.uid == 0) {
            return null
        }
        return userInfo;
    }

    public getCashRate(): number {
        return this.cashRate
    }

    public SetCashAmount(amount: number) {
        if (this.currentUser) { this.currentUser.coin = amount }
        EventManager.instance.dispatch(CommonName.EVENT.Update_USER_COIN)
    }

    public GetCashAmount(): number {
        return this.currentUser ? this.currentUser.coin as number / this.cashRate : 0
    }

    public GetBankAmount(): number {
        // return this.currentUser ? this.currentUser.UserData.BankAmount as number / this.cashRate : 0
        return 0;
    }

    public GetWithdrawAmount(): number {
        // return this.currentUser ? this.currentUser.UserData.XiuXianAmount as number / this.cashRate : 0
        return 0;
    }

    public GetCoinAmount(): number {
        // return this.currentUser ? this.currentUser.UserData.XiuXianTotalCharge as number / this.cashRate : 0
        return 0;
    }

    public ConvertCash(cash: number): number {
        return cash / this.cashRate
    }

    public GetStorageUserList(): StorageUserInfo[] {
        // let str = LoaclStorage.getString("StorageUserListKey", "")
        // if (str != "") {
        //     this.storageUserList = JSON.parse(str)
        // } else {
        //     this.storageUserList = []
        // }
        // return this.storageUserList
        return [];
    }

    public DeleteStorageUser(userID: number): StorageUserInfo[] {
        // let idx = this.storageUserList.findIndex((user) => user.UserID == userID)
        // if (idx >= 0) {
        //     this.storageUserList.splice(idx, 1)
        // }
        // LoaclStorage.setString("StorageUserListKey", JSON.stringify(this.storageUserList))
        // return this.storageUserList
        return [];
    }

    private SetStorageUser() {
        // if (!this.currentUser) { return }

        // let userID = this.currentUser.uid
        // let cer = this.currentUser.token
        // let phone = "" + userID
        // // if (this.currentUser.UserData.IsBindGuest) {
        // //     phone = this.currentUser.UserData.LoginName.replace("+55-", "")
        // // }

        // this.GetStorageUserList()
        // let idx = this.storageUserList.findIndex((user) => user.UserID == userID)
        // if (idx >= 0) {
        //     this.storageUserList.splice(idx, 1)
        // }
        // this.storageUserList.splice(0, 0, { UserID: userID, Cer: cer, Phone: phone })
        // LoaclStorage.setString("StorageUserListKey", JSON.stringify(this.storageUserList))
    }

    public GetFirstRechargeCompleted() {
        return this.GetFirstRechargeState() != ActivityState.Normal
    }

    public GetFirstRechargeSwitch() {
        return GameConfig.FirstRechargeOpen && parseInt(this.switchConfig?.FirstRechargeSwitch) == 1
    }

    public GetFirstRechargeState() {
        if (!GameConfig.FirstRechargeOpen || GameConfig.FirstRechargeOpen && parseInt(this.switchConfig?.FirstRechargeSwitch) == 0) {
            return ActivityState.Disabled
        }
        return this.switchConfig.FirstRecharge
    }

    private firstRechargeScheduleID: number
    private currentFirstRechargeLimitTime: number = 0
    private InitFirstRechargeSchedule() {
        if (this.GetFirstRechargeCompleted()) {
            this.ClearFirstRechargeSchedule()
            return
        }

        this.ClearFirstRechargeSchedule()
        let date = new Date(Date.now())
        let h = 23 - date.getHours()
        let m = 59 - date.getMinutes()
        let s = 60 - date.getSeconds()
        this.currentFirstRechargeLimitTime = h * 60 * 60 + m * 60 + s
        this.firstRechargeScheduleID = TimeManager.instance.doSchedule(() => {
            this.currentFirstRechargeLimitTime--
            EventManager.instance.dispatch(CommonName.EVENT.FirstRechargeLimitTime, this.currentFirstRechargeLimitTime)
            if (this.currentFirstRechargeLimitTime <= 0) {
                this.ClearFirstRechargeSchedule()
                this.InitFirstRechargeSchedule()
            }
        }, 1, macro.REPEAT_FOREVER)
    }

    private ClearFirstRechargeSchedule() {
        if (this.firstRechargeScheduleID) {
            TimeManager.instance.cancelSchedule(this.firstRechargeScheduleID)
            this.firstRechargeScheduleID = null
        }
    }

    public GetLoginRewardOpen() {
        // return (GameConfig.isDirectConnectIp || GameResConfig.serverListData?.is_login_reward == 1) && this.currentUser?.UserData?.IsBindBankCard
        return false;
    }

    private RefreshSwitchConfig() {
        // if (this.currentUser?.UserData?.BankName) {
        //     this._switchConfig = JSON.parse(this.currentUser.UserData.BankName)
        //     console.log("配置数据", this._switchConfig)
        // } else {
        //     this._switchConfig = {}
        // }
    }

    public SetRecieveFirstRechargeRewardDate() {
        if (!this.currentUser) { return }
        let key = this.currentUser.uid + "_FirstRechargeReward"
        LoaclStorage.setNumber(key, new Date(Date.now()).getDate())
    }

    public GetRecieveFirstRechargeRewardDate() {
        if (!this.currentUser) { return }
        let key = this.currentUser.uid + "_FirstRechargeReward"
        return LoaclStorage.getNumber(key, 0)
    }

    public SetRecieveLoginRewardDate() {
        if (!this.currentUser) { return }
        let key = this.currentUser.uid + "_LoginReward"
        LoaclStorage.setNumber(key, new Date(Date.now()).getDate())
    }

    public GetRecieveLoginRewardDate() {
        if (!this.currentUser) { return }
        let key = this.currentUser.uid + "_LoginReward"
        return LoaclStorage.getNumber(key, 0)
    }

    public clearToken() {
        LoaclStorage.removeStorage("Cer");
    }
}

export const UserDataModel = new _UserDataModel()