
import { _decorator, Component, instantiate, Label, Node, ScrollView, tween, UITransform, v2, v3, Vec3 } from 'cc';
import List from '../../../../../script/utility/ui_extend/list/list';
import Utility from '../../../../../script/utility/utility';
import { DateSelectScroll } from './dateSelectScroll';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('DateSelectView')
export class DateSelectView extends ViewBase {

    @property(Node)
    confirm: Node = null;

    @property(Node)
    cancel: Node = null;

    @property(Node)
    itemposY: Node = null;

    @property(DateSelectScroll)
    scroll_1: DateSelectScroll = null;

    @property(DateSelectScroll)
    scroll_2: DateSelectScroll = null;

    @property(DateSelectScroll)
    scroll_3: DateSelectScroll = null;

   
  
    
}
 

  
