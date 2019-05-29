import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visuel } from '../domain/visuel';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Regroupement } from '../domain/regroupement';


@Injectable()
export class RegroupementService {

  constructor(private http: HttpClient) { }

  getRegroupements(): Observable<Regroupement[]> {
    return this.http.get<Regroupement[]>('../assets/data/regroupement.json')
      .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }

}
