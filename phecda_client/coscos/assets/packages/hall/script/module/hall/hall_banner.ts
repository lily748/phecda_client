
import { _decorator, Component, Node } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { GameResConfig } from '../../../../../script/hall/GameResConfig';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import { PlayPageView } from '../../../../../script/utility/ui_extend/play_pageview';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
const { ccclass, property } = _decorator;

@ccclass('HallBanner')
export class HallBanner extends Component {

    @property(Node)
    copy: Node
    @property(Node)
    refer: Node

    private isPlaying: boolean = false

    onLoad() {
        Utility.instance.onButtonClick(this.copy, this.onCopy, this)
        Utility.instance.onButtonClick(this.refer, this.onRefer, this, false)
    }

    private onCopy() {
        console.log("website", GameResConfig.serverListData.website)
        Utility.instance.copyTextToClipboard(GameResConfig.serverListData?.website || "")
        ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("common_copy_to_clipboard"))
    }

    private onRefer() {
        // ModuleManager.instance.showModule(CommonName.MODULE.Promotion, 1)
        this.onCopy();
    }

    show(data?: any) {
        this.node.active = true
        if (!this.isPlaying) {
            this.node.getComponent(PlayPageView).play()
            this.isPlaying = true
        }
    }

    hide() { this.node.active = false }
}