

import { _decorator, Component, Node, AssetManager, Asset, assetManager } from 'cc';
import { HotUpdateManager } from '../framework/hotUpdate/HotUpdateManager';
const { ccclass, property } = _decorator;
export enum UpdateStatus {
    None,
    Updateing,
    Failed,
    Success,
}
// export type onLoadComplete = (Asset t)=> void;
export class ResLoadHandler {
    public paths: string;
    public asset: Asset;
    public target: any;
    //是否中断
    public interrupt: boolean;
    public onComplete: (asset: Asset) => void;
}

export class loadAssetTaskHandler {
    public mName: string;
    public mAsset: Asset;
    public mStatus: UpdateStatus = UpdateStatus.None;
    private mTaskList: ResLoadHandler[] = []
    private mMaxCount: number = -1;

    public onComplete(asset: any) {
        this.mAsset = asset;
        this.mStatus = UpdateStatus.Success;
        for (let i = 0; i < this.mTaskList.length; i++) {
            var handler = this.mTaskList[i]
            if (handler && !handler.interrupt && !handler.target) {
                handler.asset = this.mAsset;
                handler.onComplete && handler.onComplete(this.mAsset);
            }
        }
        this.mTaskList = []
    }

    public add(handler: ResLoadHandler) {
        this.mTaskList && this.mTaskList.push(handler)
    }
}

@ccclass('bundle_manager')
export class bundle_manager {
    constructor(bundle: string) {
        this.bundleName = bundle;
    }
    private bundleName: string;
    private bundle: AssetManager.Bundle;
    private preRelease: boolean = false;
    private loadTaskHandlerList: { [key: string]: loadAssetTaskHandler } = {}

    private loadBundle(bundle: string) {
        return new Promise((resolve, reject) => {
            let bundle = assetManager.getBundle(this.bundleName)
            if (bundle) {
                this.bundle = bundle;
                this.update();
                resolve(bundle);
                return;
            }
            else {
                assetManager.loadBundle('assets/' + this.bundleName, (err, bundle) => {
                    if (err) {
                        console.error(err)
                        return reject(err)
                    }
                    HotUpdateManager.addLoadBundleList(this.bundleName)
                    this.bundle = bundle;
                    this.update();
                    resolve(bundle);
                })
            }
        })
    }

    private getResHandler<T extends Asset>(paths: string, onComplete: (T) => void, target: any) {
        let handler: ResLoadHandler = new ResLoadHandler();
        handler.paths = paths;
        handler.onComplete = onComplete;
        handler.target = target;
        return handler;
    }

    private addLoadTask(handler: ResLoadHandler) {
        let paths = handler.paths;
        if (!this.loadTaskHandlerList[paths]) {
            this.loadTaskHandlerList[paths] = new loadAssetTaskHandler();
        }
        let task: loadAssetTaskHandler = this.loadTaskHandlerList[paths]
        if (task.mStatus == UpdateStatus.Success && task.mAsset) {
            handler.onComplete && handler.onComplete(task.mAsset);
            return;
        }
        else {
            task.add(handler)
        }
    }

    public loadScene() {

    }

    public loadAssets<T extends Asset>(paths: string, onComplete: (T) => void, target: any): ResLoadHandler {
        let handler: ResLoadHandler = this.getResHandler(paths, onComplete, target);
        this.addLoadTask(handler)
        this.update();
        return handler;
    }

    public Release() {
        this.preRelease = true;
    }

    private remove() {

    }

    private update() {
        if (!this.bundle) return;
        for (var path in this.loadTaskHandlerList) {
            let handler = this.loadTaskHandlerList[path]
            if (handler.mStatus == UpdateStatus.None) {
                handler.mStatus = UpdateStatus.Updateing;
                this.bundle.load(handler.mName, (err, asset) => {
                    if (err) {
                        console.log(err)
                        handler.mStatus = UpdateStatus.Failed;
                        return
                    }
                    handler.mStatus = UpdateStatus.Success;
                    handler.onComplete(asset)
                })
            }
            if (handler.mStatus == UpdateStatus.Failed) {
                delete this.loadTaskHandlerList[path]
            }
        }
    }
}
