import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-search-result-list',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class SearchResultComponent implements OnInit {

    @Input() arrResult: any = [];
    public resultArr: any = [];

    constructor() {
        this.resultArr = [];
        this.arrResult = [];
    }

    ngOnInit() {
        this.resultArr = this.arrResult;
    }
}