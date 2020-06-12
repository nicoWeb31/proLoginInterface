import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
//import { SigninComponent } from './signin/signin.component';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlSigin = 'http://api-extranet.com/oauth'


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  

  //Signin methode
  Signin(username: String,password: string){

    let headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    const body = {"grant_type":"password","username":username,"password":password,"client_id":"prosoluce_gui"};
    const bodytest = {
      "grant_type":"password",
      "username":"testuser",
      "password":"testpass",
      "client_id":"prosoluce_gui"
  }
    
    console.log(this.urlSigin);
    return this.http.post<any>(this.urlSigin,body)
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

  //getUserName
  getUsername(){
    return localStorage.getItem('user');
  }

  //logout
  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    this.router.navigate(['/'])
  }


}