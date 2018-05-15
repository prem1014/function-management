import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../_core/api-service';
import { Service } from '../add-new/service-model';

@Component({
    selector: "app-update",
    templateUrl: "./component.html"
})
export class UpdateComponent 
{
    public serviceDetails={};
    public service = new Service();
    constructor(){
        this.service.serviceType = [
            {
                id: 'taxi',
                name: 'Taxi'
            },
            {
                id: 'marriageHall',
                name: 'Marriage Hall'
            }
        ]
        this.service.district = [
            {
                id: 'gop',
                name: 'Gopalganj',
                stateId: 'BH'
            },
            {
                id: 'cpr',
                name: 'Chapra',
                stateId: 'BH'
            }
        ]
        this.service.state = [
            {
                id: 'BH',
                name: 'Bihar',
            },
            {
                id: 'GJ',
                name: 'Gujrat',
            }
        ]
    }
    ngOnInit(){
        this.getServiceDetails();
    }
    
    private getServiceDetails(){
        this.serviceDetails = {
            serviceType: 'marriageHall',
            pinCode: '841420'
        } 
    }
}
 
