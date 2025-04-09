
const { ccclass, property } = _decorator;

import { Component, EditBox, Label, Node, UITransform, _decorator } from 'cc';
import List from './list';
import ListItem from './list_item';

@ccclass('ListDemo')
export default class ListDemo extends Component {
    //网格列表
    @property(List)
    listG: List = null;
    //无尽列表
    @property(List)
    listE: List = null;
    //页面
    @property(List)
    listPage: List = null;
    @property(EditBox)
    input1: EditBox = null;

    //输入框
    @property(EditBox)
    input: EditBox = null;
    //信息Labal
    @property(Label)
    info: Label = null;
    //数据数组（所有List共用）
    data: number[] = [];

    onLoad() {
        this.data = [];
        for (let n: number = 0; n < 999; n++) {
            this.data.push(n);
        }
        this.listG.numItems = this.data.length;
        this.listE.numItems = 3
        this.listPage.numItems = 20
    }

    //无尽列表渲染器
    onListEndnessRender(item: Node, idx: number) {
        item.getComponent(ListItem).title.getComponent(Label).string = "这是第" + this.data[idx] + "条数据";
        this.info.string = 'ListG当前渲染总数 = ' + this.listG.displayItemNum;
    }

    //网格列表渲染器
    onListGridRender(item: Node, idx: number) {
        item.getComponent(ListItem).title.getComponent(Label).string = "这是第" + this.data[idx] + "条数据";
        this.info.string = 'ListG当前渲染总数 = ' + this.listG.displayItemNum;
    }

    onPageRender(item: Node, idx: number) {
        item.getComponentInChildren(Label).string = '这是第' + this.data[idx] + '页';
    }

    onPageChange(pageNum: number) {
        console.log('当前是第' + pageNum + '页');
    }
    //按钮事件
    pageBtnEvent(ev) {
        let name: string = ev.target.name;
        switch (name) {
            case 'btn1':
                this.listPage.prePage(.5);
                break;
            case 'btn2':
                this.listPage.nextPage(.5);
                break;
            case 'btn3':
                this.listPage.skipPage(parseInt(this.input1.string), 0.5);
                break;
        }
    }

    //当列表项被选择...
    onListSelected(item: any, selectedId: number, lastSelectedId: number, val: number) {
        if (!item)
            return;
        let list: List = item.getComponent(ListItem).list;
        let str: string = '当前操作List为：' + list.node.name + '，当前选择的是：' + selectedId + '，上一次选择的是：' + lastSelectedId;
        if (list.selectedMode == 2) { //如果是多选模式
            str += '，当前值为：' + val;
        }
    }
    //按钮事件
    btnEvent(ev) {
        let name: string = ev.target.name;
        let self = this
        let callFunc: Function = function (idx) {
            if (idx != null) {
                self.data.splice(idx, 1);
                console.log('------删除完毕！', idx);
                self.listG.numItems = self.data.length;
            }
        }
        switch (name) {
            case 'DelButton':
                this.listG.aniDelItem(0, callFunc, 0);
                break;
            case 'GoButton':
                this.listG.scrollTo(parseInt(this.input.string), 0.5, null, false);
                break;
        }
    }

}