
import { _decorator, sys, resources, BufferAsset, utils, game, path } from 'cc';
import { GameSDKInterface } from '../../game/GameSDKInterface';
import { HotUpdateConfig } from './HotUpdateConfig';
import EventManager from '../../manager/event_manager';
import CommonName from '../../../packages/hall/script/model/CommonName';
import { DEBUG } from 'cc/env';
const { ccclass, property } = _decorator;

/**
 *
 */
interface VERSIONS {
    skin: string,
    version: string,
    path: string
}

export enum hotUpdateType {
    None,               //不需要更新
    Update,             //版本更新
    Update_Restart,     //版本更新需要重启
    Update_Download,    //版本更新需要去下载app
}
//type VERSIONS = { [key: string]: { skin: string, version: string, path: string } };
class _HotUpdateManager {
    /**@description 远程所有版本信息 */
    private remoteVersions: { [key: string]: VERSIONS } = {};
    /**@description 所有下载项 */
    private updateHandlers: HotUpdateHandler[] = [];
    //最大的下载数量
    private maxDownloadCount = 3;
    private loadBundleList: { [key: string]: boolean } = {}

    constructor() {
        if (sys.isNative)
            setInterval(this.update.bind(this), 200);
    }

    //
    public setRemoteVersion(remoteVersions: { [key: string]: VERSIONS }) {
        this.remoteVersions = remoteVersions;
        if (sys.isNative || DEBUG) {
            console.log("remoteVersions: ", this.remoteVersions)
        }
    }

    public setVersion(ver: any) {
        this.remoteVersions[ver.BunldID] = {
            version: ver.Ver1,
            path: ver.Path,
            skin: ver.SkinVer
        }
    }

    public addLoadBundleList(bundle: string) {
        if (bundle != "main")
            this.loadBundleList[bundle] = true;
    }
    //返回更新类型
    public checkUpdate(bundle: string): hotUpdateType {
        if (!sys.isNative) {
            return hotUpdateType.None;
        }
        var remoteVersion = this.getRemoteVersion(bundle);
        var localVersion = this.getLocalVersion(bundle);
        if (!remoteVersion)
            return hotUpdateType.None;
        var updateType = this.versionCompareHandle(localVersion, remoteVersion)
        if (updateType == hotUpdateType.Update_Restart && !this.loadBundleList[bundle])
            updateType = hotUpdateType.Update;
        return updateType;
    }

    //检查版本更新信息
    public isUpdate(bundle: string): boolean {
        if (this.loadBundleList[bundle])
            return false;
        return this.checkUpdate(bundle) > hotUpdateType.None
    }

    //更新assetbundle
    public download(bundle: string): DownloadHanler {
        if (!sys.isNative)
            return null
        if (!this.isUpdate(bundle)) {
            console.log("当前已经是最新的版本！！！")
            return;
        }

        for (let i = 0; i < this.updateHandlers.length; i++) {
            if (this.updateHandlers[i].bundle == bundle) {
                if (this.updateHandlers[i].isUpdating > UpdateStatus.Updateing) {
                    this.updateHandlers.splice(i, 1);
                    break;
                }
                else {
                    return this.updateHandlers[i]
                }
            }
        }

        var remoteVersion = this.remoteVersions[bundle]
        var handler = new HotUpdateHandler(bundle, remoteVersion)
        this.updateHandlers.push(handler);
        return handler;
    }

    //检查版本号
    public CheckMainVersion() {
        if (!sys.isNative)
            return;
        let pVersion = "1.0.0"
        let lVersion = "1.0.0"

        let localPath = `${HotUpdateConfig.localResPath}project.manifest`;
        console.log("CheckMainVersion  " + localPath)
        if (jsb.fileUtils.isFileExist(localPath)) {
            var content = jsb.fileUtils.getStringFromFile(localPath);
            if (content) {
                pVersion = JSON.parse(content).version;
            }
        }
        else {
            console.log("never hot update ,so continue")
            return;
        }
        //获取包体内版本号
        if (jsb.fileUtils.isFileExist(jsb.fileUtils.getDefaultResourceRootPath() + "project.manifest")) {
            var content = jsb.fileUtils.getStringFromFile(jsb.fileUtils.getDefaultResourceRootPath() + "project.manifest");
            if (content) {
                lVersion = JSON.parse(content).version;
            }
        }
        //如果包体里面的版本号要高于缓存的版本号 需要删掉缓存重启
        if (this.versionCompareHandle(lVersion, pVersion) < hotUpdateType.None) {
            this.RemoveLocalRes();
        }
    }

