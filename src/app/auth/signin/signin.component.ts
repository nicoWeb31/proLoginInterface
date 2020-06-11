import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  token = '';


  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('') 
  })

  constructor(
    private authServ: AuthService
  ) { }

  ngOnInit(): void {
    //testgetPost
    this.authServ.getPost().subscribe({
      next: value => console.log(value)
    })
 
  }
  
  
  
  signin(){

    if(this.authForm.invalid){
      return; // implementer les validators
    }

    this.authServ.Signin(this.authForm.value.username,this.authForm.value.password).subscribe({
      
      next: value => this.token = value.access_token,
      error: err=>console.log(err)
    }
    );
    localStorage.setItem('token',this.token)
    
    
    console.log(this.authForm.value)
}


}
