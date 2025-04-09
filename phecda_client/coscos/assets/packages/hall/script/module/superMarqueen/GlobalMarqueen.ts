
import { _decorator, Node, Sprite, Label, Component, math, v3, Tween, tween, RichText, UITransform } from 'cc';
import SpriteFrameHolder from '../../../../../script/utility/ui_extend/spriteframe_holder';
import proto from '../../../proto/hall_proto.js';
const { ccclass, property } = _decorator;


@ccclass('GlobalMarqueen')
export class GlobalMarqueen extends Component {

    @property(Node)
    root: Node

    @property(UITransform)
    mask: UITransform

    @property(RichText)
    content: RichText

    private moving: boolean = false

    private contentList: proto.netproto.IAnnInfo[] = []

    onLoad() {
        this.node.active = false
    }

    public Show(data: proto.netproto.IAnnInfo[]) {
        this.node.active = true
        this.contentList = this.contentList.concat(data)
        this.play()
    }

    public Hide() {
        this.moving = false
        this.node.active = false
    }

    private play() {
        if (this.moving) {
            return
        }
        if (this.contentList?.length <= 0) {
            this.Hide()
            return
        }

        let ann = this.contentList.shift()
        this.move(ann.MsgContent)
    }

    private move(str: string) {
        this.moving = true
        Tween.stopAllByTarget(this.content.node)
        let trans = this.content.getComponent(UITransform)
        this.content.string = str
        const pos = v3(this.mask.contentSize.width / 2, 0, 0)
        const dis = trans.contentSize.width + this.mask.contentSize.width
        const dur = dis / 60
        this.content.node.position = pos
        let tw = tween(this.content.node)
        tw.by(dur, { position: v3(-dis, 0, 0) })
        tw.call(() => {
            this.moving = false
            this.play()
        })
        tw.start()
    }

    onDestroy() {

    }
}

