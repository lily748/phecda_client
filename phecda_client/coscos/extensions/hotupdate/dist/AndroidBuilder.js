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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndroidBuilder = void 0;
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const os = __importStar(require("os"));
const util_1 = require("util");
const Tools_1 = require("./Tools");
const exec_promisify = (0, util_1.promisify)(child_process_1.exec);
//游戏包名  
class _AndroidBuilder {
    constructor() {
        this.projectPath = "";
        this.channelCurPath = "";
    }
    get channelRootPath() {
        return path_1.default.join(this.projectPath, "channel");
    }
    async build(cfg) {
        this.packageCfg = cfg;
        console.log("================================开始构建安卓工程=========================", cfg);
        console.log("工程目录" + this.projectPath);
        this.channelCurPath = path_1.default.join(this.channelRootPath, this.packageCfg.packageName);
        this.createChannel();
        await this.handleKeystore(this.channelCurPath);
        this.handleChannelCfg(this.channelCurPath);
        await this.buildPackage();
        this.ReNameApp();
    }
    createChannel() {
        if (!this.packageCfg)
            return;
        if ((0, fs_1.existsSync)(this.channelCurPath))
            Tools_1.Tools.delDir(this.channelCurPath);
        Tools_1.Tools.copySourceDirToDesDir(path_1.default.join(this.channelRootPath, "template"), this.channelCurPath);
        var settingsPath = path_1.default.join(this.projectPath, "settings.gradle");
        var content = `include ':libcocos', ':libservice',':channel:template'\nrootProject.name = "channel"`;
        content = content.replace(`template`, this.packageCfg.packageName);
        console.log("Settings  ", content);
        (0, fs_1.writeFileSync)(settingsPath, content, { "encoding": "utf8" });
    }
    //处理manifest
    handleChannelCfg(channelPath) {
        if (!this.packageCfg)
            return;
        //修改渠道 包名信息
        var manifestPath = path_1.default.join(channelPath, "AndroidManifest.xml");
        if ((0, fs_1.existsSync)(manifestPath)) {
            console.log("存在！！！");
        }
        else {
            console.log("不存在");
        }
        var content = (0, fs_1.readFileSync)(manifestPath, { "encoding": "utf8" });
        console.log("manifest.xml ", content);
        content = content.replace(/com.xxx.xxx/g, `${this.packageCfg.packageName}`);
        content = content.replace("CHANNEL_VALUE", `1`);
        (0, fs_1.writeFileSync)(manifestPath, content, { "encoding": "utf8" });
        //替换应用名称
        var stringsPath = path_1.default.join(channelPath, "res/values/strings.xml");
        content = (0, fs_1.readFileSync)(stringsPath, { "encoding": "utf8" });
        content = content.replace("测试包", `${this.packageCfg.name}`);
        //替换facebook配置
        // if(this.packageCfg.facebookId){
        //     content = content.replace("FacebookId", `${this.packageCfg.facebookId}`)
        //     content = content.replace("FacebookScheme", `fb${this.packageCfg.facebookId}`)
        //     content = content.replace("FacebookToken", `fb${this.packageCfg.facebookToken}`)
        // }
        (0, fs_1.writeFileSync)(stringsPath, content, { "encoding": "utf8" });
        console.log("=================================处理manifest.xml=====================================");
    }
    //处理秘钥
    async handleKeystore(channelPath) {
        if (!this.packageCfg)
            return;
        var keystorePath = path_1.default.join(channelPath, "../keystore");
        var keyName = this.packageCfg.packageName + this.packageCfg.channelId;
        if ((0, fs_1.existsSync)(path_1.default.join(keystorePath, keyName))) {
            return;
        }
        else {
            console.log("路径：" + keystorePath);
            var cmd = (os.type() == 'Windows_NT') ? "keystore.bat" : "keystore.sh";
            if (os.type() == 'Windows_NT')
                await exec_promisify(`"${cmd}" ${keyName}`, { cwd: `${keystorePath}`, encoding: 'utf8' });
            else {
                await exec_promisify(`${keystorePath}/${cmd} ${keyName}`, { cwd: `${keystorePath}`, encoding: 'utf8' });
            }
            console.log("生成秘钥成功： " + keyName);
        }
        var gradlePath = path_1.default.join(channelPath, "build.gradle");
        var content = (0, fs_1.readFileSync)(gradlePath, { "encoding": "utf8" });
        content = content.replace("APPLICATION_ID", `"${this.packageCfg.packageName}"`);
        content = content.replace("RELEASE_STORE_FILE", `"../keystore/keystores/${keyName}.keystore"`);
        content = content.replace("RELEASE_KEY_ALIAS", `"${keyName}"`);
        (0, fs_1.writeFileSync)(gradlePath, content, { "encoding": "utf8" });
    }
    //开始构建
    async buildPackage() {
        if (!this.projectPath || !(0, fs_1.existsSync)(this.projectPath)) {
            console.log("请设置工程目录！！！");
            return;
        }
        console.log("开始构建安卓工程------------>");
        var cmd = (os.type() == 'Windows_NT') ? "gradlew.bat" : "gradlew";
        if (os.type() == 'Windows_NT') {
            await exec_promisify(`${cmd} assembleRelease`, { cwd: `${this.projectPath}`, encoding: 'utf8' });
        }
        else {
            console.log("=========>Mac  构建" + this.projectPath);
            await exec_promisify(`./${cmd} assembleRelease`, { cwd: `${this.projectPath}`, encoding: 'utf8' });
        }
        console.log("打包成功");
    }
    //重名名APK
    ReNameApp() {
        if (!this.packageCfg)
            return;
        var apkDir = path_1.default.join(this.projectPath, "apk");
        if (!(0, fs_1.existsSync)(apkDir)) {
            Tools_1.Tools.mkdirSync(apkDir);
        }
        var oldApk = path_1.default.join(this.channelRootPath, `build/outputs/apk/release/${this.packageCfg.packageName}-release.apk`);
        var newApk = path_1.default.join(apkDir, `${this.packageCfg.name}.apk`);
        (0, fs_1.renameSync)(oldApk, newApk);
        Tools_1.Tools.delFile(oldApk);
        console.log(`APK 重命名成功  `, this.packageCfg.name);
        console.log("================================构建安卓工程结束=========================");
        Tools_1.Tools.showInExplorer(apkDir);
    }
}
exports.AndroidBuilder = new _AndroidBuilder();
