
import { _decorator, Component, Node, Label, macro, Sprite, RichText, Widget, UITransform } from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import EventManager from '../../../../../script/manager/event_manager';
import CommonName from '../../model/CommonName';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { HallModel,JumpType } from '../../model/HallModel';
import { conmmon_http } from '../../../../../script/net/common_http';
import { CommonFun } from '../../model/CommonFun';

const { ccclass, property } = _decorator;

@ccclass('promotionActivity')
export class promotionActivity extends Component {
    @property(Node)
    close: Node
    @property(Label)
    lbl_subTitle: Label
    @property(Label)
    lbl_title: Label
    @property(Label)
    lbl_countDown: Label
    @property(Node)
    btnjoin: Node
    @property(Node)
    content: Node
    @property(Sprite)
    spr_icon: Node

    @property(Label)
    top_content: Label
    @property(RichText)
    middle_content: RichText
    @property(RichText)
    bottom_content: RichText
    
    private Callback:Function
    private jump_type:number = 0
    onLoad() {
        this.registerEvent(true)
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
        Utility.instance.onButtonClick(this.btnjoin, this.joinFun, this, false)
    }
    
    setCallBack(callback: (data: any) => void) {
        this.Callback = callback
    }

    private registerEvent(reg: boolean = true) {
        let fun = reg ? "on" : "off"
        EventManager.instance[fun](CommonName.EVENT.GoToVIP, this.closeBtn, this) //跳转vip 关闭页面
    }

    /**
     * 关闭界面
     */
    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()
        this.Callback && this.Callback()
        this.registerEvent(false)
        this.unscheduleAllCallbacks()
        if(this.node.destroy){
            this.node.destroy()
        }    
    }

    /**
     * 初始化数据
     * data
     */
    initData(data:any){
        this.lbl_subTitle.string = data.subtitle
        this.lbl_title.string = data.headline
        this.jump_type = data.jump_type
        let activityImage = this.spr_icon.getComponent(Sprite); 
        SpriteDataModel.SetSprite(activityImage, data.inner_image_url) //加载远程图片地址

        this.top_content.string = data.top_content
        this.middle_content.string = data.middle_content
        this.bottom_content.string = data.bottom_content

        let wid = this.bottom_content.node.getComponent(Widget)
        if(data.bottom_align == "left"){
            this.bottom_content.node.getComponent(UITransform).anchorX = 0
            wid.isAlignLeft = true
            wid.left = 25
        }
        if(data.bottom_align == "right"){
            this.bottom_content.node.getComponent(UITransform).anchorX = 1
            wid.isAlignRight = true
            wid.right = 25
        }
        wid.updateAlignment()
        this.startCountDown(data.remain_sec,this.lbl_countDown,null)
    }

    /**
     * 跳转功能
     */
    private joinFun(){
        if(this.jump_type == JumpType.vip){  //跳转VIP
            EventManager.instance.dispatch(CommonName.EVENT.GoToVIP);       
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
        else if (this.jump_type == JumpType.freeBonus) {  //跳转奖金码兑换
            ModuleManager.instance.showModule(CommonName.MODULE.RewardCode);
        }
        else if (this.jump_type == JumpType.rechargeWheel) {  //充值轮盘
            ModuleManager.instance.showModule(CommonName.MODULE.RechargeWheel,CommonName.MODULE.Promotion,()=>{
                ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
            })
        }
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

    onDestroy() {
        this.registerEvent(false)
        this.unscheduleAllCallbacks()
    }
}