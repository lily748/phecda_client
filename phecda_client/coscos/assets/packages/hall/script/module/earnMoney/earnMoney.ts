
import { _decorator, Component,Node, Toggle, instantiate, Label, find, ProgressBar, Button, Sprite, EventTouch,ScrollView, game,RenderTexture ,view,UITransform,sys,director,Camera,v3,Vec2,Vec3,math} from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { EarnMoneyView } from './earnMoney_view';
import CommonName from '../../model/CommonName';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { GameConfig } from '../../../../../script/com/game_config';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { GameSDKInterface } from '../../../../../script/game/GameSDKInterface';
import { HallModel } from '../../model/HallModel';
const { ccclass, property } = _decorator;


@ccclass('EarnMoney')
export class EarnMoney extends Module<EarnMoneyView, null>{

    private readonly about = "about"
    private readonly histroy = "histroy"
    private readonly daily = "daily"
    private readonly earn = "earn"
    private maxDate = Math.floor(Date.now() / 1000);
    private minDate = Math.floor(Date.now() / 1000);
    private bettingAmount = 0;
    private myAgentList = [];
    private startPos: Vec2 = new Vec2()
    private offset: Vec2 = new Vec2()
    private historyDate={
        month:[],
        week:[]
    }
    private shareInfo: string = "";

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/earnMoney/public_earnMoney";
        this.viewType = EarnMoneyView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        let scrollView = this.view.aboutList.node.getComponent(ScrollView);
        if(scrollView?.isValid){
            scrollView.node.on(ScrollView.EventType.SCROLL_BEGAN, () => game.frameRate = 60, this)
            scrollView.node.on(ScrollView.EventType.SCROLL_ENDED, () => game.frameRate = 45, this)
        }

        this.view.hallTemplate.setSelectToggle(CommonName.MODULE.EarnMoney);
        this.view.topToggleGroup.setListener((sender: Toggle) => { this.onTopChecked(sender.node.name) });
        Utility.instance.onButtonClick(this.view.inviteNode, this._clickInvite, this);
        // Utility.instance.onButtonClick(this.view.descInvite, this._clickInvite, this);
        // Utility.instance.onButtonClick(this.view.btnCopy, this._clickCopyLink, this);
        // Utility.instance.onButtonClick(this.view.btn_WhatsApp, this._clickWhatsApp, this);
        // Utility.instance.onButtonClick(this.view.btn_Telegram, this._clickTelegram, this);
        // Utility.instance.onButtonClick(this.view.btn_Save, this._clickSave, this);
        // Utility.instance.onButtonClick(this.view.btn_Copy, this._clickCopyLink, this);
        this.view.togDate.setListener((sender: Toggle) => { this.onTopDateChecked(sender.node.name) });
        let btn1 = find("amount/from/btn1", this.view.dailyScrollView.content);
        Utility.instance.onButtonClick(btn1, () => { this._clickAgentInfo(false) }, this);
        let btn2 = find("amount/from/btn2", this.view.dailyScrollView.content);
        Utility.instance.onButtonClick(btn2, () => { this._clickAgentInfo(true) }, this);
        this._aboutInfo();

        this.view.descInvite.position = new Vec3(HallModel.eranInvitePos)
        this.view.descInvite.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.view.descInvite.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.view.descInvite.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onShow() {

    }

    onDestroy() {
        game.frameRate = 45
    }

    initInfo() {
        this.view.aboutList.node.active = false;
        this.view.aboutList.scrollToTop();
        // this.view.earnList.node.active = false;
        // this.view.earnList.scrollToTop();
        this.view.historyNode.active = false;
        this.view.historyList.scrollToTop();
        this.view.dailyScrollView.node.active = false;
        this.view.dailyScrollView.scrollToTop();
    }

    /**
     * 顶部栏响应
     * @param name  节点name
     */
    private onTopChecked(name: string) {
        this.initInfo();
        AudioManager.instance.playButtonSound();
        switch (name) {
            case this.about:
                this._aboutInfo();
                break;
            case this.histroy:
                this._historyInfo();
                break;
            case this.daily:
                this._dailyInfo();
                break;
            case this.earn:
                this._earnInfo();
                break;
            default:
                this._aboutInfo();
                break;
        }
    }

