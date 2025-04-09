import { _decorator } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;

import SettingView from "./setting_view";
import AudioManager from '../../../../../script/manager/audio_manager';
import { LoginServer } from '../../../../../script/net/login_serve';
import CommonName from '../../model/CommonName';
import Utility from '../../../../../script/utility/utility';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import { HotUpdateManager } from '../../../../../script/framework/hotUpdate/HotUpdateManager';

@ccclass('Setting')
export default class Setting extends Module<SettingView, null>{

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_setting";
        this.viewType = SettingView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.close, this.onClose, this, false)
        Utility.instance.onButtonClick(this.view.logout, this.onSwitchAccount, this)

        this.view.music.isChecked = AudioManager.instance.getSwitchMusic()
        this.view.sound.isChecked = AudioManager.instance.getSwitchEffect()
        Utility.instance.onToggleClick(this.view.music, this.onMusic, this)
        Utility.instance.onToggleClick(this.view.sound, this.onSound, this)

        this.view.language.isChecked = LanguageManager.instance.current == CommonName.LANGUAGE.PT
        // Utility.instance.onToggleClick(this.view.language, this.onLanguage, this)

        this.view.id.string = "UID: " + UserDataModel.GetCurrentUserID()
        Utility.instance.onButtonClick(this.view.repair, this.onRepair, this, false)
        Utility.instance.onButtonClick(this.view.copy, () => {
            Utility.instance.copyTextToClipboard(this.view.id.string)
            ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("common_copy_to_clipboard"))
        }, this)
    }

    onShow(bundleName: string = "main") {
        this.view.logout.active = bundleName == "main"
        // this.view.repair.active = bundleName == "main"
        AudioManager.instance.playOpenWindowSound()
        this.view.version.string = "V " + HotUpdateManager.getLocalVersion(bundleName)
    }

    private onClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.Setting)
    }

    private onSwitchAccount() {
        LoginServer.logout()
        ModuleManager.instance.showModule("Login", null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.Setting)
            ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
        })
    }

    private onMusic() {
        AudioManager.instance.setSwitchMusic(this.view.music.isChecked)
    }

    private onSound() {
        AudioManager.instance.setSwitchEffect(this.view.sound.isChecked)
    }

    private onLanguage() {
        let lan = this.view.language.isChecked ? CommonName.LANGUAGE.EN : CommonName.LANGUAGE.PT
        LanguageManager.instance.setLang(lan)
        LoginServer.requestSetLanguage(lan)
    }

    private onRepair() {
        let str = LanguageManager.instance.getLangByID("xiufutishi")
        ModuleManager.instance.showDialog_CancelConfirm(str, () => {
            HotUpdateManager.RemoveLocalRes()
        })
    }
}