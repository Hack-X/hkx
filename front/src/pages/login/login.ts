import {Component, ViewChild} from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import {UserService} from "../../providers/user-service-rest";
import {WelcomePage} from "../welcome/welcome";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild(Slides) slides: Slides;

    identifier: string = "";
    password: string = "";
    errorDescription: any = { message: '' };

    constructor(public navCtrl: NavController, public userService: UserService) {
    }

    ngAfterViewInit() {
        let jwt = window.localStorage.getItem('jwt');
        if (jwt) {
            this.navCtrl.setRoot(WelcomePage);
        }
    }

    login() {
        let navCtrl = this.navCtrl;
        let errorDescription = this.errorDescription;
        this.userService.login(this.identifier, this.password).then(
            function(auth) {
                localStorage.setItem('jwt', auth.jwt);
                navCtrl.setRoot(WelcomePage)
            },
            function(err) {
                let payload = JSON.parse(err._body);
                errorDescription.message = payload.message;
            }
        );
    }

}