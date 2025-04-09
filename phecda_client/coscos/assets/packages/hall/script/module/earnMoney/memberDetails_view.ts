
import { _decorator, Component, Node } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

 
@ccclass('MemberDetailsView')
export class MemberDetailsView extends ViewBase {
    @property(Node)
    btnBack: Node
    @property(Node)
    user: Node
    @property(Node)
    info: Node
}

