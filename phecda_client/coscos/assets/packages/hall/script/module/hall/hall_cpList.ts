
import { _decorator, Component, Node, ScrollView, Prefab, instantiate, Layout, UITransform, Label, macro, Sprite } from 'cc';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import Utility from '../../../../../script/utility/utility';
import { GameCategory, GameDataModel } from '../../model/GameDataModel';
import { SpriteDataModel } from '../../model/SpriteDataModel';
const { ccclass, property } = _decorator;

@ccclass('HallCPList')
export class HallCPList extends Component {

    @property(ScrollView)
    scrollView: ScrollView

    @property(Node)
    cpItem: Node

    private _onClick: Function
    public set onClick(v: Function) { this._onClick = v }

    private data: any = null

    public async show(info: any) {
        this.node.active = true
        if (!this.data) {
            this.data = info
            await this.executePreFrame(this._getItemGenerator(info), 3)
        }
        this.scrollView.scrollToLeft(0)
    }

    public hide() { this.node.active = false }

    public forceRefresh() {
        this.data = null
        this.scrollView.content.destroyAllChildren()
    }

    private setItem(item: Node, info: any) {
        if (!item) {
            return
        }
        Utility.instance.onButtonClick(item, () => {
            if (this._onClick) { this._onClick(info) }
        }, this, false)
        item.active = true
        const cpInfo = GameDataModel.GetCPInfoByCPID(info.ID)
        let state = item.getChildByPath("State")
        let countDownTime = state.getChildByPath("Time").getComponent(Label)
        let tips = state.getChildByPath("Tips").getComponent(Label)
        let self = this
        let countDown
        countDownTime.string = ""
        let cancelCountDown = () => {
            countDownTime.string = ""
            self.unschedule(countDown)
        }
        if (cpInfo.Status != 1) {
            state.active = true
            tips.string = LanguageManager.instance.getLangByID("loading_fixing")
            let lastTime = GameDataModel.initDataTime + Number(cpInfo.DiffTime) * 1000
            let remain = lastTime - Date.now() / 1000
            countDown = () => {
                let dt = (lastTime - Date.now()) / 1000
                countDownTime.string = Utility.instance.formatCountDownTime(dt)
                if (dt <= 0) { cancelCountDown() }
            }
            if (remain <= 0) {
                cancelCountDown()
                return
            }
            this.schedule(countDown, 0.2, macro.REPEAT_FOREVER)
        } else {
            cancelCountDown()
        }
    }

    protected onDestroy() {
        this.unscheduleAllCallbacks()
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

    private *_getItemGenerator(info: any) {
        for (let i = 0; i < info.DisplayIDList.length; i++) {
            const element = info.DisplayIDList[i]
            yield this.setItem(this.getItemByUrl(info.CategoryID, element), element)
            // yield this.getItem(`CPItem_${element.ID}_${info.CategoryID}`, (item) => {
            //     this.setItem(item, element)
            //     item.active = true
            // })
        }
    }

    private getItem(name: string, callback: (item: Node) => void) {
        let parentNode = new Node()
        this.scrollView.content.addChild(parentNode)
        ResourceManager.loadRes("prefabs/hall/" + name, Prefab, (err, prefab: Prefab) => {
            if (!err) {
                if (!this || !this.isValid || !this.node || !this.node.isValid) {
                    return
                }
                let item: Node = instantiate(prefab)
                let trans = item.getComponent(UITransform)
                parentNode.addComponent(UITransform).setContentSize(trans.contentSize)
                item.setParent(parentNode)
                callback(item)
            }
        })
    }

    private getItemByUrl(categoryiID: number, info: any) {
        const cpInfo = GameDataModel.GetCPInfoByCPID(info.ID)
        if (!cpInfo) return

        let item = instantiate(this.cpItem)
        item.setParent(this.scrollView.content)
        item.active = true
        let sprite = item.getChildByPath("Sprite").getComponent(Sprite)
        let vipLimit = item.getChildByPath("VipLimit")
        if (cpInfo.VipLimit && cpInfo.VipLimit > 0) {
            vipLimit.getChildByPath("Label").getComponent(Label).string = "" + cpInfo.VipLimit
            vipLimit.active = true
        } else {
            vipLimit.active = false
        }
        SpriteDataModel.SetSprite(sprite, `${cpInfo.IconUrl}_${categoryiID}.png`)
        if (info.Label && info.Label > 0) {
            SpriteDataModel.SetSprite(item.getChildByPath("Tag").getComponent(Sprite), `images/IconFrame/game_tag_${info.Label}`)
        }
        return item
    }
}