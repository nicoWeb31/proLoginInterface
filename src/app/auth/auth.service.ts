import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
//import { SigninComponent } from './signin/signin.component';
import { Router } from '@angular/router'
import { Observable, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';


interface User{

  username: string;
  password: string;
  token?: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlSigin = 'http://api-extranet.com/oauth';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(
    private http: HttpClient,
    private router: Router,
    
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
   }
  

  //Signin methode
  Signin(username: String,password: string){

    //let headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    const body = {"grant_type":"password","username":username,"password":password,"client_id":"prosoluce_gui"};
    const bodytest = {
      "grant_type":"password",
      "username":"testuser",
      "password":"testpass",
      "client_id":"prosoluce_gui"
  }
    
    console.log(this.urlSigin);
    return this.http.post<any>(this.urlSigin,body).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;

    }));
  }
    
  // //testApiplaceholder
  // getPost(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  // }

 //loggedIn
 loggedIn(){

   return !! localStorage.getItem('access-token');
 }

 //gettoken
  getToken(){
   return localStorage.getItem('access-token');
}

// //get refresh token
// getNewRefreshToken(): Observable<any>
// {
//   let username = this.getUsername();
//   let refreshtoken = localStorage.getItem('refresh-token');
//   const grant_type = "refersh_token";
//   return this.http.post<any>(this.urlSigin,{username,refreshtoken,grant_type}).pipe(
//     map(result =>{
//       if(result && result.authToken.token){
        
//       }
//     })
//   )
// }


public get currentUserValue(): User {
  return this.currentUserSubject.value;
}



  //getUserName
  getUsername(){
    return localStorage.getItem('user');
  }

  //logout
  logoutUser(){
    // localStorage.removeItem('token');
    // localStorage.removeItem('access-token');
    // localStorage.removeItem('refresh-token');

    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);


    this.router.navigate(['/'])
  }


}