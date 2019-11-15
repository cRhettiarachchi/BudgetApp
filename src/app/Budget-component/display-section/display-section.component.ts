import { Component, OnInit } from '@angular/core';
import {ValuesServiceService} from '../../services/values-service.service';
import {BudgetModel} from '../../Model/budget.model';



@Component({
  selector: 'app-display-section',
  templateUrl: './display-section.component.html',
  styleUrls: ['./display-section.component.css']
})
export class DisplaySectionComponent implements OnInit {

  allValues: BudgetModel[];

  constructor(private valueService: ValuesServiceService) {
  }

  ngOnInit() {
    this.valueService.getAllvalues();

    this.valueService.updateValues().subscribe(value => {
      this.allValues = value;
    });
    // this.allValues = [new BudgetModel(1, 1000, 'game', 'expense')];
  }

  classes(type: string) {
    let classes = {
      income: type === 'income',
      exp: type === 'expense',
      'float-left': type === 'income',
      'float-right': type === 'expense'
    };
    return classes;
  }


}
