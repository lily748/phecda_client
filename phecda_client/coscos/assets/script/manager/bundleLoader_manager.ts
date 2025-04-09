type CacheCallbak = (percent: number) => void;
type CacheErrorCallback = (error: Error) => void;

let installCallbacks: { [name: string]: CacheCallbak } = {};
let installErrorCallbacks: { [name: string]: CacheErrorCallback } = {};

(window as any).onBundleInstallProgress = function(bundleName: string, progress: number) {
    installCallbacks[bundleName] && installCallbacks[bundleName](progress);
};

(window as any).onBundleInstallError = function(bundleName: string, error: Error) {
    installErrorCallbacks[bundleName] && installErrorCallbacks[bundleName](error);
};


/**
 * 下载Bundle压缩文件
 * @param name 
 * @param onCacheProgress
 */
function downloadZipBundle (name: string, onCacheProgress: CacheCallbak, onCacheError: CacheErrorCallback) {
    installCallbacks[name] = onCacheProgress;
    installErrorCallbacks[name] = onCacheError;
    if ((window as any).installBundle) {
        (window as any).installBundle(name);
    } else {
        onCacheProgress(1);
    }
}

export {
    downloadZipBundle
}