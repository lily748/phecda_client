import { instantiate, _decorator, ScrollView,game } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
const { ccclass, property } = _decorator;

import PromotionView from "./promotion_view";
import promotionActivityItem from './promotionActivityItem';
import AudioManager from '../../../../../script/manager/audio_manager';
import CommonName from '../../model/CommonName';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { PostData } from '../../model/HttpDataModel';
import { HttpDataModel } from '../../model/HttpDataModel';
import { HallModel } from '../../model/HallModel';

@ccclass('Promotion')
export default class Promotion extends Module<PromotionView, null>{
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/promotion/public_promotion";
        this.viewType = PromotionView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {        
        this.view.hallTemplate.setSelectToggle(CommonName.MODULE.Promotion);

        let scrollView = this?.view?.promoPanel?.getComponent(ScrollView);
        if(scrollView?.isValid){
            scrollView.node.on(ScrollView.EventType.SCROLL_BEGAN, () => game.frameRate = 60, this)
            scrollView.node.on(ScrollView.EventType.SCROLL_ENDED, () => game.frameRate = 45, this)
        }
        HallModel.promotionAcitvityList=JSON.parse(HallModel.GetLocalAcitvityData())
        this.showPromoDetail(HallModel.promotionAcitvityList,true)
        this.reqActivityList()
    }

    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)
    }

    onDestroy() {
        this.unscheduleAllCallbacks()
    }

    private onClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
    }

    /**
     * 显示promo详情
     * @param data 
     * @param isCache 
     * @returns 
     */
    private showPromoDetail(data:any,isCache:boolean = false){
        if(!data) return
        if(!this.node?.isValid) return
        let content = this.view?.promoPanel?.getComponent(ScrollView).content;
        if(content?.children.length > 0) {
            content.removeAllChildren()
        }   
        for (let i = 0; i < data.length; i++) {                  
            let subbrand = instantiate(this.view.promoItem);
            let promotionItem = subbrand.getComponent(promotionActivityItem)
            promotionItem.show(data[i],this.view.node,isCache)
            subbrand.active = true
            subbrand.parent = content;
        }
    }

    onDisable() {
        game.frameRate = 45
    }

    /**
     * 请求 ActivityList
     * @returns 
     */
    private reqActivityList(){
        let info: PostData = {
            Target: this,
            Url: Http_Define.getActivityList,
            Params: {},
            Callback: this._rspActivityList.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: HallModel.promotionAcitvityList ? true:false,
        }
        HttpDataModel.Post(info);
    }

    /**
     * ActivityList 回调
     * @param msg 
     */
    private _rspActivityList(msg: any) {
        if (msg && msg.code == 0) {            
            if(!msg.data) return
            if(!msg.data.list) return                       
            HallModel.SetLocalAcitvityData(msg.data.list);
            this.showPromoDetail(msg.data.list);
        }
    }
}