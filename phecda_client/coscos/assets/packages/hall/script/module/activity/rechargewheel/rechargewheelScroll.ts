
import { _decorator, Component, Node,Sprite,UITransform,Vec2,EventTouch,v2,tween, v3,instantiate,Tween,find, Label,UIOpacity,SpriteFrame,math, sp} from 'cc';
const { ccclass, property } = _decorator;

import ModuleManager from '../../../../../../script/framework/core/module_manager';
import AudioManager from '../../../../../../script/manager/audio_manager';
import { SpriteDataModel } from '../../../model/SpriteDataModel';
import Utility from '../../../../../../script/utility/utility';
import { Http_Define } from '../../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../../model/HttpDataModel';
import { PostData } from '../../../model/HttpDataModel';

@ccclass('rechargewheelScroll')
export class rechargewheelScroll extends Component {
    @property(Node)
    pagesContainer: Node = null
    @property(Node)
    prefab: Node = null
    @property([SpriteFrame])
    wheelFame: SpriteFrame[] = []
    @property([SpriteFrame])
    spinFame: SpriteFrame[] = []
    @property([SpriteFrame])
    bgFame: SpriteFrame[] = []

    private allItem = []  
    private itemIsAni = []  
    private itemWidth: number = 0
    private itemCount: number = 0
    private currentPageIndex: number = 0    

