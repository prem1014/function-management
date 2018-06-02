import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'src/app/login/module#LoginModule'
    },
    {
        path: 'home',
        loadChildren: 'src/app/search/module#SearchModule'
    },
    {
        path: 'signup',
        loadChildren: 'src/app/sign-up/module#SignUpModule'
    },
    {
        path: 'dashboard',
        loadChildren: 'src/app/dashboard/module#DashboardModule'
    },
    {
        path: 'customer-dashboard',
        loadChildren: 'src/app/customer-dashboard/module#CustomerDashboardModule'
    },
    {
        path: '401-error',
        loadChildren: 'src/app/401/module#Error401Module'
    },
    {
        path: 'booking',
        loadChildren: 'src/app/customer-dashboard/booking/module#BookingModule'
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login/signup', redirectTo: 'signup'}
];
