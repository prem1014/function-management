import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from './service-model';
import { APIService } from '../../../_core/api-service';

@Component({
    selector: 'app-add-new',
    templateUrl: './component.html'
})

export class AddNewComponent implements OnInit {
    public service = new Service();
    public serviceDetails = {id: '', name: ''};
    @ViewChild('addService') addService;
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

    public saveService(addService) {
        this.serviceDetails.id = this.serviceDetails.name + '_' + Math.floor(Math.random() * 20);
        this.api.saveService(this.serviceDetails).subscribe((data: any) => {
            if(data.success) {
                console.log(data);
                alert(data.message);     
                this.addService.reset();
            } else {
                alert(data.message);   
            }    
        });
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
