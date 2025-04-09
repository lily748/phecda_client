
import { _decorator, Node, Prefab, instantiate,game, v3, find, Sprite, Button, Label,Color, UITransform} from 'cc';
import ModuleManager from '../../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../../script/manager/audio_manager';
import EventManager from '../../../../../../script/manager/event_manager';
import Utility from '../../../../../../script/utility/utility';
import CommonName from '../../../model/CommonName';
import { UserDataModel } from '../../../model/UserDataModel';
import { conmmon_http } from '../../../../../../script/net/common_http';
import ResourceManager from '../../../../../../script/manager/resoure_manager';
import { RechargeWheelView } from './rechargewheel_view';
import { PostData } from '../../../model/HttpDataModel';
import { Http_Define } from '../../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../../model/HttpDataModel';
import { SpriteDataModel } from '../../../model/SpriteDataModel';
import { rechargewheelScroll } from './rechargewheelScroll';
import { rechargewheelRules } from './rechargewheelRules';
import { HallModel } from '../../../model/HallModel';

const { ccclass, property } = _decorator;

const depositTip = `Complete the deposit task to participate in the wheel\nspin activity and win up to ₹{0}.`
const rtxSpin = `<color=#8fafce>Deposit</color><color=#ffbf4f> ₹{0} </color><color=#8fafce>to get 1 spin.</color>`

