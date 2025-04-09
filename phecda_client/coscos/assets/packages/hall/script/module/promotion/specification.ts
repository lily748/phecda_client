
import { _decorator, Component, Label } from 'cc';
import LanguageManager from '../../../../../script/manager/language/language_manager';
const { ccclass, property } = _decorator;

@ccclass('Specification')
export class Specification extends Component {

    @property(Label)
    label1: Label
    @property(Label)
    label2: Label
    @property(Label)
    label3: Label

    show(data?: any) {
        this.node.active = true
        this.setLabels(data)
    }

    hide() {
        this.node.active = false
    }

    private setLabels(data?: any) {
        if (!data) {
            return
        }

        let temp = {}
        for (const json of data) {
            temp[json.Key] = json.Content
        }

        const recharge = LanguageManager.instance.getLangByID("promotion_label_recharge")
        const register = LanguageManager.instance.getLangByID("promotion_label_register")
        const persons = LanguageManager.instance.getLangByID("promotion_label_persons")
        // const totalBonus = LanguageManager.instance.getLangByID("promotion_label_total_bonus")
        const currency = LanguageManager.instance.getLangByID("promotion_label_currency")
        const inviteBonus = LanguageManager.instance.getLangByID("promotion_label_invite_bonus")
        const rechargeBonus = LanguageManager.instance.getLangByID("promotion_label_recharge_bonus")
        let str1 = ""
        let str2 = ""
        let str3 = ""
        if (temp["rechargeProportionStatus"] == 1) {
            str1 = recharge + "A*" + temp["rechargeProportionGold"] + "%"
        }
        if (temp["inviteUserStatus"] == 1) {
            str1 = str1 == "" ? "" : str1 + "+"
            str1 += `${register} ${temp["inviteUserGold"]} ${currency}`
        }
        if (temp["subordinateRechargeProportionStatus"] == 1) {
            str2 = recharge + "B*" + temp["subordinateRechargeProportionGold"] + "%"
        }
        if (temp["subordinateInviteUserStatus"] == 1) {
            str2 = str2 == "" ? "" : str2 + "+"
            str2 += `${register} ${temp["subordinateInviteUserGold"]} ${currency}`
        }
        if (str1 != "") {
            // let s1 = `${inviteBonus} = ${persons}A * ${temp["inviteUserGold"]}`
            let s2 = `${rechargeBonus} = ${recharge}A * ${temp["rechargeProportionGold"]}%`
            if (str2 != "") {
                // s1 += ` + ${persons}B * ${temp["subordinateInviteUserGold"]}`
                s2 += ` + ${recharge}B * ${temp["subordinateRechargeProportionGold"]}%`
            }
            // str3 = `${s1}\n${s2}`
            str3 = `${s2}`
        }
        this.label1.string = str1
        this.label2.string = str2
        this.label3.string = str3
    }
}