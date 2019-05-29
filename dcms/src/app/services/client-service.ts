import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../domain/client';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable()
export class ClientService {

    constructor(private http: HttpClient) { }

    endpoint = 'dcms-rest-jaxrs/v1';
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',

      })
    };

    // HttpClient API get() method => Fetch employees list
    getClients(): Observable<Client[]> {
      return this.http.get<Client[]>(this.endpoint + '/clients')
        .pipe(retry(1), catchError(this.handleError))
    }

    getClientsByFirstName(firstName: string): Observable<Client> {
      return this.http.get<Client>(this.endpoint + '/clients?firstname=' + firstName)
        .pipe(retry(1), catchError(this.handleError))
    }

  // Error handling
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
