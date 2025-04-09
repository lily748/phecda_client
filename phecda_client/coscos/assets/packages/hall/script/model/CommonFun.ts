
import { _decorator, Component, Node } from 'cc';
import CommonName from './CommonName';
import { GameData } from './GameData';
const { ccclass, property } = _decorator;

@ccclass('CommonFun')
export class CommonFun {

    // 比较版本 0:同版本   1:v1大于v2    -1:v1小于v2
    public static compareVersions(v1, v2) {
        const parts1 = v1.split('.').map(Number);
        const parts2 = v2.split('.').map(Number);
        const length = Math.max(parts1.length, parts2.length);
    
        for (let i = 0; i < length; i++) {
            const num1 = parts1[i] || 0;
            const num2 = parts2[i] || 0;
            if (num1 > num2) return 1;
            if (num1 < num2) return -1;
        }
        return 0;
    }

    public static GetEarnMoneyName() {
        let isNew = (Number(GameData.getAgentMode())==1);
        console.log("是否是新代理：", isNew);
        if (isNew) return CommonName.MODULE.EarnMoneyNew;
        return  CommonName.MODULE.EarnMoney;
    }
  
}
