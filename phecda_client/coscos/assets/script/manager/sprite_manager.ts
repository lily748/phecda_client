
import { _decorator, Component, Node, Sprite, SpriteFrame, assetManager, ImageAsset, Texture2D, SpringJoint2D, sys, path, Asset, RenderTexture } from 'cc';
const { ccclass, property } = _decorator;

export class loadRemoteTexHandler {
    public url: string;
    public spri: Sprite;
    public destory: boolean = false;
    public uuid: string = "";
    public onComplete: (asset: SpriteFrame) => void;
}

export enum UpdateStatus {
    None,
    Updateing,
    Failed,
    Success,
}

export class loadRemoteTaskHandler {
    public url: string;
    public mAsset: any;
    public mStatus: UpdateStatus = UpdateStatus.None;

    private mTaskList: loadRemoteTexHandler[] = []
    constructor(url: string) {
        this.url = url;
    }

    public onComplete(asset: any) {
        this.mAsset = asset;
        this.mStatus = UpdateStatus.Success;
        for (let i = 0; i < this.mTaskList.length; i++) {
            var handler = this.mTaskList[i]
            if (handler && !handler.destory) {
                handler.onComplete && handler.onComplete(this.mAsset);
            }
        }
        this.mTaskList = []
    }

    public add(handler: loadRemoteTexHandler) {
        this.mTaskList.push(handler)
    }
}

@ccclass('SpriteManager')
export class SpriteManager extends Component {
    public static instance: SpriteManager;
    private recoveryList: { [key: string]: number } = {}
    private storagePath: string = sys.isNative ? jsb.fileUtils.getWritablePath() + "img/" : ""

    private loadRemoteHandlerList: { [key: string]: loadRemoteTexHandler } = {}
    private loadRemoteTaskList: loadRemoteTaskHandler[] = []
    onLoad() {
        if (SpriteManager.instance == null) {
            SpriteManager.instance = this
        }
    }

    public loadRemoteImage(sp: Sprite, url: string, isCache: boolean = true): loadRemoteTexHandler {
        if (!sp) {
            return null;
        }
        let uuid = sp.uuid;
        let handler = this.loadRemoteHandlerList[uuid]
        if (handler) {
            if (handler.url == url) return handler;
            handler.destory = true
            delete this.loadRemoteHandlerList[uuid]
        }

        handler = new loadRemoteTexHandler();
        handler.url = url;
        handler.spri = sp;
        handler.destory = false;
        handler.onComplete = (asset) => {
            if (handler.spri && handler.spri.isValid && handler.spri.node.isValid) {
                handler.spri.spriteFrame = asset;
            }
            delete this.loadRemoteHandlerList[uuid]
        }

        this.loadRemoteHandlerList[uuid] = handler
        this.AddLoadRemoteTask(handler, isCache);
        return handler;
    }

    public AddLoadRemoteTask(handler: loadRemoteTexHandler, isCache: boolean = true) {
        let url = handler.url.trim();
        if (!this.loadRemoteTaskList[url])
            this.loadRemoteTaskList[url] = new loadRemoteTaskHandler(url)
        let task: loadRemoteTaskHandler = this.loadRemoteTaskList[url]
        if (task.mAsset) {
            handler.onComplete && handler.onComplete(task.mAsset);
            return;
        }
        else {
            task.add(handler)
        }
        if (task.mStatus == UpdateStatus.None) {
            task.mStatus = UpdateStatus.Updateing;
            this.downloadImage(task, isCache)
        }
    }

    //
    private async downloadImage(handler: loadRemoteTaskHandler, isCache: boolean) {
        let filePath = handler.url;
        // if (isCache && sys.isNative) {
        //     filePath = this.storagePath + path.basename(handler.url)
        //     if (!jsb.fileUtils.isFileExist(filePath)) {
        //         let code = await this.downloadHttp(handler.url, filePath)
        //         if (code == 0) {
        //             console.log("资源下载失败 " + handler.url)
        //             delete this.loadRemoteTaskList[handler.url]
        //             if (jsb.fileUtils.isFileExist(filePath)) {
        //                 console.log("删除本地文件 " + filePath)
        //                 jsb.fileUtils.removeFile(filePath)
        //             }
        //             return;
        //         }
        //     }
        // }

        let spFrame = await this.loadRemoteAsset(filePath)
        if (this.loadRemoteTaskList[handler.url] && spFrame)
            this.loadRemoteTaskList[handler.url].onComplete(spFrame)
        else {
            delete this.loadRemoteTaskList[handler.url]
        }
    }

    private downloadHttp(url: string, filePath: string) {
        return new Promise((reslove, reject) => {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = async () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        let ret = this.saveToStorage(filePath, xhr.response)
                        if (ret)
                            reslove(1);
                        else
                            reslove(0)
                    }
                    else {
                        reslove(0)
                    }
                }
            }
            xhr.responseType = "arraybuffer"
            xhr.open("GET", url, true)
            xhr.onerror = () => {
                reslove(0)
            }
            xhr.ontimeout = () => {
                reslove(0)
            }
            xhr.send()
        })
    }

    private loadRemoteAsset(url: string): Promise<SpriteFrame> {
        return new Promise((reslove, reject) => {
            assetManager.loadRemote<ImageAsset>(url, { ext: '.png' }, (err, imageAsset) => {
                if (err) {
                    console.error("load remote asset ", err)
                    if (sys.isNative && url.startsWith(this.storagePath) && jsb.fileUtils.isFileExist(url)) {
                        jsb.fileUtils.removeFile(url)
                    }
                }
                if (!err && imageAsset) {
                    const texture = new Texture2D();
                    texture.image = imageAsset;
                    let spFrame = new SpriteFrame();
                    spFrame.texture = texture;
                    spFrame._uuid = imageAsset._uuid;
                    reslove(spFrame)
                }
                else {
                    reslove(undefined)
                }
            })
        })

    }

    public decRef(spFrame: SpriteFrame) {
        spFrame.decRef(false);
        if (spFrame.refCount <= 0) {
            if (this.recoveryList[spFrame._uuid]) {
                // console.error("存在回收列表")
            }
            else {
                this.recoveryList[spFrame._uuid] = new Date().getTime()
                // console.log("加入回收列表 UUID:%s  Time:%s", spFrame._uuid, this.recoveryList[spFrame._uuid])
            }
        }
        // console.log("decRef ", this.cache[spFrame._uuid])
    }

    private saveToStorage(url: string, data) {
        if (!sys.isNative) {
            return false;
        }
        if (!jsb.fileUtils.isDirectoryExist(this.storagePath)) {
            jsb.fileUtils.createDirectory(this.storagePath)
        }
        let arr = new Uint8Array(data)
        if (arr.length > 8 && jsb.fileUtils.writeDataToFile(arr, url)) {
            if (jsb.fileUtils.isFileExist(url)) {
                console.log("保存成功", url)
                return true;
            }
            else {
                console.log("保存失败 ", url)
                return false;
            }
        }
        return false;
    }
}

