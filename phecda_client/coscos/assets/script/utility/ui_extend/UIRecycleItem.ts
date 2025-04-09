import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('UIRecycleItem')
export class UIRecycleItem extends Component {
    public identifier!:string;
    public filled:boolean = false;
    public isDestroy:boolean = false;
    public child?:Node;
}
