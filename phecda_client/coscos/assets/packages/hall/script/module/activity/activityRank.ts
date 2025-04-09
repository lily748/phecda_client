
import { _decorator, Component, Node, game, Toggle, find, Label, instantiate,Sprite,ScrollView,tween} from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import { ActivityRankView } from './activityRank_view';
import AudioManager from '../../../../../script/manager/audio_manager';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import SpriteFrameHolder from '../../../../../script/utility/ui_extend/spriteframe_holder';
import EventManager from '../../../../../script/manager/event_manager';
import { HallModel } from '../../model/HallModel';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { GameConfig } from '../../../../../script/com/game_config';
const { ccclass, property } = _decorator;


 
@ccclass('ActivityRank')
export class ActivityRank extends Module<ActivityRankView, null> {

    private rankingType = 1;
    private getJumpData = "";
    private listRank = [];
    private infoType = 1;
    private amount: number = 0
    private listRankDaily: any = {};
    private listRankWeek: any = {};
    private listRankMonthly: any = {};
    private listMyRewards: any = {};
    private _totalSize = 0;         //总条数
    private _pageSize = 20;         //每一页条数
    private _totalPage = 1;         //总页数
    private _currentPage = 0;       //当前页数

    
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/rank/activityRank";
        this.viewType = ActivityRankView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onLoad() {
        this.scheduleOnce(() => { game.frameRate = 60 }, 1);
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this._clickBack, this);
        Utility.instance.onButtonClick(this.view.btnHistory, this._clickHistory, this);
        this.view.topToggleGroup.setListener((sender: Toggle) => { this.onTopChecked(sender.node.name) });
        this.view.rankToggleGroup.setListener((sender: Toggle) => { this.onRankChecked(sender.node.name) });
        this.view.rankingList.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this._updateRankPageInfo, this);
        EventManager.instance.on(CommonName.EVENT.RankHistory, this._updataRankInfo, this);
        this._initInfo();
        this._rankingInfo();
        this.schedule(this._getNewestJackpot, 5);
    }

    private _getNewestJackpot() {
        if (this.view &&this.view.ranking.active) {
            this._reqNewestJackpot(this.rankingType);
        }
    }

    private _updataRankInfo(info: any) {
        this._initInfo();
        if (info == "close") {
            this._rankingInfo(this.rankingType);
            if (this.infoType == 3) {
                this._myRewardsInfo();
            }
        }
    }

    private _initInfo(isActive: boolean = true) {
        if (isActive) {
            this._initActive();
        }
        this._currentPage = 0;
        this.listRank = [];
        this.amount = 0;
        this.view.rankingList.stopAutoScroll();
        this.view.rankingList.scrollToTop();
    }

    private _updateRankPageInfo(){
        if (this._currentPage < this._totalPage) {
            this._currentPage++;
            let list= this.listRank.slice(this._currentPage*this._pageSize, this._currentPage*this._pageSize+this._pageSize);
            this._updateRankListInfo(list);
        }
    }

    onShow(data: any) {
        if(data){
            this.getJumpData=data;
        }
    }

    onDestroy() {
        game.frameRate = 45;
        HallModel.listRankRules=[];
        this.unscheduleAllCallbacks();
        EventManager.instance.off(CommonName.EVENT.RankHistory, this._updataRankInfo, this);
    }

    private _clickBack() {
        if (this.getJumpData == "Promo") {
            ModuleManager.instance.showModule(CommonName.MODULE.Promotion, "Promo", () => {
                ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityRank);
            });
        } else {
            ModuleManager.instance.showModule(CommonName.MODULE.Hall, null, () => {
                ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityRank);
            });
        }
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityRankRule);
    }

    private _clickHistory() {
        this._initInfo();
        ModuleManager.instance.showModule(CommonName.MODULE.ActivityRankHistory,this.infoType);
    }

    private _initActive() {
        this.view.ranking.active = false;
        this.view.rankingList.content.removeAllChildren();
        this.view.rankingList.scrollToTop();
        this.view.myRewards.active = false;
        this.view.myRewardsList.scrollToTop();
        this.view.myRewardsList.content.removeAllChildren();
    }

    private _updateRankTop3(list: any) {
        this._initTopRank();
        if (!list) return;
        list = list.length > 3 ? list.slice(0, 3) : list;
        for (let i = 0; i < list.length; i++) {
            let rankNode = find("info/rank/rank" + (i + 1), this.view.ranking);
            if (!rankNode) continue;
            find("id", rankNode).getComponent(Label).string = Utility.instance.formatUserID(list[i].uid);
            find("reward", rankNode).getComponent(Label).string = "Reward:" + list[i].reward_rate + "%";
            find("bet", rankNode).getComponent(Label).string = "Bets:₹" + Utility.instance.numThousandsFormat((list[i].total_bets / 100).toFixed(2));
            let head = find("center/animation/sp" + (i + 1), this.view.ranking).getComponent(Sprite);
            let avatar_url = list[i].avatar || "";
            SpriteDataModel.SetHead(head, avatar_url);
        }
    }

    private _rankingInfo(type = 1) {
        this.view.ranking.active = true;
        this.view.rankingList.scrollToTop();
        this.rankingType = type;
        if (this.rankingType == 1) {
            if (this.listRankDaily.list) {
                this._updateRankData(this.listRankDaily);
            } else {
                this._reqRankList(this.rankingType);
            }
        } else if (this.rankingType == 2) {
            if (this.listRankWeek.list) {
                this._updateRankData(this.listRankWeek);
            } else {
                this._reqRankList(this.rankingType);
            }
        } else if (this.rankingType == 3) {
            if (this.listRankMonthly.list) {
                this._updateRankData(this.listRankMonthly);
            } else {
                this._reqRankList(this.rankingType);
            }
        }
    }

    private _updateRank(msg: any) {
        if (!this.view) return;
        this.view.rankingList.content.removeAllChildren();
        // let coin = find("center/coin", this.view.ranking).getComponent(Label);
        // coin.string = "₹" + Utility.instance.numThousandsFormat((msg.jackpot / 100).toFixed(2));
        this.amount=msg.jackpot;
        this._updateAmount(this.amount, msg.jackpot);
        let tips = find("center/tips/msg", this.view.ranking).getComponent(Label);
        tips.string = msg.reward_rate + "%" + " of total bets by all 4pgame players.";
        this._updateRankTop3(msg.list);
        let myself = find("myself", this.view.ranking);
        let lblRank = find("rank", myself).getComponent(Label);
        lblRank.string = msg.my_rank_str || "";
        find("bets", myself).getComponent(Label).string = "₹" + Utility.instance.numThousandsFormat((msg.myrank.total_bets / 100).toFixed(2));
        find("reward", myself).getComponent(Label).string = msg.myrank.reward_rate + "%";
        find("coin", myself).getComponent(Label).string = "₹" + Utility.instance.numThousandsFormat((msg.myrank.rank_left / 100).toFixed(2));
        let head = find("sp1" , myself).getComponent(Sprite);
        let avatar_url = msg.myrank.avatar || "";
        SpriteDataModel.SetHead(head, avatar_url);
    }

    private _updateRankListInfo(list: any){
        if (!this.view) return;
        for (let i = 0; i < list.length; i++) {
            let rank_num=list[i].rank;
            if(rank_num<4){
                continue;
            }
            let item = instantiate(this.view.rankingItem);
            item.setParent(this.view.rankingList.content);
            item.active=true;
            let rank = item.getChildByName("rank").getComponent(Label);
            rank.string = rank_num;
            let id = item.getChildByName("id").getComponent(Label);
            id.string = Utility.instance.formatUserID(list[i].uid);
            let reward = item.getChildByName("reward").getComponent(Label);
            reward.string = "Reward:" + list[i].reward_rate + "%";
            let bets = item.getChildByName("bets").getComponent(Label);
            bets.string = "₹" + Utility.instance.numThousandsFormat((list[i].total_bets / 100).toFixed(2));
            let head = item.getChildByName("head").getComponent(Sprite);
            let avatar_url = list[i].avatar || "";
            SpriteDataModel.SetHead(head, avatar_url);
        }
    }

    private _setPage(totalsize:number){
        this._totalSize=totalsize;
        this._totalPage=Math.ceil(this._totalSize/this._pageSize);
    }

    private _myRewardsInfo() {
        this.view.myRewards.active = true;
        this.view.myRewardsList.scrollToTop();
        if(this.listMyRewards.list){
            this._updatemyRewards(this.listMyRewards);
        }else{
            this._reqMyRankRewards();
        }
    }

    private _updatemyRewards(msg: any) {
        if (!this.view) return;
        this.view.myRewardsList.content.removeAllChildren();
        let list = msg.list;
        if (!list) return;
        for (let i = 0; i < list.length; i++) {
            let item = instantiate(this.view.myRewardsListItem);
            item.setParent(this.view.myRewardsList.content);
            item.active = true;
            let time = item.getChildByName("time").getComponent(Label);
            time.string = this._getTimeDate(list[i].reward_ts);
            let reward = item.getChildByName("reward").getComponent(Label);
            reward.string = "Reward:" + list[i].reward_rate + "%";
            let reward_2 = item.getChildByName("reward_2").getComponent(Label);//
            reward_2.string = "₹" + Utility.instance.numThousandsFormat((list[i].reward_coin / 100).toFixed(2));
            let reward_3 = item.getChildByName("reward_3").getComponent(Label);
            reward_3.string = "₹" + Utility.instance.numThousandsFormat((list[i].total_bets / 100).toFixed(2));
        }

        if(list.length==0){
            let tips=find("tips", this.view.myRewards);
            tips.active=true;
        }
    }

    private onTopChecked(name: string) {
        AudioManager.instance.playButtonSound();
        switch (name) {
            case "rank":
                ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityRankRule);
                this.view.myRewards.active = false;
                this.view.ranking.active = true;
                this.view.btnHistory.active=true;
                this.infoType = 1;
                break;
            case "rules":
                ModuleManager.instance.showModule(CommonName.MODULE.ActivityRankRule, null, () => {});
                this.view.ranking.active = false;
                this.view.myRewards.active = false;
                this.view.btnHistory.active=false;
                this.infoType = 2;
                break;
            case "myRewards":
                ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityRankRule);
                this.view.ranking.active = false;
                this.view.btnHistory.active=false;
                this.infoType = 3;
                this._myRewardsInfo();
                break;
        }
    }

    private onRankChecked(name: string) {
        this._initInfo(false);
        switch (name) {
            case "daily":
                this._rankingInfo(1);
                break;
            case "weekly":
                this._rankingInfo(2);
                break;
            case "monthly":
                this._rankingInfo(3);
                break;
        }
    }

    //请求排行榜历史奖励
    private _reqMyRankRewards() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getMyRankRewards,
            Params: {},
            Callback: this._rspMyRankRewards.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //返回排行榜历史奖励
    private _rspMyRankRewards(msg: any) {
        if (msg && msg.code == 0) {
            this.listMyRewards=msg.data;
            this._updatemyRewards(msg.data);
        }
    }


    //请求排行榜列表 类型: 1-每日 2-每周
    private _reqRankList(type: number) {
        this.rankingType = type;
        let params = {
            type: type,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getRankList,
            Params: params,
            Callback: this._rspRankList.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //返回排行榜列表
    private _rspRankList(msg: any) {
        if (msg && msg.code == 0) {
            if (msg.data.type == 1) {
                this.listRankDaily = msg.data;
            }
            else if (msg.data.type == 2) {
                this.listRankWeek = msg.data;
            }
            else if (msg.data.type == 3) {
                this.listRankMonthly = msg.data;
            }
            this._updateRankData(msg.data);
        }
    }

    private _updateRankData(msg: any) {
        let listInfo = msg.list;
        this.listRank = listInfo;
        this._setPage(listInfo.length);
        this._updateRank(msg);

        if (listInfo.length > 20) {
            listInfo = listInfo.slice(0, 20);
        }
        this._updateRankListInfo(listInfo);
    }

     /**
     * 时间戳转换日期
     * @param timestamp 时间戳
     * @returns 
     */
     private _getTimeDate(timestamp: any) {
        let date = new Date(timestamp * 1000);
        let year = date.getFullYear() < 10 ? "0" + date.getFullYear() : "" + date.getFullYear();
        let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : "" + (date.getMonth() + 1);
        let day = date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();
        let hours = date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours();
        let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : "" + date.getMinutes();
        let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : "" + date.getSeconds();
        return `${year}-${month}-${day}  ${hours}:${minutes}:${seconds}`;
    }

    private _initTopRank() {
        for (let i = 0; i < 3; i++) {
            let rankNode = find("info/rank/rank" + (i + 1), this.view.ranking);
            find("id", rankNode).getComponent(Label).string = "";
            find("reward", rankNode).getComponent(Label).string = "";
            find("bet", rankNode).getComponent(Label).string = "";
            let spRank = find("center/animation/sp" + (i + 1), this.view.ranking).getComponent(Sprite);
            SpriteDataModel.SetHead(spRank, "")
        }
    }

    /**
    * 更新amount
    */
    private _updateAmount(from: number, add: number) {
        if(!this.view) return;
        if (add == 0) {
            this.view.lblAmount.string = "₹" + Utility.instance.numThousandsFormat((from / 100).toFixed(2));
            return
        }
        let obj = { progress: 0 }
        let now = 0
        tween(obj)
            .stop()
            .to(
                0.5,
                { progress: 1 }
                , {
                    progress: (start: number, end: number, current: number, ratio: number) => {
                        if (start == end) {
                            return start
                        }
                        if (this?.view?.lblAmount?.isValid) {
                            now = from + ratio * 100
                            this.view.lblAmount.string = "₹" + Utility.instance.numThousandsFormat((now / 100).toFixed(2))
                        }
                        return current
                    }
                }
            )
            .call(() => {
                if (this?.view?.lblAmount?.isValid) {
                    this.amount = add;
                    this.view.lblAmount.string = "₹" + Utility.instance.numThousandsFormat((add / 100).toFixed(2));
                }
            })
            .start();
    }

    //请求排行榜最新jackpot 类型: 1-每日 2-每周
    private _reqNewestJackpot(type: number) {
        let params = {
            type: type,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getNewestJackpot,
            Params: params,
            Callback: this._rspNewestJackpot.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    //返回排行榜列表
    private _rspNewestJackpot(msg: any) {
        if (msg && msg.code == 0) {
            this._updateAmount(this.amount, msg.data.jackpot);
        }
    }
}

