import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Article} from './model/article';
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Item} from "./model/item";

@Injectable({
  providedIn: 'root'
})
export class NewsApiRssService {

  constructor(private http: HttpClient) {
  }

  load() : Observable<Article[]> {
    //return this.http.get<Article[]>('https://tweetbackend.herokuapp.com/getNewsApiRss'
    return this.http.get<Article[]>('http://localhost:5000/getNewsApiRss'
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

