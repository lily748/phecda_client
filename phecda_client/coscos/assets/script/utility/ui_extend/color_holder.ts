import { _decorator, Color, Component } from 'cc';
const { ccclass, property, menu } = _decorator;

class ColorKeyPair {
    color: Color = Color.WHITE
    key: string = ''
}

@ccclass('ColorHolder')
@menu('Custom/ColorHolder')
export default class ColorHolder extends Component {

    @property([ColorKeyPair])
    colorDataList: ColorKeyPair[] = []

    getColorByKey(key: string) {
        for (let i = 0; i < this.colorDataList.length; i++) {
            const element = this.colorDataList[i];
            if (element.key == key) {
                return element.color.clone()
            }
        }
        return null
    }
}