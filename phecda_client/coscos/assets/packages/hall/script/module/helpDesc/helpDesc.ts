import { instantiate, Label, _decorator } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import HelpDescView from './helpDesc_view';

const { ccclass, property } = _decorator;

@ccclass('HelpDesc')
export default class HelpDesc extends Module<HelpDescView, null>{

    private data: { Content?: string[] | string, CloseCallback: () => void }

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_helpDesc";
        this.viewType = HelpDescView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.close, this.onClose, this, false)
        AudioManager.instance.playOpenWindowSound()
    }

    onShow(data?: any) {
        this.data = data
        this.setContent()
    }

    private onClose() {
        if (this.data?.CloseCallback) {
            this.data.CloseCallback()
        } else {
            AudioManager.instance.playCloseWindowSound()
        }
        ModuleManager.instance.destroyModule(CommonName.MODULE.HelpDesc)
    }

    private setContent() {
        Utility.instance.hideAllChildren(this.view.content)
        if (this.data?.Content) {
            if (typeof(this.data.Content) == "string") {
                this.view.labelItem.string = this.data.Content
                this.view.labelItem.node.active = true
            } else {
                if (this.data.Content.length > 1) {
                    for (let i = 0; i < this.data.Content.length; i++) {
                        const element = this.data.Content[i];
                        const item = instantiate(this.view.litsItem)
                        item.setParent(this.view.content)
                        item.active = true
                        item.getChildByPath("Idx").getComponent(Label).string = `${i + 1}.`
                        item.getChildByPath("Label").getComponent(Label).string = `${element}`
                    }
                } else {
                    this.view.labelItem.string = this.data.Content[0]
                    this.view.labelItem.node.active = true
                }
            }
        }
    }
}