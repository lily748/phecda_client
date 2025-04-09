
import { _decorator, Component, Node, sys, debug, game, getError, ScrollView, JsonAsset } from 'cc';
import CommonName from '../../packages/hall/script/model/CommonName';
import EventManager from '../manager/event_manager';
import { AndroidClassMap } from './AndroidClassMap';
import { GameConfig } from '../com/game_config';
import { Env } from './Env';
import { CommonFun } from '../../packages/hall/script/model/CommonFun';
const { ccclass, property } = _decorator;

@ccclass('GameSDKInterface')
export abstract class GameSDKInterface {
    private static map: AndroidClassMap = new AndroidClassMap("com/cocos/game", "AppActivity")
    private static ClassIOS: string = "SDKInterface";
    private static CallAndroid(methodName: string, methodSignature: string, ...parameters: any): any {
        if (sys.platform != sys.Platform.ANDROID) return;
        try {
            methodName = this.map.getMethodName(methodName)
            if (!methodName) return;
            if (parameters.length > 0) {
                return jsb.reflection.callStaticMethod(this.map.getClassName(), methodName, methodSignature, ...parameters)
            }
            else {
                return jsb.reflection.callStaticMethod(this.map.getClassName(), methodName, methodSignature)
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    private static CallIOS(methodName: string, ...parameters: any): any {
        if (sys.platform != sys.Platform.IOS) return;
        try {
            if (parameters.length > 1) {
                var arg0 = parameters[0]
                parameters.splice(0, 1)
                return jsb.reflection.callStaticMethod(this.ClassIOS, methodName, arg0, ...parameters)
            }
            else if (parameters.length == 1) {
                return jsb.reflection.callStaticMethod(this.ClassIOS, methodName, parameters[0])
            }
            else {
                return jsb.reflection.callStaticMethod(this.ClassIOS, methodName,"")
            }
        }
        catch (error) {
            console.error(error)
        }
    }


    public static FacebookLogin() {
        console.log("FacebookLogin------------------>")
        // if (sys.platform == sys.Platform.ANDROID) {
        //     return GameSDKInterface.CallAndroid("FacebookLogin", "()V")
        // }
        // else if (sys.platform == sys.Platform.IOS) {
        //     return GameSDKInterface.CallIOS("FacebookLogin")
        // }
    }

    public static FacebookLoginRet(data: string) {
        console.log("FacebookLoginRet------------------>", data)
        var res = JSON.parse(data)
        EventManager.instance.dispatch(CommonName.EVENT.Respon_Facebook_login, res)
        if (res.error || res.cancel) {
            console.log("facebook 登录失败  error：" + res.error)
        }
        else {
            console.log("facebook User Info  ", res)
        }
    }

    //shareType:分享方式 0：链接  1：图片  shareUrl：链接地址  imgPath：图片地址
    public static FacebookShare(data: { shareType: number, shareUrl: string, imgPath: string }) {
        var content = JSON.stringify(data)
        console.log("Facebook分享", content)
        // if (sys.platform == sys.Platform.ANDROID) {
        //     return GameSDKInterface.CallAndroid("FacebookShare", "(Ljava/lang/String;)V", content)
        // }
        // else if (sys.platform == sys.Platform.IOS) {
        //     return GameSDKInterface.CallIOS("FacebookShare:", content)
        // }
    }

    public static FacebookShareRet(data: string) {
        console.log("FacebookShareRet------------------>", data)
        EventManager.instance.dispatch(CommonName.EVENT.Respon_Facebook_Share, JSON.parse(data))
    }
    // let json = {
    //     "event": "fb_mobile_purchase",
    //     "params": { "orderId": "12314555", "price": 1, "quantity": 1, "currency": "THB" }
    // }
    //参数形式 {"event":"事件名称","params":{}}
    public static FacebookAppEvent(orderId: string, amount: number | Long) {
        let json = {
            "event": "fb_mobile_purchase",
            "params": { "orderId": orderId, "price": amount, "quantity": 1, "currency": "BRL" }
        }
        // if (sys.platform == sys.Platform.ANDROID) {
        //     return GameSDKInterface.CallAndroid("FacebookAppEvent", "(Ljava/lang/String;)V", JSON.stringify(json))
        // }
        // else if (sys.platform == sys.Platform.IOS) {
        //     return GameSDKInterface.CallIOS("FacebookAppEvent:", JSON.stringify(json));
        // }
    }

    public static LineLogin() {
        // if (sys.platform == sys.Platform.ANDROID) {
        //     return GameSDKInterface.CallAndroid("LineLogin", "()V")
        // }
    }

    public static LineLoginRet(data: string) {
        console.log("LineLoginRet------------------>", data)
        var res = JSON.parse(data)
        EventManager.instance.dispatch(CommonName.EVENT.Respon_Line_login, res)
        if (res.error) {
            console.log("line 登录失败  error：" + res.error)
        }
        else {
            console.log("line User Info  ", res)
        }
    }

    //shareType:分享方式 0：链接  1：图片  shareUrl：链接地址  imgPath：图片地址
    public static LineShare(data: { shareType: number, shareUrl: string, imgPath: string }) {
        if (data.shareType == 0) {
            sys.openURL("line://msg/text/" + data.shareUrl)
        } else {
            sys.openURL("line://msg/image" + data.imgPath)
        }
    }

    public static IsSupportExit(): boolean {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("isSupportExit", "()Z")
        }
        else {
            return false
        }
    }
    //获取子渠道名称
    public static GetChannelName(): string {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("GetChannelName", "()Ljava/lang/String;")
        } else if (sys.platform == sys.Platform.IOS) {
            return "1";
        }
    }
    //获取包名
    public static GetPackageName(): string {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("GetPackageName", "()Ljava/lang/String;")
        }
        else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("GetPackageName")
        }
    }

    //获取apk版本
    public static GetApkVer(): string {
        let ret = "1.0.0";
        if (sys.platform === sys.Platform.ANDROID) {
            ret = GameSDKInterface.CallAndroid("GetApkVer", "()Ljava/lang/String;")
            if (ret == undefined) {
                ret = "1.0.0";
            }
        }
        return ret
    }

    //获取包内容
    public static GetPackageComment(): string {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("GetPackageComment", "()Ljava/lang/String;")
        }
        else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("GetPackageComment")
        }
    }
    //获取包下载地址信息
    public static GetPackageUrlInfo(): string {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("GetPackageUrlInfo", "()Ljava/lang/String;")
        }
        else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("GetPackageUrlInfo")
        }
    }
    public static CopyTextToClipboard(str: string): boolean {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("CopyTextToClipboard", "(Ljava/lang/String;)Z", str)
        } else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("CopyTextToClipboard:", str)
        }
    }
    //获取剪切板
    public static GetTextFromClipboard(): string {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("GetTextFromClipboard", "()Ljava/lang/String;")
        } else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("GetTextFromClipboard")
        }
    }

    public static GetUnionDeviceId(): string {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("GetUnionDeviceId", "()Ljava/lang/String;")
        } else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("GetUnionDeviceId")
        }
    }

    //获取Android 或者ios设置的版本号  防止后续工程更新导致接口不兼容
    public static GetProjectVersion(): number {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("GetAndroidVersion", "()I")
        } else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("GetIOSVersion")
        }
    }


    public static GetWebHtmlUrl(): string {
        if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("GetWebHtmlUrl");
        }
    }

    //Adjust事件推送
    public static TrackEvent(data: string): string {
        // if (sys.platform == sys.Platform.ANDROID) {
        //     return GameSDKInterface.CallAndroid("PushToAdjust", "(Ljava/lang/String;)V", data)
        // } else if (sys.platform == sys.Platform.IOS) {
        //     return GameSDKInterface.CallIOS("PushToAdjust:", data)
        // }
        return ""
    }

    //Adjust支付时间推送 { "EventName": "irqnc0", "Score": 1.1, "Currency": "TBH" }
    public static CurrencyTrackEvent(data: string) {
        // if (sys.platform == sys.Platform.ANDROID) {
        //     GameSDKInterface.CallAndroid("PushToAdjustCurrency", "(Ljava/lang/String;)V", data)
        // }
        // else if (sys.platform == sys.Platform.IOS) {
        //     return GameSDKInterface.CallIOS("PushToAdjustCurrency:", data)
        // }
    }
    //Adjust获取ad_id
    public static GetAdID() {
        if (sys.platform == sys.Platform.ANDROID) {
            let apkVer = this.GetApkVer();
            if (apkVer >= "1.2.0") {
                return GameSDKInterface.CallAndroid("GetAdID", "()Ljava/lang/String;")
            }
            else {
                return ""
            }
        }
        else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("GetAdID")
        }
        return ""
    }

    //获取googleAdId
    public static GetGoogleAdId() {
        let ret = "";
        if (sys.platform === sys.Platform.ANDROID) {
            ret = GameSDKInterface.CallAndroid("getNewGAID", "()Ljava/lang/String;")
            if (ret == undefined) {
                ret = "";
            }
            if (ret == "00000000-0000-0000-0000-000000000000") {
                ret = Env.HDCode;
            }
            if (ret.length < 4) {
                ret = `${sys.os}|${new Date().getTime()}`;
            }
        }
        return ret
    }

    //保存图片到相册
    public static SaveImageToPhoto(filePath: string) {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("SaveImageToPhoto", "(Ljava/lang/String;)V", filePath)
        }
        else if (sys.platform == sys.Platform.IOS) {
            GameSDKInterface.CallIOS("SaveImageToPhoto:", filePath)
        }
    }

    //原生分享
    public static OtherShare(data: string) {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("OtherShare", "(Ljava/lang/String;)V", data)
        }
        else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("OtherShare:", data);
        }
    }

    public static SaveImageToPhotoRet(ret: string) {
        console.log("保存图片到相册成功", ret)
        EventManager.instance.dispatch(CommonName.EVENT.ResponSaveToPhoto, JSON.parse(ret))
    }

    public static CrashReport(message: string, stack: string) {
        // if (sys.platform == sys.Platform.ANDROID) {
        //     GameSDKInterface.CallAndroid("PostException", "(Ljava/lang/String;Ljava/lang/String;)V", message, stack)
        // }
        // else if (sys.platform == sys.Platform.IOS) {
        //     return GameSDKInterface.CallIOS("PostException:stack:", message, stack);
        // }
    }

    public static LogReport(log: string) {
        if (sys.platform == sys.Platform.ANDROID) {
            GameSDKInterface.CallAndroid("LogReport", "(Ljava/lang/String;)V", log)
        } else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("LogReport:", log)
        }
    }

    //设置屏幕自动旋转
    public static SetAutoOrientation(auto: boolean) {
        // if (sys.platform == sys.Platform.ANDROID) {
        //     GameSDKInterface.CallAndroid("SetAutoOrientation", "(Z)V", auto)
        // } else if (sys.platform == sys.Platform.IOS) {
        //     return GameSDKInterface.CallIOS("SetAutoOrientation:", auto)
        // }
    }

    public static Restart() {
        if (sys.platform == sys.Platform.ANDROID) {
            if (GameSDKInterface.GetProjectVersion() > 1)
                GameSDKInterface.CallAndroid("Restart", "()V")
            else {
                game.restart();
            }
        }
        else if (sys.platform == sys.Platform.IOS) {
            game.restart();
        }
    }

    public static FirebaseLogEvent(orderId: string, amount: number | Long) {
        let json = {
            "event_name": "mobile_purchase",
            "params": { "orderId": orderId, "revenue": amount, "currency": "BRL" }
        }
        // if (sys.platform == sys.Platform.ANDROID && GameSDKInterface.GetProjectVersion() > 2) {

        //     GameSDKInterface.CallAndroid("FirebaseLogEvent", "(Ljava/lang/String;)V", JSON.stringify(json));
        // } else if (sys.platform == sys.Platform.IOS) {
        //     return GameSDKInterface.CallIOS("FirebaseLogEvent:", JSON.stringify(json));
        // }
    }

    public static CocosCallNative() {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("CocosCallIOSFunction", "()V")
        }
        else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("CocosCallNative:", "我是cocos!!!")
            //jsb.reflection.callStaticMethod(this.ClassIOS, "CocosCallNative:", "我是cocos!!!")
        }
    }

    public static NativeCallCocos(data?: any) {
        console.log("NativeCallCocos   Cocos====>", data)
    }

     /**
     * 埋点支持多个(格式  "{Amount:50,ClickTask:1}" )
     * @param eventName 
     * @param eventValueString 
     */
     public static trackEventAF(eventName, eventValueString){
        if(sys.platform === sys.Platform.ANDROID){
            GameSDKInterface.CallAndroid("trackEventAF", "(Ljava/lang/String;Ljava/lang/String;)V", eventName, eventValueString)
        }
    }

    /**
     * 通过key获取af的值
     * @param key 
     * @returns 
     */
    public static getAFKey(key){
        let ret = "-1";
        if(sys.platform === sys.Platform.ANDROID){
            if (key == "af_ad") {
                ret = this.GetGoogleAdId();
            } else {
                ret = GameSDKInterface.CallAndroid("getAFKey", "(Ljava/lang/String;)Ljava/lang/String;", key);
            }
        }
        else if (key == "af_ad" && Env.IsWeb) {
            ret = GameConfig.appsFlyer_AD;
        }
        return ret
    }

    /**
     * 获取AppsFlyer ID
     * @returns 
     */
    public static getAppsFlyerUID(){
        let ret = "";
        if(sys.platform === sys.Platform.ANDROID){
            ret = GameSDKInterface.CallAndroid("getAppsFlyerUID", "()Ljava/lang/String;")
        }
        else if (Env.IsWeb) {
            ret = GameConfig.deviceCode;
        }
        return ret
    }

    public static GetReferrerInfo() {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("GetReferrerInfo", "()Ljava/lang/String;")
        }
        else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("GetReferrerInfo")
        }
    }

    public static GetUrlDataInfo(){
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("GetUrlDataInfo", "()Ljava/lang/String;")
        }
        else if (sys.platform == sys.Platform.IOS) {
            return GameSDKInterface.CallIOS("GetUrlDataInfo")
        }
    }

    public static getCommentInfo() {
        let commentMap = {};
        if (sys.platform == sys.Platform.ANDROID) {
           
            let apkVer = this.GetApkVer();
            if (CommonFun.compareVersions(apkVer, "1.4.0") >= 0) {
                let commentInfo = localStorage.getItem("commentInfo");
                if (commentInfo!=null) return JSON.parse(commentInfo);
                let keys = ["selfAttrId","channelId","agentId"];
                commentInfo = GameSDKInterface.CallAndroid("GetCommentInfo", "()Ljava/lang/String;");
                if (commentInfo!="" && commentInfo!=null) {
                    let infos = commentInfo.split("|");
                    for (let i = 0; i < keys.length; i++) {
                        if(infos[i]!=null) commentMap[keys[i]] = infos[i];
                    }
                    localStorage.setItem("commentInfo",JSON.stringify(commentMap));
                    return commentMap;
                }
            }
           return commentMap;
        }
        else if (sys.platform == sys.Platform.IOS) {
            return commentMap;
            // return GameSDKInterface.CallIOS("GetCommentInfo")
        }

        return commentMap;
    }


    public static IsOpenAdSdk(): boolean {
        if (sys.platform == sys.Platform.ANDROID) {
            return GameSDKInterface.CallAndroid("IsOpenAdSdk", "()Z")
        }
        else {
            return false
        }
    }

    public static getEmulatorCheckInfo(fullLog:boolean = false) {
        if (sys.platform == sys.Platform.ANDROID) {
            let data = null;
            let apkVer = this.GetApkVer();
            if (apkVer >= "1.3.0") {
                data = GameSDKInterface.CallAndroid("getEmulatorCheckInfo", "()Ljava/lang/String;");
            }
            if (data!=null) {
                let jsonObj = {};
                let infos = data.split("|");
                for (let i = 0; i < infos.length; i++) {
                    let infos2 = infos[i].split("=");
                    if (infos2.length >= 2) jsonObj[infos2[0].trim()] = infos2[1].trim(); 
                }
                if (jsonObj["suspectCount"] != null) {
                    let suspectCount = Number(jsonObj["suspectCount"]);
                    if (jsonObj["isRoot"] === "true") suspectCount++;
                    if (jsonObj["isDebugged"] === "true") suspectCount++;
                    jsonObj["suspectCount"] = suspectCount;
                } 
                if (fullLog) return JSON.stringify(jsonObj);
                return jsonObj["suspectCount"] || 0;
            }
            return fullLog?"":0;
        } 
        // else if (sys.platform == sys.Platform.IOS) {
        //     return GameSDKInterface.CallIOS("getEmulatorCheckInfo")
        // }

        return fullLog?"":0;
    }

}

window["GameSDKInterface"] = GameSDKInterface;
