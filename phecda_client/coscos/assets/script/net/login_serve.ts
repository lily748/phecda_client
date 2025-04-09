import { NetworkManager } from '../framework/net/networkManager';
import { GameConfig } from '../com/game_config';
import proto from '../../packages/hall/proto/hall_proto.js';
import ModuleManager from '../framework/core/module_manager';
import { GameDataModel } from '../../packages/hall/script/model/GameDataModel';
import { UserDataModel, RedPointType } from '../../packages/hall/script/model/UserDataModel';
import EventManager from '../manager/event_manager';
import CommonName from '../../packages/hall/script/model/CommonName';
import LanguageManager from '../manager/language/language_manager';
import { Env } from '../game/Env';
import { commonClass, hallClass, messageClass, netproto, notifyClass } from '../hall/ProtoDefine';
import { GameServer } from './game_server';
import { director, game } from 'cc';
import { HotUpdateManager } from '../framework/hotUpdate/HotUpdateManager';
import Utility from '../utility/utility';
import { GameSDKInterface } from '../game/GameSDKInterface';
import { AdjustModel } from '../../packages/hall/script/model/AdjustModel';
import { HttpDataModel, ReportTypeName } from '../../packages/hall/script/model/HttpDataModel';

export enum VerifyCodeType {
    Register = 1,   //注册
    FindLoginPwd = 2,   //找回或修改登录密码
    FindSafeBoxPwd = 3, //找回或修改保险箱密码
    // UnbindBankCard = 4, //解绑银行卡
    // BindBankCard = 5,   //绑定银行卡
    WebPageRegister = 6,    //落地页注册
    Login = 7,  //登录
    Unknown = 8,
    BindBankCard = 9,   //绑定银行卡
}

enum AttrChangeID {
    Cash = 0,   //金币变化
    Mail = 1,   //新邮件
    Recharge = 2,   //充值到账
    RechargeAmount = 3, //充值金额配置变化
    ShowWithdrawBtn = 4,    //充值显示兑换按钮
    RefreshUserData = 5,    //更新玩家信息
    RefreshGameList = 15,   //更新游戏列表
    UpgradeNotify = 444,    //升级通知
    TestReport=-1,          //测试上报
}

class _LoginServer {

    private _localIP: string
    public get localIP(): string { return this._localIP }
    public set localIP(v: string) { this._localIP = v }

    private connectedCallback: Function = null

    private isLogout = false

    constructor() {
        this.init();
    }

