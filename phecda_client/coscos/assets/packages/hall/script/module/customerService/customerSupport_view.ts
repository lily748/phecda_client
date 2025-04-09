
import { _decorator, Button, Component, EditBox, instantiate, Label, LabelShadow, Layout, Node, Overflow, pseudoRandom, ScrollView, Sprite, SpriteFrame, UITransform } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;

@ccclass('CustomerSupportView')
export default class CustomerSupportView extends ViewBase {

    @property(Node)
    customerNode: Node = null;

    @property(Node)
    userNode: Node = null;

    @property(Node)
    timeNode: Node = null;

    @property(Node)
    tipNode: Node = null;
  
    @property(Label)
    checkLab: Label = null;

    @property(Sprite)
    avatar: Sprite = null;

    @property(Node)
    sendBtn: Node = null;

    @property(Node)
    backBtn: Node = null;

    @property(ScrollView)
    scrollview: ScrollView = null;

    @property(EditBox)
    input: EditBox = null;

    @property(Node)
    onLineCustomer: Node = null;


    checkStatus: number = -1;
    maxWidth: number = 530;
    waitMessages = [];
    tempLabels = [];

    _onlineCallBack = null;
    _target = null;


    setHeadImg(sp:SpriteFrame) {
        this.userNode.getChildByName("robot").getComponent(Sprite).spriteFrame = sp;
    }

    initOnLineCustomer(onlineCallBack:()=>void, target:any) {
        this._onlineCallBack = onlineCallBack;
        this._target = target;
    }

    setCustomerLabel(str: string) {
        let label = this.createLab(this.customerNode);
        if (str.includes("Customer Service")) {
            // this.setDefaultAnswer(label);
            let bubble = label.getChildByName("bubble");
            let defaultAnswer = label.getChildByName("defaultAnswer");
            bubble.active = false;
            defaultAnswer.active = true;
            defaultAnswer.parent.getComponent(UITransform).height = defaultAnswer.getComponent(UITransform).height + 60;
            if (this._onlineCallBack&&this._target) {
                let btnlink = defaultAnswer.getChildByPath("lab/btn_link");
                btnlink.on("click", this._onlineCallBack, this._target);
                this.tempLabels.push(btnlink);
            }
        } else {
            this.setBubbleLabel(label, str);
        }
    }

    setTimeLab(str: string) {
        let label = this.createLab(this.timeNode);
        label.getChildByName("timeLab").getComponent(Label).string = str;
    }

    setUserLabel(str: string) {
        let label = this.createLab(this.userNode);
        this.setBubbleLabel(label, str);
     }

     createLab(node: Node) {
        let label = instantiate(node);
        label.parent = this.scrollview.content;
        label.active = true;
        return label;
     }


    public async setCustomerQuessions(strs: string[], callBack:(index,string)=>void, target:any) {
        this.createLab(this.tipNode);
        let node = this.createLab(this.customerNode);
        let bubble:Node = node.getChildByName("bubble");
        let lab:Label = bubble.getChildByName("lab").getComponent(Label);
        let bubbleSize = bubble.getComponent(UITransform);
        let labNode = lab.node;
        let bubbleLayout:Layout = bubble.addComponent(Layout);
        let isWrap = null;
        let maxLen = 0;
        bubbleLayout.type = Layout.Type.VERTICAL;
        bubbleLayout.resizeMode = Layout.ResizeMode.CONTAINER;
        bubbleLayout.paddingTop = 20;
        bubbleLayout.paddingBottom = 20;
        lab.string = "You may want to ask:";
        for (let i = 0; i < strs.length; i++) {
            labNode = instantiate(lab.node);
            labNode.parent = lab.node.parent;
            labNode.addComponent(Button);
            this.tempLabels.push(labNode);
            // if (i!=0) {
                labNode.on("click", ()=>{
                    // console.log("click" , i);
                    callBack && target && callBack.call(target, i, strs[i]);
                }, this);
            // }  
            let labCom = labNode.getComponent(Label);
            let labStr = ` ●  ${i+1}.` + strs[i];
            labCom.string = labStr;
            labCom.updateRenderData(true);
            let labSize = labNode.getComponent(UITransform);
            if (labSize.width > maxLen) maxLen = labSize.width;
            let wrap = await this.asyncCheckWrap(labStr);
            if (wrap) {
                isWrap = true;
                labCom.overflow = Overflow.RESIZE_HEIGHT;
                labSize.width = this.maxWidth;
                lab.updateRenderData(true);
            }
        }
        if (isWrap) maxLen = this.maxWidth;
        bubbleSize.width = maxLen + 40;
        bubbleLayout.updateLayout(true);
        this.scheduleOnce(()=>{
            bubble.parent.getComponent(UITransform).height = bubbleSize.height + 20;
        }, 0.5)
        
    }


