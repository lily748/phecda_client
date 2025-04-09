
import { _decorator, Component, Node,ScrollView,Label, Sprite, RichText } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

 
@ccclass('EmailDetailsView')
export class EmailDetailsView extends ViewBase {
    @property(Node)
    btnBack: Node
    @property(ScrollView)
    emailList: ScrollView = null  
    @property(Label)
    lbl_title: Label
    @property(Label)
    lbl_time: Label
    @property(Sprite)
    sp_img: Sprite
    @property(RichText)
    rich_text: RichText
    @property(Label)
    lbl_coin: Label
    @property(Node)
    rewards: Node
    @property(Node)
    btn_delete: Node
    @property(Node)
    btn_jump: Node
    @property(Node)
    btn_receive: Node
    @property(Label)
    lbl_jump: Label
    @property(Sprite)
    sp_receive: Sprite
}


