import { Injectable } from "../../../../node_modules/@angular/core";
import { HttpClient, HttpHeaders } from "../../../../node_modules/@angular/common/http";
import { environment } from "../../../environments/environment";

const httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'imisecret'
    })
};

@Injectable()
export class HomeService {

    constructor(private http: HttpClient) { }

    greet() {
        return this.http.get(environment.serviceUrl + 'secure/api/greet', {
            headers: new HttpHeaders({
                'Authorization': 'imisecret'
            }),
            responseType: 'text'
        });
    }
}