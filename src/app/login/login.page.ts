import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, NavController, Platform, ToastController} from '@ionic/angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {timeout} from 'rxjs/operators';
import {MenuController} from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {environment} from '../../environments/environment';


const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100'
];

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {

  userData: any = {};

  constructor(
      private googlePlus: GooglePlus,
      public navcTrl : NavController,
      private nativeStorage: NativeStorage,
      public loadingController: LoadingController,
      private router: Router,
      private platform: Platform,
      public alertController: AlertController,
      public toastCtrl : ToastController,
      public alertCtrl : AlertController,


) { }

/*
  async doGoogleLogin() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
    this.googlePlus.login({
      scopes: '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      // tslint:disable-next-line:max-line-length
      webClientId: environment.googleWebClientId, // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.next-line:max-line-length
      // tslint:disable-next-line:max-line-length
      offline: true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    })
        .then(user => {
          this.nativeStorage.setItem('google_user', {
            name: user.displayName,
            email: user.email,
            picture: user.imageUrl
          })
              .then(() => {
                this.router.navigate(['/user']);
              }, (error) => {
                console.log(error);
              });
          loading.dismiss();
        }, err => {
          console.log(err);
          if (!this.platform.is('cordova')) {
            this.presentAlert();
          }
          loading.dismiss();
        });
  }
*/

 /* async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
      buttons: ['OK']
    });

    await alert.present();
  }*/


 async presentLoading(loading) {
    return await loading.present();
  }

  ngOnInit() {
  }

    googleSignIn() {
        this.googlePlus.login({})
            .then(result => this.userData = result)
            .catch(err => this.userData = `Error ${JSON.stringify(err)}`);


            console.log(JSON.stringify(this.userData));
            this.presentAlertForUpdate();

    }

    async presentAlertForUpdate() {
        const alert = await this.alertCtrl.create({
            header: "Data",
            message: (JSON.stringify(this.userData)),
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',

                }

            ]
        });
        await alert.present();
    }


}
