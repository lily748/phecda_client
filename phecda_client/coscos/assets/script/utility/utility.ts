import { _decorator, Node, Sprite, SpriteFrame, Label, Prefab, sys, UITransform, instantiate, Vec3, Material, Toggle, v3, Vec2, v2, tween, Tween, easing } from 'cc';
import CommonName from '../../packages/hall/script/model/CommonName';
import ModuleManager from '../framework/core/module_manager';
import { GameSDKInterface } from '../game/GameSDKInterface';
import MD5 from '../libs/md5';
import AudioManager from "../manager/audio_manager"
import ResourceManager from '../manager/resoure_manager';

export default class Utility {
    public static readonly instance: Utility = new Utility();

    private _lastClickTime = 0
    private _lastAnimTime = 0

    //图片置灰
    spriteGray(sprite: Sprite, gray = true) {
        let mat = sprite.getMaterial(0)
        const pass = mat.passes[0];
        let defines = pass.defines
        defines['IS_GRAY'] = gray
        const renderMat = new Material()
        renderMat.initialize({
            effectAsset: mat.effectAsset,
            defines,
        });
        sprite.setMaterial(renderMat, 0)
    }

    nowTimestamp(): number {
        return Math.floor(Date.now() * 0.001)
    }

    filterPlayerGoldNum(num: number) {
        if (num > 9999 && num < 100000000) {
            let n = (Math.floor(parseFloat(num.toString()) / 10000 * 10) / 10).toFixed(1)
            return n + "万"
        }
        else if (num > 99999999) {
            let n = (Math.floor(parseFloat(num.toString()) / 100000000 * 100) / 100).toFixed(2)
            return n + "亿"
        }
        return "" + num
    }

    //时间format yyyy-MM-dd hh:mm
    formatTime(timestamp?: number, pattern?: string) {
        var date = null
        if (timestamp == null) {
            date = new Date()
        } else {
            date = new Date(timestamp * 1000);
        }

        if (pattern == null || pattern == "") {
            pattern = "yyyy-MM-dd hh:mm:ss"
        }

        let o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        };

        if (/(y+)/.test(pattern)) {
            pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(pattern)) {
                pattern = pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return pattern
    }

    //time服务器传的时间戳
    getDate(time) {
        let date = new Date(time.replace(/-/g, '/'))
        let year = date.getFullYear() < 10 ? "0" + date.getFullYear() : "" + date.getFullYear()
        let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : "" + (date.getMonth() + 1)
        let day = date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate()
        let data = { year: year, month: month, day: day }
        return data
    }

    notIOS() {
        if (!this.isMobile()) {
            return true
        }
        return sys.OS.IOS != sys.os
    }

    //是否是手机系统
    isMobile() {
        return sys.isMobile
    }

