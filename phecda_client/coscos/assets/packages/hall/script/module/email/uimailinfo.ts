
import { _decorator, Component, Node, Label, Button, instantiate, Sprite, SpriteFrame } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { NetworkManager } from '../../../../../script/framework/net/networkManager';
import { hallClass, messageClass, netproto } from '../../../../../script/hall/ProtoDefine';
import AudioManager from '../../../../../script/manager/audio_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { UISwitcher } from '../../../../../script/utility/ui_extend/ui_switcher';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;

@ccclass('uimailinfo')
export class uimailinfo extends Component {
    @property(Label)
    lab_title: Label;
    @property(Label)
    lab_content: Label;
    @property(Label)
    lab_sender: Label;
    @property(Label)
    lab_time: Label;
    @property(Node)
    node_root: Node;
    @property(Node)
    node_item: Node;
    @property(Button)
    btn_draw: Button;
    @property(Button)
    btn_close: Button;
    @property(Node)
    node_main: Node;
    @property(Node)
    btn_confirm: Node;

    @property(Node)
    mainNode: Node;
    @property(Node)
    mask: Node;

    @property(UISwitcher)
    uiSwitcher: UISwitcher

    private isInit = false

    public init() {
        if (this.isInit)
            return
        this.isInit = true;
        this.btn_close.node.on(Button.EventType.CLICK, this.onBtnComfirmClick, this)
        this.btn_draw.node.on(Button.EventType.CLICK, this.onClickDraw, this)
        this.btn_confirm.on(Button.EventType.CLICK, this.onBtnComfirmClick, this)
    }

    private _data;
    public onShow(data) {
        AudioManager.instance.playOpenWindowSound()
        this.init();
        this._data = data
        this.lab_title.string = data.Title
        this.lab_content.string = data.Content
        this.lab_time.string = data.SendTime
        Utility.instance.hideAllChildren(this.node_root)
        if (data.MailAnnexList && data.MailAnnexList.length > 0) {
            this.uiSwitcher.changeStateByName("WithAnnex")
            for (let i = 0; i < data.MailAnnexList.length; i++) {
                let item = Utility.instance.getPrefabNode(i, this.node_root, this.node_item)
                let config = CommonName.ITEM_CONFIG[data.MailAnnexList[i].ItemType]
                item.getChildByName("lab_count").getComponent(Label).string = "Ficha"+ "X" + UserDataModel.ConvertCash(data.MailAnnexList[i].ItemNum)
                item.active = true
                let sprite = item.getChildByName("img_item").getComponent(Sprite)
                ResourceManager.loadRes("images/item/" + config.spriteIndex + "/spriteFrame", SpriteFrame, (err, spriteFrame: SpriteFrame) => {
                    if (!err) {
                        sprite.spriteFrame = spriteFrame
                    }
                })
            }
        } else {
            this.uiSwitcher.changeStateByName("WithoutAnnex")
        }
        this.btn_draw.node.active = !data.IsReceive && (data.MailAnnexList && data.MailAnnexList.length > 0)
        this.btn_confirm.active = data.IsReceive && (data.MailAnnexList && data.MailAnnexList.length > 0)
    }

    private onClickDraw() {
        AudioManager.instance.playButtonSound()
        this.requestReceiveMail()
    }

    private requestReceiveMail() {
        let req = new netproto.ReceiveMailAnnexReq()
        req.UserID = UserDataModel.GetCurrentUserID();
        req.MsgID = this._data.ID;
        req.IsAll = 0;
        NetworkManager.SendHallMSg(messageClass.Hall, hallClass.ReceiveMailAnnexReq, req)
    }

    onReceiveMailRet(data) {
        if (data.Code == 0) {//展示奖励
            if (this._data.ID == data.MsgID) {
                this._data.IsReceive = true
                this.btn_draw.node.active = false
                this.btn_confirm.active = true
                if (this._data.MailAnnexList && data.MailAnnexList.length > 0) {
                    ModuleManager.instance.showModule(CommonName.MODULE.Reward, { Items: this._data.MailAnnexList })
                }
            }
        } else {
            ModuleManager.instance.toastLong(LanguageManager.instance.getErrorMsgByID(data.Code))
        }
    }

    private onBtnComfirmClick() {
        AudioManager.instance.playCloseWindowSound()
        this.node.active = false
    }
}