    //清理缓存
    public RemoveLocalRes() {
        console.log("删除本地所有版本文件")
        if (sys.isNative && jsb.fileUtils.isDirectoryExist(HotUpdateConfig.localResPath)) {
            jsb.fileUtils.removeDirectory(HotUpdateConfig.localResPath)
            setTimeout(GameSDKInterface.Restart, 1000);
        }
    }
    //获取bundle的版本信息
    public getLocalVersion(bundle: string): string {
        if (sys.isNative) {
            let content = HotUpdateConfig.getPrjectManifest(bundle);
            if (content) {
                let obj = JSON.parse(content);
                console.log("getLocalVersion %s %s", bundle, obj.version)
                return obj.version;
            }
        }
        return "2.0.0";
    }
    //bundle校验
    public bundleVerify(bundle: string): boolean {
        if (!sys.isNative) return true;
        let manifestPath = ""
        if (bundle == "main") {
            manifestPath = "project.manifest"
        }
        else {
            manifestPath = `assets/${bundle}/project.manifest`
        }
        let cachedPath = `${HotUpdateConfig.localResPath}${manifestPath}`;
        if (!jsb.fileUtils.isFileExist(cachedPath)) {
            return true
        }
        let content = jsb.fileUtils.getStringFromFile(cachedPath);
        if (!content) return false;
        let manifest = JSON.parse(content)
        if (!manifest.assets) return true;
        let relPath = path.join(HotUpdateConfig.localResPath, (bundle == "main" ? "" : `assets/${bundle}`))
        for (var assetPath in manifest.assets) {
            let fullPath = path.join(relPath, assetPath)
            // console.log("资源路径：" + fullPath)
            if (!jsb.fileUtils.isFileExist(fullPath) || jsb.fileUtils.getFileSize(fullPath) != manifest.assets[assetPath].size) {
                console.error("资源校验失败 " + fullPath)
                return false;
            }
        }
        return true;
    }
    //获取远程版本号
    private getRemoteVersion(bundle: string) {
        if (this.remoteVersions[bundle]) {
            return this.remoteVersions[bundle].version
        }
        return "1.0.0";
    }
    //版本比较
    private versionCompareHandle(versionA: string, versionB: string) {
        console.log("Version Compare: version A is " + versionA + ', version B is ' + versionB);
        var vA = versionA.split('.');
        var vB = versionB.split('.');
        let compare = (a: number, b: number) => {
            if (a === b)
                return 0;
            return b - a
        }
        for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || '0');
            let type = compare(a, b)
            if (type < 0)
                return -1;
            if (type > 0) {
                if (i == 0)
                    return hotUpdateType.Update_Download
                if (i == 1)
                    return hotUpdateType.Update_Restart
                if (i == 2)
                    return hotUpdateType.Update
            }
        }
        return hotUpdateType.None;
    }

    private update() {
        if (!sys.isNative || this.updateHandlers.length <= 0)
            return;
        var count = 0;
        for (let i = this.updateHandlers.length - 1; i >= 0; i--) {
            var handler = this.updateHandlers[i]
            if (handler.isUpdating > UpdateStatus.Updateing) {
                this.updateHandlers.splice(i, 1)
            }
            else if (handler.isUpdating == UpdateStatus.Updateing) {
                count++
            }
        }
        if (count < this.maxDownloadCount && this.updateHandlers.length > count) {
            for (let i = 0; i < this.updateHandlers.length; i++) {
                var handler = this.updateHandlers[i]
                if (handler.isUpdating == UpdateStatus.None) {
                    handler.checkUpdate();
                    if (++count > this.maxDownloadCount)
                        break;
                }
            }
        }
    }
}

enum UpdateStatus {
    None,
    Updateing,
    Failed,
    Success,
}

abstract class DownloadHanler {
    onProgress: (precent: number) => void;
    onSuccess: () => void;
    onFailed: () => void;
}

