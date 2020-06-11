import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
//import { SigninComponent } from './signin/signin.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  url = 'http://api-extranet.com/oauth'


  constructor(
    private http: HttpClient
  ) { }
  
  
  //Signin methode
  
  Signin(username: String,password: string){


    let headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    
    const body = {"grant_type":"password","username":username,"password":password,"client_id":"prosoluce_gui"};
    const body2 = {
      "grant_type":"password",
      "username":"testuser",
      "password":"testpass",
      "client_id":"prosoluce_gui"
  }
    console.log(this.url);
    return this.http.post<any>(this.url,body,{headers})
  }


  //testApiplaceholder

  getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }


}