    //更新about数据
    private _updateAboutInfo(msg: any) {
        if (!this.view) return;
        let levelInfo = msg.levels;
        this.view.levelList.removeAllChildren();
        if (!levelInfo) return;
        let title = instantiate(this.view.titleNode);
        title.setParent(this.view.levelList);
        for (let i = 0; i < levelInfo.length; i++) {
            let item = instantiate(this.view.levelItem);
            item.setParent(this.view.levelList);
            item.active = true;
            let desc = item.getChildByName("desc");
            let level = desc.getChildByName("level").getComponent(Label);
            level.string = levelInfo[i].level;
            let amount = desc.getChildByName("amount").getComponent(Label);
            amount.string = Utility.instance.numThousandsFormat(levelInfo[i].bet_amount.toString());
            let member = desc.getChildByName("member").getComponent(Label);
            member.string = levelInfo[i].active_member;
            let rate = desc.getChildByName("rate").getComponent(Label);
            rate.string = levelInfo[i].rate;
        }

        this._updateExampleInfo(msg.rule_suffix);
    }

    private _aboutInfo() {
        this.view.aboutList.node.active = true;
        this._reqGetAgentCfg();
    }

    private _earnInfo() {
        // this.view.earnList.node.active = true;
        this._reqGetShareUrl();
    }

    private _historyInfo() {
        this.view.historyNode.active = true;
        this._reqGetHisRebate();
    }

    private _dailyInfo() {
        this.view.dailyScrollView.node.active = true;
        this._updateDailayInfo();
    }

    //更新说明信息
    private _updateExampleInfo(url: string) {
        let imgUrl = GameConfig.resConfigUrl + url;
        SpriteDataModel.SetSprite(this.view.exampleIcon, imgUrl);
    }

    //点击邀请
    private _clickInvite() {
        ModuleManager.instance.showModule(CommonName.MODULE.EarnMoneyShare,CommonName.MODULE.EarnMoney)
    }

    //设置ToggleisChecked
    private _setToggleisChecked(name: string) {
        for (const child of this.view.topToggleGroup.node.getChildByName("info").children) {
            if (child.name == name) {
                child.getComponent(Toggle).isChecked = true;
                break;
            }
        }
    }

    private onTouchStart(event: EventTouch) {
        this.startPos = event.getUILocation();
        this.offset = this.startPos.clone().subtract(new Vec2(this.view.descInvite.position.x, this.view.descInvite.position.y));
    }

    private onTouchMove(event: EventTouch) {
        let currentPos = event.getUILocation();
        let newPosition = currentPos.clone().subtract(this.offset);
        this.view.descInvite.position = new Vec3(newPosition.x, newPosition.y)
    }

    private onTouchEnd(event: EventTouch) {
        let currentPos = event.getUILocation();
        let dis = math.Vec2.distance(currentPos, this.startPos);
        if (dis < 40) {
            this._clickInvite()
        }
        HallModel.eranInvitePos = new Vec3(this.view.descInvite.position)
    }

    //请求分享链接
    private _reqGetShareUrl() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getShareUrl,
            Params: {},
            Callback: this._rspGetShareUrl.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspGetShareUrl(msg: any) {
        if (msg && msg.code == 0) {
            this.shareInfo = msg.data.share_info || "";
            this._updateEarn(msg.data.link_url);
        }
    }

    //更新推广链接信息
    private _updateEarn(link_url: string) {
        if (!this.view) return;
        // this.view.lbl_link.string = link_url;
        // this.view.qrCode.data = link_url;
        // this.view.qrCode.applayChanged();
    }

    //点击复制分享链接
    private _clickCopyLink() {
        // Utility.instance.copyTextToClipboard(this.view.lbl_link.string);
    }

    private _clickWhatsApp() {
        this._JumpShare();
    }

    private _clickTelegram() {
       this._JumpShare();
    }

    private _clickSave() {
       this.onSave();
    }

    private _JumpShare() {
        let info = {
            shareType: 0,
            title: "11game",
            shareUrl: this.shareInfo,
            imgPath: ""
        }
        GameSDKInterface.OtherShare(JSON.stringify(info));
    }

    private onSave() {
        let rt = new RenderTexture()
        rt.reset({
            width: view.getVisibleSize().width,
            height: view.getVisibleSize().height
        })

        let sceneCamera = director.getScene().getComponentInChildren(Camera)
        let cam = instantiate(sceneCamera.node).getComponent(Camera)
        cam.node.setParent(sceneCamera.node.parent)
        cam.node.scale = v3(1, -1, 1)
        cam.targetTexture = rt

        this.scheduleOnce(() => {
            this.captureScreen(rt)
            cam?.node?.destroy()
        }, 0.1)
    }

