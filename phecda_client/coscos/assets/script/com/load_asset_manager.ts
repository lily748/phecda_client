
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
//异步资源加载句柄
export class ResAsynHandler {
    public url: string;
    public asset: any;
    public onDestory: boolean = false;
    public onComplete: (asset: any) => {};
}

class LoadAssetHandler {
    public url: string;
    public mAsset: any;
    public mTaskList: ResAsynHandler[] = []
    constructor(url: string) {
        this.url = url;
    }

    public onComplete(asset: any) {
        this.mAsset = asset;
        for (let i = 0; i < this.mTaskList.length; i++) {
            var resHandler = this.mTaskList[i]
            if (resHandler && !resHandler.onDestory) {
                resHandler.onComplete && resHandler.onComplete(this.mAsset);
            }
        }
    }
}
@ccclass('load_asset_manager')
export class load_asset_manager {
    private mAssetTaskList: { [url: string]: LoadAssetHandler } = {}

    public loadAsset(url: string): ResAsynHandler {
        let handler = new ResAsynHandler();
        if (!this.mAssetTaskList[url])
            this.mAssetTaskList[url] = new LoadAssetHandler(url);
        this.mAssetTaskList[url].mTaskList.push(handler);
        return handler;
    }

    private loadAssetComplete(url: string, asset: any) {
        if (!this.mAssetTaskList[url]) {
            return;
        }
        this.mAssetTaskList[url].onComplete(asset)
        delete this.mAssetTaskList[url]
    }

    private update() {

    }
}

export class asset_bundle_manager{
    public LoadAsset(){

    }

    public LoadBundle(){

    }

    public LoadScene(){

    }

    public Release(bundle:string){
        
    }
}