@ccclass('RechargeWheel')
export class RechargeWheel extends Module<RechargeWheelView, null> {
    private preModuleName = ""
    private wheelInfo:any = null
    private preSelectWheel:Node = null
    private rules:rechargewheelRules = null
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/rechargewheel/public_rechargewheel";
        this.viewType = RechargeWheelView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needViewMask = false
        this.needAnim = false
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnClose, this.onClickClose, this, false)
        Utility.instance.onButtonClick(this.view.btnWallet, this.onClickWallet, this, false)        
        Utility.instance.onButtonClick(this.view.btnRecord, this.onClickRecord, this, false)
        Utility.instance.onButtonClick(this.view.btnRules, this.onClickRules, this, false)
        Utility.instance.onButtonClick(this.view.btnDeposit, this.onClickDeposit, this, false)

        EventManager.instance["on"](CommonName.EVENT.Respon_Refresh_UserInfo, this.updateBalance, this)
        conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))

        this.scheduleOnce(() => { game.frameRate = 60 }, 1)
    }

    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)
        this.preModuleName = intentData
        if(this.preModuleName){
            HallModel.preModule = this.preModuleName
        }
        this._reqLuckyWheelInfo()
    }

    private updateBalance(){
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

    private onClickRules(){
        if(!this.rules?.isValid){
            this.createNode("activity/rechargewheel/rechargewheelRules", this.view.node, (bindNode: Node) => {
                this.rules = bindNode.getComponent(rechargewheelRules)
                if(typeof this.wheelInfo?.rules_pic == 'string'){
                    this.rules.showRules(this.wheelInfo.rules_pic)
                }            
            }) 
        }
        else{
            this.rules.node.active = true  
        }
    }

    private createNode(name: string, parent: Node, callback: (node: Node) => void) {
        ResourceManager.loadRes("prefabs/" + name, Prefab, (err, prefab: Prefab) => {
            if (!err) {
                if (!this || !this.isValid || !this.node || !this.node.isValid) {
                    return
                }
                let preNode: Node = instantiate(prefab)
                preNode.parent = parent
                callback && callback(preNode)
            }
        })
    }

    private onClickRecord(){
        ModuleManager.instance.showModule(CommonName.MODULE.RechargewheelRewards,this.preModuleName,()=>{
            ModuleManager.instance.destroyModule(CommonName.MODULE.RechargeWheel)
        })
    }

    private onClickDeposit(){
        ModuleManager.instance.showModule(CommonName.MODULE.Recharge, CommonName.MODULE.RechargeWheel, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.RechargeWheel)
        })  
    }

    private onClickClose() {
        AudioManager.instance.playCloseWindowSound()
        this.preModuleName = this.preModuleName == null ? HallModel.preModule:this.preModuleName
        let showModule = this.preModuleName ? this.preModuleName:CommonName.MODULE.Hall
        ModuleManager.instance.showModule(showModule, null, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.RechargeWheel)
        })
    }

    private onClickWallet() {
        ModuleManager.instance.showModule(CommonName.MODULE.Wallet)
    }

    onDestroy() {
        game.frameRate = 45
        EventManager.instance["off"](CommonName.EVENT.Respon_Refresh_UserInfo, this.updateBalance, this)
    }
    
    private async addSelectWheelBtn(data:any){
        if(!data) return
        for (let i = 0; i < data.length; i++) { 
            let btnSelectWheel:Node= i==0 ? this.view.btn_selectWheel:instantiate(this.view.btn_selectWheel)
            if(i==0){
                this.preSelectWheel = btnSelectWheel
                this.updateBottnomUI(data[i])
            }
            else{
                btnSelectWheel.parent = this.view.selectWheel_node
            }
            btnSelectWheel.name = `${i}`        
            btnSelectWheel.active = true
            btnSelectWheel.position = v3(-273+i*183,1)
            let btnSprite = btnSelectWheel.getComponent(Sprite)
            let suo = find("suo",btnSelectWheel)
            let icon = find("icon",btnSelectWheel)            
            btnSprite.spriteFrame = this.view.btnSelectWheelFame[i==0?1:0]
            if(typeof data[i].icon_pic == 'string'){
                SpriteDataModel.SetSprite(icon.getComponent(Sprite), data[i].icon_pic)
            }            
            if(typeof data[i].unlock == 'number'){
                if(data[i].unlock == 0){
                    suo.active = true
                    find("ja",btnSelectWheel).destroy()
                }
                else{              
                    suo.destroy()                    
                }
                // btnSelectWheel.getComponent(Button).interactable = data[i].unlock==1
            }
            btnSelectWheel.on(Button.EventType.CLICK, ()=>{
                if(data[i].unlock==0){
                    ModuleManager.instance.toastLong("Complete the first three wheel tasks to unlock the special wheel!")
                    return
                }
                this.preSelectWheel.getComponent(Sprite).spriteFrame = this.view.btnSelectWheelFame[0]
                btnSelectWheel.getComponent(Sprite).spriteFrame = this.view.btnSelectWheelFame[1]
                this.updateBottnomUI(data[i])
                this.preSelectWheel = btnSelectWheel
                let wheelScroll = this.view.turnTable_node.getComponent(rechargewheelScroll)
                wheelScroll.goToPage(i,0.4)        
            }, this)            
        }
    }

    private addSelectWheelLabel(data:any){
        if(!data) return
        for (let i = 0; i < data.length; i++) {
            let lbl_up:Node= i==0 ? this.view.lbl_up:instantiate(this.view.lbl_up)
            if(i !== 0){
                lbl_up.parent = this.view.selectWheel_label
            }            
            lbl_up.active = true
            lbl_up.position = v3(-233+i*183,8)   
            lbl_up.getComponent(Label).string = i== data.length-1 ? "Special\nWheel":`Up to\n₹${Utility.instance.numThousandsFormat(`${data[i].up_to/100}`)}`
            
            let color = new Color().fromHEX("ffffff")
            color.a = data[i].unlock == 0 ? 120:255
            lbl_up.getComponent(Label).color = color

            if(data[i].unlock == 0) continue
            let lbl_num:Node= i==0 ? this.view.lbl_num:instantiate(this.view.lbl_num)
            if(i !== 0){
                lbl_num.parent = this.view.selectWheel_label
            } 
            lbl_num.active = true
            lbl_num.name = `num_${i}`
            lbl_num.position = v3(-195+i*183,55)   
            lbl_num.getComponent(Label).string = `${data[i].cur_chance}`
        }
    }

    private async updateBottnomUI(data:any){
        if(!data) return
        if(typeof data.recharge_get_one == 'number'){
            this.view.rtx_spin.string = Utility.instance.format(rtxSpin,Utility.instance.numThousandsFormat(`${data.recharge_get_one/100}`))
        }
        if(data.progress_list && data.progress_list.length > 1){
            let end = 1
            if(data.progress_list[0] && typeof data.progress_list[0].target_recharge == 'number'){
                this.view.lblStartDeposit.string = "₹"+Utility.instance.numThousandsFormat(`${data.progress_list[0].target_recharge/100}`)
            }
            if(data.progress_list[data.progress_list.length-1]){
                end = data.progress_list[data.progress_list.length-1].target_recharge
                if(typeof data.progress_list[data.progress_list.length-1].target_recharge == 'number'){
                    end = data.progress_list[data.progress_list.length-1].target_recharge
                    this.view.lblEndDeposit.string = "₹"+Utility.instance.numThousandsFormat(`${end/100}`)
                }
                if(typeof data.progress_list[data.progress_list.length-1].reward_chance == 'number'){
                    this.view.lblEndSpin.string = `+${data.progress_list[data.progress_list.length-1].reward_chance}Spin`
                }
            }
            if(typeof data.cur_recharge == 'number'){
                this.view.progressBar.fillRange = data.cur_recharge/(end==0 ? 1:end)
            }

            this.view.progressBar.node.removeAllChildren()
            this.view.lblStartDeposit.node.removeAllChildren()        
            let spin_bg = find("spin_bg2",this.view.progressBar.node.parent)
            let barWidth = this.view.progressBar.node.getComponent(UITransform).width
            let clonedArr = data.progress_list.slice(1, -1)
            let initSpinBg = async ()=>{
                for(let i=0;i<clonedArr.length;++i){
                    let spinbg = instantiate(spin_bg)
                    spinbg.active = true
                    spinbg.parent = this.view.progressBar.node
                    spinbg.position = v3(barWidth/(clonedArr.length+1)*(i+1),-32)
                } 
            }
            let initDepositlbl = async ()=>{
                for(let i=0;i<clonedArr.length;++i){
                    let lbl_deposit = instantiate(this.view.lblEndDeposit.node)
                    lbl_deposit.active = true
                    lbl_deposit.parent = this.view.lblStartDeposit.node
                    lbl_deposit.position = v3(barWidth/(clonedArr.length+1)*(i+1),-3)
                    lbl_deposit.getComponent(Label).string = "₹"+Utility.instance.numThousandsFormat(`${clonedArr[i].target_recharge/100}`)

                    let lbl_endSpin = instantiate(this.view.lblEndSpin.node)
                    lbl_endSpin.active = true
                    lbl_endSpin.parent = this.view.lblStartDeposit.node
                    lbl_endSpin.position = v3(barWidth/(clonedArr.length+1)*(i+1),-24)
                    lbl_endSpin.getComponent(Label).string = `+${clonedArr[i].reward_chance}Spin`
                } 
            }
            await initSpinBg()
            initDepositlbl()
        }
    }

    private async initWheelInfo(data:any){
        if(!data) return
        if(!this.node?.isValid) return

        if(typeof data.profile_pic == 'string'){
            SpriteDataModel.SetSprite(this.view.spr_zi, data.profile_pic)
        }
        if(typeof data.win_up_to == 'number'){           
            this.view.lbl_depositTip.string = Utility.instance.format(depositTip,Utility.instance.numThousandsFormat(`${data.win_up_to/100}`))
        }
        await this.addSelectWheelBtn(data.wheel_list)        
        this.addSelectWheelLabel(data.wheel_list)

        let wheelScroll = this.view.turnTable_node.getComponent(rechargewheelScroll)
        wheelScroll.initData(data.wheel_list,(selectIndex)=>{
            this.updateBottnomUI(data.wheel_list[selectIndex])
            this.preSelectWheel.getComponent(Sprite).spriteFrame = this.view.btnSelectWheelFame[0]
            let selectWheel = find(`${selectIndex}`, this.view.selectWheel_node)            
            selectWheel.getComponent(Sprite).spriteFrame = this.view.btnSelectWheelFame[1]            
            this.preSelectWheel = selectWheel          
        },(resultData)=>{
            for (let i = 0; i < resultData.chance_list.length; i++) {
                let lbl_num:Node = find(`num_${i}`,this.view.selectWheel_label)
                if(!lbl_num?.isValid) continue
                lbl_num.getComponent(Label).string = `${resultData.chance_list[i].cur_chance}`
            }
            this.view.lblMoney.string = "₹ "+Utility.instance.numThousandsFormat(`${resultData.cur_balance/100}`)
        })        
    }

    private _reqLuckyWheelInfo(){
        ModuleManager.instance.showNetPrompt()
        let info: PostData = {
            Target: this,
            Url: Http_Define.getLuckyWheelInfo,
            Params: {},
            Callback: this._rspLuckyWheelInfo.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspLuckyWheelInfo(msg: any){
        ModuleManager.instance.hideNetPrompt()
        if (msg && msg.code == 0) {
            this.wheelInfo = msg.data
            this.initWheelInfo(msg.data)
        }
    }
}