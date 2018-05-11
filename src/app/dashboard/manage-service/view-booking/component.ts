import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-booking',
  templateUrl: './component.html'  
})

export class ViewBookingComponent implements OnInit {

    protected viewBookingData: any = [];

    ngOnInit() {
        //Code to do
        this.viewBookingData = [
            {
                referenceId: 'BT1',
                serviceName: 'Temp1',
                serviceType: 'Taxi',
                district: 'chapra',
                state: 'Bihar',
                address: '',
                pinCode: '345678' 
            },
            {
                referenceId: 'BT2',
                serviceName: 'Temp2',
                serviceType: 'Marriage Hall',
                district: 'chapra',
                state: 'Bihar',
                address: '',
                pinCode: '345678' 
            }
        ]
    }
}