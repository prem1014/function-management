import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { SignUpModel } from './data-model';
import { APIService } from '../../app/_core/api-service';
import { ToasterService } from '../_core/toaster-service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class SignUpComponent implements OnInit {
    private signUpForm: FormGroup;
    public signupModel = new SignUpModel('', '', '', '', 'consumer');
    public loading: boolean;
    constructor(private fb: FormBuilder, private api: APIService, private toaster: ToasterService, private router: Router) {
        this.createSignUpForm();
    }

    ngOnInit() {}

    private createSignUpForm(): void {
        this.signUpForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            mobile: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            isServiceProvider: ['']
        });
    }

    public signup(): void {
        this.loading = true;
        this.signupModel.name = this.signUpForm.value.name;
        this.signupModel.email = this.signUpForm.value.email;
        this.signupModel.mobile = this.signUpForm.value.mobile;
        this.signupModel.password = this.signUpForm.value.password;
        if (this.signUpForm.value.isServiceProvider) {
            this.signupModel.role = 'provider';
        }
        this.api.signup(this.signupModel)
        .subscribe( (data: any) => {
            this.loading = false;
            if (data.success) {
                this.toaster.success(
                    {
                        success: true,
                        message: data.message
                    }
                );
                setTimeout((d) => {
                    this.router.navigateByUrl('/login');
                }, 5000);
            } else {
                this.toaster.error(
                    {
                        error: true,
                        message: data.message
                    }
                );
            }
        }) ;
    }
}
