import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NgZone } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';

import { MyApp } from './app.component';
import { ListaDescuentosPage } from '../pages/listaDescuentos/listaDescuentos';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { PdfDescuentoPage } from '../pages/pdfDescuento/pdfDescuento';
import { ProfilePage } from '../pages/profile/profile';
import { StoresPage } from '../pages/stores/stores';
import { PurchasesPage } from '../pages/purchases/purchases';
import { MapsPage } from '../pages/maps/maps';

import { GoogleMaps } from '@ionic-native/google-maps';

import { RedditService } from './services/reddit.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    ListaDescuentosPage,
    LoginPage,
    PdfDescuentoPage,
    ProfilePage,
    StoresPage,
    PurchasesPage,
    MapsPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaDescuentosPage,
    LoginPage,
    PdfDescuentoPage,
    ProfilePage,
    StoresPage,
    PurchasesPage,
    MapsPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    BackgroundGeolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications,
    RedditService
  ]
})
export class AppModule {}
