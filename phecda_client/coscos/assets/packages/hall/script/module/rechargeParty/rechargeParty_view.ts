import { _decorator, Node, Label, Toggle, Sprite } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('RechargePartyView')
export default class RechargePartyView extends ViewBase {
    
    @property(Node)
    close: Node

    @property(Node)
    title: Node

    @property(Toggle)
    tog1: Toggle
    @property(Toggle)
    tog2: Toggle

    @property(Label)
    tips1: Label
    @property(Label)
    tips2: Label

    @property(Label)
    time: Label

    @property(Node)
    progress: Node
    @property(Sprite)
    progressBar: Sprite

    @property(Label)
    totalDesc: Label

    @property(Node)
    help: Node
    @property(Node)
    recharge: Node
    @property(Node)
    play: Node
}