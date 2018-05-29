import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddNewComponent } from './component';
import { route } from './route';
import { ToasterModule } from '../../../_widgets/toaster/module';

@NgModule({
    declarations: [AddNewComponent],
    imports: [
        CommonModule,
        FormsModule,
        ToasterModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class AddNewModule {}