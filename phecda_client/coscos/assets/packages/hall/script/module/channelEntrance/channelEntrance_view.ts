
import { _decorator, Component, Node, SpriteFrame } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('ChannelEntranceView')
export class ChannelEntranceView extends ViewBase {
    
    @property(Node)
    item: Node = null;
   
    @property(Node)
    close: Node = null;

    @property([SpriteFrame])
    icons: SpriteFrame[] = [];
    
}
