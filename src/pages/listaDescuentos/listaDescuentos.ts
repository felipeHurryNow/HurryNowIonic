import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService} from '../../app/services/reddit.service';
import { PdfDescuentoPage } from '../pdfDescuento/pdfDescuento';


@Component({
  selector: 'page-second',
  templateUrl: 'listaDescuentos.html'
})
export class ListaDescuentosPage {
  items: any;
  constructor(public navCtrl: NavController, private redditService:RedditService) {
  }


  ngOnInit(){
  	this.getPosts('sports', 5);
  }


  getPosts(category, limit){
  	this.redditService.getPosts(category, limit).subscribe(response => {
  		this.items = response.description;
  	});
  }

  generarDescuento(){
    this.navCtrl.push(PdfDescuentoPage);
  }
}
