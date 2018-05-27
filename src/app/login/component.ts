import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { APIService } from '../../app/_core/api-service';
import { LoginModel } from '../data-model/login-model';
import { ToasterService } from '../_core/toaster-service';

@Component({
    selector: 'app-login',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class LoginComponent implements OnInit {
    private userInfo;
    private loginForm: FormGroup; // -- loiginForm is of type FormGroup
    public loginModel = new LoginModel('', '');
    public loading;

    constructor(private fb: FormBuilder, private api: APIService, private router: Router, private toaster: ToasterService) {
        this.createLoginForm();
        console.log(this.loginForm);
    }
    ngOnInit() {}

    private createLoginForm (): void {
        this.loginForm = this.fb.group({
            userId: ['', Validators.required ],
            password: ['', Validators.required ]
        });
    }

    public login (): void {
        this.loading = true;
        this.loginModel.id = this.loginForm.value.userId;
        this.loginModel.password = this.loginForm.value.password;
        this.userInfo = {
            userName: 'Guest',
            role: 'provider'
        };
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        this.api.authenticateUser(this.loginModel)
        .subscribe((data: any) => {
            this.loading = false;
            if (data.success) {
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('user', JSON.stringify(data.user));
                this.router.navigateByUrl('/dashboard');
            } else {
                this.toaster.error(
                    {
                        error: true,
                        message: data.message
                    }
                );
            }
        });
    }
}
