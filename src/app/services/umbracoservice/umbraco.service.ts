  import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { NavController, NavParams } from "@ionic/angular";
import { catchError } from 'rxjs/operators';
/*
@Injectable({
  providedIn: 'root'
})
export class UmbracoService {
  private apiUrl = 'https://localhost:44357/umbraco/api/music'; // Removed extra slash

  constructor(private http: HttpClient) {}

  getSongs(page: number = 1, pageSize: number = 100): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    let result: Observable<any> = this.http.get<any>(`${this.apiUrl}/getsongs`, { params }).pipe(
      catchError(this.handleError)
    );




    return result;

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
*/

@Injectable({
  providedIn: 'root'
})
export class UmbracoService {
  /*
  private apiUrl = 'https://localhost:44357/umbraco/api/musiccontroller/get_music'; // Removed extra slash




  constructor(private http: HttpClient) {

  }




  getSongs(page: number = 1, pageSize: number = 100): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(this.apiUrl, { params }).pipe(
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
    return throwError('Something bad happened; please try again later.');
  }


*/
  private apiUrl = 'https://localhost:44357/umbraco/api/musiccontroller/get_music';

  constructor(private http: HttpClient) {}

  getMusic(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}



