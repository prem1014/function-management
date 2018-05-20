import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class APIService {
    public serviceDetail;
    public redirectUrl;
    private apiUrl = 'http://localhost:8888/api/';
    constructor(private http: HttpClient) {

    }

    public saveService(serviceDetail) {
        this.serviceDetail = serviceDetail;
    }

    public getService() {
        return this.serviceDetail;
    }

    public getStateByCountryId(id) {
        return this.http.get(this.apiUrl + 'state' + '/' + id);
    }

    public getDistrictByStateId(id) {
        return this.http.get(this.apiUrl + 'district' + '/' + id);
    }
}
