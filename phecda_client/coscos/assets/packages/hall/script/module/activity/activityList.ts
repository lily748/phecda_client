import { _decorator, Toggle, sys, Sprite } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
const { ccclass, property } = _decorator;

import ActivityListView from "./activityList_view";
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { GameConfig } from '../../../../../script/com/game_config';
import { ActivityListAPI } from './activityListApi';
import { SpriteManager } from '../../../../../script/manager/sprite_manager';

enum EventoType {
    FirstRecharge = 1,
    VIPCash,
    Promova,
    Avaliar,
    FB,
    An
}

// const ContentMap:Map<EventoType,Object> = new Map<EventoType,Object>([[EventoType.FirstRecharge:{}],])

@ccclass('ActivityList')
export default class ActivityList extends Module<ActivityListView, null>{

    private togList: Array<Toggle>

    private _data: any;
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_activityList";
        this.viewType = ActivityListView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.closeBtn, this.onClose, this, false)

        this.view.toggleGroup.setListener((sender: Toggle) => { this.onChecked(sender.node.name) })
        for (const child of this.view.content.children) {
            Utility.instance.onButtonClick(child.getChildByPath("Button"), () => this.onJump(child.name), this, false)
        }
        AudioManager.instance.playOpenWindowSound()
    }

    onShow() {
        ActivityListAPI.requestEventoConfig(this, this.onGetEventoShowTab.bind(this));
    }


    private onGetEventoShowTab(ret: any) {
        console.log("返回配置信息 ", ret)
        this._data = ret;
        let showTab: number = -1;
        if (1 == ret.first_recharge.is_show) {
            showTab = EventoType.FirstRecharge;
        } else if (1 == ret.vip_cash_back.is_show) {
            showTab = EventoType.VIPCash;
        } else {
            showTab = EventoType.Promova;
        }

        // 显示toggle对象 1-2
        for (const child of this.view.toggleGroup.togContainer.node.children) {
            if (child.name == EventoType.FirstRecharge.toString()) {
                child.active = ret.first_recharge.is_show;
            }
            if (child.name == EventoType.VIPCash.toString()) {
                child.active = ret.vip_cash_back.is_show;
            }
        }
        this.onChecked(showTab.toString());
    }

    private onChecked(name: string) {
        AudioManager.instance.playButtonSound()
        for (const child of this.view.toggleGroup.togContainer.node.children) {
            if (child.name == name) {
                child.getComponent(Toggle).isChecked = true;
            }
        }
        for (const child of this.view.content.children) {
            child.active = name == child.name
            let sp = child.getChildByName("Image").getComponent(Sprite);
            switch (parseInt(child.name)) {
                case EventoType.FirstRecharge:
                    this._data?.first_recharge.image_url && SpriteManager.instance.loadRemoteImage(sp, this._data.first_recharge.image_url, true)
                    break;
                case EventoType.VIPCash:
                    this._data?.vip_cash_back.image_url && SpriteManager.instance.loadRemoteImage(sp, this._data.vip_cash_back.image_url, true)
                    break;
            }
        }
    }

    private onJump(name: string) {
        switch (name) {
            case "1":
                console.log("点击111")
                this._data?.first_recharge.customer_service && sys.openURL(this._data.first_recharge.customer_service);
                break;
            case "2":
                console.log("点击222")
                this._data?.vip_cash_back.customer_service && sys.openURL(this._data.vip_cash_back.customer_service);
                break;
            case "3":
                ModuleManager.instance.showModule(CommonName.MODULE.Promotion, 1, () => {
                    ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityList)
                })
                break;
            case "4":
                sys.openURL("market://details?id=" + GameConfig.packageName)
                break;
            case "5":
                if (GameConfig.FacebookGroupLink != "") {
                    sys.openURL(GameConfig.FacebookGroupLink)
                }
                break;
            default:
                break;
        }
    }

    onClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivityList)
    }
}