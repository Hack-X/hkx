import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

@Injectable()
export class UserService {

    constructor(public http: Http) {
        this.http = http;
    }

    login(identifier, password) {
        let data = {
            identifier,
            password
        };
        return this.http.post(SERVER_URL + 'auth/local/', data)
            .map(res => res.json())
            .toPromise();
    }

    register(id) {
        return this.http.get(SERVER_URL + 'auth/local/register')
            .map(res => res.json())
            .toPromise();
    }

}