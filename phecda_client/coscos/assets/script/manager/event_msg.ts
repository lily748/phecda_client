
import { _decorator, EventTarget } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('EventMsg')
export class EventMsg {

    private msgEventTarget = new EventTarget()

    on<TFunction extends (...any: any[]) => void>(type: string, callback: TFunction, thisArg?: any, once?: boolean) {
        this.msgEventTarget.on(type, callback, thisArg, once)
    }

    once<TFunction extends (...any: any[]) => void>(type: string, callback: TFunction, thisArg?: any) {
        this.msgEventTarget.once(type, callback, thisArg)
    }

    off<TFunction extends (...any: any[]) => void>(type: string, callback?: TFunction, thisArg?: any): void {
        this.msgEventTarget.off(type, callback, thisArg)
    }

    targetOff(typeOrTarget: any): void {
        this.msgEventTarget.targetOff(typeOrTarget)
    }

    removeAll(typeOrTarget: any): void {
        this.msgEventTarget.removeAll(typeOrTarget)
    }

    hasEventListener(type: string, callback?: (...any: any[]) => void, target?: any): boolean {
        return this.msgEventTarget.hasEventListener(type, callback, target)
    }

    emit(type: string, arg0?: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any): void {
        this.msgEventTarget.emit(type, arg0, arg1, arg2, arg3, arg4)
    }

}


