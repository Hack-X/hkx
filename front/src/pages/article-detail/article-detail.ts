import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {ArticleService} from '../../providers/article-service-rest';
import {SERVER_URL} from '../../providers/config';

@Component({
    selector: 'page-article-detail',
    templateUrl: 'article-detail.html'
})
export class ArticleDetailPage {

    article: any;
    serverUrl: string = SERVER_URL;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public articleService: ArticleService, public toastCtrl: ToastController) {
        console.log(this.navParams);
        this.article = this.navParams.data;
     articleService.findById(this.article.id).then(
         article => this.article = article
       );
    }

    favorite(article) {
        this.articleService.favorite(article)
            .then(article => {
                let toast = this.toastCtrl.create({
                    message: 'article added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    unfavorite(article) {
        this.articleService.unfavorite(article)
            .then(article => {
                let toast = this.toastCtrl.create({
                    message: 'article removed from your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    canFavorite(article) {
        return this.articleService.canFavorite(article);
    }

    share(article) {
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
