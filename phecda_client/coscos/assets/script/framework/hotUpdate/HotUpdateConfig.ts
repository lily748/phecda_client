
import { _decorator, Component, Node, sys, path, JsonAsset, System } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HotUpdateConfig')
export class HotUpdateConfig {
    public static hotUpateUrl: string = "https://file.4pgameapp.com/hotupdate"

    public static get localResPath() {
        return jsb.fileUtils.getWritablePath() + "localResPath/";
    }

    //读取project.manifest
    public static getPrjectManifest(bundle: string) {
        let path;
        if (bundle == "main") {
            path = "project.manifest"
        }
        else {
            path = `assets/${bundle}/project.manifest`
        }
        let cachedPath = `${HotUpdateConfig.localResPath}${path}`;
        if (jsb.fileUtils.isFileExist(cachedPath)) {
            console.log("本地缓存资源路径 " + cachedPath)
            return jsb.fileUtils.getStringFromFile(cachedPath);
        }
        else {
            let packagePath = jsb.fileUtils.getDefaultResourceRootPath() + path
            console.log("包体内资源路径 " + packagePath)
            if (jsb.fileUtils.isFileExist(packagePath)) {
                return jsb.fileUtils.getStringFromFile(packagePath);
            } else {
                return undefined;
            }
        }
    }
}
