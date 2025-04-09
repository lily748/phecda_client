
import { _decorator, Node, UITransform, Vec3, Mask, JsonAsset, sp } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import EventManager from '../../../../../script/manager/event_manager';
import LoaclStorage from '../../../../../script/manager/local_storage';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
import { GuideArrow } from './guide_arrow';
const { ccclass, property } = _decorator;

export enum GuideType {
    Arrow = "arrow",
    Dailog = "dailog"
}

@ccclass('GuideView')
export class GuideView extends ViewBase {

    @property(Node)
    guideRoot: Node = null

    @property(GuideArrow)
    guideArrow: GuideArrow = null

    @property(Mask)
    mask: Mask = null

    @property(JsonAsset)
    taskJson: JsonAsset = null

    @property(Node)
    clickAnimNode: Node = null

    private _task: any
    private _curStepIndex = 0
    private _inGuide = false
    private _waitTimeout = null
    private _showMask = false
    private _clickAnimTimeout = null
    private _targetNode: Node = null
    private _spAnim: sp.Skeleton = null

    get inGuide() {
        return this._inGuide
    }

    onLoad() {
        EventManager.instance.on("GUIDE_ALL_COMPLETE", this.close, this)
        EventManager.instance.on("GUIDE_SETP_COMPLETE", this.onStepComplete, this)
        EventManager.instance.on("GUIDE_SETP_RESTART", this.onStepRestart, this)
        this.guideRoot.on("click", this.onOtherAreaClick, this)
        this.init()
    }

    onDestroy() {
        EventManager.instance.off("GUIDE_ALL_COMPLETE", this.close, this)
        EventManager.instance.off("GUIDE_SETP_COMPLETE", this.onStepComplete, this)
        EventManager.instance.off("GUIDE_SETP_RESTART", this.onStepRestart, this)
        if (this._waitTimeout) {
            clearTimeout(this._waitTimeout)
        }
        if (this._clickAnimTimeout) {
            clearTimeout(this._clickAnimTimeout)
        }
    }

    onOtherAreaClick() {
        if (!this._targetNode) {
            return
        }

        let self = this
        if (this._clickAnimTimeout) {
            clearTimeout(this._clickAnimTimeout)
        }
        this._clickAnimTimeout = setTimeout(function () {
            self.clickAnimNode.active = false
        }, 1000)

        if (!this.clickAnimNode.active) {
            this.clickAnimNode.active = true
            this._spAnim.setAnimation(0, "quan", true)
        }
    }

    getUserGuideKey() {
        return UserDataModel.GetCurrentUserID() + "_GUIDE_STEP_KEY"
    }

    init() {
        this._spAnim = this.clickAnimNode.getComponent(sp.Skeleton)
        this._targetNode = null
        this.clickAnimNode.active = false
        this.guideRoot.active = false
        this.guideArrow.node.active = false
        this.mask.inverted = true
        this.mask.node.active = false
        this._task = this.taskJson.json
    }

    guideStart() {
        console.log("新手引导开始")
        if (this._inGuide) {
            return
        }
        if (!this._task) {
            return
        }
        this._inGuide = true
        this.guideRoot.active = true
        this._curStepIndex = LoaclStorage.getNumber(this.getUserGuideKey(), 0)
        console.warn("引导从开始：", this._curStepIndex)
        this.doNextGuide()
    }

    doNextGuide() {
        if (this._clickAnimTimeout) {
            clearTimeout(this._clickAnimTimeout)
        }
        this.clickAnimNode.active = false
        if (this._waitTimeout) {
            clearTimeout(this._waitTimeout)
        }
        if (this._curStepIndex >= this._task.steps.length) {//本条引导完成
            console.log("所有引导完成！")
            this.close()
        } else {
            let data = this._task.steps[this._curStepIndex]
            if (data.module && data.module != "") {
                ModuleManager.instance.showModule(data.module, UserDataModel.rewardNum)
            }
            if (data.cmd == GuideType.Arrow) {
                if (data.delayTime > 0) {
                    this._waitTimeout = setTimeout(function () {
                        this.guideArrow.startGuide(data, this.focusToNode.bind(this))
                    }.bind(this), data.delayTime)
                } else {
                    this.guideArrow.startGuide(data, this.focusToNode.bind(this))
                }
            }
        }
    }

    onStepRestart() {
        if (!this || !this.isValid || !this.node || !this.node.isValid || !this.guideRoot.active) {
            return
        }
        this.doNextGuide()
    }

    onStepComplete() {
        if (!this || !this.isValid || !this.node || !this.node.isValid || !this.guideRoot.active) {
            return
        }

        if (this._clickAnimTimeout) {
            clearTimeout(this._clickAnimTimeout)
        }
        let data = this._task.steps[this._curStepIndex]
        let saveStep = data.keyStep
        this.clickAnimNode.active = false
        this._targetNode = null
        this._curStepIndex++
        if (saveStep) {
            LoaclStorage.setNumber(this.getUserGuideKey(), this._curStepIndex)
        }
        this.doNextGuide()
    }

    close() {
        UserDataModel.inGuide = false
        this._inGuide = false
        this.mask.node.active = false
        this._task = null
        this._curStepIndex = 0
        this.guideRoot.active = false
        ModuleManager.instance.hideModule(CommonName.MODULE.Guide)
    }

    fillPoints(points) {
        let p0 = points[0];
        this.mask["_graphics"].moveTo(p0.x, p0.y);
        points.slice(1).forEach(p => {
            this.mask["_graphics"].lineTo(p.x, p.y);
        });
        this.mask["_graphics"].lineTo(p0.x, p0.y);
        this.mask["_graphics"].stroke();
        this.mask["_graphics"].fill();
    }


    focusToNode(node: Node) {
        this._targetNode = node
        this.clickAnimNode.setWorldPosition(node.getWorldPosition())
        if (this._showMask) {
            this.mask.node.active = true
            this.mask["_graphics"].clear()
            let trans = node.getComponent(UITransform)
            let rect = trans.getBoundingBoxToWorld()
            let myTrans = this.node.getComponent(UITransform)
            let p = myTrans.convertToNodeSpaceAR(new Vec3(rect.origin.x, rect.origin.y, 0))
            rect.x = p.x
            rect.y = p.y
            this.mask["_graphics"].fillRect(rect.x, rect.y, rect.width, rect.height)
            return rect
        }
    }



}
