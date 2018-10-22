import {Component, ViewChild} from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import {ArticleListPage} from '../article-list/article-list';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController) {
    }

    ngAfterViewInit() {
      this.slides.pager = true;
    }

    openArticleList() {
        this.navCtrl.push(ArticleListPage);
    }
}
