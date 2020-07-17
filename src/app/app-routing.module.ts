import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MutedUsers} from "./mutedUsers/mutedUsers.component";
import {Rss} from "./rss/rss.component";
import {NewsApiRss} from "./newsApiRss/newsApiRss.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'muted', component: MutedUsers },
  { path: 'rss', component: Rss },
  { path: 'newsApiRss', component: NewsApiRss }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
