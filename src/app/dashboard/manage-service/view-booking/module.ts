import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewBookingComponent } from './component'
import { route } from './route';

@NgModule({
    declarations: [ViewBookingComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class ViewBookingModule {
    
}