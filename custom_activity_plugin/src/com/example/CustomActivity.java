package com.example;

/**
 * Created by mariusz on 15.01.15.
 */
import android.os.Bundle;
import android.app.Activity;
import android.widget.Button;

public class CustomActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Button button = new Button(this);
        button.setText("Custom Activity Button!");


        setContentView(button);
    }
}