
import { _decorator, Component, Node ,game,instantiate,Label,Sprite} from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import { ActivityRankRuleView } from './activityRankRule_view';
import AudioManager from '../../../../../script/manager/audio_manager';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import SpriteFrameHolder from '../../../../../script/utility/ui_extend/spriteframe_holder';
import EventManager from '../../../../../script/manager/event_manager';
import { HallModel } from '../../model/HallModel';
const { ccclass, property } = _decorator;


 
@ccclass('ActivityRankRule')
export class ActivityRankRule extends Module<ActivityRankRuleView, null> {

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/rank/activityRankRules";
        this.viewType = ActivityRankRuleView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onLoad() {
      
    }

    onInit() {
        this.view.rulesList.InitializeChild = { target: this, eventHandler: this.refreshRulesItem };
        EventManager.instance.on(CommonName.EVENT.RankHistory, this._updataRankInfo, this);
        this._rulesInfo();
    }

    onShow(data: any) {
       
    }

    onDestroy() {
        EventManager.instance.off(CommonName.EVENT.RankHistory, this._updataRankInfo, this);
    }

    private _updataRankInfo(info: any) {
        this.view.rules.active = true;
        this.view.rulesList.scrollView.scrollToTop();
        this.view.rulesList.scrollView.content.removeAllChildren();
        if (info == "close") {
            this._rulesInfo();
        }
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
            HallModel.listRankRules=msg.data.list;
            this.updateRulesList(msg.data.list);
        }
    }

    private _rulesInfo() {
        this.view.rules.active = true;
        this.view.rulesList.scrollView.scrollToTop();
        this.view.rulesList.scrollView.content.removeAllChildren();
        if (HallModel.listRankRules.length > 0) {
            this.updateRulesList(HallModel.listRankRules);
        } else {
            this._reqRankAwardCfg();
        }
    }

    //更新Rules列表
    async updateRulesList(list: Array<number>) {
        if (!this.view) return;
        this.view.rulesList.data = list;
        await this.view.rulesList.loadSlots(list.length);
        this?.view.rulesList?.scrollView.scrollToTop(0);

        let desc = instantiate(this.view.rulesDesc);
        desc.setParent(this.view.rulesList.scrollView.content);
    }

    //刷新Item
    private refreshRulesItem(idx: string, item: Node) {
        this.setRulesItem(idx, item);
    }

    private setRulesItem(idx: string, item: Node) {
        if (!HallModel.listRankRules[idx]) return;
        let rank = item.getChildByName("rank").getComponent(Label);
        let rankNum = HallModel.listRankRules[idx].rank;
        let sp = item.getChildByName("sp");
        if (rankNum < 4) {
            sp.active = true;
            let spRank = sp.getComponent(Sprite);
            spRank.spriteFrame = spRank.node.getComponent(SpriteFrameHolder).getSpriteFrameByKey(rankNum.toString());
            rank.node.active = false;
        }else{
            sp.active = false;
            rank.node.active = true;
        }
        rank.string = HallModel.listRankRules[idx].rank;
        let daily = item.getChildByName("daily").getComponent(Label);
        daily.string = HallModel.listRankRules[idx].daily_rate + "%";
        let weekly = item.getChildByName("weekly").getComponent(Label);
        weekly.string = HallModel.listRankRules[idx].weekly_rate + "%";
        let monthly = item.getChildByName("monthly").getComponent(Label);
        let monthly_rate = HallModel.listRankRules[idx].monthly_rate || 0;
        monthly.string = monthly_rate + "%";
    }
}


