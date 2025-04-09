import { _decorator } from 'cc';
import { HttpDataModel } from '../../model/HttpDataModel';
const { ccclass, property } = _decorator;

interface PostParams {
    uid?: number,    //用户id
    time?: number,   //时间戳
    rand_str?: string,   //随机字符串
    lang?: string,  //语言
    sign?: string,  //签名
    p_user_code?: string,   //上级邀请码
    page?: number,  //第几页
    pageSize?: number,  //每页条数
    day?: string,    //日期
    s_uid?: string, //下级ID
    type?: string,  //分享类型
}

@ccclass('PromotionAPI')
class _PromotionAPI {

    private readonly URL = {
        PromotionInfo: "/pro/getProInfo",
        BindLeader: "/pro/bindPUser",
        BonusRecord: "/pro/getRewardLog",
        Withdraw: "/pro/extractReward",
        Underling: "/pro/getUserList",
        BonusDetail: "/pro/getDayRewardLog",
        ContributionDetail: "/pro/getUserLog",
        WithdrawRecord: "/pro/extractRewardLog",
        Share: "/pro/shareReward",
    }

    private rules: string = ""
    private myInvites: string = "0"
    private totalBonus: string = "0"

    private myPromotionData: any

    private post(target: any, url: string, params: PostParams, callback?: (data: any) => void, sucToast?: boolean, force?: boolean, failToast?: boolean) {
        // HttpDataModel.Post({
        //     Target: target,
        //     Url: url,
        //     Params: params,
        //     Callback: callback,
        //     SuccessToast: sucToast,
        //     FailToast: failToast,
        //     ForceRequest: force
        // })
    }

    //请求我的推广信息
    public requestMyPromotionInfo(target: any, callback: (data: any) => void) {
        this.post(target, this.URL.PromotionInfo, {}, (data) => {
            this.myPromotionData = data
            if (data.shareInfo && data.shareInfo.length > 0) {
                this.rules = data.shareInfo[data.shareInfo.length - 1].infoStr
            }
            this.myInvites = data.TotalInviteUserNum
            this.totalBonus = (parseFloat(data.TotalReward) + parseFloat(data.DayReward)).toFixed(2)
            callback && callback(data)
        }, false, false, true)
    }

    public getMyPromotion() { return this.myPromotionData }

    public getPromotionRules(): string { return this.rules }

    public getMyInvites(): string { return this.myInvites }

    public getTotalBonus(): string { return this.totalBonus }

    //请求绑定上级
    public requestBindLeader(target: any, leaderID: string, callback: (data: any) => void, sucToast: boolean = true, failToast: boolean = true) {
        let params: PostParams = { p_user_code: leaderID }
        let cb = () => {
            if (this.myPromotionData) this.myPromotionData.PCode = leaderID
            callback && callback(leaderID)
        }
        this.post(target, this.URL.BindLeader, params, cb, sucToast, true, failToast)
    }

    //请求提取奖励
    public requestWithdraw(target: any, callback: (data: any) => void) {
        let params: PostParams = {}
        this.post(target, this.URL.Withdraw, params, callback, true, true, true)
    }

    //请求奖励记录
    public requestBonusRecord(target: any, page: number, pageSize: number, callback: (data: any) => void) {
        let params: PostParams = { page: page, pageSize: pageSize }
        this.post(target, this.URL.BonusRecord, params, callback, false, false, true)
    }

    //请求下级贡献
    public requestUnderlingContribution(target: any, page: number, pageSize: number, callback: (data: any) => void) {
        let params: PostParams = { page: page, pageSize: pageSize }
        this.post(target, this.URL.Underling, params, callback, false, false, true)
    }

    //请求奖励详情
    public requestBonusDetail(target: any, day: string, page: number, pageSize: number, callback: (data: any) => void) {
        let params: PostParams = { day: day, page: page, pageSize: pageSize }
        this.post(target, this.URL.BonusDetail, params, callback, false, false, true)
    }

    //请求下级贡献详情
    public requestContributionDetail(target: any, userID: string, page: number, pageSize: number, callback: (data: any) => void) {
        let params: PostParams = { s_uid: userID, page: page, pageSize: pageSize }
        this.post(target, this.URL.ContributionDetail, params, callback, false, false, true)
    }

    //请求提取记录
    public requestWithdrawRecord(target: any, page: number, pageSize: number, callback: (data: any) => void) {
        let params: PostParams = { page: page, pageSize: pageSize }
        this.post(target, this.URL.WithdrawRecord, params, callback, false, false, true)
    }

    //请求获取分享奖励
    public requestGetShareReward(target: any, type: string) {
        this.post(target, this.URL.Share, { type: type })
    }
}

export const PromotionAPI = new _PromotionAPI()