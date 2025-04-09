import { exec } from "child_process";
import { copyFile, existsSync, readFileSync, renameSync, writeFileSync } from "fs"
import path from "path"
import * as os from "os"
import { promisify } from "util";
import { Tools } from "./Tools"
const exec_promisify = promisify(exec);

//游戏包名  
class _AndroidBuilder {
    projectPath: string = ""
    private get channelRootPath(): string {
        return path.join(this.projectPath, "channel")
    }
    channelCurPath: string = ""

    packageCfg?: PackageCfg;
    public async build(cfg: PackageCfg) {
        this.packageCfg = cfg;
        console.log("================================开始构建安卓工程=========================", cfg)
        console.log("工程目录" + this.projectPath)
        this.channelCurPath = path.join(this.channelRootPath, this.packageCfg.packageName)
        this.createChannel();
        await this.handleKeystore(this.channelCurPath)
        this.handleChannelCfg(this.channelCurPath)
        await this.buildPackage()
        this.ReNameApp();
    }

    private createChannel() {
        if (!this.packageCfg) return;
        if (existsSync(this.channelCurPath))
            Tools.delDir(this.channelCurPath)
        Tools.copySourceDirToDesDir(path.join(this.channelRootPath, "template"), this.channelCurPath)

        var settingsPath = path.join(this.projectPath, "settings.gradle",)
        var content: string = `include ':libcocos', ':libservice',':channel:template'\nrootProject.name = "channel"`
        content = content.replace(`template`, this.packageCfg.packageName)
        console.log("Settings  ", content)
        writeFileSync(settingsPath, content, { "encoding": "utf8" })
    }

    //处理manifest
    private handleChannelCfg(channelPath: string) {
        if (!this.packageCfg)
            return;

        //修改渠道 包名信息
        var manifestPath = path.join(channelPath, "AndroidManifest.xml",)
        if (existsSync(manifestPath)) {
            console.log("存在！！！")
        }
        else {
            console.log("不存在")
        }
        var content: string = readFileSync(manifestPath, { "encoding": "utf8" })
        console.log("manifest.xml ", content)
        content = content.replace(/com.xxx.xxx/g, `${this.packageCfg.packageName}`)
        content = content.replace("CHANNEL_VALUE", `1`)
        writeFileSync(manifestPath, content, { "encoding": "utf8" })
        //替换应用名称
        var stringsPath = path.join(channelPath, "res/values/strings.xml",)
        content = readFileSync(stringsPath, { "encoding": "utf8" })
        content = content.replace("测试包", `${this.packageCfg.name}`)
        //替换facebook配置
        // if(this.packageCfg.facebookId){
        //     content = content.replace("FacebookId", `${this.packageCfg.facebookId}`)
        //     content = content.replace("FacebookScheme", `fb${this.packageCfg.facebookId}`)
        //     content = content.replace("FacebookToken", `fb${this.packageCfg.facebookToken}`)
        // }
        writeFileSync(stringsPath, content, { "encoding": "utf8" })
        console.log("=================================处理manifest.xml=====================================")
    }

    //处理秘钥
    private async handleKeystore(channelPath: string) {
        if (!this.packageCfg)
            return
        var keystorePath = path.join(channelPath, "../keystore")
        var keyName = this.packageCfg.packageName + this.packageCfg.channelId;
        if (existsSync(path.join(keystorePath, keyName))) {
            return
        }
        else {
            console.log("路径：" + keystorePath)
            var cmd = (os.type() == 'Windows_NT') ? "keystore.bat" : "keystore.sh"
            if (os.type() == 'Windows_NT')
                await exec_promisify(`"${cmd}" ${keyName}`, { cwd: `${keystorePath}`, encoding: 'utf8' });
            else{
                await exec_promisify(`${keystorePath}/${cmd} ${keyName}`, {cwd: `${keystorePath}`,encoding: 'utf8'});
            }
            console.log("生成秘钥成功： " + keyName)
        }
        var gradlePath = path.join(channelPath, "build.gradle",)
        var content: string = readFileSync(gradlePath, { "encoding": "utf8" })
        content = content.replace("APPLICATION_ID", `"${this.packageCfg.packageName}"`)
        content = content.replace("RELEASE_STORE_FILE", `"../keystore/keystores/${keyName}.keystore"`)
        content = content.replace("RELEASE_KEY_ALIAS", `"${keyName}"`)
        writeFileSync(gradlePath, content, { "encoding": "utf8" })
    }


    //开始构建
    private async buildPackage() {
        if (!this.projectPath || !existsSync(this.projectPath)) {
            console.log("请设置工程目录！！！")
            return;
        }
        console.log("开始构建安卓工程------------>")
        var cmd = (os.type() == 'Windows_NT') ? "gradlew.bat" : "gradlew"
        if(os.type() == 'Windows_NT'){
            await exec_promisify(`${cmd} assembleRelease`, { cwd: `${this.projectPath}`, encoding: 'utf8' });
        }
        else{
            console.log("=========>Mac  构建"+this.projectPath)
            await exec_promisify(`./${cmd} assembleRelease`, { cwd: `${this.projectPath}`, encoding: 'utf8'});
        }
        console.log("打包成功")
    }

    //重名名APK
    private ReNameApp() {
        if (!this.packageCfg) return;
        var apkDir = path.join(this.projectPath, "apk")
        if (!existsSync(apkDir)) {
            Tools.mkdirSync(apkDir)
        }
        var oldApk = path.join(this.channelRootPath, `build/outputs/apk/release/${this.packageCfg.packageName}-release.apk`)
        var newApk = path.join(apkDir, `${this.packageCfg.name}.apk`)
        renameSync(oldApk, newApk);
        Tools.delFile(oldApk)
        console.log(`APK 重命名成功  `, this.packageCfg.name)
        console.log("================================构建安卓工程结束=========================")
        Tools.showInExplorer(apkDir)
    }
}

export const AndroidBuilder = new _AndroidBuilder();