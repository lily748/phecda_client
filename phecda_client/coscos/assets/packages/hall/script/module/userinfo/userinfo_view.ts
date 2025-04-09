import { _decorator, Node, Label, Sprite} from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { HallTemplate } from '../hall/hall_template';

const { ccclass, property } = _decorator;


@ccclass('UserInfoView')
export default class UserInfoView extends ViewBase {
    // @property(Label)
    // idName: Label = null
    @property(Label)
    id: Label = null
    @property(Label)
    vip: Label = null
    @property(Label)
    coin: Label = null
    @property(Sprite)
    avatar: Sprite = null
    @property(Node)
    addCash: Node
    @property(Node)
    withDraw: Node
    @property(Node)
    records: Node
    @property(Node)
    report: Node
    @property(Node)
    account: Node
    @property(Node)
    bankCard: Node
    @property(Node)
    gifts:Node = null;
    @property(Node)
    aboutUs:Node = null;

    // @property(Node)
    // faq: Node
    // @property(Node)
    // security: Node
    // @property(Node)
    // notice: Node
    // @property(Node)
    // version: Node
    @property(Label)
    ver: Label = null
    @property(Node)
    logout: Node
    @property(Node)
    btnVip: Node = null
    @property(Node)
    refreshBtn: Node = null
    @property(HallTemplate)
    hallTemplate: HallTemplate
    @property(Node)
    btnLive: Node = null
    @property(Node)
    page: Node = null 

    @property(Node)
    btnSetting:Node = null;
}