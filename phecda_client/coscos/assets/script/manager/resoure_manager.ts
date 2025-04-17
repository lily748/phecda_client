import { _decorator, AssetManager, Asset, assetManager, Texture2D, resources, SpriteFrame, ImageAsset, SceneAsset, sys, __private, Prefab } from 'cc';
import { HotUpdateManager } from '../framework/hotUpdate/HotUpdateManager';
const { ccclass } = _decorator;
export class ResHandler {

}
@ccclass('ResoureManager')
export default class ResourceManager {
    static topAdapPrefab: any;
    static loadAny(requests: string | string[] | Record<string, any> | Record<string, any>[], onProgress: (finished: number, total: number, item: AssetManager.RequestItem) => void, onComplete: (err: Error, data: any) => void): void {
        assetManager.loadAny(requests, onProgress, onComplete)
    }

    static preloadAny(requests: string | string[] | Record<string, any> | Record<string, any>[], onProgress: (finished: number, total: number, item: AssetManager.RequestItem) => void, onComplete: (err: Error, items: AssetManager.RequestItem[]) => void): void {
        assetManager.preloadAny(requests, onProgress, onComplete)
    }

    //加载resource资源
    static loadRes(paths: string, type: typeof Asset, onComplete: (error: Error, assets: Asset | Array<Asset>) => void): void {
        resources.load(paths, type, (error: Error, assets: Asset | Array<Asset>) => {
            onComplete(error, assets)
        })
    }

    static preloadRes(paths: string, type: typeof Asset, onComplete: () => void): void {
        resources.preload(paths, type, onComplete)
    }

    static loadAssetsBundle(bundleName: string) {    
        return new Promise((resolve, reject) => {
            let bundle = assetManager.getBundle(bundleName)
            if (bundle) {
                resolve(bundle);
                return;
            }
            else {
                assetManager.loadBundle('assets/' + bundleName, (err, bundle) => {
                    if (err) {
                        console.error(err)
                        return reject(err)
                    }
                    HotUpdateManager.addLoadBundleList(bundleName)
                    resolve(bundle);
                })
            }
        })
    }

    static loadScene(bundleName: string, name: string, onComplete?: (error: Error, scene: SceneAsset) => void) {
        return new Promise((resolve, reject) => {
            this.loadAssetsBundle(bundleName).then((bundle: AssetManager.Bundle) => {
                bundle.loadScene(name, (err, scene) => {
                    onComplete && onComplete(err, scene)
                    if (err) {
                        console.error(err)
                        return reject(err)
                    }
                    resolve(scene)
                })
            }, (reason: any) => {
                reject(reason)
            })
        })
    }

    static loadRemote<T extends Asset>(url: string, onComplete?: __private._cocos_core_asset_manager_shared__CompleteCallbackWithData<T> | null): void {
        assetManager.loadRemote(url, onComplete)
    }

    static loadRemoteTexture(url: string, callback) {
        assetManager.loadRemote(url, function (err, texture: ImageAsset) {
            if (callback) {
                callback(err, texture)
            }
        });
    }

    //加载资源
    static loadBundle<T extends Asset>(bundleName: string, paths: string, type?: typeof Asset, onProgress?: (finish: number, total: number, item: AssetManager.RequestItem) => void, onComplete?: (error: Error, assets: T) => void) {
        return new Promise((resolve, reject) => {
            this.loadAssetsBundle(bundleName).then((bundle: AssetManager.Bundle) => {
                bundle.load(paths, type, onProgress, (err, asset) => {
                    onComplete && onComplete(err, asset as T)
                    if (err) {
                        console.error("loadBundle error : " + paths, err)
                        return resolve(undefined)
                    }
                    resolve(asset)                    
                })
            }, (reason: any) => {
                console.error("loadBundle error : " + paths, reason)
                return resolve(undefined)
            })
        })
    }

    //只加载bundle
    static preloadBundle(bundleName: string, onComplete?: (error: Error, assets) => void): void {
        let bundle = assetManager.getBundle(bundleName)
        if (bundle) {
            if (onComplete) {
                onComplete(null, bundle)
            }
        } else {
            assetManager.loadBundle('assets/' + bundleName, (err, bundle) => {
                if (err) {
                    console.error("res preload fail：", bundleName, err.message, err.stack)
                    if (onComplete) {
                        onComplete(err, null)
                    }
                } else {
                    if (onComplete) {
                        onComplete(err, bundle)
                    }
                }
            })
        }
    }

