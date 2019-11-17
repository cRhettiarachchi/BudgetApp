import {Component, OnInit} from '@angular/core';
import {ValuesServiceService} from '../../services/values-service.service';


@Component({
  selector: 'app-budget-total',
  templateUrl: './budget-total.component.html',
  styleUrls: ['./budget-total.component.css']
})
export class BudgetTotalComponent implements OnInit {

  currentDate = new Date();
  total: number;
  constructor(private valueService: ValuesServiceService) {}
  ngOnInit() {
    console.log('onInit works in total');
    this.valueService.getTotal();
    this.valueService.retrieveTotal().subscribe((total) => {
      console.log(this.total);
      this.total = total;
    });
  }
}
