
import { _decorator, Button, Component, instantiate, Label, Node, PageView, ScrollView, SpringJoint2D, Sprite, v2, Vec2 } from 'cc';
import Utility from '../../../../../script/utility/utility';
const { ccclass, property } = _decorator;

@ccclass('rewardsContent')
export class rewardsContent extends Component {

    @property(PageView)
    pageview: PageView = null;

    @property(Node)
    leftBtn: Node = null;

    @property(Node)
    rightBtn: Node = null;

    @property(Node)
    templItem: Node = null;

    index:number = 0;

    public init(): void {
        this.leftBtn.on("click", ()=>{this.onDirBtnClick(-1);}, this);
        this.rightBtn.on("click", ()=>{this.onDirBtnClick(1);}, this);
        this.pageview.node.on('page-turning', this.pageTurningCb, this);
    }

    private pageTurningCb(pageView: PageView) {
        let index = pageView.getCurrentPageIndex();
        this.index = index;
        this.updateBtn(index);
    }

    private onDirBtnClick(dir: number) {
        let index = this.index;
        if (dir < 0) index--;
        else index ++;
        if (index < 0) return;
        if (index > this.pageview.content.children.length-1) return;
        this.index = index;
        this.scrollToPage(index);
    }

    private updateBtn(index) {
        this.rightBtn.active = (index != this.pageview.content.children.length-1);
        this.leftBtn.active = (index != 0);
    }

    public scrollToPage(index: number, time:number=0.25) {
        this.index = index;
        this.updateBtn(index)
        this.pageview.scrollToPage(index,time);
    }


    public createItem() {
        let item:Node = instantiate(this.templItem);
        item.active = true;
        this.pageview.addPage(item);
        let position = item.getPosition();
        position.y = 0;
        item.setPosition(position);
        return item;
    }
}