class HotUpdateHandler extends DownloadHanler {
    downloadHanler: DownloadHanler;
    /**@description 将要更新的版本号 */
    version: string = "";
    /**@description 更新项bundle名 */
    public readonly bundle: string = "";
    /**@description 是否正在下载或正在检测更新 */
    isUpdating = UpdateStatus.None;
    /**@description 最大重新更新次数 */
    maxRetry = 3;
    /**@description 热更路径 */
    getHotUpdateUrl: string;
    /**@description 本地资源路径 */
    getStoragePath: string;

    fileCount: number;
    /**@description 下载管理器，请不要从外面进行设置,管理器专用 */
    private assetsManager: jsb.AssetsManager = null!;
    private hasDownloadFailedAssets: Boolean = false;
    constructor(bundle: string, ver: VERSIONS) {
        super();
        this.version = ver.version;
        this.bundle = bundle;
        this.getHotUpdateUrl = ver.path;
        this.hasDownloadFailedAssets = false;
        this.getStoragePath = HotUpdateConfig.localResPath + (this.bundle == "main" ? "" : `assets/${this.bundle}`);
        this.fileCount = 0
        // this.removeTempDirectory();
    }

    versionCompareHandle(versionA: string, versionB: string) {
        console.log(`版本比较： versionA ${versionA}  versionB ${versionB}`)
        var vA = versionA.split('.');
        var vB = versionB.split('.');
        for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || '0');
            if (a === b) {
                continue;
            }
            else {
                return a - b;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        }
        else {
            return 0;
        }
    }

    verify(path: string, asset: jsb.ManifestAsset) {
        this.fileCount++;
        if (jsb.fileUtils.isFileExist(path) && jsb.fileUtils.getDataFromFile(path).byteLength === asset.size) {
            // console.log("资源更新校验成功 :  %s", asset.path)
            return true;
        }
        else {
            console.error("资源更新校验失败 : %s", asset.path)
            return false;
        }
    }

    private checkCallBack(event: any) {
        //console.log('checkCallBack: ' + event.getEventCode());
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                console.log("No local manifest file found, hot update skipped.");
                this.isUpdating = UpdateStatus.Failed;
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                console.log("Fail to download manifest file, hot update skipped.");
                this.isUpdating = UpdateStatus.Failed;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                console.log("Already up to date with the latest remote version.");
                // this.isUpdating = UpdateStatus.Failed;
                this.isUpdating = UpdateStatus.Success;
                this.assetsManager.setEventCallback(null);
                EventManager.instance.dispatch(CommonName.EVENT.HotUpdate_Success, {});
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                console.log('New version found, please try to update. (' + Math.ceil(this.assetsManager.getTotalBytes() / 1024) + 'kb)');
                this.assetsManager.setEventCallback(null);
                if (this.assetsManager.getTotalBytes() == 0) {
                    console.log("更新本地版本文件成功  只更新了配置文件,没有资源文件需要更新")
                    // this.isUpdating = UpdateStatus.Success;
                    this.onDownloadSuccess()
                }
                else {
                    this.hotUpdate();
                }
                return;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                // console.log("更新下载进度中 " + event.getMessage())
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                console.log("更新完成 " + event.getMessage());
                break;
            default:
                return;
        }
        if (this.isUpdating == UpdateStatus.Failed) {
            this.onDownloadFaid();
        }
    }

    private loadLocalMainfest() {
        this.assetsManager = new jsb.AssetsManager("", this.getStoragePath);
        this.assetsManager.setVerifyCallback(this.verify.bind(this))
        this.assetsManager.setVersionCompareHandle(this.versionCompareHandle)
        let content = JSON.stringify({
            "packageUrl": this.getHotUpdateUrl + '/',
            "remoteManifestUrl": `${this.getHotUpdateUrl}/project.manifest`,
            "remoteVersionUrl": `${this.getHotUpdateUrl}/version.manifest`,
            "version": HotUpdateManager.getLocalVersion(this.bundle)
        });
        let localManifestContent = HotUpdateConfig.getPrjectManifest(this.bundle);
        if (!localManifestContent) {
            localManifestContent = content
        }

        var localMainfest = new jsb.Manifest(localManifestContent, this.getStoragePath)
        this.assetsManager.loadLocalManifest(localMainfest, this.getStoragePath);

        let manifest = this.assetsManager.getLocalManifest();
        manifest.parseJSONString(content, this.getStoragePath)
        if (!this.assetsManager.getLocalManifest() || !this.assetsManager.getLocalManifest().isLoaded()) {
            console.log(`${this.bundle} Failed to load local manifest ....`);
            return false;
        }
        console.log("获取远程资源配置文件地址： " + this.assetsManager.getLocalManifest().getPackageUrl())
        return true
    }

    public checkUpdate() {
        if (this.loadLocalMainfest()) {
            this.isUpdating = UpdateStatus.Updateing;
            this.assetsManager.setEventCallback(this.checkCallBack.bind(this))
            this.assetsManager.checkUpdate();
        }
        else {
            this.onDownloadFaid();
        }
    }

    private updateCallBack(event: any) {
        var failed = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                console.log('No local manifest file found, hot update skipped.');
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                if (this.onProgress) {
                    var precent = event.getPercent()
                    precent = precent < 0 ? 0 : precent;
                    precent = precent > 1 ? 1 : precent;
                    this.onProgress(precent * 100)
                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                console.log('Fail to download manifest file, hot update skipped.');
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                console.log('Already up to date with the latest remote version.');
                // failed = true;
                failed = false;
                this.assetsManager.setEventCallback(null!);
                EventManager.instance.dispatch(CommonName.EVENT.HotUpdate_Success, {});
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                console.log('Update finished ' + this.bundle);
                this.onDownloadSuccess()
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                console.log('Update failed ' + this.bundle);
                if (this.maxRetry > 0) {
                    this.retry();
                }
                else {
                    this.onDownloadFaid();
                }
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                console.log('Asset update error: ' + event.getAssetId() + ', ' + event.getMessage());
                failed = true;
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                console.log(event.getMessage());
                break;
            default:
                break;
        }

        if (failed) {
            this.hasDownloadFailedAssets = true;
        }
    }

    onDownloadFaid() {
        this.isUpdating = UpdateStatus.Failed;
        // this.removeTempDirectory();
        this.assetsManager.setEventCallback(null!);
        this.onFailed && this.onFailed()
    }

    onDownloadSuccess() {
        //下载完成,需要重新设置搜索路径，添加下载路径
        var searchPaths: string[] = jsb.fileUtils.getSearchPaths();
        var newPaths: string[] = this.assetsManager.getLocalManifest().getSearchPaths();
        newPaths.push(HotUpdateConfig.localResPath)
        console.log(JSON.stringify(newPaths));
        Array.prototype.unshift.apply(searchPaths, newPaths);

        //这里做一个搜索路径去重处理
        let obj: any = {};
        for (let i = 0; i < searchPaths.length; i++) {
            obj[searchPaths[i]] = true;
        }
        searchPaths = Object.keys(obj);
        sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
        // console.log("searchPaths ", searchPaths)
        jsb.fileUtils.setSearchPaths(searchPaths);
        console.log("更新文件数量" + this.fileCount)
        if (this.bundle != "main" && !HotUpdateManager.bundleVerify(this.bundle)) {
            console.error("资源校验失败 " + this.bundle)
        }
        else {
            console.log("资源校验成功 " + this.bundle)
        }

        this.isUpdating = UpdateStatus.Success
        if (this.onProgress) {
            this.onProgress(100)
        }
        if (this.onSuccess) {
            this.onSuccess();
        }
    }

    //删除缓存文件
    removeTempDirectory() {
        var tempPath = this.getStoragePath + "_temp"
        if (jsb.fileUtils.isDirectoryExist(tempPath)) {
            console.log("removeTempDirectory----------------------------->" + tempPath)
            jsb.fileUtils.removeDirectory(tempPath)
        }
    }

    //再次下载下载失败的文件
    retry() {
        console.log("重新下载失败文件")
        this.maxRetry--;
        this.hasDownloadFailedAssets = false;
        this.assetsManager.downloadFailedAssets();
    }

    hotUpdate() {
        if (this.assetsManager && this.isUpdating == UpdateStatus.Updateing) {
            if (this.assetsManager.getState() === jsb.AssetsManager.State.UNINITED) {
                return;
            }
            console.log("远程资源地址 getPackageUrl:  " + this.assetsManager.getRemoteManifest().getPackageUrl())
            this.assetsManager.setEventCallback(this.updateCallBack.bind(this))
            this.assetsManager.update();
        }
        else {
            this.onDownloadFaid();
        }
    }
}

export const HotUpdateManager = new _HotUpdateManager()

