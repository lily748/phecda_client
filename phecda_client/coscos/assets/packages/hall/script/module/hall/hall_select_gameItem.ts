import { _decorator, Component, Node, Sprite, Label, Button, macro, SpriteFrame } from 'cc';
import { GameMap } from '../../../../../script/com/game_map';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { HotUpdateManager, hotUpdateType } from '../../../../../script/framework/hotUpdate/HotUpdateManager';
import { GameSDKInterface } from '../../../../../script/game/GameSDKInterface';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { loadRemoteTexHandler, SpriteManager } from '../../../../../script/manager/sprite_manager';
import SpriteFrameHolder from '../../../../../script/utility/ui_extend/spriteframe_holder';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { GameDataModel } from '../../model/GameDataModel';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;

@ccclass('hall_select_gameItem')
export class hall_select_gameItem extends Component {

    @property(Sprite)
    icon: Sprite
    @property(Sprite)
    maskIcon: Sprite
    @property(Node)
    download: Node
    @property(Node)
    state: Node
    @property(Label)
    stateLabel: Label
    @property(Sprite)
    stateBar: Sprite
    @property(Label)
    countDownTime: Label
    @property(Node)
    fixing: Node
    @property(Node)
    updateNode: Node
    @property(Node)
    fixingNode: Node
    @property(Label)
    progress: Label
    @property(Node)
    checkImage: Node

    private clickCallback = null
    private data: any;
   // private likeFlag: boolean = false
   // private isViceNode: boolean = false
    private loadSpriteHandler: loadRemoteTexHandler = null;


    private loadSprite(sprite: Sprite, url: string) {
        if (url.trim() == "") {
            sprite.spriteFrame = null
            return null
        }
        if (this.loadSpriteHandler) {
            this.loadSpriteHandler.destory = true;
            this.loadSpriteHandler = null
        }
        if (url.startsWith("http")) {
            this.loadSpriteHandler = SpriteManager.instance.loadRemoteImage(sprite, url, true)
        } else {
            ResourceManager.loadRes(url, SpriteFrame, (err: Error, spriteFrame: SpriteFrame) => {
                if (!err) {
                    if (sprite && sprite.node && sprite.isValid)
                        sprite.spriteFrame = spriteFrame
                }
            })
        }
    }


    start() {
        EventManager.instance.mulOn(CommonName.EVENT.Game_Version_Update, this.onGameVersionUpdate, this)
    }

    onDestroy() {
        this.unscheduleAllCallbacks()
        EventManager.instance.off(CommonName.EVENT.Game_Version_Update, this.onGameVersionUpdate, this)
    }

    private onGameVersionUpdate(ver: any) {
        let gameID = this.data?.GameInfo.Data.GameID
        if (gameID) {
            let cpInfo = GameDataModel.GetCPInfoByGameID(gameID)
            if (cpInfo.CpID > 1000) {
                return
            }
            let bundleName = GameMap.getGameDataByID(gameID)?.bundleName
            if (bundleName && bundleName == ver.BunldID) {
                let state = !this.state.active && HotUpdateManager.isUpdate(bundleName)
                this.download.active = state
                GameDataModel.SetGameUpdateState(gameID, state)
                console.log(`${bundleName}有更新：${ver.Ver1}`, state)
            }
        }
    }

    setIsCheck(isCheck){
        this.checkImage.active = isCheck
    }

    

    private reset() {
        this.clickCallback = null
        this.data = null
        this.unscheduleAllCallbacks()
        this.node.off(Button.EventType.CLICK)
        this.download.active = false
        this.state.active = false
        this.checkImage.active = false
    }

    setItem(info: any, onClick: () => void) {
        this.reset()
        this.clickCallback = onClick
        this.data = info;
        const gameData = info.GameInfo.Data
        this.node.name = "" + gameData.GameID
   
        if (info.CPInfo.Status != 1 || gameData.Status != 1) {
            this.state.active = true
            this.fixingNode.active = true
            this.updateNode.active = false
            let time = info.CPInfo.Status != 1 ? info.CPInfo.DiffTime : gameData.DiffTime
            this.showMaintainace(time)
        } else {
            this.state.active = false
        }
        Utility.instance.onButtonClick(this.node, () => {
            if (!Utility.instance.btnClickValid(200)) {
                return
            }
            AudioManager.instance.playEffect(CommonName.PUBLIC_SOUNDURL.GameClick)
            let bundleName = GameMap.getGameDataByID(gameData.GameID)?.bundleName
            let hType = HotUpdateManager.checkUpdate(bundleName)
            if (hType > hotUpdateType.None) {
                if (hType == hotUpdateType.Update_Restart) {
                    let tips = LanguageManager.instance.getLangByID("ui_update_restart")
                    ModuleManager.instance.showDialog_CancelConfirm(tips, () => {
                        GameSDKInterface.Restart()
                    })
                }
                else {
                    GameDataModel.SetGameUpdateState(gameData.GameID, true)
                    this.onUpdate();
                }
            }
            else {
                if (UserDataModel.inGuide) {
                    EventManager.instance.dispatch("GUIDE_SETP_COMPLETE")
                }
                onClick()
                
            }
        }, null, false)

        this.setGameIcon()
    }

