
import { _decorator, Component, Node } from 'cc';
import Module, { ViewLayer } from '../../../../../script/framework/core/mvvm/module_base';
import { DateSelectView } from './dateSelect_view';
import Utility from '../../../../../script/utility/utility';
import ModuleManager from '../../../../../script/framework/core/module_manager';
import CommonName from '../../model/CommonName';
const { ccclass, property } = _decorator;

 @ccclass('DateSelect')
export class DateSelect extends Module<DateSelectView, null> {

    scrolls = [];
    listDatas = [];
    data = null;

    userDefault = false;


    constructor() {
        super();
        this.bundleName = "resources"
        this.windowPrefabResPath = "prefabs/dateSelect/public_dateSelect";
        this.viewType = DateSelectView;
        this.modelType = null;
        this.layer = ViewLayer.Low;
        this.needAnim = true;
        this.needViewMask = true;
        this.autoShowAnim = true;
    }

    _isLeapYear = false;
  
    onInit() {
        Utility.instance.onButtonClick(this.view.confirm, this.onConfirmClick, this);
        Utility.instance.onButtonClick(this.view.cancel, this.onCancelClick, this);
        this.listenMonthDay();
        this.scrolls = [this.view.scroll_1, this.view.scroll_2, this.view.scroll_3];
    }

    onShow(data?: any) {
       this.data = data;
       this.view.scroll_3.node.active = ((this.data.scrollNum != 2))
      
       this.setDefaultListData();
       this.setItemData(data);
    }

    private listenMonthDay() {
        
        this.view.scroll_1.node.on("scroll-ended", ()=>{
            this.updateDays();
        } , this);
        this.view.scroll_2.node.on("scroll-ended", ()=>{
            this.updateDays();
        } , this);
    }

    private updateDays() {
        if (!this.data || (this.data && this.data.scrollNum == 2)) return;
        let year = this.view.scroll_1.getChooseValue();
        let month = this.view.scroll_2.getChooseValue();
        let day = this.view.scroll_3.getChooseValue();

        let isLeapYear = this.isLeapYear(year);
        
        let dayNums = 0;
        let days = [];
        const daysInMonth = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 2) {
            dayNums = isLeapYear ? 29 : 28;
        } else {
            dayNums = daysInMonth[month];
        }
        for (let i = 1; i <= dayNums; i++ ) {
            days[i-1] = i;
        }

        this.view.scroll_3.listData = days;
        this.view.scroll_3.setNum(day);
    //    return days;
    }
  
    private isLeapYear(year) {
        // 如果年份能被4整除且不能被100整除，或者能被400整除，则是闰年
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    private setDefaultListData() {
        if (this.data.list == null) {
            this.userDefault = true;
            let fullYear = new Date().getFullYear();
            let years = [], months = [], days = [];
            for (let i = 0; i < 3; i++) {
               years[i] = fullYear;
               fullYear -= 1;
            }
            years = years.concat(years);
            for (let i = 1; i <= 12; i++ ) {
               months[i-1] = i;
            }
            for (let i = 1; i <= 31; i++ ) {
               days[i-1] = i;
            }
            this.data.list = [years, months, days];
          }
    }

    public setItemData(data) {
        this.listDatas = data.list;
        let scrollNums = [];
        if (data.time!=null) scrollNums = data.time.split("-");
        let posY = this.view.itemposY.getPosition().y;
        for (let i = 0; i < this.scrolls.length; i++) {
            this.scrolls[i].posY = posY;
            this.scrolls[i].listData = this.listDatas[i];
            if (scrollNums[i]!=null) this.scrolls[i].setNum(Number(scrollNums[i]));
        }
    }

    public onCancelClick() {
        ModuleManager.instance.destroyModule(CommonName.MODULE.DateSelect);
    }

    public onConfirmClick() {
        let values = [];
        let length = (this.data.scrollNum == 2) ? this.scrolls.length-1 : this.scrolls.length;
        for (let i = 0; i < length; i++) {
            values[i] = this.scrolls[i].getChooseValue();
        }
        this.data.target && this.data.callBack.call(this.data.target, this.checkIsAddZero(values));
    }

    private checkIsAddZero(list) {
        if (!this.userDefault) return list;
        for (let i = 0; i < list.length; i++) {
            if (list[i] < 10) {
                list[i] = "0"+list[i];
            } else {
                list[i] = list[i];
            }
        }
        return list;
    }
    

    





}

