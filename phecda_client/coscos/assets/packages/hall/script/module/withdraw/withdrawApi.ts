import { _decorator } from 'cc';
import Utility from '../../../../../script/utility/utility';
import { AdjustModel } from '../../model/AdjustModel';
import { HttpDataModel } from '../../model/HttpDataModel';
import { UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;

@ccclass('WithdrawAPI')
class _WithdrawAPI {

    private readonly URL = {
        GetConfig: "/pay/getWithdrawalConfig",
        GetBankList: "/pay/getBankList",
        BindBankCard: "/pay/new/bindUserBankV2",
        Withdraw: "/pay/createWithdrawalOrder",
        WithdrawRecord: "/pay/getUserWithdrawalOrderList",
        FlowDetail: "/pay/getFlowLimitLog",
        Description: "/pay/getWithdrawalTips",
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

    //数字格式化
    public numberFormat(num: number | string): string {
        return "" + num//Utility.instance.numThousandsFormat(num.toString())
    }

    //请求配置信息
    public requestConfig(target: any, callback: (data: any) => void) {
        this.post(target, this.URL.GetConfig, { uid: UserDataModel.GetCurrentUserID() }, callback)
    }

    //请求银行卡列表
    public requsetBankList(target: any, callback: (data: any) => void) {
        this.post(target, this.URL.GetBankList, {}, callback, false)
    }

    //请求绑定银行卡
    public requestBindBankCard(target: any, params: {}, callback: (data: any) => void) {
        this.post(target, this.URL.BindBankCard, params, callback, true, true)
    }

    //请求提现
    public requestWithdraw(target: any, params: {}, callback: (data: any) => void) {
        AdjustModel.Instance.TrackEvent("Withraw_success")
        this.post(target, this.URL.Withdraw, params, callback, true, true)
    }

    //请求提现记录
    public requestWithdrawRecord(target: any, params: {}, callback: (data: any) => void) {
        this.post(target, this.URL.WithdrawRecord, params, callback)
    }

    //请求提现记录
    public requestFlowDetail(target: any, params: {}, callback: (data: any) => void) {
        this.post(target, this.URL.FlowDetail, params, callback)
    }

    //请示提款说明
    public requestDescription(target: any, callback: (data: any) => void) {
        let params: any = { group_id: UserDataModel.GetCurrentUser().UserData.LianyunID }
        this.post(target, this.URL.Description, params, callback)
    }
}

export const WithdrawAPI = new _WithdrawAPI()