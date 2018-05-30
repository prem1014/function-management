import { Component, OnInit } from '@angular/core';
import { APIService } from "../_core/api-service";

@Component({
    selector: 'app-search-result',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class SearchComponent {

    public search: any = '';
    public queryDetail: any = '';
    public serachResult: any = []; 
    public isDisplaySearchResult: boolean = false;

    constructor(private apiService: APIService) {

    }

    ngOnInit() {
    }

    public searchClicked() {
        this.isDisplaySearchResult = false;
        this.queryDetail = {name: this.search};
        this.apiService.searchServicesDetail(this.queryDetail).subscribe((data: any) => {
            if(data.success) {
               console.log(data.data);
               this.serachResult = data.data;  
               this.isDisplaySearchResult = true; 
            } else {
                console.log(data.message);
                this.isDisplaySearchResult = false;
            }    
        });        
    }
}