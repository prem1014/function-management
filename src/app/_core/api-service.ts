import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()

export class APIService {
    public serviceDetail;
    public redirectUrl;
    private apiUrl = 'http://localhost:8888/api/';
    public user = new Subject<any>();
    public loggedInUser$ = this.user.asObservable();
    constructor(private http: HttpClient) {

    }

    public authenticateUser(user) {
        return this.http.post(this.apiUrl + 'login', user);
    }
    public saveService(serviceDetail) {
        return this.http.post(this.apiUrl + 'provider', serviceDetail);
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

    public signup(usersDetails) {
        return this.http.post(this.apiUrl + 'login',  usersDetails);
    }

    public saveLoggedInUser(user): void {
        this.user.next(user);
    }

    public saveCustomerDetail(customerDetail) {
        return this.http.post(this.apiUrl + 'customer-detail', customerDetail);
    }

    public getAllServices() {
        return this.http.get(this.apiUrl + 'provider');
    }

    public searchServicesDetail(queryDetail) {
        return this.http.post(this.apiUrl + 'search', queryDetail);
    }

}
