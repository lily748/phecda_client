
import { _decorator, Component, Node, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AndroidClassMap')
export class AndroidClassMap {
    private data: any;
    private func: any;
    private packageClassName: string;
    public constructor(packageName: string, className: string) {
        if (!sys.isNative)
            return;
        if (this.parseMapInfo(packageName, className)) return;
        this.packageClassName = sys.localStorage.getItem('JAVA_CLASS_NAME') ?? "com/cocos/game/AppActivity"
    }
    
    private parseMapInfo(packageName: string, className: string) {
        let path = jsb.fileUtils.getWritablePath() + "package/caqwse.json"
        if (!jsb.fileUtils.isFileExist(path)) {
            console.log("android 映射文件不存在" + path)
            return false;
        }
        let content = jsb.fileUtils.getStringFromFile(path);
        if (!content) {
            console.log("没有读取到映射文件" + path)
            return false;
        }
        let tempPackageName = packageName.replace(/\//g, ".")
        let json = JSON.parse(content)
        for (let key in json) {
            if (json[key]["package"] == tempPackageName) {
                this.data = json[key]
                packageName = this.data["newPackage"].replace(/\./g, "/");
                break;
            }
        }
        if (this.data) {
            for (let key in this.data.java) {
                if (this.data.java[key].className == className) {
                    className = this.data.java[key]["newClassName"]
                    this.func = this.data.java[key]["func"]
                    break;
                }
            }
        }
        this.packageClassName = packageName + "/" + className;
        return true;
    }

    public getClassName() {
        return this.packageClassName;
    }

    public getMethodName(methodName: string) {
        if (this.func) {
            return this.func[methodName]
        }
        return methodName;
    }
}
