import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  patternValidator():ValidatorFn{
    // this validator function is for the password and confirm password field
    // this validator function will check is the user password meets our requierments
    // requirements:
    // minimum password length: 8 chars
    // must contain at least one uppercase letter and one lowercase letter
    // must contain a number

    return (control: AbstractControl): {[key:string]:any} => {
      if (!control.value){
        return null!;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null! : { invalidPassword: true};
    }
  }
  MatchPassword(password:string, confirmPassword:string){
    return (formGroup:FormGroup)=> {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];
      if(!passwordControl || !confirmPasswordControl){
        return null;
      }
      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']){
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value){
        confirmPasswordControl.setErrors({ passwordMismatch:true});
      }else{
        confirmPasswordControl.setErrors(null);
      }
      return null;
    }
  }
  
  constructor() { }
}
