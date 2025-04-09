
import { _decorator, Color, Component, Label, Node } from 'cc';
import List from '../../../../../script/utility/ui_extend/list/list';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import Utility from '../../../../../script/utility/utility';
const { ccclass, property } = _decorator;
 
@ccclass('EarnMoneyDetailPage1')
export class EarnMoneyDetailPage1 extends Component {
    
    @property(List)
    list: List = null;

    listData = null;
    _reqParam = {
        page_size: 20,
        last_id: 0
    };

    isEnd = false;

    protected onLoad(): void {
        this._reqGetWithdrawHistory();
        this.list.node.on("scroll-to-bottom", this.scrollToBottm, this);
    }

    private _reqGetWithdrawHistory(){
        ModuleManager.instance.showNetPrompt();
        let params = this._reqParam;
        // console.log("_reqGetCommissionDetail:", params);
        let info: PostData = {
            Target: this,
            Url: Http_Define.getWithdrawHistory,
            Params: params,
            Callback: this._rspGetWithdrawHistory.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    _rspGetWithdrawHistory(msg) {
        // console.log("_rspGetWithdrawHistory",msg);
        if (msg && msg.code == 0) {
            this.isEnd = (msg.data.last_page==1);;
            if (this.listData==null) this.listData = msg.data.list;
            else this.listData = this.listData.concat(msg.data.list);
            this.list.numItems = this.listData.length;
            this.list.node.parent.getChildByName("noRecords").active = (this.listData.length<=0);
        }
    }

    scrollToBottm() {
        if (this.isEnd) return;
        let {page_size, last_id} = this._reqParam;
        this._reqParam.last_id += page_size;
        this._reqGetWithdrawHistory();
    }

    renderItem(item, index) {
        let {ts, commission_amount, state } = this.listData[index];
        // console.log("index:", this.listData[index]);
        let isSettle = (state == 1);
        item.active = true;
        item.getChildByName("lab_time").getComponent(Label).string =  Utility.instance.formatDate(new Date(Number(ts)*1000),"YYYY-MM-DD HH:mm:ss");
        item.getChildByName("lab_money").getComponent(Label).string = "₹" + Utility.instance.numThousandsFormat(String(commission_amount/100));
        let lab_state = item.getChildByName("lab_state").getComponent(Label);
        lab_state.string = isSettle ? "Settled" : "Unsettlement";
        lab_state.color = isSettle ? new Color( 53,151, 24) : new Color(248,207, 98);
        item.getChildByName("line").active = true;
    }




}