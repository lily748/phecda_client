
import { _decorator, Component, Node} from 'cc';
import Utility from '../../../../../script/utility/utility';

const { ccclass, property } = _decorator;

interface RechargeWarningListerners {
    BindPhoneFun: Function,
    RechargeFun: Function,
}

@ccclass('rechargeWarning')
export class rechargeWarning extends Component {
    @property(Node)
    btn_binding: Node = null
    @property(Node)
    btn_recharge: Node = null

    private listerners:RechargeWarningListerners = {
        BindPhoneFun:()=>{},
        RechargeFun:()=>{}
    }

    public setListeners(listerners:RechargeWarningListerners){
        this.listerners = listerners

        Utility.instance.onButtonClick(this.btn_binding, this.listerners.BindPhoneFun, this, false)
        Utility.instance.onButtonClick(this.btn_recharge, this.listerners.RechargeFun, this, false)
    }
}