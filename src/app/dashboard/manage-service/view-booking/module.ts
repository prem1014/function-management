import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopupModule } from '../../../_core/modal-popup/module';

import { ViewBookingComponent } from './component'
import { route } from './route';

@NgModule({
    declarations: [ViewBookingComponent],
    imports: [
        CommonModule,
        FormsModule,
        PopupModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class ViewBookingModule {
    
}