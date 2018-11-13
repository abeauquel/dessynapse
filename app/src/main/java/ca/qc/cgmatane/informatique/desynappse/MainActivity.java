package ca.qc.cgmatane.informatique.desynappse;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;

public class MainActivity extends DroidGap { /* LE BON NOM DE CLASSE!!!!! */
    /** The view to show the ad. */


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index.html");

    }
}

