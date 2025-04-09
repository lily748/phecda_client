import { size, v3 } from 'cc';
// //默认导入

import { instantiate, Label, Sprite, tween, UIOpacity, UITransform, Vec2, Vec3, _decorator } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
const { ccclass, property } = _decorator;

import ToastView from "./toast_view";

const limit_with = 740;
@ccclass('Toast')
export default class Toast extends Module<ToastView, null> {
    constructor() {
        super();
        this.bundleName = "resources";
        this.layer = ViewLayer.Max;
        this.windowPrefabResPath = "prefabs/public_toast";
        this.viewType = ToastView;
    }
    _offset = null;
    _startPos = null;
    onShow(intentData?: any) {
        if (intentData && typeof (intentData) == "object") {
            let text = intentData.text
            let long = intentData.long
            if (intentData.offset) this._offset = intentData.offset;
            if (intentData.startPos) this._startPos = intentData.startPos;
            this._show(text, long)
        } else {
            this._show(intentData)
        }
    }
    _show(text, long?: boolean) {
        let node = instantiate(this.view.holder);
        this.view.node.addChild(node)
        if (this._startPos!=null) {
            let position:Vec3 = v3();
            node.getPosition(position);
            if (this._startPos.x) position.x = this._startPos.x;
            if (this._startPos.y) position.y = this._startPos.y;
            node.setPosition(position);
            this._startPos = null;
        }
        let spriteBackground = node.getChildByName("SpriteBackground").getComponent(Sprite)
        let textLabel = node.getChildByName("Label").getComponent(Label)
        textLabel.string = text;
        textLabel.updateRenderData(true)//刷新后要下一帧才能更新width
        let contentSize = textLabel.node.getComponent(UITransform).contentSize
        if (contentSize.width >= limit_with){
            textLabel.overflow = Label.Overflow.SHRINK           
            contentSize = size(limit_with,contentSize.height)
            textLabel.getComponent(UITransform).setContentSize(contentSize)
        }
        let spriteTrans = spriteBackground.node.getComponent(UITransform)
        spriteTrans.setContentSize(contentSize.x + 200, spriteTrans.contentSize.height);
        let time1 = 0.5
        let time2 = 0.3
        if (long) {
            time1 = 1
            time2 = 0.5
        }
        let pos = new Vec3(0, 150, 0);
        let targetPos = node.getPosition().clone();
        let self = this;
        if (this._offset != null) {
            if (this._offset.x!=null) targetPos.x += this._offset.x;
            if (this._offset.y!=null) targetPos.y += this._offset.y;
            pos = targetPos;
        }
        this.scheduleOnce(() => {
            tween(node).to(time1, { position: pos }, { easing: "fade" }).delay(time2).call(() => {
                let op = node.getComponent(UIOpacity)
                tween(op).to(0.3, { opacity: 190 }).call(() => {
                    self._offset = null;
                    node.destroy();
                }).start();
            }).start();

        }, 0)
    }
}