import {Component} from '@angular/core';
import {ValuesServiceService} from '../../services/values-service.service';

@Component({
  selector: 'app-insert-income',
  templateUrl: './income-insert.component.html',
  styleUrls: ['./income-insert.component.css']
})
export class IncomeInsertComponent {
  constructor(public valueService: ValuesServiceService) { } // services dependency injection

  update(value0: string, value1: number, value2: string) {  // method to read all the values from the form
    this.valueService.addValue(value1, value2, value0); // pass the values to the service
  }
}
