
import { _decorator, Component,EventTouch } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import EventManager from '../../../../../script/manager/event_manager';
import { HallModel,JumpType } from '../../model/HallModel';
import { conmmon_http } from '../../../../../script/net/common_http';
import { CommonFun } from '../../model/CommonFun';
const { ccclass, property } = _decorator;

@ccclass('activityRtxClickEvent')
export default class activityRtxClickEvent extends Component {

    /**
     * 富文本跳转
     * @param eventTouch 
     * @param param 
     * @returns 
     */
    jumpFun(eventTouch:EventTouch, param:string){
        let type = parseInt(param)
        if(isNaN(type)) return
        if(type == JumpType.vip){  //跳转VIP
            EventManager.instance.dispatch(CommonName.EVENT.GoToVIP);       
        }
        else if(type == JumpType.earn){  //跳转代理页面
            ModuleManager.instance.showModule(CommonFun.GetEarnMoneyName(),null,()=>{
                ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
            })
        }
        else if(type == JumpType.rank){  //跳转排行榜
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityRank,"Promo",()=>{
                ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
            })
        }
        else if(type == JumpType.turntable){  //跳转转盘
            ModuleManager.instance.showModule(CommonName.MODULE.TurnTable,CommonName.MODULE.Promotion,()=>{
                ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
            })
        }
        else if (type == JumpType.firstCharge) {  //跳转首充
            HallModel.isFirstCharg = true
            ModuleManager.instance.showModule(CommonName.MODULE.Recharge,CommonName.MODULE.Promotion,()=>{
                ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
            })
        }
        else if (type == JumpType.dailyBonus) {  //跳转签到
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityDailyBonus);
        }
        else if (type == JumpType.monthlycard) {  //跳转月卡
            ModuleManager.instance.showModule(CommonName.MODULE.MonthlyCard);
        }
        else if (type == JumpType.regression) {  //跳转回归活动
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityRegression);
        }
        else if (type == JumpType.treasureBowl) {  //聚宝盆
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityTreasureBowl,CommonName.MODULE.Promotion);
        }
        else if (type == JumpType.rechargeWheel) {  //充值轮盘
            ModuleManager.instance.showModule(CommonName.MODULE.RechargeWheel,CommonName.MODULE.Promotion,()=>{
                ModuleManager.instance.destroyModule(CommonName.MODULE.Promotion)
            })
        }
    }
}