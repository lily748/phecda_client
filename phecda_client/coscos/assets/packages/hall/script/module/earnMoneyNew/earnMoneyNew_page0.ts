
import { _decorator, Button, Component, CurveValueAdapter, instantiate, Label, Node, PageView, Sprite, SpriteFrame, sys, tween, UITransform, Vec2 } from 'cc';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import CommonName from '../../model/CommonName';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { GameData } from '../../model/GameData';
import EventManager from '../../../../../script/manager/event_manager';
const { ccclass, property } = _decorator;

@ccclass('EarnMoneyNewPage0')
export class EarnMoneyNewPage0 extends Component {

    @property(Label)
    lab_total_rewards: Label = null;

    @property(Label)
    lab_today_rewards: Label = null;

    @property(Label)
    lab_withdraw: Label = null;

    @property(PageView)
    clubPageView: PageView = null;

    @property(Node)
    clubItemTempl: Node = null;

    @property(Node)
    pointTempl: Node = null;

    @property(Node)
    btnLeft: Node = null;

    @property(Node)
    btnRight: Node = null;

    @property(Node)
    btnClaim: Node = null;

    @property(Node)
    btnDetail: Node = null;

    @property(Node)
    contentPoints = null;

    @property(Node)
    telegram: Node = null;

    @property(Node)
    btn_share: Node = null;

    @property(Node)
    whatsApp = null;

    @property(Node)
    instagram = null;


    itemNodes = [];
    pointNodes = [];
    pageIndex = 0;

    lastSelectPoint = null;
    data = null;
    dir = 0;

    isInit = false;
    

    public init() {
        if (!this.isInit) {
            Utility.instance.onButtonClick(this.btnDetail, this.onBtnDetailClick, this);
            Utility.instance.onButtonClick(this.btnClaim, this.onBtnClaimClick, this);
            Utility.instance.onButtonClick(this.btnLeft, ()=>{this.onSelectPage(-1) }, this);
            Utility.instance.onButtonClick(this.btnRight, ()=>{this.onSelectPage(1) }, this);
            Utility.instance.onButtonClick(this.telegram, this.telegramClick, this);
            Utility.instance.onButtonClick(this.whatsApp, this.whatsappClick, this);
            Utility.instance.onButtonClick(this.instagram, this.instagramClick, this);
            Utility.instance.onButtonClick(this.btn_share, this.onShareClick, this);
            
            this.itemNodes[0] = this.clubItemTempl;
            this.pointNodes[0] = this.pointTempl;
            this.bindItemEvent(this.clubItemTempl, 0);
            this.clubPageView.node.on('page-turning', this.onPageTurningCb, this);
            this.isInit = true;
        }
       
       this._reqGetTeamInfo();
        
    }

    onShareClick() {
        ModuleManager.instance.showModule(CommonName.MODULE.EarnMoneyShare);
    }

    onBtnClaimClick() {
        this._reqClaimWithdrawable();
    }

    private telegramClick() {
        if (!this.data) return;
        sys.openURL(this.data?.invite_links?.telegram);
    }

    private whatsappClick() {
        if (!this.data) return;
        sys.openURL(this.data?.invite_links?.whatsapp);
    }

    private instagramClick() {
        if (!this.data) return;
        sys.openURL(this.data?.invite_links?.instagram);
    }


    private onBtnDetailClick() {
        ModuleManager.instance.showModule(CommonName.MODULE.EarnMoneyDetail);
    }

    

