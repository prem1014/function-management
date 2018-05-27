import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerDashboardComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [CustomerDashboardComponent],
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class CustomerDashboardModule {}
