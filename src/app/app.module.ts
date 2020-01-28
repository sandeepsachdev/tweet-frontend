import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FeedService } from './feed.service';
import { HomeComponent } from './home/home.component';
import { MutedUsers } from './mutedUsers/mutedUsers.component';
import { Tweet } from './model/tweet';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MutedUsers
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
