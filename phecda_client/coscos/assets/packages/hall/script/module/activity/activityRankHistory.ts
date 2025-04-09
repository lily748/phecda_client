
import { _decorator, Component, Node,instantiate,Label,find,Toggle,Sprite } from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import { ActivityRankHistoryView } from './activityRankHistory_view';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import SpriteFrameHolder from '../../../../../script/utility/ui_extend/spriteframe_holder';
import EventManager from '../../../../../script/manager/event_manager';
const { ccclass, property } = _decorator;

 
@ccclass('ActivityRankHistory')
export class ActivityRankHistory extends Module<ActivityRankHistoryView, null> {
   
    private rankingType = 1;
    private listHistory = [];

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/rank/activityRankHistory";
        this.viewType = ActivityRankHistoryView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onLoad() {
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this._clickBack, this);
        this.view.topToggleGroup.setListener((sender: Toggle) => { this.onTopChecked(sender.node.name) });
        this.view.historyList.InitializeChild = { target: this, eventHandler: this.refreshHistoryItem };
        EventManager.instance.dispatch(CommonName.EVENT.RankHistory, "show");
        this._rankHistroyInfo(this.rankingType);
    }

    onShow(data:any) {
       
    }

    onDestroy() {
        EventManager.instance.dispatch(CommonName.EVENT.RankHistory,"close");
    }

    private _clickBack() {
        
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityRankHistory);
    }

    private _rankHistroyInfo(type:any) {
        this.view.historyList.scrollView.stopAutoScroll();
        this.view.historyList.scrollView.scrollToTop();
        this._reqRankListHis(type);
    }

    private onTopChecked(name: string) {
        switch (name) {
            case "daily":
                this._rankHistroyInfo(1);
                break;
            case "week":
                this._rankHistroyInfo(2);
                break;
            case "month":
                this._rankHistroyInfo(3);
                break;
        }
    }

    //更新History列表
    async updateHistoryList(list: Array<number>) {
        if (!this.view) return;
        this.view.historyList.data = list;
        await this.view.historyList.loadSlots(list.length);
        this?.view.historyList?.scrollView.scrollToTop(0);
    }

    //刷新Item
    private refreshHistoryItem(idx: string, item: Node) {
        this.setHistoryItem(idx, item);
    }

    private setHistoryItem(idx: string, item: Node) {
        if (!this.listHistory[idx]) return;
        let rank = item.getChildByName("rank").getComponent(Label);
        let rankNum = this.listHistory[idx].rank;
        let sp = item.getChildByName("sp");
        if (rankNum < 4) {
            sp.active = true;
            let spRank = sp.getComponent(Sprite);
            spRank.spriteFrame = spRank.node.getComponent(SpriteFrameHolder).getSpriteFrameByKey(rankNum.toString());
            rank.node.active = false;
        } else {
            sp.active = false;
            rank.node.active = true;
        }
        rank.string = this.listHistory[idx].rank;
        let id = item.getChildByName("phone").getComponent(Label);
        id.string = Utility.instance.formatUserID(this.listHistory[idx].uid);
        let bets = item.getChildByName("bets").getComponent(Label);
        bets.string = "₹" + Utility.instance.numThousandsFormat((this.listHistory[idx].total_bets / 100).toFixed(2));
        let rewards = item.getChildByName("rewards").getComponent(Label);
        rewards.string = "₹" + Utility.instance.numThousandsFormat((this.listHistory[idx].reward_coin / 100).toFixed(2));
    }

    //请求排行榜历史列表 1-每日 2-每周
    private _reqRankListHis(type: number) {
        this.rankingType = type;
        let params = {
            type: type,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getRankListHis,
            Params: params,
            Callback: this._rspRankListHis.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //返回排行榜历史列表
    private _rspRankListHis(msg: any) {
        if (msg && msg.code == 0) {
            this._updateHistory(msg.data);
            let list = msg.data.list;
            if (list.length > 100) {
                list = list.slice(0, 100);
            }
            this.listHistory=list;
            this.updateHistoryList(list);
        }
    }

    private _updateHistory(msg: any) {
        if (!this.view) return;
        this.view.historyList.scrollView.content.removeAllChildren();
        let coin = find("coin", this.view.top).getComponent(Label);
        coin.string = "₹" + Utility.instance.numThousandsFormat((msg.jackpot / 100).toFixed(2));
    }
}


