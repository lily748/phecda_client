import { warn, Label, math, SpriteFrame, Sprite } from 'cc';
import { CCBoolean, CCFloat, error } from 'cc';
import { CCInteger, Slider, _decorator, ProgressBar } from 'cc';
import AudioManager from '../../manager/audio_manager';

const { ccclass, property, integer } = _decorator;

@ccclass("UISliderSkin")
export class UISliderSkin {
    @property(SpriteFrame)
    bg: SpriteFrame | null = null;
    @property(SpriteFrame)
    bar: SpriteFrame | null = null;
}
@ccclass("UISlider")
export default class UISlider extends Slider {
    //列表所能滑动的最小值
    @property(CCFloat)
    private minNumber: number = 0;
    //列表所能滑动的最大值
    @property(CCFloat)
    private maxNumber: number = 0;

    @property(CCFloat)
    limitMinNumber: number = 1;

    @property(CCFloat)
    limitMaxNumber: number = 1;

    @property({ type: Label, tooltip: "进度文本" })
    private labProgress: Label = null;

    @property({ type: CCInteger, tooltip: "当前进度" })
    private defaultNumber: number = 1;

    // 当为整数滑动条时，滑动的最小距离
    @property({ type: CCInteger, min: 1, visible: true })
    private _step: number = 1;
    set step(num: number) {
        console.log("设置UISlider步长", num)
        this._step = num
    }
    get step() {
        return this._step
    }

    private stepPercent: number = 0;

    private totalNumber: number = 0;

    private sliderFlg: number = 0;

    private maxFlg: number = 0;
    private minFlg: number = 0;

    private slideCallBack: Function = null;

    private progressBar: ProgressBar = null;

    onLoad() {
        this.progressBar = this.node.getComponent(ProgressBar);
        this.node.on("slide", this.onUISlider.bind(this));
        this.setSlider()
    }

    private updateProgressBar(progress) {
        if (this.progressBar) {
            if (this.progressBar.progress != progress) {
                AudioManager.instance.playEffect("sound/public/SliderMove")
            }
            this.progressBar.progress = progress;
        }
    }

    private onUISlider() {
        let flg = Math.ceil(this.progress / this.stepPercent)
        flg = flg >= this.maxFlg ? this.maxFlg : flg;
        flg = flg <= this.minFlg ? this.minFlg : flg;

        this.sliderFlg = flg;
        this.progress = math.clamp01(this.sliderFlg * this.stepPercent);
        this.labProgress.string = (this.minNumber + this.sliderFlg * this._step) + "";
        this.slideCallBack && this.slideCallBack(this.sliderFlg * this._step + this.minNumber);
        this.updateProgressBar(this.progress);
    }

    private getStepPercent() {
        this.stepPercent = this._step / this.totalNumber;
        this.maxFlg = (this.limitMaxNumber - this.minNumber) / this._step
        this.minFlg = (this.limitMinNumber - this.minNumber) / this._step
    }

    public setListener(callback) {
        this.slideCallBack = callback;
    }

    private setSlider() {
        this.totalNumber = this.maxNumber - this.minNumber;
        this.getStepPercent();

        this.sliderFlg = (this.defaultNumber - this.minNumber) / this._step;
        this.progress = this.sliderFlg * this.stepPercent;
        this.labProgress.string = (this.minNumber + this.sliderFlg * this._step) + "";;
        this.scheduleOnce(() => this.updateProgressBar(this.progress));
        this.slideCallBack && this.slideCallBack(this.sliderFlg * this._step);
    }

    /**
     * 设置当前进度 
     * @param currentNum
     */
    public setCurrentStep(currentNum: number) {
        this.sliderFlg = (currentNum - this.minNumber) / this._step;

        this.progress = currentNum * this.stepPercent;
        this.updateProgressBar(this.progress);
        this.labProgress.string = this.minNumber + this._step * currentNum + ""
    }

    public setLimitStatus(limitMin: number, limitMax: number, defaultNumber?: number) {
        let currentNum = parseFloat(this.labProgress.string)
        this.limitMinNumber = limitMin
        this.limitMaxNumber = limitMax
        this.defaultNumber = defaultNumber || currentNum
        this.defaultNumber = math.clamp(defaultNumber, limitMin, limitMax)
        this.setSlider()

    }
    public reset() {
        this.setSlider()
    }

    public getLblProgress(): string {
        return this.labProgress.string;
    }

    public setSkin(skin: UISliderSkin): void {
        this.node.getComponent(Sprite).spriteFrame = skin.bg;
        this.progressBar.barSprite.spriteFrame = skin.bar;
    }
}
