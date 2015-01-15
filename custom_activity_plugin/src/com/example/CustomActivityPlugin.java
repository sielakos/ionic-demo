package com.example;

import android.content.Context;
import android.content.Intent;
import org.apache.cordova.*;

/**
 * Created by mariusz on 15.01.15.
 */
public class CustomActivityPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Context context = this.cordova.getActivity().getApplicationContext();
        Intent intent = new Intent(context, CustomActivity.class);

        context.startActivity(intent);

        callbackContext.success("success");
    }

    private void echo(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
