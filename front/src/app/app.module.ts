import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {ShowListPage} from '../pages/show-list/show-list';
import {ShowDetailPage} from '../pages/show-detail/show-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {LoginPage} from '../pages/login/login';
import {AboutPage} from '../pages/about/about';

import {ShowService} from "../providers/show-service-rest";
import {UserService} from "../providers/user-service-rest";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    ShowListPage,
    ShowDetailPage,
    FavoriteListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    ShowListPage,
    ShowDetailPage,
    FavoriteListPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShowService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
