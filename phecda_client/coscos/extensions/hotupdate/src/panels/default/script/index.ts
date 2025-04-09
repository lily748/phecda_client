import { readFileSync } from 'fs-extra';
import { join } from 'path';
import { createApp } from 'vue';
import { helper } from '../../../Helper';

let view: {
    progress: number;
    createProgress: number;
    buildDir: string;
    buildOutDir: string;
    isProcessing: boolean;
    isRouterAlive: boolean;
    packageCfg: PackageCfg;
    bundles:{ [key: string]: BundleCfg };
    serverCfg :ServerCfg; 
};

module.exports = Editor.Panel.define({
    listeners: {

    },
    template: readFileSync(join(__dirname, '../../../../static/template/default/index.html'), 'utf-8'),
    style: readFileSync(join(__dirname, '../../../../static/style/default/index.css'), 'utf-8'),
    $: {
        app: '#app'
    },
    methods: {
        updateCreateProgress(progress: number) {
            view.createProgress = progress;
        },
        updateDeployProgress(progress: number) {
            view.progress = progress;
        },
        onSetBuildDir(dest: string) {
            view.buildDir = dest;
            view.buildOutDir = helper.config.outDir;
        },
        onSetProcess(isProcess: boolean) {
            view.isProcessing = isProcess;
        },
        onRefresh() {
            console.log("==============编辑器页面刷新============")
            view.isRouterAlive = false;
            view.isRouterAlive = true;
            view.bundles = helper.bundles;
            view.serverCfg = helper.config.serverCfg;
            //view.$nextTick(() => (view.isRouterAlive = true))
        }
    },
    ready() {
        helper.readCacheConfig();
        if (this.$.app) {
            const app = createApp({});
            //指定Vue3 自己定义控件跳过解析
            app.config.compilerOptions.isCustomElement = tag => tag.startsWith("ui-")
            app.component('view-content', {
                template: readFileSync(join(__dirname, '../../../../static/template/vue/view.html'), 'utf-8'),
                data() {
                    console.log("Update  data " + helper.config.platform)
                    return {
                        bundles: helper.bundles,
                        buildDir: helper.config.buildDir,
                        buildOutDir: helper.config.outDir,
                        packageCfg: (helper.config.packageCfg ? helper.config.packageCfg : helper.PackageCfgs[0]),
                        packageCfgs: helper.PackageCfgs,
                        serverCfg:helper.config.serverCfg,
                        serverCfgs:helper.ServerCfgs,
                        autoCreate: helper.config.autoCreate,
                        progress: 0,
                        createProgress: 0,
                        isProcessing: false,
                        platforms: ["android", "ios"],
                        platform: helper.config.platform,
                        enginePath: helper.config.enginePath,
                        projectPath: helper.config.projectPath,
                        isRouterAlive: true,
                    };
                },
                methods: {
                    onChangeServer(name:string){
                        helper.setServerCfg(name)
                        helper.saveConfig()
                    },
                    onChangePackage(packageName: string) {
                        console.log("选择游戏配置：", packageName)
                        helper.setPackageCfg(packageName)
                        helper.saveConfig()
                    },
                    onChangePlatform(value: string) {
                        //console.log("onChangePlatform : ", value)
                        this.platform = value
                        helper.setplatform(value);
                        helper.saveConfig();
                        this.onRefresh();
                    },
                    onChangeProjectPath(value: string) {
                        console.log("切换工程目录 : ", value)
                        helper.setProjectPath(value)
                    },
                    onChangeAutoBuild(value: boolean) {
                        helper.config.autoCreate = value;
                        helper.saveConfig();
                    },
                    onChangeEnginePath(value: string) {
                        helper.config.enginePath = value;
                        helper.saveConfig();
                    },
                    onChangeAutoDeploy(value: boolean) {
                        helper.config.autoDeploy = value;
                        helper.saveConfig();
                    },
                    onSelectBundle(value: boolean, bundle: string) {
                        console.log(`选择 Bundle ${bundle}  是否选中 ${value}`)
                        helper.bundles[bundle].select = value;
                    },
                    onInputVersionOver(value:string,bundle:string){
                        console.log(`修改 ${bundle} 版号为：  ${value}`)
                        helper.onChangeVersion(bundle,value)
                    },
                    onSelectVersion(version: string, bundle: string) {
                        console.log(`Version:${version} dir:${bundle}`)
                        helper.bundles[bundle].version = version;
                    },
                    onCommitVersionToServer(bundle: string) {
                        console.log(`提交版本号：Bundle: ${bundle}  version:${helper.bundles[bundle].version}`, this)
                        helper.onCommitVersionToServer(helper.bundles[bundle])
                    },
                    onDeployToRemote(bundle: string) {
                        console.log("资源远程部署 Bundle: " + bundle)
                        helper.onDeployToOSS(bundle);
                        //helper.onDeployToRemote();
                    },
                    onshowInExplorer(bundle:string){
                        helper.onShowInExport(bundle)
                    },
                    //设置构建目录
                    onBuildDirConfirm(url: string) {
                        helper.config.buildDir = url;
                        helper.saveConfig();
                    },
                    //设置输出目录
                    onBuildOutDirConfirm(url: string) {
                        helper.config.outDir = url;
                        helper.saveConfig();
                    },
                    onChangeHotupdateUrls(event: { target: HTMLSelectElement }) {
                        this.onInputUrlOver(event.target.value);
                    },
                    onUserLocalIP() {
                        let network = require("os").networkInterfaces();
                        let url = "";
                        Object.keys(network).forEach((key) => {
                            network[key].forEach((info: any) => {
                                if (info.family == "IPv4" && !info.internal) {
                                    url = info.address;
                                }
                            });
                        });
                        if (url.length > 0) {
                            url = "http://" + url + "/hotupdate";
                        }
                        this.onInputUrlOver(url);
                    },
                    //构建bundle
                    onBuildBundle() {
                        helper.onBuildAssetBundles()
                        //this.onRefresh();
                    },
                    onRefresh() {
                        console.log("刷新页面")
                        view.isRouterAlive = false;
                        this.$nextTick(() => (this.isRouterAlive = true))
                    },
                    //工程构建
                    onBuildPackage() {
                        helper.onBuildPackage();
                        //this.onRefresh();
                    },
                },
                created: function () {
                    view = this;
                },
                mounted: function () {

                }
            });
            app.mount(this.$.app);
        }
    },
    beforeClose() { console.log("beforeClose---------------->") },
    close() { console.log("close---------------->") },
});
