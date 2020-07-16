import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Tweet} from './model/tweet';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  rawList: Tweet[] = [];
  tweetList: Tweet[] = [];

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
  this.http.get<Tweet[]>('https://tweetbackend.herokuapp.com/getTweets'
    // this.http.get<Tweet[]>('http://localhost:5000/getTweets'
    ).subscribe((res) => {

      this.rawList = res;
      this.tweetList = [];

      let filteredUsers: string[] = [];
      if (localStorage.getItem('filteredUsers')) {
        filteredUsers = JSON.parse(localStorage.getItem('filteredUsers'));
      }

      for (const tweet of this.rawList ) {
        if (!filteredUsers.includes(tweet.screenName)) {
          this.tweetList.push(tweet);
        }
      }
      console.log(this.tweetList);
    });
  }

  filterOut(userToFilter: string) {

    let filteredUsers: string[] = [];
    if (localStorage.getItem('filteredUsers')) {
      filteredUsers = JSON.parse(localStorage.getItem('filteredUsers'));
    }

    // tslint:disable-next-line:prefer-const
    let newTweets: Tweet[] = [];
    for (const tweet of this.rawList) {
      if (!filteredUsers.includes(tweet.screenName)) {
        newTweets.push(tweet);
      }
    }

    console.log('before' + this.tweetList.length);
    this.tweetList = newTweets;
    console.log('after' + this.tweetList.length);
  }


  update() {

    let filteredUsers: string[] = [];
    if (localStorage.getItem('filteredUsers')) {
      filteredUsers = JSON.parse(localStorage.getItem('filteredUsers'));
    }

    // tslint:disable-next-line:prefer-const
    let newTweets: Tweet[] = [];
    for (const tweet of this.rawList) {
      if (!filteredUsers.includes(tweet.screenName)) {
        newTweets.push(tweet);
      }
    }

    console.log('before' + this.tweetList.length);
    this.tweetList = newTweets;
    console.log('after' + this.tweetList.length);
  }
}

