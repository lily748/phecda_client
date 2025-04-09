import { _decorator, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('HelpDescView')
export default class HelpDescView extends ViewBase {
    
    @property(Node)
    close: Node

    @property(Node)
    content: Node

    @property(Node)
    litsItem: Node

    @property(Label)
    labelItem: Label
}