import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ListaDescuentosPage } from '../pages/listaDescuentos/listaDescuentos';
import { LoginPage } from '../pages/login/login';
import { PdfDescuentoPage } from '../pages/pdfDescuento/pdfDescuento';

import { RedditService } from './services/reddit.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    ListaDescuentosPage,
    LoginPage,
    PdfDescuentoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaDescuentosPage,
    LoginPage,
    PdfDescuentoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RedditService
  ]
})
export class AppModule {}
