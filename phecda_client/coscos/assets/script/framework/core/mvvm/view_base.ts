import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

import ModuleManager from "../module_manager";

@ccclass('ViewBase')
export default class ViewBase extends Component {

    onShow(arg0?: any) { }

    on_destroy(): any { }

    destroyView() {
        if (this.node && this.node.isValid) {
            this.node.destroy()
        }
    }

    get isActive(): boolean {
        if (this.node != null) {
            return this.node.active;
        }
        return false;
    }

    showNetPrompt(show: boolean) {
        if (show) {
            ModuleManager.instance.showModule("NetPrompt")
        } else {
            ModuleManager.instance.hideModule("NetPrompt")
        }
    }
}