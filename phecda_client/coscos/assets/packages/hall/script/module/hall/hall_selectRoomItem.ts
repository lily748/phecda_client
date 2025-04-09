
import { _decorator, Component, Node, Label, EditBox, Toggle, Prefab, instantiate, Sprite, Button, v3, tween } from 'cc';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import LanguageManager from '../../../../../script/manager/language/language_manager';
import ResourceManager from '../../../../../script/manager/resoure_manager';
import { LoginServer } from '../../../../../script/net/login_serve';
import Utility from '../../../../../script/utility/utility';
import CommonName from '../../model/CommonName';
import { GameDataModel } from '../../model/GameDataModel';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { UserDataModel } from '../../model/UserDataModel';
import { HallGameList } from './hall_gameList';
const { ccclass, property } = _decorator;

@ccclass('HallSelectRoomItem')
export class HallSelectRoomItem extends Component {

    @property(Label)
    pointLabel: Label = null
    
    @property(Label)
    anteLabel: Label = null

    @property(Label)
    limiteLabel: Label = null

    @property(Node)
    joinNode: Node = null

    @property(Node)
    tipNode: Node = null

    @property(Node)
    commandNode: Node = null
    
    data = null
    onLoad() {
        this.pointLabel.string = ""
        this.anteLabel.string = ""
        this.limiteLabel.string = ""
        this.joinNode.active = false
        this.tipNode.active = false
    }

   
    setData(roomInfo,checkLimit:Function,index){
        this.data = roomInfo
        this.node.active = true

        if(roomInfo.RoomDesc){
            let roomDesc = JSON.parse(roomInfo.RoomDesc)
            this.pointLabel.string = roomDesc.desc
        }
        
        
        let baseScore = UserDataModel.ConvertCash(roomInfo.BaseScore)
        this.anteLabel.string = baseScore.toString()
        
        let LoginMoney = UserDataModel.ConvertCash(roomInfo.LoginMoney)
        let LoginMoneyMax = UserDataModel.ConvertCash(roomInfo.LoginMoneyMax)
        if(roomInfo.LoginMoneyMax == 0){
            this.limiteLabel.string = CommonName.Currency.Symbol + " "+ Utility.instance.numThousandsFormat(LoginMoney.toString()) + "+"
        }else{
            this.limiteLabel.string = CommonName.Currency.Symbol + " "+ Utility.instance.numThousandsFormat(LoginMoney.toString()) + "-" +  Utility.instance.numThousandsFormat(LoginMoneyMax.toString())
        } 

        let joinFlag = checkLimit(roomInfo,true)
        
       
        this.joinNode.active = joinFlag
        this.tipNode.active = !joinFlag

        this.commandNode.active = index == 0 && joinFlag
        
        this.joinNode.off("click")
        this.tipNode.off("click")
        
        this.joinNode.on("click", () => {
            AudioManager.instance.playButtonSound()
            checkLimit(this.data)
        })
        this.tipNode.on("click", () => {
            AudioManager.instance.playButtonSound()
            checkLimit(this.data)
        })
        
 
    }
    

    refreshTipNode(checkLimit:Function){
        let joinFlag = checkLimit( this.data,true)
        this.joinNode.active = joinFlag
        this.tipNode.active = !joinFlag
    }

   
    onDestroy(){
    
    }

}