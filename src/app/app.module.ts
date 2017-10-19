import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ContatoFormPage } from '../pages/contatoform/contatoform';
import { ContatosProvider } from '../providers/contatos/contatos';
import { PostsProvider } from '../providers/posts/posts';

export const firebaseConfig = {
  apiKey: "AIzaSyDJemdsW897HWidsvJ40JCWKOvzm4mwiAI",
  authDomain: "lvl5-ionic.firebaseapp.com",
  databaseURL: "https://lvl5-ionic.firebaseio.com",
  projectId: "lvl5-ionic",
  storageBucket: "lvl5-ionic.appspot.com",
  messagingSenderId: "383181670617"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ContatoFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ContatoFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginPage,
    ContatosProvider,
    PostsProvider
  ]
})
export class AppModule {}
