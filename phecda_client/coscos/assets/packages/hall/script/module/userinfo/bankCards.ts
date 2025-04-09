
import { _decorator,Label, find,Node,instantiate,Prefab} from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { BankCards_View } from './bankCards_View';
import { UserDataModel } from '../../model/UserDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import HttpUtil from '../../../../../script/framework/net/http_util';
import { withdrawAddAccount } from '../withdrawNew/withdrawAddAccount';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { PostData } from '../../model/HttpDataModel';
import { HttpDataModel } from '../../model/HttpDataModel';

const { ccclass, property } = _decorator;

@ccclass('BankCards')
export class BankCards extends Module<BankCards_View,null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/account/bankCards";
        this.viewType = BankCards_View;
        this.modelType = null;
        this.layer = ViewLayer.Mid;
        this.needViewMask = true;
        this.needAnim = true;
    }

    private withdrawAddAccount: withdrawAddAccount

    onInit(){
        this.reqWithdrawalAccountList()
        AudioManager.instance.playOpenWindowSound()
        Utility.instance.onButtonClick(this.view.btnClose, this.onCloseClick, this)
        Utility.instance.onButtonClick(this.view.addCards, this.onaddCardsClick, this)
        
    }

    /**
     * 添加卡号
     * data
     */
    addBankAccount(data:any){
        if(!data) return
        if(!this.node?.isValid) return
        let content = this.view.cardsContent
        if(!content || !content.isValid){
            return;
        }
        let itemcard = instantiate(this.view.itemcard);
        itemcard.active = true
        itemcard.parent = content;

        let processString = (str:string) =>{
            if (data.account_number.length > 4) {
                return str.slice(-4); 
            } else {
                return str;
            }
        }

        let lbl_ifsc = find("card_layout/lbl_ifsc",itemcard)
        if(lbl_ifsc && lbl_ifsc.isValid){
            lbl_ifsc.getComponent(Label).string = ""+data.ifsc
        }
        let lbl_card = find("card_layout/lbl_card",itemcard)
        if(lbl_card && lbl_card.isValid){
            lbl_card.getComponent(Label).string = "No.***"+ processString(data.account_number)
        }
        let lbl_time = find("lbl_time",itemcard)
        if(lbl_time && lbl_time.isValid){
            lbl_time.getComponent(Label).string = Utility.instance.formatTime(data.last_updated_at)
        }
    }

    /**
     * init view
     * @param data 
     */
    initView(data:any){
        if(!data) return
        if(!this.node?.isValid) return
        this.view.cardsContent.destroyAllChildren()
        for (let i = 0; i < data.length; i++) { 
            this.addBankAccount(data[i])
        }
    }

    /**
     * 关闭界面
     */
    onCloseClick(){
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.showModule(CommonName.MODULE.UserInfo, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.BankCards)
        })
    }

    /**
     * 添加卡
     */
    onaddCardsClick(){
        this.showAddAccountFull()
    }

    private showAddAccountFull(info?: any) {
        this.createNode("addWithdrawAccountFull", this.view.node, (node: Node) => {
            this.withdrawAddAccount = node.getComponent(withdrawAddAccount)
            this.withdrawAddAccount.setCallBack(()=>{
                let data = this.withdrawAddAccount.getAccountData()
                this._reqAddWithdrawalAccount(data.account_holder_name,data.account_number,data.ifsc,data.phone,data.email)
            })
        })        
    }

    private createNode(name: string, parent: Node, callback: (node: Node) => void) {
        ResourceManager.loadRes("prefabs/withdrawNew/" + name, Prefab, (err, prefab: Prefab) => {
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
     * 请求提现数据
     * 
     */
    public reqWithdrawalAccountList() {
        let user = UserDataModel.GetCurrentUser();
        if (!user) return;
        ModuleManager.instance.showNetPrompt();
        let msg = {
            baseUrl: Http_Define.getWithdrawalAccountList,
            params: {
                uid: user.uid,
            }
        }
        HttpUtil.http_get(msg, this._rspWithdrawalAccountList.bind(this), () => { console.log("获取提现数据失败") });
    }

    /**
     * 提现数据返回
     * @param msg 
     */
    private _rspWithdrawalAccountList(msg: any) {
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            if(msg.data && msg.data.list){
                this.initView(msg.data.list)
            }
        }
    }

    /**
     * 
     * @param account_holder_name 账户持有人姓名
     * @param account_number 账户号码
     * @param ifsc 金融系统代码IFSC
     * @param phone 手机号
     * @param email 邮件
     */
    //请求绑定提现银行卡
    private _reqAddWithdrawalAccount(account_holder_name:string,account_number:string,ifsc:string,phone:string="",email:string=""){
        ModuleManager.instance.showNetPrompt();
        let params = {
            account_holder_name: account_holder_name,
            account_number: account_number,
            ifsc: ifsc,
            phone: phone,
            email: email,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.addWithdrawalAccount,
            Params: params,
            Callback: this._rspAddWithdrawalAccount.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * 绑定提现银行卡返回
     * @param msg 
     */
    private _rspAddWithdrawalAccount(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            //绑卡成功,刷新列表数据 
            if(this.node?.isValid){
                if(this.withdrawAddAccount.node.destroy){
                    this.withdrawAddAccount.node.destroy()
                }
            }
            this.addBankAccount(msg.data?.withdrawal_account)   
        }
    }
}

