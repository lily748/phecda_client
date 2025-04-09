
import { _decorator, Component, Node } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


 
@ccclass('ReminderView')
export class ReminderView extends ViewBase {
    @property(Node)
    btnClose: Node = null;
    @property(Node)
    btnLogout: Node = null;
    @property(Node)
    btnSet: Node = null;
}


