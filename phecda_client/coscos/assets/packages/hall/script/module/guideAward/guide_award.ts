
import { _decorator } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import CommonName from '../../model/CommonName';
import { GuideAwardView } from './guide_award_view';
const { ccclass, property } = _decorator;


@ccclass('GuideAward')
export class GuideAward extends Module<GuideAwardView, null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_guideAward";
        this.viewType = GuideAwardView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needViewMask = true
    }

    onInit() {
        this.view.awardBtn.on("click", this.onAwardBtnClick, this)
    }

    onShow(money) {
        AudioManager.instance.playOpenWindowSound()
        this.view.numLabel.string = Math.floor(money * 0.01) + ""
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityList)
    }

    onAwardBtnClick() {
        AudioManager.instance.playCloseWindowSound()
        this.destroyModule()
    }
}

