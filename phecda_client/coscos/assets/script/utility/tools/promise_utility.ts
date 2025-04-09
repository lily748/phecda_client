import { _decorator } from 'cc';
export default class PromiseUtility {

    private static genPromise(doFun) {
        let promise = new Promise(function (resolve, reject) {
            doFun(function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        });
        return promise
    }

    private static getPromiseList(doFuns: Function[]): any[] {
        let list: any[] = []
        for (let index = 0; index < doFuns.length; index++) {
            const element = doFuns[index];
            list.push(this.genPromise(element))
        }
        return list
    }

    static all(doFuns: Function[]) {
        let promiseList = this.getPromiseList(doFuns)
        return Promise.all(promiseList)
    }

    static race(doFuns: Function[]) {
        let promiseList = this.getPromiseList(doFuns)
        return Promise.race(promiseList)
    }

    static sequence(doFuns: Function[]) {
        let callback = null
        let onFinish = function () {
            let doFun = doFuns.shift()
            if (doFun) {
                deal(doFun)
            } else {
                callback && callback()
            }
        }
        let deal = function (doFun: Function) {
            PromiseUtility.all([doFun]).then(onFinish)
        }
        let result = {
            then: function (cb) {
                callback = cb
            }
        }
        onFinish()
        return result
    }
}