    private init() {
        NetworkManager.RegisterMsgListener<proto.netproto.TipMessage>(messageClass.Common, commonClass.TipMessageID, this.resTipMessage.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.UserLoginRet>(messageClass.Hall, hallClass.LoginRetID, this.responLogin.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.UserLoginRet>(messageClass.Hall, hallClass.UserLoginID, this.responUserLogin.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.HeartBeatConfig>(messageClass.Common, commonClass.HeartBeatReturnID, this.responHeartBeat.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.HeartBeatConfig>(messageClass.Common, commonClass.HeartBeatConfigID, this.responHeartBeatCfg.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.UserLoginRet>(messageClass.Hall, hallClass.UserHallInfoID, this.responRefreshUserInfo.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.GameListNtf>(messageClass.Hall, hallClass.GameListNtf, this.responGameListNtf.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.AttrChangeList>(messageClass.NotifyServer, notifyClass.AttrChangeID, this.responAttrChanged.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.AnnList>(messageClass.NotifyServer, notifyClass.AnnID, this.responMarqueenNtf.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.GameServerAddr>(messageClass.Hall, hallClass.GameServerAddrInfoID, this.responGameServerAddr.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.GameServerUrlRes>(messageClass.Hall, hallClass.GameServerUrlRes, this.responGameServerUrl.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.SendPhoneVCodeRet>(messageClass.Hall, hallClass.SendPhoneVCodeRetID, this.responVerifyCode.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.UserLanguageUpdateRes>(messageClass.Hall, hallClass.UserLanguageUpdate, this.responSetLanguage.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.VersionList>(messageClass.NotifyServer, notifyClass.VersionID, this.responVersionUpdate.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.RetMessage>(messageClass.Hall, hallClass.BindGuestAccountRetID, this.onResponBindGuest.bind(this), this)
        NetworkManager.RegisterMsgListener<proto.netproto.RetMessage>(messageClass.Hall, hallClass.FindSetPwdByPhoneRetID, this.onResponResetPwd.bind(this), this)
    }

    private sendHallMsg(msgID: number, data?: any) {
        if (NetworkManager.Hall && NetworkManager.Hall.isConnected) {
            NetworkManager.SendHallMSg(messageClass.Hall, msgID, data)
        }
        else {
            this.setConnectedCallback(() => NetworkManager.SendHallMSg(messageClass.Hall, msgID, data))
            this.connectServer()
        }
    }

    public tryGetErrorMsg(msg: any): boolean {
        if (msg.Code && msg.Code != 0) {
            if (msg.Code == CommonName.ErrorCode.MoneyNotEnough) {
                if (UserDataModel.GetFirstRechargeSwitch() && !UserDataModel.GetFirstRechargeCompleted()) {
                    ModuleManager.instance.showModule(CommonName.MODULE.FirstRecharge)
                } else {
                    Utility.instance.showMoneyNotEnough()
                }
                return true
            }
            if (msg.Code && msg.Code == 39) {
                EventManager.instance.dispatch(CommonName.EVENT.LimitRegister, msg.Code)
                return true
            }
            const errMsg = LanguageManager.instance.getErrorMsgByID(msg.Code)
            ModuleManager.instance.hideNetPrompt()
            ModuleManager.instance.toastLong(errMsg)
            return true
        }
        return false
    }

    private resTipMessage(msg: proto.netproto.TipMessage) {
        console.log("服务器消息", msg.MsgType, msg.Message)
        if (msg.MsgType == 2) {
            this.logout()
            this.showLogin()
            let errID = parseInt(msg.Message)
            let errMsg = isNaN(errID) ? msg.Message : LanguageManager.instance.getErrorMsgByID(errID)
            ModuleManager.instance.showDialog_Confirm(errMsg, null)
            GameServer.forceDestroyGameScene()
        } else if (msg.MsgType == 1) {
            let isKick = false
            if (msg.Message && msg.Message != "") {
                let errID = parseInt(msg.Message)
                let errMsg = isNaN(errID) ? msg.Message : LanguageManager.instance.getErrorMsgByID(errID)
                if (!isNaN(errID) && errID == CommonName.ErrorCode.KickWithoutMoney) {
                    isKick = true
                } else {
                    ModuleManager.instance.showDialog_Confirm(errMsg, null)
                }
            }
            GameServer.forceLeave(true, isKick)
        } else {
            if (msg.Message && msg.Message != "") {
                ModuleManager.instance.toast(msg.Message)
            }
        }
    }

    private responVersionUpdate(msg: proto.netproto.VersionList) {
        msg.Ver.forEach(ver => {
            console.log("版本更新:", ver.BunldID, ver.Ver1)
            if (!ver.LimitIP || ver.LimitIP == "" || ver.LimitIP.includes(this._localIP)) {
                HotUpdateManager.setVersion(ver)
                if (ver.BunldID == "main" && director.getScene().name == "main" && HotUpdateManager.isUpdate("main") && GameConfig.runningGameID <= 0) {
                    // Tween.stopAll()
                    // NetworkManager.DestroyConnection("hall")
                    // ModuleManager.instance.destroyAllModule()
                    // setTimeout(game.restart, 0.1 * 1000)
                    // return
                } else {
                    EventManager.instance.dispatch(CommonName.EVENT.Game_Version_Update, ver)
                }
            }
        });
    }

    public sendLocalIP(hallServer: boolean) {
        if (!this._localIP) { return }

        console.log("发送本机ip给服务器", this._localIP)
        if (hallServer) {
            NetworkManager.SendHallMSg(messageClass.Common, commonClass.IPReportID, { IPAddress: this._localIP })
        } else {
            NetworkManager.SendRoomMsg(messageClass.Common, commonClass.IPReportID, { IPAddress: this._localIP })
        }
    }

    public connectServer() {
        ModuleManager.instance.showNetPrompt()
        var url = `${GameConfig.loginServerIP}:${GameConfig.loginServerPort}`
        var network = NetworkManager.CreateConnect("hall", url);
        if (network) {
            network.Connected = this.connected.bind(this);
            network.Disconnected = this.disconnected.bind(this);
            network.setRetryCfg(15);
            network.connect();
        }
    }

    private disconnected(retry: boolean) {
        console.log("disconnected", retry)
        ModuleManager.instance.showNetPrompt({ reconnect: true })
        if (retry) {
            ModuleManager.instance.hideNetPrompt()
            console.log("连接失败了,这里要弹个框？？？？？？")
            ModuleManager.instance.showDialog_Confirm(LanguageManager.instance.getLangByID("net_back_login"), () => {
                this.connectServer();
            })
        }
    }

    public disconnect(activeDisconnect?: boolean) {
        NetworkManager.Disconnect("hall", activeDisconnect)
    }

    public connected(retry: boolean) {
        ModuleManager.instance.hideNetPrompt()
        this.sendLocalIP(true)
        this.requestHeartBeatCfg();
        if (retry) {
            console.log("重连成功!!!!!")
            ModuleManager.instance.hideNetPrompt()
        }

        if (!this.isLogout) {
            this.onEnterLogin()
        }

        if (this.connectedCallback) {
            this.connectedCallback()
            this.connectedCallback = null
        }
    }

    public requestSetLanguage(lan: string) {
        let user = UserDataModel.GetLocalUserInfo()
        if (user) {
            let data = { UserID: user.uid, Language: lan }
            this.sendHallMsg(hallClass.UserLanguageUpdate, data)
        }
    }

    private responSetLanguage(msg: proto.netproto.UserLanguageUpdateRes) {
        // console.log("设置语言", msg)
    }

    //请求心跳配置数据 OP 0 存入 1取出
    public requestBank(d) {
        let data: proto.netproto.IMoneyDeposit = {
            Amount: d.Amount,
            MoneyPassword: "888888",
            OP: d.OP
        }
        this.sendHallMsg(hallClass.DepositMoneyID, data)
    }

    //请求心跳配置数据
    public requestHeartBeatCfg() {
        NetworkManager.SendHallMSg(messageClass.Common, commonClass.RequestHeartBeatConfigID)
    }

    //发送心跳
    public requestHeartBeat() {
        NetworkManager.SendHallMSg(messageClass.Common, commonClass.HeartBeatID)
    }

    //心跳应答
    private responHeartBeat() {
        NetworkManager.Hall && NetworkManager.Hall.onRecvHeartBeat();
    }

    //应答心跳配置数据
    private responHeartBeatCfg(msg: proto.netproto.HeartBeatConfig) {
        console.log("心跳配置数据", msg)
        NetworkManager.Hall && NetworkManager.Hall.startHeartBeat(msg.BeatInterval, msg.ConnLoseTimeSpan, this.requestHeartBeat)
    }

    //进入登录
    private onEnterLogin() {
        var userData = UserDataModel.GetLocalUserInfo();
        if (userData) {
            this.requestUserLoginWithCer(userData)
        } else {
            console.log("-----------------------------------")
            this.requestGuestLogin()
            // this.showLogin()
        }
    }

    //打开登录界面
    private showLogin() {
        ModuleManager.instance.showModule(CommonName.MODULE.Login, null, () => {
            ModuleManager.instance.destroyAllModule(CommonName.MODULE.Login)
        })
    }

    private getBaseConfig() {
        return {
            HDCode: Env.HDCode,
            HDType: Env.HDType,
            SiteID: GameConfig.GameSiteID,
            Version: HotUpdateManager.getLocalVersion("main"),
            PlatformID: Env.PlatformType,
            Language: LanguageManager.instance.current,
            BunldID: GameConfig.packageName,
            Ver: AdjustModel.Instance.GetAdID()
        }
    }

    private setConnectedCallback(callback: Function) {
        if (!NetworkManager.Hall || !NetworkManager.Hall.isConnected) {
            this.connectedCallback = callback
        } else {
            this.connectedCallback = null
        }
    }

    //请求游客登录
    public requestGuestLogin() {
        HttpDataModel.Report(ReportTypeName.Login)
        ModuleManager.instance.showNetPrompt()
        var data = new proto.netproto.GuestLogin()
        data.Base = this.getBaseConfig()
        console.log("游客登录", data)
        this.sendHallMsg(hallClass.GuestLoginID, data)
    }

    //请求证书登录
    public requestUserLoginWithCer(userData) {
        HttpDataModel.Report(ReportTypeName.Login)
        ModuleManager.instance.showNetPrompt()
        let data: proto.netproto.IUserLogin = {
            Base: this.getBaseConfig(),
            UserID: userData.UserID,
            Cer: userData.Cer,
        }
        console.log("证书登录", data)
        let login = () => this.sendHallMsg(hallClass.UserLoginID, data)
        login()
    }

    //手机号密码登录
    public requestLoginWithPhoneAndPwd(phone: string, pwd: string) {
        HttpDataModel.Report(ReportTypeName.Login)
        let data: proto.netproto.IUserLogin = {
            Base: this.getBaseConfig(),
            LoginName: phone,
            Password: pwd,
        }
        console.log("手机号密码登录", data)
        let login = () => this.sendHallMsg(hallClass.UserLoginID, data)
        login()
    }

    //手机号验证码登录
    public requestLoginWithPhoneAndCode(phone: string, code: string) {
        HttpDataModel.Report(ReportTypeName.Login)
        let data: proto.netproto.IUserLogin = {
            Base: this.getBaseConfig(),
            LoginName: phone,
            VCode: code,
        }
        console.log("手机号验证码登录", data)
        let login = () => this.sendHallMsg(hallClass.UserLoginID, data)
        login()
    }

    //第三方登录
    public requestLoginByThirdParty(info: { UnionID: string, NickName: string, HeadID: string, LoginType: string }) {
        HttpDataModel.Report(ReportTypeName.Login)
        let data: proto.netproto.IThirdPartyLogin = {
            Base: this.getBaseConfig(),
            UnionID: info.UnionID,
            NickName: info.NickName,
            HeadID: info.HeadID,
            LoginType: info.LoginType
        }
        console.log("第三方登录", data)
        let login = () => this.sendHallMsg(hallClass.ThirdPartyLogin, data)
        login()
    }

    //登录应答
    private responLogin(msg: proto.netproto.UserLoginRet) {
        console.log("登录应答", msg)
        if (this.tryGetErrorMsg(msg)) {
            ModuleManager.instance.hideNetPrompt()
            this.isLogout = true
            this.showLogin()
        } else {
            this.isLogout = false
            this.gotoHall(msg)
        }
    }

    private responUserLogin(msg: proto.netproto.UserLoginRet) {
        // console.log("responUserLogin", msg)
        // if (!this.tryGetErrorMsg(msg)) {
        //     this.gotoHall(msg)
        // }
    }

    private gotoHall(msg: proto.netproto.UserLoginRet) {
        // UserDataModel.SetCurrentUser(msg)
        this.loginRedPointInit(msg)
        if (director.getScene().name != "main") {
            ModuleManager.instance.hideModule("NetPrompt")
            ModuleManager.instance.hideAllModule()
            return
        }
        let showHall = function (callback?) {
            AdjustModel.Instance.TrackEvent("login")
            ModuleManager.instance.showModule(CommonName.MODULE.Hall, msg.UserData, () => {
                if (callback) {
                    callback()
                }
                ModuleManager.instance.hideNetPrompt()
                ModuleManager.instance.hideModule(CommonName.MODULE.Loading)
                ModuleManager.instance.destroyModule(CommonName.MODULE.Login)
            })
        }
        if (UserDataModel.inGuide) {//引导中
            ModuleManager.instance.showModule(CommonName.MODULE.Guide, null, () => {
                showHall(function () {
                    let guideModule = ModuleManager.instance.getModule(CommonName.MODULE.Guide)
                    if (guideModule) {
                        guideModule.startGuide()
                    }
                })
            })
        } else {
            showHall()
        }
    }

    //请求发送验证码
    public requestSendVerifyCode(phone: string, codeType: VerifyCodeType) {
        let data = { Tel: phone, CodeType: codeType }
        console.log("发送验证码", data)
        this.sendHallMsg(hallClass.SendPhoneVCodeID, data)
    }

    private responVerifyCode(msg: proto.netproto.SendPhoneVCodeRet) {
        if (!this.tryGetErrorMsg(msg)) {
            EventManager.instance.dispatch(CommonName.EVENT.Respon_VerifyCode, msg)
        }
    }

    //请求注册账号
    public requestRegisterAccount(phone: string, code: string, pwd: string) {
        let data = {
            Base: this.getBaseConfig(),
            LoginName: phone,
            VCode: code,
            Password: pwd
        }
        console.log("手机注册", data)
        // AdjustModel.Instance.TrackEvent("register");
        this.sendHallMsg(hallClass.RegisterLogin, data)
    }

    //请求绑定账号
    public requestBindGuest(phone: string, code: string, pwd: string) {
        let data: proto.netproto.IBindGuestAccount = {
            Tel: phone,
            VCode: code,
            Password: pwd
        }
        this.sendHallMsg(hallClass.BindGuestAccountID, data)
    }

    private onResponBindGuest(msg: proto.netproto.RetMessage) {
        EventManager.instance.dispatch(CommonName.EVENT.ResponBindGuest, msg)
    }

    //请求重置密码
    public requestResetPwd(phone: string, code: string, pwd: string) {
        let data: proto.netproto.IFindSetPwdByPhone = {
            Tel: phone,
            VCode: code,
            Password: pwd
        }
        this.sendHallMsg(hallClass.FindSetPwdByPhoneID, data)
    }

    private onResponResetPwd(msg: proto.netproto.RetMessage) {
        EventManager.instance.dispatch(CommonName.EVENT.ResponResetPwd, msg)
    }

    private updateRedPoint(msg: proto.netproto.AttrChangeList) {
        for (let i = 0; i < msg.Attrs.length; i++) {
            if (msg.Attrs[i].TypeID == RedPointType.Mail) {//邮件
                UserDataModel.addReadPointByType(msg.Attrs[i].TypeID)
            }
        }
    }

    private loginRedPointInit(msg: proto.netproto.UserLoginRet) {
        let notifyFlag = msg.UserData.NotifyFlag
        if (notifyFlag && notifyFlag.length > 1) {
            if (parseInt(notifyFlag[1]) == 1) {//邮件
                UserDataModel.addReadPointByType(RedPointType.Mail)
            }
        }
    }

    //游戏登出
    public logout() {
        var msg = new proto.netproto.UserLogout()
        msg.UserID = UserDataModel.GetCurrentUserID()
        msg.Cer = UserDataModel.GetCurrentUserCer()
        NetworkManager.SendHallMSg(messageClass.Hall, hallClass.UserLogoutID, msg)
        this.isLogout = true
        NetworkManager.DestroyConnection("hall")
        UserDataModel.clear()
    }

    //请求刷新用户数据
    public requestRefreshUserInfo() {
        let data: proto.netproto.IRequestUserHallInfo = { SiteID: GameConfig.GameSiteID }
        NetworkManager.SendHallMSg(messageClass.Hall, hallClass.RequestUserHallInfoID, data)
    }

    //刷新本地用户数据
    private responRefreshUserInfo(msg: proto.netproto.UserLoginRet) {
        console.log("刷新用户数据", msg)
        UserDataModel.RefreshUserData(msg.UserData)
        EventManager.instance.dispatch(CommonName.EVENT.Respon_Refresh_UserInfo)
    }

    //游戏分类总信息
    private responGameListNtf(msg: proto.netproto.GameListNtf) {
        GameDataModel.SetAllGameInfo(msg)
        EventManager.instance.dispatch(CommonName.EVENT.Respon_GameListNtf)
    }

    private requestRefreshGameList() {
        NetworkManager.SendHallMSg(messageClass.Hall, hallClass.GameListNtf)
    }

    //属性变化
    private responAttrChanged(msg: proto.netproto.AttrChangeList) {
        console.log("属性变化：", msg)
        let refreshUserInfo = false
        let upgradeTime = ""
        for (const attr of msg.Attrs) {
            switch (attr.TypeID) {
                case AttrChangeID.UpgradeNotify:
                    upgradeTime = attr.SParam
                    break
                case AttrChangeID.Mail:
                    this.updateRedPoint(msg)
                    break;
                case AttrChangeID.RefreshGameList:
                    this.requestRefreshGameList()
                    break;
                case AttrChangeID.Recharge:
                    refreshUserInfo=true
                    GameSDKInterface.FacebookAppEvent(attr.SParam, attr.Param)
                    // GameSDKInterface.FirebaseLogEvent(attr.SParam, attr.Param)
                    this.responOrderEvent(attr.SParam, attr.TypeID)
                    ModuleManager.instance.destroyModule(CommonName.MODULE.RechargeNew)
                    break;
                case AttrChangeID.TestReport:
                    GameSDKInterface.FacebookAppEvent(attr.SParam, attr.Param)
                    break;
                default:
                    refreshUserInfo = true
                    break;
            }
        }
       
        if (upgradeTime != "") {
            let str = Utility.instance.format(LanguageManager.instance.getLangByID("upgrade_notify"), upgradeTime)
            ModuleManager.instance.showDialog_Confirm(str, () => {
                game.end()
            })
        }

        if (refreshUserInfo) {
            this.requestRefreshUserInfo()
        }
    }

    //确认订单回包
    private responOrderEvent(orderId: string, tId: number) {
        let data = new netproto.AttrFocusSuccess();
        data.UserID = UserDataModel.GetCurrentUserID();
        data.Key = orderId;
        data.TypeID = tId;
        NetworkManager.SendHallMSg(messageClass.Hall, hallClass.AttrFocusSuccessID, data)
    }

    //跑马灯通知
    private responMarqueenNtf(msg: proto.netproto.AnnList) {
        EventManager.instance.dispatch(CommonName.EVENT.Respon_Marqueen_Ntf, msg)
    }

    //请求游戏服地址
    public requestGameServerAddr(data: any) {
        // console.time("请求游戏服地址")
        NetworkManager.SendHallMSg(messageClass.Hall, hallClass.RequestGameServerAddrID, data)
    }

    //游戏服地址回包
    private responGameServerAddr(msg: proto.netproto.GameServerAddr) {
        // console.log(msg)
        EventManager.instance.dispatch(CommonName.EVENT.Respon_GameServer_Addr, msg)
    }

    //请求第三方游戏Url
    public requestGameServerUrl(data: any) {
        NetworkManager.SendHallMSg(messageClass.Hall, hallClass.GameServerUrlReq, data)
    }

    //第三方游戏Url回包
    private responGameServerUrl(msg: proto.netproto.GameServerUrlRes) {
        if (!this.tryGetErrorMsg(msg)) {
            EventManager.instance.dispatch(CommonName.EVENT.Respon_GameServer_Url, msg)
        }
    }

    //AF数据
    public getAFBaseConfig() {
        return {
            af_status:GameSDKInterface.getAFKey("af_status"),
            af_sub2:GameSDKInterface.getAFKey("af_sub2"),
            af_sub3:GameSDKInterface.getAFKey("af_sub3"),
            af_ad:GameSDKInterface.getAFKey("af_ad"),
            user_agent:GameSDKInterface.getAFKey("user_agent"),
            appsflyer_id:GameSDKInterface.getAppsFlyerUID(),
            is_first_launch:GameSDKInterface.getAFKey("is_first_launch"),
        }
    }

    //adjust数据
    public getAdjustBaseConfig() {
        return {
            adid:GameSDKInterface.GetAdID(),
            gps_adid:GameSDKInterface.GetGoogleAdId(),
        }
    }
}

export const LoginServer = new _LoginServer();
