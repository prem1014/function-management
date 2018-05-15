import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './component';

import { route } from './route';
import { NgModel } from '@angular/forms/src/directives/ng_model';

@NgModule({
declarations:[UpdateComponent],
imports:
[   
    CommonModule,
    FormsModule,    
    RouterModule.forChild(route)
],
exports:[RouterModule]

})
export class UpdateModule{}