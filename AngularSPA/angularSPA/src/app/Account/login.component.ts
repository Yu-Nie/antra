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
  loginData: Login;
  flag:boolean = false;
  constructor(private accountService: AccountService, private router:Router) { }

  ngOnInit(): void {
  }

  Login(loginForm: NgForm){
    this.loginData.email = loginForm.value.email;
    this.loginData.password = loginForm.value.password;
    this.accountService.Login(this.loginData).subscribe(L => {
      this.router.navigateByUrl('/'),
      (err: HttpErrorResponse) => {
        this.invalidLogin = true;
      }
    });
  }
}
