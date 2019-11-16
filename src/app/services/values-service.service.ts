import { Injectable } from '@angular/core';
import {BudgetModel} from '../Model/budget.model';
import {Observable, Subject} from 'rxjs';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ValuesServiceService {

  private moneyValues: BudgetModel[] = []; // the all values array
  private subjectValue = new Subject<BudgetModel[]>(); // RXJS subject instantiation


  getUrl = 'http://localhost:8080/get/values'; // The url of the get Request
  postUrl = 'http://localhost:8080/put/values';
  deleteUrl = 'http://localhost:8080/delete/value/';
  constructor(private http: HttpClient) { } // Http client dependency injection

  getAllvalues() { // method to get all the values
    // calling the get from the url
    this.http.get<any[]>(this.getUrl)
      .pipe(map((values) =>{
        return values.map(value => {
          return {
            id: value._id,
            amount: value.amount,
            description: value.description,
            type: value.type
          };
        });
      }))
      .subscribe(value => {
      this.moneyValues = value;
      this.subjectValue.next([...this.moneyValues]); // call the observable
    });

  }

  updateValues(): Observable<BudgetModel[]> {
    return this.subjectValue.asObservable();
  }

  addValue(amount: number, description: string, type: string) {
    const value: BudgetModel = new BudgetModel(amount, description, type);
    console.log(value);
    this.http.post<{message: string, id: string}>(this.postUrl, value).subscribe(response => {
      value.id = response.id;
      this.moneyValues.push(value);
      this.subjectValue.next([...this.moneyValues]);
    });
  }

  deleteValue(id: string) {
    const message = this.http.delete<{message: string}>(this.deleteUrl + id).subscribe(msg => {
      const updatedValues = this.moneyValues.filter(value => value.id !== id);
      this.moneyValues = updatedValues;
      this.subjectValue.next([...this.moneyValues]);
    });
  }
}