    private captureScreen(rt: RenderTexture) {
        let width = this.view.middle.getComponent(UITransform).width
        let height = this.view.middle.getComponent(UITransform).height
        let x = view.getVisibleSize().width/2 - width/2 - this.view.middle.position.x 
        let y = view.getVisibleSize().height/2 - height/2 - this.view.middle.position.y

        let buffer = rt.readPixels(x, y, width, height)
        if (sys.isNative) {
            let path = jsb.fileUtils.getWritablePath() + "screenShot1.png"
            this.savaAsImage(buffer, width, height, path)
        }
    }

    savaAsImage(buffer, width, height, filePath) {
        // @ts-ignore
        if (sys.isNative && jsb.saveImageData) {
            // @ts-ignore
            let success = jsb.saveImageData(buffer, width, height, filePath);
            if (success) {
                GameSDKInterface.SaveImageToPhoto(filePath)
            }
        }
    }

    //请求代理级别配置
    private _reqGetAgentCfg() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getAgentCfg,
            Params: {},
            Callback: this._rspGetAgentCfg.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    //代理级别配置返回
    private _rspGetAgentCfg(msg: any) {
        if (msg && msg.code == 0) {
            this._updateAboutInfo(msg.data);
        }
    }

    //请求历史返利信息
    private _reqGetHisRebate() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getHisRebate,
            Params: {},
            Callback: this._rspHisRebate.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    //历史返利信息返回
    private _rspHisRebate(msg: any) {
        if (!this.view) return;
        if (msg && msg.code == 0) {
            this.view.regDay.string = "Total Rebates from " + msg.data.reg_day;
            this.view.totalRebate.string = "₹" + Utility.instance.numThousandsFormat(msg.data.total_rebates.toString());
            this.historyDate.month = msg.data.month;
            this.historyDate.week = msg.data.week;
            let week = find("week", this.view.togDate.node.getChildByName("date"));
            week.getComponent(Toggle).isChecked = true;
            this._updateHistoryInfo(true);
        }
    }

    //更新history信息
    private _updateHistoryInfo(isWeek: boolean) {
        this.view.historyList.content.removeAllChildren();
        let list = [];
        if (isWeek) {
            list = this.historyDate.week;
        } else {
            list = this.historyDate.month;
        }
        for (let i = 0; i < list.length; i++) {
            let item = instantiate(this.view.historyItem);
            item.setParent(this.view.historyList.content);
            item.active = true;
            let time = item.getChildByName("time").getComponent(Label);
            time.string = list[i].date;
            let amount = item.getChildByName("amount").getComponent(Label);
            amount.string = "₹" + Utility.instance.numThousandsFormat(list[i].rebates.toString());
        }
    }

    private onTopDateChecked(name: string) {
        if (name == "week") {
            this._updateHistoryInfo(true);
        } else {
            this._updateHistoryInfo(false);
        }
    }

    //更新DailayInfo
    private _updateDailayInfo() {
        //请求团队数据
        this._reqGetMyTeam();
        //获取代理7日数据
        let timestamp = Math.floor(Date.now() / 1000);
        this._reqGetDailyAgentInfo(timestamp);
    }

    //更新DailyMyTeam
    private _updateDailyMyTeamInfo(msg: any) {
        if (!this.view) return;
        let myTeam = find("myTeam", this.view.dailyScrollView.content);
        if (msg.active_max == -1) {
            msg.active_max = "∞"
        }
        if (msg.bet_max == -1) {
            msg.active_max = "∞"
        }
        find("info/lb1", myTeam).getComponent(Label).string = msg.active_min.toString();
        find("info/lb2", myTeam).getComponent(Label).string = msg.active + "/" + msg.active_max;
        find("info/lb3", myTeam).getComponent(Label).string = msg.active_max.toString();
        find("info/lb4", myTeam).getComponent(Label).string = Math.floor((msg.bet_min / 100)).toString();
        find("info/lb5", myTeam).getComponent(Label).string = Math.floor((msg.bet / 100)) + "/" + Math.floor((msg.bet_max / 100));
        find("info/lb6", myTeam).getComponent(Label).string = Math.floor((msg.bet_max / 100)).toString();

        let progressBar1 = find("info/progressBar1", myTeam).getComponent(ProgressBar);
        progressBar1.progress = msg.active / msg.active_max;
        let progressBar2 = find("info/progressBar2", myTeam).getComponent(ProgressBar);
        progressBar2.progress = Math.floor((msg.bet / 100)) / Math.floor((msg.bet_max / 100));

        let rate = find("myTeam/rate", this.view.dailyScrollView.content);
        find("lb1", rate).getComponent(Label).string = msg.rate + "%" + "\nRate";
        find("lb2", rate).getComponent(Label).string = msg.rate_max + "%" + "\nRate";

        find("user/num", myTeam).getComponent(Label).string = msg.bind.toString();
    }

