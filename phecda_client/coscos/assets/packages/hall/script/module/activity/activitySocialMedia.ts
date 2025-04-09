import { sys, _decorator,Sprite} from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import ActivitySocialMediaView from "./activitySocialMedia_view";
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { HallModel } from '../../model/HallModel';
import EventManager from '../../../../../script/manager/event_manager';

const { ccclass, property } = _decorator;

@ccclass('ActivitySocialMedia')
export default class ActivitySocialMedia extends Module<ActivitySocialMediaView, null>{
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/activitySocialMedia";
        this.viewType = ActivitySocialMediaView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }
    dataInfo:any = null

    onInit() {
        Utility.instance.onButtonClick(this.view.btnClose, this.onClickClose, this, false)
        Utility.instance.onButtonClick(this.view.btnTelegram, this.onClickTelegram, this, false)
        Utility.instance.onButtonClick(this.view.btnWhatsApp, this.onClickWhatsApp, this, false)        
        
        this._reqSocialMediaActivityCfg()
    }

    private onClickClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.ActivitySocialMedia)
    }

    private onClickTelegram() {
        AudioManager.instance.playCloseWindowSound()
        if(!this.dataInfo) return
        for (let info of this.dataInfo){
            if(info.name == "Telegram"){
                sys.openURL(info.link)
                break
            }
        }
    }

    private onClickWhatsApp() {
        AudioManager.instance.playCloseWindowSound()
        if(!this.dataInfo) return
        for (let info of this.dataInfo){
            if(info.name == "Whatsapp"){
                sys.openURL(info.link)
                break
            }
        }        
    }

    onDestroy() {
        let time=Utility.instance.getTimeStr(new Date());
        HallModel.SetLocalActivityTime("ActivitySocialMedia", time);
        EventManager.instance.dispatch(CommonName.EVENT.UpdateActivityPopUp);
    }

    /**
     * 初始化数据
     * @param data 
     */
    private initData(data:any){        
        if(!data) return
        if(!this.node?.isValid) return

        this.dataInfo = data.list
        if(typeof data.background_url == 'string' && data.background_url.trim() != ""){
            SpriteDataModel.SetSprite(this.view.sprBg.getComponent(Sprite), data.background_url)
        }        
    }

    /**
     * 获取社交媒体配置
     */
    private _reqSocialMediaActivityCfg(){
        let info: PostData = {
            Target: this,
            Url: Http_Define.getSocialMediaActivityCfg,
            Params: {},
            Callback: this._rspSocialMediaActivityCfg.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt:true
        }
        HttpDataModel.Post(info);
    }

    /**
     * 社交媒体配置返回
     * @param msg 
     */
    private _rspSocialMediaActivityCfg(msg: any){
        if (msg && msg.code == 0) {
            if(msg.data){
                this.initData(msg.data)
            }
        }
    }
}