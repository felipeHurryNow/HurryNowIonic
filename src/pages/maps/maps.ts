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

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
var locations =  [];

@Component({
  selector: 'maps-page',
  templateUrl: 'maps.html'
})
export class MapsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  ionViewDidLoad(){
    locations.push("4.6188864, -74.1354241","4.5902, -74.1244");
    this.loadMap();

  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();
      this.addMarkerSales(locations);

    }, (err) => {
      console.log(err);
    });

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

  addMarkerSales(locations){

    for(var i = 0; i < locations.length; i++) {
        var loc = locations[i].split(",");
        var lat = parseFloat(loc[i]);
        var lng = parseFloat(loc[i+1]);

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




}
