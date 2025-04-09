import { error } from 'cc';

import { _decorator, Component, Enum, Graphics, Color, UITransform, CCString, CCInteger } from 'cc';
import { EDITOR, WECHAT } from 'cc/env';
const { ccclass, property, menu, requireComponent, executeInEditMode } = _decorator;

const ModeData = ["-1", "numeric", "alphanumeric", "octet"];

const EcclevelData = ["-1", "L", "M", "Q", "H"];

export enum ModeType {
    DEFAULT,
    MODE_NUMERIC,
    MODE_ALPHANUMERIC,
    MODE_OCTET
}

export enum EcclevelType {
    DEFAULT,
    ECCLEVEL_L,
    ECCLEVEL_M,
    ECCLEVEL_Q,
    ECCLEVEL_H,
}

@ccclass
@menu("Custom/二维码生成组件")
@requireComponent(Graphics)
@executeInEditMode
export default class QRCodeTool extends Component {

    @property(CCString)
    data: string = "二维码内容";

    @property(CCInteger)
    padding: number = 10;

    @property(CCInteger)
    cellSize: number = 5;

    @property({ visible: false })
    version: number = -1;

    @property({ min: -1, max: 8, step: 1 })
    mask = -1;

    @property({ type: Enum(ModeType) })
    mode: ModeType = ModeType.DEFAULT;

    @property({ type: Enum(EcclevelType) })
    ecclevel: EcclevelType = EcclevelType.DEFAULT;

    @property({ visible: false })
    preview: boolean = false;

    graphics: Graphics;

    onLoad() {
        this.graphics = this.node.getComponent(Graphics);
    }

    start() {
        // this.applayChanged();
    }

    async applayChanged() {
        await 0;
        if (EDITOR && !this.preview) { return; }
        let options = {
            version: this.version,
            mask: this.mask,
            mode: this.mode == 0 ? null : ModeData[this.mode],
            ecclevel: this.ecclevel == 0 ? null : EcclevelData[this.ecclevel],
        };
        let dataArray = qrcode.generate(this.data, options);
        this.updateGraphics(dataArray);
    }


    async updateGraphics(dataArray: Array<Array<number>>) {
        // let size = dataArray.length * this.cellSize + this.padding * 2;
        try {
            let nodeTrans = this.node.getComponent(UITransform)
            let size = nodeTrans.contentSize.x
            this.cellSize = size / dataArray.length
            this.graphics.clear();
            this.graphics.fillColor = Color.WHITE;
            this.graphics.rect(- size * nodeTrans.anchorX, - size * nodeTrans.anchorY, size, size);
            this.graphics.fill();
            this.graphics.fillColor = Color.BLACK;
            for (let y = 0; y < dataArray.length; y++) {
                const dataLine = dataArray[y];
                for (let x = 0; x < dataLine.length; x++) {
                    const dataBlock = dataLine[x];
                    let y1 = dataArray.length - y - 1;
                    dataBlock && this.graphics.rect(x * this.cellSize + this.padding - size * nodeTrans.anchorX, y1 * this.cellSize + this.padding - size * nodeTrans.anchorY, this.cellSize, this.cellSize);
                    dataBlock && this.graphics.fill();
                }
            }
            nodeTrans.width = size;
            nodeTrans.height = size;
        } catch (e) {
            error("qrcode_tool updateGraphics error :", e);
        }
    }

}
