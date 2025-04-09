// //默认导入

import { _decorator } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
const { ccclass, property } = _decorator;

import LoadingView from "./loading_view";
import EventManager from '../../../../../script/manager/event_manager';
import CommonName from '../../model/CommonName';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { HttpDataModel } from '../../model/HttpDataModel';
import { PostData } from '../../model/HttpDataModel';
import { GameConfig } from '../../../../../script/com/game_config';
import { HotUpdateManager } from '../../../../../script/framework/hotUpdate/HotUpdateManager';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { Env } from '../../../../../script/game/Env';
import { GameResConfig } from '../../../../../script/hall/GameResConfig';
import { HallModel } from '../../model/HallModel';

@ccclass('Loading')
export default class LoadingModule extends Module<LoadingView, null> {

    constructor() {
        super();
        this.bundleName = "resources";
        this.layer = ViewLayer.Mid;
        this.windowPrefabResPath = "prefabs/public_loading";
        this.viewType = LoadingView;
    }

    onInit() {
        HallModel.loadSceneInfo.load = Math.floor(new Date().getTime() / 1000);
        EventManager.instance.on(CommonName.EVENT.HotUpdate_Success, this.gotoLogin, this);
        this.scheduleOnce(this.reportInfo.bind(this),0.3);
    }

    reportInfo(){
       
    }

    onShow(data) {
        if (!this || !this.isValid || !this.node || !this.node.isValid || !this.view || !this.view.loadingPercentageLabel) {
            return
        }
        this.view.loadingPercentageLabel.string = data ? data.tips : ""
        this.view.setProgressValue(data ? data.progressPercentage : 0)
    }

    gotoLogin(){
        GameResConfig.gotoLogin();
    }

    onDestroy() {
        EventManager.instance.off(CommonName.EVENT.HotUpdate_Success, this.gotoLogin, this)
    }

}