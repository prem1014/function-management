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
                loadChildren:'app/dashboard/manage-service/add-new/module#AddNewModule'
            },
            {
                path: 'view-booking',
                canActivate: [AuthGuard],
                loadChildren:'app/dashboard/manage-service/view-booking/module#ViewBookingModule'
            }
        ]
    }
]