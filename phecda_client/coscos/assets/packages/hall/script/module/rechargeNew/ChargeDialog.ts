
import { _decorator, Component, Node } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { ChargeDialog_View } from './ChargeDialog_View';
const { ccclass, property } = _decorator;
 
@ccclass('ChargeDialog')
export class ChargeDialog extends Module<ChargeDialog_View,null>  {
    _callback: Function = null;

    constructor() {
        super();
        this.bundleName = "resources";
        this.layer = ViewLayer.Max;
        this.windowPrefabResPath = "prefabs/rechargeNew/ChargeDialog";
        this.viewType = ChargeDialog_View;
        this.needViewMask = true;
        this.needAnim = true;
    }

    onInit(){
        Utility.instance.onButtonClick(this.view.btnCanCel, this.onCancelClick, this);
        Utility.instance.onButtonClick(this.view.btnSure, this.onSureClick, this);
        Utility.instance.onButtonClick(this.view.btnClose, this.onCloseClick, this);
    }

    onCancelClick(){
        ModuleManager.instance.destroyModule(CommonName.MODULE.ChargeDialog);
    }

    onSureClick(){
        if(this._callback != null){
            this._callback();
        }
        this.scheduleOnce(()=>{
            this._callback = null;
            ModuleManager.instance.destroyModule(CommonName.MODULE.ChargeDialog);
        })
        
    }

    onCloseClick(){
        ModuleManager.instance.destroyModule(CommonName.MODULE.ChargeDialog);
    }

    onShow(callback){
        this._callback = callback;
    }

}

