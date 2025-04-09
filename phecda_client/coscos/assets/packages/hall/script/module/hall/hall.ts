import { Node, instantiate, math, _decorator, Prefab, Button,  Game, view, Toggle, Vec3, Sprite, EventTouch,Vec2,SpriteFrame,game,v3, Widget, find, Label,Color, ScrollView, v2, UITransform, sp} from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;

import HallView from "./hall_view";
import { LoginServer } from '../../../../../script/net/login_serve';
import Utility from '../../../../../script/utility/utility';
import AudioManager from '../../../../../script/manager/audio_manager';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import EventManager from '../../../../../script/manager/event_manager';
import CommonName from '../../model/CommonName';
import { HallViceNode } from './hall_viceNode';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { PostData, HttpDataModel } from '../../model/HttpDataModel';
import { Hall_brandlist } from './hall_brandlist';
import { HallModel, HallActivityType, EventTrack } from '../../model/HallModel';
import { conmmon_http } from '../../../../../script/net/common_http';
import HttpUtil from '../../../../../script/framework/net/http_util';
import { UIToggle } from '../../../../../script/utility/ui_extend/UIToggle';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HotUpdateManager } from '../../../../../script/framework/hotUpdate/HotUpdateManager';
import { hall_scrollActivity } from './hall_scrollActivity';

@ccclass('Hall')
export default class Hall extends Module<HallView, null>{

