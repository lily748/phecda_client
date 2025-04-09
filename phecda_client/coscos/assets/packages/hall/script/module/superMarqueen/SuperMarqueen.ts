
import { _decorator, Node, Sprite, Label, Component, math, v3, Tween, tween } from 'cc';
import SpriteFrameHolder from '../../../../../script/utility/ui_extend/spriteframe_holder';
import Utility from '../../../../../script/utility/utility';
import proto from '../../../proto/hall_proto.js';
import { SpriteDataModel } from '../../model/SpriteDataModel';
const { ccclass, property } = _decorator;


@ccclass('SuperMarqueen')
export class SuperMarqueen extends Component {

    @property(Node)
    moveNode: Node

    @property(Sprite)
    icon: Sprite

    @property(Label)
    user: Label

    @property(Label)
    action: Label

    @property(Label)
    money: Label

    @property(Label)
    game: Label
    @property(Label)
    desc: Label

    private moving: boolean = false
    private readonly dis: number = 310
    private readonly duration: number = 8

    private contentList: proto.netproto.IAnnInfo[] = []

    onLoad() {
        this.node.active = false
    }

    public Show(data: proto.netproto.IAnnInfo[]) {
        this.node.active = true
        this.contentList = this.contentList.concat(data).slice(0, 100)
        this.play()
    }

    public Hide() {
        this.moving = false
        this.node.active = false
    }

    public Clear() {
        Tween.stopAllByTarget(this.moveNode)
        this.contentList = []
        if (this.node.isValid)
            this.node.destroy()
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
        this.setInfo(ann.MsgContent)
        this.move()
    }

    private setInfo(msg: string) {
        let json = JSON.parse(msg)
        this.user.string = json.a
        SpriteDataModel.SetHead(this.icon, json.b)
        this.action.string = json.c;
        this.money.string = json.d
        this.game.string = this.handleGameName(json.e)
        this.desc.string = json.f
    }
    private handleGameName(name: string) {
        let list = name.split(" ");
        let newName = "";
        for (let key in list) {
            newName += Utility.instance.wordFirstUpper(list[key]);
        }
        return newName;
    }

    private move() {
        this.moving = true
        this.moveNode.position = v3()
        Tween.stopAllByTarget(this.moveNode)
        tween(this.moveNode)
            .by(0.5, { position: v3(-this.dis) }, { easing: "quartOut" })
            .delay(this.duration)
            .by(0.5, { position: v3(this.dis) }, { easing: "quartOut" })
            .delay(1)
            .call(() => {
                this.moving = false
                this.play()
            })
            .start()
    }
}

