import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable, onErrorResumeNext, throwError, BehaviorSubject } from 'rxjs';
import { catchError,filter, take, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private injector: Injector,
    
  ) { }


  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{

    let authSevr =this.injector.get(AuthService);
    let currentUser = authSevr.loggedIn();
    let token = localStorage.getItem('access-token');

    //ok sans le refresh token;

    // if( currentUser && token !== undefined){
    //   req = req.clone(({

    //     setHeaders : {
    //       Authorization: `Bearer ${authSevr.getToken()} `
    //     }
    //   }))
    // }
    // return next.handle(req)


  }













  // intercept(req,next){
  //   let authSevr =this.injector.get(AuthService)
  //   let tokenizedReq = req.clone({
  //     setHeaders : {
  //       Authorization: `Bearer ${authSevr.getToken()} `
  //     }
  //   })
  //   return next.handle(tokenizedReq)
  // }

  //observable
  // intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{

  //   let authSevr =this.injector.get(AuthService);

  //   return next.handle(req.clone(this.setHeaders()))
  //   .pipe(

  //     //si catcth error
  //     catchError(err =>{
  //       if(req.url.includes('username') || req.url.includes('refresh-token')){
  //         if(req.url.includes('refresh-token')) authSevr.logoutUser();
  //         return throwError(err);
  //       }

  //       switch(err.status){
  //         case 401: return this.handele401Error(req,next);
  //         default: return throwError(err);
  //       }


  //     })


  //   )
  // }

//a implementer err 401
  // private handele401Error(req: HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{

  //   let authSevr =this.injector.get(AuthService);
  //   let _refershing = new BehaviorSubject<boolean>(false);

  //   if(!_refershing.getValue()){
  //     _refershing.next(true);
  //     _refershing.subscribe(()=> _refershing.next(false));

  //   }

  //   return _refershing.pipe(
  //     filter( refreshing => refreshing === false), take(1),
  //     switchMap(() => authSevr.getToken() ? next.handle(req.clone(this.setHeaders())) : throwError(new Error('not Authorized')))
  //   )


  // }


  //set headrer
  // private setHeaders(){
  //   let authSevr =this.injector.get(AuthService)
  //   return {
  //     setHeaders : {
  //             Authorization: `Bearer ${authSevr.getToken()} `
  //           }
  //   }
  // }


}


//implementer cette methode