import { _decorator, instantiate, Label, tween,math, Button, Tween, find,UITransform,game, Sprite} from 'cc';
import { UserDataModel } from '../../../model/UserDataModel';
import ModuleManager from '../../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../../script/manager/audio_manager';
import Utility from '../../../../../../script/utility/utility';
import CommonName from '../../../model/CommonName';
import { ReturningTurntableView } from './returningTurntable_view';
import { PostData } from '../../../model/HttpDataModel';
import { Http_Define } from '../../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../../model/HttpDataModel';
import { conmmon_http } from '../../../../../../script/net/common_http';
import { SpriteDataModel } from '../../../model/SpriteDataModel';
import EventManager from '../../../../../../script/manager/event_manager';

const { ccclass, property } = _decorator;

@ccclass('ReturningTurntable')
export class ReturningTurntable extends Module<ReturningTurntableView, null>{
    private nickname:string = ""
    private freeNumber:number = 0
    private truntableData:any = null

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/returningActivities/returningTurntable"
        this.viewType = ReturningTurntableView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = false
        this.needViewMask = false
    }

    onEnable() {
        if(!this.view) return
        this.scheduleOnce(()=>{ game.frameRate = 60})
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnClose, this.onBackClick, this)
        Utility.instance.onButtonClick(this.view.btnGo, this.onClickGo, this, true)
        Utility.instance.onButtonClick(this.view.btnRules, this.onClickRules, this, true)

        let user = UserDataModel.GetCurrentUser()
        if (user) {
            this.nickname = user.nickname
        }
    }

    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)        
        this._reqTurntableData()
    }

    /**
     * 点击开始
     */
    onClickGo() {
        if(this.freeNumber < 1) {
            return
        }        
        this._reqRunTurntable()
    }

    /**
     * 关闭窗口
     */
    onBackClick() {
        Tween.stopAllByTarget(this.view.table)
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.ReturningTurntable)
    }

    /**
     * 打开规则界面
     */
    onClickRules(){     
        AudioManager.instance.playCloseWindowSound()

       let rule = find("illustrate_bg",this.view.btnRules)
       rule.active = !rule.active
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
        if(!data) return
        if(!this.node?.isValid) return

        if(typeof data.free_spin_count === 'number'){
            this.updateSpinCount(data.free_spin_count)
        }
       
        if(data.list && typeof data.amount === 'number'){
            this.initTrunTableGridData(data.list,data.amount)

            let content = Utility.instance.format(`<color=#ffffff>Recharge today:</color><color=#ffdb5e> ₹{0}</color>`,Utility.instance.numThousandsFormat(""+data.amount/100))
            this.view.rxt_recharge.string = content
        }

        this.view.table.angle = 0
        this.view.ske_stop.node.active = false
        this.view.btnGo.getComponent(Button).interactable = true

        if(data.records && data.records.length > 0){
            data.records.sort((a, b) => a.time - b.time);
            this.executePreFrame(this._initSelfList(data.records), 8)
        }
    }

    /**
     * 更新次数
     * @param count 
     */
    updateSpinCount(count:number){
        this.freeNumber = count

        this.view.lblSpinCount.node.active = count > 0
        this.view.lblSpinCount.string = "x"+ count

        this.view.x0.active = count==0
        this.view.btnGo.getComponent(Sprite).grayscale = count==0
    }

    /**
     * 显示转盘结果
     */
    showGoResult(data:any){
        if(!data) return
        if(!this.node?.isValid) return

        this.updateSpinCount(data.free_spin_count)

        let target = data.pos-1
        let rotation = -360 * math.randomRangeInt(4, 6) + (target - 5) * 72
        this.view.btnGo.getComponent(Button).interactable = false

        this.view.ske_stop.node.active = false
        AudioManager.instance.playEffect("sound/turntable/turntable_rotate")
        tween(this.view.table).stop().to(4, { angle: rotation }, { easing: "quintInOut" }).call(() => {
            this.view.table.angle = rotation % 360
            this.view.btnGo.getComponent(Button).interactable = true

            this.view.ske_stop.node.active = true
            this.view.ske_stop.setAnimation(0, "animation", true)
    
            this.updateRecords({time:data.time,money:data.money})
            ModuleManager.instance.toastLong(Utility.instance.format(`Successfully received ₹{0}`,Utility.instance.numThousandsFormat(""+data.money/100)))            
        }).start()
    }

    /**
     * 初始化格子数据
     * @param data 
     */
    private initTrunTableGridData(data,amount:number){
        if(!data) return
        data.sort((a, b) => a.pos - b.pos);

        if(!this.view?.table) return
        for(let i=0;i<data.length;++i){
            let index = i+1
            let info = data[i]
            let child = find(`lbl_amount${index}`,this.view.table)
            if(!child?.isValid) continue
            child.getComponent(Label).string = amount == 0 ? ""+info.money:"₹"+info.money/100
        }
    }
      

    onDisable() {
        if(this?.view?.table){
            Tween.stopAllByTarget(this.view.table)
        }
    }

    onDestroy() {
        EventManager.instance.dispatch(CommonName.EVENT.UpdateRegressionMain);
    }

    /*****************************************************************协议********************************************************************* */

    /**
     * 请求turntable数据
     */
    private _reqTurntableData(){
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.getRegressTurntable,
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
     * 请求RunTurntable数据
     */
    private _reqRunTurntable(){
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.runRegressTurntable,
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
                conmmon_http.reqGetUserInfo(this,conmmon_http.rspUserInfo.bind(this))
            }
        }
    }
}