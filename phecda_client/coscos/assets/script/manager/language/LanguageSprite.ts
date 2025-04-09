import { Component, Size, Sprite, SpriteFrame, UITransform, _decorator } from "cc";
import ResourceManager from "../resoure_manager";
import LanguageManager from "./language_manager";

const { ccclass, property, menu } = _decorator;

@ccclass("LanguageSprite")
@menu('ui/language/LanguageSprite')
export class LanguageSprite extends Component {
    @property({ tooltip: "包名" })
    private bundleName: string = "resources"

    @property({ tooltip: "资源路径（language/texture/内的相对路径）" })
    public path: string = ""

    @property({ tooltip: "是否设置为图片原始资源大小" })
    private isRawSize: boolean = true

    private _sprite: Sprite;

    get Sprite() {
        if (!this._sprite) {
            this._sprite = this.getComponent(Sprite)!
        }
        return this._sprite;
    }

    set language(lang: string) {
        this.updateSprite()
    }

    start() {
        this.updateSprite()
    }

    updateSprite() {
        let self = this
        let lang = LanguageManager.instance.current
        let path = `language/texture/${lang}/${this.path}/spriteFrame`
        ResourceManager.loadBundle<SpriteFrame>(this.bundleName, path, SpriteFrame, null, (err, sprite) => {
            if (err) {
                console.error(this.bundleName + "[LanguageSprite] 资源不存在 " + path, err)
            }
            else {
                if (!self || !self.isValid || !self.node || !self.node.isValid) {
                    return
                }
                this.Sprite.spriteFrame = sprite
                if (this.isRawSize) {
                    this.Sprite.getComponent(UITransform)?.setContentSize(sprite.originalSize)
                }
            }
        })
    }
}