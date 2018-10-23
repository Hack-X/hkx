import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {ArticleService} from '../../providers/article-service-rest';
import {ArticleDetailPage} from '../article-detail/article-detail';
import leaflet from 'leaflet';
import {SERVER_URL} from '../../providers/config';


@Component({
    selector: 'page-article-list',
    templateUrl: 'article-list.html'
})
export class ArticleListPage {

    articles: Array<any>;
    articlesForSearch: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;
    serverUrl = SERVER_URL;

    constructor(public navCtrl: NavController, public service: ArticleService, public config: Config) {
        this.findAll();
    }

    openArticleDetail(article: any) {
        console.log(article);
        this.navCtrl.push(ArticleDetailPage, article);
    }

    onInput(event) {
         // Reset items back to all of the items
        this.articles = this.articlesForSearch;

        // set val to the value of the searchbar
        let val = this.searchKey;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.articles = this.articles.filter((article) => {
            return (article.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => {
                this.articles = data;
                this.articlesForSearch = data;
                console.log(this.articles);
            })
            .catch(error => alert(error));
    }

    articleMap() {
        setTimeout(() => {
            this.map = leaflet.map("map").setView([48.85, 2.35], 10);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.articleMarkers();
        })
    }

    articleMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.articles.forEach(article => {
            if (article.lat, article.lng) {
                let marker: any = leaflet.marker([article.lat, article.lng]).on('click', event => this.openArticleDetail(event.target.data));
                marker.data = article;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }

}
