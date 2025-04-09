
import { _decorator,Node,Label,instantiate,Prefab,find,Sprite,Color,sys,tween,Tween,Button,v3, SpriteComponent} from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import CommonName from '../../model/CommonName';
import { ActivityDailyBonus_view } from './activityDailyBonus_view';
import { HallModel } from '../../model/HallModel';
import EventManager from '../../../../../script/manager/event_manager';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { conmmon_http } from '../../../../../script/net/common_http';

const { ccclass, property } = _decorator;

const ruleTxt = "1. You must log in according to the number of days you have logged in. Missed logins cannot be made up.\n\n"
                +"2. After you purchase, the sign-in reward will be available for 7 days, after which it will reset and you will need to purchase it again to unlock it.\n\n"
                +"3. After participating in this event, your withdrawal will require a wagering requirement of {0} times the deposit amount , and the bonus received from the "
                +"sign-in will require a wagering requirement of {1} times."

@ccclass('ActivityDailyBonus')
export class ActivityDailyBonus extends Module<ActivityDailyBonus_view, null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/activityDailyBonus";
        this.viewType = ActivityDailyBonus_view;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    private dataInfo:any = []
    private todayIsReceive:boolean = false
    private unlock_status:boolean = false
    private history_reward_coin:number = 0
    private sign_wagers_multi:number = 0
    private recharge_wagers_multi:number = 0
    onShow(data: any) {
        this._reqSignInfo()
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this.onClickBack, this)
        Utility.instance.onButtonClick(this.view.btn_rule, this.onClickRule, this)
        Utility.instance.onButtonClick(this.view.btnGo, this.onClickGo, this)
        Utility.instance.onButtonClick(this.view.btn_middle, this.onClickMiddle, this)
        
        this._initToggle()
    }

    private onClickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityDailyBonus)
        EventManager.instance.dispatch(CommonName.EVENT.UpdateActivityPopUp)
    }

    private onClickRule(){
        let rule = find("activityDailyBonusRule",this.node)
        if(rule?.isValid){
            rule.active = true
        }
        else{
            this.createNode("activity/activityDailyBonusRule", this.node,(ruleNode:Node)=>{
                if(!ruleNode.isValid) return
                let lbl_content = find("bg/lbl_content",ruleNode).getComponent(Label)
                lbl_content.string = Utility.instance.format(ruleTxt,`${this.recharge_wagers_multi}`,`${this.sign_wagers_multi}`)
            })
        }
    }

    private onClickGo(){
        if(this.unlock_status){
            if(this.todayIsReceive){
                ModuleManager.instance.toast("Already received it today")
            }
            else{
                this._reqSignReward()
            }
        }
        else{
            this._reqSignRechargeUrl()
        }
    }

    private onClickMiddle(){
        if(this.unlock_status) return
        if(!this.view.spr_lock.active) return

        tween(this.view.spr_lock).stop()
            .to(0.15,{angle:-45})
            .to(0.15,{angle:45})
            .to(0.15,{angle:-45})
            .to(0.15,{angle:45})
            .to(0.15,{angle:-45})
            .to(0.15,{angle:45})
            .to(0.15,{angle:0})
            .start();
    }
   
    /**
     * 初始化数据
     * @param data 
     */
    private initData(data:any){
        if(!data) return
        if(!this.node?.isValid) return

        if(typeof data.sign_wagers_multi == 'number'){
            this.sign_wagers_multi = data.sign_wagers_multi
        }

        if(typeof data.recharge_wagers_multi == 'number'){
            this.recharge_wagers_multi = data.recharge_wagers_multi
        }
        
        if(typeof data.pic_cfg_url == 'string' && data.pic_cfg_url.trim() != ""){
            SpriteDataModel.SetSprite(this.view.spr_top, data.pic_cfg_url)
        }

        if(typeof data.tomorrow_reward_coin == 'number'){
            this.view.lbl_tomorrow.string = Utility.instance.numThousandsFormat("₹"+data.tomorrow_reward_coin/100)
        }

        if(typeof data.today_reward_coin == 'number' && typeof data.unlock_recharge_coin == 'number'){
            let add_str = data.today_day == 1 ? Utility.instance.numThousandsFormat("₹"+data.unlock_recharge_coin/100+"+"):""            
            this.view.lbl_get.string = add_str+Utility.instance.numThousandsFormat("₹"+data.today_reward_coin/100) 
            let lbl_getTip = find("middle/lbl_getTip",this.view.node)
            if(lbl_getTip.isValid){
                // lbl_getTip.position = v3(data.today_day == 1 ? -130:-53,-118,0)
                // this.view.lbl_get.node.position = v3(data.today_day == 1 ? -93:-16,-111,0)
            }
        }

        if(typeof data.history_reward_coin == 'number'){
            this.history_reward_coin = data.history_reward_coin
            this.view.lbl_earnings.string = Utility.instance.numThousandsFormat("₹"+data.history_reward_coin/100)
        }

        if(typeof data.unlock_status == 'number'){
            this.unlock_status = data.unlock_status == 1
            if(data.unlock_status == 1){
                Tween.stopAllByTarget(this.node)
            }
            this.view.spr_lock.active = data.unlock_status == 0
            if(data.unlock_status == 0){
                if(typeof data.unlock_recharge_coin == 'number'){
                    this.view.lbl_btntip.string = Utility.instance.format("Unlock Now! ₹{0}",""+data.unlock_recharge_coin/100)
                }
            }
            else if(data.unlock_status == 1){
                this.view.lbl_btntip.string = "Receive"
            }
        }

        if(data.days){
            this.dataInfo = data.days
            if(this.view.dailyLayout.children.length > data.days.length && this.view.dailyLayout.children.length > 1){
                let temp = []
                for(let i = data.days.length;i < this.view.dailyLayout.children.length-1;++i){
                    if(this.view.dailyLayout.children[i]?.isValid){
                        temp.push(this.view.dailyLayout.children[i])
                    }
                }
                for(let i = 0;i < temp.length-1;++i){
                    if(!temp[i].isValid) continue
                    temp[i].destroy()
                    temp[i]=null
                }
            }
            let prefab = this.view.dailyLayout.children[0]
            for(let i = 0;i < data.days.length;++i){
                let info = data.days[i]
                let item = this.view.dailyLayout.children[i]
                if(item?.isValid){
                    item.active = true
                }
                else{
                    console.log("over 7 days configs");
                    continue;
                    // item = instantiate(prefab)
                    // item.active = true
                    // item.parent = this.view.dailyLayout
                }
                
                find("vip_bg",item).active = info.vip_reward_coin > 0
                if(info.vip_reward_coin > 0){
                    find("vip_bg/lbl_vip",item).getComponent(Label).string = Utility.instance.numThousandsFormat("VIP+"+info.vip_reward_coin/100)
                }            
                // let bgColor = ""
                // let addMoneyColor = ""
                let day_tip = "0"+info.day;
                if(info.status == 0){ //不可领取
                    // bgColor = "#cbd9e4"
                    // addMoneyColor = "#FC8600"
                    // day_tip = "0"+info.day;
                }
                else if(info.status == 1){ //可领取
                    // bgColor = "#ffb96c"
                    // addMoneyColor = "#FFFFFF"
                    // day_tip = "Available"
                }
                else if(info.status == 2){ //已领取
                    // bgColor = data.today_day == info.day ? "#ffb96c":"#b5cce2"
                    // addMoneyColor = data.today_day == info.day ? "#FFFFFF":"#303f4c"
                    // day_tip = data.today_day == info.day ? "Completion":(info.day + "day")
                    this.todayIsReceive = data.today_day == info.day            
                }


             

                let isToday = (data.today_day == info.day);
                let isGray = (info.status == 0);//不可领取
                let canGet = (info.status == 1);//可领取
                let isGeted = (info.status == 2)//已领取
                let sp_canGet = item.getChildByName("sp_canGet").getComponent(Sprite)
                let sp_geted = item.getChildByName("sp_geted").getComponent(Sprite)


                // for (let i = 0; i < item.children.length; i++) {
                //     let sp = item.children[i].getComponent(Sprite);
                //     if (sp) sp.grayscale = isGray;
                // }

                sp_canGet.node.active = canGet;
                sp_geted.node.active = isGeted;

                // setGray
                this.view.btnGo.getComponent(Sprite).grayscale = this.todayIsReceive
                this.view.btnGo.getComponent(Button).interactable = !this.todayIsReceive     

                
                
                

                // find("spr_coin",item).getComponent(Sprite).grayscale = (info.status == 2 && data.today_day !== info.day)

                // find("spr_bg",item).getComponent(Sprite).color = new Color().fromHEX(bgColor)
              
                // find("spr_coin",item).getComponent(Sprite).spriteFrame = (info.status == 0 || (info.status == 1 && data.today_day == info.day)) ? this.view.spriteFrameCoin[1]:this.view.spriteFrameCoin[0]

                // find("lbl_addMoney",item).getComponent(Label).color = new Color().fromHEX(addMoneyColor)
                find("lbl_addMoney",item).getComponent(Label).string = Utility.instance.numThousandsFormat("+₹"+(info.reward_coin/100))
                find("lbl_day",item).getComponent(Label).string = day_tip
                // find("lbl_day",item).getComponent(Label).color = new Color().fromHEX((info.status == 1 || (info.status == 2 && data.today_day == info.day)) ? "#FC8600":"#303F4C" )
            }

            this.view.lbl_bonusTip.string = `<color=#ffffff>Get up to </color><color=ffe63b>${data.total_bonus_rate}%</color> Bonus! VIP <color=ffe63b>${data.vip_total_bonus_rate}%</color> Bonus!`;

            // data.total_bonus_rate
            // data.vip_total_bonus_rate
        }        
    }

    /**
     * 更新领取奖励
     */
    updateReceiveReward(data:any){
        if(!data) return        
        if (data.error_code !== 0) {
            ModuleManager.instance.toastLong(data.error_msg)
            return
        }
        if(!this.node?.isValid) return

        this.todayIsReceive = true
        let tips = "Get reward of Rs "+data.reward_coin/100
        ModuleManager.instance.toast(tips)

        let currIndex = -1
        for(let i = 0;i < this.dataInfo.length;++i){
            let info = this.dataInfo[i]
            if(data.day == info.day){
                currIndex = i
                break
            }
        }
        if(currIndex == -1) return
        let item = this.view.dailyLayout.children[currIndex]
        if(item?.isValid){
            // find("lbl_day",item).getComponent(Label).string = "Completion"
            // find("spr_coin",item).getComponent(Sprite).spriteFrame = this.view.spriteFrameCoin[0]
            item.getChildByName("sp_canGet").active = false;
            item.getChildByName("sp_geted").active = true;
          
            
        }
        this.view.btnGo.getComponent(Sprite).grayscale = this.todayIsReceive
        this.view.btnGo.getComponent(Button).interactable = !this.todayIsReceive

        HallModel.SetLocalActivityTime("ActivityDailyBonus",Utility.instance.getTimeStr(new Date()));        
        this.view.lbl_earnings.string = Utility.instance.numThousandsFormat("₹"+(this.history_reward_coin+data.reward_coin)/100)
    }

    /**
     * 定时请求充值结果 更新充值状态
     */
    private scheduledRequestRechargeResult(){
        if(!this.node?.isValid) return

        tween(this.node)
            .stop()
            .repeatForever(tween().stop().delay(30).call(()=>{
                this._reqSignInfo()
            }))
            .start()
    }

    private _initToggle(){
        let time=Utility.instance.getTimeStr(new Date());
        Utility.instance.onToggleClick(this.view.isShow, () => {
            if (this.view.isShow.isChecked) {
                HallModel.SetLocalActivityTime("ActivityDailyBonus",time);
            } else {
                HallModel.SetLocalActivityTime("ActivityDailyBonus","");
            }
        }, this)
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

    onDestroy() {
        this.dataInfo = []
        Tween.stopAllByTarget(this.node)
        this.unscheduleAllCallbacks();
    }

    /**
     * 请求签到信息
     */
    private _reqSignInfo(){
        let info: PostData = {
            Target: this,
            Url: Http_Define.getSignInfo,
            Params: {},
            Callback: this._rspSignInfo.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt:true
        }
        HttpDataModel.Post(info);
    }

    /**
     * 签到信息返回
     * @param msg 
     */
    private _rspSignInfo(msg: any){
        if (msg && msg.code == 0) {
            if(msg.data){
                this.initData(msg.data)
            }
        }
    }

    /**
     * 请求充值链接
     */
    private _reqSignRechargeUrl(){
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.getSignRechargeUrl,
            Params: {},
            Callback: this._rspSignRechargeUrl.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * 充值链接返回
     * @param msg 
     */
    private _rspSignRechargeUrl(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            if (msg.data) {
                if (msg.data.error_code == 0 && msg.data.recharge_url) {
                    sys.openURL(msg.data.recharge_url)
                    this.scheduledRequestRechargeResult()
                }
                else{
                    ModuleManager.instance.toastLong(msg.data.error_msg)
                }
            }
        }
    }

    /**
     * 请求签到活动奖励
     */
    private _reqSignReward(){
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.getSignReward,
            Params: {},
            Callback: this._rspSignReward.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * 签到活动奖励返回
     * @param msg 
     */
    private _rspSignReward(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            this.updateReceiveReward(msg.data)
            conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
        }
    }

}

