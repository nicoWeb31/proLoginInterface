import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamsInterfaceRoutingModule } from './params-interface-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ParamsInterfaceRoutingModule
  ],

})
export class ParamsInterfaceModule { }
