
import { _decorator, Component, Label, Node, sp } from 'cc';
import { GiftCodeResultView } from './giftCodeResult_view';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
const { ccclass, property } = _decorator;

@ccclass('GiftCodeResult')
export class GiftCodeResult extends Module<GiftCodeResultView, null> {

   constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/rewardCode/public_giftCodeResult";
        this.viewType = GiftCodeResultView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
        this.autoShowAnim = true;
    }

    
    onInit(arg0: any): void {
        Utility.instance.onButtonClick(this.view.btnConfirm, this.clickClose, this);
    }

    onShow(money: any) {

        let aniCom = this.view.ani.getComponent(sp.Skeleton);
        aniCom.setAnimation(0, 'animation1', false);
        aniCom.setCompleteListener(() => {
            aniCom.setAnimation(0, 'animation2', true);
        })

        this.view.textAmount.getComponent(Label).string = "₹" + Utility.instance.numThousandsFormat((money/100).toString());
    }

    clickClose() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.GiftCodeResult);
    }
}
