import { _decorator } from 'cc';
import { GameConfig } from '../../../../../script/com/game_config';
import { HttpDataModel } from '../../model/HttpDataModel';
const { ccclass, property } = _decorator;

@ccclass('RechargeAPI')
class _RechargeAPI {

    private readonly URL = {
        GetConfig: "/pay/getWithdrawalConfig",
        GetBankList: "/pay/getBankList",
        BindBankCard: "/pay/bindUserBank",
        Withdraw: "/pay/createWithdrawalOrder",
        WithdrawRecord: "/pay/getUserWithdrawalOrderList",
        FlowDetail: "/pay/getFlowLimitLog",
        Description: "/pay/getWithdrawalTips",
    }

    private post(target: any, url: string, params: any, callback?: (data: any) => void, toast?: boolean, force?: boolean, wholeData?: boolean) {
        HttpDataModel.Post({
            Target: target,
            Url: url,
            Params: params,
            Callback: callback,
            SuccessToast: toast,
            FailToast: true,
            ForceRequest: force,
            WholeData: wholeData
        })
    }

    public RequestShopConfigNew(target: any, callback: (data: any) => void) {
        this.post(target, "/pay/getConfigV2", null, callback, false, true)
    }

    public RequestShopActivityNew(target: any, callback: (data: any) => void) {
        this.post(target, "/pay/getActivityGoodsConfig", null, callback, false, true)
    }


    public RequestBrowserRechargeNew(target: any, params: any, callback: (data: any) => void) {
        this.post(target, "/pay/new/createOrderV2", params, callback, false, true)
    }

    public RequestConfig(target: any, callback: (data: any) => void) {
        let params: any = { area_id: GameConfig.GameSiteID }
        this.post(target, "/pay/getConfig", params, callback, false, false, true)
    }

    public RequestRecord(target: any, page: number, pageSize: number, callback: (data: any) => void) {
        let params = {
            page: page,
            pageSize: pageSize,
        }
        this.post(target, "/pay/getPayOrderList", params, callback)
    }

    public RequestBrowserRecharge(target: any, url: string, params: any, callback: (data: any) => void) {
        this.post(target, url, params, callback, false, true)
    }

    public RequestTransferBankInfo(target: any, url: string, params: any, callback: (data: any) => void) {
        this.post(target, url, params, callback, false, true)
    }

    public RequestCheckTransferOrder(target: any, order: number, callback: (data: any) => void) {
        this.post(target, "/pay/getOrderStatus", { order_sn: order }, callback, true, true)
    }
}

export const RechargeAPI = new _RechargeAPI()