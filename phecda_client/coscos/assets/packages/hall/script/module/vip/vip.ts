import { instantiate,  _decorator,SpriteFrame,Sprite,Prefab,Node,game,Button,find } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import VipView from "./vip_view";
import Utility from '../../../../../script/utility/utility';
import AudioManager from '../../../../../script/manager/audio_manager';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import EventManager from '../../../../../script/manager/event_manager';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import HttpUtil from '../../../../../script/framework/net/http_util';
import { vip_scrollActivity } from './vip_scrollActivity';
import { conmmon_http } from '../../../../../script/net/common_http';
import { HttpDataModel } from '../../model/HttpDataModel';
import { PostData } from '../../model/HttpDataModel';
import { GameData } from '../../model/GameData';

const { ccclass } = _decorator;

@ccclass('Vip')
export default class Vip extends Module<VipView, null>{
    private preModuleName = ""
    private vipList:any = []
    private lastClickTime: number = 0
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/vip/public_vip";
        this.viewType = VipView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        EventManager.instance.on(CommonName.EVENT.Respon_Refresh_UserInfo, this.setUserInfo, this)

        Utility.instance.onButtonClick(this.view.closeBtn, this.onClose, this, false)
        Utility.instance.onButtonClick(this.view.btn_wallet, this.onClickWallet, this, false)
        Utility.instance.onButtonClick(this.view.btn_mybonus, this.onClickMyBonus, this, false)
        Utility.instance.onButtonClick(this.view.avatar.node, this.onClickAvatar, this, false)
        
