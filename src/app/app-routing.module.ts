import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path: '',loadChildren: ()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
  {path: 'params',loadChildren: ()=>import('./params-interface/params-interface.module').then((m)=>m.ParamsInterfaceModule),canActivate:[AuthGuard]},
  {path:'**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
