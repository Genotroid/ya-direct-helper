import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ICampaign } from 'src/app/models/campaign';
import { CampaignService } from 'src/app/services/campaign.service';

const ELEMENT_DATA: ICampaign[] = [
    { id: 1, name: 'Test1', status: "ACCEPTED", statistics: {clicks: 10, impressions: 20}, client: 'test' },
    { id: 2, name: 'Test2', status: "DRAFT", statistics: {clicks: 10, impressions: 20}, client: 'test' },
    { id: 3, name: 'Test3', status: "MODERATION", statistics: {clicks: 10, impressions: 20}, client: 'test' },
    { id: 4, name: 'Test4', status: "REJECTED", statistics: {clicks: 10, impressions: 20}, client: 'test' },
];

@Component({
    selector: 'app-index-page',
    templateUrl: './index-page.component.html',
    styleUrls: ['./index-page.component.less'],
})
export class IndexPageComponent implements OnInit {
    constructor(private campaignService: CampaignService){}

    ngOnInit(): void {
        this.campaignService.getAll().subscribe(campagnList => {
            console.log('campagnList', campagnList);
        });
    }

    displayedColumns: string[] = ['id', 'name', 'status', 'clicks', 'impressions', 'client'];
    dataSource = [...ELEMENT_DATA];

    @ViewChild(MatTable) table: MatTable<ICampaign>;

    addData() {
        const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
        this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
        this.table.renderRows();
    }

    removeData() {
        this.dataSource.pop();
        this.table.renderRows();
    }
}
