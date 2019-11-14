import { Component, OnInit, Input } from '@angular/core';
import {BudgetModel} from '../../../Model/budget.model';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  @Input() values: BudgetModel;
  constructor() { }

  ngOnInit() {
  }
  selectClasses(type) {
   let classes = {
     btn: true,
     'float-right': true,
     'btn-inc': type === 'income',
     'btn-exp': type === 'expense'
   };
   return classes;
  }

}
