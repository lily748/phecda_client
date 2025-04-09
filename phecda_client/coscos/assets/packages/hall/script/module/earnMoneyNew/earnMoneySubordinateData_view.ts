
import { _decorator, Component, EditBox, editorExtrasTag, Label, Node, Sprite, SpriteFrame } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import List from '../../../../../script/utility/ui_extend/list/list';
import Utility from '../../../../../script/utility/utility';
import { SpriteDataModel } from '../../model/SpriteDataModel';
const { ccclass, property } = _decorator;
 
@ccclass('EarnMoneySubordinateDataView')
export class EarnMoneySubordinateDataView extends ViewBase {

    @property(Node)
    btn_back: Node = null;

    @property(Node)
    btn_help: Node = null;

    @property(Node)
    tip_bg: Node = null;

    @property(Node)
    clickNode: Node = null;

    @property(Label)
    lab_total: Label = null;

    @property(Label)
    lab_today: Label = null;

    @property(Label)
    lab_yesterday: Label = null;

    @property(Label)
    lab_month: Label = null;

    @property(Node)
    content_select: Node = null;

    @property(Node)
    content_pages: Node = null;

    @property(Node)
    content_stars: Node = null;

    @property(Node)
    btn_joinTime = null;
    @property(Node)
    btn_commission = null;

    @property(Node)
    btn_all = null;

    @property(Node)
    btn_dateTime = null;

    @property(EditBox)
    editbox_phone = null;

    @property(List)
    list: List = null;

    _listData = null;

    public chooseType = 1;

    set listData(data) {
        this._listData = data;

    }



    get listData() {
        return this._listData;
    }

    updateRender(item, index) {
        item.active = true;
        let info = this._listData[index];
        let types = ["All", "Bet", "Deposit", "Invite"];
        item.getChildByName("lab_phone").getComponent(Label).string = info.uid;
        item.getChildByName("lab_deposit").getComponent(Label).string = "₹" + Utility.instance.numThousandsFormat(String(info.total_deposit/100));
        item.getChildByName("lab_commission").getComponent(Label).string = "₹" + Utility.instance.numThousandsFormat(String(info.commission/100));
        item.getChildByName("lab_time").getComponent(Label).string = Utility.instance.formatTime(info.ts,"yyyy-MM-dd");
        item.getChildByName("lab_type").getComponent(Label).string = types[info.commission_type];
        item.getChildByName("lab_type").active = (this.chooseType ==2)
        item.getChildByName("label_level").getComponent(Label).string = "Tier"+info.lvl;

        SpriteDataModel.SetHead(item.getChildByName("sp_head").getComponent(Sprite), info.avatar);

        
        
    }


   
   

   

}

