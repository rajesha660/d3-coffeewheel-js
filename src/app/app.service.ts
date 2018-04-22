import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import 'rxjs/add/operator/map'

@Injectable()
export class  AppService {
    constructor(public http: Http) {

    }

    getJsonData() {
        return this.http.get("assets/wheel.json")
                .map(function (response) {
                    return response.json()
                });
    }
}