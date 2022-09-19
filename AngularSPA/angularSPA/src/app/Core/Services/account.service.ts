import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Login } from 'src/app/Shared/Models/Login';
import { map } from 'rxjs';
import { Register } from 'src/app/Shared/Models/Register';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/Shared/Models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  //Login component will call the login method in account service, the login method will push the values into the subject,
  //The private subjects can only be updated or set from inside this service, so that way its better for security since the other
  //components can just use the public observables to get the data without any chance to update the data. For example the header component
  //can subscribe to the isLoggedIn observable and get the latest value on whether the user is currently logged in or not, since the observable 
  //exposes the data in the subject but protects it from being updated outside of this service. This is a design pattern known as the Publish and Subscribe method

  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  jwtHelper = new JwtHelperService();

  Login(loginData: Login): Observable<boolean> {
    return this.httpClient.post<boolean>("https://localhost:7062/api/Account/login", loginData).pipe(map((response: any) => {
      if (response) {
        localStorage.setItem('token', response.token);
        this.populateUserInfoFromToken();
        return true;
      }
      return false;
    }));
  }

  Logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next({} as User);
    this.isLoggedInSubject.next(false);
  }

  Register(registerData: Register): Observable<boolean> {
    return this.httpClient.post<boolean>("https://localhost:7062/api/Account/Register", registerData);
  }

  populateUserInfoFromToken() {
    var tokenValue = localStorage.getItem('token');

    if (tokenValue && !this.jwtHelper.isTokenExpired(tokenValue)) {
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);
      this.isLoggedInSubject.next(true);
      this.currentUserSubject.next(decodedToken);
    };
  }

  validateJWT() {
    var tokenValue = localStorage.getItem('token');
    if (tokenValue != null && !this.jwtHelper.isTokenExpired(tokenValue)) {
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);
      this.isLoggedInSubject.next(true);
      this.currentUserSubject.next(decodedToken);
    };
  }

}
