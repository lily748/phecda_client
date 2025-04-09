
import { _decorator, Component, Node,Sprite,UITransform,Vec2,EventTouch,v2,tween, v3,instantiate,Tween,game,Game} from 'cc';
const { ccclass, property } = _decorator;

import CommonName from '../../model/CommonName';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { conmmon_http } from '../../../../../script/net/common_http';
import { HallModel,JumpType } from '../../model/HallModel';
import { CommonFun } from '../../model/CommonFun';

@ccclass('hall_scrollActivity')
export class hall_scrollActivity extends Component {
    @property(Node)
    pagesContainer: Node = null

    private allItem = []    
    private banner_list = []
    
    private itemWidth: number = 0
    private itemCount: number = 0
    private intervalTime: number = 3
    private currentPageIndex: number = 0    

    private touchMoved: boolean = false
    private touchStartPos: Vec2 = v2(0, 0)    
    onLoad() {
        game.on(Game.EVENT_HIDE, this.stopTimer.bind(this))
        game.on(Game.EVENT_SHOW, this.startTimer.bind(this))
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)        
    }

    public initData(data:any){
        if(!data?.banner_list) return
        let prefab = this.pagesContainer.children[0]
        if(!prefab?.isValid){
            return
        }
        this.itemWidth = prefab.getComponent(UITransform).width
        let length = this.pagesContainer.children.length
        for (let i = 0; i < length; i++) {
            this.pagesContainer.children[i].active = false
        }
        let getPrefabNode = (index: number, parent: Node, prefab: Node)=> {
            if (parent.children.length <= index) {
                let node = instantiate(prefab)
                node.parent = parent             
                node.active = false
                return getPrefabNode(index, parent, prefab)
            }
            else {
                return parent.children[index]
            }
        }

        let tW = 0
        this.banner_list = data.banner_list
        this.itemCount = data.banner_list.length
        for (let i = 0; i < this.itemCount; i++) {
            let itemData = data.banner_list[i];
            let path = ""
            if(itemData.image_url && itemData.image_url != ""){
                path = itemData.image_url
            }
            let item = getPrefabNode(i,this.pagesContainer, prefab)
            item.position = v3(tW, 0)
            tW += this.itemWidth
            this.allItem.push(item);
            let sprite = item.getComponent(Sprite)
            if(path.trim() !==""){
                SpriteDataModel.SetSprite(sprite, path)
            }
            item.active = true
            item.name = `${i}`
            if((i == this.itemCount-1) && this.itemCount > 1){
                this.startTimer()
            }
        }
    }

    private startTimer() {
        if(this.itemCount < 2) return
        this.stopAllActivityItem()
        this.schedule(this.goToNextPage,this.intervalTime)
    }

    private stopTimer() {
        if(this.itemCount < 2) return
        this.unschedule(this.goToNextPage)
    }

    private stopAllActivityItem(){
        if(!this?.allItem) return
        for(let i=0; i<this.itemCount;++i){            
            let item = this?.allItem[i]
            if(!item?.isValid) continue
            Tween.stopAllByTarget(item)
        }
    }

    private onTouchStart(event:EventTouch) {
        this.touchStartPos = event.getLocation()
        this.touchMoved = false
        this.stopTimer()
        this.stopAllActivityItem()
    }

    private onTouchMove(event:EventTouch) {        
        let deltaX = event.getLocation().x - this.touchStartPos.x;
        if (Math.abs(deltaX) > 30) {
            this.touchMoved = true;
        }
        this.moveItem(deltaX<0,event.getUIDelta().x)
    }

    private onTouchEnd(event: EventTouch) {        
        this.startTimer()
        let touchEndPos = event.getLocation();
        let deltaX = touchEndPos.x - this.touchStartPos.x;
        if (!this.touchMoved) {
            this.onClickActivity(this.banner_list[this.currentPageIndex])
            this.goToPage(this.currentPageIndex,0.2)
            return;
        }
        if (Math.abs(deltaX) > 30) {
            this.goToPage(deltaX > 0 ? (this.currentPageIndex - 1):(this.currentPageIndex + 1),0.2)
        }
        else{
            this.goToPage(this.currentPageIndex,0.2)
        }
    }

    private goToPage(index: number,aniTime:number) {
        if(!this?.allItem) return
        if(this.itemCount < 2) return

        if (index < 0){
            index = this.itemCount - 1
        }
        else if (index >= this.itemCount){
            index = 0
        }

        let currPage = 0
        this.currentPageIndex = index
        let pagesContainer_x = this.pagesContainer.position.x
        let pagesContainerWith = this.pagesContainer.getComponent(UITransform).width

        let update = (target?: Node, ratio?: number) => {
           let pos_x = target.getPosition().x
           for (let m=0; m < this.itemCount; ++m){
                if(currPage == m) continue
                let item = this.allItem[m]
                if(!item.isValid) continue
                item.position = v3(pos_x+(m-currPage)*this.itemWidth, 0)

                item.getComponent(Sprite).enabled = false
                if(item.position.x-this.itemWidth/2 >= pagesContainer_x-pagesContainerWith/2 &&
                   item.position.x-this.itemWidth/2 <= pagesContainer_x+pagesContainerWith/2){
                        item.getComponent(Sprite).enabled = true
                }
                if(item.position.x+this.itemWidth/2 >= pagesContainer_x-pagesContainerWith/2 &&
                   item.position.x+this.itemWidth/2 <= pagesContainer_x+pagesContainerWith/2){
                        item.getComponent(Sprite).enabled = true
                }
           }
        }
        for (let i=0; i < this.itemCount;++i){
            let item = this.allItem[i]
            if(!item?.isValid) continue
            if(""+index == item.name){
                currPage = i
                item.getComponent(Sprite).enabled = true
                tween(item)
                    .stop()
                    .to(aniTime,{position:v3(0, 0)}, {easing: "sineInOut", onUpdate: update.bind(this)})
                    .start()
                break
            }
        }
    }

    private goToNextPage() {
        if(!this?.allItem) return
        this.fixLeft()
        let next = this.currentPageIndex + 2
        if (next >= this.itemCount){
            next = 0
        }        
        let item = this.allItem[next]
        if(item?.isValid){
            item.getComponent(Sprite).enabled = true
        }
        this.goToPage(this.currentPageIndex + 1,0.5)
    }

    private moveItem(isLeft:boolean,pos_x:number){
        if(this.itemCount < 2) return
        for(let i=0; i<this.itemCount;i++){
            let n = this.allItem[i]
            if(!n.isValid) continue
            let off_x = n.position.x+pos_x
            n.position = v3(off_x, 0)

            n.getComponent(Sprite).enabled = false
            if(off_x-this.itemWidth/2 >= this.pagesContainer.position.x-this.pagesContainer.getComponent(UITransform).width/2 &&
               off_x-this.itemWidth/2 <= this.pagesContainer.position.x+this.pagesContainer.getComponent(UITransform).width/2){
                    n.getComponent(Sprite).enabled = true
            }
            if(off_x+this.itemWidth/2 >= this.pagesContainer.position.x-this.pagesContainer.getComponent(UITransform).width/2 &&
               off_x+this.itemWidth/2 <= this.pagesContainer.position.x+this.pagesContainer.getComponent(UITransform).width/2){
                    n.getComponent(Sprite).enabled = true
            }  
        }
        if(isLeft){
            this.fixLeft()
        }
        else{
            this.fixRight()
        }
    }

    private fixLeft(){
        if(!this?.allItem) return
        if(!this.allItem[0]?.isValid) return
        if(!this.allItem[this.itemCount-1]?.isValid) return

        if(this.allItem[0].getPosition().x < -this.pagesContainer.getComponent(UITransform).width/2-this.itemWidth/2){
            let pos_x = this.allItem[this.itemCount-1].getPosition().x + this.itemWidth
            this.allItem[0].position = v3(pos_x, 0)
            this.allItem.push(this.allItem.shift())
        }
    }

    private fixRight(){
        if(!this?.allItem) return
        if(!this.allItem[0]?.isValid) return
        if(!this.allItem[this.itemCount-1]?.isValid) return

        if(this.allItem[this.itemCount-1].getPosition().x > this.pagesContainer.getComponent(UITransform).width/2+this.itemWidth/2){
            let pos_x = this.allItem[0].getPosition().x - this.itemWidth
            this.allItem[this.itemCount-1].position = v3(pos_x, 0)
            this.allItem.unshift(this.allItem.pop())
        }
    }

    private onClickActivity(customerData:any) {
        if(!customerData) return
        switch(customerData.event_type){
            case JumpType.game: //跳转游戏
                conmmon_http.reqLoginGame(this, customerData.vendor_id_str, customerData.game_uid, customerData.platform, customerData.product_type, conmmon_http.rspLoginGame.bind(this))
                break
            case JumpType.vendor: //跳转厂商
                ModuleManager.instance.showModule(CommonName.MODULE.GameListNew,customerData,()=>{
                    ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
                })
                break
            case JumpType.vip: //跳转VIP页面
                ModuleManager.instance.showModule(CommonName.MODULE.Vip, CommonName.MODULE.Hall,()=>{
                    ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
                })
                break
            case JumpType.earn: //跳转代理页面
                ModuleManager.instance.showModule(CommonFun.GetEarnMoneyName(),null,()=>{
                    ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
                })
                break
            case JumpType.rank: //跳转排行榜
                ModuleManager.instance.showModule(CommonName.MODULE.ActivityRank,null,()=>{
                    ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
                })
                break
            case JumpType.turntable: //跳转轮盘
                ModuleManager.instance.showModule(CommonName.MODULE.TurnTable,CommonName.MODULE.Hall,()=>{
                    ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
                })
                break
            case JumpType.firstCharge: //跳转首充
                HallModel.isFirstCharg = true
                ModuleManager.instance.showModule(CommonName.MODULE.Recharge,CommonName.MODULE.Hall,()=>{
                    ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
                })
                break
            case JumpType.dailyBonus: //跳转签到
                ModuleManager.instance.showModule(CommonName.MODULE.ActivityDailyBonus)
                break
            case JumpType.monthlycard: //跳转月卡
                ModuleManager.instance.showModule(CommonName.MODULE.MonthlyCard)
                break          
            case JumpType.regression: //跳转回归活动
                ModuleManager.instance.showModule(CommonName.MODULE.ActivityRegression)
                break   
            case JumpType.treasureBowl: //聚宝盆
                ModuleManager.instance.showModule(CommonName.MODULE.ActivityTreasureBowl,CommonName.MODULE.Hall)
                break         
            case JumpType.freeBonus: //奖金码兑换
                ModuleManager.instance.showModule(CommonName.MODULE.RewardCode)
                break
            case JumpType.rechargeWheel: //充值轮盘
                ModuleManager.instance.showModule(CommonName.MODULE.RechargeWheel,CommonName.MODULE.Hall,()=>{
                    ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
                })
                break  
            default:
                break                    
        }
    }

    onDestroy(){
        this.stopTimer()
        this.stopAllActivityItem()

        this.allItem = []    
        this.banner_list = []
        game.off(Game.EVENT_HIDE, this.stopTimer.bind(this))
        game.off(Game.EVENT_SHOW, this.startTimer.bind(this))
        this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
        if(this?.node?.destroy){
            this.node.destroy()
        }
    }
}


