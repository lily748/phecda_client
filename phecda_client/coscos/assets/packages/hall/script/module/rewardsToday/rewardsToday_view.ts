
import { _decorator, Component, EditBox, Node } from 'cc';
import { rewardsContent } from './rewardsContent';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


 
@ccclass('RewardsTodayView')
export class RewardsTodayView extends ViewBase {

    @property(rewardsContent)
    content0: rewardsContent = null;

    @property(rewardsContent)
    content1: rewardsContent = null;

    @property(EditBox)
    inputReward: EditBox = null;

    @property(Node)
    getRewardBtn: Node = null;
  
    @property(Node)
    close: Node = null;
  
}

