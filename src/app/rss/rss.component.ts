import { Component, OnInit } from '@angular/core';
import { RssService} from '../rss.service';
import {Item} from '../model/item';

@Component({
  selector: 'rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css']
})
export class Rss implements OnInit {
  items: Item[];

  constructor(public rssService: RssService) {
    this.items = rssService.itemList;
    console.log('after load rss' + this.items.length);
  }

  ngOnInit() {
    this.rssService.load();
    console.log('ngOnInit rss' + this.items.length);
  }


}
