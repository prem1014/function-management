import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-booking',
  templateUrl: './component.html'  
})

export class ViewBookingComponent implements OnInit {
    
    protected viewBookingData: any = [];
    public popupData: any;
    public isPopupDisplay: boolean = false;

    ngOnInit() {

        this.popupData = {    
            referenceId: '',
            serviceName: '',
            serviceType: '',
            customerName: '',
            phoneNumber: '',
            emailAddress: ''
        }

        //Code to do
        this.viewBookingData = [
            {
                referenceId: 'BT1',
                serviceName: 'Temp1',
                serviceType: 'Taxi',
                customerName: 'prem',
                phoneNumber: '+44789789789',
                emailAddress: 'premprakash@gmail.com',
                distict: 'Chapra',
                state: 'Bihar',
                pinCode: '458798'
            },
            {
                referenceId: 'BT2',
                serviceName: 'Temp2',
                serviceType: 'Marriage Hall',
                customerName: 'prem',
                phoneNumber: '+44789789789',
                emailAddress: 'premprakash@gmail.com',
                distict: 'Chapra',
                state: 'Bihar',
                pinCode: '458798' 
            }
        ]
    }

    protected deleteService() {
        
    }

    protected viewService(itemData: any) {
        this.isPopupDisplay = true;
        this.popupData = itemData;
        this.popupData.popupType = "viewDetail"
        console.log(this.popupData);
    }

    public popupClose() {
        console.log("here reached");    
        this.isPopupDisplay = false;
    }
}