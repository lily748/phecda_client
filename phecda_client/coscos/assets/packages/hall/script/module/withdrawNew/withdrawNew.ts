import { _decorator, Node, instantiate, Label, EditBox,Prefab, Sprite,Color,find,Button,UITransform,math,v3,Vec2,Vec3,EventTouch, Widget} from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { WithDrawNewView } from './withdrawNew_view';
import { PostData } from '../../model/HttpDataModel';
import { HttpDataModel } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { withdrawAddAccount } from './withdrawAddAccount';
import { conmmon_http } from '../../../../../script/net/common_http';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { withdrawAddUPIAccount } from './withdrawAddUPIAccount';
import { withdrawal_dialog } from './withdrawal_dialog';
import { withdrawalConfirmAgain } from './withdrawalConfirmAgain'; 

const { ccclass, property } = _decorator;

const withdrawRange = `Withdrawal Amount (₹{0}-₹{1})`
const withdrawLimitStr = `VIP{0} Daily Limit:`
const withdrawLimiteErr = `Withdraw amount should be between {0} and {1}`

const withdrawNote = `<size=30>Note:</size><br/>. <color=#faa704>{0}% + {1}Rs</color> of the withdrawal amout will be deducted as <color=#faa704>bank
commission</color><br/>. Please double check the withdrawal information,if withdrawal failed<br/>or you have any other questions,please countact CS 24/7`

const rupeelTips = `For every withdrawal, {0}% cash back will be added to your account.`

@ccclass('WithdrawNew')
export class WithdrawNew extends Module<WithDrawNewView, null> {

    private defaultBankInfo:any = []
    private minWithdrawal:number = 200;
    private maxWithdrawal:number = 20000;

