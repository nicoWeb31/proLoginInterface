import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParamsInterfaceModule } from './params-interface/params-interface.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { TokenInterceptorService } from './token-interceptor.service';



 
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    ParamsInterfaceModule,
    AppRoutingModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
