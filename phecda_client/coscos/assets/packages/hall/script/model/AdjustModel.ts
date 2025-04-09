
import { _decorator } from 'cc';
import { GameSDKInterface } from '../../../../script/game/GameSDKInterface';
const { ccclass, property } = _decorator;

@ccclass('AdjustModel')
export class AdjustModel {
    private static _instance: AdjustModel;
    public static get Instance(): AdjustModel {
        if (this._instance == null) this._instance = new AdjustModel();
        return this._instance;
    }

    private _cfg = {
        // "click_Recharge": "rlw0p5",
        // "click_customer": "2e88el",
        // "click_mail": "3ias5y",
        // "click_wallet": "c1aijj",
        // "click_vip": "d4auo7",
        // "click_extension": "1dh9a5",
        // "click_share": "xr46f7",
        // "click_game": "i41an0",
        // "click_tab": "z1ai03",
        "app_open": "q57oc0",
        "login": "83265i",
        "register": "tf6jp8",
        // "Withraw_success": "9z0snk",
        // "Withraw_amount": "5gs6ub",
        // "payment_amount": "loyt2p",
        // "payment_success": "a5ysex",
    }
    private events: {} = {}
    public get Cfg() { return this._cfg }

    public set Cfg(val) {
        this._cfg = val;
    }

    public TrackEvent(key: string, once: boolean = true) {
        if (this._cfg[key]) {
            if (once && this.events[key])
                return;
            this.events[key] = true;
            console.log("推送AD事件------------->" + key + "  " + this._cfg[key])
            GameSDKInterface.TrackEvent(this._cfg[key])
        }
    }

    public TrackEventCurrency(Score: Number) {
        if (!this._cfg["payment_amount"])
            return;
        let data = { "EventName": this._cfg["payment_amount"], "Score": Score, "Currency": "BRL" }
        GameSDKInterface.CurrencyTrackEvent(JSON.stringify(data))
    }

    public GetAdID() {
        return GameSDKInterface.GetAdID() || "";
    }

    public GetGoogleAdId() {
        return GameSDKInterface.GetGoogleAdId() || "";
    }
}
