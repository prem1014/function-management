import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './component';
import { route } from './route';
import { ToasterModule } from '../_widgets/toaster/module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        ToasterModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class DashboardModule {}
