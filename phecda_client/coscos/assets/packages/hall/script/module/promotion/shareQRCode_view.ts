
import { _decorator, Node, Label, UITransform, Camera, Sprite } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import QRCodeTool from '../../../../../script/utility/tools/qrcode_tool';
const { ccclass, property } = _decorator;


@ccclass('ShareQRCodeView')
export class ShareQRCodeView extends ViewBase {

    @property(Node)
    closeBtn: Node

    @property(Node)
    saveBtn: Node

    @property(UITransform)
    captureNode: UITransform

    @property(QRCodeTool)
    qrCode: QRCodeTool

    @property(Label)
    referCode: Label

    @property(Camera)
    camera: Camera

    @property(Node)
    previewNode: Node
    @property(Sprite)
    previewImage: Sprite
    @property(Node)
    shareFB: Node
    @property(Node)
    shareLine: Node
}

