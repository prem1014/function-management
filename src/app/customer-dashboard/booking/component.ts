import { Component, OnInit } from '@angular/core';
import { APIService } from '../../_core/api-service'; 
import { Router } from '@angular/router'

@Component({
    selector: 'app-booking',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class BookingComponent implements OnInit {

    public serviceId: any = '';
    public serviceDetails: any = [];

    constructor(private apiService: APIService, private router: Router) {

    }

    ngOnInit() {
        this.serviceId = sessionStorage.getItem('serviceId');
        sessionStorage.setItem('serviceId','');

        this.getServiceDetails();
    }

    public getServiceDetails =  function() {
         this.apiService.getServiceData(this.serviceId).subscribe((data: any)=> {
            if(data.success) {
                this.serviceDetails = data.data[0];  
                console.log(this.serviceDetails);   
            } else {
                console.log(data.message);
            }
         });
    }
    
    public back(e) {
        e.preventDefault();
        this.router.navigateByUrl('/customer-dashboard');
    }
}