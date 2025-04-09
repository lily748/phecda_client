
import { _decorator, Component, Node,Prefab,instantiate } from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { ReminderView } from './reminder_view';
import CommonName from '../../model/CommonName';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { conmmon_http } from '../../../../../script/net/common_http';
import { HallModel } from '../../model/HallModel';

const { ccclass, property } = _decorator;


 
@ccclass('Reminder')
export class Reminder extends Module<ReminderView, null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/account/reminder";
        this.viewType = ReminderView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }  

    onLoad() {

    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnClose, this._clickBack, this);
        Utility.instance.onButtonClick(this.view.btnLogout, this._clickLogout, this);
        Utility.instance.onButtonClick(this.view.btnSet, this._clickSet, this);
    }

    private _clickBack(){
        ModuleManager.instance.destroyModule(CommonName.MODULE.Reminder);
    }

    private _clickLogout(){
        conmmon_http.reqLogOut(this, conmmon_http.rspLogOut.bind(this));
        HallModel.SetLocalGuestFlag("guestLogOut", "exit");
    }

    private _clickSet(){
        this.createNode("recharge/bindPhone", this.view.node, (bindNode: Node) => { });
    }

     /**
     * 创建节点
     * @param name 
     * @param parent 
     * @param callback 
     */
     private createNode(name: string, parent: Node, callback: (node: Node) => void) {
        ResourceManager.loadRes("prefabs/" + name, Prefab, (err, prefab: Prefab) => {
            if (!err) {
                if (!this || !this.isValid || !this.node || !this.node.isValid) {
                    return
                }
                let preNode: Node = instantiate(prefab)
                preNode.setParent(parent)
                callback && callback(preNode)
            }
        })
    }
}


