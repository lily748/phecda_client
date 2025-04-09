import { instantiate, Label, _decorator,sys, Node,Button,find,EditBox, Sprite,Color,Prefab,v3, UITransform, math,Vec2,Vec3,EventTouch, UIOpacity, Toggle, error} from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import Recharge_View from "./recharge_view";
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { HallModel } from '../../model/HallModel';
import { UserDataModel } from '../../model/UserDataModel';
import { PostData } from '../../model/HttpDataModel';
import { HttpDataModel } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import EventManager from '../../../../../script/manager/event_manager';
import { conmmon_http } from '../../../../../script/net/common_http';
import { rechargeWarning } from './rechargeWarning';
import { bindingPhone } from './bindingPhone';
import { rechargeQRcodeRules } from './rechargeQRcodeRules';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import LoaclStorage from '../../../../../script/manager/local_storage';

const { ccclass, property } = _decorator;

const PayMethod: string = "PayMethod"

const enum BtnAmountType {
    btnReduce = "btnReduce",
    btnAdd = "btnAdd",
}

const enum ePayMethod {
    OnlinePay = 'onlinePay',
    QRCodePay = 'qrcodePay'
}

const enum ePayTab {
    OnlinePay = 1,
    QRcodePay = 2,
}

const unpaidrderstStr = `If you encounter payment problems, you can\ntry switching between different payment\nmethods or contact customer service.`

@ccclass('Recharge')
export default class Recharge extends Module<Recharge_View, null>{
    //new
    private rechargeID:number = -1   
    private minRecharge:number = 0
    private maxRecharge:number = 0
    private payMethodID:number = -1  

    private rechargeData:any = []
    private selectRechageIndex:number = 2

    private warning:rechargeWarning = null
    private bindPhone:bindingPhone = null
    private qrCodeRules:rechargeQRcodeRules = null
    private preModuleName = ""
    private selectItem:Node = null
    private infolist:any = []
    private rechargeList:any = null
    private selectPayMethods:Node = null
    private startPos: Vec2 = new Vec2()
    private offset: Vec2 = new Vec2()

    //当前页签 1=在线支付 2=扫码支付
    private curPayTab: ePayTab = ePayTab.OnlinePay

    //上次支付方式
    private lastPayMethod: string = ePayMethod.OnlinePay

    //服务器下发的勾选优惠. 旧逻辑用到, 没太看懂
    private svrSelectedActivity: boolean = false

