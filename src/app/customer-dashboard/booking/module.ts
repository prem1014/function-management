import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookingComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [BookingComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class BookingModule {}
