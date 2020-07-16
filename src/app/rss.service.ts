import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Item} from './model/item';

@Injectable({
  providedIn: 'root'
})
export class RssService {

  itemList: Item[] = [];

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get<Item[]>('https://tweetbackend.herokuapp.com/getSmhRss'
    //this.http.get<Item[]>('http://localhost:5000/getSmhRss'
    ).subscribe((res) => {

      this.itemList = res;
      console.log(this.itemList);
    });
  }

}

