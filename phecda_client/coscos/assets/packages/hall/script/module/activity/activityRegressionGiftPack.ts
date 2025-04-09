import { _decorator, Button, Label, Node ,Sprite,sys,instantiate,find} from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { ActivityRegressionGiftPackView } from './activityRegressionGiftPack_view';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import EventManager from '../../../../../script/manager/event_manager';
import { HallModel } from '../../model/HallModel';
import { conmmon_http } from '../../../../../script/net/common_http';
import { SpriteDataModel } from '../../model/SpriteDataModel';

const { ccclass, property } = _decorator;

interface GiftItem {
    item: Node,
    finsh:Node,
    btnReceive:Node,
    amount: Label,
    recharge: Label,
    // give:Label,
}
 
@ccclass('ActivityRegressionGiftPack')
export class ActivityRegressionGiftPack extends Module<ActivityRegressionGiftPackView, null> {

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/regression/activityRegressionGiftPack";
        this.viewType = ActivityRegressionGiftPackView;
        this.modelType = null;
        this.layer = ViewLayer.Mid;
        this.needAnim = true;
        this.needViewMask = true;
    }

    private timeNum = 0;
    private itemList: Array<GiftItem> = []

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this._clickBack, this);
        this.updateTime();
        this.schedule(this.updateTime, 1);
        this._reqReturnPackInfo();
    }

    onDestroy() {
        EventManager.instance.dispatch(CommonName.EVENT.UpdateRegressionMain);

        let time=Utility.instance.getTimeStr(new Date());
        HallModel.SetLocalActivityTime("ActivityRegression", time);
        EventManager.instance.dispatch(CommonName.EVENT.UpdateActivityPopUp);
        EventManager.instance.dispatch(CommonName.EVENT.UpdateRegressionRedDot);
        conmmon_http.reqGetUserInfo(this, conmmon_http.rspUserInfo.bind(this));
        this.unscheduleAllCallbacks();
    }

    private _clickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityRegressionGiftPack);
    }

    private getItem(idx: number): GiftItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.view.giftValue : instantiate(this.view.giftValue)
            item.parent = this.view.content
            let temp: GiftItem = {
                item: item,
                finsh: find("spr_finsh",item),
                btnReceive: find("btn_pay",item),
                amount:find("lbl_coin",item).getComponent(Label),
                // give:find("lbl_give",item).getComponent(Label),
                recharge:find("btn_pay/lbl_amount",item).getComponent(Label),                
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }

    private showContent(msg: any) {
        if (!this.view) return
        let list = msg.return_pack_list || []
        // list.sort((a:any,b:any)=> b.total_amount-a.total_amount)
        for (let i = 0; i < list.length; i++) {
            if(i > 6) continue //目前界面最多放置6个
            const element = list[i]
            let prefab = this.getItem(i)
            if (element) {
                prefab.item.active = true
                prefab.finsh.active = list[i].status == 2

                if(element.icon_pic.trim() !== ""){
                    SpriteDataModel.SetSprite(prefab.item.getComponent(Sprite), element.icon_pic)
                }

                // prefab.give.string = list[i].reward_ratio
                prefab.amount.string = Utility.instance.numThousandsFormat("+" + (list[i].total_amount-list[i].buy_amount) / 100)
                prefab.recharge.string = Utility.instance.numThousandsFormat("₹" + list[i].buy_amount / 100)
                
                prefab.btnReceive.active = list[i].status !== 2
                prefab.btnReceive.getComponent(Sprite).grayscale = list[i].status == 3
                prefab.btnReceive.getComponent(Button).interactable = list[i].status !== 3

                let shop_id = list[i].id || 0
                prefab.btnReceive.off(Button.EventType.CLICK)
                prefab.btnReceive.on(Button.EventType.CLICK, ()=>{
                    this._reqOrder(shop_id)
                }, this)
            }
            else {
                prefab.item.active = false
            }
        }

        this.timeNum = msg.rest_time || 0
        this.updateTime()
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
        this.view.lbl_msg.string=`${days} days ${hours} : ${minutes} : ${seconds} `
    }

    //请求回归礼包信息
    private _reqReturnPackInfo() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getReturnPackInfo,
            Params: {},
            Callback: this._rspReturnPackInfo.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //回归礼包信息返回
    private _rspReturnPackInfo(msg: any) {
        if (msg && msg.code == 0) {
            this.showContent(msg.data);
        }
    }

    //请求下单(获取回归礼包的充值链接)
    private _reqOrder(shop_id = 0) {
        let params = {
            id: shop_id,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getReturnPackRechargeUrl,
            Params: params,
            Callback: this._rspOrder.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspOrder(msg: any) {
        if (msg && msg.code == 0) {
            if (msg.data.recharge_url.length > 0) {
                sys.openURL(msg.data.recharge_url)
            }
        }
    }
  
}

