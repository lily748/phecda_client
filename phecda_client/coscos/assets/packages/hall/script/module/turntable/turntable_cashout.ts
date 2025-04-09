
import { _decorator, Component, Node,Label,macro, RichText, Sprite,tween,Tween} from 'cc';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';

const { ccclass, property } = _decorator;

@ccclass('turntable_cashout')
export class turntable_cashout extends Component {   
    @property(Node)
    close: Node
    @property(Label)
    lblCountTime: Label
    @property(Label)
    lblAmount: Label
    @property(Label)
    lblTip1: Label
    @property(Label)
    lblTip2: Label
    @property(RichText)
    rtxTip: RichText    
    @property(Sprite)
    Progress: Sprite
    @property(Node)
    btnInvite: Node
    
    onLoad() {
        Utility.instance.onButtonClick(this.close, this.closeBtn, this, false)
    }

    /**
     * 初始化数据
     * @param data 
     */
    public initData(data:any){
        Utility.instance.onButtonClick(this.btnInvite, data.listeners, this, false)

        if(typeof data.countDown === 'number'){
            this.startCountDown(data.countDown,this.lblCountTime,null)
        }

        if(typeof data.info?.withdraw_amount === 'number'){
            this.lblAmount.string = data.info?.withdraw_amount ? ("₹"+data.info?.withdraw_amount/100) : ""
            this.lblTip1.string = data.info?.withdraw_amount ? ("To withdraw when you collect ₹"+data.info?.withdraw_amount/100) : ""

            if(typeof data.amount === 'number'){
                let fillRange = (data.info.withdraw_amount != 0) ? data.amount/data.info?.withdraw_amount : 0
                let end =  fillRange > 1 ? 1:fillRange
                this.Progress.fillRange = 0
                tween(this.Progress).stop().to(0.8, { fillRange: end }, { easing: "cubicOut" }).start()
    
                this.lblTip2.string = (fillRange*100).toFixed(2)+"%"
                this.rtxTip.string = data.info?.withdraw_amount-data.amount > 0 ? (`Only<color=#FFAE00> ${(data.info?.withdraw_amount-data.amount)/100}</color> to go`):""
            }
            
        }
    }

    private closeBtn() {
        AudioManager.instance.playCloseWindowSound()
        Tween.stopAllByTarget(this.Progress)
        this.unscheduleAllCallbacks()
        if(this.node.destroy){
            this.node.destroy()
        }
    }

    /**
     * 下个回合倒计时
    */
    private countDownTime: number
    private countDownLabel: Label
    private countDownComplete: () => void
    private startCountDown(time: number, label: Label, complete: () => void) {
        this.countDownTime = time
        this.countDownLabel = label
        this.countDownComplete = complete
        this.schedule(this.countDown, 0.1, macro.REPEAT_FOREVER)
    }

    private countDown(dt: number) {
        if (this.isValid) {
            this.countDownTime -= dt
            this.countDownLabel.string = Utility.instance.formatCountDownTime(this.countDownTime)
            if (this.countDownTime <= 0) {
                this.unscheduleAllCallbacks()
                this.countDownComplete && this.countDownComplete()
                this.countDownComplete = null
            }
        }
    }
}