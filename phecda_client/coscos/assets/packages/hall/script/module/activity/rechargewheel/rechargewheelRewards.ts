
import { _decorator, Node,find, Label} from 'cc';
import Module, { ViewLayer } from '../../../../../../script/framework/core/mvvm/module_base';
import { RechargewheelRewards_View } from './rechargewheelRewards_view';
import Utility from '../../../../../../script/utility/utility';
import ModuleManager from '../../../../../../script/framework/core/module_manager';
import CommonName from '../../../model/CommonName';
import AudioManager from '../../../../../../script/manager/audio_manager';
import { PostData } from '../../../model/HttpDataModel';
import { Http_Define } from '../../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../../model/HttpDataModel';

const { ccclass, property } = _decorator;

@ccclass('RechargewheelRewards')
export class RechargewheelRewards extends Module<RechargewheelRewards_View,null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/activity/rechargewheel/rechargewheelRewards";
        this.viewType = RechargewheelRewards_View;
        this.modelType = null;
        this.layer = ViewLayer.Mid
    }

    private preModuleName = ""
    private gameListData: any = []

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this.onClickBtnClose, this, false)
        this.view.recycle.InitializeChild = { target: this, eventHandler: this.refreshItem }
    }

    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)
        this.preModuleName = intentData
        this._reqGetLuckyWheelHis()
    }

    private refreshItem(idx: string, item: Node) {
        if (!this.gameListData) {
            return
        }
        const gameInfo = this.gameListData[parseInt(idx)]
        if (!gameInfo) {
            console.error("游戏数据错误",gameInfo)
            return
        }

        let lbl_time = find("lbl_time",item)
        if(typeof gameInfo.log_ts == 'number' && lbl_time?.isValid){
            lbl_time.getComponent(Label).string = Utility.instance.formatTime(gameInfo.log_ts)
        }

        let lbl_source = find("lbl_source",item)
        if(typeof gameInfo.wheel_type == 'number' && lbl_source?.isValid){
            let str_content = ""
            switch(gameInfo.wheel_type){
                case 1:
                    str_content = `Silver Wheel`
                    break
                case 2:
                    str_content = `Gold Wheel`
                    break
                case 3:
                    str_content = `Diamond Wheel`
                    break
                case 4:
                    str_content = `Special Wheel`
                    break
                default:
                    break
            }
            lbl_source.getComponent(Label).string = str_content
        }

        let lbl_amount = find("lbl_amount",item)
        if(typeof gameInfo.reward_type == 'number' && typeof gameInfo.reward_value == 'number' && lbl_amount?.isValid){
            let str_content = ""
            switch(gameInfo.reward_type){
                case 1:
                    str_content = "₹ "+Utility.instance.numThousandsFormat(`${gameInfo.reward_value/100}`)
                    break
                case 2:
                    str_content = `Silver Spin X${gameInfo.reward_value}`
                    break
                case 3:
                    str_content = `Gold Spin X${gameInfo.reward_value}`
                    break
                case 4:
                    str_content = `Diamond \nSpin X${gameInfo.reward_value}`
                    break
                case 5:
                    str_content = `Special \nSpin X${gameInfo.reward_value}`
                    break
                default:
                    break
            }
            lbl_amount.getComponent(Label).string = str_content
        }
    }

    private async showList(list:any) {
        if(!list) return
        if(!this.node?.isValid) return
        if(typeof list.total_reward == 'number'){
            this.view.goldNum.string = "₹ "+Utility.instance.numThousandsFormat(`${list.total_reward/100}`)
        }
        
        if(!list?.spin_his_list) return
        if(list.spin_his_list.length > 0){
            this.view.noRewareds.destroy()
        }
        else{
            this.view.noRewareds.active = true
        }
        this.gameListData = list.spin_his_list
        this.view.recycle.data = list.spin_his_list
        this?.view.recycle?.scrollView.stopAutoScroll()
        await this.view.recycle.loadSlots(list.spin_his_list.length)
        this?.view.recycle?.scrollView.scrollToTop(0)
    }

    private onClickBtnClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.showModule(CommonName.MODULE.RechargeWheel,this.preModuleName,()=>{
            ModuleManager.instance.destroyModule(CommonName.MODULE.RechargewheelRewards)
        })
    }

    private _reqGetLuckyWheelHis() {  
        let info: PostData = {
            Target: this,
            Url: Http_Define.getLuckyWheelHis,
            Params: {},
            Callback: this._rspGetLuckyWheelHis.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspGetLuckyWheelHis(msg: any) {
        if (msg && msg.code == 0) {
            if(msg.data){
                this.showList(msg.data)
            }
        }       
    }
}
