import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable, onErrorResumeNext, throwError, BehaviorSubject } from 'rxjs';
import { catchError,filter, take, switchMap, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{


  private istokenRefreshing: boolean = false;
  
  tokenSubjet: BehaviorSubject<string> = new BehaviorSubject<string>(null)


  constructor(
    private injector: Injector,
    
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let authSevr =this.injector.get(AuthService);
    let currentUser = authSevr.currentUserValue;
    if (currentUser && currentUser.token) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${currentUser.token}`
            }
        });
    }

    return next.handle(request);
}









  // intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{

  //   let authSevr =this.injector.get(AuthService);
  //   let currentUser = authSevr.loggedIn();

    //ok sans le refresh token;

    // if( currentUser && token !== undefined){
    //   req = req.clone(({

    //     setHeaders : {
    //       Authorization: `Bearer ${authSevr.getToken()} `
    //     }
    //   }))
    // }
    // return next.handle(req)



    //check if the user is logging for the first time
  //   return next.handle(this.attachTokenToRequest(req))
  //   .pipe(

  //     tap((event: HttpEvent<any>)=>  {
  //       if(event instanceof HttpResponse){
  //         console.log('success');
  //       }
  //     }),
  //     catchError((err): Observable<any> =>{
  //       if(err instanceof HttpErrorResponse){
  //         switch((<HttpErrorResponse>err).status){

  //           case 401:
  //           console.log('token expired....Attempting refresh');
  //           // return this.handleHttppRespionseError(req,next);

  //           case 400:
  //           return <any>authSevr.logoutUser();

  //         }
  //       }else{
  //         return throwError(err);
  //       }
  //     })


  //   )
  // }



  // //global Error Mehtod:






  // //method to handle error response
  // private handleHttppRespionseError(req: HttpRequest<any>, next: HttpHandler){

  //   //logic 
  //   //first thing check if the token refreching is not true
  //   if(!this.istokenRefreshing){

  //     this.istokenRefreshing = true;

  //     //any existing value is set to null
  //     //Reset here so that the following request until token comes back from the refresh token Api call
  //     this.tokenSubjet.next(null);

  //     //call the api to refersh token

  //   }else{




  //   }

  // }




  // private attachTokenToRequest(req: HttpRequest<any>){
  //   let token = localStorage.getItem('access-token');
  //   return req.clone({

  //     setHeaders : {
  //       Authorization: `Bearer ${token} `
  //       }
  //   })

  // }













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