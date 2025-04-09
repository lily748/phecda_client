import { _decorator, Node, Component, UITransform, RichText, Tween, math, tween, instantiate, Prefab, find } from 'cc';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import proto from '../../../proto/hall_proto.js';
import { GlobalMarqueen } from '../superMarqueen/GlobalMarqueen';
import { SuperMarqueen } from '../superMarqueen/SuperMarqueen';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
const { ccclass, property } = _decorator;

const SuperMarqueenID = 10
const GlobalMarqueenID = 888

@ccclass('turntable_marqueen')
export class turntable_marqueen extends Component {

    @property(UITransform)
    mask: UITransform
    @property(RichText)
    label: RichText

    private readonly Speed: number = 60

    private isPlaying: boolean = false
    private list: Array<proto.netproto.IAnnInfo> = []

    private labelList: Array<Node> = []

    private superMarqueen: SuperMarqueen
    private loadingSuperMarqueen: boolean = false

    private globalMarqueen: GlobalMarqueen
    private loadingGlobalMarqueen: boolean = false

    private list_new = []

    onLoad() {
    }

    onDestroy() {
        if (this.superMarqueen) {
            this.superMarqueen.Clear()
        }
    }

    onEnable() {
        this.label.node.active = false
        this.labelList.push(this.label.node)

        this._reqGetHorsemanList();
    }

    onDisable() {
        for (const child of this.mask.node.children) {
            Tween.stopAllByTarget(child)
            child.active = false
        }
        this.isPlaying = false
    }

    private getHallActive(): boolean {
        let hallNode = find("GameRoot/Canvas/Low/Hall")
        if (hallNode) {
            return hallNode.active
        } else
            return true
    }

    public push(data: proto.netproto.AnnList) {
        let superMq = []
        let globalMq = []

        data.Ann.forEach(element => {
            if (!this.list) {
                this.list = new Array<proto.netproto.IAnnInfo>()
            }
            if (element.AnnType == SuperMarqueenID) {
                superMq.push(element)
            } else if (element.AnnType == GlobalMarqueenID) {
                globalMq.push(element)
            } else if (this.list.length < 100) {
                this.list.push(element)
            }
        })
        this.play()

        if (superMq.length > 0) {
            if (!this.getHallActive() ) {
                this.superMarqueen && this.superMarqueen.Clear()
                this.superMarqueen = null
            }
            else
                this.PlaySuperMarqueen(superMq)
        }
        if (globalMq.length > 0) { this.PlayGlobalMarqueen(globalMq) }
    }

    private play() {
        if (this.isPlaying || this.list.length <= 0) { return }

        this.isPlaying = true
        let content = this.list.shift().MsgContent
        this.doMove(content)
    }

    private doMove(content: string) {
        let item = this.getLabelNode()
        if (!item) return
        let lab = item.getComponent(RichText)
        let labTransform = item.getComponent(UITransform)
        item.active = true
        lab.string = `<color=#b8afa6>${content}</color>`
        const pos = new math.Vec3(this.mask.contentSize.width / 2 + labTransform.contentSize.width, item.position.y, 0)
        const dis = labTransform.contentSize.width + this.mask.contentSize.width
        const dur = dis / this.Speed
        const endW = this.mask.contentSize.width * 0.8
        let playNext = false
        let update = (target?: Node, ratio?: number) => {
            if (!playNext) {
                const w = dis * (1 - ratio)
                if (w < endW) {
                    playNext = true
                    this.isPlaying = false
                    this.play()
                }
            }
        }
        let complete = () => {
            lab.string = ""
            item.active = false
            this.labelList.push(item)
        }
        item.position = pos
        tween(item).by(dur, { position: new math.Vec3(-dis, 0, 0) }, { onComplete: complete.bind(this), onUpdate: update.bind(this) }).start()
    }

    private getLabelNode() {
        if (!this.labelList) return null;
        let item = this.labelList.length > 0 ? this.labelList.pop() : instantiate(this.label.node)
        item.setParent(this.mask.node)
        item.setSiblingIndex(this.mask.node.children.length - 1)
        return item
    }

