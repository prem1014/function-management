import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PopupComponent } from './component'

@NgModule({
    declarations: [PopupComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [PopupComponent]
})

export class PopupModule {
    
}