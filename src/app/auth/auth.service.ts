import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
//import { SigninComponent } from './signin/signin.component';
import { Router } from '@angular/router'
import { Observable, BehaviorSubject, of} from 'rxjs';
import { map,tap,mapTo,catchError} from 'rxjs/operators';
import { Tokens } from './Models/tokens';


// interface User{

//   username: string;
//   access_token?: string;
//   refresh_token?: string;
// }



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  urlSigin = 'http://api-extranet.com/oauth';


  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;


  constructor(
    private http: HttpClient,
    private router: Router,
    
  ) {
    //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
   }
  

  //Signin methode
  Signin(user: {username: string,password: string}){

    //let headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    const body = {"grant_type":"password","username":user.username,"password":user.password,"client_id":"prosoluce_gui"};
    const bodytest = {
      "grant_type":"password",
      "username":"testuser",
      "password":"testpass",
      "client_id":"prosoluce_gui"
  }
    
    console.log(this.urlSigin);
    return this.http.post<any>(this.urlSigin,body).pipe(


      tap(access_token => this.doLoginUser(user.username, access_token)),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }


  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  
  //loggedIn
  isLoggedIn() {
    return !!this.getJwtToken();
  }

 //gettoken
 getJwtToken() {
  return localStorage.getItem(this.JWT_TOKEN);
}

private storeJwtToken(access_token: string) {
  localStorage.setItem(this.JWT_TOKEN, access_token);
}


refreshToken() {

  const body = {"grant_type":"refresh_token",
  "refresh_token":this.getRefreshToken(),
  "client_id":"prosoluce_gui"};


  return this.http.post<any>(this.urlSigin, {
    body
  }).pipe(tap((tokens: Tokens) => {
    this.storeJwtToken(tokens.access_token);
  }));

  


}


private getRefreshToken() {
  return localStorage.getItem(this.REFRESH_TOKEN);
}



  //getUserName
  getUsername(){
    return localStorage.getItem('user');
  }

  //logout
  logoutUser(){

    this.removeTokens()
    this.router.navigate(['/'])
  }


  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }


  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access_token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }


}