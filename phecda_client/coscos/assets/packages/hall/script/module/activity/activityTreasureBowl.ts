
import { _decorator,Node,Label,instantiate,Prefab,find} from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import CommonName from '../../model/CommonName';
import { ActivityTreasureBowl_view } from './activityTreasureBowl_view';
import { HallModel,EventTrack } from '../../model/HallModel';
import EventManager from '../../../../../script/manager/event_manager';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { conmmon_http } from '../../../../../script/net/common_http';
import AudioManager from '../../../../../script/manager/audio_manager';

const { ccclass, property } = _decorator;

const ruleTxt = "1.A portion of the amount you recharge every day will go into the treasure pot and cannot be withdrawn on the same day.It can only be withdrawn to the account after generating income on the second day.\n\n"
                +"2.The amount withdrawn from the treasure bowl must be in multiples of ₹{0}. Any amount less than ₹{1} or not in multiples of ₹{2} cannot be withdrawn.\n\n"
                +"3.After the event ends, the remaining withdrawable money in the treasure bowl will be returned to your account.\n\n"
                +"4.The amount you withdraw from the treasure pot requires a {3}x wagering requirement before a withdrawal can be initiated.\n\n"

@ccclass('ActivityTreasureBowl')
export class ActivityTreasureBowl extends Module<ActivityTreasureBowl_view, null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/treasureBowl/activityTreasureBowl";
        this.viewType = ActivityTreasureBowl_view;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    private balance:number = 0
    private timeNum:number = 0    
    private min_withdraw:number = 0
    private wagers_times:number = 0
    private preModuleName:string = ""
    
    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)
        this.preModuleName = intentData
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this.onClickBack, this)
        Utility.instance.onButtonClick(this.view.btn_rule, this.onClickRule, this)
        Utility.instance.onButtonClick(this.view.btn_record, this.onClickHistory, this)

        Utility.instance.onButtonClick(this.view.btn_deposit, this.onClickDeposit, this)
        Utility.instance.onButtonClick(this.view.btn_receive, this.onClickReceive, this)
        
        this._initToggle()
        this._reqTreasureBowlInfo()
    }

    private onClickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityTreasureBowl)
        EventManager.instance.dispatch(CommonName.EVENT.UpdateActivityPopUp)
    }
   
    /**
     * 初始化数据
     * @param data 
     */
    private initData(data:any){
        if(!data) return
        if(!this.node?.isValid) return
        
        if(typeof data.interest == "string"){
            find("activityTreasureBowl/middle/spr_interestRate",this.node).active = true
            this.view.lbl_rate.string = parseFloat(data.interest).toString()+"%"
        }
        if(typeof data.balance == "number"){
            this.balance = data.balance
            this.view.lbl_amount.string = Utility.instance.numThousandsFormat("₹"+data.balance/100)
        }
        if(typeof data.withdrawable == "number"){
            this.view.lbl_receive.string = Utility.instance.numThousandsFormat("₹"+data.withdrawable/100)
        }
        if(typeof data.min_withdraw == "number"){
            this.min_withdraw = data.min_withdraw 
            this.view.lbl_minWithdraw.string = Utility.instance.numThousandsFormat("₹"+data.min_withdraw/100)
        }
        if(typeof data.rest_time == "number"){
            this.initTime(data.rest_time)
        }
        if(typeof data.wagers_times == "number"){
            this.wagers_times = data.wagers_times
        }        
    }

    private _initToggle(){
        let time=Utility.instance.getTimeStr(new Date());
        Utility.instance.onToggleClick(this.view.isShow, () => {
            if (this.view.isShow.isChecked) {
                HallModel.SetLocalActivityTime("ActivityTreasureBowl",time);
            } else {
                HallModel.SetLocalActivityTime("ActivityTreasureBowl","");
            }
        }, this)
    }

    private onClickRule(){
        let rule = find("activityTreasureBowlRule",this.node)
        if(rule?.isValid){
            rule.active = true
        }
        else{
            this.createNode("activity/treasureBowl/activityTreasureBowlRule", this.node,(ruleNode:Node)=>{
                if(!ruleNode.isValid) return
                let lbl_content = find("bg/lbl_content",ruleNode).getComponent(Label)

                let min_withdraw = ""+this.min_withdraw/100
                let content = Utility.instance.format(ruleTxt,min_withdraw,min_withdraw,min_withdraw,""+this.wagers_times)  
                lbl_content.string = content
            })
        }
    }

    private onClickHistory(){
        let history = find("activityTreasureBowlHistory",this.node)
        if(history?.isValid){
            history.active = true
        }
        else{
            this.createNode("activity/treasureBowl/activityTreasureBowlHistory", this.node,null)
        }
    }

    private onClickDeposit(){
        AudioManager.instance.playCloseWindowSound()
        conmmon_http.reqReportEventTracking(this, EventTrack.open_treasureEecharge, "1", conmmon_http.rspReportEventTracking.bind(this));
        ModuleManager.instance.showModule(CommonName.MODULE.Recharge, this.preModuleName, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityTreasureBowl)
            ModuleManager.instance.destroyModule(this.preModuleName)
        })       
    }
    
    private onClickReceive(){
        if(this.balance < this.min_withdraw && this.min_withdraw != 0){
            let tip = Utility.instance.format(`Minimum withdrawal amount ₹{0}`,Utility.instance.numThousandsFormat(""+this.min_withdraw/100))  
            ModuleManager.instance.toastLong(tip)
            return
        }
        this._reqwithdrawTreasureBowl()
    }

    /**
     * 创建节点
     * @param name 
     * @param parent 
     * @param callback 
     */
    private createNode(name: string, parent: Node, callback: (node: Node) => void) {
        ResourceManager.loadRes("prefabs/" + name, Prefab, (err, prefab: Prefab) => {
            if (!err) {
                if (!this || !this.isValid || !this.node || !this.node.isValid) {
                    return
                }
                let preNode: Node = instantiate(prefab)
                preNode.parent = parent
                callback && callback(preNode)
            }
        })
    }

    private updateTime() {
        if(!this?.view?.lbl_time) return
        if (this.timeNum > 0) {
            this.timeNum--
        }
        else {
            this.unschedule(this.updateTime)
        }
        let strTime = Utility.instance.formatCountDownTime(this.timeNum)
        this.view.lbl_time.getComponent(Label).string = "Activity end: "+strTime
    }

    private initTime(time: number) {
        this.timeNum = time;
        this.updateTime();
        this.schedule(this.updateTime,1)
    }

    onDestroy() {
        this.unscheduleAllCallbacks()
    }

    /**
     * 请求聚宝盆信息
     */
     private _reqTreasureBowlInfo(){
        let info: PostData = {
            Target: this,
            Url: Http_Define.getTreasureBowlInfo,
            Params: {},
            Callback: this._rspTreasureBowlInfo.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt:true
        }
        HttpDataModel.Post(info);
    }

    /**
     * 签到聚宝盆返回
     * @param msg 
     */
    private _rspTreasureBowlInfo(msg: any){
        if (msg && msg.code == 0) {
            if(msg.data){
                this.initData(msg.data)
            }
        }
    }

     /**
     * 请求代付聚宝盆金币
     */
     private _reqwithdrawTreasureBowl(){
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.withdrawTreasureBowl,
            Params: {},
            Callback: this._rspwithdrawTreasureBowl.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt:true
        }
        HttpDataModel.Post(info);
    }

    /**
     * 代付聚宝盆金币返回
     * @param msg 
     */
    private _rspwithdrawTreasureBowl(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            if (msg.data) {
                if (msg.data.error_code == 0 && typeof msg.data.withdraw_amount == 'number') {
                    conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
                    let tip = Utility.instance.format(`Successfully received ₹{0}`,Utility.instance.numThousandsFormat(""+msg.data.withdraw_amount/100))  
                    ModuleManager.instance.toastLong(tip)
                    this._reqTreasureBowlInfo()
                }
                else{
                    ModuleManager.instance.toastLong(msg.data.error_msg)
                }
            }
        }
    }
}

