import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidatorService } from '../Core/CustomValidator/custom-validator.service';
import { AccountService } from '../Core/Services/account.service';
import { Register } from '../Shared/Models/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData: Register;
  registerForm: FormGroup;
  submitted: boolean = false;
  flag: boolean = false;
  constructor(private fb: FormBuilder, private customValidator: CustomValidatorService, private accountService: AccountService, private router: Router) { }

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
    if (this.registerForm.valid) {
      // alert('Form Submitted Successfully!! \n Check the submitted values in the Browser Console');
      console.table(this.registerForm.value);
      this.registerData.firstName = this.registerForm.controls['firstName'].value;
      this.registerData.lastName = this.registerForm.controls['lastName'].value;
      this.registerData.email = this.registerForm.controls['email'].value;
      this.registerData.password = this.registerForm.controls['password'].value;
      this.registerData.dateOfBirth = this.registerForm.controls['dateOfBirth'].value;
      this.accountService.Register(this.registerData).subscribe(r => {
        if (r) {
          this.submitted = true;
          setTimeout(() => {
            this.router.navigateByUrl('/Account/Login');
          }, 5000);
        }
        else{
          this.flag = true;
        }
      });
    };
  }

}