
import { JsonAsset, SpriteFrame, _decorator } from 'cc';
import ResourceManager from '../resoure_manager';
import { DEBUG } from 'cc/env';
const { ccclass, property } = _decorator;


@ccclass('LanguageData')
export class LanguageData {

    private _langJsonPath = "language/json"//多语言json资源目录
    private _langTexturePath = "language/texture"//多语言图片资源目录
    private _bundleName = "resources"
    private _dataMap = {}
    private _errorCodeMap = {}
    private _lang: string;
    lang() {
        return this._lang;
    }

    constructor(bundleName?, jsonPath?) {
        if (bundleName) {
            this._bundleName = bundleName
        }
        if (jsonPath) {
            this._langJsonPath = jsonPath
        }
    }

    public preLoad(lang: string) {
        return Promise.all([this.loadLangJson(lang), this.loadLangTextrue(lang)]).then(() => {
            if(DEBUG){
                console.log("语言包加载结束-----------》" + lang)
            }
        }, (reason: any) => {
            console.log("语言加载失败", reason)
        })
    }

    private loadLangJson(lang: string) {
        let lang_json_path = `${this._langJsonPath}/${lang}`
        return ResourceManager.loadBundle(this._bundleName, lang_json_path, JsonAsset, null, (err, data: JsonAsset) => {
            this._dataMap = data.json
        })
    }

    private loadLangTextrue(lang: string) {
        let lan_texture_path = `${this._langTexturePath}/${lang}`
        // return ResourceManager.loadDir(this._bundleName, lan_texture_path, SpriteFrame, null, null)
    }

    /**
    *下载语言包Json配置
    * @param callback
    */
    public loadAssets(lang: string, callback?: Function) {
        let bundleName = this._bundleName
        let lang_json_path = `${this._langJsonPath}/${lang}`
        let lan_texture_path = `${this._langTexturePath}/${lang}`
        let error_code_path = `${this._langJsonPath}/errorcode_${lang}`
        let self = this
        ResourceManager.loadDir(bundleName, lan_texture_path, SpriteFrame, null, (err) => {
            if (err) {
                if (callback) {
                    callback(err)
                }
                console.error(err)
                return
            }
            ResourceManager.loadBundle(bundleName, lang_json_path, JsonAsset, null, (err: Error, json: JsonAsset) => {
                if (err) {
                    console.error(err);
                    if (callback) {
                        callback(err);
                    }
                    return;
                }
                console.log(bundleName, "：下载语言Json资源");
                self._dataMap = json.json
                ResourceManager.loadBundle(bundleName, error_code_path, JsonAsset, null, (err: Error, json: JsonAsset) => {
                    if (!err) {
                        self._errorCodeMap = json.json
                        console.log(bundleName, "：下载语言错误码Json资源");
                        callback && callback()
                        return;
                    }
                    console.error(err);
                    callback && callback()
                })
            })
        })
    }

    /**
    * 释放不需要的语言包资源
    */
    public releaseAssets(lang: string) {
        let langpath = `${this._langTexturePath}/${lang}`;
        ResourceManager.releaseDir(langpath, this._bundleName)
        console.log(langpath, "释放语言图片资源");
        let langjsonpath = `${this._langJsonPath}/${lang}`;
        let jsonAsset = ResourceManager.get(langjsonpath, JsonAsset, this._bundleName)
        if (jsonAsset) {
            ResourceManager.releaseAsset(jsonAsset);
            console.log(this._bundleName, "：释放语言Json资源");
        }
        let errcodeAsset = ResourceManager.get(`${this._langJsonPath}/errorcode_${lang}`, JsonAsset, this._bundleName)
        if (errcodeAsset) {
            ResourceManager.releaseAsset(errcodeAsset)
        }
    }

    public getLangByID(labId: string): string {
        return this._dataMap[labId] || labId;
    }

    public getErrorMsgByID(errID: number): string {
        if (this._dataMap["errorCode"]) {
            return this._dataMap["errorCode"][errID.toString()] || this._dataMap["errorCode"]["10000"]
        }
        return "Error: " + errID
    }
}
