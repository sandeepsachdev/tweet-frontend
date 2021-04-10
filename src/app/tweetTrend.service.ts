import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Trend} from './model/trend';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TweetTrendService {

  constructor(private http: HttpClient) {}

  load() : Observable<Trend[]> {
    return this.http.get<Trend[]>('https://tweetbackend.herokuapp.com/getTweetTrends'
    //return this.http.get<Trend[]>('http://localhost:5000/getTweetTrends'
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message)

    } else {
      console.log(error.status)
    }
    return throwError(
      console.log('Something is wrong!'));
  };

}

