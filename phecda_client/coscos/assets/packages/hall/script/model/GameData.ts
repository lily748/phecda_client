
import { _decorator, Component, Node } from 'cc';
import { GameSDKInterface } from '../../../../script/game/GameSDKInterface';
const { ccclass, property } = _decorator;

@ccclass('GameData')
export class GameData {

    public static getSelfAttrId() {
        let commentInfo = GameSDKInterface.getCommentInfo();
        let selfAttrId = (commentInfo["selfAttrId"]!=null&&commentInfo["selfAttrId"]!="")?Number(commentInfo["selfAttrId"]):0;
        return selfAttrId;
    }

    public static setAgentMode(v) {
        this["__agentMode"] = v;
    }

    public static getAgentMode() {
        return this["__agentMode"] || 0;
    }

    public static setRuleUrls(urls:string[]) {
        this["__ruleUrls"] = urls;
    }

    public static getRuleUrls() {
        return this["__ruleUrls"];
    }
    
   
}
