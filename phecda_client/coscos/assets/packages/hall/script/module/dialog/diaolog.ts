
import { _decorator } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';

const { ccclass, property } = _decorator;

import DialogView from "./dialog_view";

@ccclass('Dialog')
export default class Dialog extends Module<DialogView, null> {
    scheduleCallback: Function
    constructor() {
        super();
        this.bundleName = "resources";
        this.layer = ViewLayer.Max;
        this.windowPrefabResPath = "prefabs/public_dialog";
        this.viewType = DialogView;
        this.needAnim = true
    }
    _leftBtnCallback: Function
    _rightBtnCallback: Function
    _centerBtnCallback: Function
    _clickLeftBtnNotHideView: any
    _clickRightBtnNotHideView: any
    _clickCenterBtnNotHideView: any

    private get confirmStr() { return LanguageManager.instance.getLangByID("common_prompt_ok") }
    private get cancelStr() { return LanguageManager.instance.getLangByID("common_prompt_cancal") }

    onInit(arg) {
        super.onInit(arg)
        let self = this
        this.view.button_left.node.on('click', function (event) {
            AudioManager.instance.playCloseWindowSound()
            if (!self._clickLeftBtnNotHideView) {
                self.view.hide()
            }
            if (self._leftBtnCallback) {
                self._leftBtnCallback()
            }
        })
        this.view.button_right.node.on('click', function (event) {
            AudioManager.instance.playButtonSound()
            if (!self._clickRightBtnNotHideView) {
                self.view.hide()
            }
            if (self._rightBtnCallback) {
                self._rightBtnCallback()
            }
        })
        this.view.button_center.node.on('click', function (event) {
            AudioManager.instance.playButtonSound()
            if (!self._clickCenterBtnNotHideView) {
                self.view.hide()
            }
            if (self._centerBtnCallback) {
                self._centerBtnCallback()
            }
        })
    }
    show_center_button(title: string, text: string, callback?: Function, clickButtonConfirmNotHideView?) {
        callback = callback || function () { }
        this.show_custom_dialog(title, text, null, null, callback, null, null, clickButtonConfirmNotHideView, this.cancelStr, this.confirmStr)
    }
    // //默认显示两个按钮，左边为取消，右边为确定
    show_common(title: string, text: string, confirmCallback?: Function, cancelCallback?: Function, clickButtonConfirmNotHideView?) {
        confirmCallback = confirmCallback || function () { }
        cancelCallback = cancelCallback || function () { }
        this.show_custom_dialog(title, text, cancelCallback, confirmCallback, null, null, clickButtonConfirmNotHideView, null, this.cancelStr, this.confirmStr)
    }
    // //默认显示两个按钮，左边为取消，右边为确定
    show_common_btnTxt(title: string, text: string, leftBtnStr, rightBtnStr, rightCb, leftCb) {
        rightCb = rightCb || function () { }
        leftCb = leftCb || function () { }
        this.show_custom_dialog(title, text, leftCb, rightCb, null, null, null, null, leftBtnStr, rightBtnStr)
    }
    show_custom_dialog(title: string, text: string, leftBtnCallback: Function, rightBtnCallback: Function, centerBtnCallback: Function, clickLeftBtnNotHideView?, clickRightBtnNotHideView?, clickCenterBtnNotHideView?, leftStr?, rightStr?) {
        if (!this.view) {
            let data = {
                title: title,
                text: text,
                leftBtnCallback: leftBtnCallback,
                rightBtnCallback: rightBtnCallback,
                centerBtnCallback: centerBtnCallback,
                clickLeftBtnNotHideView: clickLeftBtnNotHideView,
                clickRightBtnNotHideView: clickRightBtnNotHideView,
                clickCenterBtnNotHideView: clickCenterBtnNotHideView,
                leftStr: leftStr,
                rightStr: rightStr
            }
            return
        }
        if (!title) {
            this.view.label_title.node.active = false
            title = ''
            this.view.titleImg.node.active = true
        } else {
            this.view.label_title.node.active = true
            this.view.titleImg.node.active = false
        }
        if (!text) {
            text = ''
        }
        this.view.label_title.string = title
        this.view.label_content.string = `<color=#FFFFFF>${text}</color>`//text
        if (!leftBtnCallback) {
            this.view.button_left.node.active = false
            this._leftBtnCallback = null
            this._clickLeftBtnNotHideView = null
        } else {
            this.view.button_left.node.active = true
            this._leftBtnCallback = leftBtnCallback
            this._clickLeftBtnNotHideView = clickLeftBtnNotHideView
        }

        if (!rightBtnCallback) {
            this.view.button_right.node.active = false
            this._rightBtnCallback = null
            this._clickRightBtnNotHideView = null
        } else {
            this.view.button_right.node.active = true
            this._rightBtnCallback = rightBtnCallback
            this._clickRightBtnNotHideView = clickRightBtnNotHideView
        }

        if (!centerBtnCallback) {
            this.view.button_center.node.active = false
            this._centerBtnCallback = null
            this._clickCenterBtnNotHideView = null
        } else {
            this.view.button_center.node.active = true
            this._centerBtnCallback = centerBtnCallback
            this._clickCenterBtnNotHideView = clickCenterBtnNotHideView
        }

        this.view.leftLabel.string = leftStr
        this.view.rightLabel.string = rightStr
        this.view.centerLabel.string = rightStr
        this.view.show()
    }
    show_custom(data) {
        this.show_custom_dialog(data.title, data.text, data.leftBtnCallback, data.rightBtnCallback, data.centerBtnCallback, data.clickLeftBtnNotHideView, data.clickRightBtnNotHideView, data.clickCenterBtnNotHideView, data.leftStr, data.rightStr)
    }
}