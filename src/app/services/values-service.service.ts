import { Injectable } from '@angular/core';
import {BudgetModel} from '../Model/budget.model';
import {Observable, Subject} from 'rxjs';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {TotalModel} from '../Model/total.model';


@Injectable({
  providedIn: 'root'
})
export class ValuesServiceService {

  private moneyValues: BudgetModel[] = []; // the all values array
  private total: TotalModel;
  private subjectValue = new Subject<BudgetModel[]>(); // RXJS subject instantiation
  private subjectTotal = new Subject<TotalModel>();
  private totId = '5dd2b6c0050a10465cc8ef52';


  getUrl = 'http://localhost:8080/get/values'; // The url of the get Request
  postUrl = 'http://localhost:8080/put/values';
  deleteUrl = 'http://localhost:8080/delete/value/';
  getTotalUrl = 'http://localhost:8080/total/get/';
  constructor(private http: HttpClient) { } // Http client dependency injection

  getAllvalues() { // method to get all the values
    // calling the get from the url
    this.http.get<any[]>(this.getUrl)
      .pipe(map((values) => {
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
  getTotal() {
    this.http.get<any>(this.getTotalUrl + this.totId)
      .subscribe(value => {
        this.total = value;
        console.log('this is values ' + this.total);
        this.subjectTotal.next({...this.total});
      });
    // this.http.get<{ total: number }>(this.getTotalUrl).subscribe(response => {
    //   total = response.total;
    // });
  }

  updateValues(): Observable<BudgetModel[]> {
    return this.subjectValue.asObservable();
  }

  retrieveTotal(): Observable<TotalModel> {
    return this.subjectTotal.asObservable();
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
  updateTotal(tot: number, type: string) {
    if (type === 'income') {
      this.total.total = (+this.total.total) + (+tot);
      console.log('after the if condition ' + typeof(this.total));
    } else {
      this.total.total -= tot;
    }
    this.http.patch<{ message: string }>('http://localhost:8080/total/put/' + this.totId, this.total).subscribe(msg => {
      console.log(msg.message);
      this.subjectTotal.next(this.total);
    });
    // this.total = type === 'income' ? this.total + total : this.total - total;
  }

  deleteValue(id: string) {
    const message = this.http.delete<{message: string}>(this.deleteUrl + id).subscribe(msg => {
      const updatedValues = this.moneyValues.filter(value => value.id !== id);
      this.moneyValues = updatedValues;
      this.subjectValue.next([...this.moneyValues]);
    });
    this.deleteTotal(id);
  }

  deleteTotal(id: string){
    if(this.moneyValues.find(p => p.id === id).type === 'income') {
      this.total.total -= this.moneyValues.find(p => p.id === id).amount;
    } else {
      this.total.total = (+this.total.total) + (+this.moneyValues.find(p => p.id === id).amount);
    }
    this.http.patch<{ message: string }>('http://localhost:8080/total/put/' + this.totId, this.total).subscribe(msg => {
      console.log(msg.message);
      this.subjectTotal.next(this.total);
    });
  }
}
