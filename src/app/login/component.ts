import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../data-model/login-model';

@Component({
    selector: 'app-login',
    templateUrl: './component.html',
    styleUrls: ['./component.css']
})

export class LoginComponent implements OnInit {
    private loginForm: FormGroup; // -- loiginForm is of type FormGroup
    public loginModel = new LoginModel('', '');

    constructor(private fb: FormBuilder){
        this.createLoginForm();
        console.log(this.loginForm);
    }
    ngOnInit(){}

    private createLoginForm (): void {
        this.loginForm = this.fb.group({
            userId: ['', Validators.required ],
            password: ['', Validators.required ]
        })
    }

    public login (): void {
        this.loginModel.userId = this.loginForm.value.userId;
        this.loginModel.password = this.loginForm.value.password;
    }
}