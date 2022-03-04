import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesComponent} from "./pages.component";
import {PagesRoutingModule} from "./pages-routing.module";
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  declarations: [PagesComponent, UserComponent]
})
export class PagesModule { }
