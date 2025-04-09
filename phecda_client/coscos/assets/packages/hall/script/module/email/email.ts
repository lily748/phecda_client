
import { _decorator, Component, Node, EventHandler, Button,instantiate,Label, find, Sprite,ScrollView} from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import CommonName from '../../model/CommonName';
import { email_view } from './email_view';
import Utility from '../../../../../script/utility/utility';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { HallTemplate } from '../hall/hall_template';
import { conmmon_http } from '../../../../../script/net/common_http';
import SpriteFrameHolder from '../../../../../script/utility/ui_extend/spriteframe_holder';
const { ccclass, property } = _decorator;

@ccclass('Email')
export class Email extends Module<email_view, null> {

    private _email_list = [];
    private _mailItem=null;
    private _totalSize = 0;       //总条数
    private _pageSize=20;         //每一页条数
    private _totalPage=1;         //总页数
    private _currentPage=1;       //当前页数

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/email/public_email";
        this.viewType = email_view;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onLoad() {

    }

    onShow() {

    }

    onDestroy() {
        conmmon_http.reqGetHallMailPot(this, conmmon_http.rspGetHallMailPot.bind(this));
        conmmon_http.reqGetUserInfo(this, conmmon_http.rspUserInfo.bind(this));
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this._clickBack, this);
        Utility.instance.onButtonClick(this.view.btnDelete, this._clickDelete, this);
        Utility.instance.onButtonClick(this.view.btnReceive, this._clickReceive, this);
        this.view.emailList.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this._reqEmailPageInfo, this);
        this.view.emailList.scrollToTop();
        this.view.emailList.content.removeAllChildren();
        this._reqGetMailList(this._currentPage, this._pageSize);
    }

    private _reqEmailPageInfo() {
        if (this._currentPage <= this._totalPage) {
            this._reqGetMailList(this._currentPage, this._pageSize);
        }
    }

    private _clickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.Email);
    }

    private _clickDelete() {
        if (this._email_list.length == 0) {
            return;
        }
        this._reqDelAllReadMail();
    }

    private _clickReceive() {
        if (this._email_list.length == 0) {
            return;
        }
        this._reqReceiveAllMailReward();
    }

    /**
     * 请求邮件列表
     * @param curpage 当前页码
     * @param pagesize 每一页条数
     */
    public _reqGetMailList(curpage: number,pagesize:number) {
        let params = {
            curpage: curpage,
            pagesize:pagesize
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getMailList,
            Params: params,
            Callback: this._rspGetMailList.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //邮件列表返回
    private _rspGetMailList(msg: any) {
        if (msg && msg.code == 0) {
            this._currentPage++;
            if(msg.data.totalsize>0){
                this._setPage(msg.data.totalsize);
            }
            this._updateInfo(msg.data.mails);
        }
    }

    private _setPage(totalsize:number){
        this._totalSize=totalsize;
        this._totalPage=Math.ceil(this._totalSize/this._pageSize);
    }

    //显示邮件详情
    private _showEmailDetails(mail_id: number) {
        this._refreshMail(mail_id);
        let list = this.getEmailInfo(mail_id);
        this._updateItem(list);
        this._updateEmailDetails(list);
    }

    /**
      * 请求读取邮件
      * @param mail_id 邮件id
      */
    public _reqReadMail(mail_id: number) {
        let params = {
            mail_id: mail_id
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.readMail,
            Params: params,
            Callback: this._rspReadMail.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //读取邮件返回
    private _rspReadMail(msg: any) {
        if (msg && msg.code == 0) {
            if (msg.data.error_code == 0) {
                //读取成功
                this._showEmailDetails(msg.data.mail_id);
            } else {
                //读取失败
                if (msg.data.error_msg) {
                    ModuleManager.instance.toast(msg.data.error_msg);
                }
            }
        }
    }

    private _updateInfo(msg: any) {
        this.view.emailList.content.removeAllChildren();
        for(let i=0;i<msg.length;i++){
            let one=msg[i];
            this._email_list.push(one);
        }

        let list=this._email_list;
        for (let i = 0; i < list.length; i++) {
            let item = instantiate(this.view.listItem);
            item.setParent(this.view.emailList.content);
            item.active = true;
            let title = item.getChildByName("title").getComponent(Label);
            title.string = list[i].title;
            let time = item.getChildByName("time").getComponent(Label);
            time.string = Utility.instance.getTimeDateStr(list[i].create_at, 1);
            let red = item.getChildByName("red").getComponent(Sprite).node;
            red.active = list[i].is_read == 0 ? true : false;
            let bg = item.getChildByName("bg").getComponent(Sprite);
            bg.spriteFrame = bg.node.getComponent(SpriteFrameHolder).getSpriteFrameByKey(list[i].is_read);
            let btn = item.getComponent(Button).node;
            Utility.instance.onButtonClick(btn, () => { 
                this._mailItem=item;
                this._reqReadMail(list[i].mail_id) 
            }, this);
        }

        if (msg.length == 0) {
            this.view.sp_no.node.active = true;
        }
    }

    private _updateItem(list:any){
        if (!this._mailItem) return;
        let red = this._mailItem.getChildByName("red").getComponent(Sprite).node;
        red.active = list.is_read == 0 ? true : false;
        let bg = this._mailItem.getChildByName("bg").getComponent(Sprite);
        bg.spriteFrame = bg.node.getComponent(SpriteFrameHolder).getSpriteFrameByKey(list.is_read);
    }

    //刷新邮件列表
    private _refreshMail(mail_id: number) {
        for (let i = 0; i < this._email_list.length; i++) {
            if (this._email_list[i].mail_id == mail_id) {
                this._email_list[i].is_read = 1;
                break;
            }
        }
    }

    //获取邮件详情数据
    private getEmailInfo(mail_id: number) {
        let list = [];
        for (let i = 0; i < this._email_list.length; i++) {
            if (this._email_list[i].mail_id == mail_id) {
                list = this._email_list[i];
                break;
            }
        }
        return list;
    }

    //更新邮件详情
    private _updateEmailDetails(msg: any) {
        ModuleManager.instance.showModule(CommonName.MODULE.EmailDetails, msg);
    }

    private _initInfo() {
        this._email_list = [];
        this._mailItem = null;
        this._totalSize = 0;
        this._totalPage = 1;
        this._currentPage = 1;
    }

    //删除所有已读邮件
    public _reqDelAllReadMail() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.delAllReadMail,
            Params: {},
            Callback: this._rspDelAllReadMail.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //删除所有已读邮件返回
    private _rspDelAllReadMail(msg: any) {
        if (msg && msg.code == 0) {
            this.updateEmail();
        }
    }

    //领取所有邮件奖励
    public _reqReceiveAllMailReward() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.receiveAllMailReward,
            Params: {},
            Callback: this._rspReceiveAllMailReward.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    //领取所有邮件奖励返回
    private _rspReceiveAllMailReward(msg: any) {
        if (msg && msg.code == 0) {
            if (msg.data.total_reward > 0) {
                let total_reward = Math.floor(msg.data.total_reward / 100).toString();
                ModuleManager.instance.toastLong("receive " + total_reward + " successfully");
                this.updateEmail();
            }
        }
    }

    public updateEmail() {
        this._initInfo();
        this.view.emailList.scrollToTop();
        this.view.emailList.content.removeAllChildren();
        this._reqGetMailList(this._currentPage, this._pageSize);
    }
}
