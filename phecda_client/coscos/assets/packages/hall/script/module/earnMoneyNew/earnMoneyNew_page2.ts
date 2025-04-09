
import { _decorator, Component, instantiate, Label, Node, PageView, RichText, Sprite, sys, UITransform } from 'cc';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import { HttpDataModel, PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import CommonName from '../../model/CommonName';
import { GameData } from '../../model/GameData';
import { SpriteDataModel } from '../../model/SpriteDataModel';
const { ccclass, property } = _decorator;

@ccclass('EarnMoneyNewPage2')
export class EarnMoneyNewPage2 extends Component {

   @property(Node)
   btn_share_0: Node = null;

   @property(Node)
   btn_share_1: Node = null;

   @property(Node)
   btn_share_2: Node = null;

   isInit = false;
    public init() {
        if (!this.isInit) {
            this.initEvent();
            this.isInit = true;
            this.setRuls();
        }
    }

    private initEvent() {
      
        Utility.instance.onButtonClick(this.btn_share_0, this.onShareClick, this, false);
        Utility.instance.onButtonClick(this.btn_share_1, this.onShareClick, this, false);
        Utility.instance.onButtonClick(this.btn_share_2, this.onShareClick, this, false);
      
    }

    setRuls() {
        let urls = GameData.getRuleUrls();
        if (urls) {
            for (let i = 0; i < urls.length; i++) {
                let child = this.node.getChildByPath("view/content/rules_"+(i+1));
                if (child && urls[i] != "") {
                    SpriteDataModel.SetSprite(child.getComponent(Sprite), urls[i]);
                    child.active = true;
                }
            }
        }
    }

    onShareClick() {
        ModuleManager.instance.showModule(CommonName.MODULE.EarnMoneyShare);
    }

   




 

   
    
    
}
