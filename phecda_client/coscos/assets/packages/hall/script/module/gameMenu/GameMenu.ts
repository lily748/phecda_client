import { _decorator, Component, Node, Toggle, Widget, Vec3, Label } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import { GameServer } from '../../../../../script/net/game_server';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { ActivityState, UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;

interface GameMenuConfig {
    BundleName: string
    OnExit?: Function,
    OnSetting?: Function,
    OnHelp?: Function,
    OnRecharge?: Function,
}

@ccclass('GameMenu')
export class GameMenu extends Component {

    @property(Node)
    block: Node

    @property(Toggle)
    tog: Toggle

    @property(Node)
    menu: Node

    @property(Node)
    exit: Node

    @property(Node)
    setting: Node

    @property(Node)
    help: Node

    @property(Node)
    recharge: Node

    @property(Node)
    firstRecharge: Node
    @property(Node)
    firstRechargeTips: Node
    @property(Label)
    firstRechargeLimitTime: Label

    private duration = 8

    private _config: GameMenuConfig
    public Init(config: GameMenuConfig) {
        this._config = config
        if (config.BundleName == "dfdc") {//特殊显示
            let widget = this.recharge.getComponent(Widget)
            widget.enabled = false
            let widget1 = this.tog.node.getComponent(Widget)
            widget1.enabled = false
            this.tog.node.setPosition(new Vec3(-553, 315, 0))
            this.recharge.setPosition(new Vec3(-455, 315, 0))
            this.firstRecharge?.setPosition(new Vec3(195, 0, 0))
        } else if (config.BundleName == "rocket") {//特殊显示
            let widget = this.recharge.getComponent(Widget)
            widget.enabled = false
            this.recharge.setPosition(new Vec3(615, 328, 0))

            let widget1 = this.tog.node.getComponent(Widget)
            widget1.enabled = false
            this.tog.node.setPosition(new Vec3(-612, 326, 0))
        }
    }

    public ShowMenu() {
        this.block.active = true
        this.menu.active = true
    }

    public HideMenu() {
        this.block.active = false
        this.menu.active = false
        AudioManager.instance.playCloseWindowSound()
    }

    protected start() {
        Utility.instance.onToggleClick(this.tog, this.onTog, this)
        Utility.instance.onButtonClick(this.block, this.onBlock, this, false)
        Utility.instance.onButtonClick(this.exit, this.onExit, this, false)
        Utility.instance.onButtonClick(this.setting, this.onSetting, this, false)
        Utility.instance.onButtonClick(this.help, this.onHelp, this, false)
        Utility.instance.onButtonClick(this.recharge, this.onRecharge, this, false)
        Utility.instance.onButtonClick(this.firstRecharge, this.onFirstRecharge, this, false)

        if (this.firstRecharge) {
            this.firstRecharge.active = this.getFirstRechargeFlag()
            this.scheduleOnce(this.showFirstRechargeTips, this.duration)
            let tips = Utility.instance.format(LanguageManager.instance.getLangByID("shouchong_tips3"), UserDataModel.firstRechargeMaxReward)
            this.firstRechargeTips.getChildByPath("Label").getComponent(Label).string = tips
        }
        EventManager.instance.on(CommonName.EVENT.FirstRechargeLimitTime, this.setLimitTime, this)
        this.firstRechargeLimitTime.node.parent.active = !UserDataModel.GetFirstRechargeCompleted()
    }

    protected onDestroy() {
        EventManager.instance.off(CommonName.EVENT.FirstRechargeLimitTime, this.setLimitTime, this)
    }

    private onTog() {
        if (this.tog.isChecked) {
            this.ShowMenu()
        } else {
            this.HideMenu()
        }
    }

    private onBlock() {
        this.tog.isChecked = false
    }

    private onExit() {
        this.onBlock()
        if (this._config && this._config.OnExit) {
            this._config.OnExit()
        } else {
            GameServer.sendLeaveRoomMsg()
        }
    }

    private onSetting() {
        this.onBlock()
        if (this._config && this._config.OnSetting) {
            this._config.OnSetting()
        } else {
            ModuleManager.instance.showModule(CommonName.MODULE.Setting, this._config.BundleName)
        }
    }

    private onHelp() {
        this.onBlock()
        if (this._config && this._config.OnHelp) {
            this._config.OnHelp()
        }
    }

    private onRecharge() {
        this.onBlock()
        if (this._config && this._config.OnRecharge) {
            this._config.OnRecharge()
        } else {
            ModuleManager.instance.showModule(CommonName.MODULE.RechargeNew)
            if (this.getFirstRechargeFlag()) {
                this.onFirstRecharge()
                this.scheduleOnce(this.onFirstRecharge, 0.1)
            } else if (UserDataModel.switchConfig.WeeklyCardStatus == ActivityState.Normal) {
                this.scheduleOnce(() => ModuleManager.instance.showModule(CommonName.MODULE.WeeklyCard), 0.1)
            }
        }
    }

    private getFirstRechargeFlag() {
        if (this._config.BundleName == "rocket") {//特殊显示
            return false;
        }
        return UserDataModel.GetFirstRechargeSwitch() && !UserDataModel.GetFirstRechargeCompleted()
    }

    private onFirstRecharge() {
        ModuleManager.instance.showModule(CommonName.MODULE.FirstRecharge, { Click: true })
    }

    private showFirstRechargeTips() {
        if (!this.getFirstRechargeFlag()) {
            this.firstRecharge.active = false
            this?.firstRechargeLimitTime?.unscheduleAllCallbacks()
            this.unscheduleAllCallbacks()
            return
        }

        this.firstRechargeTips.active = true
        this.scheduleOnce(this.hideFirstRechargeTips, this.duration)
    }

    private hideFirstRechargeTips() {
        this.firstRechargeTips.active = false
        this.scheduleOnce(this.showFirstRechargeTips, this.duration)
    }

    private setLimitTime(t: number) {
        if (!this?.isValid || !this?.firstRecharge.active) {
            return
        }

        if (!t) {
            this.firstRechargeLimitTime.node.parent.active = false
        } else {
            this.firstRechargeLimitTime.node.parent.active = true
            this.firstRechargeLimitTime.string = Utility.instance.formatCountDownTime(t)
        }
    }
}
