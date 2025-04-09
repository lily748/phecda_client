
import { _decorator, Component, Node,sp,v3,tween,Tween,find,Label, Button} from 'cc';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';

const { ccclass, property } = _decorator;

@ccclass('turntable_giftpack')
export class turntable_giftpack extends Component {   
    @property(Node)
    ske_giftpack1: Node
    @property(Node)
    ske_giftpack2: Node
    @property(Node)
    ske_giftpack3: Node
    @property(Node)
    ske_giftpack4: Node
    @property(Node)
    spr_finger: Node
    
    private posArr:any = []
    private aniIndex = 0;
    private clickNode:Node = null
    private selectIndex:number = -1
    closeCallback:Function
    onLoad() {
        Utility.instance.onButtonClick(this.ske_giftpack1, ()=>this.onClickGiftPack(this.ske_giftpack1,1), this, false)
        Utility.instance.onButtonClick(this.ske_giftpack2, ()=>this.onClickGiftPack(this.ske_giftpack2,2), this, false)
        Utility.instance.onButtonClick(this.ske_giftpack3, ()=>this.onClickGiftPack(this.ske_giftpack3,3), this, false)
        Utility.instance.onButtonClick(this.ske_giftpack4, ()=>this.onClickGiftPack(this.ske_giftpack4,4), this, false)

        this.posArr.push(this.ske_giftpack1.position)
        this.posArr.push(this.ske_giftpack2.position)
        this.posArr.push(this.ske_giftpack3.position)
        this.posArr.push(this.ske_giftpack4.position)

        this.ske_giftpack1.getComponent(sp.Skeleton).paused = true
        this.ske_giftpack2.getComponent(sp.Skeleton).paused = true
        this.ske_giftpack3.getComponent(sp.Skeleton).paused = true
        this.ske_giftpack4.getComponent(sp.Skeleton).paused = true
        
        this.fingerAni(0)
    }

    public setCallBack(closeCallback: (data: any) => void) {
        this.closeCallback = closeCallback
    }

    /**
     * 点击礼包
     * @param skNode 
     * @param index 
     * @returns 
     */
    private onClickGiftPack(skNode:Node,index:number){
        this.clickNode = skNode
        this.selectIndex = index
        this._reqFirstTurntable()
    }

    /**
     * 手指动画
     * @param aniIndex 
     */
    private fingerAni(aniIndex:number){
        if(aniIndex == -1) return
        if(aniIndex > this.posArr.length-1) return
        if(!this?.spr_finger?.isValid) return
        this.spr_finger.scale = v3(1,1,1)
        tween(this.spr_finger)
            .stop()
            .to(0.2,{position:this.posArr[aniIndex]}, { easing: "quartOut" })
            .repeat(2,
                tween()
                .to(0.3,{scale:v3(0.8,0.8,0.8)})
                .to(0.3,{scale:v3(1.0,1.0,1.0)}))
            .delay(0.2)
            .call(()=>{
                this.aniIndex++
                if(this.aniIndex > this.posArr.length-1){
                    this.aniIndex = 0
                }
                this.fingerAni(this.aniIndex)
            })      
            .start()
    }

    /**
     * 显示领取结果
     * @param data 
     */
    private showFirstTurntableResult(data:any){
        if(!data) return
        if(this.selectIndex == -1) return
        if(!this.clickNode.isValid) return

        this.spr_finger.active = false
        Tween.stopAllByTarget(this.spr_finger)

        this.ske_giftpack1.getComponent(Button).interactable = false
        this.ske_giftpack2.getComponent(Button).interactable = false        
        this.ske_giftpack3.getComponent(Button).interactable = false
        this.ske_giftpack4.getComponent(Button).interactable = false

        let sk = this.clickNode.getComponent(sp.Skeleton)
        sk.paused = false
        sk.setAnimation(0, "animation_1", false)
        sk.addAnimation(0, "animation_2", false)
        sk.setCompleteListener((trackEntry)=>{
            this.closeCallback && this.closeCallback(data)
            this.closeView()
        })
        let lbl_giftpack = find(`middle/lbl_giftpack${this.selectIndex}`,this.node)
        lbl_giftpack.active = true
        lbl_giftpack.getComponent(Label).string = "₹"+Utility.instance.numThousandsFormat((data.money/100).toString())
    }

    /**
     * 关闭view
     */
    private closeView() {
        if(this.node.destroy){
            this.node.destroy()
        }
    }

    onDestroy() {
        Tween.stopAllByTarget(this.spr_finger)
        this.closeView()       
    }

    /**
     * 请求turntable领取锦囊
     */
    private _reqFirstTurntable(){
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.firstTurntable,
            Params: {},
            Callback: this._rspFirstTurntable.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * firstTurntable返回
     * @param msg 
     */
    private _rspFirstTurntable(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            if(msg.data){
                this.showFirstTurntableResult(msg.data)
            }
        }
    }
}