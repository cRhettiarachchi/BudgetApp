import { Injectable } from '@angular/core';
import {BudgetModel} from '../Model/budget.model';
import {Observable} from 'rxjs';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValuesServiceService {

  getUrl = 'http://localhost:8080/get/values';
  constructor(private http: HttpClient) { }

  getAllvalues(): Observable<BudgetModel[]> {
    return this.http.get<BudgetModel[]>(this.getUrl);
  }
}
