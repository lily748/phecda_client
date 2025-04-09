import { _decorator, SpriteFrame, Component, ImageAsset } from 'cc';
const { ccclass } = _decorator;
import ResourceManager from "./resoure_manager";

class TextureCache {
    key: string
    spriteFrame: SpriteFrame
    constructor() { }
}

class ReloadCache {
    key: string
    count: number
    constructor() { }
}

export default class TextureManager extends Component {

    public static readonly instance: TextureManager = new TextureManager();

    private spriteCache: TextureCache[] = []
    private reloadCache: ReloadCache[] = []
    private reloadTimeArray = [1000, 3000, 5000]//加载失败后重新加载间隔时间
    private _waitList = []
    private _maxDownloadCount = 5//同时下载限制5次

    clear() {
        this.spriteCache = []
        this.reloadCache = []
    }

    //加载远程图片
    loadRemoteTexture(key: string, success: (sf: SpriteFrame) => void, notAdd?) {
        let self = this
        let doNext = function (key1, frame) {
            for (let i = 0; i < self._waitList.length; i++) {
                if (self._waitList[i]['key'] == key1) {
                    self._waitList[i]['callback'](frame)
                    self._waitList.splice(i, 1)
                    i--
                }
            }
            self.addSpriteFrame(key1, frame)
            if (self._waitList.length > 0) {
                let key = self._waitList[0]['key']
                let callback = self._waitList[0]['callback']
                self.loadRemoteTexture(key, callback, true)
            }
        }

        let data = {}
        data['key'] = key
        data['callback'] = success
        if (!notAdd) {
            this._waitList.push(data)
        }

        let cahceData = this.hasSpriteFrame(key)
        if (cahceData && cahceData.spriteFrame) {
            doNext(key, cahceData.spriteFrame)
            return
        }

        if (this._waitList.length > this._maxDownloadCount && !notAdd) {
            return
        }

        ResourceManager.loadRemoteTexture(key, (err, texture: ImageAsset) => {
            if (texture) {
                let frame = SpriteFrame.createWithImage(texture)
                self.removeReloadCache(key)
                doNext(key, frame)
            } else {
                let time = self.getReloadTime(key)
                if (time > 0) {
                    setTimeout(() => {
                        self.loadRemoteTexture(key, success)
                    }, time);
                } else {
                    console.warn("下载图片出错：", key)
                }
            }
        });
    }

    private hasSpriteFrame(key: string) {
        let length = this.spriteCache.length
        for (let i = 0; i < length; i++) {
            if (this.spriteCache[i].key == key) {
                return this.spriteCache[i]
            }
        }
        return null
    }

    private addSpriteFrame(key: string, spriteFrame: SpriteFrame) {
        let cahceData = this.hasSpriteFrame(key)
        if (!cahceData) {
            let spriteData = new TextureCache()
            spriteData.key = key
            spriteData.spriteFrame = spriteFrame
            this.spriteCache.push(spriteData)
        } else {
            cahceData.spriteFrame = spriteFrame
        }
    }

    private hasReloadCache(key: string) {
        let length = this.reloadCache.length
        for (let i = 0; i < length; i++) {
            if (this.reloadCache[i].key == key) {
                return i
            }
        }
        return -1
    }

    private removeReloadCache(key: string) {
        let index = this.hasReloadCache(key)
        if (index > 0) {
            this.reloadCache.splice(index, 1)
        }
    }

    private getReloadTime(key: string) {
        let index = this.hasReloadCache(key)
        if (index < 0) {
            let spriteData = new ReloadCache()
            spriteData.key = key
            spriteData.count = 0
            this.reloadCache.push(spriteData)
            if (spriteData.count >= this.reloadTimeArray.length) {
                return -1
            } else {
                return this.reloadTimeArray[spriteData.count]
            }
        } else {
            let spriteData = this.reloadCache[index]
            spriteData.count = spriteData.count + 1
            if (spriteData.count >= this.reloadTimeArray.length) {
                return -1
            } else {
                return this.reloadTimeArray[spriteData.count]
            }
        }
    }
}