import { HttpClient, HttpEvent, HttpRequest,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private httpClient: HttpClient  ) { }


uploadfile(sales: File, products: File){
  const formdata: FormData = new FormData();
  formdata.append('sales', sales);
  formdata.append('products', products);
  return this.httpClient.post('http://localhost:8080/sales/sales_post', formdata)
}

getCommissionsByDate(date : string): Observable<any[]>{
  return this.httpClient.get<any[]>(`http://localhost:8080/sales/sales/date`, {params: {date: date,}}).pipe(
    map(response => response),
    catchError(this.handleError)
  );
}
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
}
}
