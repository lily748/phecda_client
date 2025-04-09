
import { _decorator, Component, Node,Label } from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import { HallModel } from '../../model/HallModel';
import EventManager from '../../../../../script/manager/event_manager';
import { ActivityShareTurntableView } from './activityShareTurntable_view';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';

const { ccclass, property } = _decorator;

//倒计时默认时长
const defRemainTime = 72 * 3600
 
@ccclass('ActivityShareTurntable')
export class ActivityShareTurntable extends Module<ActivityShareTurntableView, null> {

    private _timeNum = 0;

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/activityShareTurntable";
        this.viewType = ActivityShareTurntableView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        //this.needViewMask = true,
        this.autoShowAnim = true;
    }

    onLoad() {

    }

    onShow(data: any) {
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this._clickBack, this);
        Utility.instance.onButtonClick(this.view.btnSpin, this._clickSpin, this);
        this._initToggle();
        //请求转盘数据以获取活动倒计时
        this._reqTurntableData();
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }

    private _clickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityShareTurntable);
        EventManager.instance.dispatch(CommonName.EVENT.UpdateActivityPopUp);
    }

    private _clickSpin() {
        HallModel.isFirstCharg=true;
        ModuleManager.instance.showModule(CommonName.MODULE.TurnTable, CommonName.MODULE.Hall, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityShareTurntable);
            ModuleManager.instance.destroyModule(CommonName.MODULE.Hall);
        })
    }

    private _initToggle(){
        let time=Utility.instance.getTimeStr(new Date());
        Utility.instance.onToggleClick(this.view.isShow, () => {
            if (this.view.isShow.isChecked) {
                HallModel.SetLocalActivityTime("ActivityShareTurntable", time);
            } else {
                HallModel.SetLocalActivityTime("ActivityShareTurntable", "");
            }
        }, this)
    }

    /**
     * 请求turntable数据
     */
    private _reqTurntableData(){
        let info: PostData = {
            Target: this,
            Url: Http_Define.getMyTurntable,
            Params: {},
            Callback: this._rspTurntableData.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: false,
        }
        HttpDataModel.Post(info);
    }

    /**
     * turntable返回
     * @param msg 
     */
    private _rspTurntableData(msg: any) {
        if (msg?.code == 0) {
            this.updateInfo(msg.data.status, msg.data.status == 0 ? defRemainTime : msg.data.round_remain_time)
        } else {
            //容错处理
            this.updateInfo(0, 0)
        }
    }

    private updateTime() {
        if (this._timeNum > 0) {
            this._timeNum--;
        } else {
            this._timeNum = 0
            this.unschedule(this.updateTime);
        }
        let strTime = Utility.instance.formatCountDownTime(this._timeNum);
        this.view.lblTime.getComponent(Label).string = strTime;
    }

    private updateInfo(status: number, time: number) {
        if (status == 0) {
            this.view.lblTime.getComponent(Label).string = Utility.instance.formatCountDownTime(time)
            return; //就不倒计了
        }
        this._timeNum = time ? time : 0
        this.updateTime();
        this.schedule(this.updateTime, 1);
    }
}

