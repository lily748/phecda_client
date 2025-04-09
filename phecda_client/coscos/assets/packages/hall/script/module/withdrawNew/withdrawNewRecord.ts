
import { _decorator, Node, instantiate, Label, tween, find, UITransform, Layout, Widget,Color,UIOpacity,Tween, Sprite,Button } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
import { WithdrawNewRecord_View } from './withdrawNewRecord_View';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import HttpUtil from '../../../../../script/framework/net/http_util';
const { ccclass, property } = _decorator;

interface RecordItem {
    Item: Node,
    Amount: Label,
    OrderNo: Label,
    State: Label,
    Time: Label,
}

@ccclass('WithdrawNewRecord')
export class WithdrawNewRecord extends Module<WithdrawNewRecord_View,null> {
    private totalPage: number = 1
    private currentPage: number = 1
    private itemList: Array<RecordItem>
    private maxShowCount = 10
    private preModuleName = ""
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/withdrawNew/withdrawNewRecord";
        this.viewType = WithdrawNewRecord_View;
        this.modelType = null;
        this.layer = ViewLayer.Mid;
        this.needViewMask = true;
        this.needAnim = true;
    }

    onInit(){
        AudioManager.instance.playOpenWindowSound()
        Utility.instance.onButtonClick(this.view.btnClose, this.onCloseClick, this)
        this.view.recordValue.active = false
        this.itemList = []

        let pre = () => this.requestRecord(this.currentPage - 1)
        let next = () => this.requestRecord(this.currentPage + 1)
        this.view.pageTurn.setListeners({ Previous: pre.bind(this), Next: next.bind(this) })
    }

    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)
        this.preModuleName = intentData

        //计算最多显示个数
        this.view.content.getComponent(Widget).updateAlignment()
        this.maxShowCount = Math.floor(this.view.content.getComponent(UITransform).height / this.view.recordValue.getComponent(UITransform).height)
        let remain = this.view.content.getComponent(UITransform).height - this.maxShowCount*this.view.recordValue.getComponent(UITransform).height
        this.view.content.getComponent(Layout).spacingY = remain/(this.maxShowCount-1)

        this.reqPayOutOrderList(1)
    }

    private getItem(idx: number): RecordItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.view.recordValue : instantiate(this.view.recordValue)
            item.parent = this.view.content
            let temp: RecordItem = {
                Item: item,
                Amount: find("lbl_amount",item).getComponent(Label),
                OrderNo: find("lbl_orderNo",item).getComponent(Label),
                Time: find("lbl_time",item).getComponent(Label),
                State: find("lbl_stats",item).getComponent(Label),
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }

    private requestRecord(page: number) {
        let getSpriteFrame = (node:Node)=>{
            return find("Sprite",node).getComponent(Sprite)
        }
        getSpriteFrame(this.view.pageTurn.previous).spriteFrame = page <= 1 ? this.view.frame[1]:this.view.frame[0]
        getSpriteFrame(this.view.pageTurn.next).spriteFrame = page >= this.totalPage ? this.view.frame[1]:this.view.frame[0]
        if (page < 1 || page > this.totalPage) {
            return
        }        
        this.reqPayOutOrderList(page)
    }

    private showPage(page: number, list: any) {
        this.view.lbl_noData.active = list.length == 0
        if(!this.node?.isValid) return
        this.currentPage = page
        this.view.pageTurn.setPage(this.currentPage,this.totalPage)
        for (let i = 0; i < this.maxShowCount; i++) {
            const element = list[i]
            let item = this.getItem(i)
            if (element) {
                item.Item.active = true
                item.Time.string = Utility.instance.formatTime(element.time_at)
                item.OrderNo.string = element.order_id
                item.OrderNo.node.on(Button.EventType.CLICK, ()=>{
                    Utility.instance.copyTextToClipboard(item.OrderNo.string)
                    ModuleManager.instance.toast("Copied Successfully")
                }, this)

                let itemOpacity = item.Item.getComponent(UIOpacity);
                itemOpacity.opacity = 0;
                tween(itemOpacity).stop().to(0.03*i, { opacity: 255 }).start()
                let str = ""
                let color = ""
                if(element.status == 1){
                    str = "Reviewing"
                    color = "ffbe00"
                }
                else if(element.status == 2 ){
                    str = "Transfering"
                    color = "ffbe00"
                }
                else if(element.status == 3){
                    str = "Failed"
                    color = "cfcfcf"
                }
                else if(element.status == 4){
                    str = "Success"
                    color = "24ed24"
                }
                item.State.string = str
                item.State.color = new Color().fromHEX(color)

                let amount = (element.status == 2 || element.status == 3) ? 0:element.amount  //不成功显示 0
                item.Amount.string = Utility.instance.numThousandsFormat("₹ "+amount/100)                
            } else {
                item.Item.active = false
            }
        }
    }

    /**
     * 激活上一个界面
     */
    async showPreModule(moduleName:string){
        await ModuleManager.instance.setModuleActive(moduleName)
        ModuleManager.instance.destroyModule(CommonName.MODULE.WithdrawNewRecord)
    }

    onCloseClick(){
        AudioManager.instance.playCloseWindowSound()

        if(this.preModuleName == CommonName.MODULE.WithdrawNew){
            this.showPreModule(CommonName.MODULE.WithdrawNew)
        }
        else if(this.preModuleName == CommonName.MODULE.TurnTable){
            this.showPreModule(CommonName.MODULE.TurnTable)
        }
        else{
            ModuleManager.instance.showModule(CommonName.MODULE.Hall,null, () => {
                ModuleManager.instance.destroyModule(CommonName.MODULE.TurnTable)
            })
        }
    }

    /**
     * 请求代付记录
     * @param page 
     * @returns 
     */
    public reqPayOutOrderList(page:number) {
        let user = UserDataModel.GetCurrentUser();
        if (!user) return;
        ModuleManager.instance.showNetPrompt();
        let msg = {
            baseUrl: Http_Define.getPayOutOrderList,
            params: {
                uid: user.uid,
                size:this.maxShowCount,
                page:page,
            }
        }
        HttpUtil.http_get(msg, this._rspPayOutOrderList.bind(this), () => { console.log("获取充值记录数据失败") });
    }

    /**
     * 充值记录返回
     * @param msg 
     */
    private _rspPayOutOrderList(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            if(msg.data){
                if(typeof msg.data.total == 'number'){
                    this.totalPage = Math.ceil(msg.data.total/this.maxShowCount)  //总条数除以最大显示个数  
                    this.view.pageTurn.node.active = msg.data.total > 0            
                }
                if(typeof msg.data.page == 'number' && msg.data.list){
                    this.showPage(msg.data.page,msg.data.list)
                }                
            }
        }
    }

    onDisable() {
        let content = this?.view?.content;
        if(!content) return
        for (const child of content.children) {
            let itemOpacity = child.getComponent(UIOpacity);
            if(itemOpacity && itemOpacity.isValid){
                Tween.stopAllByTarget(itemOpacity)
            }
        }
    }

}

