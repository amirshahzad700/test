import { NgModule } from '@angular/core';
// import {AppComponent} from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: ' ',
    loadChildren: () => PagesModule,
  },
  // { path: '', component: AppComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
