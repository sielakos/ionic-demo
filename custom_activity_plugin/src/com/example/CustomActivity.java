package com.example;

/**
 * Created by mariusz on 15.01.15.
 */
import android.os.Bundle;
import android.app.Activity;

public class CustomActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.custom_activity);
    }
}