import { director, game, SpriteFrame, _decorator } from 'cc';
import EventManager from '../event_manager';
import LoaclStorage from '../local_storage';
import ResourceManager from '../resoure_manager';
import { LanguageLabel } from './LanguageLabel';
import { LanguageSprite } from './LanguageSprite';
import { LanguageData } from './language_data';
import { DEBUG } from 'cc/env';

export enum LanguageEvent {
    /** 语种变化事件 */
    CHANGE = 'LanguageEvent.CHANGE',
    /** 语种资源释放事件 */
    RELEASE_RES = "LanguageEvent.RELEASE_RES",
    STORAGE_KEY = "Language.STORAGE_KEY",
}

export default class LanguageManager {

    private static _instance: LanguageManager;
    public static get instance(): LanguageManager {
        if (this._instance == null) {
            this._instance = new LanguageManager()
        }
        return this._instance;
    }

    private _support: Array<string> = ["zh", "en", "pt"];// 支持的语言代码 pt 巴西葡萄牙语
    private _current: string = "en"//当前使用语言
    public get current(): string {
        return this._current
    }
    private set current(value: string) {
        this._current = value
    }
    private _languageDataMap: {} = {};//{bundleName,languageData}
    private _curBundleName = ""//上次语言包
    private _isChangeLanguage: boolean = false;
    /**
    * 获取支持的多语种数组
    */
    public get languages(): string[] {
        return this._support
    }
    public preLanguage(lan = "en", bundleName = "resources") {
        if (this._languageDataMap[bundleName] && this._languageDataMap[bundleName][lan])
            return;
        let languageData = new LanguageData(bundleName)
        return languageData.preLoad(lan).then(() => {
            if (!this._languageDataMap[bundleName])
                this._languageDataMap[bundleName] = {}
            this._languageDataMap[bundleName][lan] = languageData
            if(DEBUG){
                console.log("lang 【%s】 bundle 【%s】 加载成功---------------》", lan, bundleName)
            }
        })
    }

    public async setLang(lan = "en") {
        if (this.current == lan && this._isChangeLanguage)
            return;
        this._isChangeLanguage = true;
        for (let bundle in this._languageDataMap) {
            if (this._languageDataMap[bundle][lan]) {
                continue;
            }
            await this.preLanguage(lan, bundle)
        }
        this._isChangeLanguage = false;
        LoaclStorage.setString(LanguageEvent.STORAGE_KEY, lan)
        this.current = lan
        this.updateLanguage(lan);
        EventManager.instance.dispatch(LanguageEvent.CHANGE, this.current)
    }

    //加载和切换 语言包
    public async setLanguage(lan = "en", bundleName = "resources", callback?, dontDispatchEvent?) {
        if (this._isChangeLanguage)
            return false;
        if (!this._languageDataMap[bundleName] || !this._languageDataMap[bundleName][lan]) {
            this._isChangeLanguage = true;
            await this.preLanguage(lan, bundleName)
            this._isChangeLanguage = false;
        }
        LoaclStorage.setString(LanguageEvent.STORAGE_KEY, lan)
        this.current = lan;
        this.updateLanguage(lan);
        callback && callback()
        return true;
    }

    /**
    * 刷新语言文字
    * @param lang 
    */
    public updateLanguage(lang: string) {
        let rootNodes = director.getScene()!.children
        for (let i = 0; i < rootNodes.length; ++i) {
            let languagelabels = rootNodes[i].getComponentsInChildren(LanguageLabel)
            for (let j = 0; j < languagelabels.length; j++) {
                languagelabels[j].language = lang
            }
            let languagesprites = rootNodes[i].getComponentsInChildren(LanguageSprite)
            for (let j = 0; j < languagesprites.length; j++) {
                languagesprites[j].language = lang
            }
        }
    }

    public getLangByID(labId: string, bundleName = "resources"): string {
        return this._languageDataMap[bundleName][this.current]?.getLangByID(labId)
    }

    public getErrorMsgByID(errID: number, bundleName = "resources"): string {
        let str = ""
        if (errID != 0 && errID != 9999) {
            str = `(${errID})`
        }
        return this._languageDataMap[bundleName][this.current]?.getErrorMsgByID(errID) + str
    }

    public getSpriteFrameByPath(filePath, bundleName) {
        let lang = this._current
        let path = `language/texture/${lang}/${filePath}/spriteFrame`
        let res = ResourceManager.get<SpriteFrame>(path, SpriteFrame, bundleName)
        return res
    }

    /**
    * 释放不需要的语言包资源
    */
    public releaseAssets(bundleName = "resources", lang: string) {
        if (this._languageDataMap[bundleName]) {
            if (this._languageDataMap[bundleName][lang]) {
                this._languageDataMap[bundleName][lang].releaseAssets(lang)
                delete this._languageDataMap[bundleName][lang]
            }
        }
    }

    public releaseGameAssets(bundleName: string) {
        if (this._languageDataMap[bundleName]) {
            for (const lang of this._support) {
                if (this._languageDataMap[bundleName][lang]) {
                    this._languageDataMap[bundleName][lang].releaseAssets(lang)
                    delete this._languageDataMap[bundleName][lang]
                }
            }
        }
    }
}