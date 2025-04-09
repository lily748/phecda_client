import { _decorator, Node, Label, Sprite,ScrollView } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { ToggleGroup } from '../../../../../script/utility/ui_extend/toggleGroup';
import { HallTemplate } from './hall_template';
const { ccclass, property } = _decorator;


@ccclass('HallView')
export default class HallView extends ViewBase {
    @property(Node)
    activityScroll: Node = null

    @property(Label)
    idName: Label = null
    @property(Label)
    id: Label = null
    @property(Label)
    vipLevel: Label = null
    @property(Label)
    goldNum: Label = null
    @property(Node)
    refreshBtn: Node = null

    @property(Node)
    addcashBtn: Node = null
    @property(Node)
    withdraw: Node = null
    @property(Node)
    vip: Node = null

    @property(ScrollView)
    brandlist: ScrollView = null    

    @property(Node)
    sideSortContent: Node  = null  
    @property(ToggleGroup)
    sideSortToggleGroup: ToggleGroup  = null  

    @property(HallTemplate)
    hallTemplate: HallTemplate
    @property(Node)
    btnRank: Node = null
    @property(Node)
    btnFirstCharge: Node = null
    @property(Sprite)
    avatar: Sprite = null
    @property(Node)
    btn_avatar: Node = null
    @property(Node)
    btnMonthlyCard: Node = null
    @property(Node)
    btnTreasurebowl: Node = null

    @property(Node)
    btnAllgame: Node = null
    @property(Node)
    btnRecent: Node = null
    @property(Node)
    empty: Node = null
    @property(Node)
    btnPalynow: Node = null
    @property(Node)
    btnRechargewheel: Node = null
    @property(Node)
    money_layout: Node = null    
}