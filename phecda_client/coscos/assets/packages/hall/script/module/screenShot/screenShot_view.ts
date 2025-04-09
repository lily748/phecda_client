
import { _decorator, Node, Camera, Sprite, UIOpacity } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;


@ccclass('ScreenShotView')
export class ScreenShotView extends ViewBase {

    @property(Node)
    closeBtn: Node

    @property(Camera)
    camera: Camera

    @property(UIOpacity)
    mask: UIOpacity

    @property(Node)
    previewNode: Node
    @property(Node)
    previewFrame: Node
    @property(Sprite)
    previewImage: Sprite
    @property(Node)
    shareFB: Node
    @property(Node)
    shareLine: Node

    @property(Node)
    copyNode: Node
}