import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { RedditService} from '../../app/services/reddit.service';
import { PdfDescuentoPage } from '../pdfDescuento/pdfDescuento';


@Component({
  selector: 'page-second',
  templateUrl: 'listaDescuentos.html'
})
export class ListaDescuentosPage {
  items: any;
  // var product;
  paramsParaSegPag: Object;

  constructor(public navCtrl: NavController, private redditService:RedditService, public app: App) {
  }


  ngOnInit(){
  	this.getPosts();
  }


  getPosts(){
  	this.redditService.getPosts().subscribe(response => {
  		this.items = response;
  	});
  }

  generarDescuento(idProduct){
    var id = idProduct;
    this.getProductById(id);
    //this.navCtrl.push(PdfDescuentoPage);

  }

  getProductById(idProduct){
    this.redditService.getPostId(idProduct).subscribe(response => {
  	var product = response;
    var idProduct = response.idProduct.idProduct.toString();
    // this.paramsParaSegPag = {
    //     description: product.
    //   };
    this.app.getRootNav().setRoot(PdfDescuentoPage,{  product: product, idProduct: idProduct} );
    var string = "hola";
  	});


    //this.navCtrl.push(PdfDescuentoPage, this.paramsParaSegPag);



  }
}
