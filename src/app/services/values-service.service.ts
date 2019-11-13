import { Injectable } from '@angular/core';
import {BudgetModel} from '../Model/budget.model';

@Injectable({
  providedIn: 'root'
})
export class ValuesServiceService {

  constructor() { }

  getAllvalues(){
    return [
      new BudgetModel(1, 1500.00, 'New Strings', 'expense'),
      new BudgetModel(2, 2000.00, 'Classes', 'income'),
      new BudgetModel(3, 2000.00, 'Classes', 'income'),
      new BudgetModel(4, 1500.00, 'New Gear', 'expense')
    ];
  }
}
