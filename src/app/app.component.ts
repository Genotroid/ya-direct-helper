import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        const apiUrl = `https://oauth.yandex.ru/authorize`;
        const params = new HttpParams({
            fromObject: {response_type : 'code', client_id: 'ee2142df0c6d4b5796658e65c190216a'},
        });

        const responce = this.http.get(apiUrl, { params });
        console.log('init sctript', responce.subscribe());
    }
}
