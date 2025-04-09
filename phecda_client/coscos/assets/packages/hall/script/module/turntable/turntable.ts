import { _decorator, Node, instantiate, Label, tween,math, Button, Tween, Prefab, find,macro, UITransform,game, Sprite} from 'cc';
import { UserDataModel } from './../../model/UserDataModel';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { TurnTableView } from './turntable_view';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { bindingPhone } from '../recharge/bindingPhone';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { HallModel } from '../../model/HallModel';
import { conmmon_http } from '../../../../../script/net/common_http';
import { turntable_giftpack } from './turntable_giftpack';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import EventManager from '../../../../../script/manager/event_manager';

const { ccclass, property } = _decorator;

@ccclass('TurnTable')
export class TurnTable extends Module<TurnTableView, null>{
    private nickname:string = ""
    private amount:number = 0
    private preModuleName = ""
    private freeNumber:number = 0
    private truntableData:any = null
    private lastClickTime: number = 0
    private roundCountDownTime: number = 0
    private bindPhone:bindingPhone = null
    private giftpack:turntable_giftpack = null
    private status:number = -1
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/turntable/public_turntable";
        this.viewType = TurnTableView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = false
        this.needViewMask = false
    }

    onEnable() {
        if(!this.view) return        
        this._reqTurntableData()
    }

    onInit() {
        EventManager.instance.on(CommonName.EVENT.Respon_Refresh_UserInfo, this.updateData, this);
        Utility.instance.onButtonClick(this.view.btnClose, this.onBackClick, this)
        Utility.instance.onButtonClick(this.view.btnGo, this.onClickGo, this, true)
        Utility.instance.onButtonClick(this.view.btnRules, this.onClickRules, this, true)
        Utility.instance.onButtonClick(this.view.btnRecord, this.onClickRecord, this, true)
        Utility.instance.onButtonClick(this.view.btnCashout, this.onClickCashout, this, true)        
        Utility.instance.onButtonClick(this.view.btnCopyCode, this.onClickCopyCode, this, true)
        Utility.instance.onButtonClick(this.view.btnInviteFriend, this.onClickInviteFriend, this, true)
        Utility.instance.onButtonClick(this.view.btnBindCode, this.onClickBindCode, this, true)

        this.view.hallTemplate.setSelectToggle(CommonName.MODULE.TurnTable);
    }

    onDestroy() {
        EventManager.instance.off(CommonName.EVENT.Respon_Refresh_UserInfo, this.updateData, this)
    }

    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)
        
        this.preModuleName = intentData
        this._reqTurntableData()
        this.updateData()
    }

    updateData(){
        let user = UserDataModel.GetCurrentUser()
        if (!user || !this.view) return

        this.nickname = user.nickname
        this.view.btnBindCode.getComponent(Button).interactable = user.agent_id == 0
        let lbl_bindCode = find("lbl_bindCode",this.view.btnBindCode)
        let sp_red = find("sp_red",this.view.btnBindCode)
        if (user.agent_id && user.agent_id != 0) {
            lbl_bindCode.getComponent(Label).string = `${user.agent_id}`
            sp_red.active=false
        }
    }

    /**
     * 点击开始
     */
    onClickGo() {
        let user = UserDataModel.GetCurrentUser()
        if (!user || !this.view) return
        if(user.phone.trim() == ""){ //没绑手机号
            this.bindingPhone(false)
            return
        }

        if(this.freeNumber > 0){
            if(this.status == 2 || this.status == 3){
                ModuleManager.instance.toast("Please withdraw the current ₹200 before transferring")
                return
            }
            this._reqRunTurntable()
        }
        else{
            if(this.status == 2){
                ModuleManager.instance.toast("Invite friends get a free spin")
            }
            else if( this.status == 3){
                ModuleManager.instance.toast("Please withdraw the current ₹200 before transferring")
            }
            this.showShareView()
        }
    }

    /**
     * 关闭窗口
     */
    onBackClick() {
        Tween.stopAllByTarget(this.view.table)
        this.unscheduleAllCallbacks()
        AudioManager.instance.playCloseWindowSound()

        let showModule = this.preModuleName == "" ? CommonName.MODULE.Hall : this.preModuleName
        let intentData = this.preModuleName == CommonName.MODULE.Promotion ? "Promo" : null 
        ModuleManager.instance.showModule(showModule, intentData, () => {
            HallModel.buttomPreModule = showModule
            ModuleManager.instance.destroyModule(CommonName.MODULE.TurnTable)
        })
    }

    /**
     * 打开规则界面
     */
    onClickRules(){        
        if (Date.now() - this.lastClickTime < 1000) return        
        AudioManager.instance.playCloseWindowSound()

        let turntable_rule = find("turntable_rule",this.view.node)
        if(turntable_rule && turntable_rule.isValid){
            turntable_rule.active = true
            return
        }

        this.lastClickTime = Date.now()
        this.createNode("turntable/turntable_rule", this.view.node,null)
    }

    /**
     * 打开邀请好友
     */
    onClickInviteFriend(){
        this.showShareView()
    }

    /**
     * 打开代付记录界面
     */
    onClickRecord(){
        AudioManager.instance.playCloseWindowSound()
        this.createNode("turntable/turntable_withdrawRecord", this.view.node, (node:Node)=>{
            let turntable_withdrawRecord:any = node.getComponent("turntable_withdrawRecord")
            turntable_withdrawRecord.showRecord(this.truntableData?.orders)                       
            }
        )
    }

    /**
     * cashout
     */
    onClickCashout(){
        let user = UserDataModel.GetCurrentUser()
        if (!user || !this.view) return
        if(user.phone.trim() == ""){ //没绑手机号
            this.bindingPhone(true)
        }   
        else{
           this.judgeCashout()
        }
    }

    /**
     * 显示分享界面
     */
    showShareView(){
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.showModule(CommonName.MODULE.EarnMoneyShare,CommonName.MODULE.TurnTable)
    }

    /**
     * 判断cashout满足条件
     */
    judgeCashout(){
        if(this.truntableData){
            if(this.amount >= this.truntableData.withdraw_amount || this.status == 3){
                this._reqCashOutData()
            }
            else{
                this.showCashout()
            }
        }
    }

    /**
     * 拷贝code
     */
    onClickCopyCode(){
        if(!this.truntableData?.invitation_code) return

        Utility.instance.copyTextToClipboard(this.truntableData.invitation_code.toString())
        ModuleManager.instance.toast("Copy Success")
    }

    /**
     * 绑定手机
     */
    bindingPhone(isCashout:boolean){
        if(this.bindPhone == null || !this.bindPhone.isValid){
            this.createNode("recharge/bindPhone", this.view.node, (bindNode: Node) => {
                this.bindPhone = bindNode.getComponent(bindingPhone)
                this.bindPhone.setCallBack(()=>{
                    this.bindPhone = null
                },()=>{
                    if(isCashout){
                        //绑定成功
                        this.judgeCashout()
                    }
                    this.bindPhone = null
                })
            }) 
        }
        else{
            this.bindPhone.node.active = true  
        }
    }

    /**
     * 打开Cashout界面
     */
    showCashout(){              
        AudioManager.instance.playCloseWindowSound()

        let turntable_cashout = find("turntable_cashout",this.view.node)
        if(turntable_cashout && turntable_cashout.isValid){
            turntable_cashout.active = true
            return
        }
        this.createNode("turntable/turntable_cashout", this.view.node,(node:Node)=>{
            if(this.truntableData){
                let turntable_cashout:any = node.getComponent("turntable_cashout")
                let data = {
                    info:this.truntableData,
                    amount:this.amount,
                    countDown:this.roundCountDownTime,
                    listeners:this.onClickInviteFriend.bind(this)
                }               
                turntable_cashout.initData(data)
            }
        })
    }

    /**
     * 显示绑定礼包界面
     */
    showGiftpackView(){
        let node_giftpack = find("public_turntable/node_giftpack",this.node)
        if(!node_giftpack.isValid) return

        if(this.giftpack == null || !this.giftpack.isValid){
            this.createNode("turntable/turntable_giftpack", node_giftpack, (giftpackNode: Node) => {
                this.giftpack = giftpackNode.getComponent(turntable_giftpack)
                this.giftpack.setCallBack((data)=>{
                    this.giftpack = null
                    // this.updateAmount(this.amount,data.money)         
                    // this.updateRecords({time:data.time,money:data.money})
                    this._reqTurntableData()
                })
            }) 
        }
        else{
            this.giftpack.node.active = true  
        }
    }

    onClickBindCode(){
        this.createNode("account/bindInvitationCode", this.view.node, null)
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

    private * _initSelfList(data) {
        if(!data) return
        this.view.dropDownbg.getComponent(UITransform).height = (this.view.recordItem.getComponent(UITransform).height+8)*data.length+900

        let content = this.view.recordContent.children;
        for (let i = 0; i < data.length; i++) {
            let child = content[i]
            if (null == child) {
                child = instantiate(this.view.recordItem)
                child.parent = this.view.recordContent
            }
            child.active = true
            this._initSelfItem(child, data[i])
            yield
        }
    }

    private _initSelfItem(oNode, info) {
        find("lbl_time",oNode).getComponent(Label).string = Utility.instance.formatTime(info.time)
        find("lbl_nickName",oNode).getComponent(Label).string = this.nickname        
        let symbol = info.money < 0 ? "-":""        
        find("lbl_amount",oNode).getComponent(Label).string = symbol + "₹" + Utility.instance.numThousandsFormat((Math.abs(info.money)/100).toString())
        let user = UserDataModel.GetCurrentUser()
        if (!user) {
            return
        }
        let avatar = find("spr_avatar", oNode).getComponent(Sprite)
        SpriteDataModel.SetHead(avatar, user.avatar_url)
    }

    executePreFrame(generator: Generator, duration: number) {
        return new Promise((resolve, reject) => {
            let gen = generator;
            // 创建执行函数
            let execute = () => {
                // 执行之前，先记录开始时间
                let startTime = new Date().getTime();

                // 然后一直从 Generator 中获取已经拆分好的代码段出来执行
                for (let iter = gen.next(); ; iter = gen.next()) {
                    // 判断是否已经执行完所有 Generator 的小代码段，如果是的话，那么就表示任务完成
                    if (iter == null || iter.done) {
                        resolve(0);
                        return;
                    }

                    // 每执行完一段小代码段，都检查一下是否已经超过我们分配的本帧，这些小代码端的最大可执行时间
                    if (new Date().getTime() - startTime > duration) {
                        // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行
                        this.scheduleOnce(() => {
                            execute();
                        });
                        return;
                    }
                }
            };

            // 运行执行函数
            execute();
        });
    }

    /**
     * 更新记录
     * @param data 
     */
    updateRecords(data){
        let children = this.view.recordContent.children;
        if(children.length > 50) { //超过50条删除最后一条
            if(children[children.length-1].destroy){
                children[children.length-1].destroy()
            }
        }

        let child = instantiate(this.view.recordItem)
        child.parent = this.view.recordContent
        child.active = true
        this._initSelfItem(child, data)
        let height = this.view.dropDownbg.getComponent(UITransform).height
        this.view.dropDownbg.getComponent(UITransform).height = height+(this.view.recordItem.getComponent(UITransform).height+8)
    }

    /**
     * 初始化turntable信息
     * @param data 
     */
    private initTurntableInfo(data:any){
        game.frameRate = 60
        
        if(!data) return
        if(!this.node?.isValid) return

        this.status = data.status

        if(data.is_arrive == true){
            this.createNode("turntable/turntable_award", this.view.node, (node:Node)=>{
                let turntable_award:any = node.getComponent("turntable_award")
                    turntable_award.setCallBack(()=>{
                        if(data.status == 0){
                            this.showGiftpackView()
                        }
                    })                       
                }
            )
        }

        if(data.status == 0 && data.is_arrive == false){
            this.showGiftpackView()
        }

        if(typeof data.amount === 'number'){
            this.updateAmount(0,data.amount)
        }
        if(typeof data.free_spin_count === 'number'){
            this.updateSpinCount(data.free_spin_count)
        }
       
        this.view.lblInviteCode.string = "My Invitation Code: "+(data.invitation_code ? data.invitation_code:"")
        if(typeof data.round_remain_time === 'number'){
            this.roundStartCountDown(data.round_remain_time,this.view.lblRemainTime,null)
        }
        if(typeof data.next_remain_time === 'number'){
            this.startCountDown(data.next_remain_time,this.view.lblNextFree,null)
        }

        if(data.list){
            this.initTrunTableGridData(data.list)
        }

        this.view.table.angle = 0
        this.view.ske_stop.node.active = false
        this.view.btnGo.getComponent(Button).interactable = true

        if(data.records && data.records.length > 0){
            this.view.recordContent.removeAllChildren()
            data.records.sort((a, b) => a.time - b.time);
            this.executePreFrame(this._initSelfList(data.records), 8)
        }
    }

    /**
     * 更新amount
     */
    updateAmount(from:number,add:number){
        if(add == 0) {
            this.view.lblAmount.string = "₹"+Utility.instance.numThousandsFormat((from/100).toString())
            return
        }
        this.amount = from+add
        let obj = { progress: 0 }
        let now = 0
        tween(obj)
            .stop()
            .to(
                0.5,
                { progress: 1 }
                ,{
                    progress: (start: number, end: number, current: number, ratio: number) => {      
                        if (start == end) {
                            return start
                        }                      
                        if(this?.view?.lblAmount?.isValid){
                            now = from + ratio * add
                            this.view.lblAmount.string = "₹"+Utility.instance.numThousandsFormat((now/100).toFixed(2))
                        }
                        return current
                    }
                }
            )
            .call(()=>{
                if(this?.view?.lblAmount?.isValid){
                    let dist = parseFloat((now/100).toFixed(2)).toString()
                    this.view.lblAmount.string = "₹"+Utility.instance.numThousandsFormat(dist)
                }
            })
            .start();
    }

    /**
     * 更新次数
     * @param count 
     */
    updateSpinCount(count:number){
        this.freeNumber = count
        this.view.lblSpinCount.string = "X"+ count
    }

    /**
     * 显示转盘结果
     */
    showGoResult(data:any){
        if(!data) return
        if(!this.node?.isValid) return

        this.status = data.status
        this.updateSpinCount(data.free_spin_count)

        let target = data.pos-1
        let rotation = -360 * math.randomRangeInt(4, 6) + (target - 8) * 45
        this.view.btnGo.getComponent(Button).interactable = false

        this.view.ske_stop.node.active = false
        AudioManager.instance.playEffect("sound/turntable/turntable_rotate")
        tween(this.view.table).stop().to(4, { angle: rotation }, { easing: "quintInOut" }).call(() => {
            this.view.table.angle = rotation % 360
            this.view.btnGo.getComponent(Button).interactable = true

            this.view.ske_stop.node.active = true
            this.view.ske_stop.setAnimation(0, "animation", true)

            this.updateAmount(this.amount,data.money)         
            this.updateRecords({time:data.time,money:data.money})
        }).start()
    }

    /**
     * 初始化格子数据
     * @param data 
     */
    private initTrunTableGridData(data){
        if(!data) return
        data.sort((a, b) => a.pos - b.pos);

        if(!this.view?.table) return
        for(let i=0;i<data.length;++i){
            let index = i+1
            let info = data[i]
            let child = find(`lbl_amount${index}`,this.view.table)
            if(!child?.isValid) continue
            child.getComponent(Label).string = "₹"+info.money
        }
    }
      
    /**
     * 回合倒计时
    */
    private roundCountDownLabel: Label
    private roundCountDownComplete: () => void
    private roundStartCountDown(time: number, label: Label, complete: () => void) {
        this.roundCountDownTime = time
        this.roundCountDownLabel = label
        this.roundCountDownComplete = complete
        this.schedule(this.roundCountDown, 0.1, macro.REPEAT_FOREVER)
    }

    private roundCountDown(dt: number) {
        if (this.isValid) {
            this.roundCountDownTime -= dt
            this.roundCountDownLabel.string = "My amount ( "+ Utility.instance.formatCountDownTime(this.roundCountDownTime)+" )"
            if (this.roundCountDownTime <= 0) {
                this.unscheduleAllCallbacks()
                this.roundCountDownComplete && this.roundCountDownComplete()
                this.roundCountDownComplete = null
            }
        }
    }

    /**
     * 下个回合倒计时
    */
    private countDownTime: number
    private countDownLabel: Label
    private countDownComplete: () => void
    private startCountDown(time: number, label: Label, complete: () => void) {
        this.countDownTime = time
        this.countDownLabel = label
        this.countDownComplete = complete
        this.schedule(this.countDown, 0.1, macro.REPEAT_FOREVER)
    }

    private countDown(dt: number) {
        if (this.isValid) {
            this.countDownTime -= dt
            this.countDownLabel.string = "Next Free Spin: "+ Utility.instance.formatCountDownTime(this.countDownTime)
            if (this.countDownTime <= 0) {
                this.unscheduleAllCallbacks()
                this.countDownComplete && this.countDownComplete()
                this.countDownComplete = null
            }
        }
    }

    onDisable() {
        game.frameRate = 30
        if(this?.view?.table){
            Tween.stopAllByTarget(this.view.table)
        }
        this.unscheduleAllCallbacks()
    }

    /*****************************************************************协议********************************************************************* */

    /**
     * 请求turntable数据
     */
    private _reqTurntableData(){
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.getMyTurntable,
            Params: {},
            Callback: this._rspTurntableData.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * turntable返回
     * @param msg 
     */
    private _rspTurntableData(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            this.truntableData = msg.data
            this.initTurntableInfo(msg.data)
        }
    }

    /**
     * 请求CashOut数据
     */
    private _reqCashOutData(){
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.cashOutTurntable,
            Params: {},
            Callback: this._rspCashOutData.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * CashOut返回
     * @param msg 
     */
    private _rspCashOutData(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            if(typeof msg.data?.amount == 'number'){
                this.amount = msg.data.amount
                this.view.lblAmount.string = "₹" + Utility.instance.numThousandsFormat((msg.data.amount/100).toString())
            }
            if(typeof msg.data?.time == 'number' && typeof msg.data?.money == 'number'){
                this.updateRecords({time:msg.data.time,money:msg.data.money})
            }
            this.status = msg.data?.status            
            conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
            if(msg.data?.status == 2 || msg.data?.status == 3){
                this.createNode("turntable/turntable_dialog", this.view.node, (node:Node)=>{
                        let turntable_dialog:any = node.getComponent("turntable_dialog")
                        turntable_dialog.setShowRule(msg.data?.status == 3,msg.data?.tips)                       
                    }
                )
            }
            else{
                ModuleManager.instance.toastLong(msg.data?.tips) //服务器成功提示
            }
        }
    }

    /**
     * 请求RunTurntable数据
     */
    private _reqRunTurntable(){
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.runTurntable,
            Params: {},
            Callback: this._rspRunTurntable.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * RunTurntable返回
     * @param msg 
     */
    private _rspRunTurntable(msg: any){
        ModuleManager.instance.hideNetPrompt();
        if (msg && msg.code == 0) {
            if(msg.data){
                this.showGoResult(msg.data)
            }
        }
    }
}