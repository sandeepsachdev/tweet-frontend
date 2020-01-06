import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FeedService } from './feed.service';
import { HomeComponent } from './home/home.component';
import { Tweet } from './model/tweet';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
