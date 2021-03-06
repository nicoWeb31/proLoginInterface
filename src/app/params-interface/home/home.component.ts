import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '../interface.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _InterServ: InterfaceService,
  ) { }

  ngOnInit(): void {
 
    //testnumber interceptor + refreshtoken
    this._InterServ.getNumberTest().subscribe({
      next: value => console.log(value),
      error: err => console.error(err)
      
      

    })
  }

}