    asyncCheckWrap(str) {
        return new Promise((resolve,reject)=>{
            this.checkLabelWrap(str, (wrap)=>{
                resolve(wrap);
            }, this);
        });
    }


    public clearTempLeabs() {
        for (let i = 0; i < this.tempLabels.length; i++) {
            this.tempLabels[i] && this.tempLabels[i].isValid && this.tempLabels[i].off("click");
        }
    }


    public setBubbleLabel(node:Node, str:string) {
        this.checkLabelWrap(str, (wrap)=>{
            if (wrap) this.resizeHeightLab(node,str);
            else this.normalLab(node, str);
        }, this);
    }

    private normalLab(node:Node, str:string) {
        let bubble:Node = node.getChildByName("bubble");
        let bubbleSize = bubble.getComponent(UITransform);
        let lab:Label = bubble.getChildByName("lab").getComponent(Label);
        lab.overflow = Overflow.NONE;
        lab.string = str;
        lab.updateRenderData(true);
        let labSize = lab.node.getComponent(UITransform);
        bubbleSize.width = labSize.width + 50;
        bubbleSize.height = labSize.height + 20;
        bubble.parent.getComponent(UITransform).height = bubbleSize.height + 60;
    }

    private resizeHeightLab(node:Node, str:string) {
        let bubble:Node = node.getChildByName("bubble");
        let lab:Label = bubble.getChildByName("lab").getComponent(Label);
        let labSize = lab.node.getComponent(UITransform);
        let bubbleSize = bubble.getComponent(UITransform);
        lab.overflow = Overflow.RESIZE_HEIGHT;
        labSize.width = this.maxWidth;
        lab.string = str;
        lab.updateRenderData(true);
        bubbleSize.width = labSize.width + 50;
        bubbleSize.height = labSize.height + 20;
        bubble.parent.getComponent(UITransform).height = bubbleSize.height + 60;
    }

    private checkLabelWrap(str:string, callback:(wrap:boolean)=>void, target: any) {
        if (this.checkIsCache(str,callback,target)) return;
        this.checkStatus = 1;
        this.checkLab.string = str;
        this.checkLab.updateRenderData(true);
        let {width, height} = this.checkLab.getComponent(UITransform);
        this.resetCheckLab();
        target && callback && callback.call(target, (width > this.maxWidth));
        this.checkHasNext();
    }

    private checkIsCache(str:string, callback:(wrap:boolean)=>void, target: any) {
        if (str.length > 100) {
            target && callback && callback.call(target, true);
            return true;
        }
        if (this.checkStatus == 1) { 
            this.waitMessages.push({str: str, callback:callback, target:target});
            return true;
        }
        return false;
    }

    private checkHasNext() {
        if (this.waitMessages.length > 0) {
            let {str, callback, target} = this.waitMessages.shift();
            this.checkLabelWrap(str, callback, target);
        }
    }

    private resetCheckLab() {
        this.checkLab.string = "1";
        this.checkLab.updateRenderData(true);
        this.checkLab.getComponent(UITransform).width = this.maxWidth;
        this.checkStatus = 0;
    }


    protected onDestroy(): void {
        this.clearTempLeabs();
    }
    
}
