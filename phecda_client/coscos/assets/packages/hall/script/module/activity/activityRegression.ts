
import { _decorator, instantiate,Button,Sprite } from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { ActivityRegressionView } from './activityRegression_view';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import EventManager from '../../../../../script/manager/event_manager';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { HallModel } from '../../model/HallModel';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { conmmon_http } from '../../../../../script/net/common_http';

const { ccclass, property } = _decorator;

const enum ActivityJumpType {
    czcj = 1,             //充值抽奖
    hglb = 2,             //回归礼包
    qdjl = 3,             //签到奖励
    lxcz = 4,             //连续充值
    ljcz = 5,             //累计充值
}
 
@ccclass('ActivityRegression')
export class ActivityRegression extends Module<ActivityRegressionView, null> {

    private jump_type = 0;
    private timeNum = 0;
    private listCount = 0

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/regression/activityRegression";
        this.viewType = ActivityRegressionView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this._clickBack, this);
        this.view.regressionList.scrollToTop();
        this.view.regressionList.content.removeAllChildren();
        this.updateTime();
        this.schedule(this.updateTime, 1);
        this._reqRegressionConfig();
        this.registerEvent(true);
        for(let child of this.view.node.children  ){
            child.active = false
        }
    }

    private registerEvent(reg: boolean = true) {
        let fun = reg ? "on" : "off"
        EventManager.instance[fun](CommonName.EVENT.UpdateRegressionMain, () => this._reqRegressionConfig(), this);
    }

    onDestroy() {
        let time=Utility.instance.getTimeStr(new Date());
        HallModel.SetLocalActivityTime("ActivityRegression", time);
        if(this.listCount > 1){
            EventManager.instance.dispatch(CommonName.EVENT.UpdateActivityPopUp);
        }
        EventManager.instance.dispatch(CommonName.EVENT.UpdateRegressionRedDot);
        conmmon_http.reqGetUserInfo(this, conmmon_http.rspUserInfo.bind(this));
        this.unscheduleAllCallbacks();
        this.registerEvent(false);
    }

    private _clickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityRegression);
    }

    //请求回归活动列表数据
    private _reqRegressionConfig() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getReturnBackList,
            Params: {},
            Callback: this._rspRegressionConfig.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //回归活动列表数据返回
    private _rspRegressionConfig(msg: any) {
        if (msg && msg.code == 0) {
            this._updateInfo(msg.data);
        }
    }

    private async _updateInfo(msg: any) {
        if (!this.view) return;
        let list = msg.list || [];
        this.listCount = list.length
        this.timeNum = msg.rest_time || 0;
        if(list.length == 1){
            let JumpSingle = ()=>{
                this.jump_type = list[0].act_type || 0
                if (this.timeNum <= 0) {
                    //活动已结束
                    ModuleManager.instance.toastLong("the event is over");
                    return;
                }
                this._jumpActivity()
            }
            await JumpSingle()           
            ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityRegression);
            return
        }
        for(let child of this.view.node.children  ){
            child.active = true
        }
        this.view.regressionList.scrollToTop();
        this.view.regressionList.content.removeAllChildren();
       
        this.updateTime();        
        for (let i = 0; i < list.length; i++) {
            let item = instantiate(this.view.listItem);
            item.setParent(this.view.regressionList.content);
            item.active = true;
            let sp = item.getChildByName("bg").getComponent(Sprite);
            if (list[i].act_picture.length > 0) {
                SpriteDataModel.SetSprite(sp, list[i].act_picture);
            }
            let red = item.getChildByName("red").getComponent(Sprite).node;
            red.active = list[i].pot_cnt > 0 ? true : false;
            let type = list[i].act_type || 0;
            let btn = item.getComponent(Button).node;
            Utility.instance.onButtonClick(btn, () => {
                this._clickActivity(type);
            }, this);
        }
    }

    private _clickActivity(type = 0) {
        this.jump_type = type;
        if (this.timeNum <= 0) {
            //活动已结束
            ModuleManager.instance.toastLong("the event is over");
            return;
        }
        this._jumpActivity();
    }

    private _jumpActivity() {
        if (this.jump_type == ActivityJumpType.czcj) {
            //充值抽奖
            ModuleManager.instance.showModule(CommonName.MODULE.ReturningTurntable);
        }
        else if (this.jump_type == ActivityJumpType.hglb) {
            //回归礼包
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityRegressionGiftPack);
        }
        else if (this.jump_type == ActivityJumpType.qdjl) {
            //签到奖励
            ModuleManager.instance.showModule(CommonName.MODULE.ReturningSignin);
        }
        else if (this.jump_type == ActivityJumpType.lxcz) {
            //连续充值
            ModuleManager.instance.showModule(CommonName.MODULE.ConsecutiveRrecharge);
        }
        else if (this.jump_type == ActivityJumpType.ljcz) {
            //累计充值
            ModuleManager.instance.showModule(CommonName.MODULE.CumulativeRrecharge);
        }
    }

    private updateTime() {
        if (this.timeNum > 0) {
            this.timeNum--
        }
        else {
            this.unschedule(this.updateTime)
        }

        let difference = this.timeNum * 1000
        let days = Math.floor(difference / (1000 * 60 * 60 * 24))
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((difference % (1000 * 60)) / 1000)
        this.view.lbl_time.string=`Remainging time: ${days} days ${hours} : ${minutes} : ${seconds} `
    }
}


