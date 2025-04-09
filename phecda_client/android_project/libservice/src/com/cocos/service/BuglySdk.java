package com.cocos.service;

import android.app.Activity;
import android.content.Context;
import android.util.Log;

import com.facebook.CallbackManager;
import com.tencent.bugly.crashreport.BuglyLog;
import com.tencent.bugly.crashreport.CrashReport;

import java.util.Map;

public class BuglySdk {
    private static String TAG = "Bugly";
    private Activity mActivity = null;
    private static BuglySdk mInstance = null;
    public static BuglySdk getInstance() {
        if (null == mInstance) {
            mInstance = new BuglySdk();
        }
        return mInstance;
    }

    public void initSdk(Activity activity) {
        Log.i(TAG, "initSdk");
//        Context context = activity.getApplicationContext();
//        CrashReport.UserStrategy strategy = new CrashReport.UserStrategy(context);
//        strategy.setDeviceID("userdefinedId");
        CrashReport.initCrashReport(activity.getApplicationContext(), "32b825ab03", false);
//        CrashReport.testNativeCrash();
    }

    public void BuglyReport(int category, String name, String reason, String stack){
        BuglyReport(category, name, reason, stack, null);
    }

    public void BuglyReport(int category, String name, String reason, String stack, Map<String, String> extraInfo){
        Log.i(TAG,"---------------->"+reason+"  ->>"+stack);
        CrashReport.postException(category, name, reason, stack, extraInfo);
    }

    public void BuglyLog(String log){
        if(log!=null){
            Log.i(TAG,log);
            BuglyLog.v(TAG,log);
        }
    }
}
