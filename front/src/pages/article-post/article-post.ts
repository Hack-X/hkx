import {Component, ViewChild} from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import {UserService} from "../../providers/user-service-rest";
import {WelcomePage} from "../welcome/welcome";
import {ArticleService} from "../../providers/article-service-rest";

@Component({
    selector: 'article-post',
    templateUrl: 'article-post.html'
})

export class ArticlePostPage {

    constructor(public navCtrl: NavController, public service: ArticleService) {
    }


    article = {}
    logForm() {
    console.log(this.article)
    }

    submitForm() {
        this.service.create(this.article)
    }
}