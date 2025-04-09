
package com.cocos.game.appsflyer;
import android.app.Application;
import android.content.Context;
import android.util.Log;
import android.app.Activity;
import com.appsflyer.AppsFlyerConversionListener;
import com.appsflyer.AppsFlyerLib;

import org.json.JSONObject;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class AFManager {
    private static Context context = null;
    private  final String AF_TAG = "AFManager : ";
    private static AFManager mInstance = null;
//    private Activity mActivity = null;

    public static AFManager getInstance() {
        if (null == mInstance) {
            mInstance = new AFManager();
        }
        return mInstance;
    }

    private static Map<String, Object> conversionDataMap = new HashMap<String, Object>();
    public void initSdk(Context mContext){
        context = mContext;
        AppsFlyerConversionListener conversionListener = new AppsFlyerConversionListener() {
            @Override
            public void onConversionDataSuccess(Map<String, Object> conversionData) {
                conversionDataMap = conversionData;
                Log.d(AF_TAG, "onConversionDataSuccess" );
                for (String attrName : conversionData.keySet()) {
                    Log.d(AF_TAG, "attribute: " + attrName + " = " + conversionData.get(attrName));
                }
            }
            @Override
            public void onConversionDataFail(String errorMessage) {
                Log.d(AF_TAG, "error getting conversion data: " + errorMessage);
            }
            @Override
            public void onAppOpenAttribution(Map<String, String> conversionData) {
                for (String attrName : conversionData.keySet()) {
                    Log.d(AF_TAG, "attribute: " + attrName + " = " + conversionData.get(attrName));
                }
            }
            @Override
            public void onAttributionFailure(String errorMessage) {
                Log.d(AF_TAG, "error onAttributionFailure : " + errorMessage);
            }
        };
        AppsFlyerLib.getInstance().init("qRsuLx47HuJZSjsniKmX5", conversionListener, context);
        AppsFlyerLib.getInstance().start(context);
//        AppsFlyerLib.getInstance().setAppInviteOneLink("vfle");
//        AppsFlyerLib.getInstance().setAppId(context.getPackageName());
//        AppsFlyerLib.getInstance().setDebugLog(true);
    }

    public static void trackEvent(String eventName, String eventValueString){
        Log.d("trackEvent eventName :", eventName);
        Log.d("eventValueString :", eventValueString);
        try {
            JSONObject json = new JSONObject(eventValueString);
            Map<String,Object> map = new HashMap<>();
            Iterator<String> iterator = json.keys();
            while(iterator.hasNext())
            {
                String key = (String)iterator.next();
                Object value = json.get(key).toString();
                map.put(key, value);
            }
            AppsFlyerLib.getInstance().logEvent(context,eventName,map);
        } catch (Exception e) {

        }
    }

    public static String getAFKey(String key){
        Log.d("getAFKey key :", key);
        for (String attrName : conversionDataMap.keySet()) {
            if(attrName.equals(key)){
                return conversionDataMap.get(attrName) + "";
            }
        }
        return "-1";
    }

    public static String getAppsFlyerUID(){
        Log.d("getAppsFlyerUID  :", AppsFlyerLib.getInstance().getAppsFlyerUID(context));
        return AppsFlyerLib.getInstance().getAppsFlyerUID(context);
    }
}
