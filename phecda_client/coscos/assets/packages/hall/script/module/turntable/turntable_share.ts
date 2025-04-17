
import { _decorator, Component, Node,RenderTexture, UITransform,sys,director,Camera,instantiate,v3,ImageAsset,Texture2D,tween,SpriteFrame, Sprite,view,Tween, find, Label} from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import QRCodeTool from '../../../../../script/utility/tools/qrcode_tool';
import { GameSDKInterface } from '../../../../../script/game/GameSDKInterface';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { UserDataModel } from '../../model/UserDataModel';

const { ccclass, property } = _decorator;

@ccclass('turntable_share')
export class turntable_share extends Component {   
    @property(Node)
    close: Node
    @property(Node)
    middle: Node
    @property(QRCodeTool)
    qrCode: QRCodeTool
    @property(Node)
    btnSavePicture: Node
    @property(Node)
    btnCopyLink: Node
    @property(Node)
    successSprite: Node
    @property(Node)
    btnTelegram: Node
    @property(Node)
    btnWhatsApp: Node

    private urlLink:string = ""
    private shareInfo: string = ""
    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
        Utility.instance.onButtonClick(this.btnCopyLink, this.onClickCopyLink, this, false)
        Utility.instance.onButtonClick(this.btnSavePicture, this.onClickSavePicture, this, false)
        Utility.instance.onButtonClick(this.btnTelegram, this.onClickTelegram, this, false)
        Utility.instance.onButtonClick(this.btnWhatsApp, this.onClickWhatsApp, this, false)
    }

    /**
     * 显示二维码
     */
    public showQRCode(url:string){
        if(url.trim() == "") return
        if(!this?.qrCode) return

        this.urlLink = url
        this.qrCode.data = url;
        this.qrCode.applayChanged();
    }

    /**
     * 初始化数据
     * @param data 
     */
    initData(data:any){
        if(!data) return
        this.showQRCode(data.share_url)

        let user = UserDataModel.GetCurrentUser()
        let lbl_nickName = find("lbl_nickName",this.middle)
        if (user && lbl_nickName?.isValid) {            
            lbl_nickName.getComponent(Label).string = user.nickname
        }

        let lbl_inviteCode = find("lbl_inviteCode",this.middle)
        if(lbl_inviteCode?.isValid){
            lbl_inviteCode.getComponent(Label).string = data.invitation_code
        }
        if (data.share_info) {
            this.shareInfo = data.share_info;
        }
    }

    /**
     * 拷贝链接
     */
    onClickCopyLink(){
        if(this.urlLink.trim() == "") return
        Utility.instance.copyTextToClipboard(this.urlLink)
        ModuleManager.instance.toast("Copied Successfully")
    }

    /**
     * 保存图片
     */
    onClickSavePicture(){
        this.onSave()
    }

    onClickTelegram() {
        this.JumpShare();
    }

    onClickWhatsApp() {
        this.JumpShare();
    }

    JumpShare() {
        let info = {
            shareType: 0,
            title: "c1games",
            shareUrl: this.shareInfo,
            imgPath: ""
        }
        GameSDKInterface.OtherShare(JSON.stringify(info));
    }

    private onSave() {
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

        this.scheduleOnce(() => {
            this.captureScreen(rt)
            cam?.node?.destroy()
        }, 0.1)
    }

    private captureScreen(rt: RenderTexture) {
        let width = this.middle.getComponent(UITransform).width
        let height = this.middle.getComponent(UITransform).height
        let x = view.getVisibleSize().width/2 - width/2 - this.middle.position.x 
        let y = view.getVisibleSize().height/2 - height/2 - this.middle.position.y

        let buffer = rt.readPixels(x, y, width, height)
        if (sys.isNative) {
            let path = jsb.fileUtils.getWritablePath() + "screenShot.png"
            this.savaAsImage(buffer, width, height, path)
        }
        this.showImage(buffer, width, height)
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

        this.successSprite.getComponent(Sprite).spriteFrame = sf
        this.successSprite.active = true
        this.successSprite.scale = v3(1,1,1)
        this.successSprite.position = v3(0,0,0)        

        const targetPos = this.btnSavePicture.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0,0));
        const targetPosInLocal = this.successSprite.getComponent(UITransform).convertToNodeSpaceAR(targetPos);
        tween(this.successSprite)
            .stop()
            .to(0.3,{scale:v3(0.8,0.8,0.8)})
            .delay(0.5)
            .to(0.5, { scale: v3(0,0,0),position: targetPosInLocal})
            .call(() => {
                this.successSprite.active = false;
                this.successSprite.position = v3(0,0,0)
                this.successSprite.scale = v3(1,1,1)
            })
            .start()
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()
        Tween.stopAllByTarget(this.successSprite)
        if(this.node.destroy){
            this.node.destroy()
        }
    }
    
}