    //str 需要截断的字符串
    //maxChars 保留的汉字长度
    //suffix 添加的后缀 （注意，如果后缀不为null或者'' ，则要占用一个汉字的位置,具体看下方的示例代码)
    playerNameClamp(str, maxChars, suffix?) {
        if (!str || str.trim() == "") {
            return ""
        }
        var toCodePoint = function (unicodeSurrogates) {
            var r = [], c = 0, p = 0, i = 0;
            while (i < unicodeSurrogates.length) {
                var pos = i;
                c = unicodeSurrogates.charCodeAt(i++);//返回位置的字符的 Unicode 编码
                if (c == 0xfe0f) {
                    continue;
                }
                if (p) {
                    var value = (0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00));
                    r.push({
                        v: value,
                        pos: pos,
                    }); //计算4字节的unicode
                    p = 0;
                } else if (0xD800 <= c && c <= 0xDBFF) {
                    p = c; //如果unicode编码在oxD800-0xDBff之间，则需要与后一个字符放在一起
                } else {
                    r.push({
                        v: c,
                        pos: pos
                    }); //如果是2字节，直接将码点转为对应的十六进制形式
                }
            }
            return r;
        }
        maxChars *= 2;
        var codeArr = toCodePoint(str);
        var numChar = 0;
        var index = 0;
        for (var i = 0; i < codeArr.length; ++i) {
            var code = codeArr[i].v;
            var add = 1;
            if (code >= 128) {
                add = 2;
            }
            // //如果超过了限制，则按上一个为准
            if (numChar + add > maxChars) {
                break;
            }
            index = i;
            // //累加
            numChar += add;
        }
        if (codeArr.length - 1 == index) {
            return str;
        }
        var more = suffix ? 1 : 0;
        if (!suffix) {
            suffix = ""
        }
        return str.substring(0, codeArr[index - more].pos + 1) + suffix;
    }

    //截取带空格的长名称
    clampBlankName(name: string = "", len: number = 5) {
        if (name.length <= len)
            return name;
        let ret = name.match(/\S+/i);
        if (null == ret) {
            return name.substring(0, len) + "...";
        } else {
            return ret[0].substring(0, len) + "...";
        }
    }

    /**
     * 单词首字母大写
     * @param word 
     */
    wordFirstUpper(word: string) {
        return word.replace(/^.{1}/gi, function (match, offset, string) {
            return match.toUpperCase();
        })
    }

    //获取输入中文文字长度 数字字母算半个
    getNameLen(name: string) {
        if (name == "") {
            return 0
        }
        let lenInByte = name.length
        let inputLen = 0
        let i = 0
        while (i < lenInByte) {
            let curByte = name.charCodeAt(i)
            let addLen = 0
            if (curByte > 0 && curByte <= 127) {
                addLen = 0.5
            }
            else if (curByte >= 192 && curByte < 223) {
                addLen = 1
            }
            else if (curByte >= 224 && curByte < 239) {
                addLen = 1
            }
            else if (curByte >= 240 && curByte <= 247) {
                addLen = 1
            }
            else {
                addLen = 1
            }

            inputLen = inputLen + addLen
            i = i + 1
        }
        return inputLen
    }

    thFilterPlayerName(name: string, maxCharLen: number = 10) {
        if (!name || name == "") {
            return ""
        }
        let o = [0x0e31, 0x0e33, 0x0e34, 0x0e35, 0x0e36, 0x0e37, 0x0e38, 0x0e39, 0x0e47, 0x0e48, 0x0e49, 0x0e4a, 0x0e4b, 0x0e4c, 0x0e4d, 0x0e4e]
        let length = name.length
        let charArray = []
        let tempArray = []
        for (var i = 0; i < length; i++) {
            let val = name.charCodeAt(i);
            if (o.indexOf(val) < 0) {
                if (tempArray.length > 0) {
                    let temp = []
                    for (let j = 0; j < tempArray.length; j++) {
                        temp.push(tempArray[j])
                    }
                    charArray.push(temp)
                }
                tempArray = []
                tempArray.push(val)
            } else {
                tempArray.push(val)
            }
        }
        if (tempArray.length > 0) {
            charArray.push(tempArray)
        }

        let result = ""
        for (let i = 0; i < charArray.length; i++) {
            if (i < maxCharLen) {
                let len = charArray[i].length
                let str = ""
                for (let j = 0; j < len; j++) {
                    str += String.fromCharCode(charArray[i][j])
                }
                result += str
            }
        }
        if (charArray.length > maxCharLen) {
            result += ".."
        }
        return result
    }

    filterPlayerName(name: string, maxCharLen: number = 10) {
        return this.thFilterPlayerName(name, maxCharLen)

        // if (name == "") {
        //     return ""
        // }
        // maxCharLen = maxCharLen || 8
        // let newName = ""
        // let lenInByte = name.length
        // let inputLen = 0
        // let i = 0
        // while (i < lenInByte) {
        //     let curByte = name.charCodeAt(i)
        //     let byteCount = 1;
        //     let addLen = 0
        //     if (curByte > 0 && curByte <= 127) {
        //         byteCount = 1                                               //1字节字符
        //         addLen = 1
        //     }
        //     else if (curByte >= 192 && curByte < 223) {
        //         byteCount = 2                                               //双字节字符
        //         addLen = 2
        //     }
        //     else if (curByte >= 224 && curByte < 239) {
        //         byteCount = 3                                               //汉字
        //         addLen = 2
        //     }
        //     else if (curByte >= 240 && curByte <= 247) {
        //         byteCount = 4                                               //4字节字符
        //         addLen = 2
        //     }
        //     else {
        //         byteCount = 3
        //         addLen = 2
        //     }
        //     if (inputLen + addLen > maxCharLen) {
        //         return newName + ".."
        //     }
        //     inputLen = inputLen + addLen
        //     let char = name.charAt(i)
        //     i = i + 1
        //     newName = newName + char
        // }
        // return newName
    }

    //隐藏所有子对象
    hideAllChildren(parent: Node) {
        let length = parent.children.length
        for (let i = 0; i < length; i++) {
            parent.children[i].active = false
        }
    }

    //获取[under,over]之间整数随机值
    getIntRandom(under: number = 0, over: number = 0) {
        return Math.floor(Math.random() * (over - under + 1) + under)
    }

    getNumberArray(count: number) {
        let result = []
        for (let i = 0; i < count; i++) {
            result.push(i)
        }
        return result
    }

    getRandArray<T>(arr: T[], count: number): T[] {
        if (arr.length == 0)
            return null

        let result = []
        if (arr.length < count) {
            for (let i = 0; i < count; i++) {
                let rand = this.getIntRandom(0, arr.length - 1)
                let loc: T = arr[rand]
                result.push(loc)
            }
        } else {
            while (result.length < count) {
                let rand = this.getIntRandom(0, arr.length - 1)
                let loc: T = arr[rand];
                if (result.indexOf(loc) < 0) {
                    result.push(loc)
                }
            }
        }
        return result;
    }

    //两个number数组是否相等
    isNumArrayEquel(a: number[], b: number[]) {
        if (a.length != b.length) {
            return false
        }
        for (let i = 0; i < a.length; i++) {
            let index = b.indexOf(a[i])
            if (index < 0) {
                return false
            }
        }
        return true
    }

    // 随机数
    randomString() {
        var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = chars.length;
        var pwd = '';
        for (var i = 0; i < 32; i++) {
            pwd += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

    //重置sprite大小
    resetSpriteSize(sprite: Sprite, maxWH?: number) {
        if (maxWH) {
            let v2 = sprite.spriteFrame.originalSize
            let max = Math.max(v2.width, v2.height)
            let scale = 1
            if (max > maxWH) {
                scale = maxWH / max
            }
            sprite.node.getComponent(UITransform).setContentSize(v2.width * scale, v2.height * scale)
        } else {
            let v2 = sprite.spriteFrame.originalSize
            sprite.node.getComponent(UITransform).setContentSize(v2)
        }
    }

    scaleSpriteToSize(sprite: Sprite, spriteFrame: SpriteFrame, maxWH: number) {
        let v2 = spriteFrame.originalSize
        let width = v2.width
        let height = v2.height
        if (width > height) {
            width = maxWH
            height = (v2.height / v2.width) * maxWH
        } else {
            height = maxWH
            width = (v2.width / v2.height) * maxWH
        }
        sprite.spriteFrame = spriteFrame
        sprite.node.getComponent(UITransform).setContentSize(width, height)
    }

    //防止打断动画播放
    lastAnimValid(intervalTime?: number) {
        let time = 300
        if (intervalTime) {
            time = intervalTime
        }
        let cur = new Date().getTime()
        if (cur - this._lastAnimTime < time) {
            return false
        } else {
            this._lastAnimTime = cur
            return true
        }
    }

    //防止用户连续点击
    btnClickValid(intervalTime?: number) {
        let time = 400
        if (intervalTime) {
            time = intervalTime
        }
        let cur = new Date().getTime()
        if (cur - this._lastClickTime < time) {
            return false
        } else {
            this._lastClickTime = cur
            return true
        }
    }

    getChineseNum(rank) {
        switch (rank) {
            case 1:
                return "一"
            case 2:
                return "二"
            case 3:
                return "三"
            case 4:
                return "四"
            case 5:
                return "五"
            case 6:
                return "六"
            case 7:
                return "七"
            case 8:
                return "八"
            case 9:
                return "九"
            case 10:
                return "十"
        }
        console.error("获取中文数字出错：", rank)
        return "一"
    }

    getRomeNum(rank) {
        switch (rank) {
            case 1:
                return "Ⅰ"
            case 2:
                return "Ⅱ"
            case 3:
                return "Ⅲ"
            case 4:
                return "Ⅳ"
            case 5:
                return "Ⅴ"
            case 6:
                return "Ⅵ"
            case 7:
                return "Ⅶ"
            case 8:
                return "Ⅷ"
            case 9:
                return "Ⅸ"
            case 10:
                return "Ⅹ"
        }
        console.error("获取罗马数字出错：", rank)
        return "Ⅰ"
    }

    getLabelSize(str: string, label: Label) {
        label.string = str
        label.markForUpdateRenderData()
        return label.node.getComponent(UITransform).contentSize
    }

    getPrefabPrefab(index: number, parent: Node, prefab: Prefab): Node {
        if (parent.children.length <= index) {
            var node = instantiate(prefab)
            node.setPosition(new Vec3(0, 0))
            node.setScale(new Vec3(1, 1, 1))
            node.parent = parent
            node.active = false
            return this.getPrefabPrefab(index, parent, prefab)
        }
        else {
            return parent.children[index]
        }
    }

    getPrefabNode(index: number, parent: Node, prefab: Node): Node {
        if (parent.children.length <= index) {
            var node = instantiate(prefab)
            node.setPosition(new Vec3(0, 0))
            node.setScale(new Vec3(1, 1, 1))
            node.parent = parent
            node.active = false
            return this.getPrefabNode(index, parent, prefab)
        }
        else {
            return parent.children[index]
        }
    }

    getStrLength(str) {
        if (!str) {
            return 0
        }
        var toCodePoint = function (unicodeSurrogates) {
            var r = [], c = 0, p = 0, i = 0;
            while (i < unicodeSurrogates.length) {
                var pos = i;
                c = unicodeSurrogates.charCodeAt(i++);//返回位置的字符的 Unicode 编码
                if (c == 0xfe0f) {
                    continue;
                }
                if (p) {
                    var value = (0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00));
                    r.push({
                        v: value,
                        pos: pos,
                    }); //计算4字节的unicode
                    p = 0;
                } else if (0xD800 <= c && c <= 0xDBFF) {
                    p = c; //如果unicode编码在oxD800-0xDBff之间，则需要与后一个字符放在一起
                } else {
                    r.push({
                        v: c,
                        pos: pos
                    }); //如果是2字节，直接将码点转为对应的十六进制形式
                }
            }
            return r;
        }

        var codeArr = toCodePoint(str);
        var numChar = 0;

        for (var i = 0; i < codeArr.length; ++i) {
            var code = codeArr[i].v;
            var add = 1;
            if (code >= 128) {
                add = 2;
            }
            numChar += add;
        }

        return numChar
    }

    findChildNode(node: Node, path: string): Node {
        let index = path.indexOf('/')
        if (index > 0) {
            let name = path.substring(0, index)
            if (index + 1 < path.length) {
                path = path.substring(index + 1)
                let child = node.getChildByName(name)
                if (child) {
                    return this.findChildNode(child, path)
                }
                return null
            } else {
                return node.getChildByName(name)
            }
        } else {
            return node.getChildByName(path)
        }
    }

    public getTimeDateStr(timestamp: any, type = 1) {
        let date = new Date(timestamp * 1000);
        let year = date.getFullYear() < 10 ? "0" + date.getFullYear() : "" + date.getFullYear();
        let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : "" + (date.getMonth() + 1);
        let day = date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();
        let hours = date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours();
        let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : "" + date.getMinutes();
        let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : "" + date.getSeconds();
        if (type == 1) {
            return `${year}-${month}-${day}  ${hours}:${minutes}:${seconds}`;
        }
        else {
            return `${year}-${month}-${day}`;
        }
    }

    /**
     * 字符串格式化
     * @param content 原字符串
     * @param rep 需要替换的字符
     * @returns 新字符串
     * @example 
     * ```
     * console.log(Utility.instance.format("{0}=={1}", "aa", "bb"))
     * 输出：aa==bb
     * ```
     */
    format(content: string, ...rep: string[]): string {
        return content.replace(/{(\d+)}/g, function (match, number) {
            return rep[number] || match
        })
    }

    /**
    * 数字千位分隔处理
    * @param numStr
    * console.log(numFormat(a)); // "1,234,567,894,532"
    * console.log(numFormat(b)); // "673,439.4542"
    */
    numThousandsFormat(numStr: string) {
        var res = numStr.replace(/\d+/, function (n) { // 先提取整数部分
            return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
                return $1 + ",";
            });
        })
        return res;
    }

    /* 绑定按钮点击事件
     * @param node 按钮节点
     * @param listener 监听方法
     * @param thisArg this实例
     */
    onButtonClick(node: Node, listener: Function, thisArg: any = null, playSound = true) {
        node.on("click", () => {
            listener.call(thisArg)
            if (playSound) {
                AudioManager.instance.playButtonSound()
            }
        }, thisArg)
    }

    /**
     * 绑定Toggle点击事件
     * @param tog Toggle
     * @param listener 监听方法
     * @param thisArg this实例
     */
    onToggleClick(tog: Toggle, listener: Function, thisArg: any = null, playSound = true) {
        tog.node.on("toggle", () => {
            listener.call(thisArg)
            if (tog.isChecked) {
                if (playSound) {
                    AudioManager.instance.playButtonSound()
                }
            }
        }, thisArg)
    }

    getMD5(key: string): string {
        let md5 = new MD5()
        return md5.hex_md5(key)
    }

    formatCountDownTime(time: number) {
        let h = Math.floor(time / 3600)
        let hh = h < 10 ? "0" + h : h
        let m = Math.floor((time - h * 3600) / 60)
        let mm = m < 10 ? "0" + m : m
        let s = Math.floor((time - h * 3600 - m * 60) % 60)
        let ss = s < 10 ? "0" + s : s
        return `${hh}:${mm}:${ss}`
    }

    /**
    * 复制文本到剪贴板
    * @param value 字符串
    */
    copyTextToClipboard(value: string) {
        console.log("sys.isBrowser", sys.isBrowser)
        if (sys.isBrowser) {
            let inp = document.createElement('input')
            document.body.appendChild(inp)
            inp.value = value
            inp.select()
            document.execCommand('copy', false)
            inp.remove()
        } else if (sys.isNative && sys.os === sys.OS.ANDROID) {
            //jsb.bridge.sendToNative("CopyTextToClipboard", value)
            GameSDKInterface.CopyTextToClipboard(value);
        }
    }

    getTextFromClipboard(): string {
        if (sys.isNative) {
            return GameSDKInterface.GetTextFromClipboard()
        }
        return ""
    }

    showMoneyNotEnough(closeCallback?: () => void) {
        ModuleManager.instance.showModule(CommonName.MODULE.MoneyNotEnough, closeCallback)
    }

    loadGameMenu(parentNode: Node, config) {
        ResourceManager.loadRes("prefabs/public_game_menu", Prefab, (err, prefab: Prefab) => {
            if (!err) {
                if (!parentNode || !parentNode.isValid) {
                    return
                }
                let preNode: Node = instantiate(prefab)
                preNode.setParent(parentNode)
                preNode.active = true
                let gameMenu = preNode.getComponent("GameMenu")
                gameMenu["Init"](config)
            }
        })
    }

    public formatUserID(userID: number): string {
        let id = "" + userID
        return id.substring(0, 2) + "****" + id.substring(id.length - 2)
    }

    /**
     * @desc 二阶贝塞尔
     * @param {number} t 当前百分比
     * @param {Vec2 | Vec3} p0 起点坐标
     * @param {Vec2 | Vec3} p1 控制点
     * @param {Vec2 | Vec3} p2 终点坐标
     * @return {Vec3}
     */
    public getBezier(t: number, p0: Vec2 | Vec3, p1: Vec2 | Vec3, p2: Vec2 | Vec3): Vec3 {
        let x = (1 - t) * (1 - t) * p0.x + 2 * t * (1 - t) * p1.x + t * t * p2.x;
        let y = (1 - t) * (1 - t) * p0.y + 2 * t * (1 - t) * p1.y + t * t * p2.y;
        return v3(x, y, 0)
    }

    /**
     * @desc 三阶贝塞尔
     * @param {number} t 当前百分比
     * @param {Vec2 | Vec3} p0 起点坐标
     * @param {Vec2 | Vec3} p1 控制点1
     * @param {Vec2 | Vec3} p2 控制点2
     * @param {Vec2 | Vec3} p3 终点坐标
     * @return {Vec3}
     */
    public getBezierThree(t: number, p0: Vec2 | Vec3, p1: Vec2 | Vec3, p2: Vec2 | Vec3, p3: Vec2 | Vec3): Vec3 {
        let x = (1 - t) * (1 - t) * (1 - t) * p0.x + 3 * t * (1 - t) * (1 - t) * p1.x + 3 * t * t * (1 - t) * p2.x + t * t * t * p3.x
        let y = (1 - t) * (1 - t) * (1 - t) * p0.y + 3 * t * (1 - t) * (1 - t) * p1.y + 3 * t * t * (1 - t) * p2.y + t * t * t * p3.y
        return v3(x, y, 0)
    }

    /**
     * @desc 贝塞尔曲线移动(需要自己启动tween.start函数)
     * @param {Node} item 目标节点
     * @param {Vec3} to 终点坐标
     * @param {boolean} isWorldPos 是否世界坐标系
     * @param {number} dur 持续时间
     * @return {Tween<Node>}
     */
    public bezierTo(item: Node, to: Vec3, isWorldPos: boolean = true, dur?: number): Tween<Node> {
        let from = isWorldPos ? item.worldPosition : item.position
        let dis = Vec3.distance(from, to)
        dur = dur || dis / 600
        let p1 = v2(from.x, from.y)
        let cpx = from.x + (to.x - from.x) * 0.6
        let cpy = (from.y > to.y ? from.y : to.y) + dis * 0.2
        let cp = v2(cpx, cpy)
        let curRatio = 0
        let progress = (_start: number, _end: number, current: number, ratio: number) => {
            curRatio = ratio
            return current
        }
        let onUpdate = (_target: object, _ratio: number) => {
            if (item && item.isValid) {
                let pos = this.getBezier(curRatio, p1, cp, to)
                isWorldPos ? item.worldPosition = pos : item.position = pos
            }
        }
        let opt = isWorldPos ? { worldPosition: to } : { position: to }
        return tween(item).to(dur, opt, { progress: progress, onUpdate: onUpdate, easing: "quadOut" })
    }


    /**
     * 更新数值
     * @param start 开始值
     * @param end 结束值
     * @param duration 持续时间
     * @param callback 回调
     * @param ease 曲线
     * @returns 
     */
    public tweenNumberTo(start: number, end: number, duration: number, callback: (progressNum: number)=>void, ease?: (k: number) => number) {
        let test = { status: { num: start } }
        return tween(test).to(duration, { status: { num: end } }, {
            onUpdate: (target?, ratio?) => {
                callback(Math.floor((start + (end - start) * ratio)));
            }, easing: ease
        }).start()
    }

    /**
     * 获取URL参数信息
     * @param url 
     * @returns 
     */
    public getUrlParams(url = "") {
        if (url.length < 4) {
            url = window.location.toString();
        }
        let urlStr = url.split('?')[1]
        if (!urlStr) return {};
        let obj = {};
        let paramsArr = urlStr.split('&')
        for (let i = 0, len = paramsArr.length; i < len; i++) {
            let arr = paramsArr[i].split('=')
            obj[arr[0]] = arr[1];
        }
        return obj
    }

    public getTimeStr(date: any) {
        let year = date.getFullYear() < 10 ? "0" + date.getFullYear() : "" + date.getFullYear()
        let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : "" + (date.getMonth() + 1)
        let day = date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate()
        return `${year}-${month}-${day}`;
    }

    private padZero(num) {
        return num < 10 ? '0' + num : num;
    }

    public formatDate(date, template) {
        const replacements = {
            'YYYY': date.getFullYear(),
            'MM': this.padZero(date.getMonth() + 1),
            'DD': this.padZero(date.getDate()),
            'HH': this.padZero(date.getHours()),
            'mm': this.padZero(date.getMinutes()),
            'ss': this.padZero(date.getSeconds())
        };
        return template.replace(/YYYY|MM|DD|HH|mm|ss/g, match => replacements[match]);
    }
}