        this.setUserInfo()
        this.scheduleOnce(() => { game.frameRate = 60 }, 1)
    }

    private onClose() {
        AudioManager.instance.playCloseWindowSound()

        let showModule = this.preModuleName == "" ? CommonName.MODULE.Hall : this.preModuleName
        ModuleManager.instance.showModule(showModule, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.Vip)
        })
    }

    private onClickWallet(){
        ModuleManager.instance.showModule(CommonName.MODULE.Wallet)
    }

    private onClickMyBonus(){
        if (Date.now() - this.lastClickTime < 1000) return        
        AudioManager.instance.playCloseWindowSound()

        let vipBonusHistory = find("vipBonusHistory",this.view.node)
        if(vipBonusHistory && vipBonusHistory.isValid){
            vipBonusHistory.active = true
            return
        }

        this.lastClickTime = Date.now()
        this.createNode("vipBonusHistory", this.view.node,null)
    }

    private onClickAvatar(){
        ModuleManager.instance.showModule(CommonName.MODULE.HeadInfo);
    }

    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)
        
        this.preModuleName = intentData
        this.reqVipConfig()
    }

    private setUserInfo() {
        let user = UserDataModel.GetCurrentUser()
        if (!user || !this.view) return
        this.view.idName.string = "" + user.uid
        this.view.coin.string = "₹" + Utility.instance.numThousandsFormat(UserDataModel.GetCashAmount().toString())
        SpriteDataModel.SetHead(this.view.avatar, user.avatar_url);
        SpriteDataModel.LoadResources(`images/vip/vip${user.vip}`, (spf: SpriteFrame, err?: Error) => {
            if(err || !spf) {
                this.view.vip.active = false;
            }
            else{
                this.view.vip.getComponent(Sprite).spriteFrame = spf;
            }
        });
    }

    private showConfiguration(data:any){
        if(!this.node?.isValid) return
        if(!data) return
        this.vipList = data.list

        if(typeof data.cfg_img == 'string' && data.cfg_img.trim() != ""){
            SpriteDataModel.SetSprite(this.view.spr_level, data.cfg_img)
        }

        let scrollVip = this.view.vipList.getComponent(vip_scrollActivity)
        if(scrollVip?.isValid && data?.list){
            scrollVip.initData(data.list,(vipLv)=>{
                this.updateVipInfo(vipLv)
            })
        }      
    }

    updateVipInfo(vipLv:number){
        if(!this.vipList) return
        if(this.vipList.length < 1) return

        let next_lv = vipLv+1
        let max_lv = this.vipList[this.vipList.length-1].vip_level
        next_lv = next_lv > max_lv ? max_lv:next_lv

        let vipData = this.vipList[next_lv]
        // this.view.lbl_currVip.string = Utility.instance.format(`VIP{0} Privileges`, ""+next_lv)
        this.view.lbl_upgradeAmount.string = "₹" + Utility.instance.numThousandsFormat(""+vipData.level_upgrade_bonus/100)
        this.view.lbl_monAmount.string = "₹" + Utility.instance.numThousandsFormat(""+vipData.monthly_bonus/100)                   
        this.view.lbl_dailyAmount.string = "₹" + Utility.instance.numThousandsFormat(""+vipData.daily_withdrawal_limit/100)
        
        if(parseInt(GameData.getAgentMode())==0){
            this.view.lbl_weekAmountTitle.string = "Weekly Bonus"
            this.view.spr_betRebate.spriteFrame = this.view.sf_betRebate[0]            
            this.view.lbl_weekAmount.string = "₹" + Utility.instance.numThousandsFormat(""+vipData.weekly_bonus/100)
        }
        else{
            if(vipData.bet_rebate_rate.trim().length > 0){
                this.view.lbl_weekAmount.string = vipData.bet_rebate_rate + "%"
            }
            this.view.lbl_weekAmountTitle.string = "Bet Rebate"
            this.view.spr_betRebate.spriteFrame = this.view.sf_betRebate[1]
        }

        // this.view.lbl_betAmount.string = vipData.total_withdrawal_limit == -1 ? "no limit":("₹" + Utility.instance.numThousandsFormat(""+vipData.total_withdrawal_limit/100))

        this.view.btn_upgradeReceive.active = true
        this.view.btn_upgradeReceive.getComponent(Button).interactable = false
        let lbl_content = find("lbl_content",this.view.btn_upgradeReceive)
        if(lbl_content.isValid) lbl_content.active = false
        let suo = find("suo",this.view.btn_upgradeReceive)
        if(suo.isValid) suo.active = true
        

        this.view.btn_monReceive.active = true
        this.view.btn_monReceive.getComponent(Button).interactable = false
        lbl_content = find("lbl_content",this.view.btn_monReceive)
        if(lbl_content.isValid) lbl_content.active = false
        suo = find("suo",this.view.btn_monReceive)
        if(suo.isValid) suo.active = true


        this.view.btn_weekReceive.active = parseInt(GameData.getAgentMode())==0        
        this.view.btn_weekReceive.getComponent(Button).interactable = false
        lbl_content = find("lbl_content",this.view.btn_weekReceive)
        if(lbl_content.isValid) lbl_content.active = false
        suo = find("suo",this.view.btn_weekReceive)
        if(suo.isValid) suo.active = true

        let user = UserDataModel.GetCurrentUser()
        if(!user) return
        if(user.vip >= vipData.vip_level){
            if(!vipData.is_recived_lub && vipData.level_upgrade_bonus > 0){
                    this.view.btn_upgradeReceive.getComponent(Button).interactable = true
                    let lbl_content = find("lbl_content",this.view.btn_upgradeReceive)
                    if(lbl_content.isValid){
                        lbl_content.active = true
                    }
                    let suo = find("suo",this.view.btn_upgradeReceive)
                    if(suo.isValid){
                        suo.active = false
                    }
                    this.view.btn_upgradeReceive.off(Button.EventType.CLICK)
                    this.view.btn_upgradeReceive.on(Button.EventType.CLICK, ()=>{ 
                        this.reqReceiveVIPAward(2,vipData.vip_level)                 
                    }, this)
            }
            else{
                this.view.btn_upgradeReceive.active = false
            }

            if(!vipData.is_recived_mb && vipData.monthly_bonus > 0){                
                this.view.btn_monReceive.getComponent(Button).interactable = true
                let lbl_content = find("lbl_content",this.view.btn_monReceive)
                if(lbl_content.isValid){
                    lbl_content.active = true
                }
                let suo = find("suo",this.view.btn_monReceive)
                if(suo.isValid) {
                    suo.active = false
                }
                this.view.btn_monReceive.off(Button.EventType.CLICK)
                this.view.btn_monReceive.on(Button.EventType.CLICK, ()=>{
                    this.reqReceiveVIPAward(1,vipData.vip_level)
                }, this)                
            }
            else{
                this.view.btn_monReceive.active = false
            }
            
            if(parseInt(GameData.getAgentMode())==0){
                if(!vipData.is_recived_wb && vipData.weekly_bonus > 0){               
                    this.view.btn_weekReceive.getComponent(Button).interactable = true
                    let lbl_content = find("lbl_content",this.view.btn_weekReceive)
                    if(lbl_content.isValid) {
                        lbl_content.active = true
                    }
                    let suo = find("suo",this.view.btn_weekReceive)
                    if(suo.isValid) {
                        suo.active = false
                    }
                    this.view.btn_weekReceive.off(Button.EventType.CLICK)
                    this.view.btn_weekReceive.on(Button.EventType.CLICK, ()=>{
                        this.reqReceiveVIPAward(3,vipData.vip_level)
                    }, this)                
                }
                else{
                    this.view.btn_weekReceive.active = false
                }
            }     
        }
    }


    /**
     * 创建节点
     * @param name 
     * @param parent 
     * @param callback 
     */
    private createNode(name: string, parent: Node, callback: (node: Node) => void) {
        ResourceManager.loadRes("prefabs/vip/" + name, Prefab, (err, prefab: Prefab) => {
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
        game.frameRate = 45
        EventManager.instance.off(CommonName.EVENT.Respon_Refresh_UserInfo, this.setUserInfo, this)
    }


    /**
     * 请求vip配置
     * @returns 
     */
    public reqVipConfig() {
        let user = UserDataModel.GetCurrentUser();
        if (!user) return;
        ModuleManager.instance.showNetPrompt();
        let msg = {
            baseUrl: Http_Define.getVipConfig,
            params: {
                uid: user.uid,
            }
        }
        HttpUtil.http_get(msg, this._rspVipConfig.bind(this), () => { console.log("获取vip配置数据失败") });
    }

    private _rspVipConfig(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg?.code == 0) {
            if(msg.data){
                this.showConfiguration(msg.data)
            }
        }
    }

    /**
     * 请求 VIP Award 奖励类型 1-每月奖励 2-等级奖励
     * @returns 
     */
    private reqReceiveVIPAward(type:number,vipLevel:number){
        ModuleManager.instance.showNetPrompt();

        let params = {
            award_type: type,
            vip_level: vipLevel,
        }

        let info: PostData = {
            Target: this,
            Url: Http_Define.receiveVIPAward,
            Params: params,
            Callback: this._rspReceiveVIPAward.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * ReceiveVIPAward 回调
     * @param msg 
     */
    private _rspReceiveVIPAward(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            if(!msg.data) return
            //更新配置
            this.reqVipConfig()

            //领取了money 更新玩家信息
            conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
            ModuleManager.instance.toastLong("Received successfully")
        }
    }
}