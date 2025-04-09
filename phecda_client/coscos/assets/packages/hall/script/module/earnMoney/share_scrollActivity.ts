
import { _decorator, Component, Node,Sprite,UITransform,Vec2,EventTouch,v2,tween, v3,instantiate,Tween,find, Label, SpriteFrame} from 'cc';
const { ccclass, property } = _decorator;

import { SpriteDataModel } from '../../model/SpriteDataModel';
import { UserDataModel } from '../../model/UserDataModel';
import QRCodeTool from '../../../../../script/utility/tools/qrcode_tool';

@ccclass('share_scrollActivity')
export class share_scrollActivity extends Component {
    @property(Node)
    pagesContainer: Node = null
    @property(Node)
    prefab: Node = null
    @property(Node)
    pageIndicator: Node = null
    @property(Node)
    indicator: Node = null
    @property([SpriteFrame])
    indicatorframe: SpriteFrame[] = []
    
    private allItem = []    
    private itemWidth: number = 0
    private itemCount: number = 0
    private currentPageIndex: number = 0
    private prePageIndex: number = 0  

    private touchMoved: boolean = false
    private touchStartPos: Vec2 = v2(0, 0)
    private cb:Function
    onLoad() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)       
    }

    public initData(data:any,isTurntableShare:boolean,cb: (cbData: any) => void){
        if(!data) return
        let user = UserDataModel.GetCurrentUser()
        this.cb = cb
        this.pageIndicator.removeAllChildren()
        this.pagesContainer.removeAllChildren()
        this.itemWidth = this.prefab.getComponent(UITransform).width
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
        this.allItem = []
        let currData = isTurntableShare ? data.spin_wheel_poster_urls:data.poster_urls
        this.itemCount = currData.length
        if(this.itemCount > 1){
            for (let i = 0; i < currData.length; i++) {
                let indicator = getPrefabNode(i,this.pageIndicator, this.indicator)
                indicator.active = true
                indicator.name = `${i}`
            }
            this.updateIndicator(0)
        }
        else{
            this.pageIndicator.destroy()
        }
        for (let i = 0; i < currData.length; i++) {
            let path = currData[i]
            let item = getPrefabNode(i,this.pagesContainer, this.prefab)
            item.position = v3(tW, 0)
            tW += this.itemWidth+50
            this.allItem.push(item)
            let sprite = item.getComponent(Sprite)
            if(path.trim() !==""){
                SpriteDataModel.SetSprite(sprite, path)
            }
            item.active = true
            item.name = `${i}`

            let lbl_nickName = find("lbl_nickName",item) 
            lbl_nickName.getComponent(Label).string = user.nickname

            let lbl_inviteCode = find("lbl_inviteCode",item) 
            lbl_inviteCode.getComponent(Label).string = data.invitation_code 

            let avatar = find("toux5", item).getComponent(Sprite)
            SpriteDataModel.SetHead(avatar, user.avatar_url)

            let qrCode = find("QRCode",item).getComponent(QRCodeTool)
            if(data.link_url.trim() != ""){
                qrCode.data = data.link_url
                qrCode.applayChanged()
            }

            if(i==0){
                this.cb && this.cb(item)
            }            
        }
    }

    private updateIndicator(index:number){
        if(!this.pageIndicator?.isValid) return

        let indicator = find(`${index}`,this.pageIndicator)
        indicator.getComponent(Sprite).spriteFrame = this.indicatorframe[1]   
        
        if(this.prePageIndex == index) return
        indicator = find(`${this.prePageIndex}`,this.pageIndicator)
        indicator.getComponent(Sprite).spriteFrame = this.indicatorframe[0]           
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
        this.moveItem(event.getUIDelta().x)
    }

    private onTouchEnd(event: EventTouch) {
        let touchEndPos = event.getLocation()
        let deltaX = touchEndPos.x - this.touchStartPos.x
        if(!this.touchMoved) {
            this.goToPage(this.currentPageIndex,0.2)
            return
        }
        if(Math.abs(deltaX) > 30) {
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
            index = 0
        }
        else if(index >= this.itemCount){
            index = this.itemCount-1
        }
        let currPage = 0
        this.currentPageIndex = index
        let pagesContainer_x = this.pagesContainer.position.x
        let pagesContainerWith = this.pagesContainer.getComponent(UITransform).width

        let update = (target?: Node, ratio?: number) => {
           let pos_x = target.getPosition().x
           for(let m=0; m < this.itemCount; ++m){
                if(currPage == m) continue
                let item = this.allItem[m]
                if(!item.isValid) continue
                item.position = v3(pos_x+(m-currPage)*(this.itemWidth+(this.itemWidth+1)/55+40), 0)

                item.getComponent(Sprite).enabled = false
                if(item.position.x-(this.itemWidth+36+14)/2 >= pagesContainer_x-pagesContainerWith/2 &&
                   item.position.x-(this.itemWidth+36+14)/2 <= pagesContainer_x+pagesContainerWith/2){
                        item.getComponent(Sprite).enabled = true
                }
                if(item.position.x+(this.itemWidth+36+14)/2 >= pagesContainer_x-pagesContainerWith/2 &&
                   item.position.x+(this.itemWidth+36+14)/2 <= pagesContainer_x+pagesContainerWith/2){
                        item.getComponent(Sprite).enabled = true
                }
           }
        }
        for(let i=0; i < this.itemCount;++i){
            let item = this.allItem[i]
            if(!item?.isValid) continue
            if(`${index}` == item.name){
                currPage = i
                this.cb && this.cb(item)
                this.updateIndicator(i)
                item.getComponent(Sprite).enabled = true
                tween(item)
                    .stop()
                    .to(aniTime,{position:v3(0, 0)}, {easing: "sineInOut", onUpdate: update.bind(this)})
                    .start()
                break
            }
        }
        this.prePageIndex = index
    }

    private moveItem(pos_x:number){
        if(this.itemCount < 2) return
        for(let i=0; i<this.itemCount;i++){
            let n = this.allItem[i]
            if(!n.isValid) continue
            let off_x = n.position.x+pos_x
            n.position = v3(off_x, 0)

            n.getComponent(Sprite).enabled = false
            if(off_x-(this.itemWidth+(this.itemWidth+1)/10-5)/2 >= this.pagesContainer.position.x-this.pagesContainer.getComponent(UITransform).width/2 &&
               off_x-(this.itemWidth+(this.itemWidth+1)/10-5)/2 <= this.pagesContainer.position.x+this.pagesContainer.getComponent(UITransform).width/2){
                    n.getComponent(Sprite).enabled = true
            }
            if(off_x+(this.itemWidth+(this.itemWidth+1)/10-5)/2 >= this.pagesContainer.position.x-this.pagesContainer.getComponent(UITransform).width/2 &&
               off_x+(this.itemWidth+(this.itemWidth+1)/10-5)/2 <= this.pagesContainer.position.x+this.pagesContainer.getComponent(UITransform).width/2){
                    n.getComponent(Sprite).enabled = true
            }  
        }
    }

    onDestroy(){
        this.stopAllActivityItem()
        this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
    }
}


