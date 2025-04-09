import { _decorator, Component, Node, Sprite, Label, Button, macro, SpriteFrame,sp,sys } from 'cc';
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
import { UserDataModel } from '../../model/UserDataModel';
import { SpriteDataModel } from '../../model/SpriteDataModel';
const { ccclass, property } = _decorator;

@ccclass('GameItem')
export class GameItem extends Component {

    @property(Sprite)
    board: Sprite
    @property(Sprite)
    frame: Sprite
    @property(Sprite)
    icon: Sprite
    @property(Sprite)
    maskIcon: Sprite
    @property(Sprite)
    tag: Sprite
    @property(Sprite)
    download: Sprite
    @property(Node)
    state: Node
    @property(Label)
    stateLabel: Label
    @property(Sprite)
    stateBar: Sprite
    @property(Node)
    like: Node
    @property(Node)
    likeOn: Node
    @property(Node)
    likeOff: Node
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
    @property(Sprite)
    cpLogo: Sprite
    @property(sp.Skeleton)
    spine: sp.Skeleton

    private clickCallback = null
    private data: any;
    private likeFlag: boolean = false
    private isViceNode: boolean = false
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

    private setSprite(sprite: Sprite, name: string) {
        ResourceManager.loadRes(`images/IconFrame/${name}/spriteFrame`, SpriteFrame, (err: Error, spriteFrame: SpriteFrame) => {
            if (!err) {
                if (sprite && sprite.node && sprite.isValid)
                    sprite.spriteFrame = spriteFrame
            }
        })
        // this.loadSprite(sprite, `images/IconFrame/${name}/spriteFrame`)
        // SpriteDataModel.SetSprite(sprite, `images/IconFrame/${name}`)
    }

    start() {
        EventManager.instance.mulOn(CommonName.EVENT.Game_Version_Update, this.onGameVersionUpdate, this)
        EventManager.instance.mulOn(CommonName.EVENT.Show_Like, this.onShowLike, this)
    }

    onDestroy() {
        this.unscheduleAllCallbacks()
        EventManager.instance.off(CommonName.EVENT.Game_Version_Update, this.onGameVersionUpdate, this)
        EventManager.instance.off(CommonName.EVENT.Show_Like, this.onShowLike, this)
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
                this.download.node.active = state
                GameDataModel.SetGameUpdateState(gameID, state)
                console.log(`${bundleName}有更新：${ver.Ver1}`, state)
            }
        }
    }

    private onShowLike(show: boolean) {
        this.likeFlag = show
        this.setLikeOrTag()
    }

    private setLikeOrTag() {
        let gameInfo = this.data?.GameInfo
        if (!gameInfo || !gameInfo.Data) { return }

        if (this.isViceNode) {
            if (this.likeFlag) {
                this.tag.node.active = false
            } else {
                this.setTag(gameInfo.Data.Label)
            }
            this.like.active = this.likeFlag
            this.likeOn.active = gameInfo.Like
            this.likeOff.active = !gameInfo.Like
        } else {
            if (gameInfo.Like) {
                this.like.active = true
                this.likeOff.active = false
                this.likeOn.active = true
                this.tag.node.active = false
            } else {
                this.like.active = false
                this.setTag(gameInfo.Data.Label)
            }
        }
    }

    private reset() {
        this.clickCallback = null
        this.data = null
        this.isViceNode = false
        this.unscheduleAllCallbacks()
        this.node.off(Button.EventType.CLICK)
        this.likeOn.off(Button.EventType.CLICK)
        this.likeOff.off(Button.EventType.CLICK)
        this.download.node.active = false
        this.state.active = false
        this.cpLogo.node.active = false
    }

    setItem(info: any, onClick: () => void, isVice: boolean = false, showLike: boolean = false, onCancelLike?: Function) {
        this.reset()
        this.clickCallback = onClick
        this.data = info;
        this.isViceNode = isVice
        const gameData = info.GameInfo.Data
        this.node.name = "" + gameData.GameID
        this.setSprite(this.board, "icon_bottom_" + info.CPInfo.ColorBoxID)
        this.setSprite(this.frame, "icon_frame_" + info.CPInfo.ColorBoxID)

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
                this.download.node.active = false
                onClick()
            }
        }, null, false)

        this.onShowLike(showLike)

        this.likeOn.on(Button.EventType.CLICK, () => {
            if (!isVice) {
                let tips = LanguageManager.instance.getLangByID("loading_cancel_like")
                ModuleManager.instance.showDialog_CancelConfirm(tips, () => {
                    this.setTag(gameData.Label)
                    this.like.active = false
                    GameDataModel.SetGameLike(gameData.GameID, false)
                    onCancelLike && onCancelLike()
                })
            } else {
                this.likeOff.active = true
                this.likeOn.active = false
                GameDataModel.SetGameLike(gameData.GameID, false)
            }
        }, this)
        this.likeOff.on(Button.EventType.CLICK, () => {
            this.likeOff.active = false
            this.likeOn.active = true
            GameDataModel.SetGameLike(gameData.GameID, true)
        }, this)
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
        if (this.data.CPInfo.CpID == 1000) {
            this.maskIcon.node.parent.active = false;

            let loadSp=()=>{
                this.icon.node.active = true;
                SpriteDataModel.LoadResources(`images/IconFrame/gameIcon/${gameData.GameID}`, (spf: SpriteFrame, err?: Error) => {
                    if (err || !spf) {
                        loadRemoteIcon();
                    } else {
                        this.icon.spriteFrame = spf;
                    }
                });
            };

            loadSp();
            // ResourceManager.loadRes(`spine/gameIcon/${gameData.GameID}`, sp.SkeletonData, (err: Error, skedata: sp.SkeletonData) => {
            //     if (err || !this.spine || !sys.isNative){
            //         loadSp();
            //     }else{
            //         this.spine.clearTracks();
            //         this.spine.skeletonData = skedata;
            //         this.spine.setAnimation(0,'animation',true);
            //     }
            // });
            
            if (!gameInfo.Update) {
                let bundleName = GameMap.getGameDataByID(gameData.GameID)?.bundleName
                this.setDownloadImage()
                this.download.node.active = !this.state.active && HotUpdateManager.isUpdate(bundleName)
            } else {
                this.onUpdate()
            }
        } else {
            loadRemoteIcon()
            this.download.node.active = false
        }
        if (!this.isViceNode) {
            this.cpLogo.node.active = false
            this.setSprite(this.cpLogo, "cpLogo/" + this.data.CPInfo.CpID)
        } else {
            this.cpLogo.node.active = false
        }
    }

    private setTag(tag: number) {
        if (tag > 0) {
            this.tag.node.active = true
            this.setSprite(this.tag, "game_tag_" + tag)
        } else {
            this.tag.node.active = false
        }
    }

    private setDownloadImage() {
        let gameID = this.data?.GameInfo.Data.GameID
        if (gameID) {
            let bundleName = GameMap.getGameDataByID(gameID)?.bundleName
            let key = HotUpdateManager.getLocalVersion(bundleName) == "1.0.0" ? "xz" : "gx"
            this.download.spriteFrame = this.download.getComponent(SpriteFrameHolder).getSpriteFrameByKey(key)
        }
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
        this.download.node.active = false
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
            this.download.node.active = true;
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
            this.download.node.active = false;
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