    //申请提现
    private _reqClaimWithdrawable(){
        ModuleManager.instance.showNetPrompt();
        let params = {}
        let info: PostData = {
            Target: this,
            Url: Http_Define.claimWithdrawable,
            Params: params,
            Callback: this._rspClaimWithdrawable.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspClaimWithdrawable(msg) {
        if (msg && msg.code == 0) {
            ModuleManager.instance.toastLong("withdraw success");
            this.btnClaim.getComponent(Sprite).grayscale = true;
            this.btnClaim.getComponent(Button).interactable = false;
            this.lab_withdraw.string = "₹0";
        }
    }

    private _reqGetTeamInfo(){
        ModuleManager.instance.showNetPrompt();
        let params = {}
        let info: PostData = {
            Target: this,
            Url: Http_Define.getTeamInfo,
            Params: params,
            Callback: this._rspGetTeamInfo.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspGetTeamInfo(msg) {
        if (msg && msg.code == 0) {
            this.data = msg.data;
            this.createClubs(msg.data.team_lvl_list);
            this.updateWithdrawInfo();
            this.preloadRulesImages();
        }
    }

    preloadRulesImages() {
        if(!this.node?.isValid) return
        GameData.setRuleUrls(this.data.rules);
        for (let i = 0; i < this.data.rules.length; i++) {
            let node = new Node();
            let sp = node.addComponent(Sprite);
            SpriteDataModel.SetSprite(sp, this.data.rules[i]);
        }
        // EventManager.instance.dispatch(CommonName.);
    }

    updateWithdrawInfo() {
        if(!this.node?.isValid) return
        let {withdraw_commission, total_commission, today_commission} = this.data;
        this.lab_today_rewards.string = "₹" + Utility.instance.numThousandsFormat(String(today_commission / 100));
        this.lab_total_rewards.string = "₹" + Utility.instance.numThousandsFormat(String(total_commission / 100));
        this.lab_withdraw.string = "₹" + Utility.instance.numThousandsFormat(String(withdraw_commission / 100));
        let gray = (withdraw_commission <= 0);
        this.btnClaim.getComponent(Sprite).grayscale = gray;
        this.btnClaim.getComponent(Button).interactable = !gray;

    }

    public createClubs(infos) {
        if(!this.node?.isValid) return
        if (this.itemNodes == null) return;
        for (let i = 0; i < infos.length; i++) {
            let item = this.itemNodes[i];
            if (item == null) {
                item = instantiate(this.clubItemTempl);
                this.bindItemEvent(item, i);
                this.clubPageView.addPage(item);
                this.itemNodes[i] = item;
            }
            let info = infos[i];
            if (i == infos.length-1) {
                info.maxLvl = true;
            } else {
                let nextInfo = infos[i+1];
                info.team = nextInfo.team;
                info.bet = nextInfo.bet;
                info.maxLvl = false;
            }
            this.updateItemInfo(item,info);
            item.active = true;
            
        } 
        
        this.createPoints(infos.length);
        this.clubPageView.scrollToPage((Number(this.data.agent_level)), 0);
        this.onSelectPoints(Number(this.data.agent_level));
    }

    updateItemInfo(item:Node, info:any) {
        if (this.data==null) return;
        if(!this.node?.isValid) return
        let {agent_level, total_num, total_bet} = this.data;
        let {lvl, team, bet, bet_rate, deposit_rate, invite_bonus,maxLvl} = info;
        let progress_member = item.getChildByPath("center/progress_member");
        let progressMask = progress_member.getChildByName("progress_mask").getComponent(UITransform);
        let memberLab = progress_member.getChildByName("progress_lab").getComponent(Label);
        
        let progress_bet = item.getChildByPath("center/progress_bet");
        let betMask = progress_bet.getChildByName("progress_mask").getComponent(UITransform);
        let betLab = progress_bet.getChildByName("progress_lab").getComponent(Label);

        progressMask.width = (total_num/team) * 419;
        memberLab.string = `(${total_num}/${team})`;


        betMask.width = (total_bet/bet) * 419;
        betLab.string = `(₹${Utility.instance.numThousandsFormat(String( total_bet / 100))}/₹${Utility.instance.numThousandsFormat(String(bet/ 100))})`;
        

        let teams = ["My team club", "Next Team Club", "Highest star"];
        let content_start = item.getChildByPath("top/bg_starts/content_start");
        let clubTipLab = teams[1];
        if (info.maxLvl) clubTipLab = teams[2];
        else if (agent_level >= lvl) clubTipLab = teams[0]; 
        item.getChildByPath("top/bg_club/lab1").getComponent(Label).string = clubTipLab;
        for (let i = 1; i <= lvl; i++) {
            content_start.getChildByPath(`star_off_${i}/star_on`).active = true;
        }

        let betRate = item.getChildByPath("bottom/bg_reate/coin1/labcontent/lab3").getComponent(Label);
        let depositRate = item.getChildByPath("bottom/bg_reate/coin2/lab3").getComponent(Label);
        let inviteBonus = item.getChildByPath("bottom/bg_reate/coin3/lab3").getComponent(Label);

        betRate.string = bet_rate + "%";
        depositRate.string = deposit_rate + "%";
        inviteBonus.string = "₹"+Utility.instance.numThousandsFormat(String(invite_bonus/100));
        this.showHighterTip(item, maxLvl);
    }

    showHighterTip(item, isHighter) {
        let center = item.getChildByName("center");
        for (let i = 0; i < center.children.length; i++) {
            let child = center.children[i];
            if (child.name == "tipLabel") child.active = isHighter;
            else child.active = !isHighter;
        }
    }

    bindItemEvent(item, index) {
        let btn_help = item.getChildByPath("top/btn_help");
        let btn_detail = item.getChildByPath("top/btn_detail");
        let tip_bg = item.getChildByName("tip_bg");
        Utility.instance.onButtonClick(item, ()=>{
            tip_bg.active = false;
        }, this);

        Utility.instance.onButtonClick(btn_help, ()=>{
            let active = tip_bg.active;
            tip_bg.active = !active;
        }, this);
        Utility.instance.onButtonClick(btn_detail, ()=>{
            ModuleManager.instance.showModule(CommonName.MODULE.EarnMoneySubordinateData);
        }, this);
    }

    createPoints(nums) {
        for (let i = 0; i < nums; i++) {
            let point = this.pointNodes[i];
            if (point == null) {
                point = instantiate(this.pointTempl);
                point.parent = this.contentPoints;
                this.pointNodes[i] = point;
            }
        }
        this.onSelectPoints(this.pageIndex);
    }

    onSelectPoints(index) {
        if (this.lastSelectPoint) this.lastSelectPoint.active = false;
        this.lastSelectPoint = this.contentPoints.children[index].getChildByName("point_on");
        this.lastSelectPoint.active = true;
        this.updatePageIndex(index);
    }

    updatePageIndex(index) {
        if (this.pageIndex < index) this.dir = 1;
        else if (this.pageIndex > index) this.dir = -1;
        this.pageIndex = index;
    }

    onSelectPage(index) {
        let curIndex = this.pageIndex;
        let maxIndex = this.clubPageView.content.children.length-1;
        
        if (index < 0) curIndex--;
        else if(index > 0) curIndex++;
        if (curIndex < 0) return;
        if (curIndex > maxIndex) return;
        this.updatePageIndex(curIndex);
        this.clubPageView.scrollToPage(this.pageIndex, 0.7);
        this.onSelectPoints(this.pageIndex);
        
    }

    onPageTurningCb(pageView: PageView) {
        this.updatePageIndex(pageView.getCurrentPageIndex());
        this.onSelectPoints(this.pageIndex);
        let item = this.itemNodes[this.pageIndex];
        let lab3 = item.getChildByPath("bottom/bg_reate/coin1/labcontent/lab3").getComponent(Label);
        let o_down = item.getChildByPath("bottom/bg_reate/coin1/labcontent/o_down");
        let o_up = item.getChildByPath("bottom/bg_reate/coin1/labcontent/o_up");

        let isLeft = (this.dir == -1);
        let infoIndex = isLeft ? (this.pageIndex + 1):(this.pageIndex-1);
        if (infoIndex <=0 ) infoIndex = 0;
        else if (infoIndex >= this.data.team_lvl_list.length-1) infoIndex = (this.data.team_lvl_list.length-1);
        let lastPageInfo = this.data.team_lvl_list[infoIndex];
        let curPageInfo = this.data.team_lvl_list[this.pageIndex];
        o_down.active = isLeft;
        o_up.active = !isLeft;

        
        lab3.node["_bet_rate"] = lastPageInfo.bet_rate;
        tween(lab3.node).to(0.5, {_bet_rate: curPageInfo.bet_rate}, {
            onUpdate : (target, ratio)=>{
                lab3.string = Number(target["_bet_rate"]).toFixed(2) + "%";
            }
        }).call(()=>{
            o_down.active = false;
            o_up.active = false;
        }).start();
    }
    
}
