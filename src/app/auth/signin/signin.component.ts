import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  token = '';
  refreshToken ='';



  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('') 
  })

  constructor(
    private _authServ: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // //testgetPost
    // this._authServ.getPost().subscribe({
    // next: value => console.log(value)
    // })
 
  }
  
  
  
  signin(){

    if(this.authForm.invalid){
      return; // implementer les validators
    }

    this._authServ.Signin(this.authForm.value).subscribe({
      
      next: (value) => {
        // this.token = value.access_token;
        // this.refreshToken = value.refresh_token;

        //creation de la session
        // localStorage.setItem('access-token',this.token);
        // localStorage.setItem('refresh-token',this.refreshToken);
        // localStorage.setItem('user',this.authForm.value.username);

        console.log(value);

        this._router.navigate(['/params']);


      
      },
      error: err=>console.log(err)
    }
    );
    
    
    console.log(this.authForm.value)
}


}
