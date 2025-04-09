
import { _decorator, Component, Node, Sprite, SpriteAtlas, SpriteFrame, CCInteger, Layout, CCString } from 'cc';
const { ccclass, property } = _decorator;

@ccclass("ImgNumKeyPair")
class ImgNumKeyPair {
    @property(CCString)
    key: string = ""
    @property(SpriteFrame)
    spriteFrame: SpriteFrame
}

@ccclass('ImageNum')
export class ImageNum extends Component {

    @property([ImgNumKeyPair])
    nums: ImgNumKeyPair[] = []

    @property(CCInteger)
    spacing: number = 0

    private init() {
        let layout = this.node.getComponent(Layout)
        if (!layout) {
            layout = this.node.addComponent(Layout)
            layout.type = Layout.Type.HORIZONTAL
            layout.resizeMode = Layout.ResizeMode.CONTAINER
            layout.spacingX = this.spacing
            for (let i = 0; i < this.nums.length; i++) {
                if (this.nums[i].key.length == 0) {
                    this.nums[i].key = "" + i
                }
            }
        }
    }

    public SetNum(num: number | string) {
        this.init()
        let children: Node[] = []
        for (let i = 0; i < this.node.children.length; i++) {
            this.node.children[i].active = false
            children.push(this.node.children[i])
        }
        let str = "" + num
        let idx = 0
        for (const s of str) {
            let num = this.nums.find((v: ImgNumKeyPair) => v.key == s)
            if (num) {
                if (children[idx]) {
                    let sp = children[idx].getComponent(Sprite)
                    if (!sp) sp = children[idx].addComponent(Sprite)
                    sp.spriteFrame = num.spriteFrame
                    children[idx].active = true
                } else {
                    let nd = new Node()
                    nd.layer = this.node.layer
                    nd.setParent(this.node)
                    nd.addComponent(Sprite).spriteFrame = num.spriteFrame
                }
                idx++
            } else {
                console.log(`${s}不存在`)
            }
        }
    }
}