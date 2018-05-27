import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './component';
import { route } from './route';
import { ToasterModule } from '../_widgets/toaster/module';

@NgModule({
    declarations: [SignUpComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        ToasterModule,
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ]
})

export class SignUpModule {}
