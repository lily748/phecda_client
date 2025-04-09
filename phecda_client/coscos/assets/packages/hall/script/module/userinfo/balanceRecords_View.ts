
import { _decorator, Label, Node, SpriteFrame,EditBox } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
import { PageTurn } from '../../../../../script/utility/ui_extend/pageTurn';
const { ccclass, property } = _decorator;
 
@ccclass('RalanceRecords_View')
export class RalanceRecords_View extends ViewBase {
    @property(Node)
    btnClose: Node = null;
    @property(Node)
    recordValue: Node = null
    @property(PageTurn)
    pageTurn: PageTurn = null
    @property(Node)
    content: Node = null
    @property([SpriteFrame])
    frame:SpriteFrame[] = []

    @property(Node)
    btnSelectType: Node = null
    @property(Label)
    lbl_type: Label = null

    @property(EditBox)
    edit_orderId:EditBox = null
    @property(Node)
    btnSelectOrder: Node = null

    @property(Label)
    lbl_time: Label = null
    @property(Label)
    lbl_incom: Label = null
    @property(Label)
    lbl_expence: Label = null

    @property(Node)
    btnChooseType: Node = null
    @property(Node)
    chooseTypeBg: Node = null    
    @property(Node)
    btnCloseChooseType: Node = null
    @property(Node)
    chooseTypeContent: Node = null  
    @property(Node)
    chooseTypeItem: Node = null
    @property([SpriteFrame])
    chooseFrame:SpriteFrame[] = []

    @property(Node)
    lbl_nodata: Node = null

    @property(Node)
    selectTime: Node = null
    @property(Node)
    timeLayout: Node = null    

    @property(Node)
    balanceContent:Node = null;

    @property(Node)
    selectContent: Node = null;
}


