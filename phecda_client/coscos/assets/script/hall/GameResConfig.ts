import { _decorator, sys, game } from 'cc';
import { AdjustModel } from '../../packages/hall/script/model/AdjustModel';
import { HttpDataModel, ReportTypeName } from '../../packages/hall/script/model/HttpDataModel';
import { UserDataModel } from '../../packages/hall/script/model/UserDataModel';
import { GameConfig } from '../com/game_config';
import ModuleManager from '../framework/core/module_manager';
import { HotUpdateManager } from '../framework/hotUpdate/HotUpdateManager';
import HttpUtil from '../framework/net/http_util';
import { Env } from '../game/Env';
import { GameSDKInterface } from '../game/GameSDKInterface';
import { fromBase64 } from '../libs/base64';
import LanguageManager from '../manager/language/language_manager';
import LoaclStorage from '../manager/local_storage';
import { LoginServer } from '../net/login_serve';
import { Uti } from '../utility/Uti';
import { cosUrls, timeUrls } from './UrlConfig';
import CommonName from '../../packages/hall/script/model/CommonName';
import { Http_Define } from './HttpDefine';
import { PostData } from '../../packages/hall/script/model/HttpDataModel';
import Utility from '../utility/utility';
import { GameData } from '../../packages/hall/script/model/GameData';
const { ccclass, property } = _decorator;
// enum GetUrlType {
//     Res,
//     YXD,
// }

enum SwitchType {
    exchange,
    exchange_qingsuan,
    bank,
    recharge,
    official_website,
    share,
    mailbox,
    notice,
    customer,
    apply_pro,
    ddz_match,
    share_link,
    marquee,
    zjh_voice,
    first_charge_back,
    login_gift,
    relief_payment,
    turntable,
    redpacket,
    WheelFortune,
    NewLottery,
    OfferReward,
    Length,
}

//获得游戏配置数据
@ccclass('GameResConfig')
export class _GameResConfig {
    private getResTimes: number = 0;
    private autoRelinkTimes: number = 0;
    private maxRelinkTimes: number = 3;
    public serverListData: any = null
    private uiLoading;
    //获取后台服务器配置
    public getGameResCfg() {
        
    }
    //成功回调
    public successCallBack(data: string) {
       
    }
    //失败回调
    public errorCallBack(error: string) {
      
    }
    //处理版本信息
    public handGameCfg(data: any) {
        
    }
    //更新主包
    private onUpdateMain() {
        HttpDataModel.Report(ReportTypeName.HallUpdateStart)
        let tips = LanguageManager.instance.getLangByID("loading_update_file")
        this.uiLoading.onShow({ tips: tips })
        var handler = HotUpdateManager.download("main")
        handler.onProgress = (progress) => {
            if (progress == Number.MAX_VALUE || isNaN(progress)) {
                progress = 0
            }
            this.uiLoading.onShow({ tips: `${tips}`, progressPercentage: (Math.floor(progress) / 100) })
        }
        handler.onFailed = () => {
            ModuleManager.instance.showDialog_Confirm(LanguageManager.instance.getLangByID("loading_update_fail_try"), this.onUpdateMain.bind(this))
        }
        handler.onSuccess = () => {
            console.log("更新完成================================")
            HttpDataModel.Report(ReportTypeName.HallUpdateEnd)
            setTimeout(game.restart, 1000)
        }
    }
    //获取后台地址
    public getResServerAddr() {
      
    }
    //获取转发模式服务器相关数据
    public getServerListCfg() {
      
    }

    private getServerListSuccess(data) {
      
    }

    private getServerListFailed(error) {
      
    }

    public gotoLogin(){
        ModuleManager.instance.showModule(CommonName.MODULE.Login, null, () => {
            ModuleManager.instance.destroyAllModule(CommonName.MODULE.Login);
        });
    }

    public getInfo() {
        if (!sys.isNative) {
            this.getUrlInfo();
        }
        this.getGameConfig();
        this.getPackageInfo();
    }

    //获取游戏配置
    public getGameConfig() {
        let tips = LanguageManager.instance.getLangByID("loading_load_res_config")
        this.uiLoading = ModuleManager.instance.showModule(CommonName.MODULE.Loading, { tips: tips, progressPercentage: 1 });

        let msg = {
            baseUrl: Http_Define.getGameConfig,
            params: {
                channel_id: GameConfig.GameSiteID,
                client_version: "1.0.0",
                hot_version: HotUpdateManager.getLocalVersion("main"),
                bundle_name: GameConfig.packageName,
                os_type: Env.HDType,
            }
        }
        HttpUtil.http_get(msg, this.rspGameConfigSuccess.bind(this), this.rspGameConfigFail.bind(this));
    }

