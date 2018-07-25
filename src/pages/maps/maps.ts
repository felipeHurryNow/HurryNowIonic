// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { Geolocation } from '@ionic-native/geolocation';
//
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   CameraPosition,
//   MarkerOptions,
//   Marker
//  } from '@ionic-native/google-maps';
//
// @Component({
//   selector: 'page-maps',
//   templateUrl: 'maps.html'
// })
// export class MapsPage {
//   map:GoogleMap;
//   lat:any; lang:any;
//   constructor(private geolocation: Geolocation, public navCtrl: NavController) {
//     this.loadGoogleMap();
//
//   }
//   loadGoogleMap(){
//     let mapOptions: GoogleMapOptions = {
//       camera: {
//         target: {
//           lat: 43.0741904,
//           lng: -89.3809802
//         },
//         zoom: 18,
//         tilt: 30
//       }
//     };
//     this.map = new GoogleMaps.create('map_canvas', mapOptions);
//     this.map.one(GoogleMapsEvent.MAP_READY)
//       .then(() => {
//         this.map.addMarker({
//             title: 'Ionic',
//             icon: 'blue',
//             animation: 'DROP',
//             position: {
//               lat: 43.0741904,
//               lng: -89.3809802
//             }
//           })
//           .then(marker => {
//             marker.on(GoogleMapsEvent.MARKER_CLICK)
//               .subscribe(() => {
//
//               });
//           });
//
//       });
//   }
//
// }

import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { BackgroundGeolocation, BackgroundGeolocationConfig } from '@ionic-native/background-geolocation';

import { LocalNotifications } from '@ionic-native/local-notifications';

declare var google;
var locations =  [];

@Component({
  selector: 'maps-page',
  templateUrl: 'maps.html'
})
export class MapsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  public watch: any;
  public lat: number = 0;
  public lng: number = 0;


  constructor(public navCtrl: NavController, private alertCtrlr:AlertController, private platform:Platform, private localNotifications:LocalNotifications,
    private backgroundGeolocation: BackgroundGeolocation, public zone: NgZone, public geolocation: Geolocation) {

  }

  ionViewDidLoad(){
    locations.push("4.70220849, -74.041989", "4.6188864, -74.1354241", "4.5902, -74.1244");
    this.loadMap();

  }

  loadMap(){
    var dist = 1; //Rango dentro del cual se buscaran promociones;

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(4.702978, -74.0344);   //(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();
      this.addMarkerSales();

    }, (err) => {
      console.log(err);
    });
    this.closeDiscount(dist);
    this.startTracking();
  }



  addMarker(){

    let marker2 = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      icon: {url: 'assets/imgs/man4.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(50, 50)},
      // The origin for this image is (0, 0).
      // origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      // anchor: new google.maps.Point(0, 32)},
      position: this.map.getCenter()

    });
  }

  addMarkerSales(){

    for(var i = 0; i < locations.length; i++) {
        var loc = locations[i].split(",");
        var lat = parseFloat(loc[0]);
        var lng = parseFloat(loc[1]);

        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          icon: {url: 'assets/imgs/sale.png',
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(50, 50)},
          // The origin for this image is (0, 0).
          // origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          // anchor: new google.maps.Point(0, 32)},
          position: new google.maps.LatLng(lat, lng)

        });

         //if you are expecting a user to input a single pair of coordinates in the input box you will need to do this

     }



  // let content = "<h4>Information!</h4>";
  //
  // this.addInfoWindow(marker, content);

  }

scheduleNotification(){
    this.platform.ready().then(() => {
      this.localNotifications.schedule({
      id: 1,
      title: 'Este es el titulo',
      text: 'Estas cerca a una tienda con descuentos',
      //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      //data: { secret: key }
      at: new Date(new Date().getTime() + 3600)
    });
    });
  }

getDistanceFromLatLonInKm(lat1,lon1) {
    var loc = locations[0].split(",");
    var lat2 = loc[0];
    var lon2 = loc[1];
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
   }

  deg2rad(deg) {
    return deg * (Math.PI/180)
   }


  closeDiscount(dist){
    if (this.getDistanceFromLatLonInKm(4.702978, -74.0344) < dist){
      this.scheduleNotification();
      this.presentAlert(this.getDistanceFromLatLonInKm(4.702978, -74.0344));
    }
   }

 presentAlert(msj) {
    let alert = this.alertCtrlr.create({
      title: 'HurryNow!',
      subTitle: 'Estas a '+msj+'Km, de encontrar un descuento',
      buttons: ['OK']
    });
    alert.present();
  }


//Code to start tracking in background
  public startTracking() {
    let config : BackgroundGeolocationConfig = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: true,
      interval: 2000
    };

    this.backgroundGeolocation.configure(config).subscribe((location) => {

      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

      // Update inside of Angular's zone
      this.zone.run(() => {
        this.lat = location.latitude;
        this.lng = location.longitude;
      });
    }, (err) => {
      console.log(err);
      });

    this.backgroundGeolocation.start();

    // Background tracking
    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
      console.log(position.coords.latitude);

      this.zone.run(() => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    });
  }

  public stopTracking() {
    console.log('stopTracking');

    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();
  }

}
