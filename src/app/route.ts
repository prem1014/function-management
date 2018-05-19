import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'src/app/login/module#LoginModule'
    },
    {
        path: 'dashboard',
        loadChildren: 'src/app/dashboard/module#DashboardModule'
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
