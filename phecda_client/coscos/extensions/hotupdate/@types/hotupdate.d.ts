/**@description bundle信息 */
declare interface BundleCfg {
    /**@description bundle名，如大厅 */
    name: string;
    /**@description bundle对应目录 */
    bundle: string;
    /**@description 资源相对路径 */
    relative: string;  
    /**@description bundle资源路径 */
    respaths: string[];
   
    /**@description 是否包含在主包内 */
    select?: boolean;
    /**@description 当前选择版本 */
    version:string;
    /**@description bundle本地版本号 */
    versions: string[];
}

declare class ServerCfg{
    /**@description 服务器名字 */
    name:string;
    cdn_address:string;
    res_address:string;
}

/**
 * @description 压缩版本文件配置
 */
declare interface ZipVersionsConfig {
    /**@description 主包包含目录 */
    mainIncludes: string[];
    /**@description 所有版本信息 */
    versions: { [key: string]: { md5: string, version: string } };
    /**@description 构建目录 */
    buildDir: string;
    /**@description 日志回调 */
    log: (conent: any) => void;
    /**@description 所有bundle的配置信息 */
    bundles: { [key: string]: BundleCfg };
    handler : Function;
}

declare class HotupdateConfig {
    /**@description 主包版本号 */
    version: string;
    /**@description 构建项目目录 */
    buildDir: string;
    /**@description 资源输出目录 */
    outDir:string;
    /**@description 资源输出目录 */
    serverCfg:ServerCfg;
    // /**@description 远程CDN服务器所在目录 */
    // remoteCDNAddress: string;
    // /**@description 远程RES服务器所在目录 */
    // resServerAddress:string;
    /**@description 自动创建 */
    autoCreate: boolean = false;
    /**@description 自动部署 */
    autoDeploy: boolean = false;
    /**@description 平台 */
    platform: string = "android"; 
    //引擎路径
    enginePath:string = "";  
    /**当前打包配置 */
    packageCfg?:PackageCfg;
    /**@description android或者xcode工程路径 */
    projectPath: string;   
}

declare interface Manifest {
    assets?: any;
    bundle?: string;
    md5?: string;
    version: string;
    packageUrl?:string;
    remoteManifestUrl?:string;
}

declare interface PackageCfg{
    name:string;
    packageName:string;
    channelId:string;
    appId:string;
    facebookId?:string;
    facebookToken?:string;
    lineChannel?:string;
}