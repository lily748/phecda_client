import { ToggleGroup } from "./../../../../../script/utility/ui_extend/toggleGroup";
import { EditBox, Toggle, UITransform, _decorator, } from "cc";
import ModuleManager from "../../../../../script/framework/core/module_manager";
import Module, { ViewLayer, } from "../../../../../script/framework/core/mvvm/module_base";
import AudioManager from "../../../../../script/manager/audio_manager";
import Utility from "../../../../../script/utility/utility";
import CommonName from "../../model/CommonName";
import { UserDataModel } from "../../model/UserDataModel";
import { WithdrawAPI } from "../withdraw/withdrawApi";
import { BankBindView, ItemName } from "./bankbind_view";
const { ccclass, property } = _decorator;

@ccclass("BankBind")
export class BankBind extends Module<BankBindView, null> {
  private selectCer: string = "";
  constructor() {
    super();
    this.bundleName = "resources";
    this.windowPrefabResPath = "prefabs/public_bankbind";
    this.viewType = BankBindView;
    this.modelType = null;
    this.layer = ViewLayer.Mid;
    this.needViewMask = true;
    this.needAnim = true;
  }

  private pixEdditBox: EditBox = null;
  onInit() {
    this.onCheckTog(this.view.defaultSelectTog);
    Utility.instance.onButtonClick(this.view.closeBtn, this.onCloseBtnClick, this, false);
    Utility.instance.onButtonClick(this.view.confirmBtn, this.onConfirmBtnClick, this);
    this.view.cerToggleGroup.getComponent(ToggleGroup).setListener(this.onCheckTog.bind(this));
    this.pixEdditBox = this.view.starParis[ItemName.PIX].checkEditBox
    this.pixEdditBox.node.on(EditBox.EventType.TEXT_CHANGED, this.onInputPix.bind(this));

    this.view.starParis[ItemName.Nome].checkEditBox.node.on(EditBox.EventType.TEXT_CHANGED, this.onInputOthers.bind(this));
    this.view.starParis[ItemName.Email].checkEditBox.node.on(EditBox.EventType.TEXT_CHANGED, this.onInputOthers.bind(this));
    this.view.starParis[ItemName.Phone].checkEditBox.node.on(EditBox.EventType.TEXT_CHANGED, this.onInputOthers.bind(this));
    this.view.starParis[ItemName.CPF].checkEditBox.node.on(EditBox.EventType.TEXT_CHANGED, this.onInputOthers.bind(this));
  }

  onShow() {
    if (this.intentData) {

      this.view.cerToggleGroup.node.children.forEach((child, key, arr) => {
        if (child.name.indexOf(this.intentData.AccountType) >= 0) {
          child.getComponent(Toggle).isChecked = true;
          this.onCheckTog(child.getComponent(Toggle));
        } else {
          child.getComponent(Toggle).isChecked = false;
        }
      });
      this.view.nameEditBox.string = this.intentData.Name;
      this.view.emailEditBox.string = this.intentData.Email;
      this.view.bankPhoneEditBox.string = this.intentData.Phone.replace(/\+91-/gi, "");
      this.view.pixEditBox.string = (<string>this.intentData.AccountSn).replace(/\+91-/gi, "");
      this.view.taxEditBox.string = this.intentData.DocSn;
      this.onInputPix(this.view.starParis[ItemName.PIX].checkEditBox)
    }
    AudioManager.instance.playOpenWindowSound();
  }

