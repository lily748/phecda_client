
import { _decorator,Node,instantiate,Label ,find, Sprite, Button} from 'cc';
import Module from '../../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../../script/utility/utility';
import ModuleManager from '../../../../../../script/framework/core/module_manager';
import CommonName from '../../../model/CommonName';
import { PostData } from '../../../model/HttpDataModel';
import { Http_Define } from '../../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../../model/HttpDataModel';
import { CumulativeRrechargeView } from './cumulativeRrecharge_view';
import { conmmon_http } from '../../../../../../script/net/common_http';
import EventManager from '../../../../../../script/manager/event_manager';

const { ccclass, property } = _decorator;

interface RecordItem {
    item: Node,
    finsh:Node,
    btnReceive:Node,
    progressBar:Sprite,
    amount: Label,
    recharge: Label,
    progress: Label,
}

@ccclass('CumulativeRrecharge')
export class CumulativeRrecharge extends Module<CumulativeRrechargeView, null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/returningActivities/cumulativeRrecharge";
        this.viewType = CumulativeRrechargeView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }
    private dataInfo:any = []
    private itemList: Array<RecordItem> = []
    
    onShow(data: any) {
        this._reqRechargeAmountProgress()
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this.onClickBack, this)
    }

    onDestroy() {
        EventManager.instance.dispatch(CommonName.EVENT.UpdateRegressionMain);
    }

    private onClickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.CumulativeRrecharge);
    }

    private getItem(idx: number): RecordItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.view.recordValue : instantiate(this.view.recordValue)
            item.parent = this.view.content
            let temp: RecordItem = {
                item: item,
                finsh: find("spr_finsh",item),
                btnReceive: find("btn_receive",item),
                progressBar: find("progressBar/bar",item).getComponent(Sprite),
                amount:find("lbl_amount",item).getComponent(Label),
                recharge:find("lbl_recharge",item).getComponent(Label),
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
        for(let child of this.view.content.children ){
            child.active = false
        }
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
                    prefab.progressBar.fillRange = element.completed/element.target
                    prefab.recharge.string = "₹" + Utility.instance.numThousandsFormat((element.target/100).toString())
                    prefab.progress.string = element.completed/100 + "/" + element.target/100

                    if(prefab.btnReceive.active){
                        prefab.btnReceive.getComponent(Sprite).grayscale = element.completed !== element.target
                        prefab.btnReceive.getComponent(Button).interactable = element.completed == element.target
                        if(element.completed == element.target && typeof element.task_id == 'number'){
                            prefab.btnReceive.on(Button.EventType.CLICK, ()=>{
                                this._reqRechargeAmountReward(element.task_id)
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

    //请求累计充值金额活动进度
    private _reqRechargeAmountProgress() {
        ModuleManager.instance.showNetPrompt()
        let info: PostData = {
            Target: this,
            Url: Http_Define.getRechargeAmountProgress,
            Params: {},
            Callback: this._rspRechargeAmountProgress.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //返回累计充值金额活动进度
    private _rspRechargeAmountProgress(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg?.code == 0) {
            this.showContent(msg.data)
        }
    }

    //请求累计充值金额活动奖励
    private _reqRechargeAmountReward(taskID:number) {
        ModuleManager.instance.showNetPrompt()
        let params = {
            task_id: [taskID],
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getRechargeAmountReward,
            Params: params,
            Callback: this._rspRechargeAmountReward.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //返回累计充值金额活动奖励
    private _rspRechargeAmountReward(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg?.code == 0) {
            if (msg.data) {
                this.updateContent(msg.data)
                conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
            }
        }
    }
}


