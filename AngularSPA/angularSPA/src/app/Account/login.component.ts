import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Login } from '../Shared/Models/Login';
import { AccountService } from '../Core/Services/account.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false;
  loginData: Login = {
    email: "",
    password: "",
  };
  flag:boolean = false;
  constructor(private accountService: AccountService, private router:Router) { }

  ngOnInit(): void {
  }

  Login(loginForm: NgForm){
    this.loginData.email = loginForm.controls['email'].value;
    this.loginData.password = loginForm.controls['password'].value;
    this.accountService.Login(this.loginData).subscribe(data => {
      if (data){
        this.flag = true;
        setTimeout(() => {
          this.router.navigateByUrl('/');
        }, 5000);
      }
      else{
        this.invalidLogin = true;
      }
    });
  }
}
