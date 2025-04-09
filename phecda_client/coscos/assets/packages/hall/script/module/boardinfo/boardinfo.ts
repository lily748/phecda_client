
import { _decorator, Component, Node } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import { BoardInfoView } from './boardinfo_view';
const { ccclass, property } = _decorator;



@ccclass('BoardInfo')
export class BoardInfo extends Module<BoardInfoView, null> {

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_boardinfo";
        this.viewType = BoardInfoView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needViewMask = true
        this.needAnim = true
    }

    onInit() {
        this.view.boardInfoCloseBtn.on("click", this.onCloseBtnClick, this)
    }

    onShow(data) {
        AudioManager.instance.playOpenWindowSound()
        this.view.showInfo(data)
    }

    private onCloseBtnClick() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule("BoardInfo")
    }



}

