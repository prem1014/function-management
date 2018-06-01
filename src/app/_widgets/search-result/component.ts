import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search-result-list',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class SearchResultComponent implements OnInit {

    @Input() arrResult: any = [];
    public resultArr: any = [];

    constructor(private router: Router) {
        this.resultArr = [];
        this.arrResult = [];
    }

    ngOnInit() {
        this.resultArr = this.arrResult;
    }

    public bookNow(bookId) {
        console.log(bookId);
        sessionStorage.setItem('serviceId', bookId);

        if( sessionStorage.getItem('isLoggedIn') == "true" ) {
            this.router.navigateByUrl('/booking');
        } else {
            this.router.navigateByUrl('/login');
        }
    }
}