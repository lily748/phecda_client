import { _decorator, Enum, instantiate, Layout, Component, Node, CCInteger, tween, UITransform, v3, easing, CCFloat, Tween, warn, error, TweenEasing, Vec3 } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

export enum Easing {
    constant,
    linear,
    quadIn,
    quadOut,
    quadInOut,
    cubicIn,
    cubicOut,
    cubicInOut,
    quartIn,
    quartOut,
    quartInOut,
    quintIn,
    quintOut,
    quintInOut,
    sineIn,
    sineOut,
    sineInOut,
    expoIn,
    expoOut,
    expoInOut,
    circIn,
    circOut,
    circInOut,
    elasticIn,
    elasticOut,
    elasticInOut,
    backIn,
    backOut,
    backInOut,
    bounceIn,
    bounceOut,
    bounceInOut,
    smooth,
    fade,
    quadOutIn,
    cubicOutIn,
    quartOutIn,
    quintOutIn,
    sineOutIn,
    expoOutIn,
    circOutIn,
    elasticOutIn,
    backOutIn,
    bounceOutIn,
}
@ccclass('UI_RollNumber')
export class UI_RollNumber extends Component {
    @property({ type: CCInteger, tooltip: "目标值" })
    destNum: number = 3;

    @property({ type: CCInteger, tooltip: "初始值" })
    srcNum: number = 0;

    @property(CCFloat)
    totalTime: number = 3
    @property(CCFloat)
    totalRound: number = 3

    @property(CCFloat)
    lineHeight: number = 50.4
    @property([Node])
    bindNodess: Node[] = []

    @property({ type: Enum(Easing) })
    myEase: Easing = Easing.sineOut


    private content: Node = null;

    private currentNums: number[] = [];
    private contentHeight: number = 0;
    private contentSrcPositions: Vec3[] = [];
    private lastRoundDeltaNums: number[] = [];
    private inTween = false;
    destPosY1: number;
    onLoad() {
        this.contentHeight = this.bindNodess[0].getComponent(UITransform).height
        this.content = this.node.getChildByName("mask")
        this.createNumInstants()
    }

    createNumInstants() {
        let totalInstantNum = Math.max(this.destNum.toFixed(0).length, this.srcNum.toFixed(0).length)
        let srcNum = this.srcNum.toFixed(0)
        while (totalInstantNum > srcNum.length) {
            srcNum = "0" + srcNum
        }
        // console.log("【UI_RollNumber】格式化初始值" + srcNum)
        for (let i = 0; i < totalInstantNum; i++) {
            let child = this.content.children[i]
            if (!child) {
                child = instantiate(this.bindNodess[0])
                child.parent = this.content
                this.content.getComponent(Layout).updateLayout()
            }
            if ((i & 1) == 1) {
                let pos = child.position
                child.setPosition(pos.x, this.contentHeight - this.lineHeight, pos.z)
                child.getComponent(Layout).verticalDirection = Layout.VerticalDirection.BOTTOM_TO_TOP
            }
            if (this.srcNum > 0) {
                let singleNum = parseFloat(srcNum.substring(i, i + 1))
                let pos = child.position
                // console.log("【UI_RollNumber】预设值=== " + singleNum)
                let scrPosition = this.getPositionWithSrcNum(pos, singleNum, i)
                child.setPosition(scrPosition)
            }
        }
        this.content.getComponent(Layout).updateLayout()
    }

    public initTweenData() {
        this.currentNums = [];
        this.contentSrcPositions = [];
        this.lastRoundDeltaNums = [];
        let totalInstantNum = this.content.children.length
        let destNumFill = this.destNum.toFixed(0)
        while (totalInstantNum > destNumFill.length) {
            destNumFill = "0" + destNumFill
        }
        for (let i = 0; i < totalInstantNum; i++) {
            let child = this.content.children[i]
            // console.log('基础值======== ' + child.position)
            let currentNum = this.getNumberWithPosY(child.position.y, i)
            this.currentNums.push(currentNum)
            // console.log('【UI_RollNumber】initTweenData ======== currentNum ' + currentNum)

            this.contentSrcPositions.push(child.position.clone())
            let destNum = parseFloat(destNumFill.substring(i, i + 1))
            // console.log("【UI_RollNumber】initTweenData  ======destNum " + destNum)
            let lastRoundRoundDelta = this.getLastRoundDelta(currentNum, destNum, i)
            // console.log("【UI_RollNumber】initTweenData  ======lastRoundRoundDelta " + lastRoundRoundDelta)
            this.lastRoundDeltaNums.push(lastRoundRoundDelta)
        }
    }

