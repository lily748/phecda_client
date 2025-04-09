import { _decorator, Component, Node, Widget, UITransform, math, tween, Vec3, UIOpacity, js, Tween, game, Game, warn } from 'cc';
const { ccclass, property } = _decorator;

import ModuleBase, { ViewLayer } from "./mvvm/module_base";
import ViewBase from "./mvvm/view_base";
import ModelBase from './mvvm/model_base';
import EventManager from '../../manager/event_manager';
import CommonName from '../../../packages/hall/script/model/CommonName';
import { DEBUG } from 'cc/env';

@ccclass('ModuleManager')
export default class ModuleManager extends Component {

    public static instance: ModuleManager;
    private _module: any = {}

    @property(Node)
    low: Node | null = null;
    @property(Node)
    middle: Node | null = null;
    @property(Node)
    high: Node | null = null;
    @property(Node)
    max: Node | null = null;
    @property(Node)
    mainCamera: Node | null = null;

    private _hideTime = 0

    onLoad() {
        ModuleManager.instance = this;
        game.on(Game.EVENT_HIDE, this.onApplicationHide.bind(this))
        game.on(Game.EVENT_SHOW, this.onApplicationShow.bind(this))
    }

    onDestroy() {
        game.off(Game.EVENT_HIDE, this.onApplicationHide.bind(this))
        game.off(Game.EVENT_SHOW, this.onApplicationShow.bind(this))
    }

    onApplicationHide() {
        this._hideTime = Date.now()
        console.log("onApplicationHide", this._hideTime)
        EventManager.instance.dispatch(Game.EVENT_HIDE)
    }

    onApplicationShow() {
        let nowTime = Date.now()
        let difTime = nowTime - this._hideTime
        console.log("onApplicationShow", difTime)
        EventManager.instance.dispatch(Game.EVENT_SHOW, difTime)
    }

    private addModule(moduleName: string, intentData?: any, onFinishLoad?: (m: any) => void) {
        // let module: any = js.getClassByName(moduleName)
        let newNode = new Node()
        newNode.name = moduleName
        let widget = newNode.addComponent(Widget)
        widget.isAlignTop = true;
        widget.isAlignBottom = true;
        widget.isAlignLeft = true;
        widget.isAlignRight = true;
        widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE
        let module: any = newNode.addComponent(moduleName)
        if (module == null) {
            console.warn("get module fail:" + moduleName)
            return null
        }
        module.moduleName = moduleName
        switch (module.layer) {
            case ViewLayer.Low:
                newNode.getComponent(UITransform).width = this.low.getComponent(UITransform).width
                this.low.addChild(newNode)
                break;
            case ViewLayer.Mid:
                newNode.getComponent(UITransform).width = this.middle.getComponent(UITransform).width
                this.middle.addChild(newNode)
                break;
            case ViewLayer.High:
                newNode.getComponent(UITransform).width = this.high.getComponent(UITransform).width
                this.high.addChild(newNode)
                break;
            case ViewLayer.Max:
                newNode.getComponent(UITransform).width = this.max.getComponent(UITransform).width
                this.max.addChild(newNode)
                break;
            default:
                newNode.getComponent(UITransform).width = this.low.getComponent(UITransform).width
                this.low.addChild(newNode)
                break;
        }
        this._module[moduleName] = module;
        module.node.setSiblingIndex(module.node.parent.children.length - 1)
        module.init(intentData, onFinishLoad);
        return module
    }

    //跳转到某个模块，会把其他模块都隐藏
    goToModule(moduleName: string, intentData?: any, completeCallback?: Function) {
        let self = this
        // console.log("跳转模块： " + moduleName);
        this.showModule(moduleName, intentData, function () {
            self.hideAllModule(moduleName)
            if (completeCallback) {
                completeCallback()
            }
        })
    }

    toastLong(text: string) {
        let data = { text: text, long: true }
        this.showModule("Toast", data)
    }

    toast(text: string) {
        this.showModule("Toast", text)
    }

    showNetPrompt(data?: any) {
        this.showModule("NetPrompt", data)
    }

    hideNetPrompt() {
        this.hideModule("NetPrompt")
    }

    showDialog_Confirm(text: string, confirmBtnCallback: Function, title?: string, clickButtonConfirmNotHideView?) {
        ModuleManager.instance.showModule("Dialog", null, (module) => {
            if (module) {
                module.show_center_button(title, text, confirmBtnCallback, clickButtonConfirmNotHideView)
            }
        })
    }

    showDialog_CancelConfirm(text: string, confirmBtnCallback: Function, cancelBtnCallback?: Function, title?: string, clickButtonConfirmNotHideView?) {
        ModuleManager.instance.showModule("Dialog", null, (module) => {
            if (module) {
                module.show_common(title, text, confirmBtnCallback, cancelBtnCallback, clickButtonConfirmNotHideView)
            }
        })
    }

