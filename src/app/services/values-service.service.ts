import { Injectable } from '@angular/core';
import {BudgetModel} from '../Model/budget.model';
import {Observable, Subject} from 'rxjs';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValuesServiceService {

  private moneyValues: BudgetModel[] = [];
  private subjectValue = new Subject<BudgetModel[]>();

  getUrl = 'http://localhost:8080/get/values';
  constructor(private http: HttpClient) { }

  getAllvalues(): Observable<BudgetModel[]> {
    return this.http.get<BudgetModel[]>(this.getUrl);
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
