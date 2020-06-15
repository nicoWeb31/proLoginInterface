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

 
  getNumberTest(){
    return this.http.get(this.urlGetNumber);
  }



}
