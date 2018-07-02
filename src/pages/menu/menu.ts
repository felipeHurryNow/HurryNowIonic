import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';


export interface PageInterface{
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'LoginPage'

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Perfil', pageName: 'LoginPage', tabComponent: 'ListaDescuentosPage', index: 0, icon:'home' },
    {title: 'Tus puntos', pageName: 'LoginPage', tabComponent: 'PdfDescuentoPage', index: 1, icon:'contacts' },
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface){

  }

  isActive(page: PageInterface){

  }



}
