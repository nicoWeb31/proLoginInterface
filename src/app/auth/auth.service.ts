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


    //let headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    
    const body = (`client_id=${username}&client_secret=${password}&grant_type=client_credentials`);
    console.log(this.url);
    return this.http.post<any>(this.url,body)
  }


}