
import { _decorator, Component, Node,Sprite,Button,ScrollView,UITransform,find, Label,Layout,game,v2, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

import CommonName from '../../model/CommonName';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { conmmon_http } from '../../../../../script/net/common_http';
import { HallModel,JumpType } from '../../model/HallModel';
import { UIRecycleScrollViewNew } from '../../../../../script/utility/ui_extend/UIRecycleScrollViewNew';

@ccclass('Hall_brandlist')
export class Hall_brandlist extends Component {
    @property(Node)
    prefab_brand: Node = null
    @property(UIRecycleScrollViewNew)
    recycle: UIRecycleScrollViewNew
    @property([SpriteFrame])
    frame:SpriteFrame[] = []
    
    private navi_type = 0;    
    private brandData:any = []
    private contentPos:any = []
    private posKey:any = []
    private cb:Function

    private content:Node = null
    private isAll:boolean = true
    private scrollView: ScrollView = null
    onLoad() {
        this.scrollView = this.recycle.scrollView
        this.content = this.scrollView.content
        this.scrollView.node.on(Node.EventType.MOUSE_WHEEL,this.scrolling, this);
        this.scrollView.node.on(ScrollView.EventType.SCROLL_BEGAN, this.scrollBegan, this)
        this.scrollView.node.on(ScrollView.EventType.SCROLL_ENDED, this.scrollEnd, this)        
        
        this.recycle.InitializeChild = { target: this, eventHandler: this.refreshItem }
    }

    scrollBegan(){
        this.scrollView.node.on(ScrollView.EventType.SCROLLING, this.scrolling, this)
    }

    scrollEnd(){
        if(this.isAll){
            HallModel.hallScrollViewPosY = this.content.getPosition().y
        }
        this.scrollView.node.off(ScrollView.EventType.SCROLLING, this.scrolling, this)
        this.scrollView.node.on(ScrollView.EventType.BOUNCE_BOTTOM, this.scrollToBottom, this)
        this.scrollView.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.scrollToBottom, this)
    }

    /**
     * 拆解数据
     * @param data 
     * @param navi_type 
     * @returns 
     */
    public analyzeBrandList(data:any,navi_type:number,cb: (cbData: any) => void,isAll:boolean){
        if(!data) return
        this.cb = cb
        this.isAll = isAll
        this.brandData = []
        if(isAll){
            this.navi_type = navi_type
            data.sort((a, b) => a.navi_type - b.navi_type); //按照分类排序(1.HOT 2.Casino 3.Slots 4.Games 5.Fishing 6.Sports 7.Other)
            for(let i = 0;i < data.length;++i){
                let line_list = data[i]?.line_list
                let navi_type = data[i]?.navi_type
                if(!line_list) continue

                for(let j = 0;j < line_list.length;++j){
                    let line_type = line_list[j]?.line_type
                    if(line_type !== 1 && line_type !== 3) continue   //目前只支持1,3(1.一行一个, 2.一行两个, 3.一行三个 4.一行三个(左边大 右边上下小))
                    let window_list = line_list[j]?.window_list
                    if(!window_list) continue

                    let info = {
                        navi_type:navi_type,
                        line_type:line_type,
                        list:window_list
                    }
                    this.brandData.push(info)
                }
            }           

            this.contentPos = []
            let height = this.prefab_brand.getComponent(UITransform).height
            let layout = this.node.getComponent(ScrollView).content.getComponent(Layout);
            for(let i=0; i<this.brandData.length; ++i){
                if(typeof this.contentPos[this.brandData[i].navi_type] !== 'number'){
                    this.contentPos[this.brandData[i].navi_type] = layout.paddingTop + (height+layout.spacingY)*i
                }
            }        
            this.posKey = Object.keys(this.contentPos)
        }
        else{       
            for(let i = 0;i < data.length;i+=3){
                let group = data.slice(i, i+3)
                let info = {
                    line_type:3,
                    list: group
                }
                this.brandData.push(info)
            }
        }
        this.showList(this.brandData)
    }
   
    /**
     * 刷新brandItem
     * @param idx 
     * @param item 
     * @returns 
     */
    private refreshItem(idx: string, item: Node) {
        if(!this.brandData) return
        const gameInfo = this.brandData[parseInt(idx)]
        if (!gameInfo) {
            return
        }

        let styleSprite = item.getComponent(Sprite)
        styleSprite.enabled = gameInfo.line_type == 1
        for(const child of item.children){
            child.active = false
        }
        let list = gameInfo.list
        if(list?.length < 1) return
        item.off(Button.EventType.CLICK)
        if(gameInfo.line_type == 1){    //一行一个            
            item.getComponent(Sprite).spriteFrame = this.frame[1]
            if(list[0]?.image_url.trim() !== ""){
                SpriteDataModel.SetSprite(item.getComponent(Sprite), list[0].image_url)
            }
            item.on(Button.EventType.CLICK, ()=>this.onClickBrandItem(list[0]))
        }
        else if(gameInfo.line_type == 3){  //一行三个
            for(let i = 0; i < list.length; ++i){
                let itemIcon = find("game"+i,item)
                if(itemIcon?.isValid){
                    itemIcon.active = true
                    item.getComponent(Sprite).spriteFrame = this.frame[0]
                    let path = this.isAll ? list[i].image_url : list[i].icon_url
                    if(path.trim() !== ""){
                        SpriteDataModel.SetSprite(itemIcon.getComponent(Sprite),path)
                    }
                    itemIcon.off(Button.EventType.CLICK)
                    itemIcon.on(Button.EventType.CLICK, ()=>this.onClickBrandItem(list[i]))
                }
                let lbl_name = find("lbl_name"+i,item)
                if(lbl_name?.isValid){                   
                    lbl_name.active = true
                    lbl_name.getComponent(Label).string = this.isAll ? list[i].game_name:list[i]?.name
                }                
            }
        }
    }

    /**
     * 显示列表
     * @param list 
     */
    async showList(data: any) {  
        if(!data) return
        this.recycle.data = data
        this.recycle.isSetFrameRate = false
        await this.recycle.loadSlots(data.length)

        let scrollView = this.node.getComponent(ScrollView);
        if(scrollView?.isValid){
            if(this.isAll){
                let posY = typeof HallModel.hallScrollViewPosY == 'number' ?  HallModel.hallScrollViewPosY : 0
                scrollView.content.getComponent(Layout).updateLayout()
                scrollView.scrollToOffset(v2(0, posY), 0)
            }
            else{
                scrollView.scrollToTop()
            }
        }       
    }

    /**
     * BrandItem事件响应
     * @param customerData 
     */
    private onClickBrandItem(customerData){
        if(!customerData) return        
        let type = customerData.event_type
        if(!this.isAll){
            type = JumpType.game
        }
        if(typeof type !== 'number') return
        switch(type){
            case JumpType.game: //跳转游戏
                conmmon_http.reqLoginGame(this, customerData.vendor_id_str, customerData.game_uid, customerData.platform, customerData.product_type, conmmon_http.rspLoginGame.bind(this))
                break
            case JumpType.vendor: //跳转厂商
                ModuleManager.instance.showModule(CommonName.MODULE.GameListNew,customerData,()=>{
                    ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
                })
                break
            default:
                break                    
        }
    }

    /**
     * 跳转类型
     * @param type 
     */
    public jumpSort(type:number){
        if(!this.isAll) return
        let scrollView = this.node.getComponent(ScrollView);
        if(!scrollView?.isValid){
            return
        }
        scrollView.stopAutoScroll()
        scrollView.scrollToOffset(v2(0, this.contentPos[type]), 1.0);
    }

    /**
     * 滚动中
     */
    private scrolling(){
        if(!this.isAll) return
        if(!this?.content?.isValid) return        
        if(this.contentPos.length == 0) return
        for(let i = 0; i<this.posKey.length; ++i){
            let j = i+1
            if(j >= this.posKey.length){
                j = this.posKey.length-1
            }
            let curr_pos = this.contentPos[this.posKey[i]]
            let next_pos = this.contentPos[this.posKey[j]]

            if( this.content.position.y >= curr_pos && this.content.position.y <= next_pos && this.navi_type != this.posKey[i] ){
                this.navi_type = this.posKey[i]
                this.cb && this.cb(this.posKey[i])
                break                
            }
        }
    }

    /**
     * 滚动到底部
     */
    scrollToBottom(){
        if(!this.isAll) return
        if(this.contentPos.length == 0) return
        if(this.navi_type != this.posKey[this.posKey.length-1]){
            this.navi_type = this.posKey[this.posKey.length-1]
            this.cb && this.cb(this.posKey[this.posKey.length-1])
        }
        this.scrollView.node.off(ScrollView.EventType.SCROLLING, this.scrolling, this)
        this.scrollView.node.off(ScrollView.EventType.BOUNCE_BOTTOM, this.scrollToBottom, this)
        this.scrollView.node.off(ScrollView.EventType.SCROLL_TO_BOTTOM, this.scrollToBottom, this)
    }

    onDisable() {
        game.frameRate = 45        
        this.scrollView.node.off(Node.EventType.MOUSE_WHEEL,this.scrolling, this);
        this.scrollView.node.off(ScrollView.EventType.SCROLLING, this.scrolling, this)
        this.scrollView.node.off(ScrollView.EventType.SCROLL_ENDED, this.scrollEnd, this)
        this.scrollView.node.off(ScrollView.EventType.SCROLL_BEGAN, this.scrollBegan, this)
        this.scrollView.node.off(ScrollView.EventType.BOUNCE_BOTTOM, this.scrollToBottom, this)
        this.scrollView.node.off(ScrollView.EventType.SCROLL_TO_BOTTOM, this.scrollToBottom, this)

        if(this?.content.isValid && this.isAll){
            HallModel.hallScrollViewPosY = this.content.getPosition().y
            for(const child of this.content.children){
                if(child?.destroy){
                    child.destroy()
                }
            }
        }  
    }

    onDestroy(){        
        this.posKey = []
        this.brandData = []
        this.contentPos = []        
        if(this?.node?.destroy){
            this.node.destroy()
        }
    }
}
