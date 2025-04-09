
import { _decorator, Component, Node } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { EarnMoneyDetailView } from './earnMoneyDetail_view';
import { EarnMoneyRulesView } from './earnMoneyRules_view';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import { SpriteDataModel } from '../../model/SpriteDataModel';
const { ccclass, property } = _decorator;


@ccclass('EarnMoneyRules')
export class EarnMoneyRules extends Module<EarnMoneyRulesView, null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/earnMoneyNew/public_earnMoneyRules";
        this.viewType = EarnMoneyRulesView;
        this.modelType = null;
        this.layer = ViewLayer.Low
        this.needAnim = true
        this.needViewMask = true
    }

  
    onInit() {
        Utility.instance.onButtonClick(this.view.btn_back, this.onCloseClick, this);
    }

    onShow(data: any): void {
        if(data.img_url==null || data.img_url=="") return;
        SpriteDataModel.SetSprite(this.view.sprite, data.img_url);
    }

    onCloseClick() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.EarnMoneyRules);
    }

}
