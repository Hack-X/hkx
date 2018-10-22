import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ArticleService} from '../../providers/article-service-rest';
import {ArticleDetailPage} from '../article-detail/article-detail';
import {SERVER_URL} from '../../providers/config';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

    favorites: Array<any>;
    serverUrl: string = SERVER_URL;

    constructor(public navCtrl: NavController, public service: ArticleService) {
        this.getFavorites();
    }

    itemTapped(show) {
        this.navCtrl.push(ArticleDetailPage, show);
    }

    deleteItem(show) {
        this.service.unfavorite(show)
            .then(() => {
                this.getFavorites();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    getFavorites() {
        this.service.getFavorites()
            .then(data => this.favorites = data);
    }

}
