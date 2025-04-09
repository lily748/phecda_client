/****************************************************************************
 Copyright (c) 2015-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
package com.cocos.game;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ClipData;
import android.content.ClipDescription;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.pm.ActivityInfo;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Environment;
import android.os.PowerManager;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Log;
import android.view.WindowManager;

import com.Utility.DeviceUuidFactory;
import com.adjust.sdk.Adjust;
import com.adjust.sdk.AdjustConfig;
import com.adjust.sdk.AdjustEvent;
import com.adjust.sdk.LogLevel;
import com.cocos.lib.CocosHelper;
import com.cocos.lib.CocosJavascriptJavaBridge;
import com.cocos.lib.GlobalObject;
import com.cocos.service.BuglySdk;
//import com.cocos.service.FacebookSdk;
//import com.cocos.service.LineSdk;
import com.cocos.service.SDKWrapper;
import com.cocos.lib.CocosActivity;
import com.cocos.service.ShareUtil;
import com.snail.antifake.jni.EmulatorDetectUtil;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.lang.reflect.Field;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.Map;
import android.content.res.AssetManager;
import java.io.InputStream;
import java.util.zip.ZipFile;
import java.util.concurrent.Executors;

import com.cocos.game.appsflyer.AFManager;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;
import com.google.android.gms.common.GooglePlayServicesNotAvailableException;
import com.google.android.gms.common.GooglePlayServicesRepairableException;
import com.lahm.library.EasyProtectorLib;
import com.lahm.library.EmulatorCheckCallback;

public class AppActivity extends CocosActivity {

    static  AppActivity app;

    //是不是模拟器
    public static boolean isEmulator = false;
    public static String emulatorCheckInfo;
    public  String ga_id = "";
    private String SaveImagePath;
    private PowerManager.WakeLock mWakeLock;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // DO OTHER INITIALIZATION BELOW
        SDKWrapper.shared().init(this);
        Log.d("包名：",this.getPackageName());
//        Log.d("渠道：",this.GetChannelName());
        InitSDK();
        this.initAdid(app);
    }

    private void InitSDK(){
        app = this;
        //唯一id生成器
        DeviceUuidFactory.getInstance().initUuidFactory(this);

//        FacebookSdk.getInstance().initSdk(this);
//        LineSdk.getInstance().initSdk(this,getMetaData(this,"Line_Channel"));
        initAdjust();

//        BuglySdk.getInstance().initSdk(this);


        this.getHashKey();
        Log.e("UUID---->",app.GetUnionDeviceId());

        AFManager.getInstance().initSdk(this);
        this.initEmulatorCheckInfo();
    }

    private void initAdjust(){
        String environment = AdjustConfig.ENVIRONMENT_PRODUCTION;
        AdjustConfig config = new AdjustConfig(getApplication(), "xxxx", environment);
//        config.setLogLevel(LogLevel.VERBOSE);
        Adjust.onCreate(config);
    }

    private void getHashKey(){
        try {
            PackageInfo info = getPackageManager().getPackageInfo( this.getPackageName(),  PackageManager.GET_SIGNATURES);
            for (Signature signature : info.signatures) {
                MessageDigest md = MessageDigest.getInstance("SHA");
                md.update(signature.toByteArray());
                String KeyHash = Base64.encodeToString(md.digest(), Base64.DEFAULT);
                //KeyHash 就是你要的，不用改任何代码  复制粘贴 ;
                Log.e("获取应用KeyHash", "KeyHash: " + KeyHash);
            }
        }
        catch (Exception e) {

        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.shared().onResume();
        Adjust.onResume();
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
    }

    @Override
    protected void onPause() {
        super.onPause();
        SDKWrapper.shared().onPause();
        Adjust.onPause();
        getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (!isTaskRoot()) {
            return;
        }
        SDKWrapper.shared().onDestroy();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SDKWrapper.shared().onActivityResult(requestCode, resultCode, data);
//        FacebookSdk.getInstance().onActivityResult(requestCode, resultCode, data);
//        LineSdk.getInstance().onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        SDKWrapper.shared().onNewIntent(intent);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        SDKWrapper.shared().onRestart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        SDKWrapper.shared().onStop();
    }

    @Override
    public void onBackPressed() {
        SDKWrapper.shared().onBackPressed();
        super.onBackPressed();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        SDKWrapper.shared().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        SDKWrapper.shared().onRestoreInstanceState(savedInstanceState);
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        SDKWrapper.shared().onSaveInstanceState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onStart() {
        SDKWrapper.shared().onStart();
        super.onStart();
    }

    @Override
    public void onLowMemory() {
        SDKWrapper.shared().onLowMemory();
        super.onLowMemory();
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        switch (requestCode){
            case 103:
                SaveImageToPhotoAlbum(SaveImagePath);
                break;
        }
    }

    public static String GetChannelName(){
        return app.getMetaData(app,"CHANNEL_NAME");
    }

    public String getMetaData(Context ctx, String key) {
        try {
            ApplicationInfo appInfo = ctx.getPackageManager().getApplicationInfo(ctx.getPackageName(), PackageManager.GET_META_DATA);
            if (appInfo != null && appInfo.metaData != null && appInfo.metaData.containsKey(key)) {
                return "" + appInfo.metaData.get(key);
            } else {
                Log.d("getMetaData", "The meta-data key is not exists." + key);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void sendToCocos(String function,String args){
        CocosHelper.runOnGameThread(new Runnable() {
            @Override
            public void run() {
                final String eval = String.format("window.GameSDKInterface.%s(`%s`)",function,args);
                Log.d("sendToCocos ",eval);
                CocosJavascriptJavaBridge.evalString(eval);
            }
        });
    }

    /*************************************
     * 剪贴板功能
     */
    // 向剪贴板中添加文本
    public static boolean CopyTextToClipboard(String str) {
        boolean flag = true;
        try {
            ClipboardManager clipboard = (ClipboardManager) app.getSystemService(Activity.CLIPBOARD_SERVICE);
            ClipData textCd = ClipData.newPlainText("data", str);
            clipboard.setPrimaryClip(textCd);
        } catch (Exception e) {
            flag = false;
        }
        return flag;
    }

    // 从剪贴板中获取文本
    public static String GetTextFromClipboard() {
        ClipboardManager clipboard = (ClipboardManager) app.getSystemService(Activity.CLIPBOARD_SERVICE);
        if (clipboard != null && clipboard.hasPrimaryClip() && clipboard.getPrimaryClipDescription().hasMimeType(ClipDescription.MIMETYPE_TEXT_PLAIN)) {
            ClipData cdText = clipboard.getPrimaryClip();
            ClipData.Item item = cdText.getItemAt(0);
            return item.getText().toString();
        }
        return "null";
    }
    /*
     * 保存图片
     */
    public static void SaveImageToPhoto(String imagePath) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (app.checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED) {
                app.SaveImageToPhotoAlbum(imagePath);
            } else {
                app.SaveImagePath = imagePath;
                app.requestPermissions(new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, 103);
            }
        }
    }

    public void SaveImageToPhotoAlbum(String imagePath) {
        String imageName = System.currentTimeMillis() + ".jpg";
        String cameraPath = Environment.getExternalStorageDirectory().getPath() + "/DCIM/Camera";
        String fileName = cameraPath + "/" + imageName;
        File cameraDir = new File(cameraPath);
        if (!cameraDir.exists()) {
            cameraDir.mkdir();
        }

        File file;
        file = new File(fileName);

        if (file.exists()) {
            file.delete();
        }
        FileOutputStream out;
        try {
            Bitmap bitmap = BitmapFactory.decodeFile(imagePath);
            out = new FileOutputStream(file);
            // 格式为 JPEG，照相机拍出的图片为JPEG格式的，PNG格式的不能显示在相册中
            if (bitmap.compress(Bitmap.CompressFormat.JPEG, 100, out)) {
                out.flush();
                out.close();
                // 插入图库
                MediaStore.Images.Media.insertImage(this.getContentResolver(), file.getAbsolutePath(), imageName, null);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        // 发送广播，通知刷新图库的显示
        this.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.parse("file://" + fileName)));
        String ret = String.format("{\"ret\":\"%s\",\"fileName\":\"%s\"}",true,file.getAbsolutePath());
        AppActivity.sendToCocos("SaveImageToPhotoRet",ret);
    }

    //收集设备信息
    public static String CollectDeviceInfo(Context ctx) {
        Map<String, String> info = new HashMap<String, String>();
        try {
            PackageManager pm = ctx.getPackageManager();
            PackageInfo p = pm.getPackageInfo(ctx.getPackageName(), PackageManager.GET_ACTIVITIES);
            if (p != null) {
                String versionName = p.versionName == null ? "null" : p.versionName;
                String versionCode = p.versionCode + "";
                info.put("versionName", versionName);
                info.put("versionCode", versionCode);
            }

            Field[] fields = Build.class.getDeclaredFields();
            for (Field f : fields) {
                try {
                    f.setAccessible(true);
                    Object obj = f.get(null);
                    info.put(f.getName(), obj == null ? "null" : obj.toString());
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }

        } catch (Exception e) {
            Log.e("AppActivity", "an error occured when collect package info...");
            e.printStackTrace();
        }
        return info.toString();
    }
    /****************************************
     * 判断某个应用是否安装
     */
    public static boolean IsPkgInstalled(String pkgName) {
        PackageInfo packageInfo = null;
        try {
            packageInfo = app.getPackageManager().getPackageInfo(pkgName, 0);
        } catch (PackageManager.NameNotFoundException e) {
            packageInfo = null;
            e.printStackTrace();
        }
        if (packageInfo == null) {
            return false;
        } else {
            return true;
        }
    }

    /****************************************
     * 获取android设备唯一标识ID
     */
    public static String GetUnionDeviceId() {
        //CocosJavascriptJavaBridge.evalString("window.GameSDKInterface.TestJavaCallTs('安卓调用Ts')");
        String id = DeviceUuidFactory.getInstance().getDeviceUuid().toString();
        return id;
    }
    /****************************************
     *是否是模拟器
     */
    public static boolean isSupportExit() {
        return EmulatorDetectUtil.isEmulator(app);
    }

    public static String GetPackageName(){
        return app.getPackageName();
    }
    //获取安卓工程版本
    public static int GetAndroidVersion(){
        return 1;
    }

    //事件推送
    public static void PushToAdjust(String eventName){
        AdjustEvent adjustEvent = new AdjustEvent(eventName);
        Adjust.trackEvent(adjustEvent);
    }

    public static void PushToAdjustCurrency(String data){
        try {
            JSONObject json = new JSONObject(data);
            String eventName = json.getString("EventName");
            double score = json.getDouble("Score");
            String currency = json.getString("Currency");

            AdjustEvent adjustEvent = new AdjustEvent(eventName);
            adjustEvent.setRevenue(score,currency);
            Adjust.trackEvent(adjustEvent);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    public static String GetAdID(){
        return Adjust.getAdid();
    }

    //facebook登录
    public static void FacebookLogin(){
//        FacebookSdk.getInstance().login();
    }
    //facebook登出
    public static void FacebookLogout(){
//        FacebookSdk.getInstance().logout();
    }
    //facebook分享
    public static void FacebookShare(String data){
//        FacebookSdk.getInstance().share(data);
    }
    //原生分享
    public static void OtherShare(String data){
        ShareUtil.getInstance().share(data,app);
    }
    //facebook事件
    public static void FacebookAppEvent(String data) {
//        FacebookSdk.getInstance().reportAppEvent(data);
    }
    //line登录
    public static void LineLogin(){
//        LineSdk.getInstance().login();
    }
    public static void PostException(String msg,String stack){
        BuglySdk.getInstance().BuglyReport(5,"JSError",msg,stack);
    }
    public static void LogReport(String log){
        BuglySdk.getInstance().BuglyLog(log);
    }

    public static void SetAutoOrientation(boolean auto){
//        if(auto){
//            GlobalObject.getActivity().setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR);
//        }
//        else {
//            GlobalObject.getActivity().setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
//        }
    }

    public static String GetTextInfo() {
        String fileContent = app.readAssetFile(app, "text1.txt");
        return fileContent;
    }

    public String readAssetFile(Context context, String fileName) {
        AssetManager assetManager = context.getAssets();
        InputStream inputStream = null;
        try {
            inputStream = assetManager.open(fileName);
            int size = inputStream.available();
            byte[] buffer = new byte[size];
            inputStream.read(buffer);
            return new String(buffer);
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        } finally {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public static String GetPackageComment() {
        String ret = "";
        final ApplicationInfo applicationInfo = app.getApplicationInfo();
        String apkPath = applicationInfo.sourceDir;
        try {
            ZipFile apk = new ZipFile(apkPath);
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                ret = apk.getComment();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        if(ret != null)
            return ret;
        return "";
    }

    public static String GetReferrerInfo() {
        try {
            Class activityClass = Class.forName("android.app.Activity");

            Field refererField = activityClass.getDeclaredField("mReferrer");
            refererField.setAccessible(true);
            String referrer = (String) refererField.get(app);
            return referrer;
        } catch (ClassNotFoundException | IllegalAccessException | NoSuchFieldException e) {
            e.printStackTrace();
            return "No referrer";
        }
    }

    public static String GetApkVer(){
        return "1.3.0";
    }


    //AF埋点
    public static void trackEventAF(String eventName, String eventValueString) {
        AFManager.getInstance().trackEvent(eventName,eventValueString);
    }

    //通过key获取af的值
    public static String getAFKey(String key) {
        return AFManager.getInstance().getAFKey(key);
    }

    public static String getAppsFlyerUID() {
        return AFManager.getInstance().getAppsFlyerUID();
    }

    public static String getNewGAID(){
        return app.ga_id;
    }

    public void initAdid(Context context) {
        Executors.newSingleThreadExecutor().execute(new Runnable() {
            @Override
            public void run() {
                try {
                    AdvertisingIdClient.Info adInfo = null ;
                    adInfo = AdvertisingIdClient.getAdvertisingIdInfo(context);
                    Log.e("getGAID", "adInfo:"+adInfo);
                    if (adInfo!= null){
                        String gaid= adInfo.getId();
                        Log.e("getGAID", "gaid:"+gaid);
                        app.ga_id=gaid;
                    }
                }catch (GooglePlayServicesRepairableException e) {
                    // 可修复的异常，如Google Play服务未安装或更新
                    Log.e("getGAID", "Google Play Services not available", e);
                } catch (GooglePlayServicesNotAvailableException e) {
                    // 不可修复的异常，如设备不支持Google Play服务
                    Log.e("getGAID", "Google Play Services not available", e);
                }
                catch (IOException e) {
                    // Unrecoverable error connecting to Google Play services (e.g.,
                    // the old version of the service doesn't support getting AdvertisingId).
                    Log.e("getGAID", "IOException");
                }  catch (Exception e) {
                    Log.e("getGAID", "Exception:"+e.toString());
                    // Encountered a recoverable error connecting to Google Play services.
                }
            }
        });
    }

    public static boolean IsOpenAdSdk() {
        return false;
    }

    public static String getEmulatorCheckInfo() {
        return emulatorCheckInfo;
    }

    private static void initEmulatorCheckInfo() {
        EasyProtectorLib.checkIsRunningInEmulator(app, new EmulatorCheckCallback() {
            @Override
            public void findEmulator(String emulatorInfo) {
                CocosHelper.runOnGameThread(new Runnable() {
                    @Override
                    public void run() {
                        String[] lines = emulatorInfo.split("\\r?\\n");
                        StringBuilder resultBuilder = new StringBuilder();
                        for (String line : lines) {
                            String trimmedLine = line.trim();
                            if (!trimmedLine.isEmpty()) {
                                resultBuilder.append(trimmedLine).append("|");
                            }
                        }
                        resultBuilder.append("isRoot="+(EasyProtectorLib.checkIsRoot()?"true":"false")+"|");
                        resultBuilder.append("isDebugged="+(EasyProtectorLib.checkIsDebug(app)?"true":"false"));
                        emulatorCheckInfo =  resultBuilder.toString().trim();
                    }
                });
            }
        });
    }
}
