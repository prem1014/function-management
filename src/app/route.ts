import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'src/app/login/module#LoginModule'
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
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login/signup', redirectTo: 'signup'}
];
