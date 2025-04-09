import { existsSync, mkdirpSync, readdir, readdirSync, readFile, readFileSync, writeFileSync } from 'fs-extra';
import path, { join, normalize, relative, resolve } from 'path';
import { Tools } from './Tools';
import * as os from "os"
import { exec } from "child_process";
import { accessSync, copyFile, copyFileSync, statSync, writeFile } from 'fs';
import { promisify } from 'util';
import { AndroidBuilder } from './AndroidBuilder';
let OSS = require("ali-oss")
const PACKAGE_MAIN = "main"
const PACKAGE_NAME = "hotupdate";
const exec_promisify = promisify(exec);

class Helper {
    constructor() {
        this.readCacheConfig()
        this._config.buildDir = path.join(Editor.Project.path, "build")
        this._config.outDir = path.join(Editor.Project.path, "build/assetsbundle")
        AndroidBuilder.projectPath = this.config.projectPath;
    }

    private _config: HotupdateConfig = null!
    get config() {
        if (!this._config) {
            this.readCacheConfig();
        }
        return this._config;
    }
    set config(v) {
        this._config = v;
    }

    private _bundles: { [key: string]: BundleCfg } | null = null;
    get bundles() {
        if (!this._bundles) {
            this._bundles = this.readBundlesCfg();
        }
        return this._bundles;
    }

    //游戏打包配置
    private _packageCfg: PackageCfg[] | null = null
    get PackageCfgs() {
        if (!this._packageCfg) {
            this._packageCfg = this.readPackageCfg();
        }
        return this._packageCfg;
    }
    //游戏服务器配置
    private _serverCfgs: ServerCfg[] | null = null
    get ServerCfgs() {
        if (!this._serverCfgs) {
            this._serverCfgs = this.readServerCfg();
        }
        return this._serverCfgs;
    }

    private get buildOutPath() {
        if (this.config.serverCfg.name == "正式服") {
            return path.join(this._config.outDir, "publish")
        }
        else {
            return path.join(this._config.outDir, "test")
        }
    }

    //获取缓存配置
    private get userCachePath() {
        return path.join(Editor.Project.path, "extensions/hotupdate/config/localCache.json");
    }

    //获取对应平台的buildconfig
    private get buildConfigPath() {
        return path.join(Editor.Project.path, `extensions/hotupdate/config/buildConfig_${this.config.platform}.json`)
    }

    private get webHtmlPath() {
        return path.join(Editor.Project.path, `extensions/hotupdate/config/web.html`)
    }

    public setProjectPath(path: string) {
        this.config.projectPath = path;
        AndroidBuilder.projectPath = path;
        this.saveConfig();
    }

    /**@description 保存当前用户设置 */
    saveConfig() {
        let cacheString = JSON.stringify(this.config);
        writeFileSync(this.userCachePath, cacheString);
        // this.addLog(`写入缓存 :`, this.userCache);
    }

    saveBundleCfg(){
        let cfg = []
        for(var key in this.bundles){
            let info = this.bundles[key]
            let vo = {
                name : info.name,
                bundle :info.bundle,
                relative:info.relative,
                respaths:info.respaths,
                ver:info.ver
            }
            cfg.push(vo)
        }
        let filePath = path.join(Editor.Project.path, "extensions/hotupdate/config/bundles.json");
        writeFileSync(filePath, JSON.stringify(cfg), { "encoding": "utf8" });
    }

    /**@description 读取本地缓存 */
    readCacheConfig() {
        if (existsSync(this.userCachePath)) {
            let data = readFileSync(this.userCachePath, "utf-8")
            this._config = JSON.parse(data);
        } else {
            this._config = new HotupdateConfig();
        }

        if (this._config.serverCfg) {
            let name = this._config.serverCfg.name;
            for (let i = 0; i < this.ServerCfgs.length; i++) {
                if (this.ServerCfgs[i].name == name) {
                    this._config.serverCfg = this.ServerCfgs[i]
                    break;
                }
            }
        }
        else {
            this._config.serverCfg = this.ServerCfgs[0];
        }
    }

    readServerCfg() {
        let filePath = path.join(Editor.Project.path, `extensions/hotupdate/config/servercfg.json`)
        let cfgs: ServerCfg[] = []
        if (existsSync(filePath)) {
            let data = readFileSync(filePath, "utf-8")
            cfgs = JSON.parse(data)
        }
        return cfgs
    }

