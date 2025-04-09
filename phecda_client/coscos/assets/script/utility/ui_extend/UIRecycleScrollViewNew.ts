import { _decorator, Component, Node, ScrollView, Rect, UITransform, Vec2, instantiate, Vec3, Size, CCInteger, game, Layout, View, Widget } from 'cc';
import { EDITOR } from 'cc/env';
import { UIRecycleItem } from './UIRecycleItem';
const { ccclass, property } = _decorator;

export interface InitializeHandler {
    target: any;
    eventHandler: (identifier: string, item: Node) => void;
}

@ccclass('UIRecycleScrollViewNew')
export class UIRecycleScrollViewNew extends Component {
    @property(ScrollView)
    scrollView: ScrollView | null = null;
    @property(UITransform)
    displayNode?: UITransform;
    @property(Node)
    item?: Node;
    private displayRect?: Rect;
    private slots: UIRecycleItem[] = []
    private freeSlots: Node[] = []
    private isDirty: boolean = false;
    private itemSize?: Size;
    InitializeChild?: InitializeHandler;

    private _data: any
    set data(value: any) { this._data = value }
    get data() { return this._data }

    private lineList: Array<Node>
    private isChangeFrame:boolean = true
    protected onLoad() {
        this.scrollView = this.node.getComponent(ScrollView);
        this.scrollView?.node.on(ScrollView.EventType.SCROLLING, this.setDirty, this)
        this.scrollView.node.on(ScrollView.EventType.SCROLL_BEGAN, () => game.frameRate = 60, this)
        this.scrollView.node.on(ScrollView.EventType.SCROLL_ENDED, this.changeFrameRate, this)
        if (this.item) {
            this!.itemSize = this.item.getComponent(UITransform)?.contentSize;
        }

        this.lineList = []
        View.instance.on("design-resolution-changed", () => {
            this.setDirty()
        }, this)
    }

    protected onEnable() {
        this.setDirty()
    }

    protected onDisable() {
        this.changeFrameRate()
    }

    private setDirty() {
        this.scheduleOnce(() => this.isDirty = true, 0)
    }

    private isInDisplayRect(item: Node) {
        if (!this.displayRect) {
            this.displayRect = this.displayNode.getBoundingBoxToWorld()
        }
        let pos = new Vec2(item.getWorldPosition().x, item.getWorldPosition().y)
        let inside = this.displayRect?.contains(pos)
        return inside
    }

    public async loadSlots(length: number) {
        this.scrollView.content.removeAllChildren()
        this.cleanUpChildren()
        for (let i = 0; i < length; i++) {
            this.addSlot(i.toString())
        }
        // await this.executePreFrame(this._getItemGenerator(length), 1)
        this.setDirty()
    }

    private addSlot(identifier: string) {
        let node = new Node("UIRecycleItem_" + identifier)
        node.addComponent(UITransform)
        let uiRecycleItem = node.addComponent(UIRecycleItem)
        uiRecycleItem.node.setParent(this.scrollView!.content)

        if (this.itemSize) {
            uiRecycleItem.getComponent(UITransform)?.setContentSize(this.itemSize)
        }

        this.slots.push(uiRecycleItem);
        uiRecycleItem.identifier = identifier;
        uiRecycleItem.filled = false;

        return uiRecycleItem;
    }

    private cleanUpChildren(destroy: boolean = false) {
        for (const slot of this.slots) {
            this.freeSlot(slot);
            slot.node.destroy();
        }
        this.slots = []
        if (destroy) {
            for (const node of this.freeSlots) {
                node.destroy();
            }
            this.freeSlots = []
        }
        this.lineList = []
    }

    private getItem() {
        if (this.freeSlots.length > 0) {
            let child = this.freeSlots.pop();
            return child
        }
        if (this.item) {
            return instantiate(this.item)
        }
        return null
    }

