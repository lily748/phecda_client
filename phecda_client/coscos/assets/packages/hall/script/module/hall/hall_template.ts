import { _decorator, Component, Node,find,Vec2,EventTouch, Vec3, Widget, SpriteFrame,Sprite,UITransform,sys,math} from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { GameConfig } from '../../../../../script/com/game_config';
import { HallModel } from '../../model/HallModel';
import { CommonFun } from '../../model/CommonFun';
const { ccclass, property } = _decorator;

@ccclass('HallTemplate')
export class HallTemplate extends Component {

    private readonly HomeName = "Home"
    private readonly PromotionName = "Promotion"
    private readonly EarnMoneyName = "EarnMoney"
    private readonly AccountRules = "Account"
    private readonly Turntable = "Turntable"

    @property(Node)
    downloadBtn: Node = null
    @property(Node)
    emailBtn: Node = null
    @property(Node)
    Chat: Node = null
    @property([SpriteFrame])
    ChatFrame: SpriteFrame[] = []
    @property(Node)
    ChatIcon: Node = null

    @property(Node)
    btnHome: Node = null
    @property(Node)
    btnPromotion: Node = null
    @property(Node)
    btnEarnMoney: Node = null
    @property(Node)
    btnAccount: Node = null
    @property(Node)
    btnTurntable: Node = null
    @property(Node)
    regressionBtn: Node = null

    @property([SpriteFrame])
    homeFrame: SpriteFrame[] = []
    @property([SpriteFrame])
    promotionFrame: SpriteFrame[] = []
    @property([SpriteFrame])
    earnMoneyFrame: SpriteFrame[] = []
    @property([SpriteFrame])
    accountFrame: SpriteFrame[] = []
    @property(Sprite)
    sprRead: Sprite = null

    @property(Node)
    bottomSelect: Node = null

    @property(Node)
    ChatNew: Node = null

    @property(Node)
    reward: Node = null

    private startPos: Vec2 = new Vec2()
    private offset: Vec2 = new Vec2()
    private isChatMove:boolean = false
    onLoad() {
        this.initNodeListeners() 
    }

