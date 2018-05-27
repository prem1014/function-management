import { Routes } from '@angular/router';
import { DashboardComponent } from './component';
 import { AuthGuard } from '../_core/auth-guard';
export const route: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'add-new',
                canActivate: [AuthGuard],
                loadChildren: 'src/app/dashboard/manage-service/add-new/module#AddNewModule'
            },
            {
                path: 'view-booking',
                canActivate: [AuthGuard],
                loadChildren:'src/app/dashboard/manage-service/view-booking/module#ViewBookingModule'
            },
            {
                path: 'update',
                loadChildren:'src/app/dashboard/manage-service/update/module#UpdateModule'
            }
        ]
    }
];
