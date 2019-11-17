import {Component} from '@angular/core';
import {ValuesServiceService} from '../../services/values-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-insert-income',
  templateUrl: './income-insert.component.html',
  styleUrls: ['./income-insert.component.css']
})
export class IncomeInsertComponent {
  formValid = true;
  total = 0;
  constructor(public valueService: ValuesServiceService) { } // services dependency injection

  update(form: NgForm) {  // method to read all the values from the form
    if (!form.valid) {
      this.formValid = false;
      return false;
    }
    this.valueService.updateTotal(1, form.value.amount, form.value.type);
    this.valueService.addValue(form.value.amount, form.value.description, form.value.type); // pass the values to the service
  }

  invalid() {
    let classess = {
      invalid: !this.formValid
    };
    return classess;
  }
}
