import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { APIService } from '../_core/api-service';
import { ToasterService } from '../_core/toaster-service';
import { Utility } from '../_core/utility';

@Component({
    selector: 'app-dashbaord',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class DashboardComponent implements OnInit {
    public serviceDetails;
    public loadingServiceDetails: boolean;
    private user;
    public isshowService: boolean;
    public isShowBooking: boolean;
    public isShowYBooking: boolean;
    public isShowMBooking: boolean;    
    public requestTypeHeader: string;
    public bookingDetails;
    public monthlyBooking;
    public yearlyBooking;
    constructor(private api: APIService, private toaster: ToasterService, public router: Router, public activeRoute: ActivatedRoute) {
        this.user = JSON.parse(sessionStorage.getItem('user'));
    }
    ngOnInit() {
        this.getAllServices();
        this.getAllBooking();
        this.monthlyBooking = Utility.getMonthlyTotal(this.bookingDetails, 6);
        this.yearlyBooking = Utility.getYearlyTotal(this.bookingDetails,2018);
    }

    private getAllServices() {
        this.loadingServiceDetails = true;
        this.api.getAllServices(this.user.email)
            .subscribe(
                (response: any) => {
                    this.loadingServiceDetails = false;
                    if (response.success) {
                        this.serviceDetails = response.data;
                    } else {
                        if (response.isTokenExpired) {
                            this.router.navigateByUrl('/login');
                        }
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

    private getAllBooking() {
        this.bookingDetails = [
            {
                name: 'XYZ Marriage Hall',
                district: 'Gopalganj',
                customerName: 'Rajesh Gupta',
                date: '05-12-2017',
                totalPrice: 20000,
                mobile: 8446012999
            },
            {
                name: 'XYZ Marriage Hall',
                district: 'Gopalganj',
                customerName: 'Rajesh Gupta',
                date: '02-05-2017',
                totalPrice: 20000,
                mobile: 8446012999
            },
            {
                name: 'XYZ Marriage Hall',
                district: 'Gopalganj',
                customerName: 'Rajesh Gupta',
                date: '05-05-2018',
                totalPrice: 20000,
                mobile: 8446012999
            },
            {
                name: 'XYZ Marriage Hall',
                district: 'Gopalganj',
                customerName: 'Rajesh Gupta',
                date: '06-06-2018',
                totalPrice: 20000,
                mobile: 8446012999
            },
            {
                name: 'XYZ Marriage Hall',
                district: 'Gopalganj',
                customerName: 'Rajesh Gupta',
                date: '06-08-2018',
                totalPrice: 20000,
                mobile: 8446012999
            },
            {
                name: 'XYZ Marriage Hall',
                district: 'Gopalganj',
                customerName: 'Rajesh Gupta',
                date: '06-15-2018',
                totalPrice: 20000,
                mobile: 8446012999
            }
        ];
    }
    public showAll(requestType) {
        switch (requestType) {
            case 'services':
                this.isshowService = true;
                this.isShowBooking = false;
                this.isShowMBooking = false;
                this.isShowYBooking = false;
                this.requestTypeHeader = 'List of services';
                break;
            case 'booking':
                this.isShowBooking = true;
                this.isshowService = false;
                this.isShowMBooking = false;
                this.isShowYBooking = false;
                this.requestTypeHeader = 'Booking';
                break;
            case 'yrlyBooking':
                this.isShowYBooking = true;
                this.isShowMBooking = false;
                this.isshowService = false;
                this.isShowBooking = false;
                this.requestTypeHeader = 'Yearly Booking';
                break;
            case 'monthlyBooking':
                this.isShowMBooking = true;
                this.isshowService = false;
                this.isShowYBooking = false;
                this.isShowBooking = false;
                this.requestTypeHeader = 'Monthly Booking';
                break;
            default:
                this.isshowService = false;
                this.isShowBooking = false;
                this.requestTypeHeader = 'No selection';
        }
    }
}
