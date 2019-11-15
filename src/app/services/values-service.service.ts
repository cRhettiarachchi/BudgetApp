import { Injectable } from '@angular/core';
import {BudgetModel} from '../Model/budget.model';
import {Observable, Subject} from 'rxjs';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValuesServiceService {

  private moneyValues: BudgetModel[] = []; // the all values array
  private subjectValue = new Subject<BudgetModel[]>(); // RXJS subject instantiation

  getUrl = 'http://localhost:8080/get/values'; // The url of the get Request
  constructor(private http: HttpClient) { } // Http client dependency injection

  getAllvalues() { // method to get all the values
    // calling the get from the url
    this.http.get<BudgetModel[]>(this.getUrl).subscribe(value => {
      this.moneyValues = value;
      this.subjectValue.next([...this.moneyValues]); // call the observable
    });

  }

  updateValues(): Observable<BudgetModel[]> {
    return this.subjectValue.asObservable();
  }

  addValue(id: number, amount: number, description: string, type: string) {
    const value: BudgetModel = new BudgetModel(id, amount, description, type);
    this.moneyValues.push(value);
    this.subjectValue.next([...this.moneyValues]);
  }
}
