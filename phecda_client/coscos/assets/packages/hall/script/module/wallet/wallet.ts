
import { _decorator, Node, Prefab, sys,instantiate} from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
import { GameConfig } from '../../../../../script/com/game_config';
import { conmmon_http } from '../../../../../script/net/common_http';
import { bindingPhone } from '../recharge/bindingPhone';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { WalletView } from './wallet_view';
const { ccclass, property } = _decorator;

@ccclass('Wallet')
export class Wallet extends Module<WalletView, null> {

    private bindPhone:bindingPhone = null

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/wallet/public_wallet";
        this.viewType = WalletView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needViewMask = true
        this.needAnim = false
    }


    onInit() {
        Utility.instance.onButtonClick(this.view.btnClose, this.onClickClose, this, false)
        Utility.instance.onButtonClick(this.view.btnService, this.onClickService, this, false)
        Utility.instance.onButtonClick(this.view.btnRecord, this.onClickRecord, this, false)

        Utility.instance.onButtonClick(this.view.btnWithdraw, this.onClickWithdraw, this, false)
        Utility.instance.onButtonClick(this.view.btnDeposit, this.onClickDeposit, this, false)

        EventManager.instance["on"](CommonName.EVENT.Respon_Refresh_UserInfo, this.updateBalance, this)
    }


    onShow() {
        conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
    }

    /**
     * 更新用户money
     */
    updateBalance(){
        if (!this.isValid) {
            return
        }
        let user = UserDataModel.GetCurrentUser()
        if (!user) {
            return
        }
        let cash = Utility.instance.numThousandsFormat(UserDataModel.GetCashAmount().toString())
        this.view.lblMoney.string = "₹ "+cash
    }

     /**
     * 绑定手机
     */
     bindingPhone(){
        if(this.bindPhone == null || !this.bindPhone.isValid){
            this.createNode("recharge/bindPhone", this.view.node, (bindNode: Node) => {
                this.bindPhone = bindNode.getComponent(bindingPhone)
                this.bindPhone.setCallBack(()=>{
                    this.bindPhone = null
                },()=>{
                    //绑定成功
                    conmmon_http.reqWithdrawalAccountList() 
                    this.bindPhone = null
                })
            }) 
        }
        else{
            this.bindPhone.node.active = true  
        }
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

    /**
     * 点击客服
     */
    onClickService(){
        ModuleManager.instance.showModule(CommonName.MODULE.CustomerSupport);
    }

    /**
     * 点击钱包记录
     */
    onClickRecord(){

    }

    /**
     * 点击代付
     */
    onClickWithdraw(){
        let user = UserDataModel.GetCurrentUser()
        if (!user || !this.view) return
        if(user.phone.trim() == ""){ //没绑手机号
            this.bindingPhone()
        }   
        else{
            conmmon_http.reqWithdrawalAccountList() 
        }        
    }

    /**
     * 点击代收
     */
    onClickDeposit(){
        ModuleManager.instance.showModule(CommonName.MODULE.Recharge, CommonName.MODULE.Wallet, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.Wallet)
        })  
    }

    /**
     * 点击关闭按钮
     */
    onClickClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.Wallet)
    }

    onDestroy() {
        EventManager.instance["off"](CommonName.EVENT.Respon_Refresh_UserInfo, this.updateBalance, this)
    }

}