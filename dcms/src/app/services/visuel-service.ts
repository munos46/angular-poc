import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visuel } from '../domain/visuel';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable()
export class VisuelService {

  constructor(private http: HttpClient) { }

  endpoint = 'dcms-rest-jaxrs/v1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',

    })
  };

  getVisuels(): Observable<Visuel[]> {
    return this.http.get<Visuel[]>(this.endpoint + '/visuels')
      .pipe(retry(1), catchError(this.handleError))
  }

  postVisuel(visuel: Visuel): Observable<Visuel> {
    return this.http.post(this.endpoint + '/visuels', visuel)
      .pipe(retry(1), catchError(this.handleError))
  }

  getVisuelById(pId: string): Observable<Visuel> {
    return this.http.get<Visuel>(this.endpoint + '/visuels/' + pId)
      .pipe(retry(1), catchError(this.handleError))
  }

  deleteViuelById(pId: string): Observable<Visuel> {
    return this.http.delete(this.endpoint + '/visuels/' + pId)
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
