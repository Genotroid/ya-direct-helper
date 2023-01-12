import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppSettings } from '../appSettings';
import { Observable } from 'rxjs';
import { ICampaign } from '../models/campaign';

@Injectable({
    providedIn: 'root',
})
export class CampaignService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<ICampaign[]> {
        const apiUrl = `${AppSettings.API_URL}/campaigns`;

        const headers = new HttpHeaders({
            Authorization: 'Bearer y0_AgAAAABYKNSrAAj3bgAAAADZlReoKqX54pzlRx6_IKLjjjWxwlD-VYQ',
            'Accept-Language': 'ru',
            'Client-Login': 'genotroiddisk',
            'Content-Type': 'application/json; charset=utf-8',
        });

        const requestBody: any = {
            method: 'get',
            params: {
                SelectionCriteria: {},
                FieldNames: ['Id', 'Name'],
            },
        };

        return this.http.post<ICampaign[]>(apiUrl, requestBody, { headers });
    }
}
