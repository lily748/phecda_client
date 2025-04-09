import { _decorator, Node, SpriteFrame,Sprite, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { ToggleGroup } from '../../../../../script/utility/ui_extend/toggleGroup';
import { HallTemplate } from '../hall/hall_template';

const { ccclass, property } = _decorator;
@ccclass('PromotionView')
export default class PromotionView extends ViewBase {
    @property(Node)
    promoPanel: Node
    @property(Node)
    promoItem: Node
    
    @property(HallTemplate)
    hallTemplate: HallTemplate 
}