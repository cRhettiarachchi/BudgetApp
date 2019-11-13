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

}
