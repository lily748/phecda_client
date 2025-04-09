import { _decorator, Component, SpriteFrame, Sprite } from 'cc';
const { ccclass, property, menu } = _decorator;

@ccclass('ImageFont')
@menu('Custom/数字图片字组件')
export default class ImageFont extends Component {

    @property([SpriteFrame])
    sourceSprites: SpriteFrame[] = []
    @property([Sprite])
    numSprites: Sprite[] = []

    setNum(num) {
        if (num < 10) {
            this.showCount(1)
            this.numSprites[0].spriteFrame = this.sourceSprites[num]
        } else if (num < 99) {
            this.showCount(2)
            let ge = Math.floor(num % 10)
            let shi = Math.floor(num / 10)
            this.numSprites[0].spriteFrame = this.sourceSprites[shi]
            this.numSprites[1].spriteFrame = this.sourceSprites[ge]
        } else if (num < 999) {
            this.showCount(3)
            let bai = Math.floor(num / 100)
            let shi = Math.floor(num / 10 % 10)
            let ge = Math.floor(num % 10)
            this.numSprites[0].spriteFrame = this.sourceSprites[bai]
            this.numSprites[1].spriteFrame = this.sourceSprites[shi]
            this.numSprites[2].spriteFrame = this.sourceSprites[ge]
        }
    }
    
    private showCount(count) {
        let length = this.numSprites.length
        for (let i = 0; i < length; i++) {
            this.numSprites[i].node.active = i < count
        }
    }
}