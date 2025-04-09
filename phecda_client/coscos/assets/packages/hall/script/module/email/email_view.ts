
import { _decorator, Component, Node, ToggleContainer, Label,ScrollView, Sprite } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { NetworkManager } from '../../../../../script/framework/net/networkManager';
import { GameResConfig } from '../../../../../script/hall/GameResConfig';
import { hallClass, messageClass, netproto } from '../../../../../script/hall/ProtoDefine';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { GameDataModel } from '../../model/GameDataModel';
import { UserDataModel, RedPointType } from '../../model/UserDataModel';
import { uimail } from './uimail';
import { uimailinfo } from './uimailinfo';
const { ccclass, property } = _decorator;

@ccclass('email_view')
export class email_view extends ViewBase {
    @property(Node)
    btnBack: Node
    @property(ScrollView)
    emailList: ScrollView = null  
    @property(Node)
    listItem: Node
    @property(Sprite)
    sp_no: Sprite
    @property(Node)
    btnDelete: Node
    @property(Node)
    btnReceive: Node
}
