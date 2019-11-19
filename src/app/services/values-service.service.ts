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

 /* All the URL variables  */
  getUrl = 'http://localhost:8080/get/values';
  postUrl = 'http://localhost:8080/put/values';
  deleteUrl = 'http://localhost:8080/delete/value/';
  getTotalUrl = 'http://localhost:8080/total/get/';
  putTotalUrl = 'http://localhost:8080/total/put/';
  /* ----------------------------------------------- */

  constructor(private http: HttpClient) { }

  getAllvalues() { // method to get all the values
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
  } // end of get all budget values
  getTotal() { // Method to retrieve the total
    this.http.get<any>(this.getTotalUrl + this.totId)
      .subscribe(value => {
        this.total = value;
        this.subjectTotal.next({...this.total});
      });
  } // End of retrieve total

  updateValues(): Observable<BudgetModel[]> { // method for the observable return
    return this.subjectValue.asObservable(); // this will pass an oberservale
  }

  retrieveTotal(): Observable<TotalModel> {
    return this.subjectTotal.asObservable();
  }

  addValue(amount: number, description: string, type: string) { // Add a budget value to the server
    const value: BudgetModel = new BudgetModel(amount, description, type); // Read values and create new object
    this.http.post<{message: string, id: string}>(this.postUrl, value).subscribe(response => { // post call
      value.id = response.id; // update the value id with the returning id
      this.moneyValues.push(value); // push the budget object to the array
      this.subjectValue.next([...this.moneyValues]); // pass it as an observable
    });
  } // end of the add value method
  updateTotal(tot: number, type: string) {
    if (type === 'income') { // to update the total value of the valueServices
      this.total.total = (+this.total.total) + (+tot);
    } else {
      this.total.total -= tot;
    }
    this.updateTot(); // call the updateTot to update the total
  }
  updateTot() { // created this method because the patch call was redundant
    this.http.patch<{ message: string }>( this.putTotalUrl + this.totId, this.total).subscribe(msg => {
      this.subjectTotal.next(this.total);
    });
  }

  deleteValue(id: string) { // method to delete a value
    const message = this.http.delete<{message: string}>(this.deleteUrl + id).subscribe(msg => {
      const updatedValues = this.moneyValues.filter(value => value.id !== id);
      this.moneyValues = updatedValues;
      this.subjectValue.next([...this.moneyValues]);
    });
    this.deleteTotal(id);
  }

  deleteTotal(id: string) { // change update value on deleting a component
    if(this.moneyValues.find(p => p.id === id).type === 'income') {
      this.total.total -= this.moneyValues.find(p => p.id === id).amount;
    } else {
      this.total.total = (+this.total.total) + (+this.moneyValues.find(p => p.id === id).amount);
    }
    this.updateTot();
  }
}
