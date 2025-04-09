
import { instantiate, Label, math, _decorator } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import { WithdrawAPI } from '../withdraw/withdrawApi';
import { WithdrawDescView } from './withdrawDescView';
const { ccclass, property } = _decorator;



@ccclass('WithdrawDesc')
export class WithdrawDesc extends Module<WithdrawDescView, null> {

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_withdrawDesc";
        this.viewType = WithdrawDescView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needViewMask = true
        this.needAnim = true
    }


    onInit() {
        // this.view.closeBtn.on("click", this.onCloseBtnClick, this)
        this.requestConfig()
    }

    onShow(){
        AudioManager.instance.playOpenWindowSound()
    }

    // onCloseBtnClick() {
    //     AudioManager.instance.playCloseWindowSound()
    //     ModuleManager.instance.destroyModule("WithdrawDesc")
    // }

    private requestConfig() {
        WithdrawAPI.requestDescription(this, this.setGrid.bind(this))
    }

    private setGrid(data: any[]) {
        let len = math.absMax(this.view.content.children.length - 1, data.length)
        let noLimit = LanguageManager.instance.getLangByID("no_limit")
        for (let i = 0; i < len; i++) {
            let child = this.view.content.children[i + 1]
            let info = data[i]
            if (!child) {
                child = instantiate(this.view.valueItem)
                child.setParent(this.view.content)
            }
            child.active = info ? true : false
            if (info) {
                child.getChildByPath("VipLv/Label").getComponent(Label).string = info.Lv
                child.getChildByPath("Rate/Label").getComponent(Label).string = (parseFloat(info.WithdrawalRate) * 100).toFixed(2) + "%"
                let dayLimit = parseFloat(info.DayWithdrawalLimit)
                let TotalLimit = parseFloat(info.TotalWithdrawalLimit)
                child.getChildByPath("DayLimit/Label").getComponent(Label).string = dayLimit == 0 ? noLimit : info.DayWithdrawalLimit
                child.getChildByPath("TotalLimit/Label").getComponent(Label).string = TotalLimit == 0 ? noLimit : info.TotalWithdrawalLimit
            }
        }
    }
}

