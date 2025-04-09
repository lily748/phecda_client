
import { _decorator, Component, Node, CCString, CCBoolean, Vec3, Vec2, CCInteger, Label, Sprite, Color, UIOpacity, UITransform } from 'cc';
const { ccclass, property, inspector, executeInEditMode, menu } = _decorator;

@ccclass('CCTransform')
export class CCTransform {

    @property(CCString)
    nodeUuid = ""
    @property(CCString)
    guid = ""
    @property(CCString)
    stateUuid = ""
    @property(CCBoolean)
    active = true
    @property(Vec3)
    position: Vec3 = new Vec3(0, 0, 0)
    @property(Vec3)
    rotation: Vec3 = new Vec3(0, 0, 0)
    @property(Vec3)
    scale: Vec3 = new Vec3(0, 0, 0)
    @property(Vec2)
    anchor: Vec2 = new Vec2(0.5, 0.5)
    @property(Vec2)
    size: Vec2 = new Vec2(0, 0)
    @property(CCInteger)
    opacity = 255
    @property(Vec3)
    color: Vec3 = new Vec3(255, 255, 255)
}

@ccclass('SwitchState')
export class SwitchState {
    @property(CCString)
    uuid = ""
    @property(CCString)
    name = ""
}

@ccclass('TargetNode')
export class TargetNode {
    @property(CCString)
    guid = ""
    @property(Node)
    node: Node = null
}

@ccclass('UISwitcher')
@inspector('packages://ui_switcher/inspector/switcher/switcher.js')
@executeInEditMode()
@menu('Custom/UI状态切换组件')
export class UISwitcher extends Component {

    @property({ visible: false })
    targetNodes: TargetNode[] = []

    @property({ visible: false })
    switchStates: SwitchState[] = []

    @property({ visible: false })
    ccTransforms: CCTransform[] = []

    @property({ visible: false })
    public curState = 0

    public set onSwitchStatesChange(value) {
        if (value) {
            let s = value.states
            let states = []
            for (let i = 0; i < s.length; i++) {
                let item: any = s[i]
                let state = new SwitchState()
                state.uuid = item.uuid
                state.name = item.name
                states.push(state)
            }
            this.switchStates = states
        }
    }

    public set onRemoveSwitchState(value) {
        if (value != null) {
            let uuid = value.uuid
            let states = []
            for (let i = 0; i < this.switchStates.length; i++) {
                if (uuid != this.switchStates[i].uuid) {
                    states.push(this.switchStates[i])
                }
            }
            this.switchStates = states
            let transforms = []
            for (let i = 0; i < this.ccTransforms.length; i++) {
                if (this.ccTransforms[i].stateUuid != uuid) {
                    transforms.push(this.ccTransforms[i])
                }
            }
            this.ccTransforms = transforms
        }
    }

    public set onAddSwitchState(value) {
        if (value != null) {
            let state = new SwitchState()
            state.uuid = value.uuid
            state.name = ""
            this.switchStates.push(state)
            this._removeStateByUuid(value)
            this._addStateByUuid(value)
        }
    }

    public set onCurStateChange(value) {
        if (value) {
            let index = value.index
            this.curState = index
            this._onCurStateChange(index)
        }
    }

    public set onTransChange(value) {
        if (value && value != "") {
            let transforms = []
            let t: any = JSON.parse(value.trans)
            let stateUuid = t[0].stateUuid
            for (let i = 0; i < this.ccTransforms.length; i++) {
                if (this.ccTransforms[i].stateUuid != stateUuid) {
                    transforms.push(this.ccTransforms[i])
                }
            }
            for (let i = 0; i < t.length; i++) {
                let item = t[i]
                let trans = new CCTransform()
                trans.nodeUuid = item.nodeUuid
                trans.guid = item.guid
                trans.stateUuid = item.stateUuid
                trans.active = item.active
                trans.position = item.position
                trans.rotation = item.rotation
                trans.scale = item.scale
                trans.anchor = item.anchor
                trans.size = item.size
                trans.color = item.color
                trans.opacity = item.opacity
                transforms.push(trans)
            }
            this.ccTransforms = transforms
        }
    }

