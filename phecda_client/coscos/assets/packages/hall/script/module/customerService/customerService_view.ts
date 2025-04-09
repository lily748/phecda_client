import { _decorator, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import SpriteFrameHolder from '../../../../../script/utility/ui_extend/spriteframe_holder';
const { ccclass, property } = _decorator;


@ccclass('CustomerServiceView')
export default class CustomerServiceView extends ViewBase {
  @property(SpriteFrameHolder)
  spriteFrameHolder: SpriteFrameHolder = null
  @property(Node)
  closeBtn: Node = null
  @property(Node)
  item: Node = null
  @property(Label)
  tips: Label
}