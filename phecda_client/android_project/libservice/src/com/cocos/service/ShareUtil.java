package com.cocos.service;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

public class ShareUtil {
    private Activity mActivity = null;
    private static ShareUtil mInstance = null;
    public static ShareUtil getInstance() {
        if (null == mInstance) {
            mInstance = new ShareUtil();
        }
        return mInstance;
    }

    public void share(String content,Context context){
        try {
            JSONObject json = new JSONObject(content);
            int shareType = json.getInt("shareType");
            String shareUrl = json.getString("shareUrl");
            String imgPath = json.getString("imgPath");
            if(shareType == 0){
                String title = null;
                if(json.has("title")){
                    title = json.getString("title");
                }
                this.shareText(shareUrl,title,context);
            }
            else{
                this.shareImage(imgPath,context);
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    public void shareText(String content, String title, Context context){
        Log.e("Share Native content",content);
        Intent intent = new Intent();
        intent.setAction(Intent.ACTION_SEND);
        intent.setType("text/plain");
        intent.putExtra(Intent.EXTRA_TEXT, content);
        if(title!=null){
            Log.e("Share Native title",title);
            intent.putExtra(Intent.EXTRA_TITLE, title);
        }
        Intent chooserIntent = Intent.createChooser(intent, "Share to：");
        if(context!=null)
            context.startActivity(chooserIntent);
    }

    public void shareImage(String url, Context context){
        Uri uri =Uri.parse(url);
        Intent intent = new Intent();
        intent.setAction(Intent.ACTION_SEND);
        intent.setType("image/*");
        intent.putExtra(Intent.EXTRA_STREAM, uri);
        Intent chooserIntent = Intent.createChooser(intent, "Share to:");
        if(context!=null)
            context.startActivity(chooserIntent);
    }
}
