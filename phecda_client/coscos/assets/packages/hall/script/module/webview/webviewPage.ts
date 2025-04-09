import { _decorator } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
const { ccclass, property } = _decorator;

import WebviewPageView from "./webviewPage_view";

@ccclass('WebviewPage')
export default class WebviewPage extends Module<WebviewPageView, null>{

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_webview";
        this.viewType = WebviewPageView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
    }

    onInit() {
        
    }

    onDestroy() {
        // this.showNetPrompt(false)
    }

    onShow(data: any) {
        //this.view.onShow(data)
    }
}