import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [SignUpComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ]
})

export class SignUpModule {}
