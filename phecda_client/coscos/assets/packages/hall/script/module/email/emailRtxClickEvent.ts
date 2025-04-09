
import { _decorator, Component, Node ,EventTouch,sys} from 'cc';
const { ccclass, property } = _decorator;


 
@ccclass('emailRtxClickEvent')
export class emailRtxClickEvent extends Component {
    /**
     * 富文本跳转
     * @param eventTouch 
     * @param param 
     * @returns 
     */
    openRichUrl(eventTouch:EventTouch, param:string){
        console.log("open url param:", param);
        if (param.length > 0) {
            sys.openURL(param);
        }
    }
}