    showDialog_BackToLifeConfirm(title: string, text: string, leftBtnStr, rightBtnStr, rightCb, leftCb) {
        ModuleManager.instance.showModule("Dialog", null, (module) => {
            if (module) {
                module.show_common_btnTxt(title, text, leftBtnStr, rightBtnStr, rightCb, leftCb)
            }
        })
    }

    showWebview(data: any) {
        this.showModule("WebviewPage", data)
    }

    showModule(moduleName: string, intentData?: any, completeCallback?: (m: any) => void) {
        if (moduleName == null || moduleName == undefined || moduleName == "") {
            return
        }
        if(CommonName.INVALID_MODULE[moduleName])
        {
            // warn(`当前模块 ${moduleName} 被屏蔽！！`);
            completeCallback && completeCallback(null);
            return;
        }
        if(DEBUG){
            console.log("showModuleName:" + moduleName)
        }
        let module: ModuleBase<ViewBase, ModelBase> = this._module[moduleName]
        if (module == null) {
            module = this.addModule(moduleName, intentData, completeCallback)
        } else {
            module.node.setSiblingIndex(module.node.parent.children.length - 1)
            module.show(intentData, completeCallback)
        }
        return module
    }

    moduleHasActive(moduleName: string) {
        let module: ModuleBase<ViewBase, ModelBase> = this._module[moduleName];
        if (module) {
            return module.isActive()
        }
    }

    moduleLayerType(moduleName: string) {
        let module: ModuleBase<ViewBase, ModelBase> = this._module[moduleName];
        if (module) {
            return module.layer
        }
    }

    setModuleActive(moduleName: string) {
        let module: ModuleBase<ViewBase, ModelBase> = this._module[moduleName];
        if (module) {
            module.setActive()
        }
    }

    getModule(moduleName: string) {
        let module = this._module[moduleName]
        return module
    }

    hideModule(moduleName: string) {
        let module: ModuleBase<ViewBase, ModelBase> = this._module[moduleName];
        if (module) {
            if(DEBUG){
                console.warn("hideModule:", moduleName)
            }
            module.hide()
        }
    }

    hideAllModule(except?: any) {
        let exceptList = ['Toast']
        if (except) {
            if (except instanceof Array) {
                for (let i = 0; i < except.length; i++) {
                    exceptList.push(except[i]);
                }
            } else if (typeof (except) == 'string') {
                exceptList.push(except);
            }
        }
        for (let key in this._module) {
            let module: ModuleBase<ViewBase, ModelBase> = this._module[key]
            if (module && module.isActive()) {
                let needHide = true
                for (let i = 0; i < exceptList.length; i++) {
                    if (module.moduleName == exceptList[i]) {
                        needHide = false;
                        break;
                    }
                }
                if (needHide) {
                    module.hide()
                }
            }
        }
    }

    removeCacheModule(moduleName: string) {
        this._module[moduleName] = null
    }

    destroyModule(moduleName: string) {
        let module: ModuleBase<ViewBase, ModelBase> = this._module[moduleName];
        if (module) {
            module.destroyModule()
        }
    }

    destroyAllModule(except?: any) {
        let exceptList = [
            'NetPrompt',
            'Dialog',
            'Toast',
        ]
        if (except) {
            if (except instanceof Array) {
                for (let i = 0; i < except.length; i++) {
                    exceptList.push(except[i]);
                }
            } else if (typeof (except) == 'string') {
                exceptList.push(except);
            }
        }
        for (let key in this._module) {
            let module: ModuleBase<ViewBase, ModelBase> = this._module[key]
            if (module) {
                let needDestory = true
                for (let i = 0; i < exceptList.length; i++) {
                    if (module.moduleName == exceptList[i]) {
                        needDestory = false;
                        break;
                    }
                }
                if (needDestory) {
                    module.destroyModule()
                } else if (module.moduleName == "Dialog") {
                    // module.hide()
                }
            }
        }
    }

    playAnim(open: boolean, target: Node, mask?: Node, callback?: Function) {
        if (open) {
            target.active = true
            target.scale = new math.Vec3(0.9, 0.9, 0.9)
            let mainTween = new Tween(target)
            mainTween.to(0.2, { scale: new Vec3(1, 1, 1) }, { easing: "backOut" }).start();

            if (mask) {
                mask.active = true
                let op = mask.getComponent(UIOpacity)
                if (!op) op = mask.addComponent(UIOpacity)
                op.opacity = 0
                let maskTween = new Tween(op)
                maskTween.to(0.3, { opacity: 190 }).start();
            }

            this.scheduleOnce(() => {
                if (callback) {
                    callback()
                }
            }, 0.1)
        } else {
            //直接关闭，不播放缩放动画
            if (target && target.isValid) {
                target.active = false
            }

            if (mask) {
                mask.active = false
            }

            if (callback) {
                callback()
            }
        }
    }
}