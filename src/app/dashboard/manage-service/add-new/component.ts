import { Component, OnInit } from '@angular/core';
import { Service } from './service-model';
import { APIService } from '../../../_core/api-service';

@Component({
    selector: 'app-add-new',
    templateUrl: './component.html'
})

export class AddNewComponent implements OnInit {
    public service = new Service();
    constructor(private api: APIService){
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
    ngOnInit() {}

    public saveService(){
        this.api.saveService(this.service);
    }
}