    //商品数据
    private products = {
        default: null, //常规
        first: null,    //首充
        bonus: null,    //bonus优惠
        qrcode: null,   //扫码支付的商品
    }

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/recharge/public_rechage";
        this.viewType = Recharge_View;
        this.modelType = null;
        this.layer = ViewLayer.Mid
    }

    private getValid() {
        return this && this.isValid && this.node && this.node.isValid && this.view && this.view.isValid && this.view.node && this.view.node.isValid
    }

    onInit() {
        this.initNodeListeners()
        AudioManager.instance.playOpenWindowSound()
        this.lastPayMethod = this.getLastPayMethod()
        this.curPayTab = this.lastPayMethod == ePayMethod.OnlinePay ? ePayTab.OnlinePay : ePayTab.QRcodePay
    }

    private initNodeListeners() {   
        Utility.instance.onButtonClick(this.view.btnSend, this.onSendRechage, this)
        Utility.instance.onButtonClick(this.view.btnBack, this.onBackClick, this)
        Utility.instance.onButtonClick(this.view.btnRecord, this.onShowRecord, this)
        Utility.instance.onButtonClick(this.view.btnAdd, ()=>this.onAmountClick(BtnAmountType.btnAdd), this)
        Utility.instance.onButtonClick(this.view.btnReduce, ()=>this.onAmountClick(BtnAmountType.btnReduce), this)      

        this.view.editAmount.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onRechargeEditingDidEnded,this)

        this.view.btnService.on(Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.view.btnService.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.view.btnService.on(Node.EventType.TOUCH_END, this.onTouchEnd, this)

        //tab
        Utility.instance.onButtonClick(this.view.btnOnlinePayTab, this.onClickOnlinePay, this)
        Utility.instance.onButtonClick(this.view.btnQRcodePayTab, this.onClickQRcodePay, this)

        this.view.spr_bonus.on(Toggle.EventType.TOGGLE, this.onClickAgree, this)
    }

    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)        
        this.preModuleName = intentData
        this.rechargeData = JSON.parse(HallModel.GetLocalShopData())
        this.parseProducts()
        this.updateQRcodeBubbleRate()
        this.updateTabView()
    }

    parseProducts() {
        this.products.default = this.rechargeData.default
        this.products.first = this.rechargeData.list.filter((data) => { return data.key == 'firstChargeDiscount' })[0]
        this.products.bonus = this.rechargeData.list.filter((data) => { return data.key == 'bonusDiscount' })[0]
        //修改逻辑.如果支付方式中没有下发qrcode, 则不显示扫码支付页签
        let qrcodePayMethod = this.rechargeData.pay_methods.filter((it) => {
            return it?.id == 5
            //name == 'QRcode' //寻找qrcode
        })[0]
        this.products.qrcode = qrcodePayMethod ? this.rechargeData.list.filter((data) => { return data.key == 'scanCodeBonusDiscount' })[0] : null
        this.curPayTab = qrcodePayMethod ? this.curPayTab : ePayTab.OnlinePay

        //勾选优惠(只对在线支付有效)
        this.svrSelectedActivity = false
        // this.selectRechageIndex = this.rechargeData.default.default_index //这里的逻辑写的没意义, 实际没用到, 用之前都被重新赋值了
        this.svrSelectedActivity = this.rechargeData.default.selected
        if(this.rechargeData?.list && this.rechargeData?.list.length > 0) {
            if(!this.svrSelectedActivity) {
                for(let i = 0;i<this.rechargeData.list.length;++i) {
                    let infoData = this.rechargeData.list[i]
                    if (infoData.key == 'scanCodeBonusDiscount') {
                        continue
                    }
                    this.svrSelectedActivity = infoData.selected
                    if(this.svrSelectedActivity) {
                        // this.selectRechageIndex = infoData.default_index  //这里的逻辑写的没意义, 实际没用到, 用之前都被重新赋值了
                        break
                    }
                }
            }           
        }
    }

    /**
     * 关闭窗口
     */
    onBackClick(){
        AudioManager.instance.playCloseWindowSound()
        let showModule = this.preModuleName ? this.preModuleName:CommonName.MODULE.Hall
        if(showModule == CommonName.MODULE.WithdrawNew){
            conmmon_http.reqWithdrawalAccountList()
        }
        else{
            ModuleManager.instance.showModule(showModule, null, () => {
                ModuleManager.instance.destroyModule(CommonName.MODULE.Recharge)
            })
        }
        EventManager.instance.dispatch(CommonName.EVENT.CloseRecharge)
    }

    /**
     * 初始化数据
     */
    initData() {
        if(!this.rechargeList) {
            error('获取商品信息获取错误!')
            return;
        }
        if(this.curPayTab == ePayTab.OnlinePay) {
            let product = this.products.first || this.products.bonus
            if(product && typeof product.label == 'string') {
                this.view.lbl_checkTitle.string = product.label
            }
            if(product && typeof product.explain == 'string') {
                this.view.lbl_agreetips.string = product.explain
            }
        }
        if(typeof this.rechargeList.description == 'string') {
            this.view.lbl_note.string = this.rechargeList.description
        }        
        if(this.rechargeList.limit_range){
            this.minRecharge = this.rechargeList.limit_range[0]/100
            this.maxRecharge = this.rechargeList.limit_range[1]/100
        }
        if(typeof this.rechargeList.allow_custom == 'boolean'){
            this.isAllowCustom(this.rechargeList.allow_custom)
        }
        //初始化通道
        this.showRechageList()        
    }
    
    /**
     * 初始化勾选优惠toggle按钮
     */
    initAgreeNode(bSelected: boolean) {
        this.view.spr_bonus.getComponent(Toggle).isChecked = bSelected
    }

    /**
     * 支付标签页状态
     */
    updateTabBtns() {
        this.view.btnOnlinePayTab.getComponent(Sprite).color = new Color(255, 255, 255, this.curPayTab == ePayTab.OnlinePay ? 255 : 0) 
        this.view.btnQRcodePayTab.getComponent(Sprite).color = new Color(255, 255, 255, this.curPayTab == ePayTab.QRcodePay ? 255 : 0) 
        this.view.textOnlinePay.getComponent(Label).color = new Color().fromHEX(this.curPayTab == ePayTab.OnlinePay ? "#FFFFFF" : "#FFC601")
        this.view.textQRcodePay.getComponent(Label).color = new Color().fromHEX(this.curPayTab == ePayTab.QRcodePay ? "#FFFFFF" : "#FFC601")
        this.view.btnQRcodePayTab.active = !!this.products.qrcode
        this.view.textQRcodePay.active = !!this.products.qrcode
        this.view.textQRcodeBonus.parent.active = !!this.products.qrcode
    }

    /**
     * 点击在线支付
     */
    onClickOnlinePay() {
        if (this.curPayTab == ePayTab.OnlinePay) {
            return
        }
        this.curPayTab = ePayTab.OnlinePay
        this.updateTabView()
    }

    /**
     * 点击扫码支付
     */
    onClickQRcodePay() {
        if (this.curPayTab == ePayTab.QRcodePay) {
            return
        }
        this.curPayTab = ePayTab.QRcodePay
        this.updateTabView()
    }

    /**
     * 扫码支付显示气泡比例
     */
    updateQRcodeBubbleRate() {
        this.view.textQRcodeBonus.getComponent(Label).string = this.products.qrcode?.label || ''
    }

    /**
     * 切换支付方式, 刷新界面
     */
    updateTabView() {
        this.updateTabBtns()
        switch(this.curPayTab) {
            case ePayTab.OnlinePay:
                //在线支付, 滚动区域按序显示: amount -> methods -> event -> tips
                this.view.eventNode.active = true
                this.view.amountNode.setSiblingIndex(1)
                this.view.methodsNode.setSiblingIndex(2)
                this.view.eventNode.setSiblingIndex(3)
                this.view.tipsNode.setSiblingIndex(4)
                this.showOnlinePayView()
                break
            case ePayTab.QRcodePay:
                //扫码支付, 滚动区域按序显示: methods -> amount, 隐藏event
                this.view.eventNode.active = false
                this.view.methodsNode.setSiblingIndex(1)
                this.view.amountNode.setSiblingIndex(2)
                this.view.tipsNode.setSiblingIndex(3)
                this.showQRcodePayView()
                break
        }
    }

    /**
     * 在线支付界面.旧逻辑
     */
    showOnlinePayView() {
        this.rechargeList = HallModel.isFirstCharg ? this.products.first : this.products.bonus
        if (!this.rechargeList) {
            this.rechargeList = this.products.default
        }
        this.initAgreeNode(this.rechargeList.key != 'default')
        if (HallModel.isFirstCharg || this.svrSelectedActivity) {
            this.isAgreeActivity()
        } 
        else {
            this.initData()
        }
        this.initPayMethods(this.rechargeData.pay_methods)
    }

    /**
     * 扫码支付界面
     */
    showQRcodePayView() {
        this.rechargeList = this.products.qrcode
        if (this.rechargeList) {
            this.initData()
        } else {
            //商品配置错误或者后台发送数据错误,强行改为常规展示.todo
            ModuleManager.instance.toast('扫码支付商品信息获取错误!')
            error('扫码支付商品信息获取错误!, 强行显示在线支付的商品!')
            this.onClickOnlinePay()
            return
        }
        this.initPayMethods(this.rechargeData.pay_methods)
    }

    /**
     * 点击是否同意活动
     */
    onClickAgree(){
        this.isAgreeActivity()
    }

    /**
     * 是否同意活动
     */
    isAgreeActivity(){
        if(!this.getValid()) return
        let toggle = this.view.spr_bonus.getComponent(Toggle)
        this.view.lbl_agreetips.node.active = toggle.isChecked
        this.rechargeList = null
        if (!toggle.isChecked) {
            this.rechargeList = this.products.default
        } else {
            this.rechargeList = HallModel.isFirstCharg ? this.products.first : this.products.bonus
        }
        if (!this.rechargeList) {
            error('优惠.获取商品信息获取错误!')
            return
        }
        if(this.rechargeList){
            this.initData()            
        }
    }

    /**
     * 充值ended输入框
     * @param edit
     */
    private onRechargeEditingDidEnded(edit: EditBox) {
        let enterMoney = parseInt(edit.string);
        if(edit.string.length == 0 || isNaN(enterMoney)){
            edit.string = ""+this.minRecharge
        }
        if(enterMoney < this.minRecharge){
            edit.string = ""+this.minRecharge
            this.showRechargeTips()
        }
        if(enterMoney > this.maxRecharge){
            edit.string = ""+this.maxRecharge
            this.showRechargeTips()
        }
        this.rechageListStatusChange(edit.string)        
    }

    private onAmountClick(type:string){
        let amount = parseInt(this.view.editAmount.string)
        if(BtnAmountType.btnReduce == type){
            amount -=1;
            if(amount < this.minRecharge){
                amount = this.minRecharge
                this.showRechargeTips() 
            }            
        }
        else{
            amount +=1;
            if(amount > this.maxRecharge){
                amount = this.maxRecharge
                this.showRechargeTips()
            }
        }
        this.view.editAmount.string = ""+amount
        this.rechageListStatusChange(this.view.editAmount.string)        
    }

    /**
     * 显示充值tips
     */
    showRechargeTips(){
        let tips = Utility.instance.format("Desposit Amount Min:₹{0}  Max:₹{1}",""+this.minRecharge,""+this.maxRecharge)
        ModuleManager.instance.toastLong(tips) 
    }

    /**
     * 充值列表状态改变
     * @param itemValue 
     */
    rechageListStatusChange(itemValue:string){
        if(this.view.rechageContent.children.length > 0){
            if(this.selectItem?.isValid){
                let lbl_title = find("lbl_title",this.selectItem)                
                lbl_title.getComponent(Label).color = new Color().fromHEX("#FFD632")
                this.selectItem.getComponent(Sprite).spriteFrame = this.view.spNormalRecharge
            }
            let currItem = find(itemValue,this.view.rechageContent)
            if(currItem?.isValid){
                let lbl_title = find("lbl_title",currItem)                
                lbl_title.getComponent(Label).color = new Color().fromHEX("#FFFFFF")
                currItem.getComponent(Sprite).spriteFrame = this.view.spSelectedRecharge
                this.selectItem = currItem
                this.selectRechageIndex = this.infolist[currItem.name]
            }
            else{
                this.selectItem = null
                this.selectRechageIndex = 0
            }
        }
    }

    /**
     * 充值列表
     * @param data 
     */
    private showRechageList(){   
        if(!this.rechargeList) return
        if(!this.rechargeList.products) return
        if(this.view.rechageContent.children.length > 0){
            this.view.rechageContent.destroyAllChildren()
        }

        this.infolist = []
        this.rechargeID = this.rechargeList.id        
        let color = ["#FFD632","#FFFFFF"]
        this.selectRechageIndex = this.rechargeList.default_index
        for(let i = 0;i < this.rechargeList.products.length;++i){
            let info = this.rechargeList.products[i]
            if(!info) continue    
            let item = instantiate(this.view.rechageItem)
            item.active = true
            item.name = `${info.amount/100}`
            item.parent = this.view.rechageContent

            if(!this.infolist[item.name]){
                this.infolist[item.name] = []
            }
            this.infolist[item.name] = i

            if(this.selectRechageIndex == i){
                this.selectItem = item
                this.view.editAmount.string = ""+info.amount/100
            }
            item.getComponent(Sprite).spriteFrame = this.selectRechageIndex == i ? this.view.spSelectedRecharge : this.view.spNormalRecharge
            let lbl_title = find("lbl_title",item)
            lbl_title.getComponent(Label).color = new Color().fromHEX(this.selectRechageIndex == i ? color[1]:color[0])
            lbl_title.getComponent(Label).string = Utility.instance.numThousandsFormat("₹"+info.amount/100)
        
            let add = find("Add",item)    
            add.getComponent(Sprite).spriteFrame = this.selectRechageIndex == i ? this.view.spSelectedBonus : this.view.spNormalBonus        
            if(this.rechargeList.range_configs && this.rechargeList.range_configs.length > 0){
                let add_title = find("lbl_title",add)
                for(let j=0;j<this.rechargeList.range_configs.length;++j){
                    let config = this.rechargeList.range_configs[j]
                    if(!config) continue                     
                    if(info.amount >= config.range[0] && info.amount <= config.range[1]){
                        add.active = true
                        let value = 0
                        if(config.more_type == 0){  //加赠类型0 百分比 
                            value = (info.amount*config.more_multi/100)/100
                        }   
                        else if(config.more_type == 1){ //加赠类型1 固定值
                            value = config.more_amount/100
                        }             
                        add_title.getComponent(Label).string = "+"+Utility.instance.numThousandsFormat(""+value)
                        add_title.getComponent(Label).color = new Color().fromHEX(this.selectRechageIndex == i ? "#FFFFFF" : "#000000")
                        break
                    }
                }
            }
            else{
                add.active = false
            }
            item.on(Button.EventType.CLICK, ()=>{
                if(this.selectItem?.isValid){
                    if(item.name == this.selectItem.name) return  
                    this.selectItem.getComponent(Sprite).spriteFrame = this.view.spNormalRecharge
                    let lbl_title = find("lbl_title",this.selectItem)
                    lbl_title.getComponent(Label).color = new Color().fromHEX(color[0])
                    let oldAdd = this.selectItem.getChildByName('Add')
                    oldAdd.getComponent(Sprite).spriteFrame = this.view.spNormalBonus
                    oldAdd.getChildByName('lbl_title').getComponent(Label).color = new Color().fromHEX("#000000")
                }
                item.getComponent(Sprite).spriteFrame = this.view.spSelectedRecharge
                lbl_title = find("lbl_title",item)
                lbl_title.getComponent(Label).color = new Color().fromHEX(color[1])

                item.getChildByName('Add').getComponent(Sprite).spriteFrame = this.view.spSelectedBonus
                add.getChildByName('lbl_title').getComponent(Label).color = new Color().fromHEX("#FFFFFF")

                this.selectRechageIndex = i
                this.view.editAmount.string = ""+info.amount/100
                this.selectItem = item
            }, this)
        }
    }

    /**
     * 充值按钮
     * @param type 
     */
    private onSendRechage(){
        let user = UserDataModel.GetCurrentUser()
        if (!user || !this.view) return
        if(user.phone.trim() == ""){ //没绑手机号
            this.rechageWarning()
        }   
        else{
            this.onSend(1)
        }
    }

    /**
     * 下单
     * @returns 
     */
    private onSend(forcibly_pay:number){
        let amount = parseInt(this.view.editAmount.string)
        if(this.rechargeID == -1) return

        if(amount < this.minRecharge || amount > this.maxRecharge){
            this.showRechargeTips()
            return
        }
        this._reqOrder(this.rechargeID,amount*100,forcibly_pay,this.payMethodID)
        this.setLastPayMethod()
    }

    /**
     * 游客充值警告
     */
    private rechageWarning() {
        if(this.warning == null || !this.warning.isValid){
            this.createNode("rechageWarning", this.view.node, (node: Node) => {
                this.warning = node.getComponent(rechargeWarning)
                let bindPhone= ()=>{
                    if(this.bindPhone == null || !this.bindPhone.isValid){
                        this.createNode("bindPhone", this.view.node, (bindNode: Node) => {
                            this.bindPhone = bindNode.getComponent(bindingPhone)
                            this.bindPhone.setCallBack(()=>{
                                this.bindPhone = null
                            },()=>{
                                this.onSend(1)
                                this.bindPhone = null
                                if(this.warning.node.destroy){
                                    this.warning.node.destroy()
                                }
                                this.warning = null
                            })
                        }) 
                    }
                    else{
                        this.bindPhone.node.active = true  
                    }
                }
                let recharge = ()=>{ 
                    this.onSend(1)
                    if(this.warning.node.destroy){
                        this.warning.node.destroy()
                    }
                    this.warning = null
                }
                this.warning.setListeners({BindPhoneFun:bindPhone.bind(this),RechargeFun:recharge.bind(this)})
            }) 
        }
        else{
            this.warning.node.active = true
        }
    }

    private createNode(name: string, parent: Node, callback: (node: Node) => void) {
        ResourceManager.loadRes("prefabs/recharge/" + name, Prefab, (err, prefab: Prefab) => {
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
     * 显示记录
     * @param type 
     */
    private onShowRecord(){
        AudioManager.instance.playButtonSound()
        ModuleManager.instance.showModule(CommonName.MODULE.RechargeRecord, this.preModuleName, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.Recharge)
        })
    }

    /**
     * 点击客服
     */
    private onClickService(){
        ModuleManager.instance.showModule(CommonName.MODULE.CustomerSupport)
    }

    /**
     * 是否允许自定义
     * @param isAllow 
     */
    private isAllowCustom(isAllow:boolean){
        if(!this.getValid()) return
        let inputNode = this.view.amountNode.getChildByName('input')
        if(!inputNode?.isValid) return

        let firstWidth = 680
        this.view.btnAdd.active = isAllow
        this.view.btnReduce.active = isAllow
        let editbg = find("editbg",inputNode)
        editbg.active = true
        editbg.position = v3(!isAllow ? -7:-135,-85,0)
        editbg.getComponent(UITransform).width = !isAllow ? (firstWidth+18):310

        let edit_amount = find("edit_amount",inputNode)
        edit_amount.active = true
        edit_amount.position = v3(!isAllow ? firstWidth/4-47:-112,-85,0)
        edit_amount.getComponent(UITransform).width = !isAllow ? firstWidth/2:260
        edit_amount.getComponent(EditBox).enabled = isAllow

        let lbl_symbol = find("lbl_symbol",inputNode)
        lbl_symbol.active = true
        lbl_symbol.position = v3(!isAllow ? -52:-260,-85,0)

        let lbl_title = find("lbl_title",inputNode).getComponent(Label)
        lbl_title.string = Utility.instance.format("Desposit Amount      Min: ₹{0}    Max: ₹{1}",Utility.instance.numThousandsFormat(`${this.minRecharge}`),Utility.instance.numThousandsFormat(`${this.maxRecharge}`))
    }

    onDestroy() {
        this.warning = null
        this.bindPhone = null      
        this.infolist = []
        this.rechargeList = null
        this.rechargeData = []
        if(this.selectItem?.destroy){
            this.selectItem.destroy()
            this.selectItem = null
        }
        HallModel.isFirstCharg = false;
    }

    initPayMethods(data:any){
        if(!data) return
        if(!this?.node?.isValid) return
        if(this.view.payMethodsContent.children.length > 0){
            this.view.payMethodsContent.destroyAllChildren()
        }
        let qrcodeExtend = null
        if (this.curPayTab == ePayTab.QRcodePay) {
            qrcodeExtend = data.filter((it) => {
                return it?.id == 5
                //name == 'QRcode' //寻找qrcode
            })[0]?.extend;
        }
        for(let i = 0;i < data.length;++i){
            //目前扫码支付, 美术只提供一种支付方式图标, 先剪掉多余无用的数据, 后续扩展的话, 放开此处处理并需要UI配合
            if (this.curPayTab == ePayTab.QRcodePay && i != 0) {
                break
            }
            let info = data[i]
            if(!info) continue    
            let item = instantiate(this.view.btnSend)
            item.getComponent(Button).transition = 0
            item.active = true
            item.name = `${i}`
            item.parent = this.view.payMethodsContent
            if(i == 0) {
                this.payMethodID = info.id
                this.selectPayMethods = item
                if (this.curPayTab == ePayTab.OnlinePay) {
                    let best = instantiate(this.view.btnSend)
                    best.getComponent(Button).destroy()
                    best.active = true
                    best.position = v3(100,30,0)
                    best.parent = item
                    best.getComponent(Sprite).spriteFrame = this.view.bestFrame
                }
            }
            item.getComponent(Sprite).spriteFrame = null
            if (this.curPayTab == ePayTab.OnlinePay) {
                SpriteDataModel.SetSprite(item.getComponent(Sprite), i==0 ? info.icon_selected_url:info.icon_url)
            } else {
                item.getComponent(Sprite).spriteFrame = i==0 ? this.view.spSelectQRcodePayMethod : this.view.spNormalQRcodePayMethod
            }
            let ex = this.curPayTab == ePayTab.QRcodePay ? qrcodeExtend : info.extend
            if(ex) {
                let extend = instantiate(this.view.btnSend)
                extend.getComponent(Button).transition = 0
                //扫码支付, 方式唯一, 默认展示extend
                //在线支付, 先直接隐藏
                extend.active = this.curPayTab == ePayTab.QRcodePay
                extend.name =  `${i}_` + ex.name
                extend.parent = this.view.payMethodsContent
                if (this.curPayTab == ePayTab.OnlinePay) {
                    SpriteDataModel.SetSprite(extend.getComponent(Sprite), ex.icon_url)
                } else {
                    extend.getComponent(Sprite).spriteFrame = this.view.spQRcodePayMethodExtend
                }
                extend.on(Button.EventType.CLICK, ()=>{                    
                    this.rechargeQRcodeRules(ex.content)
                }, this)
            }
            item.on(Button.EventType.CLICK, ()=>{
                if(this.selectPayMethods?.isValid){
                    if(item.name == this.selectPayMethods.name) return
                    this.payMethodID = info.id
                    if (this.curPayTab == ePayTab.OnlinePay) {
                        SpriteDataModel.SetSprite(item.getComponent(Sprite),info.icon_selected_url)
                        SpriteDataModel.SetSprite(this.selectPayMethods.getComponent(Sprite), data[parseInt(this.selectPayMethods.name)].icon_url)
                    } else {
                        item.getComponent(Sprite).spriteFrame = this.view.spSelectQRcodePayMethod
                        this.selectPayMethods.getComponent(Sprite).spriteFrame = this.view.spNormalQRcodePayMethod
                    }         
                    if(data[parseInt(item.name)].extend) {
                        let path = item.name+`_${data[parseInt(item.name)].extend.name}`
                        let curr_extend = find(path,this.view.payMethodsContent)
                        if(curr_extend.isValid) curr_extend.active = true                      
                    }
                    if(data[parseInt(this.selectPayMethods.name)].extend){
                        let path = this.selectPayMethods.name+`_${data[parseInt(this.selectPayMethods.name)].extend.name}`
                        let curr_extend = find(path,this.view.payMethodsContent)
                        if(curr_extend.isValid) curr_extend.active = false                        
                    }
                }
                this.selectPayMethods = item
            }, this)
        }
    }

    private rechargeQRcodeRules(data:any) {
        if(this.qrCodeRules == null || !this.qrCodeRules.isValid){
            this.createNode("rechargeQRcodeRules", this.view.node, (node: Node) => {
                this.qrCodeRules = node.getComponent(rechargeQRcodeRules)
                this.qrCodeRules.initData(data)
            }) 
        }
        else{
            this.qrCodeRules.node.active = true
        }
    }

    private rechageUnpaidrders() {
        if(this.warning == null || !this.warning.isValid){
            this.createNode("rechageWarning", this.view.node, (node: Node) => {
                let lbl_title1 = find("bg/lbl_title1",node).getComponent(Label)
                lbl_title1.string = "Unpaid orders"
                lbl_title1.fontSize = 28

                let lbl_title2 = find("bg/lbl_title2",node).getComponent(Label)
                lbl_title2.string = "Contact Customer Service"
                lbl_title2.fontSize = 28
                lbl_title2.color = new Color().fromHEX("#FFFFFF")
                lbl_title2.node.position = v3(5,-110,0)

                let lbl_title3 = find("bg/lbl_title3",node).getComponent(Label)
                lbl_title3.fontSize = 28
                lbl_title3.string = "Continue to pay"
                lbl_title3.node.position = v3(6,-219,0)

                let lbl_content1 = find("bg/lbl_content1",node).getComponent(Label)
                lbl_content1.destroy()
                
                let lbl_content2 = find("bg/lbl_content2",node).getComponent(Label)
                lbl_content2.fontSize = 28
                lbl_content2.lineHeight = 45           
                lbl_content2.string = unpaidrderstStr
                lbl_content2.node.position = v3(9,84,0)               

                let btn_service = find("bg/btn_binding",node)
                btn_service.getComponent(UITransform).contentSize = new math.Size(535,80)
                btn_service.position = v3(6,-115,0)

                let btn_recharge = find("bg/btn_recharge",node)
                btn_recharge.getComponent(UITransform).contentSize = new math.Size(535,80)
                btn_recharge.position = v3(6,-222,0)

                this.warning = node.getComponent(rechargeWarning)
                let customerservice= ()=>{
                    if(this.warning.node.destroy){
                        this.warning.node.destroy()
                    }
                    this.warning = null
                    ModuleManager.instance.showModule(CommonName.MODULE.CustomerSupport)
                }
                let recharge = ()=>{ 
                    this.onSend(2)
                    if(this.warning.node.destroy){
                        this.warning.node.destroy()
                    }
                    this.warning = null
                }
                this.warning.setListeners({BindPhoneFun:customerservice.bind(this),RechargeFun:recharge.bind(this)})
            }) 
        }
        else{
            this.warning.node.active = true
        }
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
     * 请求下单
     * @param products_type 商品类型
     * @param amount 商品金额
     */
     private _reqOrder(products_type: number, amount: number,forcibly_pay:number,pay_method_id:number) {
        ModuleManager.instance.showNetPrompt();
        let params = {
            products_type: products_type,
            amount: amount,
            forcibly_pay:forcibly_pay,
            pay_method_id:pay_method_id,
        }
        console.log("下单", params)
        let info: PostData = {
            Target: this,
            Url: Http_Define.order,
            Params: params,
            Callback: this.__rspOrder.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private __rspOrder(msg: any) {
        ModuleManager.instance.hideNetPrompt()
        if(!msg) return
        if(msg.code == 0){
            if (msg.data.pay_url) {
                sys.openURL(msg.data.pay_url) //跳转第三方支付
            }
        }
        else if(msg.code == 119){
            this.rechageUnpaidrders()
        }        
    }

    private getLastPayMethod() {
        let userID = UserDataModel.GetCurrentUserID()
        return LoaclStorage.getString(userID + PayMethod, ePayMethod.OnlinePay)
    }

    private setLastPayMethod() {
        let userID = UserDataModel.GetCurrentUserID()
        let strPayMethod = this.curPayTab == ePayTab.OnlinePay ? ePayMethod.OnlinePay : ePayMethod.QRCodePay
        LoaclStorage.setString(userID + PayMethod, strPayMethod)
    }
}