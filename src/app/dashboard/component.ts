import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { APIService } from '../_core/api-service';
import { ToasterService } from '../_core/toaster-service';

@Component({
    selector: 'app-dashbaord',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class DashboardComponent implements OnInit {
    public serviceDetails;
    public loadingServiceDetails: boolean;
    constructor(private api: APIService, private toaster: ToasterService, public activeRoute: ActivatedRoute) {
    }
    ngOnInit() {
        this.getAllServices();
        console.log(this.activeRoute);
    }

    private getAllServices() {
        this.loadingServiceDetails = true;
        this.api.getAllServices()
        .subscribe(
            (response: any) => {
                this.loadingServiceDetails = false;
                if (response.success) {
                    this.serviceDetails = response.data;
                } else {
                    this.toaster.error({
                        error: true,
                        message: response.message
                    });
                }
            },
            (err: any) => {
                this.loadingServiceDetails = false;
                this.toaster.error({
                    error: true,
                    message: err.message
                });
            }
        );
    }
}
