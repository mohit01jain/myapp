import {AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Router} from '@angular/router';
// import { Plugins } from '@capacitor/core';
// const { Geolocation, Toast } = Plugins;
declare var google;
@Component({
  selector: 'app-directionalmap',
  templateUrl: './directionalmap.page.html',
  styleUrls: ['./directionalmap.page.scss'],
})
export class DirectionalmapPage implements OnInit, AfterViewInit {
  @ViewChild('mapElement', { static: true })mapElement: ElementRef<HTMLDivElement>;
  directionsService = new (google.maps.DirectionsService)();
  directionsDisplay = new (google.maps.DirectionsRenderer)();
  directionForm: FormGroup;
  public currentlocation: any;
  destination: any = {
    lat: 26.879244,
    lng: 75.778540
  };
  public lat: any;
  public lng: any;
  wait: any;
  public mydes: any;
  // tslint:disable-next-line:max-line-length
  constructor(public ngZone: NgZone, public router: Router, public fb: FormBuilder, public geolocation: Geolocation) {this.createDirectionForm(); }

  ngAfterViewInit(): void {
    //   this.geolocation.getCurrentPosition().then((resp) => {
    //   this.currentLocation.lat = resp.coords.latitude;
    //   this.currentLocation.lng = resp.coords.longitude;
    // });
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 18,
      center: this.destination,
      disableDefaultUI: true
    });
    this.directionsDisplay.setMap(map);
  }

  ngOnInit(): void {
  }
  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }

  calculateAndDisplayRoute() {
    this.mydes = this.destination;
    const that = this;

    navigator.geolocation.watchPosition((position) => {

      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      console.log(this.lat, this.lng);
      this.currentlocation = this.lat + ',' + this.lng;
      this.directionsService.route({
        origin: this.currentlocation,
        destination: this.destination,
        travelMode: google.maps.TravelMode.DRIVING
        // travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          that.directionsDisplay.setDirections(response);

        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    });

  }

  /*go() {

    this.router.navigate(['geo']);
  }

  go1() {
    this.router.navigate(['accurate-location']);
  }

  go2() {
    this.router.navigate(['marker']);
  }

  go3() {
    this.router.navigate(['current']);
  }

  go4() {
    this.router.navigate(['browser']);
  }

  go5() {
    this.router.navigate(['test']);
  }

  go6() {
    this.router.navigate(['random']);
  }

  go7() {
    this.router.navigate(['direction']);
  }
  go8() {
    this.router.navigate(['marker-animation']);
  }

  go9() {
    this.router.navigate(['marker-move']);
  }

  go10() {
    this.router.navigate(['getway']);
  }*/
}

