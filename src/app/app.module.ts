import { AllIncomeComponent } from './Budget-component/all-income-component/all-income.component';
import { DateComponent } from './Budget-component/date-component/date.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetTotalComponent } from './Budget-component/Total/budget-total.component';
import { IncomeInsertComponent } from './Budget-component/Insert-income/income-insert.component';
import { AllExpensesComponent } from './Budget-component/all-expenses/all-expenses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    BudgetTotalComponent,
    IncomeInsertComponent,
    DateComponent,
    AllIncomeComponent,
    AllExpensesComponent
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
