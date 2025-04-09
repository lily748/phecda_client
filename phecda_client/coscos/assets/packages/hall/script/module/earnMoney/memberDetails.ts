
import { _decorator, Component, find, Label, Node } from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { MemberDetailsView } from './memberDetails_view';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;

 
@ccclass('MemberDetails')
export class MemberDetails extends Module<MemberDetailsView, null>{

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/earnMoney/public_memberDetails";
        this.viewType = MemberDetailsView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this._clickBack, this);
    }

    onShow(intentData: any, callback?: (m: any) => void) {
        callback && callback(this);
        this._updateInfo(intentData);
    }

    onDestroy() {

    }

    private _clickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.MemberDetails);
    }

    //更新数据
    private _updateInfo(msg: any) {
        let id = find("id", this.view.user).getComponent(Label);
        id.string =msg.agent_id.toString();

        let bind = find("info/lb1", this.view.user).getComponent(Label);
        bind.string = msg.bind_member;

        let time = find("top/time", this.view.info).getComponent(Label);
        time.string = this._getTimeDate(msg.date);

        let coin = find("top/coin", this.view.info).getComponent(Label);
        coin.string = Utility.instance.numThousandsFormat("₹" + Math.floor(msg.rebate_amount / 100));

        let rate = find("top/rate", this.view.info).getComponent(Label);
        rate.string = "rate:" + msg.rate + "%";

        let member1 = find("center/member1", this.view.info).getComponent(Label);
        member1.string = msg.active_member_self + msg.active_member_team;
        let member2 = find("center/member2", this.view.info).getComponent(Label);
        member2.string = Math.floor(msg.bet_amount_self / 100).toString();
        let member3 = find("center/member3", this.view.info).getComponent(Label);
        member3.string = Math.floor(msg.bet_amount_team / 100).toString();
        let member4 = find("center/member4", this.view.info).getComponent(Label);
        member4.string = Math.floor((msg.bet_amount_self / 100) + (msg.bet_amount_team / 100)).toString();
        let member5 = find("center/member5", this.view.info).getComponent(Label);
        member5.string = msg.active_member_self;
        let member6 = find("center/member6", this.view.info).getComponent(Label);
        member6.string = msg.active_member_team;
    }

    /**
     * 时间戳转换日期
     * @param timestamp 时间戳
     * @returns 
     */
    private _getTimeDate(timestamp: any) {
        let date = new Date(timestamp * 1000);
        let year = date.getFullYear() < 10 ? "0" + date.getFullYear() : "" + date.getFullYear();
        let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : "" + (date.getMonth() + 1);
        let day = date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();
        return `${year}-${month}-${day}`;
    }
   
}