    startRoll() {
        if (this.inTween) {
            warn("正在执行，不允许操作")
            return
        }
        const deltaNum = parseFloat((this.contentHeight - this.lineHeight).toFixed(0))
        this.initTweenData()
        this.inTween = true
        this.destPosY1 = this.lastRoundDeltaNums[0] * this.lineHeight
        this.destPosY1 = -1 * this.lastRoundDeltaNums[1] * this.lineHeight

        let len = this.content.children.length
        for (let index = 0; index < len; index++) {
            let child = this.content.children[index]
            Tween.stopAllByTarget(child.position);
            this.inTween = true
            let isEven = (index & 1) == 1
            let destPosY = (isEven ? -1 : 1) * this.lastRoundDeltaNums[index] * this.lineHeight
            let oddAddFactor = this.contentHeight - this.lineHeight //奇数项相加因子
            if (isEven) {
                tween(child)
                    .by(this.totalTime,
                        { position: new Vec3(0, destPosY,0) }
                        , {
                            progress: (start: number, end: number, current: number, t: number) => {
                                if (start == end) {
                                    return start
                                }
                                current = start + (end - start) * t
                                current = current % (deltaNum)
                                current = current <= 0 ? oddAddFactor + current : current
                                return current
                            }, easing: Easing[this.myEase].toString() as TweenEasing
                        }
                    ).call(() => {
                        if (index == len - 1) {
                            this.inTween = false
                        }
                    })
                    .start()
            } else {
                tween(child)
                    .by(this.totalTime,
                        { position: new Vec3(0, destPosY, 0) }
                        , {
                            progress: (start: number, end: number, current: number, t: number) => {
                                if (start == end) {
                                    return start
                                }
                                current = start + (end - start) * t
                                current = current % (deltaNum)
                                return current
                            }, easing: Easing[this.myEase].toString() as TweenEasing
                        }
                    ).call(() => {
                        if (index == len - 1) {
                            this.inTween = false
                        }
                    })
                    .start()
            }
        }
    }

    // 设置初始值
    setStartNum(srcNum: number) {
        // console.log("【UI_RollNumber】设置初始值 == " + srcNum)

        this.srcNum = srcNum
        this.createNumInstants()
    }

    // 设置结束值
    setDestNum(destNum: number) {
        // console.log("【UI_RollNumber】设置目标值 == " + destNum)
        this.destNum = destNum
        this.createNumInstants()
    }

    /**
     * 根据初始数字获取坐标
     * @param pos 
     * @param num 
     * @param index 
     */
    getPositionWithSrcNum(pos: Vec3, num: number, index) {
        let retPos = pos.clone()
        let isEven = (index & 1) == 1
        if (isEven) {
            retPos.y -= (num) * this.lineHeight
        } else
            retPos.y = num * this.lineHeight

        return retPos
    }

    getNumberWithPosY(posY: number, index) {
        if (this.isEven(index)) {
            return 10 - Math.round(posY / this.lineHeight)
        }
        return Math.round(posY / this.lineHeight)
    }

    getLastRoundDelta(currentNum, destNum, index) {
        let isEven = (index & 1) == 1
        let deltaNum = 0
        if (destNum <= currentNum) {
            deltaNum = destNum - currentNum + 10
        } else {
            deltaNum = destNum - currentNum
        }
        deltaNum = this.totalRound * 10 + deltaNum
        return deltaNum
    }

    isEven(index) {
        return (index & 1) == 1
    }
}

