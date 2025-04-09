
import { _decorator, Color, Component, Label, Node, Sprite } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { EarnMoneyNewView } from './earnMoneyNew_view';
import { EarnMoneySubordinateDataView } from './earnMoneySubordinateData_view';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { Uti } from '../../../../../script/utility/Uti';
const { ccclass, property } = _decorator;
 
@ccclass('EarnMoneySubordinateData')
export class EarnMoneySubordinateData extends Module<EarnMoneySubordinateDataView, null> {


    private readonly JOIN_TIME = 1;
    private readonly COMMISSION = 2;
    private readonly ASC = 1;
    private readonly DESC = 2;

    private teamData = null;
    private selectIndex = -1;
    private reqTeamData = {
        day:null,      //日期格式：2006-01-02,不传值则表示All
        lvl:1,         //第几级代理：1/2/3
        order_key:this.JOIN_TIME,   //根据哪个字段排序 1：Join Time(加入时间) 2: commission(回扣金额)
        order_val:this.DESC,   //排序方向 1:升序 2降序
        page_size: 20, 
        last_id: 0,    //上一页最后一个id值取值: 0,page_size+.
        search: null   // 查询用户I
    } 

   
    selectTime = null;
    dateType = 0; // 0 all 1 具体日期

   
    isEnd = false;
    teamListData = null;

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/earnMoneyNew/public_earnMoneySubordinateData";
        this.viewType = EarnMoneySubordinateDataView;
        this.modelType = null;
        this.layer = ViewLayer.Low
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btn_back, this.onClose, this, false);
        Utility.instance.onButtonClick(this.view.btn_help, this.onHelp, this, false);
        Utility.instance.onButtonClick(this.view.clickNode, this.onCloseTipBg, this, false);

        // let btn_joinTime = this.view.content_pages.getChildByName("btn_joinTime");
        this.view.list.node.on("scroll-to-bottom", this.scrollToBottm, this);
        Utility.instance.onButtonClick(this.view.btn_joinTime, this.onBtnJoinTimeClick, this, false);
        Utility.instance.onButtonClick(this.view.btn_commission, this.onBtnCommissionClick, this, false);
        Utility.instance.onButtonClick(this.view.btn_all, this.onBtnAllClick, this, false);
        Utility.instance.onButtonClick(this.view.btn_dateTime, this.onBtnDateTimeClick, this, false);
        
        for (let i = 0; i < this.view.content_select.children.length; i++) {
            let child = this.view.content_select.children[i];
            Utility.instance.onButtonClick(child, ()=>{this.onSelectClick(i);}, this, false);

        }
        this.selectTime = Utility.instance.formatDate(new Date(), "YYYY-MM-DD");
        this.view.btn_dateTime.getChildByName("Label").getComponent(Label).string = this.selectTime;
        this.view.editbox_phone.node.on('editing-did-ended', this.onEditboxEnd, this);
        // this.reqTeamData.day = this.selectTime;
        this._reqGetTeamData();
    }

    onEditboxEnd() {
        this.reqTeamData.search = this.view.editbox_phone.string;
        this.resetTeamListData();
        this._reqGetTeamData();
    }



    showBtn(index, sort) {
        let btns = [this.view.btn_joinTime, this.view.btn_commission];
        for (let i = 0; i < btns.length; i++) {
            this.setBtnStatus(btns[i], sort, (i==index));
            // let label_title = btns[i].getChildByName("label_title").getComponent(Label);
            // let arrow1 =  btns[i].getChildByName("arrow_1");
            // let arrow2:Node =  btns[i].getChildByName("arrow_2");
            // let choose = (i==index);
            // arrow1.active = !choose;
            // arrow2.active = choose;
            // let scale = arrow2.getScale();
            // scale.y = (sort == this.ASC) ? -1 : 1;
            // console.log(scale.y);
            // arrow2.setScale(scale);
            // if (choose) { 
            //     label_title.color = new Color(255,255,255);
            //     arrow2.getComponent(Sprite).color = new Color(255,255,255);
            // } else {
            //     label_title.color = new Color(160,93,100);
            //     arrow2.getComponent(Sprite).color = new Color(160,93,100);
            // }
        }

    }

    switchDateBtn(index, sort=this.DESC) {
        this.dateType = index;
        let timeLabel:Label = this.view.btn_dateTime.getChildByName("Label").getComponent(Label);
        let to_3:Sprite = this.view.btn_dateTime.getChildByName("to_3").getComponent(Sprite);

        let label_title = this.view.btn_all.getChildByName("label_title").getComponent(Label);
        if (index==0) {
            timeLabel.color = new Color().fromHEX("#D6E3EB");
            to_3.color = new Color().fromHEX("#D6E3EB");
            label_title.color = new Color().fromHEX("#E7B849");
            // this.setBtnStatus(this.view.btn_all, sort, true);
        } else {
            timeLabel.color = new Color().fromHEX("#E7B849");
            to_3.color = new Color().fromHEX("#E7B849");
            label_title.color = new Color().fromHEX("#D6E3EB");
            // this.setBtnStatus(this.view.btn_all, sort, false);
        }
    }

    setBtnStatus(btn, sort, select) {
        let label_title = btn.getChildByName("label_title").getComponent(Label);
        let arrow1 =  btn.getChildByName("arrow_1");
        let arrow2:Node =  btn.getChildByName("arrow_2");
        // let choose = (i==index);
        arrow1.active = !select;
        arrow2.active = select;
        let scale = arrow2.getScale();
        scale.y = (sort == this.ASC) ? -1 : 1;
        console.log(scale.y);
        arrow2.setScale(scale);
        if (select) { 
            label_title.color = new Color().fromHEX("#E7B849");
            arrow2.getComponent(Sprite).color = new Color().fromHEX("#E7B849");
        } else {
            label_title.color = new Color().fromHEX("#D6E3EB");
            arrow2.getComponent(Sprite).color = new Color().fromHEX("#D6E3EB");
        }
    }

    

    onBtnJoinTimeClick() {
        let sort = this.reqTeamData.order_val == this.ASC ? this.DESC : this.ASC;
        // 判断上一次点击不是这个按钮就默认降序
        if (this.reqTeamData.order_key != this.JOIN_TIME) sort = this.DESC;
        this.reqTeamData.order_key = this.JOIN_TIME;
        this.reqTeamData.order_val = sort;
        this.reqTeamData.day = this.selectTime;
        this.view.chooseType = this.JOIN_TIME;
        this.resetTeamListData();
        this._reqGetTeamData();
        this.showBtn(0, sort);
    }

    onBtnCommissionClick() {
        let sort = this.reqTeamData.order_val == this.ASC ? this.DESC : this.ASC;
        // 判断上一次点击不是这个按钮就默认降序
        if (this.reqTeamData.order_key != this.COMMISSION) sort = this.DESC;
        this.reqTeamData.order_key = this.COMMISSION;
        this.reqTeamData.order_val = sort;
        this.reqTeamData.day = this.selectTime;
        this.view.chooseType = this.COMMISSION;
        this.resetTeamListData();
        this._reqGetTeamData();
        this.showBtn(1, sort);
    }

    onBtnAllClick() {
        // let sort = this.reqTeamData.order_val == this.ASC ? this.DESC : this.ASC;
        // 判断上一次点击不是这个按钮就默认降序
        // if (this.dateType != 0) sort = this.DESC;
        this.reqTeamData.day = this.selectTime = null;
        // this.reqTeamData.order_val = sort;
       
        if (this.dateType == 0) return;
        this.resetTeamListData();
        this._reqGetTeamData();
        this.switchDateBtn(0);
    }


    onBtnDateTimeClick() {
        let selectTime = this.view.btn_dateTime.getChildByName("Label").getComponent(Label).string;
        ModuleManager.instance.showModule(CommonName.MODULE.DateSelect, {target:this, time: selectTime, callBack:(values)=>{
            this.reqTeamData.day = `${values[0]}-${values[1]}-${values[2]}`;
            this.selectTime = this.reqTeamData.day;
            this.resetTeamListData();
            this._reqGetTeamData();
            this.view.btn_dateTime.getChildByName("Label").getComponent(Label).string = this.reqTeamData.day;
            ModuleManager.instance.destroyModule(CommonName.MODULE.DateSelect);
            // this.dateType = 1;
            this.switchDateBtn(1);
            
        }})
    }

    private _reqGetTeamData(){
        ModuleManager.instance.showNetPrompt();
        let params = this.reqTeamData;
        let info: PostData = {
            Target: this,
            Url: Http_Define.getTeamData,
            Params: params,
            Callback: this._rspGetTeamData.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    _rspGetTeamData(msg) {
        if (msg && msg.code == 0) {
            this.teamData = msg.data;
            this.isEnd = (this.teamData.last_page==1);
            this.view.lab_total.string = this.teamData.total_num;
            this.view.lab_today.string = "+" + this.teamData.today_num;
            this.view.lab_yesterday.string = "+" + this.teamData.yesterday_num;
            this.view.lab_month.string = "+" + this.teamData.month_num;
            this.updateStars(this.teamData.agent_level);
            this.updateTeamList(this.teamData.team_list);
            for (let i = 0; i < this.teamData.tier_list.length; i++) {
                let info = this.teamData.tier_list[i];
                let child = this.view.content_select.children[i];
                if (child) {
                    let lab_title = child.getChildByName("lab_title").getComponent(Label);
                    let lab_num = child.getChildByName("lab_num").getComponent(Label);
                    lab_title.string = "Tier"+info.lvl;
                    lab_num.string = info.total_num;
                }
            }
            if (this.selectIndex==-1) this.onSelectClick(0, false);
         
        }
    }

    updateStars(level) {
        for(let i = 0; i <= 4; i++) {
            this.view.content_stars.children[i].getChildByName("star_on").active = (i < level);
        }
        
    }

    updateTeamList(list) {
        if (this.teamListData == null) this.teamListData = list;
        else this.teamListData = this.teamListData.concat(list);
        this.view.listData = this.teamListData;
        this.view.list.numItems = this.teamListData.length;
        this.view.list.node.parent.getChildByName("noRecords").active = (this.teamListData.length <=0);
    }

    scrollToBottm() {
        console.log("scrollToBottm");
        if (this.isEnd) return;
        let {page_size, last_id} = this.reqTeamData;
        this.reqTeamData.last_id += page_size;
        this._reqGetTeamData();
    }


    onSelectClick(index, updateData=true) {
        if (this.selectIndex == index) return;
        if (this.teamData==null) return;
        this.selectIndex = index;
        for (let i = 0; i < this.view.content_select.children.length; i++) {
            let child = this.view.content_select.children[i];
            let lab_title = child.getChildByName("lab_title").getComponent(Label);
            let lab_num = child.getChildByName("lab_num").getComponent(Label);
            let isSelect = (i == index);
            child.getChildByName("Tier_on").active = isSelect;
            lab_title.color = isSelect?new Color(251,249,183):new Color().fromHEX("#B8CFE0");
            lab_num.color = isSelect?new Color(251,249,183):new Color().fromHEX("#B8CFE0");
        }

        this.reqTeamData.lvl = this.teamData.tier_list[(index)].lvl;
        if (updateData) this.resetTeamListData();
        if (updateData) this._reqGetTeamData();
    }

    resetTeamListData() {
        this.teamListData = null;
        this.isEnd = false;
        this.reqTeamData.last_id = 0;
    }

    onHelp() {
        let active = this.view.tip_bg.active;
        this.view.tip_bg.active = !active;
        this.view.clickNode.active = !active;
    }

    onCloseTipBg() {
        this.view.tip_bg.active = false;
        this.view.clickNode.active = false;
    }

    onClose() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.EarnMoneySubordinateData);
    }




}
