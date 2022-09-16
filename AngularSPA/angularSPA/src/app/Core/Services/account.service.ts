import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Login } from 'src/app/Shared/Models/Login';
import { map } from 'rxjs';
import { Register } from 'src/app/Shared/Models/Register';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  private currentUserSubject = new BehaviorSubject<any>({} as any);
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  Login(loginData: Login): Observable<boolean> {
    return this.httpClient.post<boolean>("https://localhost:7062/api/Account/login", loginData).pipe(map((response: any) => {
      if(response) {
        localStorage.setItem('token', response.token);
        return true;
      }
      return false;
    }))
  }

  Logout() {
    localStorage.removeItem('token');
  }

  Register() {

  }
}
