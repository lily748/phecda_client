
import { _decorator, Component, Node, Sprite, sys } from 'cc';
import CustomerSupportView from './customerSupport_view';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { UserDataModel } from '../../model/UserDataModel';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { GameConfig } from '../../../../../script/com/game_config';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
const { ccclass, property } = _decorator;


@ccclass('CustomerSupport')
export default class CustomerSupport  extends Module<CustomerSupportView, null> {
   
      constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_customerSupport";
        this.viewType = CustomerSupportView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    _lastTime:number = null;


    onInit(): void {
        this.setUserInfo();
        this.view.initOnLineCustomer(this.onOnlineCustomClick, this);
        Utility.instance.onButtonClick(this.view.sendBtn, this.onSendBtnClick, this);
        Utility.instance.onButtonClick(this.view.backBtn, this.onBackBtnClick, this);
        Utility.instance.onButtonClick(this.view.onLineCustomer, this.onOnlineCustomClick, this);
        this._reqGetCustSerQuesList();
    }


    onShow(): void {
      
    }

    private checkOverTime() {
        if (this._lastTime!=null) {
            let time1=new Date().getTime()
            let max = 1;
            if ((Math.abs(time1 - this._lastTime) >= (max* 60 * 1000))) {
                this.view.setTimeLab(this.formaData(new Date()));
            }
        } else this.view.setTimeLab(this.formaData(new Date()));
    }

    private _reqGetCustSerQuesList() {
        ModuleManager.instance.showNetPrompt();
        let info: PostData = {
            Target: this,
            Url: Http_Define.getCustSerQuesList,
            Params: {},
            Callback:this._rspGetCustSerQuesList.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspGetCustSerQuesList(msg: any) {
        if (msg && msg.code == 0) {
           this.view.setCustomerQuessions(msg.data.question_list, (index,str)=>{
                this.sendMsg(str);
           },this);
        }
    }

    private _reqGetCustSerAnswer(question:string) {
        ModuleManager.instance.showNetPrompt();
        let params = {
           question:question
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getCustSerAnswer,
            Params: params,
            Callback:this._rspGetCustSerAnswer.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspGetCustSerAnswer(msg: any) {
        if (msg && msg.code == 0) {
           this.view.setCustomerLabel(msg.data.answer);
           this.view.scrollview.scrollToBottom(0.25);
        }
    }



    private sendMsg(msg) {
        if (msg=="") return;
        this.checkOverTime();
        this._reqGetCustSerAnswer(msg);
        this.view.setUserLabel(msg);
        this.view.input.string = "";
        this.view.scrollview.scrollToBottom(0.25);
        this._lastTime = new Date().getTime();
    }
    
    private onSendBtnClick() {
        this.sendMsg(this.view.input.string); 
    }

    private onBackBtnClick() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.CustomerSupport);
    }

    private onOnlineCustomClick() {
        let user = UserDataModel.GetCurrentUser()
        let showID = user ? user.show_id : "invalidUser"
        sys.openURL("https://t.me/in4pgame")//GameConfig.CustomerUrl+`?userid=${showID}`)
    }

    private setUserInfo() {
        let user = UserDataModel.GetCurrentUser()
        if (!user || !this.view) return
        let avatar = this.view.userNode.getChildByName("robot").getComponent(Sprite);
        SpriteDataModel.SetHead(avatar, user.avatar_url);
    }

    private formaData(timer: Date) {
        const year = timer.getFullYear();
        const month = timer.getMonth() + 1;
        const day = timer.getDate();
        const hour = timer.getHours();
        const minute = timer.getMinutes();
        const second = timer.getSeconds();
        return `${this.pad(year, 4)}-${this.pad(month,2)}-${this.pad(day)} ${this.pad(hour)}:${this.pad(minute)}:${this.pad(second)}`;
    }

    private pad(timeEl, total=2, str="0") {
        return timeEl.toString().padStart(total, str);
    }


   

   
}

