import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService} from '../../app/services/reddit.service';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-second',
  templateUrl: 'pdfDescuento.html'
})
export class PdfDescuentoPage {
  items: any;
  constructor(public navCtrl: NavController, private redditService:RedditService) {
  }



  getPosts(category, limit){
  	this.redditService.getPosts(category, limit).subscribe(response => {
  		this.items = response
  	});
  }

  nextPage(){
    this.navCtrl.push(LoginPage);
  }
}