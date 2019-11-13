
import { DateComponent } from './Budget-component/date-component/date.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetTotalComponent } from './Budget-component/Total/budget-total.component';
import { IncomeInsertComponent } from './Budget-component/Insert-income/income-insert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayIncomeComponent } from './Budget-component/Insert-income/display-income/display-income.component';
import { DisplayExpensesComponent } from './Budget-component/Insert-income/display-expenses/display-expenses.component';



@NgModule({
  declarations: [
    AppComponent,
    BudgetTotalComponent,
    IncomeInsertComponent,
    DateComponent,
    DisplayIncomeComponent,
    DisplayExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
