
import { _decorator, Component, Node, instantiate, Toggle, Label, Button, sys } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import AudioManager from '../../../../../script/manager/audio_manager';
import { LoginServer } from '../../../../../script/net/login_serve';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { StorageUserInfo, UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;

@ccclass('SwitchAccount')
export class SwitchAccount extends Component {

    @property(Node)
    close: Node

    @property(Node)
    resetPwd: Node
    @property(Node)
    loginOther: Node
    @property(Node)
    confirm: Node
    @property(Node)
    layout: Node
    @property(Node)
    item: Node

    private loginOtherListener: () => void

    private currentIndex = 0

    onLoad() {
        Utility.instance.onButtonClick(this.close, this.onClose, this, false)
        Utility.instance.onButtonClick(this.resetPwd, this.onResetPwd, this, false)
        Utility.instance.onButtonClick(this.loginOther, this.onLoginOther, this, false)
        Utility.instance.onButtonClick(this.confirm, this.onConfirm, this, false)

    }

    public SetLoginOtherListener(listener: () => void) {
        this.loginOtherListener = listener
    }

    public Show() {
        AudioManager.instance.playOpenWindowSound()
        this.node.active = true
        this.refreshLayout(UserDataModel.GetStorageUserList())
    }

    public Hide() {
        this.node.active = false
    }

    private refreshLayout(userList: StorageUserInfo[]) {
        Utility.instance.hideAllChildren(this.layout)
        let children = this.layout.children
        if (this.currentIndex > userList.length - 1) {
            this.currentIndex = 0
        }
        for (let i = 0; i < userList.length; i++) {
            const user = userList[i]
            let userItem = children[i] || instantiate(this.item)
            userItem.setParent(this.layout)
            userItem.active = true
            let tog = userItem.getComponent(Toggle)
            userItem.off(Toggle.EventType.TOGGLE)
            let normal = userItem.getChildByPath("Normal")
            let highlight = userItem.getChildByPath("Highlight")
            userItem.getChildByPath("Normal/Label").getComponent(Label).string = user.Phone
            userItem.getChildByPath("Highlight/Label").getComponent(Label).string = user.Phone
            let del = userItem.getChildByPath("Delete")
            del.active = userList.length > 1 && (sys.isBrowser || ("" + user.UserID) != user.Phone)
            del.off(Button.EventType.CLICK)
            let select = (idx: number) => {
                normal.active = !tog.isChecked
                highlight.active = tog.isChecked
                this.currentIndex = idx
            }
            Utility.instance.onButtonClick(del, () => { this.onDelete(user.UserID) }, this)
            Utility.instance.onToggleClick(tog, () => {
                select(i)
            }, this)
            tog.isChecked = i == this.currentIndex
            select(this.currentIndex)
        }
    }

    private onDelete(userID: number) {
        this.refreshLayout(UserDataModel.DeleteStorageUser(userID))
    }

    private onClose() {
        this.Hide()
        AudioManager.instance.playCloseWindowSound()
    }

    private onResetPwd() {
        ModuleManager.instance.showModule(CommonName.MODULE.Register, { type: 2 })
    }

    private onLoginOther() {
        this.loginOtherListener && this.loginOtherListener()
    }

    private onConfirm() {
        let userList = UserDataModel.GetStorageUserList()
        if (userList.length > 0 && userList[this.currentIndex]) {
            LoginServer.requestUserLoginWithCer(userList[this.currentIndex])
        } else {
            LoginServer.requestGuestLogin()
        }
    }
}