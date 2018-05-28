import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from '../../../_widgets/toaster/module';

import { AddCustomerDetailComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [AddCustomerDetailComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ToasterModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class AddCustomerDetailModule {}