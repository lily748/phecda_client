
import { _decorator, Color, Component, Label, Node } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
const { ccclass, property } = _decorator;

@ccclass('EarnMoneyDetailView')
export class EarnMoneyDetailView extends ViewBase {

    @property(Node)
    content_select: Node = null;

    @property(Node)
    close: Node = null;


    onLoad() {
        this.initEvent();
        this.onPageClick(0);

    }

    initEvent() {
        Utility.instance.onButtonClick(this.close, this.onCloseClick, this, false);
        for (let i = 0; i < this.content_select.children.length; i++) {
            let child = this.content_select.children[i];
            Utility.instance.onButtonClick(child,()=>{ this.onPageClick(i);}, this, false);

        }
    }

    onPageClick(index) {
        for (let i = 0; i < this.content_select.children.length; i++) {
            let child = this.content_select.children[i];
            let isSelect = (i == index);
            let lab_title = child.getChildByName("lab_title");
            lab_title.getChildByName("underline").active = isSelect;
            lab_title.getComponent(Label).color = isSelect ? new Color().fromHEX("#F6CF6F") : new Color().fromHEX("#729ec0");
            this.node.getChildByName("page_"+i).active = isSelect;
        }
    }

    onCloseClick() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.EarnMoneyDetail);
    }
    


  
}