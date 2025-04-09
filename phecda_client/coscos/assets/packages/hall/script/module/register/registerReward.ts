import { _decorator } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';

const { ccclass, property } = _decorator;

import RegisterRewardView from "./registerReward_view";

@ccclass('RegisterReward')
export default class RegisterReward extends Module<RegisterRewardView, null>{

    private closeCallback: () => void

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_registerReward";
        this.viewType = RegisterRewardView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.close, this.onClose, this, false)
        Utility.instance.onButtonClick(this.view.registerBtn, this.onRegister, this, false)
    }

    private onClose() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.RegisterReward)
        if (this.closeCallback) {
            this.closeCallback()
            this.closeCallback = null
        } else {
            AudioManager.instance.playCloseWindowSound()
        }
    }

    onShow(closeCallback?: () => void) {
        this.closeCallback = closeCallback
        AudioManager.instance.playOpenWindowSound()
        this.view.registerReward.string = "" + UserDataModel.registerReward
    }

    private onRegister() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.RegisterReward)
        ModuleManager.instance.showModule(CommonName.MODULE.Register, { type: 1, callback: this.closeCallback })
    }
}