  private onInputPix(box: EditBox): void {
    console.log("onInputPix")
    if (this.selectCer == 'Email') {
      this.view.tips[ItemName.PIX].redBg.active = box.string.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/gi) == null
    } else
      this.view.tips[ItemName.PIX].redBg.active = box.string.length != box.maxLength
  }

  private onInputOthers(box: EditBox): boolean {
    let stringLen = box.string.length;
    let flg = box.node.name.substring(7)
    switch (flg) {
      case "Nome":
        this.view.tips[ItemName.Nome].redBg.active = stringLen == 0
        break;
      case "Email":
        let isBad = box.string.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/gi) == null
        this.view.tips[ItemName.Email].redBg.active = isBad
        break;
      case "Phone":
        this.view.tips[ItemName.Phone].redBg.active = stringLen != 11
        break;
      case "CPF":
        this.view.tips[ItemName.CPF].redBg.active = stringLen != 11
        break
      case "PIX":
        this.onInputPix(box)
        break;
    }
    return this.view.tips[ItemName[flg]].redBg.active
  }

  private onCheckTog(sender: Toggle) {
    this.selectCer = sender.node.name.split("_")[1];
    this.reInitEditBoxPIX(this.selectCer)
  }

  private reInitEditBoxPIX(name: string) {
    let box: EditBox = this.view.starParis[ItemName.PIX].checkEditBox
    let regBg = this.view.tips[ItemName.PIX].redBg
    let tip = ""
    let stringLen = box.string.length
    switch (name) {
      case "CPF":
        box.maxLength = 11
        box.inputMode = EditBox.InputMode.NUMERIC
        tip = "Insira 11 dígitos,exemplio:8796***5656"
        regBg.active = stringLen != 11
        break;
      case "Email":
        tip = "Exemplio:blazegame@gmail.com"
        box.inputMode = EditBox.InputMode.EMAIL_ADDR
        box.maxLength = 32
        regBg.active = box.string.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/gi) == null
        break;
      case "Phone":
        box.maxLength = 11
        box.inputMode = EditBox.InputMode.PHONE_NUMBER
        tip = "Insira 11 dígitos,exemplio:8746***5689"
        regBg.active = stringLen != 11

        break;
      case "EVP":
        box.maxLength = 14
        box.inputMode = EditBox.InputMode.NUMERIC
        tip = "Insira 14 dígitos,exemplio:6534******5689"
        regBg.active = stringLen != 14
        break;
    }
    let pos = box.node.position
    this.view.node55.active = name == "Phone"
    box.node.getComponent(UITransform).width = name == "Phone" ? 440 : 514
    box.node.setPosition(name == "Phone" ? -600 : -672, pos.y, pos.z)

    this.view.tips[ItemName.PIX].label.string = tip
  }

  private getWholePhoneNum(phone: string): string {
    return phone ? `+91-${phone}` : "";
  }

  private getAccountSn(accountSn: string): string {
    return (this.selectCer == "Phone" ? `+91-${accountSn}` : accountSn).trim();
  }

  private onCloseBtnClick() {
    AudioManager.instance.playCloseWindowSound();
    ModuleManager.instance.destroyModule(CommonName.MODULE.BankBind);
  }

  private onConfirmBtnClick() {
    for (let paris of this.view.starParis) {
      if (paris.star.active) {
        if (this.onInputOthers(paris.checkEditBox)) {
          let tip = `[${ItemName[paris.name]}] esta avzio`;
          ModuleManager.instance.toastLong(tip);
          return;
        }
      }
    }

    let phone = this.getWholePhoneNum(this.view.bankPhoneEditBox.string);
    let params: Object = {
      uid: UserDataModel.GetCurrentUserID().toString().trim(),
      name: this.view.nameEditBox.string.trim(),
      account_sn: this.getAccountSn(this.view.pixEditBox.string) || null,
      account_type: this.selectCer,
      doc_type: "PIX",
      doc_sn: this.view.taxEditBox.string.trim() || null,
      phone: phone || null,
      email: this.view.emailEditBox.string.trim() || null,
    };

    Object.keys(params).forEach((key) => {
      let value = params[key];
      if ("" == value || null == value) delete params[key];
    });

    let cb = (data: any) => {
      if (data) {
        this.onCloseBtnClick();
        ModuleManager.instance.showModule(CommonName.MODULE.Withdraw);
      }
    };
    WithdrawAPI.requestBindBankCard(this, params, cb.bind(this));
    // }
  }

  onDestroy() {
    this.unscheduleAllCallbacks();
  }
}