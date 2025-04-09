import { _decorator, Component, Node,RenderTexture, UITransform,sys,director,Camera,instantiate,v3,ImageAsset,Texture2D,tween,SpriteFrame, Sprite,view,Tween, find, Label} from 'cc';
import Module from '../../../../../script/framework/core/mvvm/module_base';
import { EarnMoneyShareView } from './earnMoneyShare_view';
import { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { GameSDKInterface } from '../../../../../script/game/GameSDKInterface';
import CommonName from '../../model/CommonName';
import { share_scrollActivity } from './share_scrollActivity';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';

const { ccclass, property } = _decorator;


@ccclass('EarnMoneyShare')
export class EarnMoneyShare extends Module<EarnMoneyShareView, null>{

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/earnMoney/earnMoney_share";
        this.viewType = EarnMoneyShareView;
        this.modelType = null;
        this.layer = ViewLayer.Mid
        this.needAnim = false
        this.needViewMask = false
    }

    private currItem:Node = null
    private spr_success:Node = null
    private shareInfo: string = ""
    private link_url: string = ""
    private preModule:string = ""

    onInit() {
        Utility.instance.onButtonClick(this.view.btnBack, this.onClickBack, this);
        Utility.instance.onButtonClick(this.view.btnCopyLink, this.onClickCopyLink, this, false)
        Utility.instance.onButtonClick(this.view.btnSavePicture, this.onClickSavePicture, this, false)
        Utility.instance.onButtonClick(this.view.btnTelegram, this.onClickTelegram, this, false)
        Utility.instance.onButtonClick(this.view.btnWhatsApp, this.onClickWhatsApp, this, false)
        this._reqGetShareUrl()
    }

    onShow(intentData: any, callback?: (m: any) => void) {
        this.preModule = intentData
        callback && callback(this)        
    }

    onDestroy() {

    }

    private onClickBack() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.EarnMoneyShare);
    }

    /**
     * 拷贝链接
     */
    onClickCopyLink(){
        if(this.shareInfo.trim() == "") return
        Utility.instance.copyTextToClipboard(this.shareInfo)
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
            title: "11game",
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
        if(!this.currItem.isValid) return
        let width = this.currItem.getComponent(UITransform).width
        let height = this.currItem.getComponent(UITransform).height
        
        let x = view.getVisibleSize().width/2 - width/2 - this.currItem.position.x 
        let y = view.getVisibleSize().height/2 - height/2 - this.currItem.position.y-65

        let buffer = rt.readPixels(x, y, width, height)
        if (sys.isNative) {
            let path = jsb.fileUtils.getWritablePath() + "screenShot.png"
            this.savaAsImage(buffer, width, height, path)
        }
        this.showImage(buffer, width, height)
    }

    private savaAsImage(buffer, width, height, filePath) {
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

        if(!this.spr_success.isValid) return
        this.spr_success.getComponent(Sprite).spriteFrame = sf
        this.spr_success.active = true
        this.spr_success.scale = v3(1,1,1)
        this.spr_success.position = v3(0,0,0)        

        const targetPos = this.view.btnSavePicture.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0,0));
        const targetPosInLocal = this.spr_success.getComponent(UITransform).convertToNodeSpaceAR(targetPos);
        tween(this.spr_success)
            .stop()
            .to(0.3,{scale:v3(0.8,0.8,0.8)})
            .delay(0.5)
            .to(0.5, { scale: v3(0,0,0),position: targetPosInLocal})
            .call(() => {
                this.spr_success.active = false;
                this.spr_success.position = v3(0,0,0)
                this.spr_success.scale = v3(1,1,1)
            })
            .start()
    }

    //请求分享链接
    private _reqGetShareUrl() {
        let info: PostData = {
            Target: this,
            Url: Http_Define.getShareUrl,
            Params: {},
            Callback: this._rspGetShareUrl.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
            NoNetPrompt: true,
        }
        HttpDataModel.Post(info);
    }

    private _rspGetShareUrl(msg: any) {
        if (msg && msg.code == 0) {
            this.link_url = msg.data.link_url
            this.shareInfo = this.preModule == CommonName.MODULE.EarnMoney ? msg.data.share_info : msg.data.spin_wheel_info
            let scrollVip = this.view.middle.getComponent(share_scrollActivity)
            if(scrollVip?.isValid){
                scrollVip.initData(msg.data,this.preModule == CommonName.MODULE.TurnTable,(currItem)=>{                    
                    if(currItem.isValid){
                        this.currItem = currItem
                        this.spr_success = find("spr_success",currItem)
                    }
                })
            }
        }
    }   
}


