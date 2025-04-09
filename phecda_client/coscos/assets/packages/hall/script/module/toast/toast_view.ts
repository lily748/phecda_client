import { _decorator, Node } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('ToastView')
export default class ToastView extends ViewBase {
    @property(Node)
    holder: Node | null = null
}