    private setGameIcon() {
        if (!this.getDataValid()) {
            return
        }
        let gameInfo = this.data.GameInfo
        let gameData = gameInfo.Data


        let loadRemoteIcon = () => {
            if (!this.getDataValid()) {
                return
            }
            let url: string = gameData.IconUrl
            const original = url.endsWith("_original.png")
            let icon = original ? this.icon : this.maskIcon
            this.maskIcon.node.parent.active = !original
            this.icon.node.active = original
            icon.spriteFrame = null
            if (url && url.startsWith("http")) {
                this.loadSprite(icon, url)
                //SpriteDataModel.SetSprite(icon, url)
            }
        }
        loadRemoteIcon.bind(this)
        console.log("--->",this.data.CPInfo.CpID)
        if (this.data.CPInfo.CpID == 1000) {
            this.maskIcon.node.parent.active = false
            this.icon.node.active = true
            SpriteDataModel.LoadResources(`images/IconFrame/gameIcon/${gameData.GameID}`, (spf: SpriteFrame, err?: Error) => {
                if (err || !spf) {
                    loadRemoteIcon();
                } else {
                    this.icon.spriteFrame = spf;
                }
            });
            if (!gameInfo.Update) {
                let bundleName = GameMap.getGameDataByID(gameData.GameID)?.bundleName
                //this.setDownloadImage()
                this.download.active = !this.state.active && HotUpdateManager.isUpdate(bundleName)
            } else {
                this.onUpdate()
            }
        } else {
            loadRemoteIcon()
            this.download.active = false
        }
       
    }



    private setDownloadImage() {
        // let gameID = this.data?.GameInfo.Data.GameID
        // if (gameID) {
        //     let bundleName = GameMap.getGameDataByID(gameID)?.bundleName
        //     let key = HotUpdateManager.getLocalVersion(bundleName) == "1.0.0" ? "xz" : "gx"
        //     this.download.spriteFrame = this.download.getComponent(SpriteFrameHolder).getSpriteFrameByKey(key)
        // }
    }

    private showMaintainace(time: number) {
        const lastTime = GameDataModel.initDataTime + time * 1000
        let remain = lastTime - Date.now() / 1000
        this.countDownTime.string = ""
        let self = this
        let countDown = () => {
            let dt = (lastTime - Date.now()) / 1000
            if (dt <= 0) {
                self.unschedule(countDown)
                this.countDownTime.string = ""
                return
            }
            this.countDownTime.string = Utility.instance.formatCountDownTime(dt)
        }
        if (remain <= 0) {
            this.countDownTime.string = ""
            this.unschedule(countDown)
            return
        }
        this.schedule(countDown, 0.2, macro.REPEAT_FOREVER)
    }

    private getValid() {
        return this && this.isValid && this.node && this.node.isValid
    }

    private getDataValid() {
        return this.getValid() && this.data && this.data.GameInfo && this.data.GameInfo.Data
    }

    private onUpdate() {
        let bundleName = GameMap.getGameDataByID(this.data.GameInfo.Data.GameID)?.bundleName
        var handler = HotUpdateManager.download(bundleName)
        if (!handler) {
            return
        }
        this.stateBar.fillRange = 0
        this.progress.string = ""
        this.download.active = false
        this.state.active = true
        this.updateNode.active = true
        this.fixingNode.active = false

        handler.onProgress = (progress) => {
            if (!this.getDataValid()) {
                return
            }
            if (progress == Number.MAX_VALUE || isNaN(progress) || progress < 0) {
                progress = 0
            }
            var fill = progress / 100
            this.stateBar.fillRange = fill
            this.progress.string = progress.toFixed(2) + "%"
        }
        handler.onFailed = () => {
            console.log("更新失败！！！")
            if (!this.getDataValid()) {
                return
            }
            ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("loading_update_fail"))
            this.state.active = false
            this.stateBar.fillRange = 0
            this.progress.string = "0%"
            this.download.active = true;
            GameDataModel.SetGameUpdateState(this.data.GameInfo.Data.GameID, false)
            if (UserDataModel.inGuide) {
                EventManager.instance.dispatch("GUIDE_SETP_RESTART")
            }
        }
        handler.onSuccess = () => {
            if (!this.getDataValid()) {
                return
            }
            ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("loading_update_success"))
            this.state.active = false
            this.stateBar.fillRange = 1
            this.download.active = false;
            GameDataModel.SetGameUpdateState(this.data.GameInfo.Data.GameID, false)
            if (UserDataModel.inGuide) {
                if (this.clickCallback) {
                    EventManager.instance.dispatch("GUIDE_SETP_COMPLETE")
                    this.clickCallback()
                    this.clickCallback = null
                }
            }
            console.log("更新成功！！！")
        }
    }
}