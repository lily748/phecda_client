
import { _decorator, Color, Component, instantiate, Label, Node, ScrollView, Widget, widgetManager } from 'cc';
import { EarnMoneyNewView } from './earnMoneyNew_view';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import CommonName from '../../model/CommonName';
const { ccclass, property } = _decorator;

@ccclass('EarnMoneyNew')
export class EarnMoneyNew extends Module<EarnMoneyNewView, null> {
   
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/earnMoneyNew/public_earnMoneyNew";
        this.viewType = EarnMoneyNewView;
        this.modelType = null;
        this.layer = ViewLayer.Low
        this.needAnim = true
        this.needViewMask = true
    }

    isInit = false;
    selectIndex = -1;
    pageIndex = -1;

  
    onInit() {
        this.createPages();
        this.bindEvents();
        this.view.hallTemplate.setSelectToggle(CommonName.MODULE.EarnMoney);
        this.onSelectClick(0);
    }

    createPages() {
        if(!this.node?.isValid) return
        if (!this.isInit) {
            for (let i = 0; i < 3; i++) {
                let item = this.view["page_"+i];
                item = instantiate(item);
                item.active = (i==0);
                item.parent = this.view.node;
                item.setSiblingIndex(2);
                let widget = item.getComponent(Widget);
                widget.top = 156.216;
                widget.bottom = 101.811;
                widget.left = 0;
                widget.right = 0;
                widget.updateAlignment();
            }
            this.isInit = true;
        }
    }

    bindEvents() {
        if(!this.node?.isValid) return
        for (let i = 0; i < this.view.selectNodes.children.length; i++) {
            this.view.selectNodes.children[i].on("click", ()=>{this.onSelectClick(i)}, this);
        }
    }

   

    onSelectClick(index) {
        if (this.selectIndex == index) return;
        this.selectIndex = index;
        for (let i = 0; i < this.view.selectNodes.children.length; i++) {
            let children = this.view.selectNodes.children[i];
            let isSelect = (i == index);
            children.getChildByName("on").active = isSelect;
            children.getChildByName("label").getComponent(Label).color = isSelect ? new Color().fromHEX("#ffffff"):new Color().fromHEX("#ffce64");
        }
        this.onSelectPageIndex(index);
    }

    onSelectPageIndex(index) {
        if (this.pageIndex == index) return;
        this.pageIndex = index;
        for (let i = 0; i < 3; i++) {
            let page = this.view.node.getChildByName("page_"+i);
            if (page) {
                page.active = (i==index);
                let scrollView = page.getComponent(ScrollView);
                if (scrollView) scrollView.scrollToTop();
                let script:any = page.getComponent(`EarnMoneyNewPage`+i);
                if ( (i==index) && script) script.init();
            }
        }
    }


}