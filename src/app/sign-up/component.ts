import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class SignUpComponent implements OnInit {
    private signUpForm: FormGroup;
    constructor(private fb: FormBuilder) {
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
}
