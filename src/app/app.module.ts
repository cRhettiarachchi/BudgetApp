
import { DateComponent } from './Budget-component/date-component/date.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetTotalComponent } from './Budget-component/Total/budget-total.component';
import { IncomeInsertComponent } from './Budget-component/Insert-income/income-insert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplaySectionComponent } from './Budget-component/display-section/display-section.component';
import { ValueComponent } from './Budget-component/display-section/value/value.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    BudgetTotalComponent,
    IncomeInsertComponent,
    DateComponent,
    DisplaySectionComponent,
    ValueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
