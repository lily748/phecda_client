
import { _decorator, RenderTexture, view, ImageAsset, Texture2D, SpriteFrame, sys, tween, v3, director, Camera, instantiate, Canvas, Widget, Node, UITransform } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { Env } from '../../../../../script/game/Env';
import { GameSDKInterface } from '../../../../../script/game/GameSDKInterface';
import { GameResConfig } from '../../../../../script/hall/GameResConfig';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import QRCodeTool from '../../../../../script/utility/tools/qrcode_tool';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
import { ScreenShotView } from './screenShot_view';
const { ccclass, property } = _decorator;


@ccclass('ScreenShot')
export class ScreenShot extends Module<ScreenShotView, null> {

    private data = null
    private buffer = null

    private sharePlatform: number = 1

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_screenShot";
        this.viewType = ScreenShotView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
    }

    onInit() {
        if (Env.IsIOS) {
            this.view.camera.node.scale = v3(1, 1, 1)
        }
        Utility.instance.onButtonClick(this.view.closeBtn, this.onClose, this, false)
        EventManager.instance.on(CommonName.EVENT.ResponSaveToPhoto, this.onResponSaveToPhoto, this)

        Utility.instance.onButtonClick(this.view.shareFB, this.onShareToFB, this)
        Utility.instance.onButtonClick(this.view.shareLine, this.onShareToLine, this)
    }

    onDestroy() {
        if (this.data && this.data.callback) {
            this.data.callback()
            this.data.callback = null
        }
        EventManager.instance.off(CommonName.EVENT.ResponSaveToPhoto, this.onResponSaveToPhoto, this)
    }

    onShow(data: any) {
        this.data = data
        this.onScreenShot()
    }

    private onScreenShot() {
        let rt = new RenderTexture()
        rt.reset({
            width: view.getVisibleSize().width,
            height: view.getVisibleSize().height
        })

        let sceneCamera = director.getScene().getComponentInChildren(Camera)
        let cam = instantiate(sceneCamera.node).getComponent(Camera)
        cam.node.setParent(sceneCamera.node.parent)
        cam.node.scale = v3(1, -1, 1)
        cam.targetTexture = rt
        let url = this.data?.url || GameResConfig.serverListData?.pro_share_domain
        let copyNode = instantiate(this.view.copyNode)
        copyNode.setParent(sceneCamera.node.parent)
        copyNode.layer = director.getScene().getComponentInChildren(Canvas).node.layer
        copyNode.children.forEach(child => {
            child.layer = copyNode.layer
        });
        let widget = copyNode.getComponent(Widget)
        widget.left = 0
        widget.right = 0
        widget.top = 0
        widget.bottom = 0
        copyNode.active = true
        if (url && url != "") {
            if (!this.data?.url) {
                url += UserDataModel.GetCurrentUserID()
            }
            let qr: Node = copyNode.getChildByName("QRCodeNode")
            qr.active = true
            let qrCode = qr.getComponentInChildren(QRCodeTool)
            qrCode.node.layer = qr.layer
            qrCode.data = url
            qrCode.applayChanged()
        }

        this.scheduleOnce(() => {
            this.captureScreen(rt)
            cam?.node?.destroy()
            copyNode?.destroy()
        }, 0.1)
    }

    private captureScreen(rt: RenderTexture) {
        let width = view.getVisibleSize().width
        let height = view.getVisibleSize().height
        this.buffer = rt.readPixels(0, 0, width, height)
        let img = new ImageAsset()
        img.reset({
            _data: this.buffer,
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
        // this.view.previewImage.spriteFrame.flipUVY = true
        this.view.camera.node.active = false
        // this.view.previewImage.node.active = true
        // this.view.previewFrame.active = true
        // this.view.previewNode.scale = v3(1, 1, 1)

        AudioManager.instance.playEffect("sound/public/ScreenShot")
        // this.view.shareFB.active = true
        // this.view.shareLine.active = true
        // this.view.closeBtn.active = true
        // this.view.previewNode.scale = v3(0.65, 0.65, 1)
        this.view.previewNode.active = true
        
        this.view.previewNode.getComponent(UITransform).setContentSize(this.view.node.getComponent(UITransform).contentSize)

        // let tw = tween(this.view.previewNode)
        // tw.delay(0.1)
        // tw.call(() => {
        //     AudioManager.instance.playEffect("sound/public/ScreenShot")
        // })
        // tw.to(0.4, { scale: v3(0.65, 0.65, 1) }, { easing: "quartOut" })
        // tw.call(() => {
        //     if (this?.isValid) {
        //         this.view.shareFB.active = true
        //         this.view.shareLine.active = true
        //         this.view.closeBtn.active = true
        //     }
        // })
        // tw.start()
        this.view.mask.opacity = 0
        tween(this.view.mask).to(0.5, { opacity: 180 }).start()
    }

    private onResponSaveToPhoto(data: { ret: boolean, fileName: string }) {
        this.showNetPrompt(false)
        console.log("保存到相册", data.ret, data.fileName)
        if (data.ret && data.fileName && data.fileName != "") {
            if (this.sharePlatform == 1) {
                GameSDKInterface.FacebookShare({ shareType: 1, shareUrl: "", imgPath: data.fileName })
            } else if (this.sharePlatform == 2) {
                GameSDKInterface.LineShare({ shareType: 1, shareUrl: "", imgPath: data.fileName })
            }
            // ModuleManager.instance.toastLong(LanguageManager.instance.getLangByID("save_success"))
        }
    }

    private onClose() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.ScreenShot)
    }

    onDisable() {
        if (this.data && this.data.callback) {
            this.data.callback()
            this.data.callback = null
        }
    }

    private savaAsImage() {
        // @ts-ignore
        if (sys.isNative && jsb.saveImageData && this.buffer) {
            this.showNetPrompt(true)
            let filePath = jsb.fileUtils.getWritablePath() + "screenShot.png"
            // @ts-ignore
            let success = jsb.saveImageData(this.buffer, view.getVisibleSize().width, view.getVisibleSize().height, filePath);
            if (success) {
                if (Env.IsAndroid)
                    GameSDKInterface.SaveImageToPhoto(filePath)
                else {
                    if (this.sharePlatform == 1) {
                        GameSDKInterface.FacebookShare({ shareType: 1, shareUrl: "", imgPath: filePath })
                    } else if (this.sharePlatform == 2) {
                        GameSDKInterface.LineShare({ shareType: 1, shareUrl: "", imgPath: filePath })
                    }
                }
            } else {
                this.showNetPrompt(false)
            }
        }
    }

    private onShareToFB() {
        this.sharePlatform = 1
        this.savaAsImage()
    }

    private onShareToLine() {
        this.sharePlatform = 2
        this.savaAsImage()
    }
}