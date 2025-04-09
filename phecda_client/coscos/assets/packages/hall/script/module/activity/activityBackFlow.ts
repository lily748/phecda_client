
import { _decorator, Component, Node,instantiate,Label ,find, tween} from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { ActivityBackFlowView } from './activityBackFlow_view';
import { conmmon_http } from '../../../../../script/net/common_http';
import EventManager from '../../../../../script/manager/event_manager';

const { ccclass, property } = _decorator;


 
@ccclass('ActivityBackFlow')
export class ActivityBackFlow extends Module<ActivityBackFlowView, null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/activityBackFlow";
        this.viewType = ActivityBackFlowView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onLoad() {
        
    }

    onShow(data: any) {
        // 自动领取补水
        this._reqCollectNewUserWaterReward();
        let coinNum = Utility.instance.numThousandsFormat((data / 100).toFixed(2));
        this.view.lblCoin.string = "₹" + coinNum;
        this.view.lblRecive.string =  "₹" + coinNum;
        this.view.richTip.string = `<color=#000000>Dear player, we have prepared 
  a <color=#9c1727>₹${coinNum}</color> surprise reward for
   you! Click now to receive it!</color>`;

        
        
    }

    onInit() {
        // Utility.instance.onButtonClick(this.view.btnBack, this._clickBack, this);
        Utility.instance.onButtonClick(this.view.btnInfo, this.closeBtn, this);
    }

    onDestroy() {
        conmmon_http.reqGetUserInfo(this, conmmon_http.rspUserInfo.bind(this));
    }

    private _clickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityBackFlow);
    }

    // private __clickInfo() {
    //     // this._reqNewUserWaterRewardList();
    //     this._reqCollectNewUserWaterReward();

    // }

    playAnim() {
        tween(this.view.light).by(10, {angle: 360}).repeatForever().start();
    }

    
    private _updatemyRewards(msg: any) {
        if (!this.view) return;
        this.view.backFlowList.node.active=true;
        this.view.backFlowList.scrollToTop();
        this.view.backFlowList.content.removeAllChildren();
        let list = msg.list;
        if (!list) return;
        for (let i = 0; i < list.length; i++) {
            let item = instantiate(this.view.listItem);
            item.setParent(this.view.backFlowList.content);
            item.active = true;
            let time = item.getChildByName("time").getComponent(Label);       
            time.string = Utility.instance.getTimeDateStr(list[i].ts);
            let coin = item.getChildByName("coin").getComponent(Label);       
            coin.string = "₹" + Utility.instance.numThousandsFormat((list[i].coin / 100).toFixed(2));
        }

        if (list.length == 0) {
            let tips = find("tips", this.view.backFlowList.node);
            tips.active = true;
        }
    }

    // 领取新手补水奖励(手动领取)
    private _reqCollectNewUserWaterReward() {
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.collectNewUserWaterReward,
            Params: {},
            Callback: this._rspCollectNewUserWaterReward.bind(this),
            ForceRequest: true,
            FailToast: false,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspCollectNewUserWaterReward(msg: any) {
        console.log("rspCollectNewuserWaterReward: ", msg);
        if (msg && msg.code == 0) {
            EventManager.instance.dispatch(CommonName.EVENT.Update_USER_COIN);
        }
    }


    private closeBtn() {
        this.view.info.active = false;
        this.view.reciveTip.active = true;
        this.playAnim();
        this.scheduleOnce(()=>{
            ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityBackFlow);
        }, 2)
    }

//     //请求新手补水奖励记录列表
//     private _reqNewUserWaterRewardList() {
//         let info: PostData = {
//             Target: this,
//             Url: Http_Define.getNewUserWaterRewardList,
//             Params: {},
//             Callback: this._rspNewUserWaterRewardList.bind(this),
//             ForceRequest: true,
//             FailToast: true,
//             FailCallback: true,
//         }
//         HttpDataModel.Post(info);
//     }

//     //返回新手补水奖励记录列表
//     private _rspNewUserWaterRewardList(msg: any) {
//         if (msg && msg.code == 0) {
//             this._updatemyRewards(msg.data);
//         }
//     }
}


