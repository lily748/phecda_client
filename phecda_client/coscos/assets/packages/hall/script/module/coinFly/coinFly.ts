import { find, instantiate, Node, sp, tween, v2, v3, Vec3, _decorator } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import AudioManager from '../../../../../script/manager/audio_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import CoinFlyView from './coinFly_view';

const { ccclass, property } = _decorator;

@ccclass('CoinFly')
export default class CoinFly extends Module<CoinFlyView, null>{

    private num: number = 20
    private interval: number = 0.1
    private minScale: number = 0.6
    private maxScale: number = 1

    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/public_coinFly";
        this.viewType = CoinFlyView;
        this.modelType = null;
        this.layer = ViewLayer.High
        this.needAnim = false
        this.needViewMask = false
    }

    onInit() {
        this.view.coin.active = false
    }

    onShow(data?: any) {
        let start = data?.Start
        let end = data?.End || find("GameRoot/Canvas/Low/Hall/public_hall/Top/Gold/coinAnim/coin")?.worldPosition
        if (start && end) {
            this.play(start, end)
        } else {
            this.onClose()
        }
    }

    private onClose() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.CoinFly)
    }

    private play(start: Vec3, end: Vec3) {
        AudioManager.instance.playEffect("sound/public/CoinFly")
        this.node.active = true
        const p0 = v3(start.x, start.y)
        const p3 = v3(end.x, end.y)
        const p1 = v2(p0.x, (p0.y + p3.y) * 0.5)
        const p2 = v2(p3.x, (p0.y + p3.y) * 0.5)

        let fly = () => {
            let item = instantiate(this.view.coin)
            item.setParent(this.view.coin.parent)
            item.setWorldPosition(p0)
            item.setScale(v3(this.minScale, this.minScale))
            item.active = true
            let onUpdate = (_tar: Node, ratio: number) => {
                let pos = Utility.instance.getBezierThree(ratio, p0, p1, p2, p3)
                item?.setWorldPosition(pos)
                let scale = this.maxScale - Math.abs(ratio - 0.5) * 2 * (this.maxScale - this.minScale)
                item?.setScale(v3(scale, scale))
            }
            tween(item)
                .to(0.7, { worldPosition: p3 }, { onUpdate: onUpdate })
                .delay(0.2)
                .call(() => {
                    if (item?.isValid) item.getComponent(sp.Skeleton).enabled = false
                })
                .delay(0.5)
                .call(() => {
                    item?.destroy()
                    if (this?.view?.coin?.parent?.children.length <= 2) { this.onClose() }
                })
                .start()
        }
        
        for (let i = 0; i < this.num; i++) {
            this.scheduleOnce(fly.bind(this), this.interval * i)
        }
    }
}