import { _decorator, Component, Node, Prefab, instantiate, Widget, math, director, Tween } from 'cc';
const { ccclass, property } = _decorator;

import ViewBase from "./view_base";
import ModelBase from "./model_base";
import ModuleManager from "../module_manager";
import ResourceManager from "../../../manager/resoure_manager";
import { DEBUG } from 'cc/env';

export enum ViewLayer {
    Low,
    Mid,
    High,
    Max,
}

@ccclass('ModuleBase')
export default class Module<V extends ViewBase, M extends ModelBase> extends Component {
    public bundleName: string = "resources"
    public moduleName: string
    protected windowPrefabResPath: string;
    protected viewType;
    protected modelType;
    public needAnim: boolean = false//是否需要打开关闭动画
    public needViewMask: boolean = false
    public viewMask: Node | null = null//view 界面遮罩
    public layer: ViewLayer = ViewLayer.Low;
    protected view: V;
    protected model: M;
    protected intentData: any
    private isInited: boolean
    private isDestroyed: boolean
    private isHide: boolean
    private isShowState: boolean
    private completeCallback: Function
    protected mPrefab: Prefab | null = null
    protected autoShowAnim: boolean = false
    protected reloadTimes: number = 3//下载view重试次数2次

    onShow(arg0: any) { }

    onHide() {
        this.isHide = true
        this.setShowState(false)
    }

    beforeOnShow(callback: Function) {
        callback()
    }

    //重置module 所有事件注销
    resetModule() { }

    onInit(arg0: any) { }

    //模块初始化完成，但是View还没初始化完成
    onModuleInit(arg0: any) { }

    on_destroy(): any { }

    resetInit(viewNode: Node, intentData?: any, completeCallback?: (m: any) => void) {
        let self = this
        this.intentData = intentData
        if (this.modelType != null) {
            this.model = new this.modelType()
            this.model.module = this
        }
        let viewBase = viewNode.getComponent<V>(self.viewType);
        self.view = viewBase
        self.isInited = true
        self.onInit(self.intentData);
        self.show(self.intentData, completeCallback)
    }

    init(intentData?: any, completeCallback?: (m: any) => void) {
        let self = this
        this.setShowState(true)
        this.intentData = intentData;

        if (this.modelType != null) {
            this.model = new this.modelType()
            this.model.module = this
        }
        if (!this.bundleName || this.bundleName == "") {
            this.bundleName = "resources"
        }

        this.onModuleInit(intentData)
        this.loadViewMask(() => {
            if(DEBUG){
                console.log("request load module:", this.windowPrefabResPath)
            }
            self.loadPrefab(this.bundleName, this.windowPrefabResPath, (err, prefab) => {
                self.onLoadedPrefabComplete(err, prefab, completeCallback)
            })
        })
    }

    private loadPrefab(bundleName: string, windowPrefabResPath, completeCallback: (error: Error, resource: any) => void, connect?: number): void {
        let self = this
        if (!connect) {
            connect = 1
        }
        ResourceManager.loadBundle(this.bundleName, this.windowPrefabResPath, Prefab, null, (err: Error, prefab: Prefab) => {
            if (err) {
                if (connect < self.reloadTimes) {
                    connect += 1
                    self.loadPrefab(bundleName, windowPrefabResPath, completeCallback, connect)
                    console.warn("load res fail,retry：", windowPrefabResPath)
                } else {
                    completeCallback(err, prefab)
                }
            } else {
                completeCallback(err, prefab)
            }
        })
    }

    private onLoadedPrefabComplete(err: Error, prefab: Prefab, completeCallback?: (m: any) => void) {
        let self = this
        if (err) {
            console.error("load module error:", self.windowPrefabResPath)
            if (completeCallback) {
                completeCallback(null)
            }
            return
        } else {
            if(DEBUG){
                console.log("load module complete:", this.windowPrefabResPath)
            }
        }

        if (self.isDestroyed || !self.node) {
            console.log(self.moduleName, "has destoryed")
            return
        }

        if (self.view && self.view.node) {
            if (!self.isShowState && self.isHide) {
                self.node.active = false
                console.warn(self.moduleName, "loaded but now is hide")
                return
            } else {
                self.show(self.intentData, completeCallback)
            }
            return
        }

        let newNode = instantiate(prefab)
        self.mPrefab = prefab
        self.node.addChild(newNode);
        let viewBase = newNode.getComponent<V>(self.viewType);
        self.view = viewBase

        let widget = newNode.getComponent(Widget)
        if (!widget) {
            let widget = newNode.addComponent(Widget)
            widget.isAlignTop = true;
            widget.isAlignBottom = true;
            widget.isAlignLeft = true;
            widget.isAlignRight = true;
            widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
        }

        if (!self.isInited) {
            self.onInit(self.intentData);
        }
        self.isInited = true;

        if (!self.isShowState && self.isHide) {
            self.node.active = false
            console.warn(self.moduleName, "loaded but now is hide")
            return
        } else {
            self.show(self.intentData, completeCallback)
        }
    }