    private freeSlot(slot: UIRecycleItem) {
        if (slot.child == null || slot.child == undefined)
            return;
        slot.child.active = false;
        slot.child.setParent(this.scrollView!.view!.node);
        this.freeSlots.push(slot.child);
        slot.child = undefined;
        slot.filled = false;
    }

    protected lateUpdate() {
        if (this.isDirty)
            this.updateSlots();
    }

    private async updateSlots() {
        this.isDirty = false;
        if (this.slots == null || this.slots.length < 1)
            return;
        for (let i = this.slots.length - 1; i >= 0; i--) {
            let slot = this.slots[i]
            if (slot == null)
                continue;
            if (slot.isDestroy) {
                this.freeSlot(slot);
                this.slots.splice(i, 1)
                continue;
            }
            if (slot.filled && slot.node && !this.isInDisplayRect(slot.node)) {
                this.freeSlot(slot);
            }
        }
        await this.executePreFrame(this.refreshRect(), 1);
        for (const item of this.lineList) {
            item.active = true
        }
    }

    /**
     * 分帧执行 Generator 逻辑
     *
     * @param generator 生成器
     * @param duration 持续时间（ms），每次执行 Generator 的操作时，最长可持续执行时长。假设值为8ms，那么表示1帧（总共16ms）下，分出8ms时间给此逻辑执行
     */
    private executePreFrame(generator: Generator, duration: number) {
        return new Promise((resolve, reject) => {
            let gen = generator;
            // 创建执行函数
            let execute = () => {
                // 执行之前，先记录开始时间
                let startTime = new Date().getTime();

                // 然后一直从 Generator 中获取已经拆分好的代码段出来执行
                for (let iter = gen.next(); ; iter = gen.next()) {
                    // 判断是否已经执行完所有 Generator 的小代码段，如果是的话，那么就表示任务完成
                    if (iter == null || iter.done) {
                        resolve(0);
                        return;
                    }

                    // 每执行完一段小代码段，都检查一下是否已经超过我们分配的本帧，这些小代码端的最大可执行时间
                    if (new Date().getTime() - startTime > duration) {
                        // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行
                        this.scheduleOnce(() => {
                            execute();
                        });
                        return;
                    }
                }
            };

            // 运行执行函数
            execute();
        });
    }

    private *_getItemGenerator(length: number) {
        for (let i = 0; i < length; i++) {
            let newItem = () => {
                // if (i > 0 && (i + 1) % this.spaceCount - 1 == 0) { this.addLine() }
                this.addSlot(i.toString())
                if (i < 12) { this.setDirty() }
            }
            yield newItem();
        }
    }

    private *refreshRect() {
        for (let i = 0; i < this.slots.length; i++) {
            let slot = this.slots[i]
            if (slot == null || !slot.node)
                continue;
            if (!slot.filled && this.isInDisplayRect(slot.node)) {
                let item;
                let isInit = false;
                if (this.freeSlots.length > 0) {
                    item = this.freeSlots.pop();
                }
                else {
                    item = instantiate(this.item)
                    isInit = true;
                }
                if (item == null)
                    continue;
                item.name = slot.identifier;
                item.setParent(slot.node);
                item.position = Vec3.ZERO;
                item.active = true;

                slot.child = item;
                slot.filled = true;
                if (this.InitializeChild)
                    this.InitializeChild.eventHandler.call(this.InitializeChild.target, slot.identifier, slot.child);
                if (isInit)
                    yield
            }
        }
    }

    onDestroy() {
        for (const slot of this.slots) {
            if(slot.node && slot.node.destroy){
                slot.node.destroy();
            }
        }
        this.slots = []
        for (const node of this.freeSlots) {
            if(node.destroy){
                node.destroy();
            }
        }
        this.freeSlots = []

        if(this?.node?.destroy){
            this.node.destroy()
        }
    }

    set isSetFrameRate(isChange: boolean | null){
        this.isChangeFrame=isChange
    }
    get isSetFrameRate(){
         return this.isChangeFrame
    }

    private changeFrameRate(){
        if(this.isChangeFrame){
            game.frameRate = 45
        }
    }
    
}

