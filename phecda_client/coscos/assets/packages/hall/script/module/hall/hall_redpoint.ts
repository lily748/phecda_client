
import { _decorator, Component, Node, CCInteger, Enum, sp } from 'cc';
import EventManager from '../../../../../script/manager/event_manager';
import CommonName from '../../model/CommonName';
import { UserDataModel, RedPointType } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;


@ccclass('HallRedPoint')
export class HallRedPoint extends Component {

    // @property(Node)
    // msgRedNode: Node = null
    @property(sp.Skeleton)
    anim: sp.Skeleton

    @property(Node)
    dotNode: Node

    @property({ type: Enum(RedPointType), displayName: "红点类型" })
    type = RedPointType.None


    onLoad() {
        EventManager.instance.mulOn(CommonName.EVENT.RedPoint_Event, this.onReadPointEvent, this)
    }

    start() {
        this.setAnim(UserDataModel.hasReadPointByType(this.type))
    }

    onDestroy() {
        EventManager.instance.off(CommonName.EVENT.RedPoint_Event, this.onReadPointEvent, this)
    }

    private onReadPointEvent(type: number, show: boolean) {
        if (this.dotNode?.active && show) {
            this.dotNode.active = false
            this.dotNode.active = true
        }
        if (type == this.type) {
            this.setAnim(show)
        }
    }

    private setAnim(show: boolean) {
        this.anim?.setAnimation(0, show ? "animation" : "stop", true)
        if (this.dotNode) this.dotNode.active = show
    }
}

