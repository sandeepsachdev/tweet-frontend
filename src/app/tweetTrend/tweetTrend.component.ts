import { Component, OnInit } from '@angular/core';
import { TweetTrendService} from '../tweetTrend.service';
import {Trend} from '../model/trend';

@Component({
  selector: 'tweetTrend',
  templateUrl: './tweetTrend.component.html',
  styleUrls: ['./tweetTrend.component.css']
})
export class TweetTrend implements OnInit {
  trends: Trend[];

  constructor(public tweetTrendService: TweetTrendService) {
  }

  ngOnInit() {
    this.tweetTrendService.load().subscribe((results) => {
      this.trends = results;
      console.log('ngOnInit rss' + this.trends);
    })
  }

  isShowTweet: boolean = false ; // hidden by default

  showTweets() {
    this.isShowTweet = ! this.isShowTweet;
  }

}