    //更新DailyAmount
    private _updateDailyAmountInfo(msg: any) {
        if (!this.view) return;
        let amount = find("amount", this.view.dailyScrollView.content);
        let betting = find("betting", amount);
        betting.getComponent(Label).string = Math.floor((msg.betting_amount / 100)).toString();
        let rebate = find("rebate", amount);
        rebate.getComponent(Label).string = Math.floor((msg.rebate_amount / 100)).toString();
        let registers = find("registers", amount);
        registers.getComponent(Label).string = msg.register_members.toString();
        let cash = find("cash", amount);
        cash.getComponent(Label).string = msg.cash_in.toString();
    }

    //更新DailyReport
    private _updateDailyReportInfo(msg: any) {
        if (!this.view) return;
        this.view.dailyReport.removeAllChildren();
        let time = find("report/msg/time", this.view.dailyScrollView.content);
        time.getComponent(Label).string = this._getTimeDate(msg.date, true);
        let list = msg.under_agent;
        if (!list) return;
        for (let i = 0; i < list.length; i++) {
            let item = instantiate(this.view.dailyReportItem);
            item.setParent(this.view.dailyReport);
            item.active = true;
            let id = item.getChildByName("id").getComponent(Label);
            id.string = list[i].agent_id;
            let level = item.getChildByName("coin_num").getComponent(Label);
            level.string = "₹" + Math.floor(list[i].bet_amount / 100);
            let amount = item.getChildByName("rate_num").getComponent(Label);
            amount.string = list[i].rate + "%";
            let member = item.getChildByName("member_num").getComponent(Label);
            member.string = list[i].active_member;
            let rate = item.getChildByName("rebate_num").getComponent(Label);
            rate.string = "₹" + Math.floor(list[i].rebate / 100);
            let btn = item.getComponent(Button).node;
            Utility.instance.onButtonClick(btn, () => { this._reqGetUnderAgentDetail(msg.date,list[i].agent_id) }, this);
        }
    }

    //更新表格(柱状图)数据
    private _updateFromDateInfo(msg: any) {
        if (!this.view) return;
        let from = find("amount/from", this.view.dailyScrollView.content);
        let date = find("date", from);
        let time = find("time", date);
        date.removeAllChildren();
        let barChart = find("barChart", from);
        let progressBar1 = find("progressBar1", barChart);
        barChart.removeAllChildren();

        for (let i = 0; i < msg.length; i++) {
            let item = instantiate(time);
            item.setParent(date);
            item.getComponent(Label).string = this._getTimeDate(msg[i].date, false);
            let item1 = instantiate(progressBar1);
            item1.setParent(barChart);
            item1.getComponent(ProgressBar).progress = (msg[i].betting_amount / 100) / this.bettingAmount;
            let btn = find("Button", item1);
            Utility.instance.onButtonClick(btn, () => { this._updateAgentInfo(msg[i].date) }, this);
        }
    }

    /**
     * 请求团队数据
     */
    public _reqGetMyTeam() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getMyTeam,
            Params: {},
            Callback: this._rspGetMyTeam.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    //请求团队数据返回
    private _rspGetMyTeam(msg: any) {
        if (msg && msg.code == 0) {
            this._updateDailyMyTeamInfo(msg.data);
        }
    }

