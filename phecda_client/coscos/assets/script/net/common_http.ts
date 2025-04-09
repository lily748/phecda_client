import { HttpDataModel } from "../../packages/hall/script/model/HttpDataModel";
import ModuleManager from "../framework/core/module_manager";
import { HotUpdateManager } from "../framework/hotUpdate/HotUpdateManager";
import { PostData } from "../../packages/hall/script/model/HttpDataModel";
import { Http_Define } from "../hall/HttpDefine";
import EventManager from "../manager/event_manager";
import CommonName from "../../packages/hall/script/model/CommonName";
import { HallModel } from "../../packages/hall/script/model/HallModel";
import { GameConfig } from "../com/game_config";
import { UserDataModel } from "../../packages/hall/script/model/UserDataModel";
import HttpUtil from "../framework/net/http_util";
import { LoginServer } from "./login_serve";
import Utility from "../utility/utility";
import { GameResConfig } from "../hall/GameResConfig";
import { GameSDKInterface } from "../game/GameSDKInterface";
class _common_http {
    
    private post(target: any, url: string, params: any, callback?: (data: any) => void, toast?: boolean, force?: boolean,noNetPrompt=false) {
        HttpDataModel.Post({
            Target: target,
            Url: url,
            Params: params,
            Callback: callback,
            SuccessToast: toast,
            // UseCache: useCache,
            FailToast: true,
            ForceRequest: force,
            NoNetPrompt: noNetPrompt
        })
    }

    //请求发送短信验证码
    public sendVerifyCode(target: any, params: {}, callback: (data: any) => void) {

    }

    /**
     * 请求获取游戏列表数据
     * @param target 
     * @param callback 
     */
    public reqGetGameList(target: any, callback: (data: any) => void) {
        ModuleManager.instance.showNetPrompt();
        let params = {
            version: HotUpdateManager.getLocalVersion("main"),
        }
        this.post(target, Http_Define.getGameList, params, callback, false, false)
    }

