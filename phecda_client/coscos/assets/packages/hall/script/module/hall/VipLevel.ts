import { _decorator, Component, Node, Label, CCInteger } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('VipLevel')
export class VipLevel extends Component {

    @property(Node)
    v0: Node

    @property(Node)
    v1: Node

    @property(Label)
    v1Label: Label

    @property(CCInteger)
    _lv: number = 0
    @property({ tooltip: "Vip等级" })
    public get lv() { return this._lv }
    public set lv(v: number) {
        this._lv = v
        this.setLevel()
    }

    private setLevel() {
        this.v0.active = this._lv == 0
        this.v1.active = this._lv > 0
        this.v1Label.string = "" + this._lv
    }
}