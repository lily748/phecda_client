
import { _decorator, Component, Node, View } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import CommonName from '../../model/CommonName';
import { RewardView } from './reward_view';
const { ccclass, property } = _decorator;


@ccclass('Reward')
export class Reward extends Module<RewardView, null> {

    private callback: () => void

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_reward";
        this.viewType = RewardView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        this.view.closeBtn.on("click", this.onCloseBtnClick, this)
    }

    onShow(datas) {
        if (datas && datas.Callback) this.callback = datas.Callback
        AudioManager.instance.playOpenWindowSound()
        AudioManager.instance.playEffect(CommonName.PUBLIC_SOUNDURL.Reward)
        this.view.showItems(datas.Items)
    }

    private onCloseBtnClick() {
        if (this.callback) {
            this.callback()
        } else {
            AudioManager.instance.playCloseWindowSound()
        }
        this.callback = null
        this.hide()
    }



}

