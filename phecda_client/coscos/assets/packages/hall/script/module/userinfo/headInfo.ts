
import { _decorator, Component, Node ,instantiate,Sprite,Button, find} from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { HeadInfoView } from './headInfo_view';
import CommonName from '../../model/CommonName';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { UserDataModel } from '../../model/UserDataModel';
import { HallModel } from '../../model/HallModel';
import { AccountInfo } from './accountInfo';
import { conmmon_http } from '../../../../../script/net/common_http';
const { ccclass, property } = _decorator;


@ccclass('HeadInfo')
export class HeadInfo extends Module<HeadInfoView, null> {

    private listHead = [];
    private head_id = 0;
    
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/account/headInfo";
        this.viewType = HeadInfoView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onLoad() {

    }

    onShow(data: any) {
      
    }

    onInit() {
        this.view.headList.InitializeChild = { target: this, eventHandler: this.refreshHeadItem };
        Utility.instance.onButtonClick(this.view.btnBack, this._clickBack, this);
        this._initInfo();
    }

    private _initInfo() {
        let user = UserDataModel.GetCurrentUser()
        if (user) {
            this.head_id = parseInt(user.avatar_url);
            if (isNaN(this.head_id)) {
                this.head_id = 0;
            }
        }
        for (let i = 1; i < 22; i++) {
            this.listHead.push(i);
        }
        this.updateHeadList(this.listHead);
    }

    //更新head列表
    async updateHeadList(list: Array<number>) {
        if (!this.view) return;
        this.view.headList.data = list;
        await this.view.headList.loadSlots(list.length);
        this?.view.headList?.scrollView.scrollToTop(0);
    }

    //刷新Item
    private refreshHeadItem(idx: string, item: Node) {
        this.setHeadItem(idx, item);
    }

    private setHeadItem(idx: string, item: Node) {
        if (!this.listHead[idx]) return;
        let sp = item.getChildByName("sp").getComponent(Sprite);
        SpriteDataModel.SetHead(sp, this.listHead[idx]);
        let btn = item.getChildByName("sp").getComponent(Button).node;
        Utility.instance.onButtonClick(btn, () => { this._clickHead(item, (parseInt(idx) + 1),true) }, this);
        if (this.listHead[idx] == this.head_id) {
            this._clickHead(item, this.head_id);
        }
    }

    private _clickHead(item: Node, id: number,isClick=false) {
        this._initHeadBg();
        let sp = item.getChildByName("sp_bg");
        sp.active=true;
        this.head_id=id;

        if (isClick) {
            this.scheduleOnce(() => {
                this._reqUpdateUserInfo("avatar", this.head_id.toString());
                this._clickBack();
                ModuleManager.instance.toastLong("Successful Modified");
            }, 0.1);
        }
    }

    private _initHeadBg(){
        let item = this.view.headList.scrollView.content.children;
        for (let i = 0; i < item.length; i++) {
            let one = item[i].children[0];
            if (!one) continue;
            let sp = one.getChildByName("sp_bg");
            sp.active = false;
        }
    }

    /**
     * 修改玩家信息
     * @param info_key 
     * @param info_value 
     */
    private _reqUpdateUserInfo(info_key:string,info_value:string){
        let params = {
            info_key: info_key,
            info_value: info_value,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.updateUserInfo,
            Params: params,
            Callback: this._rspUpdateUserInfo.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * 修改玩家信息返回
     * @param msg 
     */
    private _rspUpdateUserInfo(msg: any){
        if (msg && msg.code == 0) {
            conmmon_http.reqGetUserInfo(this, conmmon_http.rspUserInfo.bind(this));
        }
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }

    private _clickBack(){
        let user = UserDataModel.GetCurrentUser()
        if (user) {
            user.avatar_url = this.head_id.toString();
        }
        let accountInfo = this.node.parent.getChildByName("AccountInfo")?.getComponent(AccountInfo);
        if (accountInfo) {
            accountInfo.updateHead();
        }
        ModuleManager.instance.destroyModule(CommonName.MODULE.HeadInfo);
    }
}


