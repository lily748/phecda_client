
import { _decorator, Component } from 'cc';
import { Launch } from '../hall/Launch';
const { ccclass } = _decorator;

const DEFAULT_LANGUAGE: string = "en"

@ccclass('start')
export class start extends Component {
    start() {
        Launch.Instance;
    }
}