    private PlaySuperMarqueen(superMq: proto.netproto.IAnnInfo[]) {
        if (!this.loadingSuperMarqueen && !this.superMarqueen) {
            this.loadingSuperMarqueen = true
            ResourceManager.loadRes("prefabs/public_super_marqueen", Prefab, (err: Error, pre: Prefab) => {
                if (!err) {
                    if (!superMq || !this || !this.isValid || !this.node || !this.node.isValid) {
                        return
                    }
                    let item = instantiate(pre)
                    let parent = find("GameRoot/Canvas/Marqueen")
                    parent.destroyAllChildren()
                    item.setParent(parent)
                    this.superMarqueen = item.getComponent(SuperMarqueen)
                    this.superMarqueen.Show(superMq)
                }
                this.loadingSuperMarqueen = false
            })
        } else if (this.superMarqueen) {
            this.superMarqueen.Show(superMq)
        }
    }

    private PlayGlobalMarqueen(globalMq: proto.netproto.IAnnInfo[]) {
        if (!this.loadingGlobalMarqueen && !this.globalMarqueen) {
            this.loadingGlobalMarqueen = true
            let glbItem = find("GameRoot/Canvas/High/GlobalMarqueen")
            if (glbItem) {
                this.globalMarqueen = glbItem.getComponent(GlobalMarqueen)
                this.globalMarqueen.Show(globalMq)
                this.loadingGlobalMarqueen = false
            } else {
                ResourceManager.loadRes("prefabs/public_global_marqueen", Prefab, (err: Error, pre: Prefab) => {
                    if (!err) {
                        if (!globalMq || !this || !this.isValid || !this.node || !this.node.isValid) {
                            return
                        }
                        let item = instantiate(pre)
                        item.name = "GlobalMarqueen"
                        item.setParent(find("GameRoot/Canvas/High"))
                        this.globalMarqueen = item.getComponent(GlobalMarqueen)
                        this.globalMarqueen.Show(globalMq)
                    }
                    this.loadingGlobalMarqueen = false
                })
            }
        } else if (this.globalMarqueen) {
            this.globalMarqueen.Show(globalMq)
        }
    }

    private play_new() {
        if (this.isPlaying || this.list_new.length <= 0) { return }

        this.isPlaying = true
        let content = this.list_new.shift()
        this.doMove_new(content)
    }

    private doMove_new(content: any) {
        let item = this.getLabelNode()
        if (!item) return
        let lab = item.getComponent(RichText)
        let labTransform = item.getComponent(UITransform)
        item.active = true
        lab.string=content;
        const pos = new math.Vec3(this.mask.contentSize.width / 2 + labTransform.contentSize.width, item.position.y, 0)
        const dis = labTransform.contentSize.width + this.mask.contentSize.width
        const dur = dis / this.Speed
        const endW = this.mask.contentSize.width * 0.8
        let playNext = false
        let update = (target?: Node, ratio?: number) => {
            if (!playNext) {
                const w = dis * (1 - ratio)
                if (w < endW) {
                    playNext = true
                    this.isPlaying = false
                    this.play_new()
                }
            }
        }
        let complete = () => {
            lab.string = ""
            item.active = false
            this.labelList.push(item)
            this.list_new.push(content);
        }
        item.position = pos
        tween(item).by(dur, { position: new math.Vec3(-dis, 0, 0) }, { onComplete: complete.bind(this), onUpdate: update.bind(this) }).start()
    }

    //请求跑马灯数据
    private _reqGetHorsemanList(){
        let info: PostData = {
            Target: this,
            Url: Http_Define.turntableMarquee,
            Params: {},
            Callback: this._rspGetHorsemanList.bind(this),
            ForceRequest: true,
            FailToast: false,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspGetHorsemanList(msg: any) {
        if (msg && msg.code == 0) {
            this.list_new=msg.data.list;
            this.play_new();
        } 
    }
}