    private loadViewMask(cb) {
        if (this.needViewMask && this.viewMask == null) {
            let that = this
            ResourceManager.loadBundle("resources", "prefabs/public_mask", Prefab, null, (err: Error, prefab: Prefab) => {
                if (err) {
                    console.warn("load mask error:", err)
                    cb()
                    return
                }
                let maskNode = instantiate(prefab)
                maskNode.setParent(that.node)
                maskNode.active = false
                that.viewMask = maskNode
                cb()
            })
        } else {
            cb()
        }
    }

    show(intentData?: any, completeCallback?: (m: any) => void) {
        if (!this.isInited) {
            this.init(intentData, completeCallback)
            return
        }
        this.setShowState(true)
        this.intentData = intentData;
        this.completeCallback = completeCallback;
        if (!this || !this.isValid) {
            return
        }
        if (!this.node || !this.node.isValid) {
            return
        }
        if (!this.view || !this.view.isValid) {
            return
        }
        if (!this.view.isValid || !this.node.isValid) {//destroy在这一帧结束调用！
            console.warn("view is destoryed：", this.moduleName, this.windowPrefabResPath)
            return
        }
        if (!this.node.active) {
            this.node.active = true;
        }
        this.isHide = false
        if (this.completeCallback) {
            this.completeCallback(this)
        }
        let self = this
        this.beforeOnShow(() => {
            if (self && self.isValid && self.node && self.node.isValid) {
                self.onShow(intentData)
                self.view.onShow(intentData);
                if (self.autoShowAnim) {//自动播放动画，否则等待module完成请求后自己调用动画方法
                    self.showAnim(true)
                }
            }
        })
    }

    showAnim(open = true) {
        if (!this.view) {
            return
        }
        if (this.viewMask && this.viewMask.active == false) {
            this.viewMask.active = true
        }
        if (this.needAnim) {
            if (open) {
                ModuleManager.instance.playAnim(true, this.view.node, this.viewMask, this.scheduleShow.bind(this))
            } else {
                ModuleManager.instance.playAnim(false, this.view.node, this.viewMask, this.scheduleHide.bind(this))
            }
        } else {
            if (open) {
                this.scheduleShow()
            } else {
                this.scheduleHide()
            }
        }
    }

    showNetPrompt(show: boolean) {
        if (show) {
            ModuleManager.instance.showModule("NetPrompt")
        } else {
            ModuleManager.instance.hideModule("NetPrompt")
        }
    }

    private scheduleShow() {
        if (this.view) {
            this.view.node.scale = new math.Vec3(1, 1, 1)
        }
    }

    private scheduleHide() {
        if (!this.node) {
            return
        }
        if (this.node.active) {
            this.node.active = false;
        }
        this.onHide()
    }

    hide() {
        this.isHide = true
        this.setShowState(false)
        this.showAnim(false)
    }

    setShowState(isShow: boolean) {
        this.isShowState = isShow
    }

    isActive(): boolean {
        if (this.node != null && this.node.isValid) {
            return this.node.active;
        }
        return false;
    }

    setActive() {
        if (this.node != null && this.node.isValid) {
            this.node.active = true
        }
    }

    destroyModule() {
        this.on_destroy()
        Tween.stopAllByTarget(this.node)
        if (this.view && this.view.isValid) {
            if (this.view.node && this.view.node.isValid) {
                Tween.stopAllByTarget(this.view.node)
            }
            this.view.unscheduleAllCallbacks()
            this.view.on_destroy()
            this.view.destroyView();
            this.view = null;
        }
        if (this.viewMask && this.viewMask.isValid) {
            Tween.stopAllByTarget(this.viewMask)
        }

        this.unscheduleAllCallbacks()
        ModuleManager.instance.removeCacheModule(this.moduleName)
        if(DEBUG){
            console.warn("module destroy：", this.moduleName)
        }
        this.node.active = false
        this.isHide = true
        this.setShowState(false)
        this.node.destroy()
        this.isDestroyed = true
    }
}