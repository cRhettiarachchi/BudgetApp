import {Component} from '@angular/core';


@Component({
  selector: 'app-budget-total',
  templateUrl: './budget-total.component.html',
  styleUrls: ['./budget-total.component.css']
})
export class BudgetTotalComponent {

  currentDate = new Date();
  total = 0;
}
