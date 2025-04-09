import { _decorator, Component, Node, PageView, Tween, tween, SpriteFrame, Widget, UITransform, math, Layout, CCFloat, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayPageView')
export class PlayPageView extends Component {

    @property(Node)
    indicatorParent: Node
    @property(SpriteFrame)
    normal: SpriteFrame
    @property(SpriteFrame)
    highlight: SpriteFrame
    @property(CCFloat)
    spacing: number = 10

    private pageView: PageView

    private interval: number = 5
    private duration: number = 1

    private moveRight: boolean = true
    private maxPageIndex: number = 0

    private autoPlay: boolean = false

    private indicators: Array<Node>
    private createFlag: boolean = false

    private scrollEnded: boolean = true
    private mouseDown: boolean = false

    onLoad() {
        this.pageView = this.node.getComponent(PageView)
        this.pageView.cancelInnerEvents = false
        this.pageView.content.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this)
        this.pageView.content.on(Node.EventType.MOUSE_UP, this.onMouseUp, this)
        this.pageView.content.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this)

        this.indicators = new Array<Node>()
        if (this.indicatorParent) {
            this.pageView.indicator = null
        }

        this.pageView.node.on(PageView.EventType.SCROLLING, this.onScrolling, this)
        this.pageView.node.on(PageView.EventType.SCROLL_ENDED, this.onScrolEnded, this)
    }

    onEnable() {
        if (this.autoPlay) { this.play() }
    }

    onDisable() {
        this.stopTween()
        this.pageView.scrollToPage(this.pageView.getCurrentPageIndex(), 0)
        this.showIndicator()
    }

    onDestroy() {
        this.stopTween()
    }

    play() {
        if (!this || !this.isValid || !this.node || !this.node.isValid) {
            return
        }
        if (this.indicatorParent && !this.createFlag) {
            this.createIndicator()
        }
        this.maxPageIndex = this.pageView.getPages().length - 1
        if (this.maxPageIndex > 0) {
            this.scrollToNext()
            this.autoPlay = true
        }
    }

    private createIndicator() {
        let layout = this.indicatorParent.getComponent(Layout)
        if (!layout) {
            layout = this.indicatorParent.addComponent(Layout)
        }
        layout.type = 1
        layout.resizeMode = 1
        layout.spacingX = this.spacing
        for (let i = 0; i < this.pageView.getPages().length; i++) {
            let normal = new Node()
            normal.addComponent(Sprite).spriteFrame = this.normal
            let highlight = new Node()
            highlight.addComponent(Sprite).spriteFrame = this.highlight
            highlight.active = i == 0
            normal.addChild(highlight)
            this.indicatorParent.addChild(normal)
            this.indicators.push(highlight)
        }
        this.createFlag = true
    }

    private showIndicator() {
        for (let index = 0; index < this.indicators.length; index++) {
            const element = this.indicators[index];
            element.active = index == this.pageView.curPageIdx
        }
    }

    private onMouseDown() {
        this.mouseDown = true
        this.stopTween()
    }

    private onMouseUp() {
        this.mouseDown = false
        this.scrollToNext()
    }

    private onTouchCancel() {
        this.mouseDown = false
        this.scrollToNext()
    }

    private stopTween() {
        Tween.stopAllByTarget(this.pageView.content)
        Tween.stopAllByTarget(this.pageView.node)
    }

    private onScrolling() {
        if (!this.mouseDown && this.scrollEnded) { this.showIndicator() }
        this.scrollEnded = false
    }

    private onScrolEnded() {
        this.scrollEnded = true
        this.showIndicator()
    }

    private scrollToNext() {
        let self = this
        let curPage = self.pageView.getCurrentPageIndex()
        this.stopTween()
        tween(self.pageView.content).delay(self.interval).call(() => {
            let nextPage = curPage + (self.moveRight ? 1 : -1)
            if (curPage == 0) {
                nextPage = 1
                self.moveRight = true
            } else if (curPage == self.maxPageIndex) {
                nextPage = self.maxPageIndex - 1
                self.moveRight = false
            }
            self.pageView.scrollToPage(nextPage, self.duration)
            self.scrollToNext()
        }).start()
    }
}