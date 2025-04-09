"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const vue_1 = require("vue");
const Helper_1 = require("../../../Helper");
let view;
module.exports = Editor.Panel.define({
    listeners: {},
    template: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../../../static/template/default/index.html'), 'utf-8'),
    style: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../../../static/style/default/index.css'), 'utf-8'),
    $: {
        app: '#app'
    },
    methods: {
        updateCreateProgress(progress) {
            view.createProgress = progress;
        },
        updateDeployProgress(progress) {
            view.progress = progress;
        },
        onSetBuildDir(dest) {
            view.buildDir = dest;
            view.buildOutDir = Helper_1.helper.config.outDir;
        },
        onSetProcess(isProcess) {
            view.isProcessing = isProcess;
        },
        onRefresh() {
            console.log("==============编辑器页面刷新============");
            view.isRouterAlive = false;
            view.isRouterAlive = true;
            view.bundles = Helper_1.helper.bundles;
            view.serverCfg = Helper_1.helper.config.serverCfg;
            //view.$nextTick(() => (view.isRouterAlive = true))
        }
    },
    ready() {
        Helper_1.helper.readCacheConfig();
        if (this.$.app) {
            const app = (0, vue_1.createApp)({});
            //指定Vue3 自己定义控件跳过解析
            app.config.compilerOptions.isCustomElement = tag => tag.startsWith("ui-");
            app.component('view-content', {
                template: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../../../static/template/vue/view.html'), 'utf-8'),
                data() {
                    console.log("Update  data " + Helper_1.helper.config.platform);
                    return {
                        bundles: Helper_1.helper.bundles,
                        buildDir: Helper_1.helper.config.buildDir,
                        buildOutDir: Helper_1.helper.config.outDir,
                        packageCfg: (Helper_1.helper.config.packageCfg ? Helper_1.helper.config.packageCfg : Helper_1.helper.PackageCfgs[0]),
                        packageCfgs: Helper_1.helper.PackageCfgs,
                        serverCfg: Helper_1.helper.config.serverCfg,
                        serverCfgs: Helper_1.helper.ServerCfgs,
                        autoCreate: Helper_1.helper.config.autoCreate,
                        progress: 0,
                        createProgress: 0,
                        isProcessing: false,
                        platforms: ["android", "ios"],
                        platform: Helper_1.helper.config.platform,
                        enginePath: Helper_1.helper.config.enginePath,
                        projectPath: Helper_1.helper.config.projectPath,
                        isRouterAlive: true,
                    };
                },
                methods: {
                    onChangeServer(name) {
                        Helper_1.helper.setServerCfg(name);
                        Helper_1.helper.saveConfig();
                    },
                    onChangePackage(packageName) {
                        console.log("选择游戏配置：", packageName);
                        Helper_1.helper.setPackageCfg(packageName);
                        Helper_1.helper.saveConfig();
                    },
                    onChangePlatform(value) {
                        //console.log("onChangePlatform : ", value)
                        this.platform = value;
                        Helper_1.helper.setplatform(value);
                        Helper_1.helper.saveConfig();
                        this.onRefresh();
                    },
                    onChangeProjectPath(value) {
                        console.log("切换工程目录 : ", value);
                        Helper_1.helper.setProjectPath(value);
                    },
                    onChangeAutoBuild(value) {
                        Helper_1.helper.config.autoCreate = value;
                        Helper_1.helper.saveConfig();
                    },
                    onChangeEnginePath(value) {
                        Helper_1.helper.config.enginePath = value;
                        Helper_1.helper.saveConfig();
                    },
                    onChangeAutoDeploy(value) {
                        Helper_1.helper.config.autoDeploy = value;
                        Helper_1.helper.saveConfig();
                    },
                    onSelectBundle(value, bundle) {
                        console.log(`选择 Bundle ${bundle}  是否选中 ${value}`);
                        Helper_1.helper.bundles[bundle].select = value;
                    },
                    onInputVersionOver(value, bundle) {
                        console.log(`修改 ${bundle} 版号为：  ${value}`);
                        Helper_1.helper.onChangeVersion(bundle, value);
                    },
                    onSelectVersion(version, bundle) {
                        console.log(`Version:${version} dir:${bundle}`);
                        Helper_1.helper.bundles[bundle].version = version;
                    },
                    onCommitVersionToServer(bundle) {
                        console.log(`提交版本号：Bundle: ${bundle}  version:${Helper_1.helper.bundles[bundle].version}`, this);
                        Helper_1.helper.onCommitVersionToServer(Helper_1.helper.bundles[bundle]);
                    },
                    onDeployToRemote(bundle) {
                        console.log("资源远程部署 Bundle: " + bundle);
                        Helper_1.helper.onDeployToOSS(bundle);
                        //helper.onDeployToRemote();
                    },
                    onshowInExplorer(bundle) {
                        Helper_1.helper.onShowInExport(bundle);
                    },
                    //设置构建目录
                    onBuildDirConfirm(url) {
                        Helper_1.helper.config.buildDir = url;
                        Helper_1.helper.saveConfig();
                    },
                    //设置输出目录
                    onBuildOutDirConfirm(url) {
                        Helper_1.helper.config.outDir = url;
                        Helper_1.helper.saveConfig();
                    },
                    onChangeHotupdateUrls(event) {
                        this.onInputUrlOver(event.target.value);
                    },
                    onUserLocalIP() {
                        let network = require("os").networkInterfaces();
                        let url = "";
                        Object.keys(network).forEach((key) => {
                            network[key].forEach((info) => {
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
                        Helper_1.helper.onBuildAssetBundles();
                        //this.onRefresh();
                    },
                    onRefresh() {
                        console.log("刷新页面");
                        view.isRouterAlive = false;
                        this.$nextTick(() => (this.isRouterAlive = true));
                    },
                    //工程构建
                    onBuildPackage() {
                        Helper_1.helper.onBuildPackage();
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
    beforeClose() { console.log("beforeClose---------------->"); },
    close() { console.log("close---------------->"); },
});
