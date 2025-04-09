
import { _decorator, Size, Component,view,UITransform,sys,director,ResolutionPolicy } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('CanvasDesignResolution')
export class CanvasDesignResolution extends Component {
    private wGameWidth: number = 750
    private wGameHeight: number = 1334

    onLoad() 
    {
        if (sys.isBrowser) {
            let sceneName = director.getScene().name;
            if (sys.os == "Windows" || sys.os == "OS X") { // PC浏览器
                //PC浏览器
                view.setDesignResolutionSize(this.wGameWidth, this.wGameHeight, ResolutionPolicy.SHOW_ALL);
            }else {
                //手机浏览器
                let size = view.getFrameSize();
                console.log("getFrameSize0  =====width: " + size.width + " height: " + size.height); 
                // if (sceneName == "main")
                // {
                    let framescale = size.height / size.width;//1334 
                    console.log("getFrameSize1  =====width: " + size.width + " height: " + size.height + " framescale: " + framescale);
                    if (framescale < 1.770)
                    {
                        console.log("getFrameSize ===== FIXED_HEIGHT");
                        view.setDesignResolutionSize(this.wGameWidth, this.wGameHeight, ResolutionPolicy.FIXED_HEIGHT);
                    }else{
                        console.log("getFrameSize ===== FIXED_WIDTH");
                        view.setDesignResolutionSize(this.wGameWidth, this.wGameHeight, ResolutionPolicy.FIXED_WIDTH);
                    }
                //}
            }
        }
    }
}
