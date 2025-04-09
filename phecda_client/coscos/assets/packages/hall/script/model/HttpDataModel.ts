import { sys, _decorator } from 'cc';
import { GameConfig } from '../../../../script/com/game_config';
import ModuleManager from '../../../../script/framework/core/module_manager';
import { HotUpdateManager } from '../../../../script/framework/hotUpdate/HotUpdateManager';
import HttpUtil from '../../../../script/framework/net/http_util';
import { Env } from '../../../../script/game/Env';
import LanguageManager from '../../../../script/manager/language/language_manager';
import Utility from '../../../../script/utility/utility';
import { UserDataModel } from './UserDataModel';
import { DEBUG } from 'cc/env';
const { ccclass, property } = _decorator;

ccclass("HttpDataModel")

export interface PostData {
    Target: any,
    Url: string,
    Params: any,
    Callback?: (data: any) => void,
    UseCache?: boolean,
    NoNetPrompt?: boolean,
    FailToast?: boolean,
    SuccessToast?: boolean,
    ForceRequest?: boolean,
    WholeData?: boolean,
    FailCallback?: boolean,
}

export enum ReportTypeName {
    Launch = 1,
    HallUpdateStart = 2,
    HallUpdateEnd = 3,
    Login = 4,
    FirstRecharge = 5,
    LineService = 6,
}

class _HttpDataModel {

    private _data: any = {}

    public Post(info: PostData) {
        if (!info || !info.Target || !info.Url) {
            console.error("http post error", info.Url)
            return
        }

        let userID = UserDataModel.GetCurrentUserID() || -1
        let url = info.Url
        let params = info.Params || {}

        let callback = (data: any) => {
            if (!info || !info.Target) {
                console.error("http post error:")
                return
            }
            info.Callback && info.Callback(data)
        }
        let key = Utility.instance.getMD5(userID + url + JSON.stringify(params))
        if (!info.ForceRequest && this._data[key]) {
            callback(this._data[key])
        } else if (!info.NoNetPrompt) {
            ModuleManager.instance.showNetPrompt()
        }

        params.uid = userID
        params.time = Date.now()
        params.rand_str = Utility.instance.getMD5(params.time.toString())
        params.lang = LanguageManager.instance.current
        params.sign = HttpUtil.getSign(params)[0]
        let reqData = { url: GameConfig.ResServerAddr + url, data: JSON.stringify(params) }
        if(DEBUG){
            console.log("HTTP POST REQ:", reqData);
        }
        HttpUtil.http_post(reqData, (resp: any) => {
            ModuleManager.instance.hideNetPrompt()
            if (resp.code == 0) {
                if (!info.ForceRequest && this._data[key] && JSON.stringify(this._data[key]) == JSON.stringify(resp.data)) {
                    return
                }
                // let respData = info.WholeData ? resp : resp.data
                let respData = resp
                // this._data[key] = respData
                callback(respData)
                if (info.SuccessToast && resp.message) {
                    ModuleManager.instance.toastLong(resp.message)
                }
            } else {
                if (info.FailToast && resp.message) { ModuleManager.instance.toastLong(resp.message) }
                if (info.FailCallback) { callback(resp) }
            }
        }, () => {
            if (info.FailCallback) { callback(null) }
            ModuleManager.instance.hideNetPrompt()
        })
    }

    public Clear() {
        this._data = {}
    }

    public Report(type: ReportTypeName) {
    
    }
}

export const HttpDataModel = new _HttpDataModel()