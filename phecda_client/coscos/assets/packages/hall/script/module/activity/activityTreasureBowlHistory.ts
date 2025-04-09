
import { _decorator, Component, Node ,instantiate,Label,Sprite, find,Color,SpriteFrame} from 'cc';
import Utility from '../../../../../script/utility/utility';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { PageTurn } from '../../../../../script/utility/ui_extend/pageTurn';
const { ccclass, property } = _decorator;

interface RecordItem {
    item: Node,
    time: Label,
    source: Label,
    amount: Label,
}

@ccclass('activityTreasureBowlHistory')
export class activityTreasureBowlHistory extends Component {
    @property(Node)
    btnBack: Node = null;

    @property(PageTurn)
    pageTurn: PageTurn = null
    @property(Node)
    content: Node = null
    @property(Node)
    recordValue: Node = null
    @property([SpriteFrame])
    frame:SpriteFrame[] = []

    private totalPage: number = 1
    private currentPage: number = 1
    private maxShowCount: number = 7
    private itemList: Array<RecordItem> = []

    onLoad() {
        Utility.instance.onButtonClick(this.btnBack, this.onClickBack, this)

        this.onInit()
        this._reqTreasureBowlRecords(this.currentPage)
    }

    onInit(){
        let pre = () => this.requestRecord(this.currentPage - 1)
        let next = () => this.requestRecord(this.currentPage + 1)
        this.pageTurn.setListeners({ Previous: pre.bind(this), Next: next.bind(this) })
    }

    private onClickBack() {
        if(this?.node?.destroy){
            this.node.destroy()
        }
    }

    private requestRecord(page: number) {
        if (page < 1 || page > this.totalPage) {
            return
        }
        let getSpriteFrame = (node:Node)=>{
            return find("Sprite",node).getComponent(Sprite)
        }
        getSpriteFrame(this.pageTurn.previous).spriteFrame = page <= 1 ? this.frame[1]:this.frame[0]
        getSpriteFrame(this.pageTurn.next).spriteFrame = page >= this.totalPage ? this.frame[1]:this.frame[0]
        this._reqTreasureBowlRecords(page)
    }

    private getItem(idx: number): RecordItem {
        if (!this.itemList[idx]) {
            let item: Node = idx == 0 ? this.recordValue : instantiate(this.recordValue)
            item.parent = this.content
            let temp: RecordItem = {
                item: item,
                time: find("lbl_time",item).getComponent(Label),
                source: find("lbl_source",item).getComponent(Label),
                amount: find("lbl_amount",item).getComponent(Label),
            }
            this.itemList[idx] = temp
        }
        return this.itemList[idx]
    }

    private showPage(data: any) {
        if(!this.node?.isValid) return  
        this.currentPage = data.cur_page
        if(this.currentPage == 1){
            this.totalPage = Math.ceil(data.total_size/data.page_size)
            if(data.total_size <= data.page_size ){
                find("Sprite",this.pageTurn.next).getComponent(Sprite).spriteFrame = this.frame[1]
                find("Sprite",this.pageTurn.previous).getComponent(Sprite).spriteFrame = this.frame[1]
            }
        }
        this.pageTurn.setPage(this.currentPage,this.totalPage < 1 ? 1:this.totalPage)
        for (let i = 0; i < this.maxShowCount; i++) {
            const element = data.list[i]
            let prefab = this.getItem(i)
            if (element) {
                prefab.item.active = true                
                prefab.time.string = Utility.instance.formatTime(element.log_ts)                
                if(typeof element.type == 'number' && typeof element.amount == 'number'){
                    let str = ""
                    if(element.type == 1){ //充值
                        str = Utility.instance.format(`Recharge of ₹{0} brings growth to Cornucopia`,Utility.instance.numThousandsFormat(""+element.recharge_amount/100))  
                    }
                    else if(element.type == 2){ //利息
                        str = "Income from the cornucopia"
                    }
                    else if(element.type == 3){ //代付
                        str = "Amount withdrawn from Cornucopia"
                    }
                    prefab.source.string = str
                }
                if(typeof element.amount == 'number'){
                    prefab.amount.color = new Color().fromHEX(element.amount > 0 ? "ffdc3a":"e62727")
                    let symbol = element.amount < 0 ? "-":"+"        
                    prefab.amount.string = symbol + "₹" + Utility.instance.numThousandsFormat((Math.abs(element.amount)/100).toString())
                }
            }
            else {
                prefab.item.active = false
            }
        }
    }

    onDestroy() {

    }

    /**
     * 请求聚宝盆记录
     */
    private _reqTreasureBowlRecords(currPage){
        let params = {
            cur_page: currPage,
            page_size: this.maxShowCount,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getTreasureBowlRecords,
            Params: params,
            Callback: this._rspTreasureBowlRecords.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt:true
        }
        HttpDataModel.Post(info);
    }

    /**
     * 聚宝盆记录返回
     * @param msg 
     */
    private _rspTreasureBowlRecords(msg: any){
        if (msg && msg.code == 0) {
            if(msg.data){
                this.showPage(msg.data)
            }
        }
    }

}


