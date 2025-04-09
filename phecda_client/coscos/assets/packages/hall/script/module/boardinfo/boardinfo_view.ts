
import { _decorator, Component, Node, Label } from 'cc';
import ViewBase from '../../../../../script/framework/core/mvvm/view_base';
const { ccclass, property } = _decorator;



@ccclass('BoardInfoView')
export class BoardInfoView extends ViewBase {

    @property(Node)
    boardInfoCloseBtn: Node;
    @property(Label)
    boardInfoTitleLabel: Label;
    @property(Label)
    boardInfoContenLabel: Label;


    public showInfo(d) {
        this.boardInfoContenLabel.string = d.content
        this.boardInfoTitleLabel.string = d.title
    }

}