    public set onRemoveTarget(value) {
        if (value != null) {
            let nodes = []
            for (let i = 0; i < this.targetNodes.length; i++) {
                if (this.targetNodes[i].guid != value.guid) {
                    nodes.push(this.targetNodes[i])
                }
            }
            this.targetNodes = nodes
            let transforms = []
            for (let i = 0; i < this.ccTransforms.length; i++) {
                if (this.ccTransforms[i].guid != value.guid) {
                    transforms.push(this.ccTransforms[i])
                }
            }
            this.ccTransforms = transforms
        }
    }

    public set onAddTarget(value) {
        if (value) {
            this._changeTargetByGuid(value.uuid, value.guid)
        } else {
            console.error("添加目标值错误")
        }
    }

    public set onChangeTarget(value) {
        if (value) {
            this._changeTargetByGuid(value.uuid, value.guid)
        } else {
            console.error("修改目标值错误")
        }
    }

    changeStateByIndex(index) {
        this.curState = index
        this._onCurStateChange(index)
    }

    changeStateByName(name) {
        for (let i = 0; i < this.switchStates.length; i++) {
            if (name == this.switchStates[i].name) {
                this.changeStateByIndex(i)
                break
            }
        }
    }

    _onStatesChange() {
        let transforms = []
        let states = []
        for (let i = 0; i < this.switchStates.length; i++) {
            states.push(this.switchStates[i].uuid)
        }
        for (let i = 0; i < this.ccTransforms.length; i++) {
            if (states.indexOf(this.ccTransforms[i].stateUuid) >= 0) {
                transforms.push(this.ccTransforms[i])
            }
        }
        this.ccTransforms = transforms
    }

    _onCurStateChange(index) {
        let curState = this.switchStates[index]
        let transforms = this.ccTransforms
        for (let i = 0; i < transforms.length; i++) {
            let trans = transforms[i]
            if (trans.stateUuid != curState.uuid) {
                continue
            }
            let child = this._getNodeByGuid(trans.guid)
            if (child) {
                child.active = trans.active
                child.setPosition(trans.position)
                child.eulerAngles = trans.rotation
                child.setScale(trans.scale)
                let uiTrans = child.getComponent(UITransform)
                if (uiTrans) {
                    uiTrans.setAnchorPoint(trans.anchor.x, trans.anchor.y)
                    uiTrans.setContentSize(trans.size.x, trans.size.y)
                }
                let render: any = null
                render = child.getComponent(Label)
                if (!render) {
                    render = child.getComponent(Sprite)
                }
                if (render) {
                    render.color = new Color(trans.color.x, trans.color.y, trans.color.z, trans.opacity)
                } else {
                    let opacity = child.getComponent(UIOpacity)
                    if (opacity) {
                        opacity.opacity = trans.opacity
                    }
                }
            } else {
                console.warn("没有找到此节点：" + trans.guid)
            }
        }
    }

    _getNodeByGuid(guid): Node {
        for (let i = 0; i < this.targetNodes.length; i++) {
            if (this.targetNodes[i].guid == guid) {
                return this.targetNodes[i].node
            }
        }
        return null
    }

    _changeTargetByGuid(newUuid, guid) {
        this._removeTargetTransByUuid(guid)
        this._changeTargetTransByUuid(newUuid, guid)
    }

    _removeTargetTransByUuid(guid) {
        let transforms = []
        for (let i = 0; i < this.ccTransforms.length; i++) {
            if (this.ccTransforms[i].guid != guid) {
                transforms.push(this.ccTransforms[i])
            }
        }
        this.ccTransforms = transforms
    }

