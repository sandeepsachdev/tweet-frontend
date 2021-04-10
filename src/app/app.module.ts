import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FeedService } from './feed.service';
import { RssService } from './rss.service';
import { TweetTrendService} from './tweetTrend.service'
import { NewsApiRssService } from './newsApiRss.service';
import { HomeComponent } from './home/home.component';
import { MutedUsers } from './mutedUsers/mutedUsers.component';
import { Rss } from './rss/rss.component';
import { NewsApiRss } from './newsApiRss/newsApiRss.component';
import { TweetTrend} from "./tweetTrend/tweetTrend.component";
import { Tweet } from './model/tweet';
import { Item } from './model/item';
import {AppRoutingModule} from "./app-routing.module";
import { SafePipe } from './safe.pipe';
import {Trend} from "./model/trend";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MutedUsers,
    Rss,
    TweetTrend,
    NewsApiRss,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FeedService, RssService, NewsApiRssService, TweetTrendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
