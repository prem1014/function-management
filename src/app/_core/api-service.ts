import { Injectable } from '@angular/core';

@Injectable()

export class APIService {
    public serviceDetail;
    constructor(){}

    public saveService(serviceDetail){
        this.serviceDetail = serviceDetail;
    }

    public getService() {
        return this.serviceDetail;
    }
}