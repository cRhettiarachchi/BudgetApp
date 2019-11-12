import {Component} from '@angular/core';

@Component({
  selector: 'app-insert-income',
  templateUrl: './income-insert.component.html',
  styleUrls: ['./income-insert.component.css']
})
export class IncomeInsertComponent {

  amount = 0;
  disc = '';

  update(value1: number, value2:string){
    alert('update is called');
    this.amount = value1;
    this.disc = value2;

    console.log(this.amount + " " + this.disc);
  }
}
