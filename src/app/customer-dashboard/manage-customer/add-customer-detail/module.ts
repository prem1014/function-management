import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddCustomerDetailComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [AddCustomerDetailComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class AddCustomerDetailModule {}