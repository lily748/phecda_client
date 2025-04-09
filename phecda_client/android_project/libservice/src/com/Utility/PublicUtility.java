package com.Utility;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.os.Environment;
import android.util.Log;
import android.widget.Toast;

//import com.snail.antifake.jni.EmulatorDetectUtil;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * Created by Ju on 2016/11/9.
 */

public class PublicUtility
{
    private static final String TAG = "PublicUtility";

    /**
     * HashMap转json
     * @param map
     * @return
     */
    public static String HashMapToJson(HashMap map)
    {
        String string = "{";
        for (Iterator it = map.entrySet().iterator(); it.hasNext();)
        {
            Map.Entry e = (Map.Entry) it.next();
            string += "\"" + e.getKey() + "\":";
            string += "\"" + e.getValue() + "\",";
        }

        string = string.substring(0, string.lastIndexOf(","));
        string += "}";

        return string;
    }

    /**
     * 获取SD卡路径
     * @return
     */
    public static String GetSDCardPath()
    {
        File sdcardDir = null;

        boolean exist = Environment.getExternalStorageState().equals(android.os.Environment.MEDIA_MOUNTED);

        if (exist)
        {
            sdcardDir = Environment.getExternalStorageDirectory();
        }

        return sdcardDir.toString();
    }

    /**
     * 打印日志
     * @param msg
     */
    public static void Log(String msg)
    {
        Log.e(TAG, msg);
    }

    /**
     * 显示Android原生提示消息
     * @param context   上下文
     * @param msg       消息
     */
    public static void ShowToast(Context context, String msg)
    {
        Toast.makeText(context, msg, Toast.LENGTH_LONG).show();
    }

    /**
     * 压缩jpg图片
     * @param jpgPath   原jpg图片路径
     * @param fos       输出文件
     * @param quality   质量（0-100）
     */
    public static void CompressJpeg(String jpgPath, FileOutputStream fos, int quality)
    {
        final BitmapFactory.Options options = new BitmapFactory.Options();

        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(jpgPath, options);

        options.inSampleSize = 1;
        options.inJustDecodeBounds = false;

        Bitmap bitmap = BitmapFactory.decodeFile(jpgPath, options);

        bitmap.compress(Bitmap.CompressFormat.JPEG, quality, fos);
    }

    /**
     * 保存字符串到本地
     * 保存文件名称为包名
     * @param context
     * @param key       键
     * @param value     值
     */
    public static void SaveToNative(Context context, String key, String value)
    {
        SharedPreferences sharedPreferences = context.getSharedPreferences(context.getPackageName(), Context.MODE_PRIVATE);

        SharedPreferences.Editor editor = sharedPreferences.edit();

        editor.putString(key, value);
        editor.commit();
    }

    /**
     * 通过键从本地获取已保存的字符串
     * @param context
     * @param key       键
     * @return          如果没找到该键对应的值则返回""
     */
    public static String GetSavedString(Context context, String key)
    {
        SharedPreferences sharedPreferences = context.getSharedPreferences(context.getPackageName(), Context.MODE_PRIVATE);

        return sharedPreferences.getString(key, "");
    }

    /**
     * 获取应用图标
     * @param context
     * @return
     */
    public static Bitmap GetAppIcon(Context context)
    {
        PackageManager packageManager = null;
        ApplicationInfo applicationInfo = null;

        try
        {
            packageManager = context.getApplicationContext().getPackageManager();
            applicationInfo = packageManager.getApplicationInfo(context.getPackageName(), 0);
        }
        catch (PackageManager.NameNotFoundException e)
        {
            e.printStackTrace();
        }

        Drawable db = packageManager.getApplicationIcon(applicationInfo);
        BitmapDrawable bd = (BitmapDrawable) db;

        return bd.getBitmap();
    }

    public static Bitmap GetBitmapByPath(String path)
    {
        Bitmap bitmap = null;

        try
        {
            File file = new File(path);
            if (file.exists())
            {
                bitmap = BitmapFactory.decodeFile(path);
            }
        }
        catch (Exception e)
        {

        }

        return bitmap;
    }

    /**
     * Bitmap转Byte数组
     * @param bmp
     * @param needRecycle   回收
     * @return
     */
    public static byte[] BitmapToByteArray(final Bitmap bmp, final boolean needRecycle)
    {
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        bmp.compress(Bitmap.CompressFormat.PNG, 100, output);
        if (needRecycle)
        {
            bmp.recycle();
        }

        byte[] result = output.toByteArray();
        try
        {
            output.close();
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }

        return result;
    }


}
