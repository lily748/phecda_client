"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helper = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = __importStar(require("path"));
const Tools_1 = require("./Tools");
const os = __importStar(require("os"));
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const util_1 = require("util");
const AndroidBuilder_1 = require("./AndroidBuilder");
let OSS = require("ali-oss");
const PACKAGE_MAIN = "main";
const PACKAGE_NAME = "hotupdate";
const exec_promisify = (0, util_1.promisify)(child_process_1.exec);
class Helper {
    constructor() {
        this._config = null;
        this._bundles = null;
        //游戏打包配置
        this._packageCfg = null;
        //游戏服务器配置
        this._serverCfgs = null;
        this._createProgress = 0;
        this.client = new OSS({
            region: '11game',
            accessKeyId: 'AKIASCQHTOSZPACPZ64K',
            accessKeySecret: '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',
            bucket: 'ap-south-1'
        });
        this.uploadCount = 0;
        /**@description 进度总数 */
        this.total = 1;
        this._progress = 0;
        this.readCacheConfig();
        this._config.buildDir = path_1.default.join(Editor.Project.path, "build");
        this._config.outDir = path_1.default.join(Editor.Project.path, "build/assetsbundle");
        AndroidBuilder_1.AndroidBuilder.projectPath = this.config.projectPath;
    }
    get config() {
        if (!this._config) {
            this.readCacheConfig();
        }
        return this._config;
    }
    set config(v) {
        this._config = v;
    }
    get bundles() {
        if (!this._bundles) {
            this._bundles = this.readBundlesCfg();
        }
        return this._bundles;
    }
    get PackageCfgs() {
        if (!this._packageCfg) {
            this._packageCfg = this.readPackageCfg();
        }
        return this._packageCfg;
    }
    get ServerCfgs() {
        if (!this._serverCfgs) {
            this._serverCfgs = this.readServerCfg();
        }
        return this._serverCfgs;
    }
    get buildOutPath() {
        if (this.config.serverCfg.name == "正式服") {
            return path_1.default.join(this._config.outDir, "publish");
        }
        else {
            return path_1.default.join(this._config.outDir, "test");
        }
    }
    //获取缓存配置
    get userCachePath() {
        return path_1.default.join(Editor.Project.path, "extensions/hotupdate/config/localCache.json");
    }
    //获取对应平台的buildconfig
    get buildConfigPath() {
        return path_1.default.join(Editor.Project.path, `extensions/hotupdate/config/buildConfig_${this.config.platform}.json`);
    }
    get webHtmlPath() {
        return path_1.default.join(Editor.Project.path, `extensions/hotupdate/config/web.html`);
    }
    setProjectPath(path) {
        this.config.projectPath = path;
        AndroidBuilder_1.AndroidBuilder.projectPath = path;
        this.saveConfig();
    }
    /**@description 保存当前用户设置 */
    saveConfig() {
        let cacheString = JSON.stringify(this.config);
        (0, fs_extra_1.writeFileSync)(this.userCachePath, cacheString);
        // this.addLog(`写入缓存 :`, this.userCache);
    }
    saveBundleCfg() {
        let cfg = [];
        for (var key in this.bundles) {
            let info = this.bundles[key];
            let vo = {
                name: info.name,
                bundle: info.bundle,
                relative: info.relative,
                respaths: info.respaths,
                ver: info.ver
            };
            cfg.push(vo);
        }
        let filePath = path_1.default.join(Editor.Project.path, "extensions/hotupdate/config/bundles.json");
        (0, fs_extra_1.writeFileSync)(filePath, JSON.stringify(cfg), { "encoding": "utf8" });
    }
    /**@description 读取本地缓存 */
    readCacheConfig() {
        if ((0, fs_extra_1.existsSync)(this.userCachePath)) {
            let data = (0, fs_extra_1.readFileSync)(this.userCachePath, "utf-8");
            this._config = JSON.parse(data);
        }
        else {
            this._config = new HotupdateConfig();
        }
        if (this._config.serverCfg) {
            let name = this._config.serverCfg.name;
            for (let i = 0; i < this.ServerCfgs.length; i++) {
                if (this.ServerCfgs[i].name == name) {
                    this._config.serverCfg = this.ServerCfgs[i];
                    break;
                }
            }
        }
        else {
            this._config.serverCfg = this.ServerCfgs[0];
        }
    }
    readServerCfg() {
        let filePath = path_1.default.join(Editor.Project.path, `extensions/hotupdate/config/servercfg.json`);
        let cfgs = [];
        if ((0, fs_extra_1.existsSync)(filePath)) {
            let data = (0, fs_extra_1.readFileSync)(filePath, "utf-8");
            cfgs = JSON.parse(data);
        }
        return cfgs;
    }
    /**@description 读取本地bundle配置文件 */
    readBundlesCfg() {
        let filePath = path_1.default.join(Editor.Project.path, "extensions/hotupdate/config/bundles.json");
        let bundles = {};
        if ((0, fs_extra_1.existsSync)(filePath)) {
            let data = (0, fs_extra_1.readFileSync)(filePath, "utf-8");
            let assets = JSON.parse(data);
            for (let i = 0; i < assets.length; i++) {
                var asset = assets[i];
                if (asset) {
                    var versions = this.getLocalVersions(asset.bundle, this.config.platform).sort().reverse();
                    let cfg = {
                        relative: asset.relative,
                        bundle: asset.bundle,
                        name: asset.name,
                        respaths: asset.respaths,
                        ver: asset.ver || "1.0",
                        versions: versions,
                        version: versions[0],
                        select: false,
                    };
                    bundles[cfg.bundle] = cfg;
                }
            }
        }
        return bundles;
    }
    /**@description 读取本地打包配置文件 */
    readPackageCfg() {
        let filePath = path_1.default.join(Editor.Project.path, "extensions/hotupdate/config/packagecfg.json");
        let packageCfg = [];
        if ((0, fs_extra_1.existsSync)(filePath)) {
            let data = (0, fs_extra_1.readFileSync)(filePath, "utf-8");
            let assets = JSON.parse(data);
            for (let i = 0; i < assets.length; i++) {
                var asset = assets[i];
                if (asset) {
                    let cfg = {
                        name: asset.name,
                        packageName: asset.packageName,
                        channelId: asset.channelId,
                        appId: asset.appId
                    };
                    packageCfg.push(cfg);
                }
            }
        }
        return packageCfg;
    }
    /**
     * @description 添加日志
     * @param {*} message
     * @param {*} obj
     * @returns
     */
    log(message, obj = null) {
        if (typeof obj == "function") {
            return;
        }
        if (obj) {
            console.log(message, obj);
        }
        else {
            console.log(message);
        }
    }
    setServerCfg(name) {
        let cfg = this.ServerCfgs.find((a) => a.name == name);
        if (cfg) {
            this.config.serverCfg = cfg;
            this._bundles = this.readBundlesCfg();
            Editor.Message.send(PACKAGE_NAME, "onRefresh");
        }
    }
    setPackageCfg(packageName) {
        this.config.packageCfg = this.PackageCfgs.find((a) => a.name == packageName);
        console.log("setPackageCfg ", this.config.packageCfg);
    }
    setplatform(platform) {
        this.config.platform = platform;
        for (var bundle in this.bundles) {
            var versions = this.getLocalVersions(bundle, this.config.platform).sort().reverse();
            this.bundles[bundle].versions = versions;
            this.bundles[bundle].version = versions[0];
        }
    }
    async onChangeGameConfig() {
        let prefabPath = path_1.default.join(Editor.Project.path, "assets/resources/prefabs/GameConfig.prefab");
        let prefabContent = (0, fs_extra_1.readFileSync)(prefabPath, "utf8");
        if (this.config.serverCfg.name == "正式服") {
            prefabContent = prefabContent.replace(/\"_sType\": 1/g, `\"_sType\": 0`);
        }
        else {
            prefabContent = prefabContent.replace(/\"_sType\": 0/g, `\"_sType\": 1`);
        }
        (0, fs_extra_1.writeFileSync)(prefabPath, prefabContent, { "encoding": "utf8" });
        await Editor.Message.request("asset-db", "refresh-asset", prefabPath);
    }
    //插入热更新代码
    onInsertHotupdate(dest) {
        let codePath = path_1.default.join(Editor.Project.path, "extensions/hotupdate/code/hotupdate.js");
        let code = (0, fs_extra_1.readFileSync)(codePath, "utf8");
        // console.log(code);
        let sourcePath = path_1.default.join(dest, "assets/main.js");
        sourcePath = (0, path_1.normalize)(sourcePath);
        let sourceCode = (0, fs_extra_1.readFileSync)(sourcePath, "utf8");
        let templateReplace = function templateReplace() {
            // console.log(arguments);
            return arguments[1] + code + arguments[3];
        };
        //添加子游戏测试环境版本号
        sourceCode = sourceCode.replace(/(\);)([\s\w\S]*)(const[ ]*importMapJson)/g, templateReplace);
        this.log(`向${sourcePath}中插入热更新代码`);
        (0, fs_extra_1.writeFileSync)(sourcePath, sourceCode, { "encoding": "utf8" });
    }
    //留给web用?
    onCreateAllManifest() {
        if (!this.bundles)
            return;
        let assetDir = path_1.default.join(this.config.buildDir, this.config.platform, "assets");
        for (var key in this.bundles) {
            var cfg = this.bundles[key];
            let manifest = this.onCreateManifest(cfg.bundle);
            if (manifest) {
                (0, fs_extra_1.writeFileSync)(path_1.default.join(assetDir, cfg.relative, "project.manifest"), JSON.stringify(manifest));
            }
        }
        console.log("生成包内版本文件成功...");
    }
    //获取本地
    getLocalVersions(bundle, platform) {
        var assetPath = path_1.default.join(this.buildOutPath, bundle, platform);
        if ((0, fs_extra_1.existsSync)(assetPath))
            return (0, fs_extra_1.readdirSync)(assetPath);
        return [];
    }
    getCommitUrl(info) {
        if (!info.version) {
            return undefined;
        }
        var plat = "android";
        var url = this.config.serverCfg.res_address + "?a=resMan&optype=committodb&";
        console.log(url);
        var paramDic = {};
        paramDic.pf = plat;
        paramDic.mids = plat + "_none";
        paramDic.bunldidfilter = info.bundle;
        paramDic.ver = info.version;
        paramDic.skinver = "1";
        let keys = [];
        for (let k in paramDic) {
            keys.push(k);
        }
        keys.sort((a, b) => {
            return a.localeCompare(b);
        });
        let addKey = "";
        for (let i = 0; i < keys.length; i++) {
            let v = keys[i];
            addKey = addKey + (v + "=" + paramDic[v] + "&");
        }
        addKey += "key=" + "03346b68aa44c87129438bd650f11a66";
        console.log("addKey -------->", addKey);
        var commitUrl = `params=pf,${plat}`;
        commitUrl += `|mids,${plat}_none`;
        commitUrl += `|bunldidfilter,${info.bundle}`;
        commitUrl += `|ver,${info.version}`;
        commitUrl += `|skinver,1`;
        commitUrl += `|sign,${require("crypto").createHash('md5').update(addKey).digest('hex')}`;
        url += commitUrl;
        return url;
    }
    //更改版本号
    onChangeVersion(bundle, ver) {
        ver = ver.trim();
        if (this.bundles[bundle]) {
            this.bundles[bundle].ver = ver;
            this.saveBundleCfg();
        }
    }
    //提交版本号
    onCommitVersionToServer(info) {
        let url = this.getCommitUrl(info);
        if (!url) {
            return;
        }
        this.http_get(url, (data) => {
            console.log("提交成功  " + data);
        });
    }
    //生成提交文本
    createCommitCfg(info) {
        console.log(info.version);
        let filePath = path_1.default.join(this.buildOutPath, info.bundle, this.config.platform, info.version) + "/commit.txt";
        let content = this.getCommitUrl(info);
        if (!content) {
            return;
        }
        (0, fs_extra_1.writeFileSync)(filePath, content);
        console.log("=======================生成远程配置文件成功========================");
    }
    //开放版本号
    //资源构建
    async onBuildAssetBundles() {
        if (this.config.autoCreate) {
            await this.onBuild();
        }
        this.onCreateAssetBundles();
    }
    //创建bundle
    async onCreateAssetBundles() {
        for (var key in this.bundles) {
            var cfg = this.bundles[key];
            if (cfg.select) {
                let bPath = this.onCreateBundle(cfg.bundle);
                if (this.config.serverCfg.name == "正式服" && bPath) {
                    this.createCommitCfg(cfg);
                    await Tools_1.Tools.zipDirc(bPath, cfg.bundle + "_" + cfg.version, cfg.version);
                }
            }
        }
    }
    //生成版本号
    onCreateVersion() {
        var format = (num) => {
            return num < 10 ? `0` + num : num + "";
        };
        var date = new Date();
        var year = date.getFullYear();
        var month = format(date.getMonth() + 1);
        var day = format(date.getDate());
        var hours = format(date.getHours());
        var min = format(date.getMinutes());
        var sec = format(date.getSeconds());
        return year + month + day + hours + min + sec;
    }
    //创建manifest
    onCreateManifest(bundle) {
        if (!this.bundles[bundle]) {
            return null;
        }
        let bundleCfg = this.bundles[bundle];
        let version = bundleCfg.ver + "." + this.onCreateVersion();
        let assetDir = path_1.default.join(this.config.buildDir, this.config.platform, "assets");
        let manifest = {
            assets: {},
            bundle: bundle,
            packageUrl: this.config.serverCfg.cdn_address + `/${bundle}/${version}/`,
            version: version
        };
        let relative = path_1.default.join(assetDir, bundleCfg.relative);
        for (let i = 0; i < bundleCfg.respaths.length; i++) {
            var resPath = path_1.default.join(assetDir, bundleCfg.respaths[i]);
            Tools_1.Tools.readDir(resPath, manifest.assets, relative);
        }
        return manifest;
    }
    //生成assetbundle资源
    onCreateBundle(bundle, outDir) {
        if (!this.bundles[bundle]) {
            return null;
        }
        if (bundle == PACKAGE_MAIN) {
            (0, fs_1.copyFileSync)(this.webHtmlPath, path_1.default.join(this.config.buildDir, this.config.platform, "assets/web.html"));
        }
        //生成配置文件数据
        let manifest = this.onCreateManifest(bundle);
        if (!manifest)
            return;
        //拷贝资源到输出目录
        let bundleCfg = this.bundles[bundle];
        let assetDir = path_1.default.join(this.config.buildDir, this.config.platform, "assets");
        outDir = outDir ? outDir : path_1.default.join(this.buildOutPath, bundle, this.config.platform, manifest.version);
        for (let i = 0; i < bundleCfg.respaths.length; i++) {
            var res = path_1.default.join(assetDir, bundleCfg.respaths[i]);
            var dest = path_1.default.join(outDir, bundleCfg.respaths[i]);
            Tools_1.Tools.copySourceDirToDesDir(res, bundleCfg.bundle == PACKAGE_MAIN ? dest : outDir);
        }
        if (bundle == PACKAGE_MAIN) {
            (0, fs_1.copyFileSync)(this.webHtmlPath, path_1.default.join(outDir, "web.html"));
        }
        //保存manifest到输出目录
        let projectManifestPath = path_1.default.join(outDir, `project.manifest`);
        (0, fs_extra_1.writeFileSync)(projectManifestPath, JSON.stringify(manifest));
        //更新编辑器数据
        this.bundles[bundle].versions.push(manifest.version);
        this.bundles[bundle].versions.sort().reverse();
        this.bundles[bundle].version = manifest.version;
        console.log("生成assetbundle资源成功 ", outDir);
        Editor.Message.send(PACKAGE_NAME, "onRefresh");
        return outDir;
    }
    onShowInExport(bundle) {
        let cfg = this.bundles[bundle];
        let outDir = path_1.default.join(this.buildOutPath, bundle, this.config.platform, cfg.version);
        Tools_1.Tools.showInExplorer(outDir);
    }
    //打包
    async onBuildPackage() {
        if (!this.config.packageCfg) {
            console.log("未设置打包配置！！！！！");
            return;
        }
        if (this.config.autoCreate) {
            await this.onBuild();
        }
        this.buildAndroid();
    }
    async buildAndroid() {
        if (!this.config.projectPath || !(0, fs_extra_1.existsSync)(this.config.projectPath)) {
            console.log("请设置工程目录！！！");
            return;
        }
        if (!this.config.packageCfg) {
            console.log("未设置打包配置！！！！！");
            return;
        }
        console.log("开始构建安卓工程------------>");
        console.log("拷贝资源到工程目录");
        let assetPath = path_1.default.join(this.config.projectPath, "channel/assets");
        Tools_1.Tools.delDir(assetPath);
        for (var key in this.bundles) {
            var cfg = this.bundles[key];
            if (cfg.select || cfg.bundle == PACKAGE_MAIN) {
                this.onCreateBundle(cfg.bundle, path_1.default.join(assetPath, cfg.relative));
            }
        }
        (0, fs_1.copyFile)(path_1.default.join(path_1.default.join(this.config.buildDir, this.config.platform, "assets"), "main.js"), path_1.default.join(assetPath, "main.js"), () => { });
        console.log("资源拷贝结束");
        AndroidBuilder_1.AndroidBuilder.build(this.config.packageCfg);
    }
    resetCreateProgress() {
        this._createProgress = 0;
        Editor.Message.send(PACKAGE_NAME, "updateCreateProgress", 0);
    }
    addCreateProgress() {
        this._createProgress++;
        let value = (this._createProgress / this.total) * 100;
        Editor.Message.send(PACKAGE_NAME, "updateCreateProgress", value);
    }
    remake() {
        if (os.type() !== 'Darwin') { //判断mac os平台
            return;
        }
        const projectPath = Editor.Project.path;
        const nativeIosPath = projectPath + "/native/engine/ios";
        const iosProjPath = projectPath + "/build/ios/proj";
        const resPath = projectPath + "/build/ios";
        if (!(0, fs_extra_1.existsSync)(resPath) || !(0, fs_extra_1.existsSync)(nativeIosPath)) {
            return;
        }
        const prev = path_1.default.resolve(Editor.App.path, "..");
        const cmake = prev + "/tools/cmake/bin/cmake"; //cocos目录下的cmake执行程序
        console.log(cmake);
        const cmd = cmake + " with -S " + nativeIosPath + " -GXcode -B" + iosProjPath +
            " -DCMAKE_SYSTEM_NAME=iOS -DCMAKE_CXX_COMPILER=clang++ -DCMAKE_C_COMPILER=clang -DRES_DIR=" + resPath;
        (0, child_process_1.exec)(cmd, { encoding: 'utf8' });
    }
    /**@description 删除不包含在包内的bundles */
    async onDelBundles() {
        const config = {
            title: '警告',
            detail: '',
            buttons: ['取消', '确定'],
        };
        const code = await Editor.Dialog.info('执行此操作将会删除不包含在包内的所有bundles,是否继续？', config);
        if (code.response == 1) {
            this.removeNotInApkBundle();
            this.remake();
        }
    }
    /**@description 删除不包含在包内的所有bundles */
    removeNotInApkBundle() {
        Editor.Message.send(PACKAGE_NAME, "onSetProcess", true);
        let keys = Object.keys(this.bundles);
        let removeBundles = [];
        keys.forEach((key) => {
            if (!this.bundles[key].select) {
                removeBundles.push(key);
            }
        });
        let manifests = [];
        let removeDirs = [];
        for (let i = 0; i < removeBundles.length; i++) {
            let key = removeBundles[i];
            removeDirs.push(path_1.default.join(this.config.buildDir, `assets/${key}`));
            manifests.push(path_1.default.join(this.config.buildDir, `manifest/${key}_project.json`));
            manifests.push(path_1.default.join(this.config.buildDir, `manifest/${key}_version.json`));
        }
        for (let i = 0; i < removeDirs.length; i++) {
            this.log(`删除目录 : ${removeDirs[i]}`);
            Tools_1.Tools.delDir(removeDirs[i], true);
        }
        for (let i = 0; i < manifests.length; i++) {
            this.log(`删除版本文件 : ${manifests[i]}`);
            Tools_1.Tools.delFile(manifests[i]);
        }
        Editor.Message.send(PACKAGE_NAME, "onSetProcess", false);
    }
    async upload(_source, _dest) {
        let files = (0, fs_extra_1.readdirSync)(_source);
        for (let i = 0; i < files.length; i++) {
            let filename = files[i];
            let sourcePath = _source + "/" + filename;
            let destPath = _dest + "/" + filename;
            var stats = (0, fs_1.statSync)(sourcePath);
            if (stats.isFile()) {
                let r1 = await this.client.put(destPath, sourcePath);
                console.log('put success: %j', r1);
                this.uploadCount += 1;
            }
            else {
                stats.isDirectory() && await this.upload(sourcePath, destPath);
            }
        }
    }
    async onDeployToOSS(bundle) {
        try {
            let resPath = path_1.default.join(this.buildOutPath, bundle, this.config.platform, this._bundles[bundle].version);
            if (!(0, fs_extra_1.existsSync)(resPath)) {
                console.error("资源部署失败,文件路径不存在 " + resPath);
                return;
            }
            let outPath = `hotupdate/${bundle}/${this._bundles[bundle].version}`;
            console.log("本地上传的资源路径 " + resPath);
            this.uploadCount = 0;
            await this.upload(resPath, outPath);
            console.log(`=======================Bundle: ${bundle} Version:${this._bundles[bundle].version} 上传成功 数量${this.uploadCount}===============================`);
            this.uploadCount = 0;
        }
        catch (e) {
            console.error('error: %j', e);
        }
    }
    /**
     * @description 部署
     */
    onDeployToRemote() {
        if (this.config.serverCfg.cdn_address.length <= 0) {
            this.log("[部署]请先选择本地服务器目录");
            return;
        }
        if (!(0, fs_extra_1.existsSync)(this.config.serverCfg.cdn_address)) {
            this.log(`[部署]本地测试服务器目录不存在 : ${this.config.serverCfg.cdn_address}`);
            return;
        }
        if (!(0, fs_extra_1.existsSync)(this.config.buildDir)) {
            this.log(`[部署]构建目录不存在 : ${this.config.buildDir} , 请先构建`);
            return;
        }
        Editor.Message.send(PACKAGE_NAME, "onSetProcess", true);
        let includes = []; //this.mainBundleIncludes;
        let temps = [];
        for (let i = 0; i < includes.length; i++) {
            //只保留根目录
            let dir = includes[i];
            let index = dir.search(/\\|\//);
            if (index == -1) {
                if (temps.indexOf(dir) == -1) {
                    temps.push(dir);
                }
            }
            else {
                dir = dir.substr(0, index);
                if (temps.indexOf(dir) == -1) {
                    temps.push(dir);
                }
            }
        }
        let copyDirs = ["manifest"].concat(temps);
        for (let i = 0; i < copyDirs.length; i++) {
            let dir = path_1.default.join(this.config.buildDir, copyDirs[i]);
            if (!(0, fs_extra_1.existsSync)(dir)) {
                this.log(`${this.config.buildDir} [部署]不存在${copyDirs[i]}目录,无法拷贝文件`);
                return;
            }
        }
        this.log(`[部署]开始拷贝文件到 : ${this.config.serverCfg.cdn_address}`);
        this.resetProgress();
        this.log(`[部署]删除旧目录 : ${this.config.serverCfg.cdn_address}`);
        let count = Tools_1.Tools.getDirFileCount(this.config.serverCfg.cdn_address);
        this.log(`[部署]删除文件个数:${count}`);
        Tools_1.Tools.delDir(this.config.serverCfg.cdn_address);
        count = 0;
        for (let i = 0; i < copyDirs.length; i++) {
            let dir = path_1.default.join(this.config.buildDir, copyDirs[i]);
            count += Tools_1.Tools.getDirFileCount(dir);
        }
        //压缩文件数量
        let zipPath = Editor.Project.path + "/PackageVersion";
        count += Tools_1.Tools.getDirFileCount(zipPath);
        this.log(`[部署]复制文件个数 : ${count}`);
        for (let i = 0; i < copyDirs.length; i++) {
            let source = path_1.default.join(this.config.buildDir, copyDirs[i]);
            let dest = path_1.default.join(this.config.serverCfg.cdn_address, copyDirs[i]);
            this.log(`[部署]复制${source} => ${dest}`);
            Tools_1.Tools.copySourceDirToDesDir(source, dest, () => {
                this.addProgress();
            });
        }
        let remoteZipPath = path_1.default.join(this.config.serverCfg.cdn_address, "zips");
        Tools_1.Tools.delDir(remoteZipPath);
        //部署压缩文件
        this.log(`[部署]复制${zipPath} => ${remoteZipPath}`);
        Tools_1.Tools.copySourceDirToDesDir(zipPath, remoteZipPath, () => {
            this.addProgress();
        });
    }
    /**
     * @description 构建
     */
    onBuild() {
        this.onChangeGameConfig();
        return new Promise((resolve, reject) => {
            let buildConfig = `configPath=${this.buildConfigPath}`;
            console.log("buildConfig  " + buildConfig);
            let cmd = `${this.config.enginePath} --project "${Editor.Project.path}" --build ${buildConfig}`;
            console.log("CMD: " + cmd);
            console.log("===================================构建发布 Start================================");
            (0, child_process_1.exec)(cmd, { encoding: `utf8` }, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    //return;
                }
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
                console.log("===================================构建发布 End================================");
                resolve(0);
            });
        });
    }
    addProgress() {
        this._progress++;
        let value = (this._progress / this.total) * 100;
        if (value >= 100) {
            Editor.Message.send(PACKAGE_NAME, "onSetProcess", false);
        }
        Editor.Message.send(PACKAGE_NAME, "updateDeployProgress", value);
    }
    resetProgress() {
        this._progress = 0;
        Editor.Message.send(PACKAGE_NAME, "updateDeployProgress", 0);
    }
    onBeforeBuild() {
        console.log("onBeforeBuild---------------------->");
        this.resetProgress();
        this.resetCreateProgress();
        Editor.Message.send(PACKAGE_NAME, "onSetProcess", true);
    }
    onAfterBuild(dest) {
        console.log("onAfterBuild---------------------->", dest);
        //this.onCreateAllManifest(dest)
        this.onInsertHotupdate(dest);
        this.readCacheConfig();
        //this.config.buildDir = normalize(join(dest, "assets"));
        Editor.Message.send(PACKAGE_NAME, "onSetBuildDir", this.config.buildDir);
        this.saveConfig();
    }
    onPngCompressComplete() {
        this.readCacheConfig();
    }
    http_get(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (callback) {
                        callback(xhr.responseText);
                    }
                }
                else {
                    console.warn("http request error:", xhr.responseText);
                }
            }
        };
        xhr.timeout = 5000;
        xhr.ontimeout = function (e) {
            xhr.abort();
            console.error("http request timeout:", e);
        };
        xhr.open("GET", url, true);
        xhr.send();
    }
}
exports.helper = new Helper();
