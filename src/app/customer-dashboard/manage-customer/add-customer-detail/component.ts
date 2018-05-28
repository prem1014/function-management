import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from "../../../_core/api-service";
import { ToasterService } from "../../../_core/toaster-service";

@Component({
    selector: 'app-add-customer-detail',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class AddCustomerDetailComponent implements OnInit {

    private addCustomerForm: FormGroup; 
    public customerDetails: any;
    
    constructor(private fg: FormBuilder, private api: APIService, private toasterService: ToasterService) {
        this.createAddCustomerDetailForm();   
        console.log(this.addCustomerForm);
    }

    private createAddCustomerDetailForm(): void {

        this.addCustomerForm = this.fg.group({
            name: ['', Validators.required ],
            mobile: ['', [Validators.required] ],
            emailAddress: ['', [Validators.required, Validators.email] ],
            address: ['', Validators.required ]
        });
    }

    ngOnInit() {

    }

    saveCustomerDetail() {
        console.log(this.addCustomerForm.value);
        this.customerDetails = this.addCustomerForm.value;
        this.customerDetails.id = this.customerDetails.name + '_' + Math.floor(Math.random() * 20);
        this.api.saveCustomerDetail(this.customerDetails).subscribe((data: any) => {
            if(data.success) {
                console.log(data);
                //alert(data.message);     
                this.toasterService.success({ 
                    success: true,
                    message: data.message
                })
                this.addCustomerForm.reset();
            } else {
                //alert(data.message);   
                this.toasterService.error(
                    {
                        error: true,
                        message: data.message
                    }
                );
            }    
        });
    }
}
