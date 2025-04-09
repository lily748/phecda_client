
import { _decorator, Node,Sprite,Color,instantiate,Button, find, Label,v3} from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { GameListNew_View } from './GameListNew_view';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
import AudioManager from '../../../../../script/manager/audio_manager';
import EventManager from '../../../../../script/manager/event_manager';
import { UserDataModel } from '../../model/UserDataModel';
import { PostData } from '../../model/HttpDataModel';
import { Http_Define } from '../../../../../script/hall/HttpDefine';
import { HttpDataModel } from '../../model/HttpDataModel';
import { SpriteDataModel } from '../../model/SpriteDataModel';
import { GameItemNew } from './GameItemNew';

const { ccclass, property } = _decorator;

@ccclass('GameListNew')
export class GameListNew extends Module<GameListNew_View,null> {
    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/gamelist/public_gameList";
        this.viewType = GameListNew_View;
        this.modelType = null;
        this.layer = ViewLayer.Mid
    }

    private readonly AllGame = "All"
    private readonly HotGame = "Hot"
    private readonly RecentGame = "Recent"

    private selectVendorID:string = ""
    private currSortName:string = "All"
    private gameListData: any = []

    private getValid() {
        return this && this.isValid && this.node && this.node.isValid && this.view && this.view.isValid && this.view.node && this.view.node.isValid
    }

    onInit() {
        this.registerEvent(true)   
        Utility.instance.onButtonClick(this.view.btnBack, this.onClickBtnClose, this, false)
        Utility.instance.onButtonClick(this.view.btnWallet, this.onClickBtnWallet, this, false)

        Utility.instance.onButtonClick(this.view.btnAll, this.onClickBtnAll, this, false)
        Utility.instance.onButtonClick(this.view.btnHot, this.onClickBtnHot, this, false)
        Utility.instance.onButtonClick(this.view.btnRecent, this.onClickBtnRecent, this, false)

        this.view.recycle.InitializeChild = { target: this, eventHandler: this.refreshItem }
    }

    private registerEvent(reg: boolean = true) {
        let fun = reg ? "on" : "off"
        EventManager.instance[fun](CommonName.EVENT.Respon_Refresh_UserInfo, () => this.setUserInfo(true), this)
    }

    show(intentData: any,callback?: (m: any) => void) {
        callback && callback(this)
        this.setUserInfo(false)
        this.updateStatus(this.AllGame)
        if (intentData) {

        }
        this.selectVendorID = intentData ? intentData?.vendor_id_str: ""
        this._reqGetSlotsGameList(this.selectVendorID)        
    }

    /**
     * 刷新item
     * @param idx 
     * @param item 
     * @returns 
     */
    private refreshItem(idx: string, item: Node) {
        if (!this.gameListData) {
            return
        }
        const gameInfo = this.gameListData[parseInt(idx)]
        if (!gameInfo) {
            console.error("游戏数据错误",gameInfo)
            return
        }

        let gameItem = item.getComponent(GameItemNew)
        gameItem.setItem(gameInfo,()=>{
            //收藏
            // this.changeCollectGameData(gameItem)
        })
    }

    /**
     * 显示列表
     * @param list 
     */
    async showList(list: Array<number>) {
        if(!this.node?.isValid) return

        this.gameListData = list
        this.view.recycle.data = list
        this?.view.recycle?.scrollView.stopAutoScroll()
        await this.view.recycle.loadSlots(list.length)
        this?.view.recycle?.scrollView.scrollToTop(0)
    }

    /**
     * 打开钱包界面
     */
    private onClickBtnWallet() {
        AudioManager.instance.playButtonSound()
        ModuleManager.instance.showModule(CommonName.MODULE.Wallet)
    }

    /**
     * 点击All界面
     */
    private onClickBtnAll(){        
        if(this.currSortName == this.AllGame) return

        AudioManager.instance.playButtonSound()
        this.currSortName = this.AllGame
        this.updateStatus(this.AllGame)
        this._reqGetSlotsGameList(this.selectVendorID)
    }

    /**
     * 点击hot界面
     */
    private onClickBtnHot(){        
        if(this.currSortName == this.HotGame) return

        AudioManager.instance.playButtonSound()
        this.currSortName = this.HotGame
        this.updateStatus(this.HotGame)
        this._reqGetHotGameList()
    }

    /**
     * 点击Recent界面
     */
    private onClickBtnRecent(){        
        if(this.currSortName == this.RecentGame) return

        AudioManager.instance.playButtonSound()
        this.currSortName = this.RecentGame
        this.updateStatus(this.RecentGame)
        this._reqGetRecentGameList()
    }

    /**
     * 关闭按钮
     */
    private onClickBtnClose() {
        AudioManager.instance.playCloseWindowSound()
        ModuleManager.instance.showModule(CommonName.MODULE.Hall,null,()=>{
            ModuleManager.instance.destroyModule(CommonName.MODULE.GameListNew)
        })
    }

    /**
     * 更新状态
     * @param typeName
     */
    updateStatus(typeName:string){
        let pos_x = typeName == this.AllGame ? 68:0
        this.view.recycle.node.position = v3(pos_x,-96,0)

        this.view.spr_line.active = typeName == this.AllGame
        this.view.sortLayout.active = typeName == this.AllGame

        this.view.btnAll.getComponent(Sprite).enabled = typeName == this.AllGame
        this.view.btnHot.getComponent(Sprite).enabled = typeName == this.HotGame
        this.view.btnRecent.getComponent(Sprite).enabled = typeName == this.RecentGame

        this.view.lblAll.color = new Color().fromHEX(typeName == this.AllGame ? "#FFCF0F":"#CBDBE7")
        this.view.lblHot.color = new Color().fromHEX(typeName == this.HotGame ? "#FFCF0F":"#CBDBE7")   
        this.view.lblRecent.color = new Color().fromHEX(typeName == this.RecentGame ? "#FFCF0F":"#CBDBE7")
    }

    /**
     * 初始化厂商分类
     * @param data 
     */
    initBrandSort(data){
        if(!data) return
        if(!this.node?.isValid) return
        if(this.view.sortLayout.children.length != 0) return

        for(let i = 0;i<data.length;++i){
            let sortItem = instantiate(this.view.sortItem)
            sortItem.parent = this.view.sortLayout
            sortItem.active = true
            sortItem.name = ""+i

            let bg = sortItem.getComponent(Sprite)
            let spr_coin = find("spr_coin",sortItem).getComponent(Sprite)
            let lbl_title = find("lbl_title",sortItem).getComponent(Label)
            let vendor_id = data[i]?.vendor_id_str;
            let isSelectVendorID = (this.selectVendorID === vendor_id);

            lbl_title.string = data[i].vendor_name
            lbl_title.color = new Color().fromHEX(isSelectVendorID ? "#FFFFFF":"#81b8e5")
            bg.spriteFrame = isSelectVendorID ? this.view.sortFrame[1]:this.view.sortFrame[0]
            let path = isSelectVendorID ? data[i].icon_url_on:data[i].icon_url_off
            SpriteDataModel.SetSprite(spr_coin, path)
                            
            sortItem.on(Button.EventType.CLICK, ()=>{
                if((this.selectVendorID === vendor_id)) return

                AudioManager.instance.playButtonSound()
                this._reqGetSlotsGameList(vendor_id)
                for(let child of this.view.sortLayout.children){
                    let spritebg = child.getComponent(Sprite)
                    let sprbrand = find("spr_coin",child).getComponent(Sprite)
                    let lbltitle = find("lbl_title",child).getComponent(Label)

                    lbltitle.color = new Color().fromHEX(sortItem.name == child.name ? "#FFFFFF":"#81b8e5")
                    spritebg.spriteFrame = sortItem.name == child.name ? this.view.sortFrame[1]:this.view.sortFrame[0]
                    let path = sortItem.name == child.name ? data[child.name].icon_url_on:data[child.name].icon_url_off
                    SpriteDataModel.SetSprite(sprbrand, path)
                }
                this.selectVendorID = vendor_id
            }, this)
        }
    }

    /**
     * 设置用户数据
     * @param isRefresh 
     * @returns 
     */
    private setUserInfo(isRefresh: boolean = true) {
        if (!this.getValid()) {
            return
        }
        let user = UserDataModel.GetCurrentUser()
        if (!user) {
            return
        }
        let cash = Utility.instance.numThousandsFormat(UserDataModel.GetCashAmount().toString())
        this.view.goldNum.string = cash
    }  

    //  /**
    //  * 分类排序
    //  * @param name  节点name
    //  */
    //  private onGameSortChecked(name: string) {
    //     AudioManager.instance.playButtonSound()
    //     this.currSortName = name

    //     let list = this.sortListData[name] ? this.sortListData[name] : (name == this.AllName ? this.gameListData : [])
    //     this.showList(list);
    // }

    // /**
    //  * 改变 收藏和取消收藏时 gameData值 
    //  */
    // private changeCollectGameData(item:GameItemNew){
    //     let itemData = item.getItemData()
    //     for(let i=0;i<this.gameListData.length;i++){
    //         if(this.gameListData[i].game_uid !== itemData.game_uid) continue
            
    //         this.gameListData[i].is_like = itemData.is_like
    //         if(itemData.is_like){
    //             if(!this.sortListData[this.LikesName]){
    //                 this.sortListData[this.LikesName] = []
    //             }
    //             this.sortListData[this.LikesName].push(this.gameListData[i])
    //         }
    //         else{
    //             if(!this.sortListData[this.LikesName]) return
    //             for(let j=0;j<this.sortListData[this.LikesName].length;j++){
    //                 if(this.sortListData[this.LikesName][j].game_uid == itemData.game_uid){
    //                     this.sortListData[this.LikesName].splice(j, 1)
    //                     break
    //                 }
    //             }
    //         }
    //         break            
    //     }

    //     if(this.currSortName == this.LikesName){
    //         this.showList(this.sortListData[this.LikesName]);
    //     }
    // }

    /**
     * 请求厂商游戏列表
     * @param data 厂商名称
     */
    private _reqGetSlotsGameList(vendor_id:string) {
        if(vendor_id == "") return
        let params = {
            vendor_id_str: vendor_id
        }
        let info: PostData = {
            Target: this,
            Url: Http_Define.getSlotsGameList,
            Params: params,
            Callback: this._rspGetSlotsGameList.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * 厂商游戏列表返回
     * @param msg 
     */
    private _rspGetSlotsGameList(msg: any) {
        if (msg && msg.code == 0) {
            if(msg.data){           
                if(msg.data.vendor_list){
                    this.initBrandSort(msg.data.vendor_list)
                }
                if(msg.data.game_list){
                    this.showList(msg.data.game_list)
                }
            }
        }       
    }

    /**
     * 请求hot游戏列表
     */
    private _reqGetHotGameList() {  
        let info: PostData = {
            Target: this,
            Url: Http_Define.getHotSlotsGame,
            Params: {},
            Callback: this._rspGetHotGameList.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * hot游戏列表返回
     * @param msg 
     */
    private _rspGetHotGameList(msg: any) {
        if (msg && msg.code == 0) {
            if(msg.data?.game_list){
                this.showList(msg.data.game_list)
            }
        }       
    }

    /**
     * 请求recent游戏列表
     */
    private _reqGetRecentGameList() {  
        let info: PostData = {
            Target: this,
            Url: Http_Define.getRecentHistory,
            Params: {},
            Callback: this._rspGetRecentGameList.bind(this),
            ForceRequest: true,
            FailToast: true,
            FailCallback: true,
        }
        HttpDataModel.Post(info);
    }

    /**
     * recent游戏列表返回
     * @param msg 
     */
    private _rspGetRecentGameList(msg: any) {
        if (msg && msg.code == 0) {
            if(msg.data?.game_list){
                this.showList(msg.data.game_list)
            }            
        }       
    }
    
    onDestroy() {
        this.registerEvent(false)
        this.unscheduleAllCallbacks()
    }
}