    static loadDir<T extends Asset>(bundleName: string, dir: string, type: __private._cocos_core_asset_manager_shared__AssetType<T> | null, onProgress: __private._cocos_core_asset_manager_shared__ProgressCallback | null, onComplete: __private._cocos_core_asset_manager_shared__CompleteCallbackWithData<T[]> | null) {
        return new Promise((resolve, reject) => {
            this.loadAssetsBundle(bundleName).then((bundle: AssetManager.Bundle) => {
                bundle.loadDir(dir, type, onProgress, (err, assets) => {
                    onComplete && onComplete(err, assets)
                    if (err) {
                        reject(err)
                    }
                    else {
                        resolve(assets)
                    }
                })
            }, (reason: any) => {
                reject(reason)
            })
        })
    }

    static get<T extends Asset>(path: string, type?: __private._cocos_core_asset_manager_shared__AssetType<T> | null, bundleName: string = "resources"): T | null {
        let bundle: AssetManager.Bundle | null = assetManager.getBundle(bundleName);
        return bundle!.get(path, type);
    }

    static releaseAsset(asset: Asset) {
        assetManager.releaseAsset(asset)
    }

    //一个图片加载进来占用2个资源 一个texture 一个spriteFrame路径一样,type不一样,
    //只用bundle.release(path)释放只能释放texture资源,不能释放spriteFrame,必须指定资源类型
    //用releaseAsset释放能完整释放
    static releaseAssetByPath(bundleName: string, path: string) {
        let bundle = assetManager.getBundle(bundleName)
        bundle?.release(path);
    }

    static releaseDir(path: string, bundleName: string = "resources") {
        let bundle: AssetManager.Bundle | null = assetManager.getBundle(bundleName);
        let infos = bundle?.getDirWithPath(path);
        infos?.map(function (info) {
            let ctorStr = info.ctor.toString()
            if (ctorStr.indexOf('cc_Texture2D') >= 0) {
                bundle?.release(info.path, Texture2D);
            } else if (ctorStr.indexOf('cc_SpriteFrame') >= 0) {
                bundle?.release(info.path, SpriteFrame);
            } else {
                bundle?.release(info.path);
            }

            // //类型断言
            // // if (typeof (info as Texture2D).getPixelFormat === 'function') {
            // //     bundle?.release(info.path, Texture2D);
            // // } else if (typeof (info as SpriteFrame).ensureLoadTexture === 'function') {
            // //     bundle?.release(info.path, SpriteFrame);
            // // } else {
            // //     bundle?.release(info.path);
            // // }
        });

        if (path == "" && bundleName != "resources" && bundle) {
            assetManager.removeBundle(bundle);
        }
    }

    // bundleName : 需要释放的bundle名  releaseAllRes：释放bundle中所有已加载资源
    static releaseBundle(bundleName, releaseAllRes = false) {
        console.warn("remove bundle name:" + bundleName)
        let bundle: AssetManager.Bundle = assetManager.getBundle(bundleName);
        if (bundle) {
            if (releaseAllRes) {
                bundle.releaseAll()
            }
            assetManager.removeBundle(bundle)
            sys.garbageCollect()
        }
    }

    // 释放所有已加载的bundle和已加载bundle内资源
    static releaseAll() {
        assetManager.bundles.forEach((bundle, key) => {
            bundle.releaseAll()
        })
        assetManager.bundles.clear()
    }

    public static dump() {
        assetManager.assets.forEach((value: Asset, key: string) => {
            console.log(key);
        })
        console.log(`当前资源总数:${assetManager.assets.count}`);
    }


    
    /**
     * gettopAdapPrefab
     */
    static getTopAdapPrefab(onComplete?: ( prefab: Prefab) => void) {
        if (this.topAdapPrefab) {
            onComplete && onComplete(this.topAdapPrefab)
            return
        }
        ResourceManager.loadBundle<Prefab>("resources", "prefabs/hall/topAdap", Prefab, null, (err, asset) => {
            if (err) {
                console.error("loadBundle error : " + "prefabs/hall/topAdap", err)
                return
            }
            this.topAdapPrefab = asset as Prefab
            onComplete && onComplete(this.topAdapPrefab)
        })
    }
}