    /**
     * 获取游戏列表数据返回
     * @param msg 
     */
    public rspGetGameList(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            HallModel.SetLocalHallData(msg.data);
            GameConfig.resConfigUrl=msg.data.domain_name;
            EventManager.instance.dispatch(CommonName.EVENT.GoToHall, msg.data);
        } else {
            console.log("获取游戏列表数据失败");
            let info=HallModel.GetLocalHallData();
            if(info){
                //使用大厅缓存数据
                let list=JSON.parse(info);
                GameConfig.resConfigUrl=list.domain_name;
                EventManager.instance.dispatch(CommonName.EVENT.GoToHall, list);
            }
        }
    }

    /**
     * 请求进入第三方游戏
     * @param target 
     * @param vendor_id 厂商id
     * @param gameID 游戏id
     * @param platform 对接平台ID
     * @param device 对接SBO的设备类型 m-手机版(mobile) d-网页版(desktop) 默认为m
     * @param product_type 对接SBO产品类型
     * @param callback 
     */
    public reqLoginGame(target: any, vendor_id_str: string, gameID: string, platform: number, product_type: string, callback: (data: any) => void) {
        let user = UserDataModel.GetCurrentUser();
        if (!user) return;
        ModuleManager.instance.showNetPrompt();
        HallModel.vendorID = vendor_id_str;
        HallModel.gameID = gameID;
        let params = {
            uid: user.uid,
            vendor_id_str: vendor_id_str,
            game_id: gameID,
            platform: platform,
            device: "m",
            product_type:product_type                
        }
        this.post(target, Http_Define.login_game, params, callback, false, false)
    }

    /**
     * 进入第三方游戏返回
     * @param msg 
     */
    public rspLoginGame(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            if (msg.data && msg.data.game_launch_url) {
                ModuleManager.instance.showWebview(msg.data);
                console.log("game url:", msg.data.game_launch_url);
            }
        } else {
            console.log("loginGame fail");
        }
    }

    /**
     * 获取用户数据
     */
    public reqGetUserInfo(target: any, callback: (data: any) => void) {
        let user = UserDataModel.GetCurrentUser();
        if (!user) return;
        let params = {
            uid: user.uid,
        }
        this.post(target, Http_Define.getUserInfo, params, callback, false, false, true)
    }

    /**
     * 获取用户数据返回
     * @param msg 
     */
    public rspUserInfo(msg: any) {
        if (msg && msg.code == 0) {
            if (msg.data.user_info) {
                UserDataModel.SetCurrentUser(msg.data.user_info,false);
                EventManager.instance.dispatch(CommonName.EVENT.Respon_Refresh_UserInfo)
            }
        }
    }

    /**
     * 请求提现数据
     * 
     */
    public reqWithdrawalAccountList() {
        let user = UserDataModel.GetCurrentUser();
        if (!user) return;
        ModuleManager.instance.showNetPrompt();
        let msg = {
            baseUrl: Http_Define.getWithdrawalAccountList,
            params: {
                uid: user.uid,
            }
        }
        HttpUtil.http_get(msg, this._rspWithdrawalAccountList.bind(this), () => { console.log("获取提现数据失败") });
    }

    /**
     * 提现数据返回
     * @param msg 
     */
    private _rspWithdrawalAccountList(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            ModuleManager.instance.showModule(CommonName.MODULE.WithdrawNew, msg.data);
        }
    }


    /**
   * 获取新手补水奖励
   */
    public reqNewUserWaterReward(target: any, callback: (data: any) => void) {
        let user = UserDataModel.GetCurrentUser();
        if (!user) return;
        let params = {
            uid: user.uid,
        }
        // this.post(target, Http_Define.getNewUserWaterReward, params, callback, false, false, true)
        HttpDataModel.Post({
            Target: target,
            Url: Http_Define.getNewUserWaterReward,
            Params: params,
            Callback: callback,
            SuccessToast: false,
            FailToast: false,
            ForceRequest: false,
            NoNetPrompt: true
        })
    }

    /**
     * 获取新手补水奖励返回
     * @param msg 
     */
    public rspNewUserWaterReward(msg: any) {
        if (msg && msg.code == 0) {
            if (msg.data.pop_up == 1) {
                ModuleManager.instance.showModule(CommonName.MODULE.ActivityBackFlow, msg.data.reward_coin);
            }
        }
    }

    /**
   * 埋点数据上报
   */
    public reqReportEventTracking(target: any, event_type: number, event_value: string, callback: (data: any) => void) {
        let params = {
            channel_id: GameConfig.GameSiteID,
            event_type: event_type,
            event_value: event_value,
        }
        this.post(target, Http_Define.reportEventTracking, params, callback, false, false, true);
    }

    /**
     * 埋点数据上报返回
     * @param msg 
     */
    public rspReportEventTracking(msg: any) {
        if (msg && msg.code == 0) { };
    }

    //token登录
    public reqTokenLogin(target: any, callback: (data: any) => void) {
        let user = UserDataModel.GetCurrentUser();
        if (!user) return;
        let params = {
            token: user.token,
        }
        this.post(target, Http_Define.login_token, params, callback, false, false, true)
    }

    public rspTokenLogin(msg: any) {
        if (msg && msg.code == 0) {
            UserDataModel.SetCurrentUser(msg.data.user_info);
        };
    }

    //绑定
    public reqDelayBind(target: any, callback: (data: any) => void) {
        GameResConfig.getPackageInfo();
        let params = {
            agent_id: GameConfig.agentID,
            report_info: JSON.stringify(LoginServer.getAFBaseConfig()),
            other_info: JSON.stringify(LoginServer.getAdjustBaseConfig()),
        }
        console.log("reqDelayBind report_info:", params.report_info,"other_info:",params.other_info);
        let user_agent = GameSDKInterface.getAFKey("user_agent");
        let af_status = GameSDKInterface.getAFKey("af_status");
        if (user_agent == "-1" || af_status == "-1") {
            return;
        }
        this.post(target, Http_Define.Login_DelayBind, params, callback, false, false, true);
    }

    public rspDelayBind(msg: any) {
        if (msg && msg.code == 0) {
            HallModel.SetLocalReport("reportTime", Utility.instance.getTimeStr(new Date()));
        };
    }

    //退出登录
    public reqLogOut(target: any, callback: (data: any) => void) {
        // let params = {
        //     type: 1,
        // }
        this.post(target, Http_Define.logout, {}, callback, false, false, true);
    }

    public rspLogOut(msg: any) {
        if (msg && msg.code == 0) {
            UserDataModel.clear();
            HallModel.isGetHallActList = true;
            ModuleManager.instance.showModule(CommonName.MODULE.Login, "logOut", () => {
                ModuleManager.instance.destroyAllModule(CommonName.MODULE.Login)
            });
        }
    }

    //邮件红点
    public reqGetHallMailPot(target: any, callback: (data: any) => void) {
        this.post(target, Http_Define.getHallMailPot, {}, callback, false, false, true);
    }

    public rspGetHallMailPot(msg: any) {
        if (msg && msg.code == 0) {
            EventManager.instance.dispatch(CommonName.EVENT.UpdateEmailRedDot, msg.data);
        }
    }

    // 每日活动判断红点 
    public reqGetRewardPot(typeList:number[], target: any, callback: (data: any) => void) {
        this.post(target, Http_Define.getDailyProgress, {type_list:typeList}, callback, false, false, true);
    }

    public rspGetRewardPot(msg: any) {
        if (msg && msg.code == 0) {
            let list = msg.data.list;
            let showRed = false;
            if (list) {
                for(let key in list) {
                    let {progresses, status} = list[key];
                    if (status == 1) {
                        for (let i = 0; i < progresses.length; i++) {
                            let {completed, target, status} = progresses[i];
                            let progress = Number((completed/target));
                            if (status == 0 && progress >=1) {
                                showRed = true;
                                break;
                            }
                        }
                    }
                }
            }
            EventManager.instance.dispatch(CommonName.EVENT.UpdateRewardRedDot, showRed);
        }
    }
}

export const conmmon_http = new _common_http();

