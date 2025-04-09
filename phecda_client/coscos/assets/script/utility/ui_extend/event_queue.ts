
import { _decorator, Component, Node } from 'cc';
import { timeUrls } from '../../hall/UrlConfig';
const { ccclass, property } = _decorator;
interface eventTask {
    target: any
    callback: Function
    params?: any
    uuid: number;
}

@ccclass('event_queue')
export class event_queue {

    private uuid;
    private runingTask;
    private _queues: Array<eventTask> = [];
    public get queues(): Array<eventTask> {
        return this._queues;
    }

    public push(callback, params, target) {
        let task = {
            target: target,
            callback: callback,
            params: params,
            uuid: this.uuid++
        }
        this._queues.push(task)
        this.update();
    }

    public remove(id) {
        for (let i = this._queues.length - 1; i >= 0; i--) {
            let action = this._queues[i]
            if (action.uuid == id) {
                this._queues.splice(i, 1)
            }
        }
    }

    public complete(uuid) {
        if (!this.runingTask || this.runingTask.uuid != uuid)
            return;
        this.runingTask = null;
        if (this._queues.length > 0)
            this.update();
    }

    public update() {
        if (this.runingTask || this._queues.length < 0) {
            return;
        }

        let action = this.queues.shift();
        if (action) {
            this.runingTask = action;
            let callback = action.callback;
            let params = action.params;
            let target = action.target;
            if (callback)
                callback.call(target, params)
        }
    }
}
