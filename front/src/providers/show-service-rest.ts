import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

let showsURL = SERVER_URL + 'shows/';

@Injectable()
export class ShowService {
  favorites: Array<any> = [];

    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(showsURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(showsURL + id)
            .map(res => res.json())
            .toPromise();
    }

    getFavorites() {
        return Promise.resolve(this.favorites);
    }

    canFavorite(show) {
        console.log(show);
        console.log(this.favorites);
        return this.favorites.map(s => s._id).indexOf(show._id) === -1;
    }

    favorite(show) {
        this.favorites.push(show);
        return Promise.resolve();
    }

    unfavorite(show) {
        let index = this.favorites.map(s => s._id).indexOf(show._id);
        if (index > -1) {
          this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    }
}