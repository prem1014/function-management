import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { routes } from './route';
import { APIService } from './_core/api-service';
import { AuthGuard } from './_core/auth-guard';
import { ToasterService } from './_core/toaster-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [APIService, AuthGuard, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
