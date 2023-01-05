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
            Authorization: 'Bearer TOKEN',
            'Accept-Language': 'en',
            'Client-Login': 'CLIENT_LOGIN',
        });
        const params = new HttpParams({
            fromObject: {},
        });

        return this.http.get<ICampaign[]>(apiUrl, { headers, params });
    }
}
