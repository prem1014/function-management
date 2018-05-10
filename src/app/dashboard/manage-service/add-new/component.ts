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
            }
        ]
        this.service.vehicleType = [
            {
                id: 'bloro',
                name: 'Bloro'
            },
            {
                id: 'scorpiyo',
                name: 'Scorpiyo'
            }
        ]
        this.service.district = [
            {
                id: 'gop',
                name: 'Gopalganj'
            },
            {
                id: 'cpr',
                name: 'Chapra'
            }
        ]
        this.service.block = [
            {
                id: 'baik',
                name: 'Baikunthpur',
                distId: 'gop'
            },
            {
                id: 'sidh',
                name: 'Sidhwaliya',
                distId: 'gop'
            }
        ]
    }
    ngOnInit() {}

    public saveService(){
        this.api.saveService(this.service);
    }
}