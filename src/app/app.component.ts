import {Component, OnInit} from '@angular/core';
import {NavController, Platform, /*Events*/} from '@ionic/angular';
import {SplashScreen } from '@ionic-native/splash-screen/ngx';
import {StatusBar } from '@ionic-native/status-bar/ngx';
import {NativeStorage} from "@ionic-native/native-storage/ngx";
import {Router} from "@angular/router";
import {Storage} from '@ionic/storage';
import {Environment } from '@ionic-native/google-maps';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public userType:any;
  public base64Image: string;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl : NavController,
    private nativeStorage : NativeStorage,
    private router : Router,
    public storage: Storage,
/*    public events: Events,*/


  ) {
    /*this.platform.ready();
      this.initializeApp();
      this.pinga();*/


  }

/*
  initializeApp() {
    this.platform.ready().then(() => {
      /!*this.nativeStorage.getItem('google_user')
          .then( data => {
            this.router.navigate(["/user"]);
          }, err => {
            this.router.navigate(["/login"]);
          })
      this.statusBar.styleDefault();*!/
      this.router.navigate(['/login']);
/!*
      this.router.navigate(['/home']);
*!/

    });
  }
*/

  async ngOnInit() {
    await this.platform.ready();
    await this.initializeApp();
    this.profileandnamedisplay();
  }




  initializeApp() {
    this.platform.ready().then(() => {
      Environment.setEnv({

        // api key for server
        API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCLEV562QGsIfx4ONic8A1PsOvjAVQLDmY',


        // api key for local development
        API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCLEV562QGsIfx4ONic8A1PsOvjAVQLDmY'
      })
      console.log(Environment);

      this
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


    profileandnamedisplay(){
    /*  this.storage.get('UserType').then(res=>{
        this.userType = res;
        console.log("----user type----- "+this.userType);
      });

      /!*  this.events.subscribe('UserType',res=>{
          this.userType = res;
          console.log("----event user type ----- "+this.userType);
        });*!/

      this.storage.get('ProfileImage').then((isLoginResult) => {
        this.base64Image = isLoginResult;
        console.log('----' + isLoginResult);
        if (this.base64Image == null || this.base64Image == "") {
          this.base64Image = 'assets/imgs/ic_sign_in.png';
          console.log('----' + this.base64Image);
        }
      });*/
    }




}
