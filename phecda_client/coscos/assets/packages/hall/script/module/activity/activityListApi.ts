import { _decorator } from 'cc';
import HttpUtil from '../../../../../script/framework/net/http_util';
import { HttpDataModel } from '../../model/HttpDataModel';
import { UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;

@ccclass('ActivityListAPI')
class _ActivityListAPI {

    private readonly URL = {
        getEventoShowTab: "/getEventShowTab",      
    }

    private post(target: any, url: string, params: any, callback?: (data: any) => void, toast?: boolean, force?: boolean) {
        HttpDataModel.Post({
            Target: target,
            Url: url,
            Params: params,
            Callback: callback,
            SuccessToast: toast,
            // UseCache: useCache,
            FailToast: true,
            ForceRequest: force
        })
    }

    //请求配置信息
    public requestEventoConfig(target: any, callback: (data: any) => void) {
        this.post(target, this.URL.getEventoShowTab, { uid: UserDataModel.GetCurrentUserID() }, callback)
    }
 
}

export const ActivityListAPI = new _ActivityListAPI()