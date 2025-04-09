import { _decorator, Node, Label, Sprite, UITransform, Button, Vec3, tween, Tween, PageView, RichText, Toggle, SpriteAtlas, SpriteFrame, ImageAsset, EditBox } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { ToggleGroup } from '../../../../../script/utility/ui_extend/toggleGroup';
import Utility from '../../../../../script/utility/utility';
const { ccclass, property } = _decorator;


@ccclass('ActivityListView')
export default class ActivityListView extends ViewBase {

  @property(Node)
  closeBtn: Node = null

  @property(Node)
  content: Node
  @property(ToggleGroup)
  toggleGroup: ToggleGroup
}