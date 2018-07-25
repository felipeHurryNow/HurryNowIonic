import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { RedditService} from '../../app/services/reddit.service';
import { ListaDescuentosPage } from '../listaDescuentos/listaDescuentos';


@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  items: any;
  constructor(public navCtrl: NavController, private redditService:RedditService) {
  	/*this.platform.ready().then(() => {
  		this.localNotifications.on("click", (noti, state) => {
  			alert(state);
  			alert(noti.data);
  		});
  	});*/
  }


  iniciarSesion(){
    this.navCtrl.push(ListaDescuentosPage);
  }

}