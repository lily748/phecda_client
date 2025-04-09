import { _decorator, Node, Sprite } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('ActivitySocialMedia_view')
export default class ActivitySocialMedia_view extends ViewBase {    
    @property(Node)
    btnClose: Node
    @property(Sprite)
    sprBg: Node

    @property(Node)
    btnTelegram: Node
    @property(Node)
    btnWhatsApp: Node
}