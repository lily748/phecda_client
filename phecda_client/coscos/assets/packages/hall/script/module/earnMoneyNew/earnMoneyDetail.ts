
import { _decorator, Component, Node } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { EarnMoneyDetailView } from './earnMoneyDetail_view';
const { ccclass, property } = _decorator;

@ccclass('EarnMoneyDetail')
export class EarnMoneyDetail extends Module<EarnMoneyDetailView, null> {

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/earnMoneyNew/public_earnMoneyDetail";
        this.viewType = EarnMoneyDetailView;
        this.modelType = null;
        this.layer = ViewLayer.Low
        this.needAnim = true
        this.needViewMask = true
    }

  
    onInit() {
        // this.view.hallTemplate.setSelectToggle(CommonName.MODULE.EarnMoney);
        // this._reqGetTeamInfo();
    }

}
