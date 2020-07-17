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
  }

  ngOnInit() {
    this.newsApiRssService.load().subscribe( (results) => {
      this.articles = results;
      console.log('ngOnInit newsApiRss' + this.articles.length);
    })
  }
}
