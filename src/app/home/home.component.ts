import { Component, OnInit } from '@angular/core';
import { FeedService} from '../feed.service';
import {Tweet} from '../model/tweet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tweets: Tweet[];

  constructor(public feedService: FeedService) {
    this.tweets = feedService.tweetList;
    console.log('after load' + this.tweets.length);
  }

  ngOnInit() {
  }

  load() {
    this.tweets = this.feedService.tweetList;
  }

  filterOut(userToFilter: string) {
    this.feedService.filterOut(userToFilter);
  }
}
