
import { _decorator, Component, Node,Label,Sprite,sys, RichText } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { EmailDetailsView } from './emailDetails_view';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { HallModel,JumpType } from '../../model/HallModel';
import { Email } from './email';
import { CommonFun } from '../../model/CommonFun';

const { ccclass, property } = _decorator;


 
@ccclass('EmailDetails')
export class EmailDetails extends Module<EmailDetailsView, null> {

    private _mailID = 0;            //邮件ID
    private jump_type = 0;         //跳转类型

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/email/public_emailDetails";
        this.viewType = EmailDetailsView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this._clickBack, this);
        Utility.instance.onButtonClick(this.view.btn_delete, this._clickDelete, this);
        Utility.instance.onButtonClick(this.view.btn_jump, this._clickJump, this);
        Utility.instance.onButtonClick(this.view.btn_receive, this._clickReceive, this);
    }

  
    onShow(msg: any) {
        if (msg) {
            this._updateInfo(msg);
        }
    }

    private _clickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.EmailDetails);
    }

    private _clickDelete() {
        this._reqDelMail(this._mailID);
    }

    private _clickReceive() {
        this._reqReceiveMailReward(this._mailID);
    }

    private _clickJump() {
        if (this.jump_type == JumpType.vip) {  //跳转VIP            
            this._showModule(CommonName.MODULE.Vip, CommonName.MODULE.Hall);
        }
        else if (this.jump_type == JumpType.earn) {  //跳转代理页面
            this._showModule(CommonFun.GetEarnMoneyName(), null);
        }
        else if (this.jump_type == JumpType.rank) {  //跳转排行榜
            this._showModule(CommonName.MODULE.ActivityRank, null);
        }
        else if (this.jump_type == JumpType.turntable) {  //跳转转盘
            this._showModule(CommonName.MODULE.TurnTable, CommonName.MODULE.Hall);
        }
        else if (this.jump_type == JumpType.firstCharge) {  //跳转首充
            HallModel.isFirstCharg = true;
            ModuleManager.instance.showModule(CommonName.MODULE.Recharge);
        }
        else if (this.jump_type == JumpType.dailyBonus) {  //跳转签到
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityDailyBonus);
        }
        else if (this.jump_type == JumpType.monthlycard) {  //跳转月卡
            ModuleManager.instance.showModule(CommonName.MODULE.MonthlyCard);
        }
        else if (this.jump_type == JumpType.recharge) {  //跳转充值
            ModuleManager.instance.showModule(CommonName.MODULE.Recharge);
        }
        else if (this.jump_type == JumpType.regression) {  //跳转回归活动
            ModuleManager.instance.showModule(CommonName.MODULE.ActivityRegression);
        }
    }

    private _showModule(moduleName: string, intentData?: any) {
        ModuleManager.instance.showModule(moduleName, intentData, () => {
            ModuleManager.instance.destroyModule(CommonName.MODULE.EmailDetails);
            ModuleManager.instance.destroyModule(CommonName.MODULE.Email);
            ModuleManager.instance.destroyModule(CommonName.MODULE.Hall);
        })
    }

    private _updateInfo(msg: any) {
        this._mailID = msg.mail_id;
        this.jump_type=msg.jump_type;
        this.view.lbl_title.getComponent(Label).string = msg.title;
        this.view.lbl_time.getComponent(Label).string = Utility.instance.getTimeDateStr(msg.create_at,1);
        this.view.rich_text.string = msg.content;
        this.view.lbl_jump.getComponent(Label).string = msg.jump_btn;
        if (msg.picture.length > 0) {
            SpriteDataModel.SetSprite(this.view.sp_img, msg.picture);
        } else {
            this.view.sp_img.node.active = false;
        }

        if (msg.cash_balance > 0) {
            this.view.rewards.active = true;
            if (msg.reward_status == 1) {
                this.view.btn_receive.active = false;
            } else {
                this.view.sp_receive.node.active = false;
            }
            this.view.lbl_coin.getComponent(Label).string = `${msg.cash_balance / 100}`;
        } else {
            this.view.rewards.active = false;
        }

        if (msg.jump_btn.length == 0) {
            this.view.btn_jump.active = false;
        }
    }

    //删除邮件
    public _reqDelMail(mail_id:number) {
        let params = {
            mail_id: mail_id
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.delMail,
            Params: params,
            Callback: this._rspDelMail.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //删除邮件返回
    private _rspDelMail(msg: any) {
        if (msg && msg.code == 0) {
            this._updateEmail(true);
        }
    }

    //领取邮件奖励
    public _reqReceiveMailReward(mail_id:number) {
        let params = {
            mail_id: mail_id
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.receiveMailReward,
            Params: params,
            Callback: this._rspReceiveMailReward.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //领取邮件奖励返回
    private _rspReceiveMailReward(msg: any) {
        if (msg && msg.code == 0) {
            this.view.btn_receive.active = false;
            this.view.sp_receive.node.active = true;
            let total_reward = msg.data.receive_reward / 100;
            ModuleManager.instance.toastLong("receive " + total_reward + " successfully");
            this._updateEmail();
        }
    }

    private _updateEmail(isDelete=false) {
        let email = this.node?.parent?.getChildByName("Email")?.getComponent(Email);
        if (email) {
            email.updateEmail();
        }
        if(isDelete){
            ModuleManager.instance.destroyModule(CommonName.MODULE.EmailDetails);
        }
    }

    onDestroy() {

    }
}


