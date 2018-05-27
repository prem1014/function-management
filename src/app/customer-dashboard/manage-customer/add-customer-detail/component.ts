import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-customer-detail',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class AddCustomerDetailComponent implements OnInit {

    private addCustomerForm: FormGroup;
    
    constructor(private fg: FormBuilder) {
        this.createAddCustomerDetailForm();   
        console.log(this.addCustomerForm);
    }

    private createAddCustomerDetailForm(): void {

        this.addCustomerForm = this.fg.group({
            name: ['', Validators.required ],
            mobile: ['', Validators.required ],
            emailAddress: ['', Validators.required ],
            address: ['', Validators.required ]
        });
    }

    ngOnInit() {

    }
}
