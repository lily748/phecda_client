
import { _decorator, Component, Node,Sprite,UITransform,Vec2,EventTouch,v2,tween, v3,instantiate,Tween,ScrollView, find, Label} from 'cc';
const { ccclass, property } = _decorator;

import { SpriteDataModel } from '../../model/SpriteDataModel';
import { UserDataModel } from '../../model/UserDataModel';
import Utility from '../../../../../script/utility/utility';

@ccclass('vip_scrollActivity')
export class vip_scrollActivity extends Component {
    @property(Node)
    pagesContainer: Node = null
    @property(ScrollView)
    scrollView: ScrollView = null
    @property(Node)
    prefab: Node = null

    private allItem = []    
    private itemWidth: number = 0
    private itemCount: number = 0
    private currentPageIndex: number = 0    

    private touchMoved: boolean = false
    private touchStartPos: Vec2 = v2(0, 0)
    private offW = 20
    private cb:Function
    onLoad() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)        
    }

    public initData(data:any,cb: (cbData: any) => void){
        if(!data) return
        if(data.length < 2) return
        let user = UserDataModel.GetCurrentUser()
        if (!user || !this.node) return

        this.cb = cb
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
        let next_lv = user.vip+1
        let max_lv = data[data.length-1].vip_level
        next_lv = next_lv > max_lv ? max_lv:next_lv
        this.itemCount = data.length-1
        let maxDeposit = data[data.length-1].mininum_deposit
        let pagesContainer_x = this.pagesContainer.position.x
        let pagesContainerWith = this.pagesContainer.getComponent(UITransform).width
        for (let i = 1; i < data.length; i++) {
            let itemData = data[i];
            let path = ""
            if(itemData.bg_img && itemData.bg_img != ""){
                path = itemData.bg_img
            }
            let item = getPrefabNode(i,this.pagesContainer, this.prefab)
            item.position = v3(tW, 0)
            tW += this.itemWidth+this.offW
            this.allItem.push(item);
            let sprite = item.getComponent(Sprite)
            if(path.trim() !==""){
                SpriteDataModel.SetSprite(sprite, path)
            }
            item.active = true
            item.name = `${i-1}`

            item.getComponent(Sprite).enabled = false
            if(item.position.x-this.itemWidth/2-this.offW >= pagesContainer_x-pagesContainerWith/2 &&
                item.position.x-this.itemWidth/2-this.offW <= pagesContainer_x+pagesContainerWith/2){
                    item.getComponent(Sprite).enabled = true
            }
            if(item.position.x+this.itemWidth/2+this.offW >= pagesContainer_x-pagesContainerWith/2 &&
                item.position.x+this.itemWidth/2+this.offW <= pagesContainer_x+pagesContainerWith/2){
                    item.getComponent(Sprite).enabled = true
            }

            let lbl_next = find("lbl_next",item)
            let node_progress = find("node_progress",item)
            if(itemData.vip_level == next_lv && next_lv !== max_lv){
                lbl_next.active = true
                node_progress.active = true
                let lbl_leftVip = find("lbl_leftVip",node_progress).getComponent(Label)
                let lbl_rightVip = find("lbl_rightVip",node_progress).getComponent(Label)
                let lbl_progress = find("lbl_progress",node_progress).getComponent(Label)
                let progressBar = find("progressBar/bar",node_progress).getComponent(Sprite)

                 //进度条
                let deposit = itemData.mininum_deposit == -1 ? maxDeposit:itemData.mininum_deposit
                lbl_leftVip.string =  `VIP${user.vip}`
                lbl_rightVip.string = `VIP${next_lv}`     
                let progress = Utility.instance.numThousandsFormat(user.history_deposit/100+"/")+Utility.instance.numThousandsFormat(deposit/100+"")   
                lbl_progress.string = progress
                progressBar.fillRange = user.history_deposit/deposit
            }
            else{
                lbl_next.destroy()
                node_progress.destroy()
            }
            let lbl_deposit = find("lbl_deposit",item)
            lbl_deposit.getComponent(Label).string = "₹" + Utility.instance.numThousandsFormat(""+itemData.daily_withdrawal_limit/100)
            
            if((i == data.length-1) && data.length > 1){
                this.currentPageIndex = user.vip
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
        this.scrollView.cancelInnerEvents = false
        this.scrollView.enabled = false
        this.touchStartPos = event.getLocation()
        this.touchMoved = false
        this.stopAllActivityItem()
    }

    private onTouchMove(event:EventTouch) {   
        let deltaX = event.getLocation().x - this.touchStartPos.x
        let deltaY = event.getLocation().y - this.touchStartPos.y
        if(Math.abs(deltaX) > Math.abs(deltaY)){
            this.scrollView.enabled = false
        }
        else{
            this.scrollView.enabled = true
            return
        }
        
        if (this.currentPageIndex <= 0 && deltaX >= 0){
            return
        }
        if (this.currentPageIndex >= (this.itemCount-1) && deltaX < 0){
            return
        }

        if (Math.abs(deltaX) > 30) {
            this.touchMoved = true            
        }
        this.moveItem(deltaX<0,event.getUIDelta().x)
    }

    private onTouchEnd(event: EventTouch) {       
        let touchEndPos = event.getLocation()
        let deltaX = touchEndPos.x - this.touchStartPos.x
        this.scrollView.enabled = true
        this.scrollView.cancelInnerEvents = true
        if (!this.touchMoved) {
            this.goToPage(this.currentPageIndex,0.2)
            return
        }
        if (Math.abs(deltaX) > 30) {
            this.goToPage(deltaX > 0 ? (this.currentPageIndex - 1):(this.currentPageIndex + 1),0.4)
        }
        else{
            this.goToPage(this.currentPageIndex,0.2)
        }
    }

    private goToPage(index: number,aniTime:number) {
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
        let pagesContainer_x = this.pagesContainer.position.x
        let pagesContainerWith = this.pagesContainer.getComponent(UITransform).width

        let update = (target?: Node, ratio?: number) => {
           let pos_x = target.getPosition().x
           for (let m=0; m < this.itemCount; ++m){
                if(currPage == m) continue
                let item = this.allItem[m]
                if(!item?.isValid) continue
                item.position = v3(pos_x+(m-currPage)*(this.itemWidth+this.offW), 0)

                item.getComponent(Sprite).enabled = false
                if(item.position.x-this.itemWidth/2-this.offW >= pagesContainer_x-pagesContainerWith/2 &&
                   item.position.x-this.itemWidth/2-this.offW <= pagesContainer_x+pagesContainerWith/2){
                        item.getComponent(Sprite).enabled = true
                }
                if(item.position.x+this.itemWidth/2+this.offW >= pagesContainer_x-pagesContainerWith/2 &&
                   item.position.x+this.itemWidth/2+this.offW <= pagesContainer_x+pagesContainerWith/2){
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
                this.cb && this.cb(currPage)
                tween(item)
                    .stop()
                    .to(aniTime,{position:v3(0, 0)}, {easing: "sineInOut", onUpdate: update.bind(this)})
                    .start()
                break
            }
        }
    }

    private moveItem(isLeft:boolean,pos_x:number){
        if(this.itemCount < 2) return
        for(let i=0; i<this.itemCount;i++){
            let n = this.allItem[i]
            if(!n?.isValid) continue
            let off_x = n.position.x+pos_x
            n.position = v3(off_x, 0)

            n.getComponent(Sprite).enabled = false
            if(off_x-this.itemWidth/2-this.offW >= this.pagesContainer.position.x-this.pagesContainer.getComponent(UITransform).width/2 &&
               off_x-this.itemWidth/2-this.offW <= this.pagesContainer.position.x+this.pagesContainer.getComponent(UITransform).width/2){
                    n.getComponent(Sprite).enabled = true
            }
            if(off_x+this.itemWidth/2+this.offW >= this.pagesContainer.position.x-this.pagesContainer.getComponent(UITransform).width/2 &&
               off_x+this.itemWidth/2+this.offW <= this.pagesContainer.position.x+this.pagesContainer.getComponent(UITransform).width/2){
                    n.getComponent(Sprite).enabled = true
            }  
        }
    }

    onDestroy(){
        this.stopAllActivityItem()

        this.allItem = []
        this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
        if(this?.node?.destroy){
            this.node.destroy()
        }
    }
}


