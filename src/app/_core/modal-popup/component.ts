import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './component.html'  
})

export class PopupComponent implements OnInit {
    
    @Input() popupDisplay: any;
    public displayItem: any;
    @Output() viewDetailEvent = new EventEmitter();

    ngOnInit() {
        console.log("Popup DIsplay");    
        console.log(this.popupDisplay);
        if(this.popupDisplay.popupType == "viewDetail") {

            this.displayItem = [
                {
                    displayName: "Reference Id",
                    displayValue: this.popupDisplay.referenceId
                },
                {
                    displayName: "Customer Name",
                    displayValue: this.popupDisplay.customerName
                },
                {
                    displayName: "Service Name",
                    displayValue: this.popupDisplay.serviceName
                },
                {
                    displayName: "Service Type",
                    displayValue: this.popupDisplay.serviceType
                },
                {
                    displayName: "Phone Number",
                    displayValue: this.popupDisplay.phoneNumber
                },
                {
                    displayName: "Email Address",
                    displayValue: this.popupDisplay.emailAddress
                },
                {
                    displayName: "Distict",
                    displayValue: this.popupDisplay.distict
                },
                {
                    displayName: "State",
                    displayValue: this.popupDisplay.state
                },
                {
                    displayName: "Pin Code",
                    displayValue: this.popupDisplay.pinCode
                }
            ]
        }
    }

    public popupClose() {
        if(this.popupDisplay.popupType == "viewDetail") {
            this.viewDetailEvent.emit();
        }
    }
}
