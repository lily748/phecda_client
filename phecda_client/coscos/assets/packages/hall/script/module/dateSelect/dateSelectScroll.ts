
import { _decorator, Component, Label, Node, UITransform } from 'cc';
import List from '../../../../../script/utility/ui_extend/list/list';
const { ccclass, property } = _decorator;


@ccclass('DateSelectScroll')
export class DateSelectScroll extends Component {

    @property(List)
    list: List = null;

    public posY = 0;
    private _listData = null;
    private _defaultListData = null;
    moveIndex = 0;

    protected onLoad(): void {
        this.list.node.on("scroll-to-bottom", ()=>{
            this.moveIndex += this._defaultListData.length;
            this._listData = this._listData.concat(this._listData);
            this.list.numItems = this._listData.length;
        }, this);
        this.list.node.on("scroll-to-top", ()=>{
            this.list.scrollTo(this.moveIndex, 0);
        }, this);

       
    }

    public setNum(num) {
        let index = this._defaultListData.indexOf(num);
        if (index == -1) index = this._defaultListData.indexOf(1);
        index = (this.moveIndex + (index-1));
        this.list.scrollTo(index, 0);
    }

    set listData(data) {
        this._listData  = this._defaultListData = data;
        this.moveIndex = this._listData.length;
        this._listData = this._listData.concat(data).concat(data);
        this.list.numItems = this._listData.length;
        this.list.scrollTo(this.moveIndex, 0);

    }

    get listData() {
        return this._listData;
    }

    private itemRender(item, index) {
        item.active = true;
        item.getChildByName("label").getComponent(Label).string = this._listData[index];
    }


    public getChooseValue() {
        let minY,index = null;
        for (let i = 0; i < this.list.content.children.length; i++) {
            let child = this.list.content.children[i];
            let childPos = child.parent.getComponent(UITransform).convertToWorldSpaceAR(child.getPosition());
            let viewPos = this.list.node.getChildByName("view").getComponent(UITransform).convertToNodeSpaceAR(childPos);
            let disY = Math.abs(viewPos.y - this.posY);
            if (minY == null) {
                minY = disY;
                index = child["_listId"];
            } else if(disY < minY) {
                minY = disY;
                index = child["_listId"];
            }
        }
        return this._listData[index]; 
    }
}
