import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedditService} from '../../app/services/reddit.service';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-second',
  templateUrl: 'pdfDescuento.html'
})
export class PdfDescuentoPage {
  items: any;
  param: any;
  constructor(public navCtrl: NavController, private redditService:RedditService, public navParams: NavParams) {
    this.param = this.navParams.get('product')
    var string = "hola";
  }
  // ionViewDidLoad() {
  //   let product = this.navParams.get('product')
  //   var string = "hola";
  // }
  getProduct(product){
    var pr = product;
  }
  getPosts(){
  	this.redditService.getPosts().subscribe(response => {
  		this.items = response
  	});
  }

  nextPage(){
    this.navCtrl.push(LoginPage);
  }
}
