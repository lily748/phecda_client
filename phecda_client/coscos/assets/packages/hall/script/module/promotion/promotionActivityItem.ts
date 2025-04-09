
import { _decorator, Component, Node, Label, instantiate, Button,Sprite,macro,Prefab } from 'cc';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import Utility from '../../../../../script/utility/utility';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { promotionActivity } from './promotionActivity';
import { HallModel,JumpType } from '../../model/HallModel';
import EventManager from '../../../../../script/manager/event_manager';
import CommonName from '../../model/CommonName';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { CommonFun } from '../../model/CommonFun';
const { ccclass, property } = _decorator;

@ccclass('promotionActivityItem')
export default class promotionActivityItem extends Component {

    // @property(Label)
    // subtitle: Label = null
    @property(Label)
    headline: Label = null
    // @property(Label)
    // countdown: Label = null

    private promotionActivity:promotionActivity = null
    private jump_type: number = 0
    onLoad() {
    }

    /**
     * 显示节点
     * @param data 
     * @param parent 
     * @param isCache 
     */
    show(data:any,parent:Node,isCache:boolean = false){
        // this.subtitle.string = data.subtitle;  
        this.headline.string = data.headline;
        this.jump_type = data.jump_type;
        let activityImage = this.node.getComponent(Sprite); 
        SpriteDataModel.SetSprite(activityImage, data.outer_image_url) //加载远程图片地址

        let onItemClick = (e)=>{
            // if (!this.promotionActivity) {
            //     this.createNode("promotionActivity", parent, (node: Node) => {
            //         this.promotionActivity = node.getComponent(promotionActivity)
            //         this.promotionActivity.setCallBack(()=>{
            //             this.promotionActivity = null
            //         })
            //         this.promotionActivity.initData(data)
            //     })
            // } 
            // else {
            //     this.promotionActivity.node.active = true
            // }
            this.joinFun();
        }
        this.node.on(Button.EventType.CLICK, onItemClick, this)
        // if(!isCache){
        //     this.startCountDown(data.remain_sec,this.countdown,null)
        // }
        // else{
        //     this.countdown.string = "--:--:--"
        // }
    }

    private createNode(name: string, parent: Node, callback: (node: Node) => void) {
        ResourceManager.loadRes("prefabs/promotion/" + name, Prefab, (err, prefab: Prefab) => {
            if (!err) {
                if (!this || !this.isValid || !this.node || !this.node.isValid) {
                    return
                }
                let preNode: Node = instantiate(prefab)
                preNode.setParent(parent)
                callback && callback(preNode)
            }
        })
    }

    private countDownTime: number
    private countDownLabel: Label
    private countDownComplete: () => void
    private startCountDown(time: number, label: Label, complete: () => void) {
        this.countDownTime = time
        this.countDownLabel = label
        this.countDownComplete = complete
        this.schedule(this.countDown, 0.1, macro.REPEAT_FOREVER)
    }

    private countDown(dt: number) {
        if (this.isValid) {
            this.countDownTime -= dt
            this.countDownLabel.string = Utility.instance.formatCountDownTime(this.countDownTime)
            if (this.countDownTime <= 0) {
                this.unscheduleAllCallbacks()
                this.countDownComplete && this.countDownComplete()
                this.countDownComplete = null
            }
        }
    }

    /**
     * 跳转功能
     */
    private joinFun(){
        if(this.jump_type == JumpType.vip){  //跳转VIP            
            ModuleManager.instance.showModule(CommonName.MODULE.Vip,CommonName.MODULE.Promotion,()=>{
                ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
            })
        }
        else if(this.jump_type == JumpType.earn){  //跳转代理页面
            ModuleManager.instance.showModule(CommonFun.GetEarnMoneyName(),null,()=>{
                ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
            })
        }
        else if(this.jump_type == JumpType.rank){  //跳转排行榜
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityRank,"Promo",()=>{
                ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
            })
        }
        else if(this.jump_type == JumpType.turntable){  //跳转转盘
            ModuleManager.instance.showModule(CommonName.MODULE.TurnTable,CommonName.MODULE.Promotion,()=>{
                ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
            })
        }
        else if(this.jump_type == JumpType.firstCharge){  //跳转首充
            HallModel.isFirstCharg = true;
            ModuleManager.instance.showModule(CommonName.MODULE.Recharge,CommonName.MODULE.Promotion,()=>{
                ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
            })
        }
        else if (this.jump_type == JumpType.dailyBonus) {  //跳转签到
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityDailyBonus);
        }
        else if (this.jump_type == JumpType.monthlycard) {  //跳转月卡
            ModuleManager.instance.showModule(CommonName.MODULE.MonthlyCard);
        }
        else if (this.jump_type == JumpType.regression) {  //跳转回归活动
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityRegression);
        }
        else if (this.jump_type == JumpType.treasureBowl) {  //聚宝盆
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityTreasureBowl,CommonName.MODULE.Promotion);
        }
        else if (this.jump_type == JumpType.freeBonus) {  //跳转奖金兑换
            ModuleManager.instance.showModule(CommonName.MODULE.RewardCode);
        }
        else if (this.jump_type == JumpType.rechargeWheel) {  //充值轮盘
            ModuleManager.instance.showModule(CommonName.MODULE.RechargeWheel,CommonName.MODULE.Promotion,()=>{
                ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
            })
        }
    }


    onDestroy() {
        this.unscheduleAllCallbacks()
    }

}