    start () {
        this.Chat.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    private initNodeListeners() {
        Utility.instance.onButtonClick(this.emailBtn, () => this.onModuleClick(CommonName.MODULE.Email), this, false)
        Utility.instance.onButtonClick(this.regressionBtn, () => this.onModuleClick(CommonName.MODULE.ActivityRegression), this, false)
        //下载btn 打开URL
        Utility.instance.onButtonClick(this.downloadBtn, this.downLoadApp, this, false)

        Utility.instance.onButtonClick(this.btnHome, () => this.onDownChecked(this.HomeName), this, false)
        Utility.instance.onButtonClick(this.btnPromotion, () => this.onDownChecked(this.PromotionName), this, false)
        Utility.instance.onButtonClick(this.btnEarnMoney, () => this.onDownChecked(this.EarnMoneyName), this, false)
        Utility.instance.onButtonClick(this.btnAccount, () => this.onDownChecked(this.AccountRules), this, false)
        Utility.instance.onButtonClick(this.btnTurntable, () => this.onDownChecked(this.Turntable), this, false)

        Utility.instance.onButtonClick(this.ChatNew, this.onBtnOpenCustomer, this, false)
        Utility.instance.onButtonClick(this.reward, this.onBtnRewardClick, this, false)
    }

    onDisable() {
        this.Chat.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.Chat.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.Chat.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.Chat.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
    }

    onDestroy() {
        this.unscheduleAllCallbacks()
    }

    /**
     * 下载APP URL
     */
    private downLoadApp(){
        sys.openURL(GameConfig.DownloadUrl);
    }

    private onModuleClick(module: string, data?: any) {
        ModuleManager.instance.showModule(module, data);        
    }

    //刷新邮件红点
    public updateEmailRedDot(msg: any) {
        if (!this.sprRead) return;
        let unread_cnt = msg?.unread_cnt;
        this.sprRead.node.active = unread_cnt > 0 ? true : false;
    }

     //刷新邮件红点
     public updateRewardRedDot(msg: any) {
        // console.log("收到刷新红点通知");
        let sprRead = this.reward.getChildByName("sp_red");
        sprRead.active = msg;
    }

    /**
     * 设置选择的toggle
     * @param moduleName 
     */
    public setSelectToggle(moduleName:string){
        let selectName = ""
        let frame:SpriteFrame = null
        let selectNode:Node = null
        switch (moduleName) {
            case CommonName.MODULE.Hall:
                selectName = this.HomeName;
                frame = this.homeFrame[1]
                selectNode = this.btnHome
                break;
            case CommonName.MODULE.Promotion:
                selectName = this.PromotionName;
                frame = this.promotionFrame[1] 
                selectNode = this.btnPromotion
                break;
            case CommonName.MODULE.EarnMoney:  
                selectName = this.EarnMoneyName;
                frame = this.earnMoneyFrame[1] 
                selectNode = this.btnEarnMoney
                break;
            case CommonName.MODULE.UserInfo:                  
                selectName = this.AccountRules;
                frame = this.accountFrame[1] 
                selectNode = this.btnAccount  
                break;
            case CommonName.MODULE.TurnTable:                  
                selectName = this.Turntable;    
                selectNode = this.btnTurntable 
                break;
            default:
                break;
        }

        let selectSprite = find("Sprite",selectNode)
        if(selectSprite?.isValid){
            selectSprite.position = new math.Vec3(0,-35,0)
            selectSprite.getComponent(Sprite).spriteFrame = frame
        }
        let select = find("Bottom/"+selectName,this.node)
        if(select?.isValid){
            let pos_y = select.name== "Turntable" ? select.position.y+10:select.position.y
            this.bottomSelect.position = new Vec3(select.position.x,pos_y,0)
        }
    }

    /**
     * 清理底部非当前模块
     * @param moduleName
     */
    private destroyPreviousModule(moduleName:string){
        if(moduleName.length == 0){
            return
        }
        let moduleNameList = [
                CommonName.MODULE.Hall,
                CommonName.MODULE.Promotion, 
                CommonFun.GetEarnMoneyName(),
                CommonName.MODULE.UserInfo,
                CommonName.MODULE.TurnTable,
            ]; 

        for(let i in moduleNameList){
            if(moduleNameList[i] !== moduleName){
                ModuleManager.instance.destroyModule(moduleNameList[i])
            }
        }
    }

    /**
     * 跳转模块
     * @param moduleName 
     * @param intentData 
     */
    private jumpModule(moduleName:string,intentData?: any){
        let findCurrModel = ModuleManager.instance.getModule(moduleName)
        if(findCurrModel?.moduleName == moduleName) return
        
        intentData = moduleName == CommonName.MODULE.TurnTable ? HallModel.buttomPreModule : intentData
        ModuleManager.instance.showModule(moduleName,intentData,()=>{
            HallModel.buttomPreModule = moduleName
            this.destroyPreviousModule(moduleName);
        })
    }

    /**
     * 底部响应
     * @param name  节点name
     */
    private onDownChecked(name: string) {
        AudioManager.instance.playButtonSound()
        switch (name) {
            case this.HomeName:
                this.jumpModule(CommonName.MODULE.Hall)
                break;
            case this.PromotionName:
                this.jumpModule(CommonName.MODULE.Promotion,"Promo")
                break;
            case this.EarnMoneyName:
                this.jumpModule(CommonFun.GetEarnMoneyName())
                break;
            case this.AccountRules:                  
                this.jumpModule(CommonName.MODULE.UserInfo)            
                break;
            case this.Turntable: 
                if(!HallModel.turntableFlag){
                    ModuleManager.instance.toastLong("The event has been removed")
                    return
                }             
                this.jumpModule(CommonName.MODULE.TurnTable)            
                break;
            default:
                break;
        }
    }

    onBtnOpenCustomer(){
        ModuleManager.instance.showModule(CommonName.MODULE.CustomerSupport);
    }

    onBtnRewardClick() {
        ModuleManager.instance.showModule(CommonName.MODULE.RewardsToday);
    }

    private onTouchStart(event: EventTouch) {
        this.startPos = event.getUILocation()
        this.offset = this.startPos.clone().subtract(new Vec2(this.Chat.position.x, this.Chat.position.y))
        this.Chat.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.Chat.on(Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.Chat.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
    }

    private onTouchMove(event: EventTouch) {
        if(!this.isChatMove){
            //this.Chat.getComponent(Sprite).spriteFrame = this.ChatFrame[0]
            this.ChatIcon.getComponent(Widget).updateAlignment()
        }
        let currentPos = event.getUILocation();
        let newPosition = currentPos.clone().subtract(this.offset)
        this.Chat.position = new Vec3(this.Chat.position.x, newPosition.y)
        this.Chat.getComponent(Widget).right = 0
        this.ChatIcon.getComponent(Widget).updateAlignment()
        this.isChatMove = true
    }

    private onTouchEnd(event: EventTouch) {     
        let currentPos = event.getUILocation();
        let dis = math.Vec2.distance(currentPos, this.startPos);
        this.checkChatPos(dis)
    }

    private onTouchCancel() {        
        this.checkChatPos(999)
    }
    
    /**
     * 核验chat的位置
     */
    private checkChatPos(dis:number){
        //this.Chat.getComponent(Sprite).spriteFrame = this.ChatFrame[1]
        this.Chat.getComponent(Widget).right = 0
        this.ChatIcon.getComponent(Widget).updateAlignment()

        let chatY = this.Chat.position.y
        let chatH = this.Chat.getComponent(UITransform).height
        let viewH = this.node.getComponent(UITransform).height
        let topNodeH = find("Top",this.node).getComponent(UITransform).height
        let bottomNodeH = find("Bottom",this.node).getComponent(UITransform).height
        if(chatY > 0 && chatY+chatH/2 > viewH/2-chatH){
            this.Chat.position = new Vec3(this.Chat.position.x,viewH/2-topNodeH-chatH)  
        }
        if(chatY < 0 && chatY-chatH/2 < -viewH/2+bottomNodeH){
            this.Chat.position = new Vec3(this.Chat.position.x,-viewH/2+bottomNodeH+chatH)  
        }
        
        if(!this.isChatMove || dis < 40){
            // let user = UserDataModel.GetCurrentUser()
            // let showID = user ? user.show_id : "invalidUser"
            // sys.openURL(GameConfig.CustomerUrl+`?userid=${showID}`)
            ModuleManager.instance.showModule(CommonName.MODULE.CustomerSupport);
        } 
        this.isChatMove = false
        this.Chat.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.Chat.off(Node.EventType.TOUCH_END, this.onTouchEnd, this)  
        this.Chat.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
    }
    
}