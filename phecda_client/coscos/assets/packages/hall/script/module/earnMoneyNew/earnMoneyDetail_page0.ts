
import { _decorator, Color, Component, instantiate, Label, Layout, Node, ScrollView } from 'cc';
import List from '../../../../../script/utility/ui_extend/list/list';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { Uti } from '../../../../../script/utility/Uti';
const { ccclass, property } = _decorator;

@ccclass('EarnMoneyDetailPage0')
export class EarnMoneyDetailPage0 extends Component {
    
    @property(Node)
    itemTemp = null;

    @property(ScrollView)
    scrollView: ScrollView = null;

    @property(Node)
    item1: Node = null;

    @property(Node)
    item2: Node = null;

    @property(Node)
    content_title: Node = null;

    selectIndex = 0;

    _reqParam = {
        month:null,
        type: 0
    }

    _titles = [
        ["Time", "Commission\nAmount", "State"],
        ["Time", "Subordinate", "Commission\nAmount"],
        ["Time", "Subordinate", "Commission\nAmount"],
        ["Time", "Invitees", "Commission\nAmount"],
        ["Time", "Number of invited", "Commission\nAmount"],
    ];
  
    _monthDatas = [];
    _selectTimes = [];
    // _listDatas = [];
    // _monthTitle = {};

    // monthTitle = null;
    monthTitles = [];
    monthItems = {};
    

    protected onLoad(): void {
        for (let i = 0; i < this.content_title.children.length; i++) {
            let item = this.content_title.children[i];
            Utility.instance.onButtonClick(item,()=>{ this.onTitleClick(i); }, this, false);
        }
        this._reqGetCommissionDetail();
    }


    private _reqGetCommissionDetail(){
        ModuleManager.instance.showNetPrompt();
        let params = this._reqParam;
        // console.log("_reqGetCommissionDetail:", params);
        let info: PostData = {
            Target: this,
            Url: Http_Define.getCommissionDetail,
            Params: params,
            Callback: this._rspGetCommissionDetail.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    removeItems() {
        this.scrollView.content.removeAllChildren();
        this.monthTitles = [];
        this.monthItems = {};

    }

    _rspGetCommissionDetail(msg) {
        // console.log("_rspGetCommissionDetail", msg);
        if (msg && msg.code == 0) {
            this.removeItems();
            for (let i = 0; i < msg.data.months.length; i++) {
                let {list, month, type, total_commission} = msg.data.months[i];
                if (list==null) list = [];
                if ( this._selectTimes[this.selectIndex]!=null && month != this._selectTimes[this.selectIndex]) continue;
                let monthTitle = this.monthTitles[i];
                if (monthTitle==null) {
                    monthTitle = instantiate(this.item1);
                    monthTitle.parent = this.scrollView.content;
                    this.monthTitles[i] = monthTitle;
                }
                monthTitle.active = true;
                this.updateItem1(monthTitle, msg.data.months[i], (list.length > 0) );
                if (list.length > 0) this._monthDatas = this._monthDatas.concat(list);
                for (let j = 0; j < list.length; j++) { 
                    let key = i+"_"+j;
                    let monthItem = this.monthItems[key];
                    if (monthItem==null) {
                        monthItem = instantiate(this.item2);
                        monthItem.parent = this.scrollView.content;
                        this.monthItems[i] = monthTitle;
                    }
                    monthItem.active = true;
                    this.updateItem2(monthItem, list[j]);
                }
               
            }
            this.updateDefaultTitle();
        }
    }

    updateDefaultTitle() {
        let total_commission_value = 0;
        let active =  (this._monthDatas.length <= 0);
        let time = this.item1.getChildByName("time");
        let lab_time = time.getChildByName("lab_time").getComponent(Label);
        if ( this._selectTimes[this.selectIndex]!=null)  lab_time.string = this._selectTimes[this.selectIndex];
        else {
            let month_value = Utility.instance.formatDate(new Date(), "YYYY-MM");
            lab_time.string = month_value;
        }
        this.scrollView.node.parent.getChildByName("noRecords").active = active;
        this.updateItem1(this.item1,  { month: lab_time.string, total_commission:total_commission_value},active);
    }

    getSelectMonth() {
        if (this._selectTimes[this.selectIndex]!=null) return this._selectTimes[this.selectIndex];
        return Utility.instance.formatDate(new Date(), "YYYY-MM");
    }

    onTitleClick(index) {
        if (this.selectIndex == index) return;
        this.selectIndex = index;
        this._reqParam.type = this.selectIndex;
        this._reqParam.month = this.getSelectMonth();
        this.resetData();    
        for (let i = 0; i < this.content_title.children.length; i++) {
            let item = this.content_title.children[i];
            let choose = (i == index);
            item.getChildByName("select_bg").active = choose;
            item.getChildByName("label").getComponent(Label).color = choose ? new Color().fromHEX("#F4CA5A") : new Color().fromHEX("#729EC0");
        }
        this._reqGetCommissionDetail();
    }

    resetData() {
        this._monthDatas = [];
    }

    updateItem1(item, data, active) {
        let { month, total_commission} = data;
        let time = item.getChildByName("time");
        let lab_time = time.getChildByName("lab_time").getComponent(Label);
        item.active = active;
        time.off("click");
        time.on("click", ()=>{
            ModuleManager.instance.showModule(CommonName.MODULE.DateSelect, {target:this, time: lab_time.string, scrollNum:2,callBack:(values)=>{
                this._reqParam.month = `${values[0]}-${values[1]}`;
                lab_time.string = this._reqParam.month;
                this._selectTimes[this.selectIndex] = this._reqParam.month;
                this.resetData();
                this._reqGetCommissionDetail();
                ModuleManager.instance.destroyModule(CommonName.MODULE.DateSelect);
            }})
        }, this);
        lab_time.string = month;
        item.getChildByName("lab_totalCommission").getComponent(Label).string = "₹" + Utility.instance.numThousandsFormat(String(total_commission/100));
        for (let i = 0; i < 3; i++) {
            let title = item.getChildByName("lab_title_"+i).getComponent(Label);
            let index = this.selectIndex < 0 ? 0 : this.selectIndex;
            title.string = this._titles[index][i];
        }
    }

    updateItem2(item, data) {
        let {ts, commission_amount, state } = data;
        let isSettle = (state == 1);
        item.active = true;
        item.getChildByName("lab_time").getComponent(Label).string = Utility.instance.formatDate(new Date(Number(ts)*1000),"YYYY-MM-DD HH:mm:ss");
        item.getChildByName("lab_money").getComponent(Label).string = "₹" + Utility.instance.numThousandsFormat(String(commission_amount/100));
        let lab_state = item.getChildByName("lab_state").getComponent(Label);
        lab_state.string = isSettle?"Settled":"Unsettlement";
        lab_state.color = isSettle?new Color( 53,151, 24):new Color(248,207, 98);
        item.getChildByName("line").active = true;
    }
  
   

}