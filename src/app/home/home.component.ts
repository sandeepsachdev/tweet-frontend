import { Component, OnInit } from '@angular/core';
import { FeedService} from '../feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private feedService: FeedService) { }

  ngOnInit() {
  }

  load() {
    this.feedService.load();
  }

}
