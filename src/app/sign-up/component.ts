import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
    public signupModel = new SignUpModel('', '', '', '', '');
    public loading: boolean;
    constructor(private fb: FormBuilder, private api: APIService, private toaster: ToasterService) {
        this.createSignUpForm();
    }

    ngOnInit() {}

    private createSignUpForm(): void {
        this.signUpForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            mobile: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    public signup(): void {
        this.loading = true;
        this.signupModel.name = this.signUpForm.value.name;
        this.signupModel.email = this.signUpForm.value.email;
        this.signupModel.mobile = this.signUpForm.value.mobile;
        this.signupModel.password = this.signUpForm.value.password;
        this.signupModel.role = 'provider';
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
