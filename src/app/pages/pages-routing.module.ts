import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  {  path: '', component: PagesComponent,
    children: [
      
      { path: 'user', component: UserComponent }
      
      ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
