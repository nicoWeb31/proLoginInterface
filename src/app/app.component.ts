import { Component } from '@angular/core';
import {  AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  log: boolean

  constructor(private _authServ: AuthService){}

  
  
  
  ngOnInit() {
    
    this.log = this._authServ.isLoggedIn();

  }


  logout(){
    this._authServ.logoutUser();
  }
 
    


}
