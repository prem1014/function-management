import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { APIService } from '../_core/api-service';

@Injectable()
export class AuthGuard implements CanActivate {
    private user;
    constructor(private api: APIService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.checkLogin(url);
    }
    private checkLogin(url: string): boolean {
        this.user = JSON.parse(sessionStorage.getItem('user'));
        if (sessionStorage.getItem('isLoggedIn') === 'true' && this.user.role === 'provider') {
            if (url === '/dashboard/add-new' || url === '/dashboard/view-booking' || url === '/dashboard/update') {
                return true;
            }
        } else if (sessionStorage.getItem('isLoggedIn') === 'true' && this.user.role === 'consumer') {
            if (url === '/customer-dashboard/add-customer-detail' || url === '/dashboard/view-booking') {
                return true;
            } else {
                this.router.navigate(['/401-error']);
                return false;
            }
        }
        // Store the attempted URL for redirecting
        this.api.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }
}
