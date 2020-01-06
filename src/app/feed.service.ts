import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Tweet } from './model/tweet';

@Injectable({
  providedIn: 'root'
})
export class FeedService {


  tweetList = [];
  constructor(private http: HttpClient) {this.load();}
  load() {
    this.http.get<Tweet[]>('https://tweetbackend.herokuapp.com/getTweets'
    ).subscribe((res) => {
      console.log(res);

      for (let i = 0; ; i++) {
        if (res[i] == null) {
          break;
        }
        console.log('adding task' + res[i]);

        this.tweetList = res;
      }});
  }



}

