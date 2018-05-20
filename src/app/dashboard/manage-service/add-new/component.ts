import { Component, OnInit } from '@angular/core';
import { Service } from './service-model';
import { APIService } from '../../../_core/api-service';

@Component({
    selector: 'app-add-new',
    templateUrl: './component.html'
})

export class AddNewComponent implements OnInit {
    public service = new Service();
    public serviceDetails = {};
    constructor(private api: APIService) {
        this.service.serviceType = [
            {
                id: 'taxi',
                name: 'Taxi'
            },
            {
                id: 'marriageHall',
                name: 'Marriage Hall'
            }
        ];
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
        ];
        this.service.state = [
            {
                id: 'BH',
                name: 'Bihar',
            },
            {
                id: 'GJ',
                name: 'Gujrat',
            }
        ];
    }
    ngOnInit() {
        this.getStateByCountryId('IND');
    }

    public saveService() {
        this.api.saveService(this.serviceDetails);
    }

    private getStateByCountryId(id): void {
        this.api.getStateByCountryId(id)
            .subscribe(data => {
                console.log(data);
                this.service.state = data;
            });
    }

    public getDistrictByStateId(id) {
        this.api.getDistrictByStateId(id)
        .subscribe(data => {
            this.service.district = data;
        });
    }
}
