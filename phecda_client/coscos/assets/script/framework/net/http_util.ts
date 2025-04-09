import { _decorator, sys } from 'cc';
import MemoryStorage from "../../manager/memory_storage";
import MD5 from "../../libs/md5";
import { GameConfig } from '../../com/game_config';
import { UserDataModel } from '../../../packages/hall/script/model/UserDataModel';
import { DEBUG } from 'cc/env';

export interface IUrlRequestData {
    baseUrl: string
    showNetprompt?: boolean
    params?: object
    sign?: string,//签名使用，可不传
    connect?: string,//签名使用，可不传
    requestCount?: number  //请求次数，一般是用来统计在http请求失败
    maxRequestCount?: number //最大请求次数，超时后自动重试次数
    useCache?: boolean      //是否使用cache数据
    remoteCallback?: Function
}

export interface IUrlRequestPostData {
    url?: string
    data?: string
    requestCount?: number
    maxRequestCount?: number
}

export default class HttpUtil {


    static http_get(requestData: IUrlRequestData, responeSuccessCallback: any, responeErrorCallback: any) {
        let useCache = requestData.useCache
        let remoteCallback = requestData.remoteCallback
        let requestUrl = GameConfig.ResServerAddr + requestData.baseUrl + "?"
        if (requestData.params) {
            requestUrl += this.formatParamsForHttp(requestData.params)
        }
        let tmpKey = requestUrl
        if (DEBUG || sys.isNative) {
            console.log("http get:", requestUrl)
        }
        if (GameConfig.apiLogMode) {
            // console.log("开始请求httpAPI：", requestUrl)
        }
        if (useCache) {
            let response = MemoryStorage.getJson(tmpKey)
            if (response) {
                if (GameConfig.apiLogMode) {
                    console.log("使用缓存数据\n", response);
                }
                responeSuccessCallback(response)
                responeSuccessCallback = null
            }
        }

        var xhr = new XMLHttpRequest();
        xhr.open("GET", requestUrl, true);

        let user = UserDataModel.GetLocalUserInfo();
        let token = user ? user.token : "";
        xhr.setRequestHeader("Authorization", token);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 && xhr.responseText && xhr.responseText != "") {
                    if (GameConfig.apiLogMode) {
                        // console.log("收到httpAPI回复\n", xhr.responseText);
                    }
                    if (useCache) {
                        MemoryStorage.setJson(tmpKey, xhr.responseText)
                    }
                    if (DEBUG || sys.isNative) {
                        console.log("请求返回:", JSON.parse(xhr.responseText))
                    }
                    responeSuccessCallback && responeSuccessCallback(JSON.parse(xhr.responseText))
                    remoteCallback && remoteCallback(null, xhr.responseText)
                } else {
                    console.log("xhr.status", xhr.status)
                    if (xhr.responseText && xhr.responseText != "") {
                        console.log("xhr.responseText", xhr.responseText)
                        if (xhr.status == 404) {
                            responeErrorCallback(xhr.status)
                        } else {
                            responeErrorCallback(JSON.parse(xhr.responseText))
                        }
                    } else {
                        console.log("!xhr.responseText")
                        responeErrorCallback(xhr.status)
                    }
                    remoteCallback && remoteCallback(xhr.status, null)
                    // console.warn("http request error:", JSON.parse( xhr.responseText))
                }
            }else
            {
                console.log("xhr.readyState != 4", xhr.readyState)
            }
        };
        xhr.timeout = 5000
        xhr.ontimeout = function (e) {
            xhr.abort()
            if (requestData.maxRequestCount) {
                if (!requestData.requestCount) {
                    requestData.requestCount = 0
                }
                requestData.requestCount = requestData.requestCount + 1
                if (requestData.maxRequestCount >= requestData.requestCount) {
                    setTimeout(() => {
                        console.error("http request timeout retry")
                        HttpUtil.http_get(requestData, responeSuccessCallback, responeErrorCallback)
                    }, 200);
                    return
                }
            }
            responeErrorCallback(null)
            console.log("http request timeout:", e)
        }
        xhr.onerror = ()=>{
            responeErrorCallback && responeErrorCallback(null)
        }
        xhr.send();
    }

    static http_post(requestData: IUrlRequestPostData, success: Function, fail: Function) {
        let url = requestData.url
        let data = requestData.data
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        let user = UserDataModel.GetLocalUserInfo();
        let token = user ? user.token : "";
        xhr.setRequestHeader("Authorization", token);
        xhr.timeout = 5000
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (xhr.responseText && xhr.responseText != "") {
                        var response = JSON.parse(xhr.responseText);
                        if (DEBUG || sys.isNative) {
                            console.log("请求返回：",url, response)
                        }
                        
                        if (!response) {
                            if (requestData.requestCount < requestData.maxRequestCount) {
                                HttpUtil.http_post(requestData, success, fail)
                            } else {
                                fail()
                                console.log("http request error:", xhr.status)
                            }
                            console.error("http返回数据格式错误：", xhr.responseURL, xhr.responseText)
                            return
                        }
                        success(response)
                    } else {
                        if (requestData.requestCount < requestData.maxRequestCount) {
                            HttpUtil.http_post(requestData, success, fail)
                        } else {
                            fail()
                            console.log("http request error:", xhr.status)
                        }
                    }
                } else {
                    if (requestData.requestCount < requestData.maxRequestCount) {
                        HttpUtil.http_post(requestData, success, fail)
                    } else {
                        fail()
                        console.log("http request error:", xhr.status)
                    }
                }
            }
        };
        ++requestData.requestCount
        xhr.send(data);
    }

    static getSign(params, sign?, connect?) {
        let keys = []
        for (let k in params) {
            keys.push(k)
        }
        keys.sort((a: string, b: string) => {
            return a.localeCompare(b)
        })
        let addKey = ""
        for (let i = 0; i < keys.length; i++) {
            let v = keys[i]
            addKey = addKey + (v + "=" + params[v] + "&")
        }
        let keyStr = addKey + (connect ? connect : "key=") + (sign ? sign : GameConfig.CommonSign)
        let md5 = new MD5()
        let hash = md5.hex_md5(keyStr)
        return [hash, addKey]
    }

    static formatParamsForHttp(keyParis): string {
        let url: string = ""
        var first = true
        for (let key in keyParis) {
            if (first) {
                first = false
                url = key + `=` + encodeURI(keyParis[key])
            }
            else
                url = url + `&` + key + `=` + encodeURI(keyParis[key])
        }
        return url
    }

    static encodeURL(s: string): string {
        return encodeURIComponent(s)
    }

    //获取字符串的字节长度
    static stringBytesLength(str: string) {
        let length: number = 0
        for (let i = 0; i < str.length; i++) {
            let iCode = str.charCodeAt(i);
            if ((iCode >= 0 && iCode <= 255) || (iCode >= 0xff61 && iCode <= 0xff9f)) {
                length += 1;
            } else {
                length += 2;
            }
        }
        return length
    }

    //字符串转utf8字节
    static str2UTF8Byte(str) {
        var bytes = new Array();
        var len, c;
        len = str.length;
        for (var i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 0x010000 && c <= 0x10FFFF) {
                bytes.push(((c >> 18) & 0x07) | 0xF0);
                bytes.push(((c >> 12) & 0x3F) | 0x80);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            } else if (c >= 0x000800 && c <= 0x00FFFF) {
                bytes.push(((c >> 12) & 0x0F) | 0xE0);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            } else if (c >= 0x000080 && c <= 0x0007FF) {
                bytes.push(((c >> 6) & 0x1F) | 0xC0);
                bytes.push((c & 0x3F) | 0x80);
            } else {
                bytes.push(c & 0xFF);
            }
        }
        return bytes;
    }
}