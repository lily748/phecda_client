
import { _decorator, RenderTexture, view, ImageAsset, Texture2D, SpriteFrame, Sprite, sys, UITransform, Size, tween, v3 } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { GameSDKInterface } from '../../../../../script/game/GameSDKInterface';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { ShareQRCodeView } from './shareQRCode_view';
const { ccclass, property } = _decorator;


@ccclass('ShareQRCode')
export class ShareQRCode extends Module<ShareQRCodeView, null> {

    private imagePath: string = null

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/promotion/shareQRCode";
        this.viewType = ShareQRCodeView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = true
        this.needViewMask = true
    }

    onInit() {
        Utility.instance.onButtonClick(this.view.closeBtn, this.onClose, this, false)
        Utility.instance.onButtonClick(this.view.saveBtn, this.onSave, this, false)
        EventManager.instance.on(CommonName.EVENT.ResponSaveToPhoto, this.onResponSaveToPhoto, this)

        Utility.instance.onButtonClick(this.view.shareFB, this.onShareToFB, this)
        Utility.instance.onButtonClick(this.view.shareLine, this.onShareToLine, this)
    }

    onDestroy() {
        EventManager.instance.off(CommonName.EVENT.ResponSaveToPhoto, this.onResponSaveToPhoto, this)
    }

    onShow(data: { url: string, referCode: string }) {
        console.log("分享页", data)
        AudioManager.instance.playOpenWindowSound()
        this.view.qrCode.data = data.url
        this.view.referCode.string = data.referCode
        this.view.qrCode.applayChanged()
    }

    private onResponSaveToPhoto(data: { ret: boolean, fileName: string }) {
        console.log("保存到相册", data.ret, data.fileName)
        if (data.ret) {
            this.imagePath = data.fileName
            ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("save_success"))
        }
    }

    private onClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.destroyModule(CommonName.MODULE.ShareQRCode)
    }

    private onSave() {
        let rt = new RenderTexture()
        rt.reset({
            width: view.getVisibleSize().width,
            height: view.getVisibleSize().height
        })
        this.view.camera.targetTexture = rt
        this.scheduleOnce(() => {
            this.captureScreen(rt)
        }, 0.1)
    }

    private captureScreen(rt: RenderTexture) {
        let width = this.view.captureNode.width
        let height = this.view.captureNode.height
        let x = view.getVisibleSize().width / 2 - width / 2
        let buffer = rt.readPixels(x, 0, width, height)
        console.log("buffer", view.getVisibleSize().width, buffer)
        if (sys.isNative) {
            let path = jsb.fileUtils.getWritablePath() + "screenShot.png"
            this.savaAsImage(buffer, width, height, path)
        }
        // this.showImage(buffer, width, height)
    }

    private showImage(buffer, width, height) {
        let img = new ImageAsset()
        img.reset({
            _data: buffer,
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888,
            _compressed: false
        })
        let texture = new Texture2D()
        texture.image = img
        let sf = new SpriteFrame()
        sf.texture = texture
        sf.packable = false

        this.view.previewImage.spriteFrame = sf
        // preview.spriteFrame.flipUVY = true
        this.view.previewNode.active = true
        tween(this.view.previewNode)
            .to(0.5, { scale: v3(0.8, 0.8) })
            .call(() => {
                this.view.shareFB.active = true
                this.view.shareLine.active = true
            })
            .start()
        console.log("截图成功")
    }

    savaAsImage(buffer, width, height, filePath) {
        // @ts-ignore
        if (sys.isNative && jsb.saveImageData) {
            // @ts-ignore
            let success = jsb.saveImageData(buffer, width, height, filePath);
            if (success) {
                GameSDKInterface.SaveImageToPhoto(filePath)
            }
        }
    }

    private onShareToFB() {
        if (this.imagePath && this.imagePath != "") {
            GameSDKInterface.FacebookShare({ shareType: 1, shareUrl: "", imgPath: this.imagePath })
        }
        // this.view.previewNode.active = false
    }

    private onShareToLine() {
        if (this.imagePath && this.imagePath != "") {
            GameSDKInterface.LineShare({ shareType: 1, shareUrl: "", imgPath: this.imagePath })
        }
    }
}

