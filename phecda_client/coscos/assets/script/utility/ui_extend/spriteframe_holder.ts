import { _decorator, SpriteFrame, Component, Sprite, CCString } from 'cc';
const { ccclass, property, menu } = _decorator;

@ccclass("SpriteFrameKeyPair")
class SpriteFrameKeyPair {
    @property(SpriteFrame)
    spriteFrame: SpriteFrame | null = null
    @property(CCString)
    key: string = ''
}

@ccclass('SpriteframeHolder')
@menu('Custom/SpriteFrameHolder')
export default class SpriteFrameHolder extends Component {

    @property([SpriteFrameKeyPair])
    spriteFrameList: SpriteFrameKeyPair[] = []

    getSpriteFrameByKey(key: string) {
        for (let i = 0; i < this.spriteFrameList.length; i++) {
            const element = this.spriteFrameList[i];
            if (element.key == key) {
                return element.spriteFrame
            }
        }
        return null
    }

    setRoleSkin(sprite: Sprite, id: number) {
        let key = id.toString()
        let frame = this.getSpriteFrameByKey(key)
        if (frame) {
            sprite.spriteFrame = frame
        } else {
            sprite.spriteFrame = this.getSpriteFrameByKey("0")
        }
    }
}