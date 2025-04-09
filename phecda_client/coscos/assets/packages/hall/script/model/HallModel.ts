
import { _decorator, v3, Vec3} from 'cc';
import LoaclStorage from '../../../../script/manager/local_storage';
const { ccclass, property } = _decorator;

export enum JumpType {
    game = 1,            //游戏
    vendor = 2,          //厂商
    vip = 3,             //vip
    earn = 4,            //代理
    rank = 5,            //排行榜
    turntable = 6,       //转盘
    firstCharge = 7,     //首充
    dailyBonus = 8,      //签到
    monthlycard = 9,     //月卡
    recharge = 10,       //商城（充值）
    regression=13,       //回归活动
    treasureBowl = 11,    //聚宝盆
    freeBonus = 12,      // 奖金兑换
    rechargeWheel = 15,  // 充值轮盘
}

export enum HallActivityType {
    rank = 3,             //排行榜
    turntable = 4,        //转盘
    firstCharge = 5,      //首充
    dailybonus = 6,       //签到
    monthlycard = 7,      //月卡
    treasureBowl = 8,     //聚宝盆
    regression = 10,      //回归活动    
    dailyTask = 11,       //每日任务
    rechargeWheel = 12,   //充值轮盘
    socialMedia = 13,     //社媒弹窗
}

//数据上报事件类型
export enum EventTrack {
    load_enter_hall = 1,             //打开APP到进入大厅时间
    game_back = 2,                   //用户进入第三方游戏时间
    open_treasureEecharge = 6,       //从聚宝盆打开充值界面
    open_treasurebowl = 8,           //从大厅打开聚宝盆界面
}

@ccclass('HallModel')
export class _HallModel {

    //大厅列表数据
    public SetLocalHallData(info: any) {
        LoaclStorage.setJson("HallData", info);
    }

    public GetLocalHallData() {
        return LoaclStorage.getJson("HallData");
    }

    //商城数据
    public SetLocalShopData(info: any) {
        LoaclStorage.setJson("shopData", info);
    } 

    public GetLocalShopData() {
        return LoaclStorage.getJson("shopData");
    }

    //活动数据
    public SetLocalAcitvityData(info: any) {
        LoaclStorage.setJson("AcitvityData", info);
    }

    public GetLocalAcitvityData() {
        return LoaclStorage.getJson("AcitvityData");
    }

    public SetLocalActivityTime(name: string, info: any) {
        LoaclStorage.setString(name, info);
    }

    public GetLocalActivityTime(name: string) {
        return LoaclStorage.getString(name);
    }

    public SetLocalReport(name: string, info: any) {
        LoaclStorage.setString(name, info);
    }

    public GetLocalReport(name: string) {
        return LoaclStorage.getString(name);
    }

    public SetLocalGuestFlag(name: string, info: any) {
        LoaclStorage.setString(name, info);
    }

    public GetLocalGuestFlag(name: string) {
        return LoaclStorage.getString(name);
    }

    public SetLocalBtnPos(name: string, info: any) {
        LoaclStorage.setString(name, info);
    }

    public GetLocalBtnPos(name: string,defaultValue?: string) {
        return LoaclStorage.getString(name,defaultValue);
    }

    public GetRankPos() {
        let rankPos:any = JSON.parse(HallModel.GetLocalBtnPos("hallRankPos",JSON.stringify(HallModel.hallRankPos)))
        let x:number = 316
        let y:number = -472
        let z:number = 0
        if(rankPos && rankPos?.x){
            x = rankPos?.x
        }
        if(rankPos && rankPos?.y){
            y = rankPos?.y
        }
        if(rankPos && rankPos?.z){
            z = rankPos?.z
        }
        return new Vec3(x,y,z);
    }

    public hallSelectIndex:number = 1;
    public hallSelectIndexName:string = "Hot";
    public hallScrollViewPosY:number = 0;
    public promotionAcitvityList:any = null;
    public preloadEarnMoney: boolean = true;
    public isGetHallActList: boolean = true;
    public activeRankFlag: boolean = false;
    public buttomPreModule:string = ""
    public turntableFlag: boolean = false;
    public listRankRules = [];
    public quickLogin: boolean = true;
    public activeFirstChargeFlag: boolean = false;
    public isFirstCharg: boolean = false;
    public monthlyCardFlag: boolean = false;
    public treasureBowlFlag: boolean = false;
    public dailyTaskFlag: boolean = false;
    public rechargeWheelFlag: boolean = false;
    public preModule:string = ""

    public loadSceneInfo = {
        isFlag: true,
        load: 0,
        hall: 0,
    }
    public isWebViewOpen: boolean = false;
    public vendorID: string = "";
    public gameID: string = "";
    public hallRankPos = new Vec3(316,-472,0);
    public regressionFlag: boolean = false;
    public regressionPopOpenFlag: boolean = false;
    public eranInvitePos = new Vec3(0,-483,0);
}

export const HallModel = new _HallModel()


