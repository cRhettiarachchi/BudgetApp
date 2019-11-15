import {Component} from '@angular/core';
import {ValuesServiceService} from '../../services/values-service.service';

@Component({
  selector: 'app-insert-income',
  templateUrl: './income-insert.component.html',
  styleUrls: ['./income-insert.component.css']
})
export class IncomeInsertComponent {
  constructor(public valueService: ValuesServiceService){}

  update(value0: string, value1: number, value2: string) {
    this.valueService.addValue(1, value1, value2, value0);
  }
}