    /**@description 读取本地bundle配置文件 */
    readBundlesCfg() {
        let filePath = path.join(Editor.Project.path, "extensions/hotupdate/config/bundles.json");
        let bundles: { [key: string]: BundleCfg } = {}
        if (existsSync(filePath)) {
            let data = readFileSync(filePath, "utf-8")
            let assets = JSON.parse(data);
            for (let i = 0; i < assets.length; i++) {
                var asset = assets[i]
                if (asset) {      
                    var versions = this.getLocalVersions(asset.bundle, this.config.platform).sort().reverse()
                    let cfg: BundleCfg = {
                        relative: asset.relative,
                        bundle: asset.bundle,
                        name: asset.name,
                        respaths: asset.respaths,
                        ver: asset.ver||"1.0",
                        versions: versions,
                        version: versions[0],
                        select: false,
                    }
                    
                    bundles[cfg.bundle] = cfg
                }
            }
        }
        return bundles;
    }
    /**@description 读取本地打包配置文件 */
    readPackageCfg() {
        let filePath = path.join(Editor.Project.path, "extensions/hotupdate/config/packagecfg.json")
        let packageCfg: PackageCfg[] = []
        if (existsSync(filePath)) {
            let data = readFileSync(filePath, "utf-8")
            let assets = JSON.parse(data);
            for (let i = 0; i < assets.length; i++) {
                var asset = assets[i]
                if (asset) {

                    let cfg: PackageCfg = {
                        name: asset.name,
                        packageName: asset.packageName,
                        channelId: asset.channelId,
                        appId: asset.appId
                    }
                    packageCfg.push(cfg)
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
    log(message: any, obj: any = null) {
        if (typeof obj == "function") {
            return;
        }
        if (obj) {
            console.log(message, obj);
        } else {
            console.log(message);
        }
    }

    setServerCfg(name: string) {
        let cfg = this.ServerCfgs.find((a) => a.name == name)
        if (cfg) {
            this.config.serverCfg = cfg;
            this._bundles = this.readBundlesCfg()
            Editor.Message.send(PACKAGE_NAME, "onRefresh");
        }
    }

    setPackageCfg(packageName: string) {
        this.config.packageCfg = this.PackageCfgs.find((a) => a.name == packageName)
        console.log("setPackageCfg ", this.config.packageCfg)
    }

    setplatform(platform: string) {
        this.config.platform = platform;
        for (var bundle in this.bundles) {
            var versions = this.getLocalVersions(bundle, this.config.platform).sort().reverse()
            this.bundles[bundle].versions = versions;
            this.bundles[bundle].version = versions[0];
        }
    }

    private async onChangeGameConfig() {
        let prefabPath = path.join(Editor.Project.path, "assets/resources/prefabs/GameConfig.prefab");
        let prefabContent = readFileSync(prefabPath, "utf8");
        if (this.config.serverCfg.name == "正式服") {
            prefabContent = prefabContent.replace(/\"_sType\": 1/g, `\"_sType\": 0`)
        }
        else {
            prefabContent = prefabContent.replace(/\"_sType\": 0/g, `\"_sType\": 1`)
        }
        writeFileSync(prefabPath, prefabContent, { "encoding": "utf8" });

        await Editor.Message.request("asset-db", "refresh-asset", prefabPath);
    }

    //插入热更新代码
    private onInsertHotupdate(dest: string) {
        let codePath = path.join(Editor.Project.path, "extensions/hotupdate/code/hotupdate.js");
        let code = readFileSync(codePath, "utf8");
        // console.log(code);
        let sourcePath = path.join(dest, "assets/main.js");
        sourcePath = normalize(sourcePath);
        let sourceCode = readFileSync(sourcePath, "utf8");
        let templateReplace = function templateReplace() {
            // console.log(arguments);
            return arguments[1] + code + arguments[3];
        }
        //添加子游戏测试环境版本号
        sourceCode = sourceCode.replace(/(\);)([\s\w\S]*)(const[ ]*importMapJson)/g, templateReplace);
        this.log(`向${sourcePath}中插入热更新代码`);
        writeFileSync(sourcePath, sourceCode, { "encoding": "utf8" });
    }

    //留给web用?
    onCreateAllManifest() {
        if (!this.bundles)
            return;
        let assetDir = path.join(this.config.buildDir, this.config.platform, "assets")
        for (var key in this.bundles) {
            var cfg = this.bundles[key]
            let manifest = this.onCreateManifest(cfg.bundle)
            if (manifest) {
                writeFileSync(path.join(assetDir, cfg.relative, "project.manifest"), JSON.stringify(manifest));
            }
        }
        console.log("生成包内版本文件成功...")
    }

    //获取本地
    getLocalVersions(bundle: string, platform: string) {
        var assetPath = path.join(this.buildOutPath, bundle, platform)
        if (existsSync(assetPath))
            return readdirSync(assetPath);
        return [];
    }

    getCommitUrl(info: BundleCfg): string | undefined {
        if (!info.version) {
            return undefined;
        }
        var plat = "android"
        var url = this.config.serverCfg.res_address + "?a=resMan&optype=committodb&";
        console.log(url)
        var paramDic: { [key: string]: string } = {};
        paramDic.pf = plat;
        paramDic.mids = plat + "_none"
        paramDic.bunldidfilter = info.bundle
        paramDic.ver = info.version
        paramDic.skinver = "1"

        let keys = []
        for (let k in paramDic) {
            keys.push(k)
        }
        keys.sort((a: string, b: string) => {
            return a.localeCompare(b)
        })
        let addKey = ""
        for (let i = 0; i < keys.length; i++) {
            let v = keys[i]
            addKey = addKey + (v + "=" + paramDic[v] + "&")
        }
        addKey += "key=" + "03346b68aa44c87129438bd650f11a66";
        console.log("addKey -------->", addKey)

        var commitUrl = `params=pf,${plat}`
        commitUrl += `|mids,${plat}_none`
        commitUrl += `|bunldidfilter,${info.bundle}`
        commitUrl += `|ver,${info.version}`
        commitUrl += `|skinver,1`
        commitUrl += `|sign,${require("crypto").createHash('md5').update(addKey).digest('hex')}`
        url += commitUrl;
        return url;
    }
    //更改版本号
    onChangeVersion(bundle: string, ver: string) {
        ver = ver.trim();
        if (this.bundles[bundle]) {
            this.bundles[bundle].ver = ver;
            this.saveBundleCfg()
        }
    }
    //提交版本号
    onCommitVersionToServer(info: BundleCfg) {
        let url = this.getCommitUrl(info);
        if (!url) {
            return
        }
        this.http_get(url, (data: string) => {
            console.log("提交成功  " + data)
        })
    }

    //生成提交文本
    public createCommitCfg(info: BundleCfg) {
        console.log(info.version)
        let filePath = path.join(this.buildOutPath, info.bundle, this.config.platform, info.version) + "/commit.txt"
        let content = this.getCommitUrl(info);
        if (!content) {
            return;
        }
        writeFileSync(filePath, content)
        console.log("=======================生成远程配置文件成功========================")
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
    private async onCreateAssetBundles() {
        for (var key in this.bundles) {
            var cfg = this.bundles[key]
            if (cfg.select) {
                let bPath = this.onCreateBundle(cfg.bundle)
                if (this.config.serverCfg.name == "正式服" && bPath) {
                    this.createCommitCfg(cfg)
                    await Tools.zipDirc(bPath, cfg.bundle + "_" + cfg.version, cfg.version)
                }
            }
        }
    }

    //生成版本号
    onCreateVersion() {
        var format = (num: number) => {
            return num < 10 ? `0` + num : num + ""
        }
        var date = new Date()
        var year = date.getFullYear();
        var month = format(date.getMonth() + 1)
        var day = format(date.getDate())
        var hours = format(date.getHours())
        var min = format(date.getMinutes())
        var sec = format(date.getSeconds())
        return year + month + day + hours + min + sec;
    }

    //创建manifest
    onCreateManifest(bundle: string) {
        if (!this.bundles[bundle]) {
            return null
        }
        let bundleCfg = this.bundles[bundle]

        let version = bundleCfg.ver + "." + this.onCreateVersion();
        let assetDir = path.join(this.config.buildDir, this.config.platform, "assets")

        let manifest: Manifest = {
            assets: {},
            bundle: bundle,
            packageUrl: this.config.serverCfg.cdn_address + `/${bundle}/${version}/`,
            version: version
        };
        let relative = path.join(assetDir, bundleCfg.relative)
        for (let i = 0; i < bundleCfg.respaths.length; i++) {
            var resPath = path.join(assetDir, bundleCfg.respaths[i])
            Tools.readDir(resPath, manifest.assets, relative);
        }
        return manifest
    }

    //生成assetbundle资源
    onCreateBundle(bundle: string, outDir?: string) {
        if (!this.bundles[bundle]) {
            return null
        }
        if (bundle == PACKAGE_MAIN) {
            copyFileSync(this.webHtmlPath, path.join(this.config.buildDir, this.config.platform, "assets/web.html"))
        }
        //生成配置文件数据
        let manifest = this.onCreateManifest(bundle)
        if (!manifest)
            return;

        //拷贝资源到输出目录
        let bundleCfg = this.bundles[bundle]
        let assetDir = path.join(this.config.buildDir, this.config.platform, "assets")
        outDir = outDir ? outDir : path.join(this.buildOutPath, bundle, this.config.platform, manifest.version)
        for (let i = 0; i < bundleCfg.respaths.length; i++) {
            var res = path.join(assetDir, bundleCfg.respaths[i])
            var dest = path.join(outDir, bundleCfg.respaths[i])
            Tools.copySourceDirToDesDir(res, bundleCfg.bundle == PACKAGE_MAIN ? dest : outDir)
        }

        if (bundle == PACKAGE_MAIN) {
            copyFileSync(this.webHtmlPath, path.join(outDir, "web.html"))
        }
        //保存manifest到输出目录
        let projectManifestPath = path.join(outDir, `project.manifest`);
        writeFileSync(projectManifestPath, JSON.stringify(manifest));

        //更新编辑器数据
        this.bundles[bundle].versions.push(manifest.version)
        this.bundles[bundle].versions.sort().reverse();
        this.bundles[bundle].version = manifest.version


        console.log("生成assetbundle资源成功 ", outDir)
        Editor.Message.send(PACKAGE_NAME, "onRefresh");
        return outDir;
    }

    public onShowInExport(bundle: string) {
        let cfg = this.bundles[bundle]
        let outDir = path.join(this.buildOutPath, bundle, this.config.platform, cfg.version)
        Tools.showInExplorer(outDir)
    }

    //打包
    async onBuildPackage() {
        if (!this.config.packageCfg) {
            console.log("未设置打包配置！！！！！")
            return;
        }
        if (this.config.autoCreate) {
            await this.onBuild()
        }
        this.buildAndroid();
    }

    private async buildAndroid() {
        if (!this.config.projectPath || !existsSync(this.config.projectPath)) {
            console.log("请设置工程目录！！！")
            return;
        }
        if (!this.config.packageCfg) {
            console.log("未设置打包配置！！！！！")
            return;
        }
        console.log("开始构建安卓工程------------>")
        console.log("拷贝资源到工程目录")
        let assetPath = path.join(this.config.projectPath, "channel/assets")
        Tools.delDir(assetPath)
        for (var key in this.bundles) {
            var cfg = this.bundles[key]
            if (cfg.select || cfg.bundle == PACKAGE_MAIN) {
                this.onCreateBundle(cfg.bundle, path.join(assetPath, cfg.relative))
            }
        }
        copyFile(path.join(path.join(this.config.buildDir, this.config.platform, "assets"), "main.js"), path.join(assetPath, "main.js"), () => { })
        console.log("资源拷贝结束")
        AndroidBuilder.build(this.config.packageCfg)
    }

    private _createProgress = 0;
    private resetCreateProgress() {
        this._createProgress = 0;
        Editor.Message.send(PACKAGE_NAME, "updateCreateProgress", 0);
    }
    private addCreateProgress() {
        this._createProgress++;
        let value = (this._createProgress / this.total) * 100;
        Editor.Message.send(PACKAGE_NAME, "updateCreateProgress", value);
    }

    private remake() {
        if (os.type() !== 'Darwin') {//判断mac os平台
            return
        }
        const projectPath = Editor.Project.path
        const nativeIosPath = projectPath + "/native/engine/ios"
        const iosProjPath = projectPath + "/build/ios/proj"
        const resPath = projectPath + "/build/ios"
        if (!existsSync(resPath) || !existsSync(nativeIosPath)) {
            return;
        }
        const prev = path.resolve(Editor.App.path, "..")
        const cmake = prev + "/tools/cmake/bin/cmake"//cocos目录下的cmake执行程序
        console.log(cmake)
        const cmd = cmake + " with -S " + nativeIosPath + " -GXcode -B" + iosProjPath +
            " -DCMAKE_SYSTEM_NAME=iOS -DCMAKE_CXX_COMPILER=clang++ -DCMAKE_C_COMPILER=clang -DRES_DIR=" + resPath
        exec(cmd, { encoding: 'utf8' });
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
            this.remake()
        }
    }

    /**@description 删除不包含在包内的所有bundles */
    private removeNotInApkBundle() {
        Editor.Message.send(PACKAGE_NAME, "onSetProcess", true);
        let keys = Object.keys(this.bundles);
        let removeBundles: string[] = [];
        keys.forEach((key) => {
            if (!this.bundles[key].select) {
                removeBundles.push(key);
            }
        });
        let manifests = [];
        let removeDirs = [];
        for (let i = 0; i < removeBundles.length; i++) {
            let key = removeBundles[i];
            removeDirs.push(path.join(this.config.buildDir, `assets/${key}`));
            manifests.push(path.join(this.config.buildDir, `manifest/${key}_project.json`));
            manifests.push(path.join(this.config.buildDir, `manifest/${key}_version.json`));
        }

        for (let i = 0; i < removeDirs.length; i++) {
            this.log(`删除目录 : ${removeDirs[i]}`);
            Tools.delDir(removeDirs[i], true);
        }

        for (let i = 0; i < manifests.length; i++) {
            this.log(`删除版本文件 : ${manifests[i]}`);
            Tools.delFile(manifests[i]);
        }
        Editor.Message.send(PACKAGE_NAME, "onSetProcess", false);
    }

    private client = new OSS({
        region: '11game',
        accessKeyId: 'AKIASCQHTOSZPACPZ64K',
        accessKeySecret: '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',
        bucket: 'ap-south-1'
    });
    public uploadCount: number = 0
    async upload(_source: string, _dest: string) {
        let files = readdirSync(_source);
        for (let i = 0; i < files.length; i++) {
            let filename = files[i]
            let sourcePath = _source + "/" + filename;
            let destPath = _dest + "/" + filename;
            var stats = statSync(sourcePath)
            if (stats.isFile()) {
                let r1 = await this.client.put(destPath, sourcePath);
                console.log('put success: %j', r1);
                this.uploadCount += 1
            }
            else {
                stats.isDirectory() && await this.upload(sourcePath, destPath)
            }
        }
    }

    async onDeployToOSS(bundle: string) {
        try {
            let resPath = path.join(this.buildOutPath, bundle, this.config.platform, this._bundles![bundle].version)
            if (!existsSync(resPath)) {
                console.error("资源部署失败,文件路径不存在 " + resPath)
                return;
            }
            let outPath = `hotupdate/${bundle}/${this._bundles![bundle].version}`
            console.log("本地上传的资源路径 " + resPath)
            this.uploadCount = 0
            await this.upload(resPath, outPath)
            console.log(`=======================Bundle: ${bundle} Version:${this._bundles![bundle].version} 上传成功 数量${this.uploadCount}===============================`)
            this.uploadCount = 0
        } catch (e) {
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
        if (!existsSync(this.config.serverCfg.cdn_address)) {
            this.log(`[部署]本地测试服务器目录不存在 : ${this.config.serverCfg.cdn_address}`);
            return;
        }
        if (!existsSync(this.config.buildDir)) {
            this.log(`[部署]构建目录不存在 : ${this.config.buildDir} , 请先构建`);
            return;
        }
        Editor.Message.send(PACKAGE_NAME, "onSetProcess", true);
        let includes: string[] = [] //this.mainBundleIncludes;

        let temps = [];
        for (let i = 0; i < includes.length; i++) {
            //只保留根目录
            let dir = includes[i];
            let index = dir.search(/\\|\//);
            if (index == -1) {
                if (temps.indexOf(dir) == -1) {
                    temps.push(dir);
                }
            } else {
                dir = dir.substr(0, index);
                if (temps.indexOf(dir) == -1) {
                    temps.push(dir);
                }
            }
        }

        let copyDirs = ["manifest"].concat(temps);
        for (let i = 0; i < copyDirs.length; i++) {
            let dir = path.join(this.config.buildDir, copyDirs[i]);
            if (!existsSync(dir)) {
                this.log(`${this.config.buildDir} [部署]不存在${copyDirs[i]}目录,无法拷贝文件`);
                return;
            }
        }

        this.log(`[部署]开始拷贝文件到 : ${this.config.serverCfg.cdn_address}`);
        this.resetProgress();
        this.log(`[部署]删除旧目录 : ${this.config.serverCfg.cdn_address}`);
        let count = Tools.getDirFileCount(this.config.serverCfg.cdn_address);
        this.log(`[部署]删除文件个数:${count}`);
        Tools.delDir(this.config.serverCfg.cdn_address);

        count = 0;
        for (let i = 0; i < copyDirs.length; i++) {
            let dir = path.join(this.config.buildDir, copyDirs[i]);
            count += Tools.getDirFileCount(dir);
        }

        //压缩文件数量
        let zipPath = Editor.Project.path + "/PackageVersion";
        count += Tools.getDirFileCount(zipPath);

        this.log(`[部署]复制文件个数 : ${count}`);

        for (let i = 0; i < copyDirs.length; i++) {
            let source = path.join(this.config.buildDir, copyDirs[i]);
            let dest = path.join(this.config.serverCfg.cdn_address, copyDirs[i]);
            this.log(`[部署]复制${source} => ${dest}`);
            Tools.copySourceDirToDesDir(source, dest, () => {
                this.addProgress();
            });
        }

        let remoteZipPath = path.join(this.config.serverCfg.cdn_address, "zips");
        Tools.delDir(remoteZipPath);

        //部署压缩文件
        this.log(`[部署]复制${zipPath} => ${remoteZipPath}`);
        Tools.copySourceDirToDesDir(zipPath, remoteZipPath, () => {
            this.addProgress();
        });

    }

    /**
     * @description 构建
     */
    onBuild() {
        this.onChangeGameConfig();
        return new Promise((resolve, reject) => {
            let buildConfig = `configPath=${this.buildConfigPath}`
            console.log("buildConfig  " + buildConfig)
            let cmd = `${this.config.enginePath} --project "${Editor.Project.path}" --build ${buildConfig}`
            console.log("CMD: " + cmd)
            console.log("===================================构建发布 Start================================")
            exec(cmd, { encoding: `utf8` }, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    //return;
                }
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`)
                console.log("===================================构建发布 End================================")
                resolve(0)
            })
        })

    }


    /**@description 进度总数 */
    private total = 1;
    private addProgress() {
        this._progress++;
        let value = (this._progress / this.total) * 100;
        if (value >= 100) {
            Editor.Message.send(PACKAGE_NAME, "onSetProcess", false);
        }
        Editor.Message.send(PACKAGE_NAME, "updateDeployProgress", value);
    }
    private _progress = 0;
    private resetProgress() {
        this._progress = 0;
        Editor.Message.send(PACKAGE_NAME, "updateDeployProgress", 0);
    }


    onBeforeBuild() {
        console.log("onBeforeBuild---------------------->")
        this.resetProgress();
        this.resetCreateProgress();
        Editor.Message.send(PACKAGE_NAME, "onSetProcess", true);
    }

    onAfterBuild(dest: string) {
        console.log("onAfterBuild---------------------->", dest)
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

    http_get(url: string, callback?: any) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (callback) {
                        callback(xhr.responseText)
                    }
                } else {
                    console.warn("http request error:", xhr.responseText)
                }
            }
        };
        xhr.timeout = 5000
        xhr.ontimeout = function (e) {
            xhr.abort()
            console.error("http request timeout:", e)
        }
        xhr.open("GET", url, true);
        xhr.send();
    }
}

export const helper = new Helper();