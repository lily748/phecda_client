
import { _decorator } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { GuideView } from './guide_view';
const { ccclass, property } = _decorator;


@ccclass('GuideModule')
export class GuideModule extends Module<GuideView, null> {

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_guide";
        this.viewType = GuideView;
        this.modelType = null;
        this.layer = ViewLayer.High
    }

    onShow() {
        // this.view.guideStart()
    }

    startGuide() {
        this.view.guideStart()
    }
}

