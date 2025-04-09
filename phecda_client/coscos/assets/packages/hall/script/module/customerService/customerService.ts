import { VipLevel } from './../hall/VipLevel';
import { Sprite, Color } from 'cc';
import { instantiate, Label, sys, _decorator } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
const { ccclass, property } = _decorator;

import CustomerServiceView from "./customerService_view";
import Utility from '../../../../../script/utility/utility';
import AudioManager from '../../../../../script/manager/audio_manager';
import { GameConfig } from '../../../../../script/com/game_config';
import { HttpDataModel, ReportTypeName } from '../../model/HttpDataModel';
import { HotUpdateManager } from '../../../../../script/framework/hotUpdate/HotUpdateManager';
import HttpUtil from '../../../../../script/framework/net/http_util';
import { Env } from '../../../../../script/game/Env';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import { UserDataModel } from '../../model/UserDataModel';

@ccclass('CustomerService')
export default class CustomerService extends Module<CustomerServiceView, null>{

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_customerService";
        this.viewType = CustomerServiceView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.closeBtn, this.onClose, this, false)
    }

    onShow(data?: any) {
        AudioManager.instance.playOpenWindowSound()
        let vipLvl = UserDataModel.GetCurrentUser().UserData?.VipLv
        if (GameConfig.ServiceData?.length > 0) {
            let tips = ""
            for (const ser of GameConfig.ServiceData) {
                if (ser.name == "hall1") {
                    this.initItemUI(data, ser, false)
                }

                // if (ser.name == "vip") {
                //     if (ser.Lv <= vipLvl) {
                //         this.initItemUI(data, ser, true)
                //     }
                // }
                // else {
                //     this.initItemUI(data, ser, false)
                // }
                if (ser.online_time) tips = ser.online_time
            }
            this.view.tips.string = ""
        }
    }

    private initItemUI(data, ser, isVip) {
        let item = instantiate(this.view.item)
        item.setParent(this.view.item.parent)
        item.active = true
        item.getChildByName("Label").getComponent(Label).string = ser.online_time
        item.getChildByName("Label").getComponent(Label).color = new Color().fromHEX(isVip?"#F8EE1D":"#ffffff")
        item.getChildByName("Icon").getComponent(Sprite).spriteFrame = this.view.spriteFrameHolder.getSpriteFrameByKey(isVip ? "vip" : "normal");
        item.getChildByName("Vip").active = isVip
        isVip && (item.getChildByPath("Vip/Label").getComponent(Label).string = ser.Lv + "")
        Utility.instance.onButtonClick(item, () => {
            if (data?.Report) { this.report(data?.Type) }
            sys.openURL(ser.url)
        }, this)
    }

    onClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule("CustomerService")
    }

    private report(type?: number) {
        HttpDataModel.Report(ReportTypeName.LineService)
        let user = UserDataModel.GetLocalUserInfo()
        let userID = 0
        if (user) { userID = user.UserID }
        let params = {}
        params["hd_code"] = Env.HDCode
        params["uid"] = userID
        params["package_name"] = GameConfig.packageName
        params["ver"] = HotUpdateManager.getLocalVersion("main")
        params["area_id"] = GameConfig.GameSiteID
        params["type"] = type || 0
        params["time"] = Date.now()
        params["rand_str"] = Utility.instance.getMD5("" + params["time"])
        params["lang"] = LanguageManager.instance.current
        params["sign"] = HttpUtil.getSign(params)[0]
        let reqData = {
            url: GameConfig.ServerListDomain + "/userPayBehavior",
            data: JSON.stringify(params),
            maxRequestCount: 5,
        }
        console.log("上报Line客服", params)
        HttpUtil.http_post(reqData, (data: any) => { console.log(data) }, () => { })
    }
}