    private readonly SideHotName = "Hot"
    private readonly SideCasinoName = "Casino"
    private readonly SideSlotsName = "Slots"
    private readonly SideSprotsRules = "Sprots"
    private readonly SideGamesRules = "Games"
    private readonly SideFishingRules = "Fishing"

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/hall/public_hall";
        this.viewType = HallView;
        this.modelType = null;
        this.layer = ViewLayer.Low
    }

    private hallData:any = []
    private startPos: Vec2 = new Vec2()
    private offset: Vec2 = new Vec2()
    private lastTime: number = 0
    private viceNode: HallViceNode  
    private isNarrowScreen: boolean = true
    
    //首充配置
    private _isOpenfirstCharge = false;

    public isActive(): boolean {
        return this.node.active
    }

    private getValid() {
        return this && this.isValid && this.node && this.node.isValid && this.view && this.view.isValid && this.view.node && this.view.node.isValid
    }

    onInit() {
        HallModel.loadSceneInfo.hall = Math.floor(new Date().getTime() / 1000);
        this.isNarrowScreen = (view.getVisibleSize().width / view.getVisibleSize().height) <= 2
        this.initNodeListeners()
        this.registerEvent(true)
        this.view.hallTemplate.setSelectToggle(CommonName.MODULE.Hall);
        this.reqShopInfo();
        this.scheduleOnce(this._preloadRes, 1);
        this.initRank();        
        this.getHallActList();
        this.judgeActivityPopUp();
        this.reportLoadTime();
        this.initActivityInfo()
        if (HallModel.activeFirstChargeFlag) {
            this._reqFirstActivityCfg();
        }
        this.scheduleOnce(() => { game.frameRate = 60 }, 1)
        this.scheduleOnce(this.reportInfo, 2);
        this.getHallMailPot();    
        this.initRegression();    
        this.getHallRewardPot();
        this.warterReward();
    }

    private warterReward() {
        conmmon_http.reqNewUserWaterReward(this, conmmon_http.rspNewUserWaterReward.bind(this));
    }

    private reportLoadTime(){
        if (HallModel.loadSceneInfo.isFlag) {
            HallModel.loadSceneInfo.isFlag = false;
            let time = (HallModel.loadSceneInfo.hall - HallModel.loadSceneInfo.load);
            if (time < 1) {
                time = 1;
            }
            conmmon_http.reqReportEventTracking(this, EventTrack.load_enter_hall, time.toString(), conmmon_http.rspReportEventTracking.bind(this));
        }
    }

    private initNodeListeners() {
        Utility.instance.onButtonClick(this.view.addcashBtn, this.onClickAddCash, this, false)
        Utility.instance.onButtonClick(this.view.withdraw, () => this.onModuleClick(CommonName.MODULE.WithdrawNew), this, false)
        Utility.instance.onButtonClick(this.view.vip, this.jumpFunVip, this, false)
        Utility.instance.onButtonClick(this.view.btnRank, this.jumpRank, this, false)
        Utility.instance.onButtonClick(this.view.btnFirstCharge, this.jumpFirstCharge, this, false)
        Utility.instance.onButtonClick(this.view.btn_avatar, this.jumpFunVip, this, false)
        Utility.instance.onButtonClick(this.view.btnMonthlyCard, this.jumpMonthlyCard, this, false)
        Utility.instance.onButtonClick(this.view.btnTreasurebowl, this.jumpTreasurebowl, this, false)

        Utility.instance.onButtonClick(this.view.btnRecent, this.onClickRecent, this, false)
        Utility.instance.onButtonClick(this.view.btnAllgame, this.onClickAllgame, this, false)
        Utility.instance.onButtonClick(this.view.btnPalynow, this.onClickAllgame, this, false)
        Utility.instance.onButtonClick(this.view.btnRechargewheel, this.jumpRechargeWheel, this, false)
        Utility.instance.onButtonClick(this.view.money_layout, this.onClickWallet, this, false)
        
        //刷新金币
        Utility.instance.onButtonClick(this.view.refreshBtn, this.updateUserCoin, this, false)

        this.view.sideSortToggleGroup.setListener((sender: Toggle) => { this.onSideSortChecked(sender.node.name) })     
    }

    private registerEvent(reg: boolean = true) {
        let fun = reg ? "on" : "off"
        EventManager.instance[fun](CommonName.EVENT.Respon_Refresh_UserInfo, () => this.setUserInfo(true), this)
        EventManager.instance[fun](CommonName.EVENT.Back_To_Home, this.onBackToHome, this)
        EventManager.instance[fun](Game.EVENT_HIDE, this.onApplicationHide.bind(this), this)
        EventManager.instance[fun](Game.EVENT_SHOW, this.onApplicationShow.bind(this), this)
        EventManager.instance[fun](CommonName.EVENT.Update_USER_COIN,this.updateUserCoin,this)
        EventManager.instance[fun](CommonName.EVENT.UpdateActivityPopUp,this.judgeActivityPopUp,this)
        EventManager.instance[fun](CommonName.EVENT.UpdateEmailRedDot,this.updateEmailRedDot,this);
        EventManager.instance[fun](CommonName.EVENT.UpdateRewardRedDot,this.UpdateRewardRedDot,this);
        EventManager.instance[fun](CommonName.EVENT.UpdateRegressionRedDot,this._reqRegressionRedDot,this);
    }

    private onApplicationHide() {
        this.lastTime = Date.now()
    }

    private onApplicationShow() {
        // let leaveTime = Date.now() - this.lastTime
        // if (this.currentReqGameID <= 0 && GameConfig.runningGameID <= 0) {
        //     if (leaveTime > 60 * 1000) LoginServer.disconnect()
        // }
    }

    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)
    
        this.hallData = intentData ? intentData: JSON.parse(HallModel.GetLocalHallData());
        this.initData(this.hallData)   
        this.setUserInfo(false)
        conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
    }

    onDestroy() {
        this.registerEvent(false)
        this.unscheduleAllCallbacks()
    }

    onShow(data: any) {
        LoginServer.requestRefreshUserInfo()
        this.setUserInfo(false)
        this.showNetPrompt(false)

        if (data && data.PlayBgm) {
            AudioManager.instance.playMusic(CommonName.PUBLIC_SOUNDURL.Bgm)
        }
        if (this.viceNode && this.viceNode.node.active) {
            this.viceNode.refreshGameList()
        }
    }

    private onBackToHome() {
        this.warterReward();
    }

    private onModuleClick(module: string, data?: any) {
        if(module==CommonName.MODULE.WithdrawNew){
            let user = UserDataModel.GetCurrentUser()
            if (!user || !this.view) return
            if(user.phone.trim() == ""){ //没绑手机号
                ResourceManager.loadRes("prefabs/recharge/bindPhone", Prefab, (err, prefab: Prefab) => {
                    if (!err) {
                        if (!this || !this.isValid || !this.node || !this.node.isValid) {
                            return
                        }
                        let bind: Node = instantiate(prefab)
                        bind.active = true
                        bind.parent = this.node
                        find("bg/lbl_title",bind).getComponent(Label).string = "Bind Phone No"
                        find("bg/lbl_tip",bind).getComponent(Label).string = "To ensure the security of your funds, please link your mobile number."
                        let bindingPhone:any = bind.getComponent("bindingPhone")
                        bindingPhone.setCallBack(null,()=>{
                            conmmon_http.reqWithdrawalAccountList()
                        })
                    }
                })
            }
            else{
                conmmon_http.reqWithdrawalAccountList()
            }
        }else{
            ModuleManager.instance.showModule(module, data)
        }
    }

    private onClickAddCash(){
        ModuleManager.instance.showModule(CommonName.MODULE.Recharge, CommonName.MODULE.Hall, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
        })
    }

    private setUserInfo(isRefresh: boolean = true) {
        if (!this.getValid()) {
            return
        }
        let user = UserDataModel.GetCurrentUser()
        if (!user) {
            return
        }
        this.view.id.string = ""+user.uid
        let cash = Utility.instance.numThousandsFormat(UserDataModel.GetCashAmount().toString())
        let isModifyGold = cash != this.view.goldNum.string //金币发生变化
        this.view.goldNum.string = "₹ "+cash
        SpriteDataModel.SetHead(this.view.avatar, user.avatar_url);
        SpriteDataModel.LoadResources(`images/vip/vip${user.vip}`, (spf: SpriteFrame, err?: Error) => {
            if (err || !spf) {
                this.view.vip.active = false;
            } else {
                this.view.vip.getComponent(Sprite).spriteFrame = spf;
            }
        });
    }   

    // 更新玩家金币值
    private updateUserCoin(){
        conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
    }

    /**
     * 初始化网络数据
     * @param data 
     */
    initData(data:any){
        if(!data) return

        //显示分类ToggleGroup
        this.showSideSortView(data.list)

        let scrollActivity = this.view.activityScroll.getComponent(hall_scrollActivity)
        if(scrollActivity?.isValid){
            scrollActivity.initData(data)
        }
    }

    /**
     * 显示分类ToggleGroup
     * @param data 
     */
    showSideSortView(data:any){
        if(!data || !this) return
        if(!this.view) return
        for(let child of this.view.sideSortContent.children){
            child.active = false;
            //navi_type (1.HOT 2.Casino 3.Slots 4.Games 5.Fishing 6.Sports 7.Other)
            for(let info of data){  
                if(info?.navi_type == 1 && child.name == this.SideHotName){
                    child.active = true
                    child.getComponent(UIToggle).isChecked =  HallModel.hallSelectIndex == info.navi_type
                }
                else if(info?.navi_type == 2 && child.name == this.SideCasinoName){
                    child.active = true
                    child.getComponent(UIToggle).isChecked =  HallModel.hallSelectIndex == info.navi_type
                }
                else if(info?.navi_type == 3 && child.name == this.SideSlotsName){
                    child.active = true
                    child.getComponent(UIToggle).isChecked =  HallModel.hallSelectIndex == info.navi_type
                }
                else if(info?.navi_type == 4 && child.name == this.SideGamesRules){
                    child.active = true
                    child.getComponent(UIToggle).isChecked =  HallModel.hallSelectIndex == info.navi_type
                }
                else if(info?.navi_type == 5 && child.name == this.SideFishingRules){
                    child.active = true
                    child.getComponent(UIToggle).isChecked =  HallModel.hallSelectIndex == info.navi_type
                }
                else if(info?.navi_type == 6 && child.name == this.SideSprotsRules){
                    child.active = true
                    child.getComponent(UIToggle).isChecked =  HallModel.hallSelectIndex == info.navi_type
                }
            }
        }

        this.isSelectAllGame(true)
        let hall_brandlist = this.view.brandlist.getComponent(Hall_brandlist)
        if(hall_brandlist?.isValid){
            hall_brandlist.analyzeBrandList(data,HallModel.hallSelectIndex,(navi_type)=>{
                this.sideSortIsSelect(data,navi_type)
            },true)
        }
    }

    /**
     * 侧边栏选择
     * @param data 
     */
    sideSortIsSelect(data:any,navi_type:number){
        if(!data) return
        if(!this?.view) return
        if(HallModel.hallSelectIndex == navi_type) return

        HallModel.hallSelectIndex = navi_type
        let selectNode: Node
        for(let child of this.view.sideSortContent.children){
            if(navi_type == 1 && child.name == this.SideHotName){
                child.getComponent(UIToggle).isChecked = true
                selectNode = child
            }
            else if(navi_type == 2 && child.name == this.SideCasinoName){
                child.getComponent(UIToggle).isChecked = true
                selectNode = child
            }
            else if(navi_type == 3 && child.name == this.SideSlotsName){
                child.getComponent(UIToggle).isChecked = true
                selectNode = child
            }
            else if(navi_type == 4 && child.name == this.SideGamesRules){
                child.getComponent(UIToggle).isChecked = true
                selectNode = child
            }
            else if(navi_type == 5 && child.name == this.SideFishingRules){
                child.getComponent(UIToggle).isChecked = true
                selectNode = child
            }
            else if(navi_type == 6 && child.name == this.SideSprotsRules){
                child.getComponent(UIToggle).isChecked = true
                selectNode = child
            }            
        }
        this.playSideSortAni(selectNode)
        //判断超出滚动区域
        let height = this.view.sideSortContent.getComponent(UITransform).contentSize.height
        let per = (navi_type - 1) / 6
        this.view.sideSortToggleGroup.node.getComponent(ScrollView).scrollToOffset(v2(0, per * height), 1.0);
    }

    /**
     * 侧边排序响应
     * @param name  节点name
     */
    private onSideSortChecked(name: string) {
        AudioManager.instance.playButtonSound()  
        let navi_type:number = 1
        switch(name){
            case this.SideHotName:
                navi_type = 1
                break
            case this.SideCasinoName:
                navi_type = 2
                break
            case this.SideSlotsName:
                navi_type = 3
                break
            case this.SideGamesRules:
                navi_type = 4
                break
            case this.SideFishingRules:
                navi_type = 5
                break
            case this.SideSprotsRules:
                navi_type = 6
                break
            default:
                break;
        }
        if(HallModel.hallSelectIndex == navi_type) return
        this.playSideSortAni(this.view.sideSortContent.getChildByName(name))
        HallModel.hallSelectIndex = navi_type
        let hall_brandlist = this.view.brandlist.getComponent(Hall_brandlist)
        if(hall_brandlist.isValid){
            hall_brandlist.jumpSort(navi_type)
        }
    }

    private playSideSortAni(selectNode: Node) {
        //选中的ani动画
        let aniCom = selectNode.getComponent(UIToggle).on.getChildByName('ani').getComponent(sp.Skeleton)
        aniCom.setAnimation(0, 'start', false);
        aniCom.setCompleteListener(() => {
            aniCom.setAnimation(0, 'loop', true);
        })
    }

    private jumpFunVip(){
        ModuleManager.instance.showModule(CommonName.MODULE.Vip,CommonName.MODULE.Hall,()=>{
            ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
        })
    }

    private jumpRank() {
        ModuleManager.instance.showModule(CommonName.MODULE.ActivityRank, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
        })
    }

    private jumpFirstCharge() {
        this._isOpenfirstCharge = true;
        this._reqFirstActivityCfg(false);
    }

    private jumpMonthlyCard() {
        ModuleManager.instance.showModule(CommonName.MODULE.MonthlyCard)
    }

    private jumpTreasurebowl() {        
        ModuleManager.instance.showModule(CommonName.MODULE.ActivityTreasureBowl,CommonName.MODULE.Hall)
        conmmon_http.reqReportEventTracking(this, EventTrack.open_treasurebowl, "1", conmmon_http.rspReportEventTracking.bind(this));
    }

    private jumpRechargeWheel() {
        ModuleManager.instance.showModule(CommonName.MODULE.RechargeWheel, CommonName.MODULE.Hall, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
        })
    }

    private onClickWallet() {
        ModuleManager.instance.showModule(CommonName.MODULE.Wallet)
    }

    //请求商城配置
    public reqShopInfo(){
        let user = UserDataModel.GetCurrentUser();
        let msg = {
            baseUrl:Http_Define.getProductsList,
            params: {
                uid: user.uid,
                version:HotUpdateManager.getLocalVersion("main"),
                NoNetPrompt: true,
            }
        }
        HttpUtil.http_get(msg, this._rspShopInfo.bind(this), () => { console.log("获取商城数据失败") });
    }

    private _rspShopInfo(msg: any){
        if (msg && msg.code == 0) {
            HallModel.SetLocalShopData(msg.data);
        }
    }

    private _preloadRes() {
        if (HallModel.preloadEarnMoney) {
            HallModel.preloadEarnMoney = false;
            ResourceManager.preloadRes("prefabs/earnMoney/public_earnMoney", Prefab, null);
            ResourceManager.preloadRes("prefabs/rank/activityRank", Prefab, null);
        }
    }

    private getHallActList(){
        if(HallModel.isGetHallActList){
            this._reqHallActList();
        }
    }

    private judgeRankPopUp(){
        if(!this.isPopUp(HallModel.GetLocalActivityTime("AcitvityRankPopUp"))){
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityRankPopUp);
        }
    }

    private judgeFirstCharge() {
        if (!this.isPopUp(HallModel.GetLocalActivityTime("ActivityFirstCharge"))) {
            this._reqFirstActivityCfg();
        }
    }

    private judgeDailybonus() {
        if (!this.isPopUp(HallModel.GetLocalActivityTime("ActivityDailyBonus"))) {
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityDailyBonus);
        }
    }

    private judgeRegressionPopUp(){
        if(!this.isPopUp(HallModel.GetLocalActivityTime("ActivityRegression"))){
            // if (this.view?.hallTemplate) {
            //     this.view.hallTemplate.jumpRegressionActivity()
            // }
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityRegression);
        }
    }

    private judgeShareTurntablePopUp() {
        if(!this.isPopUp(HallModel.GetLocalActivityTime("ActivityShareTurntable"))){
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityShareTurntable);
        }
    }

    private judgeSocialMediaPopUp(){
        if(!this.isPopUp(HallModel.GetLocalActivityTime("ActivitySocialMedia"))){
            ModuleManager.instance.showModule(CommonName.MODULE.ActivitySocialMedia);
        }
    }

    private isPopUp(getTime:any) {
        let popTime = getTime;
        let time = Utility.instance.getTimeStr(new Date());
        if (time == popTime) {
            return true;
        } else {
            return false;
        }
    }

    //请求大厅主界面活动列表
    private _reqHallActList() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getHallActList,
            Params: {},
            Callback: this._rspHallActList.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    //返回大厅主界面活动列表
    private _rspHallActList(msg: any) {
        if (msg && msg.code == 0) {
            HallModel.isGetHallActList=false;
            this._updateActInfo(msg.data);
        }
    }

    //请求首充活动配置
    private _reqFirstActivityCfg(NoNetPrompt = true) {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getFirstActivityCfg,
            Params: {},
            Callback: this._rspFirstActivityCfg.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: NoNetPrompt,
        }
        HttpDataModel.Post(info);
    }

    //返回首充活动配置
    private _rspFirstActivityCfg(msg: any) {
        if (msg && msg.code == 0) {
            if(this._isOpenfirstCharge){
                this._isOpenfirstCharge=false;
                ModuleManager.instance.showModule(CommonName.MODULE.ActivityFirstCharge, msg.data);
            }
        }else{
            this.updateFirstCharge();
        }
    }

    private _updateActInfo(msg: any){
        let list = msg.list;
        if (!list) return;
        for (let i = 0; i < list.length; i++) {
            if (list[i].act_id == HallActivityType.rank) {
                if (list[i].pop_up_open == 1) {
                    if (!this.isPopUp(HallModel.GetLocalActivityTime("AcitvityRankPopUp"))) {
                        UserDataModel.setAutoPopupFlag(CommonName.MODULE.ActivityRankPopUp, true);
                    }
                }

                if (list[i].icon_open == 1) {
                    if (this.view && this.view.btnRank) {
                        this.view.btnRank.active = true;
                        this.view.btnRank.position = HallModel.GetRankPos()                
                    }
                    HallModel.activeRankFlag=true;
                }
            }
            else if (list[i].act_id == HallActivityType.firstCharge) {
                if (list[i].pop_up_open == 1) {
                    if (!this.isPopUp(HallModel.GetLocalActivityTime("ActivityFirstCharge"))) {
                        UserDataModel.setAutoPopupFlag(CommonName.MODULE.ActivityFirstCharge, true);
                    }
                }
                
                if (list[i].icon_open == 1) {
                    if (this.view && this.view.btnFirstCharge) {
                        this.view.btnFirstCharge.active = true;
                    }
                    HallModel.activeFirstChargeFlag = true;
                }
            }
            else if (list[i].act_id == HallActivityType.dailybonus) {
                if (list[i].pop_up_open == 1) {
                    if (!this.isPopUp(HallModel.GetLocalActivityTime("ActivityDailyBonus"))) {
                        UserDataModel.setAutoPopupFlag(CommonName.MODULE.ActivityDailyBonus, true);
                    }
                }
            }
            else if (list[i].act_id == HallActivityType.monthlycard) {
                if (this.view?.btnMonthlyCard) {
                    this.view.btnMonthlyCard.active = list[i].icon_open == 1
                    if(this.view.btnMonthlyCard.active){                        
                        HallModel.monthlyCardFlag = true
                        this.initMonthCardRedDot()
                    }
                } 
            }
            else if (list[i].act_id == HallActivityType.turntable) {
                if (list[i].pop_up_open == 1) {
                    if (!this.isPopUp(HallModel.GetLocalActivityTime("ActivityShareTurntable"))) {
                        UserDataModel.setAutoPopupFlag(CommonName.MODULE.ActivityShareTurntable, true);
                    }
                }
                if (list[i].icon_open == 1) {
                    HallModel.turntableFlag = true
                }
            }
            else if (list[i].act_id == HallActivityType.regression) {
                if (list[i].pop_up_open == 1) {
                    if (!this.isPopUp(HallModel.GetLocalActivityTime("ActivityRegression"))) {
                        UserDataModel.setAutoPopupFlag(CommonName.MODULE.ActivityRegression, true)
                    }
                }

                if (list[i].icon_open == 1) {
                    if (this.view?.hallTemplate) {
                        this.view.hallTemplate.regressionBtn.active = true
                    }
                    HallModel.regressionFlag = true;
                    this._reqRegressionRedDot();
                }
            }
            else if (list[i].act_id == HallActivityType.treasureBowl) {
                if (list[i].icon_open == 1) {
                    HallModel.treasureBowlFlag = true
                }
            }
            else if (list[i].act_id == HallActivityType.dailyTask) {
                if (list[i].icon_open == 1) {
                    HallModel.dailyTaskFlag = true
                    if (this.view?.hallTemplate) {
                        this.view.hallTemplate.reward.active = true
                    }
                }
            }
            else if (list[i].act_id == HallActivityType.rechargeWheel) {
                if (list[i].icon_open == 1) {
                    HallModel.rechargeWheelFlag = true
                    this.view.btnRechargewheel.active = true
                }
            }
            else if (list[i].act_id == HallActivityType.socialMedia) {
                if (list[i].pop_up_open == 1) {
                    if (!this.isPopUp(HallModel.GetLocalActivityTime("ActivitySocialMedia"))) {
                        UserDataModel.setAutoPopupFlag(CommonName.MODULE.ActivitySocialMedia, true)
                    }
                }
            }           
        }
        
        this.initActivityInfo()
        this.judgeActivityPopUp();
    }

    private judgeActivityPopUp() {
        if (HallModel.isWebViewOpen) return;
        
        if (UserDataModel.getAutoPopupFlag(CommonName.MODULE.ActivityFirstCharge)) {
            UserDataModel.setAutoPopupFlag(CommonName.MODULE.ActivityFirstCharge, false);
            this._isOpenfirstCharge = true;
            this.judgeFirstCharge();
        } 
        else if (UserDataModel.getAutoPopupFlag(CommonName.MODULE.ActivityRegression)) {
            UserDataModel.setAutoPopupFlag(CommonName.MODULE.ActivityRegression, false);
            this.judgeRegressionPopUp();
        }
        else if (UserDataModel.getAutoPopupFlag(CommonName.MODULE.ActivityDailyBonus)) {
            UserDataModel.setAutoPopupFlag(CommonName.MODULE.ActivityDailyBonus, false);
            this.judgeDailybonus();
        }
        else if (UserDataModel.getAutoPopupFlag(CommonName.MODULE.ActivityRankPopUp)) {
            UserDataModel.setAutoPopupFlag(CommonName.MODULE.ActivityRankPopUp, false);
            this.judgeRankPopUp();
        }
        else if (UserDataModel.getAutoPopupFlag(CommonName.MODULE.ActivityShareTurntable)) {
            UserDataModel.setAutoPopupFlag(CommonName.MODULE.ActivityShareTurntable, false);
            this.judgeShareTurntablePopUp();
        }
        else if (UserDataModel.getAutoPopupFlag(CommonName.MODULE.ActivitySocialMedia)) {
            UserDataModel.setAutoPopupFlag(CommonName.MODULE.ActivitySocialMedia, false);
            this.judgeSocialMediaPopUp();
        }
    }

    private updateFirstCharge(){
        if (!this.view) return;
        this.view.btnFirstCharge.active = false;
        HallModel.activeFirstChargeFlag = false;
        this.initActivityInfo()
    }

    private initRank(){
        this.view.btnRank.active = HallModel.activeRankFlag;
        if(this.view.btnRank.active){
            this.view.btnRank.position = HallModel.GetRankPos()
        }

        this.view.btnFirstCharge.active = HallModel.activeFirstChargeFlag;
        this.view.btnRank.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.view.btnRank.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.view.btnRank.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.view.btnRank.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    private onTouchStart(event: EventTouch) {
        this.startPos = event.getUILocation();
        this.offset = this.startPos.clone().subtract(new Vec2(this.view.btnRank.position.x, this.view.btnRank.position.y));
    }

    private onTouchMove(event: EventTouch) {
        let currentPos = event.getUILocation();
        let newPosition = currentPos.clone().subtract(this.offset);
        this.view.btnRank.position = new Vec3(newPosition.x, newPosition.y)
    }

    private onTouchEnd(event: EventTouch) {
        let currentPos = event.getUILocation();
        let dis = math.Vec2.distance(currentPos, this.startPos);
        if (dis < 40) {
            this.jumpRank();
        }
        HallModel.hallRankPos = new Vec3(this.view.btnRank.position)
        HallModel.SetLocalBtnPos("hallRankPos",JSON.stringify(HallModel.hallRankPos))
    }

    private onTouchCancel() {

    }

    private initActivityInfo(){
        if(HallModel.monthlyCardFlag){
            this.initMonthCardRedDot()
            this.view.btnMonthlyCard.active = true
            // if(!HallModel.treasureBowlFlag && !HallModel.activeFirstChargeFlag){
            //     this.view.btnMonthlyCard.getComponent(Widget).isAlignLeft = true
            //     this.view.btnMonthlyCard.getComponent(Widget).left = 432
            // }
        }
        this.view.btnTreasurebowl.active = HallModel.treasureBowlFlag //&& !this.view.btnFirstCharge.active
        if (this.view?.hallTemplate) {
            this.view.hallTemplate.reward.active = HallModel.dailyTaskFlag
        }

        this.view.btnRechargewheel.active = HallModel.rechargeWheelFlag
    }

    private reportInfo() {
        if (!HallModel.GetLocalReport("reportTime")) {
            conmmon_http.reqDelayBind(this, conmmon_http.rspDelayBind.bind(this));
        }
    }

    private onClickAvatar(){
        ModuleManager.instance.showModule(CommonName.MODULE.HeadInfo);
    }

    private getHallMailPot(){
        conmmon_http.reqGetHallMailPot(this, conmmon_http.rspGetHallMailPot.bind(this));
    }

    private getHallRewardPot() {
        conmmon_http.reqGetRewardPot([1,2], this, conmmon_http.rspGetRewardPot.bind(this));
    }

    //刷新邮件红点
    public updateEmailRedDot(msg: any) {
        this.view?.hallTemplate?.updateEmailRedDot(msg);
    }

    //请求回归活动红点
    private _reqRegressionRedDot() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getReturnBackIconPot,
            Params: {},
            Callback: this._rspRegressionRedDot.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    //回归活动红点返回
    private _rspRegressionRedDot(msg: any) {        
        if (msg && msg.code == 0) {
            let unread_cnt = msg.data?.pot_cnt || 0;
            if (this.view?.hallTemplate) {
                let red = this.view.hallTemplate.regressionBtn?.getChildByName("sp_red");
                if (red) red.active = unread_cnt > 0 ? true : false;
            }
        }       
    }

    private initRegression() {
        if (this.view?.hallTemplate) {
            this.view.hallTemplate.regressionBtn.active = HallModel.regressionFlag;
            if (HallModel.regressionFlag) {
                this._reqRegressionRedDot();
            }
        }
    }
    // 刷新每日活动红点
    public UpdateRewardRedDot(msg: any) {
        this.view?.hallTemplate?.updateRewardRedDot(msg);
    }
    
    private onClickRecent(){
        this._reqGetRecentGameList()
        this.isSelectAllGame(false)
    }

    private onClickAllgame(){
        this.isSelectAllGame(true)
        let hall_brandlist = this.view.brandlist.getComponent(Hall_brandlist)
        if(hall_brandlist?.isValid){
            hall_brandlist.analyzeBrandList(this.hallData.list,HallModel.hallSelectIndex,(navi_type)=>{
                this.sideSortIsSelect(this.hallData.list,navi_type)
            },true)
        }
    }

    private isSelectAllGame(isSelect:boolean){
        this.view.empty.active = false      
        find("Sprite",this.view.btnRecent).active = !isSelect
        find("Sprite",this.view.btnAllgame).active = isSelect
        this.view.btnAllgame.getComponent(Button).interactable = !isSelect
        this.view.btnRecent.getComponent(Button).interactable = isSelect   
        this.view.sideSortToggleGroup.node.active = isSelect
        this.view.brandlist.node.position = v3(isSelect ? 70:0,106,0)
        this.view.brandlist.getComponent(Widget).updateAlignment()

        find("lbl_name",this.view.btnRecent).getComponent(Label).color = new Color().fromHEX(isSelect ? "#6A7EA4":"#FFD555")
        find("lbl_name",this.view.btnAllgame).getComponent(Label).color = new Color().fromHEX(isSelect ? "#FFD555":"#6A7EA4")
    }

    /**
     * 请求recent游戏列表
     */
    private _reqGetRecentGameList() {
        ModuleManager.instance.showNetPrompt()
        let info: PostData = {
            Target: this,
            Url: Http_Define.getRecentHistory,
            Params: {},
            Callback: this._rspGetRecentGameList.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * recent游戏列表返回
     * @param msg 
     */
    private _rspGetRecentGameList(msg: any) {
        ModuleManager.instance.hideNetPrompt()
        if (msg && msg.code == 0) {
            if(msg.data?.game_list){
                let enabled = this.view.btnRecent.getComponent(Button).interactable
                let hall_brandlist = this.view.brandlist.getComponent(Hall_brandlist)                
                if(hall_brandlist?.isValid && !enabled){
                    hall_brandlist.analyzeBrandList(msg.data.game_list.slice(0, 9),HallModel.hallSelectIndex,null,false)
                }
                this.view.empty.active = msg.data.game_list.length == 0
            }
            else{
                this.view.empty.active = true 
            }         
        }     
    }

    private _reqMonthCardRedDot() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getMonthCardPot,
            Params: {},
            Callback: this._rspMonthCardRedDot.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspMonthCardRedDot(msg: any) {
        if (msg && msg.code == 0) {
            let unread_cnt = msg.data?.pot_cnt || 0;
            if(this.view.btnMonthlyCard.isValid){
                let redDot = find("sp_red",this.view.btnMonthlyCard)
                if(!redDot?.isValid) return
                redDot.active = unread_cnt > 0                
            }
        }
    }

    private initMonthCardRedDot() {
        if (!HallModel.monthlyCardFlag) return
        this._reqMonthCardRedDot()             
    }

}