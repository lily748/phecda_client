import { _decorator, Toggle } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
const { ccclass, property } = _decorator;

import ActivityPopupView from "./activityPopup_view";
import { PlayPageView } from '../../../../../script/utility/ui_extend/play_pageview';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import AudioManager from '../../../../../script/manager/audio_manager';

@ccclass('ActivityPopup')
export default class ActivityPopup extends Module<ActivityPopupView, null>{

    private togList: Array<Toggle>

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_activityPopup";
        this.viewType = ActivityPopupView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.closeBtn, this.onClose, this, false)
    }

    onDestroy() {

    }

    onShow(data: any) {
        this.view.pageView.getComponent(PlayPageView).play()

    }

    onClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityPopup)
    }
}