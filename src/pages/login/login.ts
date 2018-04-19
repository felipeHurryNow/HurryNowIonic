import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService} from '../../app/services/reddit.service';
import { ListaDescuentosPage } from '../listaDescuentos/listaDescuentos';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  items: any;
  constructor(public navCtrl: NavController, private redditService:RedditService) {
  }


  iniciarSesion(){
    this.navCtrl.push(ListaDescuentosPage);
  }

}