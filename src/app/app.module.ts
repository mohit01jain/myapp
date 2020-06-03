import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GooglePlus} from "@ionic-native/google-plus/ngx";
import {NativeStorage} from "@ionic-native/native-storage/ngx";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {AgmMap, GoogleMapsAPIWrapper, LazyMapsAPILoader, MapsAPILoader} from "@agm/core";
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AgmCoreModule } from '@agm/core';
import {browser} from 'protractor';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AgmDirectionModule } from 'agm-direction';
import {GoogleMaps} from '@ionic-native/google-maps';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';
import {IonicStorageModule} from "@ionic/storage";






@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),     IonicStorageModule.forRoot(),
    AppRoutingModule, AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCLEV562QGsIfx4ONic8A1PsOvjAVQLDmY',
      clientId:'829943312672-8ashhbhlva0mp758usak0gu27dnt25sf.apps.googleusercontent.com',
    libraries: ['places']}),
    AgmDirectionModule      // agm-direction
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    FormBuilder,
    Geolocation,
    GoogleMapsAPIWrapper,
    ThemeableBrowser,
    InAppBrowser,
    AndroidPermissions,
    StatusBar,
    SplashScreen,
    Geolocation,
    LocationAccuracy,
    NativeGeocoder,
    GoogleMaps,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },




],
  bootstrap: [AppComponent]
})
export class AppModule {}
