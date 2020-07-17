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
  }

  ngOnInit() {
    this.rssService.load().subscribe((results) => {
      this.items = results;
      console.log('ngOnInit rss' + this.items);
    })
  }

}
