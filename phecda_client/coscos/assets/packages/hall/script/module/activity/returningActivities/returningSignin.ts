
import { _decorator,Node,instantiate,Label ,find, Sprite, Button} from 'cc';
import Module from '../../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../../script/utility/utility';
import ModuleManager from '../../../../../../script/framework/core/module_manager';
import CommonName from '../../../model/CommonName';
import { PostData } from '../../../model/HttpDataModel';
import { Http_Define } from '../../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../../model/HttpDataModel';
import { ReturningSigninView } from './returningSignin_view';
import { conmmon_http } from '../../../../../../script/net/common_http';
import EventManager from '../../../../../../script/manager/event_manager';

const { ccclass, property } = _decorator;

interface RecordItem {
    item: Node,
    coin:Sprite,
    btnReceive:Sprite,
    amount: Label,
    day: Label,
}

const getFreeTip = `<color=#ffffff>Get free</color><color=#fdff73> ₹{0}</color>`
const limitTip = `Accumulate ₹{0} in recharge to activate this sign-in reward\nfor free,and once activated, you can claim it for free.`

@ccclass('ReturningSignin')
export class ReturningSignin extends Module<ReturningSigninView, null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/returningActivities/returningSignin";
        this.viewType = ReturningSigninView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }
    private dataInfo:any = []
    private itemList: Array<RecordItem> = []

    onShow(data: any) {
        this._reqGetReturnBackSignInfo()
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this.onClickBack, this)
    }

    onDestroy() {
        EventManager.instance.dispatch(CommonName.EVENT.UpdateRegressionMain);
    }

    private onClickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.ReturningSignin);
    }

    private getItem(idx: number,isMax:boolean): RecordItem {
        if (!this.itemList[idx]) {
            let item: Node = null
            if(isMax){
                item = this.view.bottom
            }
            else{
                item = idx == 0 ? this.view.recordValue : instantiate(this.view.recordValue)
                item.parent = this.view.content
            }            
            let temp: RecordItem = {
                item: item,
                coin: find("spr_coin",item).getComponent(Sprite),
                btnReceive: find("btn_receive",item).getComponent(Sprite),
                amount:find("lbl_amount",item).getComponent(Label),
                day:find("lbl_day",item).getComponent(Label),
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }

    private showContent(data: any) {
        if(!data) return
        if(!this.node?.isValid) return
        this.dataInfo = data
        this.view.spr_free.active = typeof data.total_reward == 'number'
        if(typeof data.total_reward == 'number'){           
            this.view.rxt_get.string = Utility.instance.format(getFreeTip,Utility.instance.numThousandsFormat(`${data.total_reward/100}`))
        }
        if(typeof data.acc_recharge == 'number'){
            this.view.lbl_tip.string = Utility.instance.format(limitTip,Utility.instance.numThousandsFormat(`${data.acc_recharge/100}`))
        }      
        for (let i = 0; i < data.days.length; i++) {
            const element = data.days[i]
            let prefab = this.getItem(i,i==data.days.length-1)
            if (element) {
                prefab.item.active = true
                prefab.btnReceive.node.off(Button.EventType.CLICK)
                prefab.btnReceive.node.getComponent(Button).interactable = element.status==1
                if(typeof element.status == 'number'){
                    prefab.btnReceive.spriteFrame = this.view.btnFrame[element.status]
                    prefab.coin.spriteFrame = this.view.coinFrame[element.status == 2 ? 0:1]                                  
                    prefab.btnReceive.node.on(Button.EventType.CLICK, ()=>{
                        this._reqGetReturnBackSignReward(element.day)
                    }, this)
                }
                if(typeof element.day == 'number'){
                    prefab.day.string = "Day"+element.day
                }
                if(typeof element.reward_coin == 'number'){
                    prefab.amount.string = "₹" + Utility.instance.numThousandsFormat(`${element.reward_coin/100}`)
                }           
            }
            else {
                prefab.item.active = false
            }
        }
    }

    private updateContent(data:any){
        if(!data) return
        if (data.error_code !== 0) {
            ModuleManager.instance.toastLong(data.error_msg)
            return
        }        
        if(!this.node?.isValid) return
        if (typeof data.reward_coin == 'number') {
            let tip = Utility.instance.format(`Successfully received ₹{0}`,Utility.instance.numThousandsFormat(`${data.reward_coin/100}`))  
            ModuleManager.instance.toastLong(tip)
        }
        if(typeof data.day == 'number'){
            for (let i = 0; i < this.dataInfo.days.length; i++) {
                if(data.day == this.dataInfo.days[i].day && typeof data.status == 'number'){
                    this.dataInfo.days[i].status = data.status
                    break
                }
            }
        }
        this.showContent(this.dataInfo)
    }

    //请求获取回归签到信息
    private _reqGetReturnBackSignInfo() {
        ModuleManager.instance.showNetPrompt()
        let info: PostData = {
            Target: this,
            Url: Http_Define.getReturnBackSignInfo,
            Params: {},
            Callback: this._rspGetReturnBackSignInfo.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //返回获取回归签到信息
    private _rspGetReturnBackSignInfo(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg?.code == 0) {
            this.showContent(msg.data)
        }
    }

    //请求领取回归签到奖励
    private _reqGetReturnBackSignReward(day:number) {
        ModuleManager.instance.showNetPrompt()
        let params = {
            day: day,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getReturnBackSignReward,
            Params: params,
            Callback: this._rspGetReturnBackSignReward.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //返回领取回归签到奖励
    private _rspGetReturnBackSignReward(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg?.code == 0) {
            if (msg.data) {
                this.updateContent(msg.data)
                conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
            }
        }
    }
}


