import { math } from "cc";
import { encode, fromBase64, toBase64 } from "../libs/base64";
export class _Uti {
    pow(value, exp) {
        var result = 1;
        for (var i = 0; i < exp; i++) {
            result = result * value
        }
        return result;
    }

    RadixTo10(num: number, radix) {
        var numStr = num.toString();
        var tNum = 0
        for (let i = 0; i < numStr.length; i++) {
            tNum = tNum + parseInt(numStr.charAt(i)) * this.pow(radix, (numStr.length - 1 - i))
        }
        return tNum;
    }

    decrypt(str: string): string {
        var splitStrs = str.split(`,`)
        var retStr = ``
        for (let i = 0; i < splitStrs.length; i++) {
            var num = this.RadixTo10(parseInt(splitStrs[i]), 9) - 1 - i;
            retStr = retStr + String.fromCharCode(num)
        }
        return fromBase64(retStr)
    }


    decryptBase64(str: string) {
        if (!str)
            return ""
        var strlen = str.length;
        var num = Math.floor(strlen / 10)
        var info = ""
        for (let i = 0; i < num; i++) {
            info = info + str.slice(i * 10 + 5, i * 10 + 10)
            info = info + str.slice(i * 10, i * 10 + 5)
        }
        if (num * 10 + 1 <= strlen) {
            info = info + str.slice(num * 10, strlen)
        }
        return fromBase64(info);
    }

    encryptBase64(str: string) {
        var retStr = toBase64(str)
        var strlen = retStr.length;
        var num = Math.floor(strlen / 10)
        var info = ""
        for (let i = 0; i < num; i++) {
            info = info + retStr.slice(i * 10 + 5, i * 10 + 10)
            info = info + retStr.slice(i * 10, i * 10 + 5)
        }
        if (num * 10 + 1 <= retStr.length) {
            info = info + retStr.slice(num * 10, retStr.length)
        }
        return info;
    }

    padding(num: number, length: number): string {
        var len = num.toString().length;
        var diff = length - len;
        if (diff > 0) {
            return Array(diff + 1).join("0") + num;
        }
        return num.toString();
    }
}

export const Uti = new _Uti();



