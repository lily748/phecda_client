
import { _decorator, Component, Node,instantiate ,Label,Sprite,ScrollView,game, find} from 'cc';
import { ActivityRankPopUpView } from './activityRankPopUp_view';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import SpriteFrameHolder from '../../../../../script/utility/ui_extend/spriteframe_holder';
import { HallModel } from '../../model/HallModel';
import EventManager from '../../../../../script/manager/event_manager';
const { ccclass, property } = _decorator;


 
@ccclass('ActivityRankPopUp')
export class ActivityRankPopUp extends Module<ActivityRankPopUpView, null> {

    private _timeNum = 0;
    private listRule = [];
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/rank/activityRankPopUp";
        this.viewType = ActivityRankPopUpView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onLoad() {
        
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this._clickBack, this);
        Utility.instance.onButtonClick(this.view.btnRank, this._clickRank, this);
        this.view.rulesList.InitializeChild = { target: this, eventHandler: this.refreshRuleItem };
        // let scrollView = this.view.rulesList.node.getComponent(ScrollView);
        // if (scrollView?.isValid) {
        //     scrollView.node.on(ScrollView.EventType.SCROLL_BEGAN, () => game.frameRate = 60, this);
        //     scrollView.node.on(ScrollView.EventType.SCROLL_ENDED, () => game.frameRate = 45, this);
        // }
        this.initToggle();
        this._reqRankAwardCfg();
    }

    onShow() {

    }

    onDestroy() {
        // game.frameRate = 45;
        this.unscheduleAllCallbacks();
    }

    private _clickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityRankPopUp);
        EventManager.instance.dispatch(CommonName.EVENT.UpdateActivityPopUp);
    }

    private _clickRank() {
        ModuleManager.instance.showModule(CommonName.MODULE.ActivityRank, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityRankPopUp);
            ModuleManager.instance.destroyModule(CommonName.MODULE.Hall);
        })
    }

    //请求排行榜奖励配置
    private _reqRankAwardCfg() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getRankAwardCfg,
            Params: {},
            Callback: this._rspRankAwardCfg.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //返回排行榜奖励配置
    private _rspRankAwardCfg(msg: any) {
        if (msg && msg.code == 0) {
            this.listRule = msg.data.list;
            if (this.listRule.length > 15) {
                this.listRule = this.listRule.slice(0, 15);
            }
            this._updateRules(msg.data);
            this.updateRuleList(this.listRule);
        }
    }


    //更新Rule列表
    async updateRuleList(list: Array<number>) {
        if (!this.view) return;
        this.view.rulesList.data = list;
        this.view.rulesList.isSetFrameRate = false
        await this.view.rulesList.loadSlots(list.length);
        this?.view.rulesList?.scrollView.scrollToTop(0);
    }

    //刷新Item
    private refreshRuleItem(idx: string, item: Node) {
        this.setRuleItem(idx, item);
    }

    private setRuleItem(idx: string, item: Node) {
        if (!this.listRule[idx]) return;
        let rank = item.getChildByName("rank").getComponent(Label);
        let rankNum = this.listRule[idx].rank;
        let bg = item.getChildByName("bg");
        if (rankNum < 4) {
            let spRank = bg.getComponent(Sprite);
            spRank.spriteFrame = spRank.node.getComponent(SpriteFrameHolder).getSpriteFrameByKey(rankNum.toString());
            rank.node.active = false;
        }else{
            rank.node.active = true;
        }
        rank.string = this.listRule[idx].rank;
        let daily = item.getChildByName("daily").getComponent(Label);
        daily.string = this.listRule[idx].daily_rate + "%";
        let weekly = item.getChildByName("weekly").getComponent(Label);
        weekly.string = this.listRule[idx].weekly_rate + "%";
        let monthly = item.getChildByName("monthly").getComponent(Label);
        let monthly_rate = this.listRule[idx].monthly_rate || 0;
        monthly.string = monthly_rate + "%";
    }

    private _updateRules(msg: any) {
        if (!this.view) return;
        this.view.rulesList.scrollView.content.removeAllChildren();
        let coin = find("top/coin", this.view.historyInfo).getComponent(Label);
        coin.string = "₹" + Utility.instance.numThousandsFormat((msg.jackpot / 100).toFixed(2));
        this._timeNum = msg.rest_time;
        this.updateTime()
        this.schedule(this.updateTime,1);
        let desc = find("desc", this.view.historyInfo).getComponent(Label);
        desc.string=msg.desc;
    }

    private updateTime() {
        if (this._timeNum > 0) {
            this._timeNum--;
            let strTime = Utility.instance.formatCountDownTime(this._timeNum);
            this.view.lblTime.getComponent(Label).string = "Ends in " + strTime
        } else {
            this.unschedule(this.updateTime);
        }
    }

    private initToggle(){
        let time=Utility.instance.getTimeStr(new Date());
        Utility.instance.onToggleClick(this.view.isShow, () => {
            if (this.view.isShow.isChecked) {
                HallModel.SetLocalActivityTime("AcitvityRankPopUp", time);
            } else {
                HallModel.SetLocalActivityTime("AcitvityRankPopUp", "");
            }
        }, this)
    }
}


