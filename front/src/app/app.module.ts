import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {ArticleDetailPage} from '../pages/article-detail/article-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {LoginPage} from '../pages/login/login';
import {AboutPage} from '../pages/about/about';

import {ArticleService} from "../providers/article-service-rest";
import {UserService} from "../providers/user-service-rest";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArticleListPage } from '../pages/article-list/article-list';

import { ArticlePostPage } from '../pages/article-post/article-post';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    ArticleDetailPage,
    FavoriteListPage,
    LoginPage,
    ArticleListPage,
    ArticlePostPage
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
    ArticleDetailPage,
    FavoriteListPage,
    LoginPage,
    ArticleListPage,
    ArticlePostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ArticleService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