    //游戏配置返回
    public rspGameConfigSuccess(msg: any) {
        this.getResTimes = 0;
        this.reqReportInfo();
        if (msg && msg.code == 0) {
            GameConfig.CustomerUrl = msg.data.cs_url;
            GameConfig.DownloadUrl = msg.data.download_url;
            GameConfig.IsReportDeviceInfo = msg.data.is_report_device_info || false;
            GameData.setAgentMode(msg.data?.agent_mode_id);
            let isApkUpdate = msg.data.is_apk_update;
            if (isApkUpdate) {
                console.log("apk update");
                this.gotoLogin();
            } else {
                if (msg.data.version_list) {
                    let remoteVersions = {};
                    for (let key in msg.data.version_list) {
                        let info = msg.data.version_list[key]
                        remoteVersions[key] = {
                            version: info.version,
                            path: info.res_url + "/" + info.version,
                            skin: ""
                        }
                    }
                    HotUpdateManager.setRemoteVersion(remoteVersions);
                    if (HotUpdateManager.isUpdate("main")) { //暂时屏蔽 热更
                        this.onUpdateMain();
                    }
                    else {
                        this.gotoLogin();
                    }
                } else {
                    this.gotoLogin();
                }
            }
        } else {
            this.gotoLogin();
        }
    }

    public rspGameConfigFail(msg: any) {
        if (msg == null) return;
        this.getResTimes++;
        if (this.getResTimes <= cosUrls.length) {
            if (GameConfig.netServerType == 4) GameConfig.ResServerAddr = cosUrls[this.getResTimes - 1];
            this.getGameConfig();
        } else {
            this.gotoLogin();
        }
    }

    public getPackageInfo() {
        if (!sys.isNative) {
            return;
        }
      
        let commonInfo = GameSDKInterface.getCommentInfo();
        if (commonInfo["agentId"]!=null && commonInfo["agentId"]!="") {
            GameConfig.agentID = Number(commonInfo["agentId"]);
            console.log("[agent_id]:", GameConfig.agentID);
            return;
        }
        let agent_id = GameSDKInterface.getAFKey("agent_id");
        GameConfig.agentID = parseInt(agent_id);
        if (GameConfig.agentID < 0) {
            GameConfig.agentID = 0;
        }
        console.log("agent_id:", GameConfig.agentID);
    }

    public reqReportInfo() {
        let params = {
            ad_info:JSON.stringify(LoginServer.getAFBaseConfig()),
            channel_id: GameConfig.GameSiteID,
            bundle_name: GameConfig.packageName,
            os_type: Env.HDType,
            self_attr_id:GameData.getSelfAttrId()
        }

        let af_id = LoginServer.getAFBaseConfig().appsflyer_id;
        let af_status = LoginServer.getAFBaseConfig().af_status;
        let af_sub2 = LoginServer.getAFBaseConfig().af_sub2;
        let af_sub3 = LoginServer.getAFBaseConfig().af_sub3;

        if (sys.isNative) {
            console.log("af_id:", af_id, "af_status:", af_status, "af_sub2:", af_sub2, "af_sub3:", af_sub3);
            if (af_status == "Organic") {     //自然量
                if (af_id == "") {
                    return;
                }
            } else {                          //非自然量
                if (af_id == "" || af_status == "-1" || af_sub2 == "-1" || af_sub3 == "-1") {
                    return;
                }
            }
        }

       
        let info: PostData = {
            Target: this,
            Url: Http_Define.reportEvent,
            Params: params,
            Callback: this.rspReportInfo.bind(this),
            ForceRequest: true,
            FailToast: false,
            FailCallback: true,
        }

        if (GameConfig.reportAF) {
            GameConfig.reportAF = false;
            HttpDataModel.Post(info);
        }
    }

    public rspReportInfo(msg: any) {
        
    }

    //获取URL信息
    public getUrlInfo(){
        if (sys.isNative) {
            return;
        }
        let urlParams = Utility.instance.getUrlParams();
        let urlList = Object.values(urlParams);
        let device_id, c_id, af_ad;
        if (urlList[0]) {
            device_id = urlList[0];
            GameConfig.deviceCode = device_id;
        }
        if (urlList[1]) {
            c_id = urlList[1];
            GameConfig.GameChannelID = parseInt(c_id);
        }
        if (urlList[2]) {
            af_ad = urlList[2];
            GameConfig.appsFlyer_AD = af_ad;
        }
    }
}
export const GameResConfig = new _GameResConfig();