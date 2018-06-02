import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';
import { APIService } from './_core/api-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isLoggedIn: boolean;
  private user: object;
  constructor(private api: APIService, private router: Router) {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    if (this.user !== null) {
      this.isLoggedIn = true;
    }
    this.api.loggedInUser$.subscribe( user => {
      if (!_.isEmpty(user)) {
        this.user = user;
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  public logOut(event) {
    event.preventDefault();
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('user');
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.isLoggedIn = false;
    this.api.redirectUrl = undefined;
    this.router.navigateByUrl('/login');
  }
}
