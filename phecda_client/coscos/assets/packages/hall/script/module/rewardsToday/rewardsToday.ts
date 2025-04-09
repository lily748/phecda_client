
import { _decorator, Button, Component, Label, Node, Sprite } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import CommonName from '../../model/CommonName';
import { RewardsTodayView } from './rewardsToday_view';
import { conmmon_http } from '../../../../../script/net/common_http';
const { ccclass, property } = _decorator;

@ccclass('RewardsToday')
export class RewardsToday extends Module<RewardsTodayView, null> {

    private readonly DAILY_BET = 1;   // 每日下注
    private readonly DAILY_RECHARGE = 2; // 每日充值
    private rewardMsg = null;

    private curItem = null;
    private curInfo = null;

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_rewardsToday";
        this.viewType = RewardsTodayView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
        this.autoShowAnim = true;
    }

    public onInit() {
        this.view.content0.init();
        this.view.content1.init();
        Utility.instance.onButtonClick(this.view.close, this.onCloseBtnClick, this);
        Utility.instance.onButtonClick(this.view.getRewardBtn, this.onGetRewardBtnClick, this);
        this._reqGetDailyProgress();
    }

    private _reqGetDailyProgress() {
        ModuleManager.instance.showNetPrompt();
        let param = {
            type_list: [this.DAILY_BET, this.DAILY_RECHARGE]
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getDailyProgress,
            Params: param,
            Callback:this._rspGetDailyProgress.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspGetDailyProgress(msg) {
        if (msg && msg.code == 0) {
            this.rewardMsg = msg;
            let list = msg.data.list;
            if (list) {
                for(let key in list) {
                    let type = (key=="1") ? this.DAILY_BET : this.DAILY_RECHARGE;
                    let content = type == this.DAILY_BET ? this.view.content0 : this.view.content1;
                    let {progresses, status} = list[key];
                    if (status==1) {
                        let index = -1;
                        for (let i = 0; i < progresses.length; i++) {
                            let item:Node = content.createItem();
                            this.setItemInfo(type, item, progresses[i]);
                            if (index == -1 && progresses[i].status==0) index=i;
                        }
                        if (index == -1) index = 0;
                        content.scrollToPage(index,0);
                    }
                   
                }
            }
         }
    }

    private _rsqGetDailyReward(type, taskId) {
        let params = {
            daily_type:type,
            task_id:[taskId],
        }
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.getDailyReward,
            Params: params,
            Callback:this._rspGetDailyReward.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspGetDailyReward(msg) {
        if (msg && msg.code == 0) {
           ModuleManager.instance.toastLong(`Congratulations get ₹${parseFloat((msg.data.reward_amount/100).toFixed(2))}`);
           if (this.curItem != null) {
                this.setItemStatus(this.curItem, 1);
                if (this.curInfo!=null && this.rewardMsg!=null) {
                    let list = this.rewardMsg.data.list[this.curInfo.type];
                    let content = this.curInfo.type == this.DAILY_BET ? this.view.content0 : this.view.content1;
                    // let info = list.progresses.find((e)=>e.task_id == this.curInfo.task_id);
                    // info.status = 1;
                    for (let i = 0; i < list.progresses.length; i++) {
                        if(list.progresses[i].task_id == this.curInfo.task_id) {
                            list.progresses[i].status = 1;
                            if (i != list.progresses.length-1) content.scrollToPage(Number(i+1));
                            break;
                        }
                    }
                    conmmon_http.rspGetRewardPot(this.rewardMsg);
                }
                this.curInfo = null;
                this.curItem = null;
           }
        }
    }

    //兑换奖金码
    private _reqRedeemBonusCode(code:string) {
        ModuleManager.instance.showNetPrompt();
        let param = {
            bonus_code:code
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.redeemBonusCode,
            Params: param,
            Callback:this._rspRedeemBonusCode.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspRedeemBonusCode(msg) {
        if (msg && msg.code == 0) {
            ModuleManager.instance.toastLong(`Congratulations get ₹${parseFloat((msg.data.amount/100).toFixed(2))}`);
         }
    }


    private setItemInfo(type:number, item:Node, info:any) {
        let {task_id, completed, target, reward, status} = info;
        let progress = Number((completed/target));
        let preogressStr = Utility.instance.numThousandsFormat(String(completed/100)) + "/" +  Utility.instance.numThousandsFormat(String(target/100));
        item.getChildByPath("bg/moneyLab").getComponent(Label).string = "₹"+Utility.instance.numThousandsFormat(String(reward/100));
        item.getChildByPath("bg/progress/progressbar").getComponent(Sprite).fillRange = progress;
        item.getChildByPath("bg/progress/progressLab").getComponent(Label).string = preogressStr;
        if (progress < 1) status = -1;
        let btn:Button = item.getChildByPath("bg/clainmBtn").getComponent(Button);
        this.setItemStatus(item, status);
        Utility.instance.onButtonClick(btn.node, ()=>{
            this.curItem = item;
            this.curInfo = info;
            this.curInfo.type = type;
            this._rsqGetDailyReward(type, task_id);
        }, this);
    }

    private setItemStatus(item:Node, status:number) {
        let btn:Button = item.getChildByPath("bg/clainmBtn").getComponent(Button);
        let received = item.getChildByPath("bg/received");
        let showBtn = (status <= 0);
        let canGet = (status == 0);
        btn.interactable = canGet;
        btn.node.getComponent(Sprite).grayscale = !canGet;
        btn.node.active = showBtn;
        received.active = !showBtn;
    }

    private onGetRewardBtnClick() {
        // ModuleManager.instance.toastLong("Please enter the correct key");
        let inputCode = this.view.inputReward.string.trim();
        if (inputCode == "") {    
            ModuleManager.instance.toastLong("Please enter the correct key");
            return;
        }
        this._reqRedeemBonusCode(inputCode);
    }

    private onCloseBtnClick() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.RewardsToday);
    }
}

