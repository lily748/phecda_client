
import { _decorator, Component, Node, sys, js, warn } from 'cc';
import { GameConfig } from '../../../../../script/com/game_config';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { GroupRewardView } from './groupReward_View';
const { ccclass, property } = _decorator;


@ccclass('GroupReward')
export class GroupReward extends Module<GroupRewardView, null> {

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_groupReward";
        this.viewType = GroupRewardView;
        this.modelType = null;
        this.layer = ViewLayer.High
        this.needAnim = true
        this.needViewMask = true
    }

    private _serviceUrl: string = ""
    private _jumpUrl: string = ""
    private _awardNum: number = 0
    onInit() {
        this.initService()
        Utility.instance.onButtonClick(this.view.btnService, this.onClickBtnService, this)
        Utility.instance.onButtonClick(this.view.btnJump, this.onClickJump, this)
        Utility.instance.onButtonClick(this.view.btnClose, this.onClickClose, this)
    }
    onClickClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.GroupReward)
    }

    onShow() {
        AudioManager.instance.playOpenWindowSound()
        this.requestConfig()
    }

    onClickJump() {
        if (this._jumpUrl.startsWith("http")) {
            sys.openURL(this._jumpUrl)
        }else 
        {
            warn("跳转异常，url格式不正确")
        }
    }

    onClickBtnService() {
        if (this._serviceUrl.startsWith("http")) {
            sys.openURL(this._serviceUrl)
        }else
        {
            warn("跳转客服异常，url格式不正确")
        }
    }

    private requestConfig() {
        let info: PostData = {
            Target: this,
            Url: "/pro/getTelegramJoinInfo",
            Params: {},
            Callback: this.onGetConfig.bind(this),
            WholeData: false
        }
        HttpDataModel.Post(info)
    }

    private onGetConfig(config) {
        if (null == this.view)
            return
        this._jumpUrl = config.link 
        this.view.lblContent.string = "" + (config.reward || 0)
    }

    private initService() {
        if (GameConfig.ServiceData?.length > 0) {
            for (const ser of GameConfig.ServiceData) {
                if (ser.name == "online") {
                    this._serviceUrl = ser.url
                    break
                }
            }
        }
    }
}