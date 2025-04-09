import { _decorator, Node, CCInteger, Label, UITransform, Sprite } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { HotUpdateManager } from '../../../../../script/framework/hotUpdate/HotUpdateManager';
const { ccclass, property } = _decorator;


@ccclass('LoadingView')
export default class LoadingView extends ViewBase {

    @property(CCInteger)
    maxW: number = 560

    @property(Sprite)
    barNode: Sprite | null = null

    @property(Label)
    loadingPercentageLabel: Label | null = null

    @property(Label)
    versionLabel: Label | null = null

    @property(Label)
    lbl_percentage: Label | null = null

    onLoad(){
        if (this.versionLabel) {
            this.versionLabel.string = "V " + HotUpdateManager.getLocalVersion("main");
        }
    }

    setProgressValue(value: number) {
        if (!this || !this.isValid || !this.node || !this.node.isValid) {
            return
        }
        this.barNode.fillRange = value;        
        this.lbl_percentage.string = Math.round(value * 100) + '%'
    }

}