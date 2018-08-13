import { Component, OnInit } from "../../../../node_modules/@angular/core";
import { HomeService } from "./homeservice";

@Component({
    selector: 'home',
    templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {
    greeting = '';
    constructor(private service: HomeService) { }
    ngOnInit() {
        this.service.greet().subscribe(response => {
            this.greeting = response;
        }, error => this.greeting = 'Something bad happened!');
    }
}