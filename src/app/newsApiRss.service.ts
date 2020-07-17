import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Article} from './model/article';

@Injectable({
  providedIn: 'root'
})
export class NewsApiRssService {

  articleList: Article[] = [];

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get<Article[]>('https://tweetbackend.herokuapp.com/getNewsApiRss'
    //this.http.get<Item[]>('http://localhost:5000/getNewsApiRss'
    ).subscribe((res) => {

      this.articleList = res;
      console.log(this.articleList);
    });
  }

}

