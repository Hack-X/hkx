import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {ShowService} from '../../providers/show-service-rest';
import {SERVER_URL} from '../../providers/config';

@Component({
    selector: 'page-show-detail',
    templateUrl: 'show-detail.html'
})
export class ShowDetailPage {

    show: any;
    serverUrl: string = SERVER_URL;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public ShowService: ShowService, public toastCtrl: ToastController) {
        this.show = this.navParams.data;
        ShowService.findById(this.show.id).then(
            show => this.show = show
        );
    }

    favorite(show) {
        this.ShowService.favorite(show)
            .then(show => {
                let toast = this.toastCtrl.create({
                    message: 'Show added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    unfavorite(show) {
        this.ShowService.unfavorite(show)
            .then(show => {
                let toast = this.toastCtrl.create({
                    message: 'Show removed from your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    canFavorite(show) {
        return this.ShowService.canFavorite(show);
    }

    share(show) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

}
