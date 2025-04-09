
import { _decorator, Component, Node,Label,find,Color,v3} from 'cc';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { UIRecycleScrollViewNew } from '../../../../../script/utility/ui_extend/UIRecycleScrollViewNew';
import HttpUtil from '../../../../../script/framework/net/http_util';

const { ccclass, property } = _decorator;

@ccclass('turntable_withdrawRecord')
export class turntable_withdrawRecord extends Component {
    @property(Node)
    close: Node
    @property(Node)
    no_history: Node        
    @property(UIRecycleScrollViewNew)
    recycleList: UIRecycleScrollViewNew

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this)
        this.recycleList.InitializeChild = { target: this, eventHandler: this.refreshItem }

        // this.reqVipAwardRecord(1)
    }

    private closeBtn() {
        if(this.node.destroy){
            this.node.destroy()
        }
    }

    public showRecord(data:any){
        if(!data) {
            this.no_history.active = true
            return
        }
        this.updateRuleList(data)
        this.no_history.active = data.length==0
    }

    async updateRuleList(list: Array<number>) {
        if (!this?.node) return

        this.recycleList.data = list
        this.recycleList.isSetFrameRate = false
        await this.recycleList.loadSlots(list.length)
        this?.recycleList?.scrollView.scrollToTop(0)
    }

    private refreshItem(idx: string, item: Node) {
        if (!this.recycleList.data[idx]) return

        let info = this.recycleList.data[idx]
        let lbl_time = find("lbl_time",item).getComponent(Label)
        let lbl_amount = find("lbl_amount",item).getComponent(Label)
        let lbl_state = find("lbl_state",item).getComponent(Label)

        lbl_time.string = Utility.instance.formatTime(info.time)
        lbl_amount.string = "₹" + Utility.instance.numThousandsFormat(`${info.money/100}`)
        let str = "Processing"
        let color = "#ffc961"
        if(info.status == 4){
            str = "Success"
            color = "#37d019"
        }
        else if(info.status == 5){
            str = "Failure"
            color = "#ff3333"
        }
        lbl_state.string = str
        lbl_state.color = new Color().fromHEX(color)
    }

    public reqVipAwardRecord(type:number) {
        ModuleManager.instance.showNetPrompt();
        let msg = {
            baseUrl: Http_Define.getVIPAwardRecord,
            params: {
                bonus_type:type
            }
        }
        HttpUtil.http_get(msg, this._rspVipAwardRecord.bind(this), () => { console.log("获取VIP奖励领取记录失败") });
    }

    private _rspVipAwardRecord(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg?.code == 0) {
            if(msg.data){
                this.showRecord(msg.data)
            }
        }
    }
}


