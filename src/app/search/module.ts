import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultModule } from '../_widgets/search-result/module';

import { SearchComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [SearchComponent],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        SearchResultModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class SearchModule {}
