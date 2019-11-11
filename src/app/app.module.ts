import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetTotalComponent } from './Budget-component/Total/budget-total.component';
import {IncomeInsertComponent} from './Budget-component/Insert-income/income-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetTotalComponent,
    IncomeInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
