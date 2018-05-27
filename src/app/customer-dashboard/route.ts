import { Routes } from '@angular/router';
import { CustomerDashboardComponent } from './component';
 import { AuthGuard } from '../_core/auth-guard';
export const route: Routes = [
    {
        path: '',
        component: CustomerDashboardComponent,
        children: [
            /*{
                path: 'add-new',
                canActivate: [AuthGuard],
                loadChildren: 'src/app/dashboard/manage-service/add-new/module#AddNewModule'
            },
            {
                path: 'view-booking',
                canActivate: [AuthGuard],
                loadChildren: 'src/app/dashboard/manage-service/view-booking/module#ViewBookingModule'
            }*/
        ]
    }
];
