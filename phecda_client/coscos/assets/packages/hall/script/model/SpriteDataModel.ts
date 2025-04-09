import { Sprite, SpriteFrame, _decorator } from 'cc';
import ResourceManager from '../../../../script/manager/resoure_manager';
import { SpriteManager } from '../../../../script/manager/sprite_manager';
const { ccclass, property } = _decorator;

ccclass("SpriteDataModel")

class _SpriteDataModel {

    private spritesMap: Map<string, SpriteFrame> = new Map<string, SpriteFrame>()

    public SetSprite(sprite: Sprite, url: string) {
        if (url.trim() == "") {
            sprite.spriteFrame = null
            return
        }

        if (url.startsWith("http")) {
            SpriteManager.instance.loadRemoteImage(sprite, url, true)
        } else {
            this.LoadResources(url, (spriteFrame: SpriteFrame) => {
                if (spriteFrame && sprite.isValid && sprite.node && sprite.node.isValid) {
                    sprite.spriteFrame = spriteFrame
                }
            })
        }
    }

    public SetHead(head: Sprite, idOrUrl: any) {
        if (!idOrUrl || idOrUrl == "") {
            return
        }
        let url = ""
        if (typeof (idOrUrl) == "number") {
            url = `images/head/${idOrUrl}`
        } else if (typeof (idOrUrl) == "string") {
            let headID = parseInt(idOrUrl)
            if (!isNaN(headID)) {
                url = `images/head/${headID}`
            } else {
                url = idOrUrl
            }
        }
        this.SetSprite(head, url)
    }

    public LoadResources(url: string, callback: (spf: SpriteFrame, err?: Error) => void) {
        if (!url.endsWith("/spriteFrame")) { url += "/spriteFrame" }
        let spf = this.spritesMap.get(url)
        if (spf) {
            callback(spf)
        } else {
            ResourceManager.loadRes(url, SpriteFrame, (err: Error, spriteFrame: SpriteFrame) => {
                if (!err) {
                    this.spritesMap.set(url, spriteFrame)
                    callback && callback(spriteFrame)
                } else {
                    callback && callback(null, err)
                }
            })
        }
    }
}

export const SpriteDataModel = new _SpriteDataModel()