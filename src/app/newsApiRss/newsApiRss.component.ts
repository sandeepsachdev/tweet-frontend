import { Component, OnInit } from '@angular/core';
import { NewsApiRssService} from '../newsApiRss.service';
import {Item} from '../model/item';
import {Article} from "../model/article";

@Component({
  selector: 'newsApiRss',
  templateUrl: './newsApiRss.component.html',
  styleUrls: ['./newsApiRss.component.css']
})
export class NewsApiRss implements OnInit {
  articles: Article[];

  constructor(public newsApiRssService: NewsApiRssService) {
    this.articles = newsApiRssService.articleList;
    console.log('after load newsApiRss' + this.articles.length);
  }

  ngOnInit() {
    this.newsApiRssService.load();
    console.log('ngOnInit newsApiRss' + this.articles.length);
  }


}
