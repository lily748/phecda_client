import { Button, _decorator } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import CommonName from '../../model/CommonName';
const { ccclass, property } = _decorator;

import MoneyNotEnoughView from "./moneyNotEnough_view";

@ccclass('MoneyNotEnough')
export default class MoneyNotEnough extends Module<MoneyNotEnoughView, null> {

    private closeCallback: () => void = null

    constructor() {
        super();
        this.bundleName = "resources";
        this.layer = ViewLayer.High;
        this.windowPrefabResPath = "prefabs/public_moneyNotEnough";
        this.viewType = MoneyNotEnoughView;
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        this.view.content.string = LanguageManager.instance.getErrorMsgByID(CommonName.ErrorCode.MoneyNotEnough)

        this.view.cancel.on(Button.EventType.CLICK, this.onCancel, this)
        this.view.recharge.on(Button.EventType.CLICK, this.onRecharge, this)
        AudioManager.instance.playOpenWindowSound()
    }

    private onCancel() {
        if (this.closeCallback) {
            this.closeCallback()
            this.closeCallback = null
        } else {
            AudioManager.instance.playCloseWindowSound()
        }
        ModuleManager.instance.destroyModule(CommonName.MODULE.MoneyNotEnough)
    }

    private onRecharge() {
        if (this.closeCallback) {
            this.closeCallback()
        }
        this.closeCallback = null
        ModuleManager.instance.destroyModule(CommonName.MODULE.MoneyNotEnough)
        ModuleManager.instance.showModule(CommonName.MODULE.RechargeNew, { Callback: this.closeCallback })
    }

    onShow(closeCallback?: () => void) {
        this.closeCallback = closeCallback
    }
}