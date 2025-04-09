
import { _decorator, Component, Node,Label,find,Color,v3, Button} from 'cc';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { UIRecycleScrollViewNew } from '../../../../../script/utility/ui_extend/UIRecycleScrollViewNew';
import HttpUtil from '../../../../../script/framework/net/http_util';

const { ccclass, property } = _decorator;

@ccclass('vip_bonusHistory')
export class vip_bonusHistory extends Component {
    @property(Node)
    close: Node
    @property(Node)
    btn_month: Node
    @property(Node)
    btn_all: Node
    @property(Node)
    month_sp: Node
    @property(Node)
    all_sp: Node
    @property(Label)
    lbl_month: Label
    @property(Label)
    lbl_all: Label
    @property(Label)
    lbl_total: Label
    @property(Node)
    no_history: Node        
    @property(UIRecycleScrollViewNew)
    recycleList: UIRecycleScrollViewNew

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this)
        Utility.instance.onButtonClick(this.btn_all, this.onClickAll, this)
        Utility.instance.onButtonClick(this.btn_month, this.onClickMonth, this)
        this.recycleList.InitializeChild = { target: this, eventHandler: this.refreshItem }

        this.all_sp.active = false
        this.month_sp.active = true        
        this.btn_all.getComponent(Button).interactable = true
        this.btn_month.getComponent(Button).interactable = false
        this.reqVipAwardRecord(1)
    }

    private closeBtn() {
        if(this.node.destroy){
            this.node.destroy()
        }
    }

    private onClickMonth() {
        this.isClickMonth(1)
    }

    private onClickAll() {
        this.isClickMonth(0)
    }

    private isClickMonth(value:number = 1){
        this.reqVipAwardRecord(value)
        this.all_sp.active = value==0
        this.month_sp.active = value==1 
        this.btn_all.getComponent(Button).interactable = value==1
        this.btn_month.getComponent(Button).interactable = value==0
        this.lbl_all.color = new Color().fromHEX(value==1 ? "#eec160":"#ffffff")
        this.lbl_month.color = new Color().fromHEX(value==1 ? "#ffffff":"#eec160")        
    }

    private showRecord(data:any){
        if(!data) return
        this.updateRuleList(data.list)

        let amount = 0
        for(let i = 0;i<data.list.length;++i){
            let info =  data.list[i]
            amount += info.amount
        }
        this.no_history.active = data.list.length==0
        this.lbl_total.string = "₹" + Utility.instance.numThousandsFormat(""+amount/100)
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
        let rank = find("rank",item).getComponent(Label)
        let time = find("time",item).getComponent(Label)
        let type = find("type",item).getComponent(Label)
        let amount = find("amount",item).getComponent(Label)

        rank.string = (parseInt(idx)+1).toString()
        time.string = Utility.instance.formatTime(info.log_time)
        let str = "Monthly Bonus"
        if(info.bonus_type == 2){
            str = "Level upgrade bonus"
        }
        else if(info.bonus_type == 3){
            str = "Weekly Bonus"
        }
        type.string = str
        amount.string = "₹" + Utility.instance.numThousandsFormat(""+info.amount/100)
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


