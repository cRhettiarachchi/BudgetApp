import { Component } from '@angular/core';
import {AllIncome} from './all-income.component.module';

@Component({
    selector: 'app-all-income',
    templateUrl: './all-income.component.html',
    styleUrls: ['./all-income.component.css']
})
export class AllIncomeComponent {

    income: AllIncome[] = [
        new AllIncome(1000.00, "new strings")
    ];
}
