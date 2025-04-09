import { Component, _decorator, Enum, view } from "cc";
const { ccclass, property, integer, menu } = _decorator;

export enum AutoScaleType {
    WidthAutoScale = 1,
    HeightAutoScale = 2,
    FixedWidth = 3,
    FixedHeight = 4
};

@ccclass("DragBoneAdapt")
@menu('Custom/骨骼动画适配器')
export default class DragBoneAdapt extends Component {
    @property({ type: Enum(AutoScaleType) })
    autoScaleType: AutoScaleType = AutoScaleType.FixedWidth;
    start() {
        //适配宽度模式  (ps 只用于龙骨动画节点，其他节点最好采用cocos自带的widget组件来适配)
        console.log(`----------------scale--${this.node.name}-----------`);
        console.log("scale>>getVisibleSize:", view.getVisibleSize().width, view.getVisibleSize().height);
        console.log("scale>>getDesignResolutionSize", view.getDesignResolutionSize().width, view.getDesignResolutionSize().height);
        //当前屏幕的分辨率
        let screenSize = view.getVisibleSize();
        //设计的分辨率(当前项目的设计分辨率)
        let designResolutionSize = { width: 750, height: 1334 }
        let scale;
        switch (this.autoScaleType) {
            case AutoScaleType.WidthAutoScale:
                scale = screenSize.width / designResolutionSize.width;
                this.node.setScale(scale, 1);
                break;
            case AutoScaleType.HeightAutoScale:
                scale = screenSize.height / designResolutionSize.height;
                this.node.setScale(1, scale);
                break;
            case AutoScaleType.FixedWidth:
                scale = screenSize.width / designResolutionSize.width;
                this.node.setScale(scale);
                break;
            case AutoScaleType.FixedHeight:
                scale = screenSize.height / designResolutionSize.height;
                this.node.setScale(scale);
                break;
        }
        console.log("sceneSclae", scale);
    }
}