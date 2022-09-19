import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/Models/User';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  LoggedIn: boolean = false;
  user: User;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.isLoggedIn.subscribe(data => {
      this.LoggedIn = data;
    });
    this.accountService.currentUser.subscribe(data => {
      this.user = data;
    });
  }

  Logout(){
    this.accountService.Logout();
  }

}
