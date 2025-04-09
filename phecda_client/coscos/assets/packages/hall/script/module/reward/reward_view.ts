
import { _decorator, Component, Node, Sprite, Label, SpriteFrame } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { UserDataModel } from '../../model/UserDataModel';
const { ccclass, property } = _decorator;


@ccclass('RewardView')
export class RewardView extends ViewBase {

    @property(Node)
    closeBtn: Node = null

    @property(Node)
    layoutNode: Node = null

    @property(Node)
    itemNode: Node = null


    showItems(datas) {
        Utility.instance.hideAllChildren(this.layoutNode)
        for (let i = 0; i < datas.length; i++) {
            let d = CommonName.ITEM_CONFIG[datas[i].ItemType]
            let item = Utility.instance.getPrefabNode(i, this.layoutNode, this.itemNode)
            let sprite = item.getChildByName("Icon").getComponent(Sprite)
            let label = item.getChildByName("Label").getComponent(Label)
            label.string = LanguageManager.instance.getLangByID(d.name) + "x" + UserDataModel.ConvertCash(datas[i].ItemNum)
            item.active = true
            ResourceManager.loadRes("images/item/" + d.spriteIndex + "/spriteFrame", SpriteFrame, (err, spriteFrame: SpriteFrame) => {
                if (!err) {
                    sprite.spriteFrame = spriteFrame
                }
            })
        }
    }
}

