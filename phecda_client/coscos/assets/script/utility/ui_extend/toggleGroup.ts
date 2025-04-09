
import { _decorator, Component, Node, ToggleContainer, EventHandler, Toggle } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ToggleGroup')
export class ToggleGroup extends Component {

    @property(ToggleContainer)
    togContainer: ToggleContainer

    private _listener: (sender: Toggle) => void

    protected start() {
        const containerEventHandler = new EventHandler()
        containerEventHandler.target = this.node;
        containerEventHandler.component = "ToggleGroup"
        containerEventHandler.handler = 'onChecked'
        this.togContainer.checkEvents.push(containerEventHandler)
    }

    protected onChecked(sender: Toggle) {
        if (this._listener) {
            this._listener(sender)
        }
    }

    public setListener(listener: (sender: Toggle) => void) {
        this._listener = listener
    }
}