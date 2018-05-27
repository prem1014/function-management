import { Routes } from '@angular/router';
import { CustomerDashboardComponent } from './component';
 import { AuthGuard } from '../_core/auth-guard';
export const route: Routes = [
    {
        path: '',
        component: CustomerDashboardComponent,
        children: [
            {
                path: 'add-customer-detail',
                //canActivate: [AuthGuard],
                loadChildren: 'src/app/customer-dashboard/manage-customer/add-customer-detail/module#AddCustomerDetailModule'
            }
        ]
    }
];
