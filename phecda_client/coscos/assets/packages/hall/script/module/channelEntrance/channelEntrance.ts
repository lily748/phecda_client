
import { _decorator, Component, instantiate, Label, Node, Sprite, sys } from 'cc';
import { ChannelEntranceView } from './channelEntrance_view';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { SpriteDataModel } from '../../model/SpriteDataModel';
const { ccclass, property } = _decorator;

@ccclass('ChannelEntrance')
export class ChannelEntrance extends Module<ChannelEntranceView, null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/channelEntrance/public_channelEntrance";
        this.viewType = ChannelEntranceView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit(arg0: any): void {
        Utility.instance.onButtonClick(this.view.close, this._clickClose, this);
        this._reqGetChannelsLink();
    }

    private _reqGetChannelsLink() {
        ModuleManager.instance.showNetPrompt();
        let param = {}
        let info: PostData = {
            Target: this,
            Url: Http_Define.getChannelsLink,
            Params: param,
            Callback:this._rspGetChannelsLink.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspGetChannelsLink(msg) {
        if (!this.node?.isValid) return;
        let iconIndes = ["Telegram","Whatsapp","Instagram","Twitter","Youtube","Facebook","Moj","Sharechat"];
        if (msg && msg.code == 0) {
            msg.data.list.sort((a,b)=>Number(a.id)-Number(b.id));
            for (let i = 0; i < msg.data.list.length; i++) {
                let info = msg.data.list[i];
                let item:Node = null;
                if (i==0) item = this.view.item;
                else {
                    item = instantiate(this.view.item);
                    item.parent = this.view.item.parent;
                }
                
                let iconIndex = iconIndes.findIndex(item=>(item==info.name));
                item.active = true;
                item.getChildByName("sp").getComponent(Sprite).spriteFrame = this.view.icons[iconIndex];
                item.getChildByName("title").getComponent(Label).string = info.name;
                Utility.instance.onButtonClick(item, ()=>{ 
                    sys.openURL(info.link);
                }, this);
            }
        }
    }

    _clickClose() {
        ModuleManager.instance.showModule(CommonName.MODULE.UserInfo, null,  () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.ChannelEntrance);
        })
    }


  
}