    private rewardList:any = []
    private touchMoved: boolean = false
    private touchStartPos: Vec2 = v2(0, 0)
    private selectcb:Function
    private resultcb:Function
    onLoad() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)        
    }

    public initData(data:any,selectcb:(cbData: any) => void,resultcb:(cdData)=>void){
        if(!data) return
     
        this.selectcb = selectcb
        this.resultcb = resultcb
        this.pagesContainer.removeAllChildren()
        this.itemWidth = this.prefab.getComponent(UITransform).width
        let getPrefabNode = (index: number, parent: Node, prefab: Node)=> {
            if (parent.children.length <= index) {
                let node = instantiate(prefab)
                node.parent = this.pagesContainer
                node.active = false
                return getPrefabNode(index, parent, prefab)
            }
            else {
                return parent.children[index]
            }
        }
        let tW = 0
        this.allItem = []
        for (let i = 0; i < data.length; i++) {
            let itemData = data[i]            
            if(itemData.unlock == 1){
                let item = getPrefabNode(this.itemCount,this.pagesContainer, this.prefab)
                item.position = v3(tW, 0)
                tW += this.itemWidth-10
                this.allItem.push(item);
                item.active = true
                item.name = `${this.itemCount}`
                let scaleTo = i == 0 ? 1:0.8
                item.scale = v3(scaleTo, scaleTo, scaleTo)
                this.initWheelInfo(item,itemData)
                this.itemCount++
            }
            if((i == data.length-1) && data.length > 1){
                this.goToPage(this.currentPageIndex,0)
            }
        }
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
        this.stopAllActivityItem()
    }

    private onTouchMove(event:EventTouch) {   
        let deltaX = event.getLocation().x - this.touchStartPos.x        
        if (Math.abs(deltaX) > 30) {
            this.touchMoved = true            
        }
        this.moveItem(deltaX<0,event.getUIDelta().x)
    }

    private onTouchEnd(event: EventTouch) {       
        let touchEndPos = event.getLocation()
        let deltaX = touchEndPos.x - this.touchStartPos.x
        if (!this.touchMoved) {
            this.goToPage(this.currentPageIndex,0.2)
            return
        }
        if (Math.abs(deltaX) > 30) {
            this.goToPage(deltaX > 0 ? (this.currentPageIndex - 1):(this.currentPageIndex + 1),0.2)
        }
        else{
            this.goToPage(this.currentPageIndex,0.2)
        }
    }

    public goToPage(index: number,aniTime:number) {
        if(!this?.allItem) return
        if(this.itemCount < 2) return
        if (index < 0){
            index = 0
        }
        else if (index >= this.itemCount){
            index = this.itemCount-1
        }
        let currPage = 0
        this.currentPageIndex = index
        let update = (target?: Node, ratio?: number) => {
           let pos_x = target.getPosition().x
           for (let m=0; m < this.itemCount; ++m){
                if(currPage == m) continue
                let item = this.allItem[m]
                if(!item?.isValid) continue
                item.position = v3(pos_x+(m-currPage)*(this.itemWidth-10), 0)
           }
        }
        for (let i=0; i < this.itemCount;++i){
            let item = this.allItem[i]
            if(!item?.isValid) continue
            const uiOpacity = item.getComponent(UIOpacity)
            if(`${index}` == item.name){
                currPage = i
                this.selectcb && this.selectcb(currPage)
                tween(item)
                    .stop()
                    .to(aniTime,{position:v3(0, 0),scale: v3(1, 1, 1)}, {easing: "sineInOut", onUpdate: update.bind(this)})
                    .start()
                tween(uiOpacity)
                    .stop()
                    .to(aniTime,{opacity: 255}, {easing: "sineInOut"})
                    .start()
            }
            else{                
                tween(item)
                    .stop()
                    .to(aniTime,{scale: v3(0.8, 0.8, 0.8)}, {easing: "sineInOut"})
                    .start()
                tween(uiOpacity)
                    .stop()
                    .to(aniTime,{opacity: 150}, {easing: "sineInOut"})
                    .start()
            }
        }
    }

    private moveItem(isLeft:boolean,pos_x:number){
        if(this.itemCount < 2) return
        for(let i=0; i<this.itemCount;i++){
            let n:Node = this.allItem[i]
            if(!n?.isValid) continue
            let off_x = n.position.x+pos_x
            n.position = v3(off_x, 0)

            let uiOpacity = n.getComponent(UIOpacity)       
            let move_x = Math.abs(pos_x)
            let value = 2000
            let scaleTo = 0
            if((off_x < 0 && isLeft) || off_x > 0 ){
                scaleTo = n.scale.x-move_x/value
                if(scaleTo<0.8){
                    scaleTo = 0.8
                }
                uiOpacity.opacity = uiOpacity.opacity-move_x/3
                if(uiOpacity.opacity < 150){
                    uiOpacity.opacity = 150
                }
            }
            else{
                scaleTo = n.scale.x+move_x/value
                if(scaleTo>1){
                    scaleTo = 1
                }
                uiOpacity.opacity = uiOpacity.opacity+move_x/3
                if(uiOpacity.opacity > 255){
                    uiOpacity.opacity = 255
                } 
            }
            n.scale = v3(scaleTo, scaleTo, scaleTo) 
        }
    }

    private initWheelInfo(item:Node,data:any){
        if(!data || !item.isValid) return

        let zhuanp = find("zhuanp",item)
        tween(zhuanp).stop().repeatForever(tween(zhuanp).to(25, {angle: -360 }).to(0, {angle: 0})).start()
        let spin = find("spin",item)
        if(this.spinFame[data.wheel_type-1]){
            let bg_light = find("bg_light",item).getComponent(Sprite)
            bg_light.spriteFrame = this.wheelFame[data.wheel_type-1]
            spin.getComponent(Sprite).spriteFrame = this.spinFame[data.wheel_type-1]
            for(let i=1;i<5;++i){
                let bg_gold = find(`bg_gold${i}`,zhuanp).getComponent(Sprite)
                bg_gold.spriteFrame = this.bgFame[data.wheel_type-1]
            }
        }
        if(typeof data.cur_chance == 'number'){
            let lbl_spinCount = find("lbl_spinCount",item).getComponent(Label)
            lbl_spinCount.string = "Spin*"+data.cur_chance
        }

        let spinAni = (node:Node,scaleFrom:number,scaleTo:number)=>{
            if(scaleTo == node.scale.x) return
            node.scale = v3(scaleFrom, scaleFrom, scaleFrom)
            tween(node)
                .stop()
                .to(0.1,{scale: v3(scaleTo, scaleTo, scaleTo)}, {easing: "sineInOut"})
                .start()
        }
        let touchMoved: boolean = false
        let touchStartPos: Vec2 = v2(0, 0)
        spin.on(Node.EventType.TOUCH_START, (event:EventTouch)=>{
            if(this.itemIsAni[data.wheel_type]) return
            touchStartPos = event.getLocation()
            touchMoved = false
            spinAni(spin,1,0.9)
        }, this)
        spin.on(Node.EventType.TOUCH_MOVE, (event:EventTouch)=>{
            if(this.itemIsAni[data.wheel_type]) return
            let deltaX = event.getLocation().x - touchStartPos.x        
            if (Math.abs(deltaX) > 10) {
                touchMoved = true            
            }
            else{
                spinAni(spin,0.9,1) 
            }
        },  this)        
        spin.on(Node.EventType.TOUCH_END, ()=>{
            if(touchMoved) return
            if(this.itemIsAni[data.wheel_type]) return
            spinAni(spin,0.9,1)
            this._reqRunTurntable(data.wheel_type)
        }, this)
        
        this.itemIsAni[data.wheel_type] = false
        this.rewardList[data.wheel_type] = data.reward_list
        for(let i=0;i<data.reward_list.length;++i){
            let info=data.reward_list[i] 
            let icon = find(`zhuanp/icon_${i}`,item).getComponent(Sprite)
            SpriteDataModel.SetSprite(icon,info.reward_pic)
            let str_content = ""
            let lbl_amount = find(`zhuanp/lbl_amount${i+1}`,item).getComponent(Label)
            if(info.reward_type == 1){
                str_content = "₹" + Utility.instance.numThousandsFormat(`${info.reward_value/100}`)
            }
            else if(info.reward_type == 2){
                str_content = `Silver Spin\nX${info.reward_value}`
            }
            else if(info.reward_type == 3){
                str_content = `Gold Spin X${info.reward_value}`
            }
            else if(info.reward_type == 4){
                str_content = `Diamond \nSpin X${info.reward_value}`
            }
            else if(info.reward_type == 5){
                str_content = `Special \nSpin X${info.reward_value}`
            }
            lbl_amount.string = str_content
        }
    }

    showGoResult(data:any){
        if(!data) return
        if(!this.node?.isValid) return

        let item = find(`${data.wheel_type-1}`,this.pagesContainer)     
        let ske_stop = find("ske_stop",item).getComponent(sp.Skeleton)
        let target = data.reward_id-1
        let rotation = -360 * math.randomRangeInt(4, 6) + (target - 8) * 45
        ske_stop.node.active = false
        this.itemIsAni[data.wheel_type] = true
        AudioManager.instance.playEffect("sound/turntable/turntable_rotate")
        let zhuanp = find("zhuanp",item)
        Tween.stopAllByTarget(zhuanp)
        tween(zhuanp).to(4, { angle: rotation }, { easing: "quintInOut" }).call(() => {
            zhuanp.angle = rotation % 360
            this.itemIsAni[data.wheel_type] = false
            this.resultcb && this.resultcb(data)
            ske_stop.node.active = true
            ske_stop.setAnimation(0, "animation", true)

            for(let i =0;i<data.chance_list.length;++i){
                let chance = data.chance_list[i]
                let lbl_spinCount:Node = find(`${chance.wheel_type-1}/lbl_spinCount`,this.pagesContainer)
                if(lbl_spinCount?.isValid){
                    lbl_spinCount.getComponent(Label).string = "Spin*"+chance.cur_chance
                }       
            }
            for(let i=0;i<this.rewardList[data.wheel_type].length;++i){
                let list = this.rewardList[data.wheel_type][i]
                if(list.reward_id == data.reward_id){
                    let str_content = ""
                    if(list.reward_type == 1){
                        str_content = "₹" + Utility.instance.numThousandsFormat(`${list.reward_value/100}`)
                    }
                    else if(list.reward_type == 2){
                        str_content = `Silver Spin X${list.reward_value}`
                    }
                    else if(list.reward_type == 3){
                        str_content = `Gold Spin X${list.reward_value}`
                    }
                    else if(list.reward_type == 4){
                        str_content = `Diamond Spin X${list.reward_value}`
                    }
                    else if(list.reward_type == 5){
                        str_content = `Special Spin X${list.reward_value}`
                    }
                    ModuleManager.instance.toastLong("Get Rewards "+str_content)
                    break
                }
            }
        }).delay(3).call(()=>{
            ske_stop.node.active = false
            zhuanp.angle = 360+zhuanp.angle%360    
            tween(zhuanp).stop().repeatForever(tween(zhuanp).to(25, {angle: -360 }).to(0, {angle: 0})).start()      
        }).start()
    }

    onDestroy(){
        this.stopAllActivityItem()
        this.unscheduleAllCallbacks()
        this.allItem = []
        this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
        if(this?.node?.destroy){
            this.node.destroy()
        }
    }

    private _reqRunTurntable(type:number){
        ModuleManager.instance.showNetPrompt()
        let params = {
            wheel_type: type,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.spinLuckyWheel,
            Params: params,
            Callback: this._rspRunTurntable.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info)
    }
  
    private _rspRunTurntable(msg: any){
        ModuleManager.instance.hideNetPrompt()
        if (msg && msg.code == 0) {
            if(msg.data){
                this.showGoResult(msg.data)
            }
        }
    }
}


