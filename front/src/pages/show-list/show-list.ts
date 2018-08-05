import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {ShowService} from '../../providers/show-service-rest';
import {ShowDetailPage} from '../show-detail/show-detail';
import leaflet from 'leaflet';
import {SERVER_URL} from '../../providers/config';


@Component({
    selector: 'page-show-list',
    templateUrl: 'show-list.html'
})
export class ShowListPage {

    shows: Array<any>;
    showsForSearch: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;
    serverUrl = SERVER_URL;

    constructor(public navCtrl: NavController, public service: ShowService, public config: Config) {
        this.findAll();
    }

    openShowDetail(show: any) {
        this.navCtrl.push(ShowDetailPage, show);
    }

    onInput(event) {
         // Reset items back to all of the items
        this.shows = this.showsForSearch;

        // set val to the value of the searchbar
        let val = this.searchKey;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.shows = this.shows.filter((show) => {
            return (show.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => {
                this.shows = data;
                this.showsForSearch = data;
            })
            .catch(error => alert(error));
    }

    showMap() {
        setTimeout(() => {
            this.map = leaflet.map("map").setView([48.85, 2.35], 10);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.showMarkers();
        })
    }

    showMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.shows.forEach(show => {
            if (show.lat, show.lng) {
                let marker: any = leaflet.marker([show.lat, show.lng]).on('click', event => this.openShowDetail(event.target.data));
                marker.data = show;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }

}
