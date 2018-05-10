import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/login/module#LoginModule'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/module#DashboardModule'
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
]