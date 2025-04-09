
import { _decorator, Component, Node, find, UITransform } from 'cc';
import EventManager from '../../../../../script/manager/event_manager';
const { ccclass, property } = _decorator;


@ccclass('GuideArrow')
export class GuideArrow extends Component {

    private findInterval: NodeJS.Timer = null
    private targetNode: Node = null
    private data = null
    private findCounts = 0

    onLoad() {
        this.node.on("click", this.onArrowClick, this)
    }

    startGuide(data, findCb?) {
        this.clearAllInterval()
        this.targetNode = null
        this.data = data
        this.findCounts = 0
        this.findNode(data.path, findCb)
    }

    findNode(value, cb?) {
        let target = find(value)
        if (!target) {
            this.findCounts++
            if (this.findCounts > 50) {
                console.log("guide cannot find tagert auto compelet:", value)
                this.unscheduleAllCallbacks()
                EventManager.instance.dispatch("GUIDE_ALL_COMPLETE")
                return
            }
            this.scheduleOnce(this.findNode.bind(this, value, cb), 0.2)
        } else {
            this.findCounts = 0
            this.unscheduleAllCallbacks()
            this.targetNode = target
            this.node.setWorldPosition(target.getWorldPosition())
            let trans = this.node.getComponent(UITransform)
            let nodeTrans = target.getComponent(UITransform)
            trans.setContentSize(nodeTrans.contentSize)
            this.node.active = true
            if (cb) {
                cb(target)
            }
        }
    }

    onArrowClick() {
        if (this.targetNode && this.targetNode.isValid) {
            this.targetNode.emit("click")
            this.node.active = false
            if (!this.data || !this.data.waitEventComplete) {
                EventManager.instance.dispatch("GUIDE_SETP_COMPLETE")
            }
        } else {
            console.log("新手引导还没有找到目标！")
        }
    }

    clearAllInterval() {
        if (this.findInterval) {
            clearInterval(this.findInterval)
        }
    }

    onDestroy() {
        this.clearAllInterval()
    }

}

