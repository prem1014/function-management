import { Component } from '@angular/core';

@Component({
    selector: 'app-401-error',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class Error401Component {
    public errorMessage;
    constructor() {
        this.errorMessage = 'Access denied. Please authenticate with valid role';
    }
}

