import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('') 
  })

  constructor(
    private authServ: AuthService
  ) { }

  ngOnInit(): void {
  }
  
  
  
  signin(){

    if(this.authForm.invalid){
      return; // implementer les validators
    }

    this.authServ.Signin(this.authForm.value.username,this.authForm.value.password).subscribe(
      value => console.log(value)
    );
    
    //console.log(this.authForm.value.username)
  }


}
