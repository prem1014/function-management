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
        return this.http.post(this.apiUrl + 'provider' + '?token=' + sessionStorage.getItem('token'), serviceDetail);
    }

    public getService() {
        return this.serviceDetail;
    }

    public getStateByCountryId(id) {
        return this.http.get(this.apiUrl + 'state' + '/' + id + '?token=' + sessionStorage.getItem('token'));
    }

    public getDistrictByStateId(id) {
        return this.http.get(this.apiUrl + 'district' + '/' + id + '?token=' + sessionStorage.getItem('token'));
    }

    public signup(usersDetails) {
        return this.http.post(this.apiUrl + 'login',  usersDetails);
    }

    public saveLoggedInUser(user): void {
        this.user.next(user);
    }

    public saveCustomerDetail(customerDetail) {
        return this.http.post(this.apiUrl + 'customer-detail' + '?token=' + sessionStorage.getItem('token'), customerDetail);
    }

    public getAllServices(createdBy) {
        return this.http.get(this.apiUrl + 'provider' + '/' + createdBy + '?token=' + sessionStorage.getItem('token'));
    }

    public searchServicesDetail(queryDetail) {
        return this.http.post(this.apiUrl + 'search', queryDetail);
    }

    public getServiceData(serviceId) {
        return this.http.get(this.apiUrl + 'provider' + '/' + serviceId + '?token=' + sessionStorage.getItem('token'));
    }
}
