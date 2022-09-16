import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidatorService } from '../Core/CustomValidator/custom-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private customValidator: CustomValidatorService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', Validators.required],
      DateOfBirth: ['', Validators.required]
    },
      {
        Validators: this.customValidator.MatchPassword('password', 'confirmPassword'),
      });
  }

  get RegisterFormControl() {
    return this.registerForm.controls;
  }

  Register() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted Successfully!! \n Check the submitted values in the Browser Console');
      console.table(this.registerForm.value);
    };
  }

}