import { _decorator, Component, Vec2, UITransform } from 'cc';
import { GameConfig } from '../../com/game_config';
const { ccclass, property, menu } = _decorator;


@ccclass('AutoSizeBg')
@menu("Custom/背景自适应屏幕")
export default class AutoSizeBg extends Component {

    start() {
        this.fitScreen()
    }

    fitScreen() {
        // let screenSize = new Vec2(screen.width, screen.height)
        // let fitHeigh = true
        // if (screenSize.x > screenSize.y) {
        //     fitHeigh = false
        // }

        // let designResolution = GameConfig.designResolution
        // if (!fitHeigh) {
        //     let width = screenSize.x
        //     let heigh = (screenSize.x / designResolution.x) * designResolution.y
        //     this.node.getComponent(UITransform).width = width
        //     this.node.getComponent(UITransform).height = heigh
        // } else {
        //     let heigh = screenSize.y
        //     let width = (screenSize.y / designResolution.y) * designResolution.x
        //     this.node.getComponent(UITransform).width = width
        //     this.node.getComponent(UITransform).height = heigh
        // }
    }
}