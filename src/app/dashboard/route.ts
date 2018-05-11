import { Routes } from '@angular/router';
import { DashboardComponent } from './component';

export const route: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'add-new',
                loadChildren:'app/dashboard/manage-service/add-new/module#AddNewModule'
            }
        ]
    },
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'view-booking',
                loadChildren:'app/dashboard/manage-service/view-booking/module#ViewBookingModule'
            }
        ]
    }
]