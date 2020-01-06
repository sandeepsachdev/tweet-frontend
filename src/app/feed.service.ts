import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  tweetList = [];
  constructor(private http: HttpClient) {this.load();}
  load() {
    this.http.post('https://tweetbackend.herokuapp.com/getTweets', {
      'param': 'param'
    }).subscribe((res) => {
      console.log(res);

      for (let i = 0; ; i++) {
        if (res[i] == null) {
          break;
        }
        console.log('adding task' + res[i]);

        this.tweetList.unshift(res[i]);
      }});
  }
}
