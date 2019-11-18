import {Component, OnInit} from '@angular/core';
import {ValuesServiceService} from '../../services/values-service.service';
import {TotalModel} from '../../Model/total.model';


@Component({
  selector: 'app-budget-total',
  templateUrl: './budget-total.component.html',
  styleUrls: ['./budget-total.component.css']
})
export class BudgetTotalComponent implements OnInit {

  currentDate = new Date();
  total: TotalModel;
  id = '5dd2b6c0050a10465cc8ef52';
  constructor(private valueService: ValuesServiceService) {}
  ngOnInit() {
    console.log('onInit works in total');
    this.valueService.getTotal();
    this.valueService.retrieveTotal().subscribe((total) => {
      this.total = total;
      console.log('The total component' + this.total);
    });
  }
}
