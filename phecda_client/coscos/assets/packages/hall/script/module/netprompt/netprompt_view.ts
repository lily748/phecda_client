import { _decorator, Node } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('NetPromptView')
export default class NetPromptView extends ViewBase {
    @property(Node)
    mainNode: Node | null = null
    @property(Node)
    reconnectNode: Node | null = null
}