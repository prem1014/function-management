import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class LoginModule {}