    _changeTargetTransByUuid(uuid, guid) {
        let node: Node = this._getNodeByUuid(uuid)
        if (!node && uuid != "") {
            console.warn("未找到此node:" + uuid)
            return
        }
        let has = false
        for (let i = 0; i < this.targetNodes.length; i++) {
            if (this.targetNodes[i].guid == guid) {
                this.targetNodes[i].node = node
                has = true
            }
        }
        if (!has) {
            let tNode = new TargetNode()
            tNode.guid = guid
            tNode.node = node
            this.targetNodes.push(tNode)
        }

        for (let i = 0; i < this.switchStates.length; i++) {
            let trans = new CCTransform()
            trans.nodeUuid = uuid
            trans.guid = guid
            trans.stateUuid = this.switchStates[i].uuid
            if (node) {
                trans.active = node.active
                trans.position = new Vec3(node.position.x, node.position.y, node.position.z)
                trans.rotation = new Vec3(node.eulerAngles.x, node.eulerAngles.y, node.eulerAngles.z)
                trans.scale = new Vec3(node.scale.x, node.scale.y, node.scale.z)

                let render: any = null
                render = node.getComponent(Label)
                if (!render) {
                    render = node.getComponent(Sprite)
                }
                if (render) {
                    trans.color = new Vec3(render.color.r, render.color.g, render.color.b)
                    trans.opacity = render.color.a
                } else {
                    trans.color = new Vec3(255, 255, 255)
                    trans.opacity = 255
                }
                let opacity = node.getComponent(UIOpacity)
                if (opacity) {
                    trans.opacity = opacity.opacity
                }

                let uiTrans = node.getComponent(UITransform)
                if (uiTrans) {
                    trans.anchor = new Vec2(uiTrans.anchorX, uiTrans.anchorY)
                    trans.size = new Vec2(uiTrans.width, uiTrans.height)
                } else {
                    trans.anchor = new Vec2(0.5, 0.5)
                    trans.size = new Vec2(100, 100)
                }
            }
            this.ccTransforms.push(trans)
        }
    }

    _removeStateByUuid(uuid) {
        let transforms = []
        for (let i = 0; i < this.ccTransforms.length; i++) {
            if (this.ccTransforms[i].stateUuid != uuid) {
                transforms.push(this.ccTransforms[i])
            }
        }
        this.ccTransforms = transforms
    }

    _addStateByUuid(uuid) {
        for (let i = 0; i < this.targetNodes.length; i++) {
            let nodeUuid = this.targetNodes[i].node.uuid
            let node: Node = this._getNodeByUuid(nodeUuid)
            if (!node) {
                continue
            }
            let trans = new CCTransform()
            trans.nodeUuid = nodeUuid
            trans.stateUuid = uuid
            trans.guid = this.targetNodes[i].guid
            trans.active = node.active
            trans.position = new Vec3(node.position.x, node.position.y, node.position.z)
            trans.rotation = new Vec3(node.eulerAngles.x, node.eulerAngles.y, node.eulerAngles.z)
            let render: any = null
            render = node.getComponent(Label)
            if (!render) {
                render = node.getComponent(Sprite)
            }
            if (render) {
                trans.color = new Vec3(render.color.r, render.color.g, render.color.b)
                trans.opacity = render.color.a
            } else {
                trans.color = new Vec3(255, 255, 255)
                trans.opacity = 255
            }
            let opacity = node.getComponent(UIOpacity)
            if (opacity) {
                trans.opacity = opacity.opacity
            }

            let uiTrans = node.getComponent(UITransform)
            if (uiTrans) {
                trans.anchor = new Vec2(uiTrans.anchorX, uiTrans.anchorY)
                trans.size = new Vec2(uiTrans.width, uiTrans.height)
            } else {
                trans.anchor = new Vec2(0.5, 0.5)
                trans.size = new Vec2(100, 100)
            }
            this.ccTransforms.push(trans)
        }
    }

    _findNodeFromChildByUuid(uuid, parent) {
        if (parent.uuid == uuid) {
            return parent
        }
        for (let i = 0; i < parent.childrenCount; i++) {
            let child = parent.children[i]
            let result = this._findNodeFromChildByUuid(uuid, child)
            if (result) {
                return result
            }
        }
        return null
    }

    _getNodeByUuid(uuid) {
        return cce.Node.query(uuid)
    }

}

declare var cce: {
    Node
}

