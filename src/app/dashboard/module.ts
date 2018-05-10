import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [DashboardComponent],
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class DashboardModule {}