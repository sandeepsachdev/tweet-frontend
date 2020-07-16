import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FeedService } from './feed.service';
import { RssService } from './rss.service';
import { HomeComponent } from './home/home.component';
import { MutedUsers } from './mutedUsers/mutedUsers.component';
import { Rss } from './rss/rss.component';
import { Tweet } from './model/tweet';
import { Item } from './model/item';
import {AppRoutingModule} from "./app-routing.module";
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MutedUsers,
    Rss,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FeedService, RssService],
  bootstrap: [AppComponent]
})
export class AppModule { }
