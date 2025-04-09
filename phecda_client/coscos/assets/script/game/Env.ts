
import { _decorator, Component, Node, sys } from 'cc';
import { GameConfig } from '../com/game_config';
import { Uti } from '../utility/Uti';
import { GameSDKInterface } from './GameSDKInterface';
import LoaclStorage from '../manager/local_storage';


export class _Env {
    //获取设备类型
    get HDType() {
        switch (sys.platform) {
            case "IOS":
                return 1;
            case "MACOS":
                return 2;
            case "ANDROID":
                return 0;
            default:
                return 0
        }
    }

    get PlatformType() {
        if (this.IsAndroid)
            return 0;
        if (this.IsIOS)
            return 1;
        return 0;
    }

    //获取设备码
    get HDCode() {
        if (this.IsWeb) {
            if (GameConfig.deviceCode.length > 1) {
                return GameConfig.deviceCode;
            }
            let code = LoaclStorage.getString("browserCode")
            if (!code) {
                code = `${sys.os}|${sys.browserType}|${sys.browserVersion}|${new Date().getTime()}`
                LoaclStorage.setString("browserCode", code)
            }
            return code
        } else if (sys.isNative) {
            return GameSDKInterface.GetUnionDeviceId()
        }
        else {
            console.log(sys.platform)
            return sys.platform
        }
    }

    get ClientVersion() {
        return "1.0.0"
    }

    //是否Android环境
    get IsAndroid() {
        return sys.platform == "ANDROID"
    }

    //是否是IOS
    get IsIOS() {
        return sys.platform == "MACOS" || sys.platform == "IOS"
    }

    //是否是web
    get IsWeb() {
        return sys.platform == "MOBILE_BROWSER" || sys.platform == "DESKTOP_BROWSER"
    }
}
export const Env = new _Env();

