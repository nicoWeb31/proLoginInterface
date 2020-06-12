import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  urlGetNumber = 'http://api-extranet.com/numbers'

  constructor(
    private http: HttpClient
  ) { }

  //testApiplaceholder
  getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getNumberTest(){
    return this.http.get(this.urlGetNumber);
  }



}
