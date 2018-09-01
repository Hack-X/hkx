import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ShowService} from '../../providers/show-service-rest';
import {ShowDetailPage} from '../show-detail/show-detail';
import {SERVER_URL} from '../../providers/config';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

    favorites: Array<any>;
    serverUrl: string = SERVER_URL;

    constructor(public navCtrl: NavController, public service: ShowService) {
        this.getFavorites();
    }

    itemTapped(show) {
        this.navCtrl.push(ShowDetailPage, show);
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