    private withdrawAddAccount: withdrawAddAccount
    private addUPIAccount:withdrawAddUPIAccount
    private withdrawalConfirmAgain:withdrawalConfirmAgain
    private preModuleName = ""
    private withdrawData:any = null
    private pay_methods:number = -1
    private startPos: Vec2 = new Vec2()
    private offset: Vec2 = new Vec2()
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/withdrawNew/public_withdrawNew";
        this.viewType = WithDrawNewView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needViewMask = true
        this.needAnim = false
    }

    private getValid() {
        return this && this.isValid && this.node && this.node.isValid && this.view && this.view.isValid && this.view.node && this.view.node.isValid
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnClose, this.onCloseBtnClick, this, false)
        Utility.instance.onButtonClick(this.view.btnRecord, this.onRecordBtnClick, this, false)       
        Utility.instance.onButtonClick(this.view.btnSubmit, this.onSubmitBtnClick, this, false)
        Utility.instance.onButtonClick(this.view.btnAddBank, this.onClickAddAccountBtn, this, false)       
        Utility.instance.onButtonClick(this.view.btnCancelAdd, this.onClickAddAccountColoseBtn, this, false)
        Utility.instance.onButtonClick(this.view.btnAddAccount, this.onAddBankBtnClick, this, false)        
        Utility.instance.onButtonClick(this.view.btnBank, this.onClickBtnBank, this, false)
        Utility.instance.onButtonClick(this.view.btnRupeeLink, this.onClickBtnRupeeLink, this, false)
        Utility.instance.onButtonClick(this.view.bindUPI, this.onClickBtnbindUPI, this, false)
        Utility.instance.onButtonClick(this.view.btnViewAccount, this.onClickBtnViewAccount, this, false)

        this.view.edit_withdraw.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onWithdrawEditingDidEnded,this)
        this.view.btnService.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.view.btnService.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.view.btnService.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)
        this.refreshData(intentData)
        
        let preModel = ModuleManager.instance.getModule(CommonName.MODULE.Hall)
        if(preModel){
            this.preModuleName = preModel.moduleName
            ModuleManager.instance.destroyModule(CommonName.MODULE.Hall)
        }
        if(!preModel){
            preModel = ModuleManager.instance.getModule(CommonName.MODULE.UserInfo)
            if(preModel){
                this.preModuleName = preModel.moduleName
                ModuleManager.instance.destroyModule(CommonName.MODULE.UserInfo)
            }
        }
        if(!preModel){
            preModel = ModuleManager.instance.getModule(CommonName.MODULE.Recharge)
            if(preModel){
                this.preModuleName = preModel.moduleName
                ModuleManager.instance.destroyModule(CommonName.MODULE.Recharge)
            }
        }         
    }

    /**
     * 关闭按钮
     */
    onCloseBtnClick() {
        AudioManager.instance.playCloseWindowSound()
        let showModule = this.preModuleName ? this.preModuleName:CommonName.MODULE.Hall
        ModuleManager.instance.showModule(showModule, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.WithdrawNew)
        })       
    }

    /**
     * 打开代收记录
     */
    onRecordBtnClick() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.showModule(CommonName.MODULE.WithdrawNewRecord, CommonName.MODULE.WithdrawNew, () => {
            ModuleManager.instance.hideModule(CommonName.MODULE.WithdrawNew)
        })
    }

    /**
     * 添加代收账号窗口
     */
    onClickAddAccountBtn(){
        let length = this.view.accountContent.children.length
        if(length == 0){
            this.showAddAccountFull()
        }
        else{
            if(this.pay_methods == -1) return
            if(this.pay_methods == 1){
                if(!this.withdrawData?.list || this.withdrawData?.list?.length == 0){                
                    ModuleManager.instance.toastLong("Please bind your bank card or RUPEELL wallet first")
                    return
                }
            }
            else if(this.pay_methods == 2){           
                if(this.withdrawData?.rupee_link_account?.account_address == ""){
                    ModuleManager.instance.toastLong("Please bind your bank card or RUPEELL wallet first")
                    return
                }
            }
            this._reqPayOutOrder(parseInt(this.view.edit_withdraw.string)*100,this.defaultBankInfo.id,true,this.pay_methods)
        }
    }

    onClickAddAccountColoseBtn(){
        let length = this.view.accountContent.children.length
        if(length == 0){
            this.onCloseBtnClick()
        }
        else{
            this.view.requiredBind.active = false
        }        
    }

    /**
     * 绑卡按钮
     */
    onAddBankBtnClick(){
        this.showAddAccountFull()
    }

    /**
     * 代付ended输入框
     * @param edit
     */
    private onWithdrawEditingDidEnded(edit: EditBox) {
        this.view.node_limit.active = false;
        let enterMoney = parseInt(edit.string);
        if(edit.string.length == 0 || isNaN(enterMoney) || enterMoney < this.minWithdrawal || enterMoney > this.maxWithdrawal){
            this.view.node_limit.active = true;
            let lbl_limit = find("lbl_limit",this.view.node_limit)
            if(!lbl_limit || !lbl_limit.isValid){
                return
            }
            let str = "Amount cannot empty."
            if(enterMoney < this.minWithdrawal || enterMoney > this.maxWithdrawal){                    
                str =Utility.instance.format(withdrawLimiteErr,`${this.minWithdrawal}`,Utility.instance.numThousandsFormat(`${this.maxWithdrawal}`))
            }
            lbl_limit.getComponent(Label).string = str
        }
    }

    /**
     * 提交代付
     */
    onSubmitBtnClick(){
        if(this.pay_methods == -1) return
        this.view.node_limit.active = false
        if(this.pay_methods == 1){
            if(!this.withdrawData?.list || this.withdrawData?.list?.length == 0){            
                ModuleManager.instance.toastLong("Please bind your bank card or RUPEELL wallet first")
                return
            }
        }
        else if(this.pay_methods == 2){           
            if(this.withdrawData?.rupee_link_account?.account_address == ""){
                ModuleManager.instance.toastLong("Please bind your bank card or RUPEELL wallet first")
                return
            }
        }
        let noteStr = parseInt(this.view.edit_withdraw.string)
        let len = this.view.edit_withdraw.string.length
        if(len == 0 || isNaN(noteStr) || noteStr < this.minWithdrawal || noteStr > this.maxWithdrawal){
            this.view.node_limit.active = true;
            let lbl_limit = find("lbl_limit",this.view.node_limit)
            if(lbl_limit && lbl_limit.isValid){
                let str = "Amount cannot empty."
                if(noteStr < this.minWithdrawal || noteStr > this.maxWithdrawal){                    
                    str =Utility.instance.format(withdrawLimiteErr,`${this.minWithdrawal}`,Utility.instance.numThousandsFormat(`${this.maxWithdrawal}`))
                }
                lbl_limit.getComponent(Label).string = str
            }
            return
        }

        this._reqPayOutOrder(parseInt(this.view.edit_withdraw.string)*100,this.defaultBankInfo.id,false,this.pay_methods)
    }

    /**
     * 初始化数据
     * @param data 
     */
    refreshData(data:any){
        if(!data) return
        if(!this.node?.isValid) return
        this.withdrawData = data
        if(data.money_info){ 
            this.view.lblCashBalance.string = Utility.instance.numThousandsFormat("₹"+data.money_info.cash_balance/100)            
            this.view.lblWithdrawable.string = Utility.instance.numThousandsFormat("₹"+data.money_info.withdrawable/100)            
            this.view.lbl_withdrawAmount.string = Utility.instance.numThousandsFormat("₹"+data.money_info.withdraw_amount/100)            
            this.view.lbl_remainWagers.string = Utility.instance.numThousandsFormat("₹"+data.money_info.remain_wagers/100)

            this.view.lbl_vipLimit.string = Utility.instance.format(withdrawLimitStr,""+data.money_info.vip_level) //vip等级
            this.view.lbl_dailyLimit.string = Utility.instance.numThousandsFormat("₹ "+data.money_info.daily_withdrawal_limit/100) //vip代付限制   
        }

        if(data.withdrawal_limit){
            this.minWithdrawal = data.withdrawal_limit[0]/100;
            this.maxWithdrawal = data.withdrawal_limit[1]/100;
            this.view.lbl_limitRange.string = Utility.instance.format(withdrawRange, ""+this.minWithdrawal,""+this.maxWithdrawal) //代付范围
        }
        this.view.requiredBind.active = false

        //账号     
        if(data.list?.length>0){           
            this.view.btnViewAccount.active = true
            this.showBankAccountList(data.list)
        }
        else{
            this.view.btnViewAccount.active = false
            // this.withdrawConfirmation(false)
        }

        if(data.limit_uid_account_number == -1){
            this.view.btnAddAccount.active = true
        }
        else{
            if(data.list?.length){
                this.view.btnAddAccount.active = data.list?.length < data.limit_uid_account_number
            }
            else{
                this.view.btnAddAccount.active = true
            }
        }
        
        //notes
        if(data.description){
            this.view.rtx_note.string = data.description
        }

        if(data.withdrawal_amounts){
            this.showWithdrawList(data.withdrawal_amounts)
        }

        if(data.pay_methods){
            this.showPayMethods(data.pay_methods)
        }

        if(data.rupee_link_account && typeof data.rupee_link_account.account_address == 'string'){
            this.view.lbl_upi.getComponent(Label).string = data.rupee_link_account.account_address
        }
        
        //新增.印度钱包返水
        this.view.textCashBackTips.getComponent(Label).string = `${data.rupee_link_rebate}% cashback`
        this.view.textRupeeTips.getComponent(Label).string = Utility.instance.format(rupeelTips, data.rupee_link_rebate)
        this.view.textRupeeTips.active = false
    }

    /**
     * 添加卡号
     * data
     * isDefault 是否默认
     */
    addBankAccount(data:any,isDefault?:boolean){
        let content = this.view.accountContent
        if(!content || !content.isValid){
            return;
        }
        let accountItem = instantiate(this.view.accountItem);
        accountItem.active = true
        accountItem.name = `${data.id}`
        accountItem.parent = content;

        let bg = accountItem.getComponent(Sprite)
        bg.color = new Color().fromHEX(isDefault ? "#28B6E3":"#182327")

        let strHEX = isDefault ? "#ffffff":"#85A3BB"
        let lbl_accNO = find("lbl_accNO",accountItem)
        if(lbl_accNO && lbl_accNO.isValid){
            lbl_accNO.getComponent(Label).color = new Color().fromHEX(strHEX) 
            lbl_accNO.getComponent(Label).string = "Acc No. "+ data.account_number
        }
        let lbl_IFSC = find("lbl_IFSC",accountItem)
        if(lbl_IFSC && lbl_IFSC.isValid){
            lbl_IFSC.getComponent(Label).color = new Color().fromHEX(strHEX) 
            lbl_IFSC.getComponent(Label).string = "IFSC: "+ data.ifsc
        }
        if(isDefault){
            this.defaultBankInfo = data
            let re = find("re",accountItem)
            if(re?.isValid) re.active = true
        }
        accountItem.on(Button.EventType.CLICK, ()=>{
            this.defaultBankInfo = data
            for(const child of content.children){                    
                let bg = child.getComponent(Sprite)
                bg.color = new Color().fromHEX(child.name==accountItem.name ? "#28B6E3":"#182327")

                let lbl_accNO = find("lbl_accNO",child);
                if(lbl_accNO?.isValid){
                    lbl_accNO.getComponent(Label).color = new Color().fromHEX(child.name==accountItem.name ? "#ffffff":"#85A3BB") 
                }
                let lbl_IFSC = find("lbl_IFSC",child);
                if(lbl_IFSC?.isValid){
                    lbl_IFSC.getComponent(Label).color = new Color().fromHEX(child.name==accountItem.name ? "#ffffff":"#85A3BB") 
                }
                let re = find("re",child)
                if(re?.isValid) {
                    re.active = child.name==accountItem.name
                }
            }
        }, this)
    }

    /**
     * 显示bank list
     * data
     */
    private showBankAccountList(data:any){
        if(!data) return
        let content = this.view.accountContent
        if(!content || !content.isValid){
            return;
        }
        let childnum = content.children.length
        if(childnum > 0){
            content.destroyAllChildren();
        }
        if(data.length == 0) return
        let defaultIndex = this.withdrawData ? this.withdrawData.last_withdraw_idx:0
        defaultIndex = defaultIndex > data.length-1 ? 0:defaultIndex
        for (let i = 0; i < data.length; i++) { 
            this.addBankAccount(data[i],i==defaultIndex)
        }
    }

    private showAddAccountFull(info?: any) {
        this.createNode("addWithdrawAccountFull", this.view.node, (node: Node) => {
            this.withdrawAddAccount = node.getComponent(withdrawAddAccount)
            this.withdrawAddAccount.setCallBack(()=>{
                let data = this.withdrawAddAccount.getAccountData()
                this.createNode("withdrawalConfirmAgain", this.view.node, (node: Node) => {
                    this.withdrawalConfirmAgain = node.getComponent(withdrawalConfirmAgain)
                    this.withdrawalConfirmAgain.setInfoData(data,()=>{                              
                        this._reqAddWithdrawalAccount(data.account_holder_name,data.account_number,data.ifsc,data.phone,data.email)
                    })
                })
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
     * 绑卡成功
     * @param info 
     */
    private addBankAccountSuccess(info:any){
        if(!this.node?.isValid) return

        this.view.btnViewAccount.active = true

        this.withdrawData?.list?.push(info)
        this.addBankAccount(info,true)
        this.view.requiredBind.active = false;
        if(this.withdrawAddAccount.node.destroy){
            this.withdrawAddAccount.node.destroy()
        }
        if(this.withdrawalConfirmAgain.node.destroy){
            this.withdrawalConfirmAgain.node.destroy()
        }

        if(this.withdrawData.limit_uid_account_number == -1){
            this.view.btnAddAccount.active = true
        }
        else{
            if(this.withdrawData.list?.length){
                this.view.btnAddAccount.active = this.withdrawData.list?.length < this.withdrawData.limit_uid_account_number
            }
            else{
                this.view.btnAddAccount.active = true
            }
        }

        //改变默认状态
        let defaultName = ""+this.defaultBankInfo.id
        let content = this.view.accountContent
        for(const child of content.children){                    
            let bg = child.getComponent(Sprite)
            bg.color = new Color().fromHEX(child.name==defaultName ? "#28B6E3":"#182327")

            let lbl_accNO = find("lbl_accNO",child);
            if(lbl_accNO && lbl_accNO.isValid){
                lbl_accNO.getComponent(Label).color = new Color().fromHEX(child.name==defaultName ? "#ffffff":"#85A3BB") 
            }
            let lbl_IFSC = find("lbl_IFSC",child);
            if(lbl_IFSC && lbl_IFSC.isValid){
                lbl_IFSC.getComponent(Label).color = new Color().fromHEX(child.name==defaultName ? "#ffffff":"#85A3BB") 
            }
        }
    }

    /**
     * 显示代付列表
     * @param data 
     */
    showWithdrawList(data){
        if(this.view.withdrawListContent.children.length > 0){
            this.view.withdrawListContent.destroyAllChildren()
        }
    
        let selectItem:Node = null
        let color = ["#1c1c1c","#ffffff"]
        for(let i = 0;i < data.length;++i){
            if(!data[i]) continue    
            let item = instantiate(this.view.withdrawListItem)
            item.active = true;
            item.name = `${data[i]/100}`
            item.parent = this.view.withdrawListContent

            let lbl_title = find("lbl_title",item)
            if(i == 0){
                selectItem = item
                this.view.edit_withdraw.string = ""+data[i]/100
                item.getComponent(Sprite).spriteFrame = this.view.spriteFrameCoin[0]

                lbl_title.getComponent(Label).color = new Color().fromHEX(color[0])
            }         
            
            lbl_title.getComponent(Label).string = Utility.instance.numThousandsFormat("₹"+data[i]/100)
            item.on(Button.EventType.CLICK, ()=>{
                if(item.name == selectItem.name) return
                item.getComponent(Sprite).spriteFrame = this.view.spriteFrameCoin[0]
                selectItem.getComponent(Sprite).spriteFrame = this.view.spriteFrameCoin[1]
                this.view.edit_withdraw.string = ""+data[i]/100

                let lbl_title = find("lbl_title",item)
                lbl_title.getComponent(Label).color = new Color().fromHEX(color[0])
                lbl_title = find("lbl_title",selectItem)
                lbl_title.getComponent(Label).color = new Color().fromHEX(color[1])
                selectItem = item;
            }, this)
        }
    }

    /**
     * 点击客服
     */
    private onClickService(){
        ModuleManager.instance.showModule(CommonName.MODULE.CustomerSupport)
    }

    onDestroy() {
        // EventManager.instance.off(CommonName.EVENT.Respon_Refresh_UserInfo, this.refreshUserCash, this)
    }

    private withdrawConfirmation(conf:boolean){
        let lbl_title = find("center/lbl_title",this.view.requiredBind)
        lbl_title.getComponent(UITransform).anchorX = conf ? 0.5:0
        lbl_title.position = v3(conf ? 0:-295,lbl_title.position.y)
        lbl_title.getComponent(Label).string = conf ? "Notice" : "Bank Account Required"

        let lbl_okTitle = find("center/btnAdd/lbl_title",this.view.requiredBind)
        lbl_okTitle.getComponent(Label).string = conf ? "Okay" : "Add Bank Card"

        let lbl_introduce = find("center/lbl_introduce",this.view.requiredBind)
        lbl_introduce.getComponent(Label).string = conf ? "Proceed with the withdrawal? Confirmation will restrict withdrawals to this account only.":"To be able to withdraw, please, add a bank account first."

        this.view.requiredBind.active = true
    }

    private onClickBtnBank(){
        if(this.withdrawData?.list?.length == 0 || !this.withdrawData.list){
            this.showAddAccountFull()
        }
        this.view.chooseAccount.active = true
        this.view.bindUPI.active = !this.view.chooseAccount.active
        this.view.ch_on.position = this.view.btnBank.position
        this.pay_methods = parseInt(this.view.btnBank.name)
        this.view.textRupeeTips.active = false
    }

    private onClickBtnRupeeLink(){
        if(this.withdrawData?.rupee_link_account?.account_address == ""){
            this.showBindUPI()
        }
        this.view.bindUPI.active = true
        this.pay_methods = parseInt(this.view.btnRupeeLink.name)
        this.view.chooseAccount.active = !this.view.bindUPI.active
        this.view.ch_on.position = this.view.btnRupeeLink.position    
        this.view.textRupeeTips.active = true
    }

    private onClickBtnbindUPI(){
        this.showBindUPI()
    }

    private showBindUPI(){
        this.createNode("addUPIAccount", this.view.node, (node: Node) => {
            this.addUPIAccount = node.getComponent(withdrawAddUPIAccount)
            this.addUPIAccount.setRuleData(this.withdrawData.rupee_link_help)
            this.addUPIAccount.setCallBack(()=>{
                let data = this.addUPIAccount.getAccountData()
                this._reqAddRupeeLinkAccount(data.address)
            })
        }) 
    }

    private showPayMethods(data:any){
        if(!data) return
        this.view.btnBank.getComponent(Button).interactable = false
        this.view.btnRupeeLink.getComponent(Button).interactable = false
        for(let i=0;i<data.length;i++){
            if(data[i].id == 1){
                this.pay_methods = data[i].id               
                this.view.btnBank.active = true
                this.view.btnBank.name = `${data[i].id}`
                this.view.btnBank.getComponent(Button).interactable = true             
                SpriteDataModel.SetSprite(this.view.btnBank.getComponent(Sprite),data[i].icon_url)
                SpriteDataModel.SetSprite(this.view.ch_on.getComponent(Sprite),data[i].icon_selected_url)
            }
            else if(data[i].id == 2){
                this.view.btnRupeeLink.active = true
                this.view.btnRupeeLink.name = `${data[i].id}`
                this.view.btnRupeeLink.getComponent(Button).interactable = true
                SpriteDataModel.SetSprite(this.view.btnRupeeLink.getComponent(Sprite),data[i].icon_url)
                SpriteDataModel.SetSprite(this.view.ch_on.getComponent(Sprite),data[i].icon_selected_url)
            }
        }
    }

    private updatepAddRupeeLinkAccountInfo(data:any){
        if(!data) return
        if(!this.view?.isValid) return

        if(this.addUPIAccount.node.destroy){
            this.addUPIAccount.node.destroy()
        }
        this.withdrawData.rupee_link_account = data.rupee_link_account
        this.view.lbl_upi.getComponent(Label).string = data.rupee_link_account.account_address
    }

    private showResultDialog(isSuccess:boolean,resultStr:string = ""){
        if(!this.getValid()) return
        this.createNode("withdrawal_dialog", this.view.node, (node: Node) => {
            let dialog = node.getComponent(withdrawal_dialog)
            dialog.setShowRule(isSuccess,resultStr)
        }) 
    }

    private onClickBtnViewAccount(){
        if(!this.withdrawData?.list) return
        if(this.withdrawData.list.length == 0) return
        this.createNode("withdrawalShowAccount", this.view.node, (node: Node) => {
            let showAccount:any = node.getComponent("withdrawalShowAccount")
            showAccount.setInfoData( this.defaultBankInfo)
        })
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

    private onTouchStart(event: EventTouch) {
        this.startPos = event.getUILocation();
        this.offset = this.startPos.clone().subtract(new Vec2(this.view.btnService.position.x, this.view.btnService.position.y));
    }

    private onTouchMove(event: EventTouch) {
        let currentPos = event.getUILocation();
        let newPosition = currentPos.clone().subtract(this.offset);
        this.view.btnService.position = new Vec3(newPosition.x, newPosition.y)
    }

    private onTouchEnd(event: EventTouch) {
        let currentPos = event.getUILocation();
        let dis = math.Vec2.distance(currentPos, this.startPos);
        if (dis < 40) {
            this.onClickService();
        }
    }

    /**
     * 绑定提现银行卡返回
     * @param msg 
     */
    private _rspAddWithdrawalAccount(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            //绑卡成功,刷新列表数据
            this.addBankAccountSuccess(msg.data?.withdrawal_account)         
        }
    }

    /**
     * 请求提现
     * @param amount 提现金额（单位分 即放大百倍）
     * @param withdrawal_account_id 提现银行卡ID
     */
    private _reqPayOutOrder(amount:number,withdrawal_account_id:number,allow_ban:boolean,pay_method_id:number){
        ModuleManager.instance.showNetPrompt();
        let params = {}
        if(pay_method_id == 1){
            params = {
                amount: amount,
                withdrawal_account_id: withdrawal_account_id,
                allow_ban: allow_ban ? 1:2,
                pay_method_id:pay_method_id
            }
        }
        else{
            params = {
                amount: amount,
                allow_ban: allow_ban ? 1:2,
                pay_method_id:pay_method_id
            }
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.createPayOutOrder,
            Params: params,
            Callback: this._rspPayOutOrder.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * withdraw返回
     * @param msg 
     */
    private _rspPayOutOrder(msg: any){
        ModuleManager.instance.hideNetPrompt()
        if (msg) {
            if(msg.code == 0){
                if(this.withdrawData?.list){
                    msg.data.list = this.withdrawData.list
                }
                this.refreshData(msg.data)
                this.showResultDialog(true)
                conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
            }
            else if(msg.code == 116){
                this.withdrawConfirmation(true)
            }
            else if(msg.code == 118){
                let tips = "No deposit can not be withdrawn,\nDo you want to recharge?"
                ModuleManager.instance.showDialog_BackToLifeConfirm("", tips, "Cancel", "Okay", () => {
                    ModuleManager.instance.showModule(CommonName.MODULE.Recharge, CommonName.MODULE.WithdrawNew, () => {
                        ModuleManager.instance.destroyModule(CommonName.MODULE.WithdrawNew)
                    })
                }, null)
            }
            else{
                this.showResultDialog(false,msg.message)
            }
        }
    }

   private _reqAddRupeeLinkAccount(address){
       ModuleManager.instance.showNetPrompt()
       let params = {
            account_address:address,
       }
       let info: PostData = {
           Target: this,
           Url: Http_Define.addRupeeLinkAccount,
           Params: params,
           Callback: this._rspAddRupeeLinkAccount.bind(this),
           ForceRequest: true,
           FailToast: true,
           FailCallback: true,
       }
       HttpDataModel.Post(info);
   }

   private _rspAddRupeeLinkAccount(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            this.updatepAddRupeeLinkAccountInfo(msg.data)         
        }
    }    
}