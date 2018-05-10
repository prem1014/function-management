import { TestBed, async } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './component';

describe('LoginComponentTestSuite', () => {
    beforeEach(async( () => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [ReactiveFormsModule],
            providers: [FormBuilder]
        }).compileComponents();
    }));

    describe('Test Case', () => {
        it('should create loginComponent', async( () => {
            const fixture = TestBed.createComponent(LoginComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        }));
    })
});