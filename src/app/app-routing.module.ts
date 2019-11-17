import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './Budget-component/welcome/welcome.component';
import {DateComponent} from './Budget-component/date-component/date.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'use', component: DateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
