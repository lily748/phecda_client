
import { _decorator,Node,instantiate,Label ,find, Sprite, Button} from 'cc';
import Module from '../../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../../script/utility/utility';
import ModuleManager from '../../../../../../script/framework/core/module_manager';
import CommonName from '../../../model/CommonName';
import { PostData } from '../../../model/HttpDataModel';
import { Http_Define } from '../../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../../model/HttpDataModel';
import { ConsecutiveRrechargeView } from './consecutiveRrecharge_view';
import { conmmon_http } from '../../../../../../script/net/common_http';
import EventManager from '../../../../../../script/manager/event_manager';

const { ccclass, property } = _decorator;

interface RecordItem {
    item: Node,
    finsh:Node,
    btnReceive:Node,
    amount: Label,
    source: Label,
    progress: Label,
}

@ccclass('ConsecutiveRrecharge')
export class ConsecutiveRrecharge extends Module<ConsecutiveRrechargeView, null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/returningActivities/consecutiveRrecharge";
        this.viewType = ConsecutiveRrechargeView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }
    private dataInfo:any = []
    private itemList: Array<RecordItem> = []
    onLoad() {
        
    }

    onShow(data: any) {
        this._reqRechargeDaysProgress()
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this.onClickBack, this)
    }

    onDestroy() {
        EventManager.instance.dispatch(CommonName.EVENT.UpdateRegressionMain);
    }

    private onClickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.ConsecutiveRrecharge);
    }

    private getItem(idx: number): RecordItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.view.recordValue : instantiate(this.view.recordValue)
            item.parent = this.view.content
            let temp: RecordItem = {
                item: item,
                finsh: find("spr_finsh",item),
                btnReceive: find("btn_receive",item),
                amount:find("lbl_amount",item).getComponent(Label),
                source:find("lbl_source",item).getComponent(Label),
                progress:find("lbl_progress",item).getComponent(Label),
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }

    private showContent(data: any) {
        if(!data) return
        if(!this.node?.isValid) return
        this.dataInfo = data
        this.view.lbl_tip.string = data.description        
        for (let i = 0; i < data.progresses.length; i++) {
            const element = data.progresses[i]
            let prefab = this.getItem(i)
            if (element) {
                prefab.item.active = true
                prefab.btnReceive.off(Button.EventType.CLICK)
                if(typeof element.status == 'number'){
                    prefab.finsh.active = element.status == 1
                    prefab.btnReceive.active = !prefab.finsh.active
                }
                if(typeof element.completed == 'number' && typeof element.target == 'number'){
                    prefab.source.string = Utility.instance.format(`Consecutive recharge for {0} day.`,""+element.target)
                    prefab.progress.string = "("+element.completed + "/" + element.target+ ")"

                    if(prefab.btnReceive.active){
                        prefab.btnReceive.getComponent(Sprite).grayscale = element.completed !== element.target
                        prefab.btnReceive.getComponent(Button).interactable = element.completed == element.target
                        if(element.completed == element.target && typeof element.task_id == 'number'){
                            prefab.btnReceive.on(Button.EventType.CLICK, ()=>{
                                this._reqRechargeDaysReward(element.task_id)
                            }, this)
                        }
                    }
                }
                if(typeof element.reward == 'number'){
                    prefab.amount.string ="₹" + element.reward/100
                }                
            }
            else {
                prefab.item.active = false
            }
        }
    }

    private updateContent(data:any){
        if(!data) return
        if(!this.node?.isValid) return
        if (typeof data.reward_amount == 'number') {
            let tip = Utility.instance.format(`Successfully received ₹{0}`,Utility.instance.numThousandsFormat(""+data.reward_amount/100))  
            ModuleManager.instance.toastLong(tip)
        }
                
        if(!data.progresses) return
        if(!data.progresses[0]) return
        if(!this.dataInfo?.progresses) return
        for (let i = 0; i < this.dataInfo.progresses.length; i++) {
            if(data.progresses[0].task_id == this.dataInfo.progresses[i].task_id){
                this.dataInfo.progresses[i].completed = data.progresses[0].completed
                this.dataInfo.progresses[i].target = data.progresses[0].target
                this.dataInfo.progresses[i].reward = data.progresses[0].reward
                this.dataInfo.progresses[i].status = data.progresses[0].status
                break
            }
        }
        this.showContent(this.dataInfo)
    }

    //请求累计充值天数活动进度
    private _reqRechargeDaysProgress() {
        ModuleManager.instance.showNetPrompt()
        let info: PostData = {
            Target: this,
            Url: Http_Define.getRechargeDaysProgress,
            Params: {},
            Callback: this._rspRechargeDaysProgress.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //返回累计充值天数活动进度
    private _rspRechargeDaysProgress(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg?.code == 0) {
            this.showContent(msg.data)
        }
    }

    //请求累计充值天数活动奖励
    private _reqRechargeDaysReward(taskID:number) {
        ModuleManager.instance.showNetPrompt()
        let params = {
            task_id: [taskID],
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getRechargeDaysReward,
            Params: params,
            Callback: this._rspRechargeDaysReward.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //返回累计充值天数活动奖励
    private _rspRechargeDaysReward(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg?.code == 0) {
            if (msg.data) {
                this.updateContent(msg.data)
                conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
            }
        }
    }
}


