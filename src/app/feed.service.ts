import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Tweet } from './model/tweet';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  tweetList: Tweet[] = [];
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
      }
      console.log(this.tweetList);
    });
  }

  filterOut(userToFilter: string) {

    // tslint:disable-next-line:prefer-const
    let newTweets: Tweet[] = []
    for (const tweet of this.tweetList) {
      if (tweet.screenName !== userToFilter) {
        newTweets.push(tweet);
      }
    }

    console.log('before' + this.tweetList.length);
    this.tweetList = newTweets;
    console.log('after' + this.tweetList.length);

  }



}

