import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Error401Component } from './component';
import { route } from './route';

@NgModule({
    declarations: [Error401Component],
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class Error401Module {}
