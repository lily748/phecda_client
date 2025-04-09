
import { _decorator, Component, Node,Label } from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import CommonName from '../../model/CommonName';
import { ActivityFirstChargeView } from './activityFirstCharge_view';
import { HallModel } from '../../model/HallModel';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import EventManager from '../../../../../script/manager/event_manager';

const { ccclass, property } = _decorator;


 
@ccclass('ActivityFirstCharge')
export class ActivityFirstCharge extends Module<ActivityFirstChargeView, null> {

    private _timeNum = 0;

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/activityFirstCharge";
        this.viewType = ActivityFirstChargeView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onLoad() {

    }

    onShow(data: any) {
        this.updateInfo(data.data_url, data.rest_time);
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this._clickBack, this);
        Utility.instance.onButtonClick(this.view.btnDeposit, this._clickDeposit, this);
        this._initToggle();
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }

    private _clickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityFirstCharge);
        EventManager.instance.dispatch(CommonName.EVENT.UpdateActivityPopUp);
    }

    private _clickDeposit() {
        HallModel.isFirstCharg=true;
        ModuleManager.instance.showModule(CommonName.MODULE.Recharge, CommonName.MODULE.Hall, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityFirstCharge);
            ModuleManager.instance.destroyModule(CommonName.MODULE.Hall);
        })
    }

    private _initToggle(){
        let time=Utility.instance.getTimeStr(new Date());
        Utility.instance.onToggleClick(this.view.isShow, () => {
            if (this.view.isShow.isChecked) {
                HallModel.SetLocalActivityTime("ActivityFirstCharge",time);
            } else {
                HallModel.SetLocalActivityTime("ActivityFirstCharge","");
            }
        }, this)
    }

    private updateTime() {
        if (this._timeNum > 0) {
            this._timeNum--;
            let strTime = Utility.instance.formatCountDownTime(this._timeNum);
            this.view.lblTime.getComponent(Label).string = strTime;
        } else {
            this.unschedule(this.updateTime);
        }
    }

    private updateInfo(url: string, time: number) {
        if(url.length>0){
            SpriteDataModel.SetSprite(this.view.spInfo, url);
        }
        this._timeNum = time;
        this.updateTime();
        this.schedule(this.updateTime,1);
    }
}

