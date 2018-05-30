import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './component';

@NgModule({
    declarations: [SearchResultComponent],
    imports: [CommonModule],
    exports: [SearchResultComponent]
})

export class SearchResultModule {}