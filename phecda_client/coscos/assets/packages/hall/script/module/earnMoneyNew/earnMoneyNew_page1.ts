
import { _decorator, Component, instantiate, Label, Node, PageView, RichText, Sprite, sys, UITransform } from 'cc';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import CommonName from '../../model/CommonName';
import { SpriteDataModel } from '../../model/SpriteDataModel';
const { ccclass, property } = _decorator;

@ccclass('EarnMoneyNewPage1')
export class EarnMoneyNewPage1 extends Component {

   @property(Node)
   btn_rule_help_0: Node = null;

   @property(Node)
   btn_rule_help_1: Node = null;

   @property(Node)
   btn_getMoney: Node = null;

   @property(Label)
   friendGetMondy:Label = null;

   @property(Label)
   selfGetMoney:Label = null;

   @property(Label)
   totalRewards:Label = null;

   @property(Label)
   totalInvites:Label = null;

   @property(Label)
   dailyInvitateTimes: Label = null;

   @property(Node)
   inviteInfoNode:Node = null;

   @property(Node)
   invitationsNode:Node = null;

    isInit = false;
    tipBg = null;
    getInviteRewardsData = null;

    public init() {
        if (!this.isInit) {
            this.initEvent();
            this.isInit = true;
        }
        this._reqGetInviteRewards();
    }

    private initEvent() {
        let btn_reward = this.node.getChildByPath("view/content/btn_reward");
        let btn_invite = this.node.getChildByPath("view/content/btn_invite");
        let btn_getHelp = btn_invite.getChildByName("btn_getHelp");
        this.tipBg = btn_getHelp.getChildByName("tip_bg");
        Utility.instance.onButtonClick(this.btn_rule_help_0, ()=>{ this.ruleHelpClick(0); }, this, false);
        Utility.instance.onButtonClick(this.btn_rule_help_1, ()=>{ this.ruleHelpClick(1); }, this, false);
        Utility.instance.onButtonClick(this.btn_getMoney, this.onShareClick, this, false);
        
        Utility.instance.onButtonClick(btn_getHelp, ()=>{ 
            let active = this.tipBg.active;
            this.tipBg.active = !active;
        }, this, false);

        Utility.instance.onButtonClick(btn_reward, ()=>{
            ModuleManager.instance.showModule(CommonName.MODULE.EarnMoneyDetail);
        }, this, false);
        Utility.instance.onButtonClick(btn_invite, ()=>{
            ModuleManager.instance.showModule(CommonName.MODULE.EarnMoneySubordinateData);
        }, this, false);
    }

    onShareClick() {
        ModuleManager.instance.showModule(CommonName.MODULE.EarnMoneyShare);
    }

    private ruleHelpClick(index) {
        if(this.getInviteRewardsData==null) return;
        let url = null;
        if (index == 0) url = this.getInviteRewardsData?.invite_reward_rules;
        else if(index == 1) url = this.getInviteRewardsData?.invite_task_rules;
        if(url==null) return;
        ModuleManager.instance.showModule(CommonName.MODULE.EarnMoneyRules, {img_url:url});
    }

    private _reqGetInviteRewards(){
        ModuleManager.instance.showNetPrompt();
        let params = {}
        let info: PostData = {
            Target: this,
            Url: Http_Define.getInviteRewards,
            Params: params,
            Callback: this._rspGetInviteRewards.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspGetInviteRewards(msg) {
        if (msg && msg.code == 0) {
            if(!this.node?.isValid) return
            this.getInviteRewardsData = msg.data;
            this.preloadImgs();
            this.updateInviteInfo(msg.data);
            this.updateList(msg.data);
            this.tipBg.getChildByName("Label").getComponent(Label).string = `You have invited a total of ${msg.data.total_invites} friends, of which ${msg.data.valid_invites} are valid users.`;
        }
    }

    private preloadImgs() {
        if (!this.node?.isValid) return;
        let url0 = this.getInviteRewardsData?.invite_reward_rules;
        let url1 = this.getInviteRewardsData?.invite_task_rules;
        let node = new Node();
        let sp = node.addComponent(Sprite)
        if ( url0!=null && url0!="") SpriteDataModel.SetSprite(sp, url0);
        if ( url1!=null && url1!="") SpriteDataModel.SetSprite(sp, url1);
    }

    private updateInviteInfo(data) {
        if(!this.node?.isValid) return
        this.selfGetMoney.string = "₹"+ Utility.instance.numThousandsFormat(String(data.inviter_reward/100));
        this.friendGetMondy.string = "₹"+ Utility.instance.numThousandsFormat(String(data.invitees_reward/100));
        this.totalRewards.string =  "₹" + Utility.instance.numThousandsFormat(String(data.total_rewards/100));
        this.totalInvites.string = data.total_invites;
        this.dailyInvitateTimes.string = `Daily invitate times: ${data.invite_num_daily}/${data.invite_reward_daily}`;
    }

    private updateList(data) {
        if(!this.node?.isValid) return
        let progressNode = this.invitationsNode.getChildByName("progressNode");
        let lab_tip = this.invitationsNode.getChildByName("lab_tip").getComponent(RichText);
        let totalBonus = 0;
        // let totalProgress = 0;
        let fontIndex = 0;
        let friendsNums = 0;
        for (let i = 0; i < data.list.length; i++) {
            let info = data.list[i];
            let money = progressNode.getChildByName("lab_money_"+i).getComponent(Label);
            let contentLab = progressNode.getChildByName("content_labs_"+i);
            let lab_cur = contentLab.getChildByName("lab_cur").getComponent(Label);
            let lab_total = contentLab.getChildByName("lab_total").getComponent(Label);

            money.string = "₹" + Utility.instance.numThousandsFormat(Math.floor(info.bonus / 100)+"");
            
            lab_cur.string = data.invite_num;
            lab_total.string = "/" + info.invite_num;
            totalBonus += Math.floor(info.bonus / 100);
            if(i == data.list.length-1) {
                // totalProgress = info.invite_num;
                friendsNums = info.invite_num;
            }

            if(data.invite_num >= info.invite_num) {
                fontIndex = i; 
            }
        }

        let pointWidth = 31;
        let progress_bg = progressNode.getChildByPath("progress/progress_bg");
        let fontPoint = progress_bg.getChildByName("jindu_"+fontIndex);
        let mask = progress_bg.getChildByName("mask");
        let width = fontPoint.getPosition().x - mask.getPosition().x;

        if (fontIndex == 0 && data.invite_num < data.list[0].invite_num) {
            width = data.invite_num/data.list[0].invite_num*(width-pointWidth/2);
        } 
        if (fontIndex < data.list.length-1) {
            let nextIndex = fontIndex+1;
            let nextPoint = progress_bg.getChildByName("jindu_"+nextIndex);
            let disX = nextPoint.getPosition().x - fontPoint.getPosition().x - pointWidth;
            let nextInviteNum = data.list[nextIndex].invite_num;
            let fontInviteNum = data.list[fontIndex].invite_num;
            width += (((data.invite_num-fontInviteNum) / (nextInviteNum-fontInviteNum)) * disX);
            if(data.invite_num != fontInviteNum) width += pointWidth/2;

        }
        mask.getComponent(UITransform).width = width;
        lab_tip.string = `<color=#ffffff>Invite <color=#f8c136>${friendsNums}</c> friends to get <color=#f8c136>₹${Utility.instance.numThousandsFormat(String(totalBonus))}</c></color>`
    }





 

   
    
    
}
