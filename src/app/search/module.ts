import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [SearchComponent],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class SearchModule {}
