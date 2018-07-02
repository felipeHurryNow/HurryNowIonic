import { Component, ViewChild } from '@angular/core';
//import { Platform } from 'ionic-angular';
import { IonicPage, NavController, NavParams, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PdfDescuentoPage } from '../pages/pdfDescuento/pdfDescuento';
import { ListaDescuentosPage } from '../pages/listaDescuentos/listaDescuentos';
import { ProfilePage } from '../pages/profile/profile';
import { StoresPage } from '../pages/stores/stores';
import { PurchasesPage } from '../pages/purchases/purchases';




import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage = LoginPage;
  pages: Array <{title: String, component: any}>;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {title: 'Perfil', component: ProfilePage },
      {title: 'Tiendas', component: StoresPage },
      {title: 'Descuentos', component: ListaDescuentosPage },
      {title: 'Tus Compras', component: PurchasesPage },

    ];
  }



  openPage(page){
    this.nav.setRoot(page.component);
  }
}
