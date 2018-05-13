import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-booking',
  templateUrl: './component.html'  
})

export class ViewBookingComponent implements OnInit {
    
    protected viewBookingData: any = [];
    public popupData: any;
    public isPopupDisplay: boolean = false;
    public self;
    constructor(){
        this.self = this;     
    }
   
    columnDefs = [
        {headerName: 'Reference Id', field: 'referenceId' },
        {headerName: 'Service Name', field: 'serviceName' },
        {headerName: 'Service Type', field: 'serviceType'},
        {headerName: 'Customer Name', field: 'customerName' },
        {headerName: 'Phone Number', field: 'phoneNumber' },
        {headerName: 'Email Address', field: 'emailAddress'},
        {headerName: 'Status', field: 'status', hide: true},
        {headerName: 'Distict', field: 'distict', hide: true},
        {headerName: 'State', field: 'state', hide: true},
        {headerName: 'Pin Code', field: 'pinCode', hide: true},
        {headerName: 'Action', field: 'action', cellRenderer: this.makeIconFunction.bind(this)}
    ];

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
                status: 'Pending',
                distict: 'Chapra',
                state: 'Bihar',
                pinCode: '458798',
                action: ''
            },
            {
                referenceId: 'BT2',
                serviceName: 'Temp2',
                serviceType: 'Marriage Hall',
                customerName: 'prem',
                phoneNumber: '+44789789789',
                emailAddress: 'premprakash@gmail.com',
                status: 'Pending',
                distict: 'Chapra',
                state: 'Bihar',
                pinCode: '458798',
                action: '' 
            }
        ]
    }

    protected deleteService() {
        
    }

    public viewService(itemData: any) {
        this.isPopupDisplay = true;
        this.popupData = itemData;
        this.popupData.popupType = "viewDetail";
        this.popupData.buttonText = "Confirm";
        setTimeout(function() {
            console.log(document.getElementById(itemData.referenceId));
            document.getElementById(itemData.referenceId).style.display = "block";
            console.log(this.popupData);
        });
    }

    public popupClose() {
        console.log("Popup Close");    
        this.isPopupDisplay = false;
    }

    public confirmClicked() {
        console.log("Confirmed");
    }

    makeIconFunction(params) {
        console.log(params);
        var eSpan = document.createElement('span');
        eSpan.innerHTML = '<i class="far fa-eye" data-toggle="modal" [attr.data-target]="#' + params.data.referenceId + '"></i>';
        eSpan.addEventListener('click', () => {
            this.viewService(params.data);
        });
        return eSpan;
    }
}