    /**
     * 请求代理7日数据
     * @param data 日期
     */
    public _reqGetDailyAgentInfo(data: number) {
        let params = {
            date: data,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getDailyAgentInfo,
            Params: params,
            Callback: this._rspGetDailyAgentInfo.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    //代理7日数据返回
    private _rspGetDailyAgentInfo(msg: any) {
        if (msg && msg.code == 0) {
            if (msg.data && msg.data.agent_list && msg.data.agent_list.length > 0) {
                this.myAgentList = msg.data.agent_list;
                this._updateAgentInfo(msg.data.agent_list[0].date);
                this._setAgentListDate(msg.data.agent_list);
                this._updateFromDateInfo(msg.data.agent_list);
            }
        }
    }

    /**
     * 请求下级详细信息
     * @param data 日期
     * @param member_id 下级ID
     */
    public _reqGetUnderAgentDetail(data: number, member_id: number) {
        ModuleManager.instance.showNetPrompt();
        let params = {
            date: data,
            member_id: member_id
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getUnderAgentDetail,
            Params: params,
            Callback: this._rspGetUnderAgentDetail.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //下级详细信息返回
    private _rspGetUnderAgentDetail(msg: any) {
        if (msg && msg.code == 0) {
            ModuleManager.instance.showModule(CommonName.MODULE.MemberDetails, msg.data, () => { });
        }
    }

    /**
    * 请求获取下级数据
    * @param data 日期
    */
    public _reqGetUnderAgentList(data: number) {
        ModuleManager.instance.showNetPrompt();
        let params = {
            date: data,
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getUnderAgentList,
            Params: params,
            Callback: this._rspGetUnderAgentList.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    //获取下级数据返回
    private _rspGetUnderAgentList(msg: any) {
        if (msg && msg.code == 0) {
            if (msg.data) {
                this._updateDailyReportInfo(msg.data);
            }
        }
    }

    /**
     * 更新代理选中日期数据
     * @param data 日期
     */
    private _updateAgentInfo(data: number) {
        this._updateAgentAmount(data);
        this._reqGetUnderAgentList(data);
    }

    /**
     * 时间戳转换日期
     * @param timestamp 时间戳
     * @param isYear 显示年
     * @returns 
     */
    private _getTimeDate(timestamp: any, isYear: boolean) {
        let date = new Date(timestamp * 1000);
        let year = date.getFullYear() < 10 ? "0" + date.getFullYear() : "" + date.getFullYear();
        let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : "" + (date.getMonth() + 1);
        let day = date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();
        if (isYear) {
            return `${year}-${month}-${day}`;
        } else {
            return `${month}-${day}`;
        }
    }

    //点击获取代理数据
    private _clickAgentInfo(isMax: boolean) {
        if (isMax) {
            this._reqGetDailyAgentInfo(this.maxDate);
        } else {
            this._reqGetDailyAgentInfo(this.minDate);
        }
    }

    //设置代理日期
    private _setAgentListDate(msg: any) {
        let agentListDate = [];
        let bettingListDate = [];
        for (let i = 0; i < msg.length; i++) {
            agentListDate.push(msg[i].date);
            bettingListDate.push(msg[i].betting_amount);
        }
        let max = Math.max(...agentListDate);
        let min = Math.min(...agentListDate);
        this.maxDate = max + (24 * 60 * 60 * 7);
        this.minDate = min - (24 * 60 * 60);
        this._setAgentBtnState(max);

        this.bettingAmount = Math.max(...bettingListDate);
        this._updateFromInfo();
    }

    //更新表格数据
    private _updateFromInfo() {
        if (!this.view) return;
        this.bettingAmount = Math.floor(this.bettingAmount / 100);
        if (this.bettingAmount <= 40000) {
            this.bettingAmount = 40000;
        } else if (this.bettingAmount > 40000 && this.bettingAmount <= 100000) {
            this.bettingAmount = 100000;
        } else if (this.bettingAmount > 100000 && this.bettingAmount <= 200000) {
            this.bettingAmount = 200000;
        }
        let lb1 = find("amount/from/lb1", this.view.dailyScrollView.content);
        let count1 = Math.floor(this.bettingAmount / 1000);
        lb1.getComponent(Label).string = count1 + "K";

        let lb2 = find("amount/from/lb2", this.view.dailyScrollView.content);
        let count2 = Math.floor(count1 / 2);
        lb2.getComponent(Label).string = count2 + "K";
    }

    //设置查询按钮状态
    private _setAgentBtnState(time: number) {
        let str1 = this._getTimeDate(time, true);
        let str2 = this._getTimeDate(Math.floor(Date.now() / 1000), true);
        let btn2 = find("amount/from/btn2", this.view.dailyScrollView.content);
        if (str1 == str2) {
            btn2.getComponent(Button).interactable = false;
            btn2.getComponent(Sprite).grayscale = true;
        } else {
            btn2.getComponent(Button).interactable = true;
            btn2.getComponent(Sprite).grayscale = false;
        }
    }

    //更新代理amount数据
    private _updateAgentAmount(data: number) {
        let isFind = false;
        let msg = this.myAgentList;
        for (let i = 0; i < msg.length; i++) {
            if (data == msg[i].date) {
                this._updateDailyAmountInfo(msg[i]);
                isFind = true;
                break;
            }
        }
        if (!isFind) {
            this._updateDailyAmountInfo(msg[0]);
        }
    }
}


